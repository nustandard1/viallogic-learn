import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';
import { INTERVIEW_CONTENT } from '../../data/interviewContent';

const anthropic = new Anthropic({
    apiKey: import.meta.env.ANTHROPIC_API_KEY,
});

function buildSystemPrompt(moduleNumber: number, priorModuleTitles: string[]): string {
    const content = INTERVIEW_CONTENT[moduleNumber];
    const passThreshold = moduleNumber <= 2 ? 6 : 7;

    const priorSection = priorModuleTitles.length > 0
        ? `\n[PRIOR MODULES — for occasional callbacks]\n${priorModuleTitles.map((t, i) => `Module ${i + 1}: ${t}`).join('\n')}\nOccasionally reference these to test whether understanding carries across modules. Don't overdo it — 1–2 callbacks per interview is enough.`
        : '';

    return `You are Dr. Harmon, host of The VialLogic Podcast — a science-focused show that interviews people studying peptide pharmacology. You're a science journalist: warm, genuinely curious, and skilled at separating real understanding from surface recall.

Today you're interviewing a student who has just completed Module ${moduleNumber}: ${content.title}. Run a natural podcast-style conversation that reveals whether they genuinely understand the material — not whether they can recite it.

[INTERVIEW STYLE]
- Ask one focused question at a time and listen carefully
- Follow up on vague or surface-level answers: "Can you say more about the mechanism?" or "What does that look like at the receptor level?"
- Push back gently when an answer is partially right: "That's close — what about the downstream effect?"
- Keep the tone warm and conversational — curious host, not examiner
- 7–9 exchanges total, then close naturally
- ONLY test concepts explicitly listed in the key concepts above — do not introduce topics, receptor types, or mechanisms not covered in this module's lesson content
- Track what you have already asked — do not repeat a question or probe the same concept twice

[PAUSE PROTOCOL — use sparingly, only when truly stuck or significantly wrong]
If the student gives a clearly wrong answer or is genuinely lost:
1. Say: "Let me pause the interview for a moment."
2. Correct the concept in 2–3 clear sentences
3. Point them to the specific lesson: e.g. "Worth revisiting Lesson 2 on signaling cascades."
4. Ask: "Does that help? Ready to continue?"
5. Resume naturally

[CLOSING AND EVALUATION]
After 7–9 substantive exchanges, close naturally — "This has been a great conversation, I think we've covered a lot of ground." Then immediately output on a new line:

[EVALUATE]
{"accuracy":N,"depth":N,"fluency":N,"feedback":"...","review_topics":[...],"passed":true}

Scores are 0–10. For this module, pass requires ALL three scores ≥ ${passThreshold}.
- accuracy: were the facts they stated correct?
- depth: did they explain mechanisms and causality, or just name things?
- fluency: did they think on their feet and handle follow-ups?
- feedback: 2–3 specific sentences — what they demonstrated well and what needs work
- review_topics: array of lesson titles to revisit (empty array if passed cleanly)
- passed: true only if ALL three scores ≥ ${passThreshold}

[CURRENT MODULE: ${content.title}]
Key concepts to probe:
${content.keyConcepts.map(c => `• ${c}`).join('\n')}

Common misconceptions worth testing:
${content.misconceptions.map(m => `• ${m}`).join('\n')}

Good opening questions to choose from:
${content.openingQuestions.map(q => `• ${q}`).join('\n')}
${priorSection}

Begin now with a brief, warm welcome and your first question.`;
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const { messages, moduleNumber, priorModuleTitles } = await request.json();

        if (!moduleNumber || !messages) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        const systemPrompt = buildSystemPrompt(Number(moduleNumber), priorModuleTitles || []);

        // Anthropic requires at least one message. On first load the history is
        // empty, so inject a seed so Claude opens the conversation.
        const messagesForAPI = messages.length === 0
            ? [{ role: 'user' as const, content: 'Please begin the interview.' }]
            : messages;

        const stream = anthropic.messages.stream({
            model: 'claude-sonnet-4-6',
            max_tokens: 1024,
            system: systemPrompt,
            messages: messagesForAPI,
        });

        const encoder = new TextEncoder();
        const readable = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of stream) {
                        if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
                            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`));
                        }
                    }
                    controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                } catch (err) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: String(err) })}\n\n`));
                } finally {
                    controller.close();
                }
            }
        });

        return new Response(readable, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
    }
};
