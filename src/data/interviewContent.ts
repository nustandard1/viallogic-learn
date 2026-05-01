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
        title: "Evaluating Evidence & Quality",
        keyConcepts: [
            "Evidence hierarchy: in vitro < animal model < human observational < human RCT < systematic review/meta-analysis",
            "Animal model limitations — dose extrapolation between species is not linear; rodents have faster baseline healing rates and different metabolic profiles",
            "In vitro findings do not predict in vivo results — cell cultures lack pharmacokinetics, distribution, metabolism, and systemic context",
            "Publication bias: negative and null results are rarely published, skewing the apparent evidence base toward positive findings",
            "Mechanistic plausibility ≠ clinical evidence — a sound mechanism doesn't prove a clinical effect",
            "Key study quality markers: sample size, blinding (single vs double), randomization, control group, pre-registration, funding source",
            "Statistical significance (p < 0.05) ≠ clinical significance — effect size and confidence intervals matter as much as p-values",
            "COA = Certificate of Analysis from an independent third-party lab — vendor-produced purity sheets are not COAs",
            "Legitimate COA elements: lot number matching the vial, testing date, purity percentage, analytical methodology (HPLC for purity, MS for identity), and accredited lab name",
            "ISO/IEC 17025 is the international standard for testing labs — accreditation is granted by external auditors (ANAB or A2LA in the US) and can be verified in their public databases",
            "HPLC confirms purity; MS confirms molecular identity — both are needed for full compound verification",
            "Red flags: no lot number, no methodology, no verifiable third-party lab, COA formatted with vendor branding",
        ],
        misconceptions: [
            "That a mouse or rat study proves human efficacy",
            "That 'studies show' without specifying the evidence type is meaningful",
            "That statistical significance equals clinical significance or large effect size",
            "That a vendor-provided purity certificate is equivalent to a third-party COA",
            "That ISO 17025 is self-certified — it requires an external audit by a nationally recognized accrediting body",
            "That HPLC alone confirms a compound's identity — HPLC confirms purity, MS confirms what the compound actually is",
        ],
        openingQuestions: [
            "Someone sends you a study showing a peptide doubled tendon healing speed in rats. Walk me through how you evaluate that finding.",
            "A vendor shows you a COA with 99.2% purity, the compound name, and their company logo — no lot number, no methodology, no lab name. What's your assessment?",
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
        title: "GHRH Analogs — CJC-1295, Sermorelin & Tesamorelin",
        keyConcepts: [
            "All three are GHRH analogs — bind the GHRH receptor on somatotroph cells of the anterior pituitary to stimulate endogenous GH release",
            "DAC (Drug Affinity Complex) technology in CJC-1295: reactive ester covalently binds albumin in vivo, extending half-life from ~30 min to ~7 days",
            "Sermorelin: shortest half-life (~10–20 min), most closely preserves natural pulsatile GH secretion",
            "Tesamorelin: FDA-approved GHRH analog (brand name Egrifta) for HIV-associated lipodystrophy; stabilized with trans-3-hexenoic acid, half-life ~26 min",
            "Mod GRF 1-29 = CJC-1295 without DAC — often mislabeled in research supply chains, dramatically different half-life",
            "None of these introduce exogenous GH — they stimulate the pituitary to release your own",
            "Pulsatility trade-off: longer half-life = more convenient dosing but flatter GH profile; shorter = more physiologic pulsatility",
        ],
        misconceptions: [
            "That CJC-1295 with DAC and Mod GRF 1-29 are interchangeable — half-life difference is dramatic",
            "That these compounds introduce exogenous GH",
            "That tesamorelin is only relevant for HIV patients — its mechanism is identical to other GHRH analogs",
        ],
        openingQuestions: [
            "What does the DAC modification actually do to CJC-1295, and what does that mean for how you'd use it vs. sermorelin?",
            "Tesamorelin is FDA-approved — what does that tell you about its evidence base compared to other research peptides in this category?",
        ],
    },
    10: {
        title: "GHRPs — Ipamorelin, GHRP-2, GHRP-6 & Hexarelin",
        keyConcepts: [
            "All four are ghrelin receptor agonists — act on GHS-R1a, distinct from the GHRH receptor; synergistic with GHRH analogs",
            "Ipamorelin: most selective — produces a clean GH pulse with minimal cortisol and prolactin elevation; no significant appetite stimulation",
            "GHRP-2: stronger GH release than ipamorelin but moderate cortisol and prolactin elevation",
            "GHRP-6: significant appetite stimulation via ghrelin pathway; notable cortisol and prolactin elevation",
            "Hexarelin: most potent GH release of the group, but also the least selective — significant cortisol, prolactin, and some cardiac receptor activity; not a first-line choice for most applications",
            "The selectivity spectrum: ipamorelin → GHRP-2 → GHRP-6 → hexarelin (cleanest to least clean)",
            "Synergy with GHRH analogs: GHRH primes the cell (cAMP pathway); GHRPs trigger immediate release (calcium pathway) — combination is multiplicative",
        ],
        misconceptions: [
            "That all GHRPs are equivalent — receptor selectivity and side-effect profiles differ significantly across the family",
            "That hexarelin's potency makes it superior — more GH release with worse side-effect profile is not always the better trade",
            "That GHRPs and GHRH analogs are redundant — they bind different receptors and push different machinery",
        ],
        openingQuestions: [
            "Walk me through the GHRP family from cleanest to least clean — what specifically differs between them?",
            "Why is ipamorelin typically the preferred GHRP despite not being the most potent option?",
        ],
    },
    11: {
        title: "GLP-1 Analogs — Semaglutide, Tirzepatide & Retatrutide",
        keyConcepts: [
            "GLP-1 (glucagon-like peptide-1) is released from the gut after eating — suppresses appetite, slows gastric emptying, stimulates insulin release",
            "Native GLP-1 has a ~2-minute half-life (destroyed by DPP-4); analogs are engineered for weekly dosing via lipidation and amino acid substitutions",
            "Semaglutide (Ozempic/Wegovy): GLP-1 receptor agonist; most widely prescribed; weight loss of 15–17% in clinical trials",
            "Tirzepatide (Mounjaro/Zepbound): dual GIP/GLP-1 agonist — adds glucose-dependent insulinotropic polypeptide receptor activation; ~20–22% weight loss",
            "Retatrutide: triple agonist (GLP-1 + GIP + glucagon receptor) — currently in late-phase trials; early data showing ~24% weight loss; 41 amino acids, subject to ongoing FDA classification dispute",
            "Compounding controversy: FDA allowed compounding of semaglutide during shortage; as branded supply normalized, FDA moved to restrict compounding — ongoing legal battles",
            "Side effects: nausea, vomiting, gastroparesis with extended use; muscle mass loss is a documented concern with aggressive weight loss",
        ],
        misconceptions: [
            "That semaglutide and tirzepatide work the same way — tirzepatide adds GIP receptor activation which changes the metabolic profile",
            "That these are 'just weight loss drugs' — GLP-1 receptors are present in the heart, brain, and kidneys; cardioprotective and neuroprotective effects are being actively studied",
            "That stopping the drug maintains the results — weight regain is common without lifestyle changes",
        ],
        openingQuestions: [
            "Explain why tirzepatide tends to produce more weight loss than semaglutide even though both target GLP-1 receptors.",
            "What makes retatrutide mechanistically distinct from the others — and why is its amino acid count commercially significant?",
        ],
    },
    12: {
        title: "Cognitive Peptides — Semax & Selank",
        keyConcepts: [
            "Semax: synthetic analog of ACTH(4-7); upregulates BDNF (brain-derived neurotrophic factor) and NGF; delivered intranasally for CNS targeting",
            "BDNF is the brain's primary growth factor — drives neuroplasticity, neuronal survival, and learning/memory consolidation",
            "Selank: synthetic analog of tuftsin; anxiolytic and nootropic effects; modulates GABAergic and serotonergic tone without sedation",
            "Both are nasal sprays — intranasal delivery bypasses the blood-brain barrier more efficiently than injection for CNS-targeted peptides",
            "Semax evidence base: strongest in neuroprotection and cognitive recovery post-injury (stroke, TBI); nootropic evidence in healthy subjects more limited",
            "Selank evidence base: Russian clinical data on anxiety and cognitive performance; limited Western RCT data",
        ],
        misconceptions: [
            "That intranasal delivery is less effective than injection for brain-targeted peptides — for CNS targeting it's often superior",
            "That 'nootropic' means proven cognitive enhancement in healthy people — most strong evidence is in recovery from injury or deficit states",
        ],
        openingQuestions: [
            "Why is intranasal the preferred route for Semax and Selank rather than subcutaneous injection?",
            "What is BDNF and why does upregulating it matter for brain function?",
        ],
    },
    13: {
        title: "Mitochondrial & Metabolic Peptides — MOTS-C & SS-31",
        keyConcepts: [
            "MOTS-C: encoded in mitochondrial DNA (not nuclear DNA) — unusual origin for a peptide; activates AMPK pathway, improving insulin sensitivity and metabolic flexibility",
            "AMPK is the cell's energy sensor — activated when cellular energy is low; drives glucose uptake, fat oxidation, and mitochondrial biogenesis",
            "SS-31 (elamipretide): targets the inner mitochondrial membrane; reduces oxidative stress, improves mitochondrial function, cardioprotective",
            "Both compounds address mitochondrial dysfunction — the common denominator in aging, metabolic disease, and exercise performance decline",
            "Evidence base: primarily animal and early human studies; SS-31 has Phase II cardiac data; MOTS-C research is newer and more preliminary",
            "NAD+ (as NMN or NR precursors): not a peptide, but frequently discussed alongside these compounds as a mitochondrial support strategy",
        ],
        misconceptions: [
            "That MOTS-C is a standard peptide — its mitochondrial DNA origin makes it biologically unusual",
            "That these compounds are established therapeutics — evidence is promising but preliminary compared to the GH or GLP-1 categories",
        ],
        openingQuestions: [
            "What does it mean that MOTS-C is encoded in mitochondrial DNA rather than nuclear DNA — why is that unusual?",
            "Explain what AMPK does and why activating it matters for metabolic health.",
        ],
    },
};
