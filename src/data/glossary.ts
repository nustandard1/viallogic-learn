export interface GlossaryEntry {
  term: string;
  short: string;
  long?: string;
}

export const glossary: Record<string, GlossaryEntry> = {
  peptide: {
    term: "Peptide",
    short: "A short chain of amino acids linked by peptide bonds. Biologically: ~2–50 AAs. FDA/pharma definition: ≤40 AAs.",
    long: "The biological and regulatory definitions differ. In textbooks, proteins typically start above ~50 amino acids. The FDA draws the line at 40 — molecules at or below that threshold are regulated as peptides, above it as biologics. Most research peptides are well under that ceiling.",
  },
  "amino-acid": {
    term: "Amino acid",
    short: "The building block of peptides and proteins. Twenty standard ones exist.",
  },
  "peptide-bond": {
    term: "Peptide bond",
    short: "The covalent bond linking the carboxyl of one amino acid to the amino group of the next, releasing water.",
  },
  receptor: {
    term: "Receptor",
    short: "A protein that binds a specific molecule and triggers a cellular response.",
    long: "Peptide receptors live on the cell surface because peptides are too large and charged to cross the membrane.",
  },
  gpcr: {
    term: "GPCR",
    short: "G-protein coupled receptor — a 7-pass transmembrane protein. Largest peptide-receptor family.",
    long: "About a third of all FDA-approved drugs target GPCRs. Most appetite, GH-axis, and metabolic peptides act here.",
  },
  rtk: {
    term: "RTK",
    short: "Receptor tyrosine kinase. Dimerizes on binding and phosphorylates itself.",
    long: "Insulin and IGF-1 receptors are RTKs — the family that drives growth and proliferation.",
  },
  affinity: {
    term: "Affinity",
    short: "How tightly a ligand binds its receptor. Lower Kd / EC50 = tighter binding.",
  },
  selectivity: {
    term: "Selectivity",
    short: "How much a ligand prefers one receptor over similar ones.",
  },
  potency: {
    term: "Potency",
    short: "How little drug is needed to produce an effect. Function of affinity + signal efficiency.",
  },
  agonist: {
    term: "Agonist",
    short: "A ligand that binds and activates a receptor.",
  },
  antagonist: {
    term: "Antagonist",
    short: "A ligand that binds but does not activate — blocks others from activating.",
  },
  "partial-agonist": {
    term: "Partial agonist",
    short: "A ligand that binds and produces a sub-maximal response even at full occupancy.",
  },
  "biased-agonism": {
    term: "Biased agonism",
    short: "Activating one downstream pathway from a receptor while leaving another quiet.",
    long: "Why ipamorelin is 'cleaner' than GHRP-6 — same receptor, different downstream selectivity.",
  },
  camp: {
    term: "cAMP",
    short: "Cyclic AMP. Second messenger produced when Gs-coupled GPCRs activate adenylyl cyclase.",
  },
  "second-messenger": {
    term: "Second messenger",
    short: "An intracellular signaling molecule (cAMP, IP3, DAG, Ca²⁺) released in response to receptor activation.",
  },
  pka: {
    term: "PKA",
    short: "Protein kinase A. Activated by cAMP; phosphorylates downstream targets including the transcription factor CREB.",
  },
  pkc: {
    term: "PKC",
    short: "Protein kinase C. Activated by DAG and calcium downstream of Gq-coupled GPCRs.",
  },
  plc: {
    term: "PLC",
    short: "Phospholipase C. Cleaves PIP2 into IP3 and DAG; Gq-coupled GPCRs activate it.",
  },
  ip3: {
    term: "IP3",
    short: "Inositol trisphosphate. Releases calcium from the endoplasmic reticulum.",
  },
  "pi3k-akt": {
    term: "PI3K/Akt",
    short: "A kinase cascade downstream of RTKs and some GPCRs. Drives protein synthesis and growth via mTOR.",
  },
  mapk: {
    term: "MAPK",
    short: "Mitogen-activated protein kinase. RTK-driven cascade leading to ERK and gene expression changes.",
  },
  "half-life": {
    term: "Half-life (t½)",
    short: "Time for plasma concentration to drop by half. Shapes dosing frequency and pulsatility.",
    long: "After roughly 5 half-lives, only ~3% of a dose remains. Native peptides often have minute-scale half-lives.",
  },
  bioavailability: {
    term: "Bioavailability",
    short: "Fraction of an administered dose that reaches systemic circulation intact.",
  },
  pharmacokinetics: {
    term: "Pharmacokinetics",
    short: "What the body does to the drug — absorption, distribution, metabolism, excretion (ADME).",
  },
  pharmacodynamics: {
    term: "Pharmacodynamics",
    short: "What the drug does to the body — receptor binding, downstream effects.",
  },
  "dpp-4": {
    term: "DPP-4",
    short: "Dipeptidyl peptidase-4. A plasma enzyme that cleaves residues from the N-terminus of many peptides.",
    long: "GLP-1 analogs are engineered specifically to evade DPP-4 — that's how we get from a 2-minute native molecule to a weekly drug.",
  },
  pegylation: {
    term: "PEGylation",
    short: "Attaching a polyethylene glycol chain to a peptide to shield it from enzymes and slow clearance.",
  },
  lipidation: {
    term: "Lipidation",
    short: "Attaching a fatty acid to a peptide so it binds albumin and rides along its long half-life.",
  },
  dac: {
    term: "DAC (Drug Affinity Complex)",
    short: "A reactive group on CJC-1295 that covalently binds albumin, extending half-life from minutes to ~1 week.",
  },
  pulsatility: {
    term: "Pulsatility",
    short: "The rhythmic on/off pattern of natural hormone release. Often lost when half-life is engineered long.",
  },
  desensitization: {
    term: "Desensitization",
    short: "Reduced cellular response after persistent receptor stimulation. Receptors get phosphorylated, internalized, or downregulated.",
  },
  tachyphylaxis: {
    term: "Tachyphylaxis",
    short: "Rapid-onset tolerance — receptor response drops within hours to days of continuous stimulation.",
  },
  ghrh: {
    term: "GHRH",
    short: "Growth hormone-releasing hormone. Hypothalamic peptide that stimulates GH release via Gs-coupled GPCRs.",
  },
  ghrp: {
    term: "GHRP",
    short: "Growth hormone-releasing peptide. Synthetic ghrelin-mimetic that triggers GH release via Gq-coupled GPCRs.",
  },
  ligand: {
    term: "Ligand",
    short: "Any molecule that binds a receptor. The peptide is the ligand; the receptor is the target.",
    long: "A general-purpose word for 'the thing that binds.' A peptide drug, a hormone, even a small-molecule pill — all are ligands when they bind their target receptor.",
  },
  phosphorylation: {
    term: "Phosphorylation",
    short: "Tagging a protein with a phosphate group — the cell's most common on/off switch.",
    long: "Enzymes called kinases attach phosphates; phosphatases remove them. Whether a protein is phosphorylated often determines whether it's active, where it goes, or what it binds.",
  },
  kinase: {
    term: "Kinase",
    short: "An enzyme that adds phosphate groups to other proteins, usually flipping them on or off.",
  },
  "transcription-factor": {
    term: "Transcription factor",
    short: "A protein that binds DNA and turns specific genes on or off.",
    long: "Most signaling cascades end at a transcription factor — that's how a signal at the cell surface becomes a change in what proteins the cell makes.",
  },
  albumin: {
    term: "Albumin",
    short: "The most abundant protein in your blood. Acts as a 'taxi' for many drugs and hormones.",
    long: "Albumin's long half-life (~19 days) is what makes it a useful ride: peptides engineered to bind albumin (lipidation, DAC) inherit much of that lifespan.",
  },
  conformation: {
    term: "Conformation",
    short: "The 3D shape of a protein. Many proteins have multiple conformations and switch between them.",
  },
  exocytosis: {
    term: "Exocytosis",
    short: "The physical release event where a cell dumps stored cargo (hormones, neurotransmitters) into the bloodstream by fusing storage vesicles with the membrane.",
  },
  residue: {
    term: "Residue",
    short: "A single amino acid within a peptide or protein chain. 'A 51-residue protein' means 51 amino acids long.",
  },
  transmembrane: {
    term: "Transmembrane",
    short: "Spanning the cell membrane — one end outside the cell, one end inside. The architecture of every peptide receptor.",
  },
  endogenous: {
    term: "Endogenous",
    short: "Made naturally by the body. The opposite is exogenous — introduced from outside (e.g., an injection).",
  },
};
