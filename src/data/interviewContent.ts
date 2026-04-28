export interface ModuleInterviewContent {
    title: string;
    keyConcepts: string[];
    misconceptions: string[];
    openingQuestions: string[];
}

export const INTERVIEW_CONTENT: Record<number, ModuleInterviewContent> = {
    1: {
        title: "Peptide Pharmacology Fundamentals",
        keyConcepts: [
            "Peptides are short amino acid chains — biologically defined as roughly 2–50 amino acids, but the FDA and pharmaceutical industry use ≤40 amino acids as the regulatory threshold. The distinction matters in this space because most research peptides are designed and classified under that pharma definition, not the textbook biology one.",
            "Peptides act on cell-surface receptors (GPCRs, ion channels, enzyme-linked) — they cannot enter cells directly",
            "Receptor binding triggers intracellular signaling cascades that amplify a tiny signal into large biological effects",
            "Half-life is short due to proteases (especially DPP-4), renal clearance, and peptide instability in plasma",
            "Structural modifications — PEGylation, DAC technology, N-terminal acetylation — extend half-life by protecting from cleavage or binding albumin",
            "Full vs partial agonist distinction: efficacy (maximal response) vs potency (dose required)",
            "Biased agonism: same receptor, different downstream pathways depending on the ligand's conformation",
            "Receptor downregulation and desensitization explain why continuous high-dose use produces diminishing returns",
        ],
        misconceptions: [
            "That peptides work like small molecules by diffusing into cells",
            "That a longer half-life is always better or more effective",
            "That more receptor activation always equals more effect — ignores downregulation",
            "Confusing the peptide compound with its receptor (e.g., calling BPC-157 'a GPCR')",
            "That oral peptides can never work (some can with the right formulation or modifications)",
        ],
        openingQuestions: [
            "Walk me through what happens at the molecular level from the moment a peptide is injected to when it's producing an effect inside a tissue.",
            "Why can't most peptides just be taken as a pill?",
            "You have two compounds — one with a 20-minute half-life, one with a 7-day half-life. What are the real trade-offs between them beyond just dosing convenience?",
        ],
    },
    2: {
        title: "Routes, Reconstitution & Dosing",
        keyConcepts: [
            "Subcutaneous vs intramuscular vs intranasal — different bioavailability profiles and onset kinetics",
            "Reconstitution math: concentration = total peptide amount ÷ volume of BAC water added",
            "BAC water uses benzyl alcohol as a bacteriostatic preservative; sterile water has no preservative and should not be used for multi-draw vials",
            "First-pass metabolism in the liver destroys most orally administered peptides before they reach systemic circulation",
            "U-100 insulin syringe: 1 mL = 100 units; dose in units = (desired dose ÷ concentration) × 100",
        ],
        misconceptions: [
            "That 'units' on a syringe are the same as mcg or mg — they are a volume measurement",
            "That adding more BAC water makes the peptide weaker — concentration changes but total peptide doesn't",
            "That IM and subQ produce identical pharmacokinetic profiles for all peptides",
        ],
        openingQuestions: [
            "Someone hands you a 5mg vial of BPC-157 and 2mL of BAC water. Walk me through how you'd reconstitute it and calculate a 250mcg dose.",
            "Why does route of administration matter beyond just convenience — what actually changes biologically?",
        ],
    },
    3: {
        title: "Healing & Repair Pathways",
        keyConcepts: [
            "Angiogenesis — new blood vessel formation; critical for delivering oxygen and growth factors to injured tissue",
            "Fibroblast activation and collagen synthesis cascade — the structural rebuild phase",
            "Three phases of healing: inflammatory (0–72h), proliferative (days–weeks), remodeling (weeks–months)",
            "Key growth factors: VEGF (angiogenesis), TGF-β (fibrosis/repair), FGF (fibroblast proliferation)",
            "Stem cell mobilization and homing — signals that recruit progenitor cells to injury sites",
            "Chronic inflammation impairs healing — the distinction between acute (necessary) and chronic (destructive) inflammation",
        ],
        misconceptions: [
            "That anti-inflammatory always equals pro-healing — early inflammation is a required phase",
            "That collagen synthesis is rapid — structural remodeling takes weeks to months",
            "That pain reduction = tissue repair (NSAIDs can mask pain while impairing the repair process)",
        ],
        openingQuestions: [
            "Describe the cellular sequence in the first 72 hours after a significant tendon injury.",
            "Why would a peptide that promotes angiogenesis be relevant to recovery?",
        ],
    },
    4: {
        title: "The Growth Hormone Axis",
        keyConcepts: [
            "Axis: hypothalamus → GHRH/somatostatin → anterior pituitary → GH release → liver → IGF-1 production",
            "GHRH stimulates GH release; somatostatin is the counter-regulatory brake",
            "GHRP/ghrelin receptor agonists act via a completely different receptor than GHRH — they are synergistic, not redundant",
            "GH is released in pulses, not continuously — pulsatility is physiologically important for anabolic and lipolytic effects",
            "IGF-1 is the primary anabolic mediator downstream of GH; most of GH's growth effects are mediated by IGF-1",
            "Negative feedback: elevated GH and IGF-1 suppress further GHRH release and increase somatostatin tone",
        ],
        misconceptions: [
            "That GHRPs and GHRHs do the same thing — they bind different receptors and are synergistic",
            "That continuous GH elevation is the goal — pulsatility matters for receptor sensitivity and safety",
            "That IGF-1 and GH are the same or interchangeable",
        ],
        openingQuestions: [
            "Explain the growth hormone axis to me like I've never heard of it — start from the brain and work down.",
            "Why do experienced researchers typically combine a GHRH analog with a GHRP rather than just taking more of one compound?",
        ],
    },
    5: {
        title: "Reading Peptide Research",
        keyConcepts: [
            "Evidence hierarchy: in vitro < animal model < human observational < human RCT",
            "Animal model limitations — dose extrapolation between species is not linear; rats metabolize differently",
            "In vitro findings do not predict in vivo results — cell cultures lack pharmacokinetics, distribution, metabolism",
            "Publication bias: negative and null results are rarely published, skewing the apparent evidence base",
            "Mechanistic plausibility ≠ clinical evidence — a sound mechanism doesn't prove a clinical effect",
            "Key study quality markers: sample size, blinding (single vs double), randomization, control group, conflict of interest",
        ],
        misconceptions: [
            "That a mouse or rat study proves human efficacy",
            "That 'studies show' without specifying the evidence type is meaningful",
            "That absence of published human trials means a compound is ineffective",
            "That a large sample size alone means a study is high quality",
        ],
        openingQuestions: [
            "Someone sends you a study showing a peptide doubled muscle mass in rodents. Walk me through how you evaluate that.",
            "What's the difference between mechanistic evidence and clinical evidence — and why does it matter practically?",
        ],
    },
    6: {
        title: "BPC-157 — Body Protection Compound",
        keyConcepts: [
            "Isolated from human gastric juice — body protection compound, endogenous origin",
            "Primary mechanism: nitric oxide system modulation — upregulates eNOS, increases NO production",
            "Angiogenesis promotion via VEGF pathway — drives new vessel formation at injury sites",
            "Strong tendon-to-bone healing evidence in animal models — fibroblast and tenocyte activation",
            "Systemic vs local effects: significant debate, but oral and IV administration shows systemic effects in animals",
            "GABAergic and dopaminergic modulation — CNS effects observed in addiction and neuroprotection research",
        ],
        misconceptions: [
            "That it's purely anti-inflammatory — it actively promotes repair, not just suppresses inflammation",
            "That systemic effects are impossible given the short half-life",
        ],
        openingQuestions: [
            "What makes BPC-157 mechanistically different from just taking an anti-inflammatory?",
            "Walk me through the nitric oxide connection — why does that matter for tissue repair?",
        ],
    },
    7: {
        title: "TB-500 (Thymosin Beta-4 Fragment)",
        keyConcepts: [
            "Actin sequestration — binds G-actin, regulates actin polymerization and cell motility",
            "Systemic distribution — does not stay localized like BPC-157; reaches distant tissues via circulation",
            "Stem cell mobilization — promotes migration of progenitor cells to injury sites",
            "Synergy with BPC-157: complementary mechanisms — TB-500 handles systemic signaling and stem cell recruitment, BPC-157 handles local vascular and tissue repair",
            "Anti-inflammatory effects via NF-κB pathway modulation",
        ],
        misconceptions: [
            "That TB-500 and BPC-157 are redundant — they work through distinct mechanisms",
            "That TB-500 is only useful for musculoskeletal injury",
        ],
        openingQuestions: [
            "How does TB-500's mechanism differ from BPC-157, and why does that make them a logical pairing?",
            "What does actin sequestration actually mean in the context of tissue repair?",
        ],
    },
    8: {
        title: "GHK-Cu — The Copper Peptide",
        keyConcepts: [
            "Tripeptide that chelates copper — carries Cu²⁺ into tissue; copper is essential for collagen crosslinking and enzyme function",
            "Gene expression reset — GHK-Cu has been shown to upregulate hundreds of repair-related genes and downregulate inflammatory pathways",
            "Stimulates collagen, elastin, and glycosaminoglycan synthesis",
            "Plasma GHK levels decline ~60% between age 20 and 60 — declining levels correlate with loss of regenerative capacity",
            "Strong topical evidence in skin aging; injectable evidence more limited but mechanistically sound",
        ],
        misconceptions: [
            "That it only works topically",
            "That the copper component is just a carrier and not functionally active",
        ],
        openingQuestions: [
            "Why is copper biologically relevant to GHK-Cu's mechanism — what is it actually doing?",
            "What's the significance of declining GHK plasma levels with age?",
        ],
    },
    9: {
        title: "CJC-1295 & Sermorelin — GHRH Analogs",
        keyConcepts: [
            "Both are GHRH analogs — bind the GHRH receptor on somatotroph cells of the anterior pituitary",
            "DAC (Drug Affinity Complex) technology in CJC-1295: reactive ester binds covalently to serum albumin, extending half-life from minutes to ~7 days",
            "Sermorelin: shorter half-life (~10–20 min), preserves pulsatile GH secretion pattern more closely",
            "Mod GRF 1-29 = CJC-1295 without DAC; often mislabeled in research supply chains",
            "Both require the pituitary to be functional — they stimulate release of endogenous GH, not exogenous GH",
        ],
        misconceptions: [
            "That DAC CJC-1295 and Mod GRF 1-29 are interchangeable — dramatically different half-lives",
            "That these compounds introduce exogenous GH — they stimulate the pituitary to release your own",
        ],
        openingQuestions: [
            "What does the DAC modification actually do to CJC-1295 at the molecular level?",
            "Why would someone choose sermorelin over CJC-1295 with DAC even though it requires more frequent dosing?",
        ],
    },
    10: {
        title: "Ipamorelin & GHRP Selectivity",
        keyConcepts: [
            "Ghrelin receptor agonist — acts on GHS-R1a (growth hormone secretagogue receptor), distinct from GHRH receptor",
            "Selectivity profile: ipamorelin produces a clean GH pulse with minimal cortisol and prolactin elevation vs GHRP-2 and GHRP-6",
            "Synergy with GHRH analogs: GHRH increases the number of somatotrophs that respond; GHRP amplifies the per-cell GH release — the combination is multiplicative",
            "No significant appetite stimulation (unlike GHRP-6 which causes notable ghrelin-mediated hunger)",
            "GH pulse pattern from ipamorelin approximates natural secretion better than broad-acting GHRPs",
        ],
        misconceptions: [
            "That all GHRPs are equivalent — receptor selectivity and side-effect profiles differ significantly",
            "That ipamorelin and CJC-1295 are redundant — they act on entirely different receptors",
        ],
        openingQuestions: [
            "Why is ipamorelin considered the 'cleanest' GHRP, and what does that mean mechanistically?",
            "Explain the synergy between ipamorelin and a GHRH analog — why is the combination more than the sum of its parts?",
        ],
    },
};
