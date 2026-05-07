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
  somatostatin: {
    term: "Somatostatin",
    short: "Hypothalamic inhibitory peptide that suppresses GH release. The counter-regulatory brake opposing GHRH.",
    long: "Somatostatin is released from the hypothalamus and acts on the same somatotroph cells that GHRH stimulates — but it blocks GH secretion instead of triggering it. When GH and IGF-1 rise, negative feedback increases somatostatin tone, reducing subsequent GH pulses. Some GHRPs partially overcome somatostatin inhibition, adding to their synergy with GHRH analogs.",
  },
  "igf-1": {
    term: "IGF-1",
    short: "Insulin-like Growth Factor 1. Produced by the liver in response to GH. The primary anabolic mediator of most GH effects.",
    long: "Most of what is attributed to 'GH' in terms of muscle growth, collagen synthesis, and cell proliferation is actually mediated by IGF-1 downstream. GH itself drives lipolysis and some direct effects, but the anabolic cascade goes GH → liver → IGF-1 → IGF-1 receptor (an RTK) → PI3K/Akt/mTOR → protein synthesis. Serum IGF-1 is the standard clinical proxy for GH axis activity because it integrates multiple GH pulses over days.",
  },
  ghrelin: {
    term: "Ghrelin",
    short: "The endogenous 'hunger hormone' produced by the stomach. Also the natural ligand for the GHS-R1a receptor that GHRPs mimic.",
    long: "Ghrelin is the endogenous agonist of the GHS-R1a (growth hormone secretagogue receptor). Its primary known role is appetite regulation, but it also triggers GH release via the Gq/calcium pathway — which is why GHRPs (synthetic ghrelin mimetics) produce both GH release and, in less selective compounds like GHRP-6, appetite stimulation.",
  },
  somatotroph: {
    term: "Somatotroph",
    short: "The anterior pituitary cell type that synthesizes and secretes growth hormone. The target cell of GHRH and GHRPs.",
  },
  "negative-feedback": {
    term: "Negative feedback",
    short: "The mechanism by which elevated GH and IGF-1 suppress further GHRH release and increase somatostatin tone — keeping the axis in balance.",
    long: "Negative feedback is how the GH axis prevents runaway secretion. Elevated GH acts directly on the hypothalamus to reduce GHRH release. Elevated IGF-1 does the same, and also increases somatostatin tone. This is why continuous exogenous GH or very long-acting GHRH analogs can suppress the body's own axis signaling over time.",
  },
  lipolysis: {
    term: "Lipolysis",
    short: "The breakdown of stored fat (triglycerides) into free fatty acids. A direct GH effect that does not require IGF-1 as an intermediary.",
    long: "GH has two broad categories of action: IGF-1-mediated anabolic effects (protein synthesis, cell growth) and direct metabolic effects (lipolysis, insulin antagonism). Lipolysis is direct — GH binds its receptor on fat cells and activates hormone-sensitive lipase, releasing free fatty acids into circulation. This is why GH has a reputation for body-composition effects beyond just muscle: it actively mobilizes fat stores.",
  },
  "anterior-pituitary": {
    term: "Anterior pituitary",
    short: "The glandular lobe of the pituitary, located at the base of the brain. Produces GH, LH, FSH, TSH, ACTH, and prolactin in response to hypothalamic signals.",
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
  angiogenesis: {
    term: "Angiogenesis",
    short: "The formation of new blood vessels. The process that restores blood supply to injured tissue.",
    long: "Injured tissue has compromised blood supply — angiogenesis is how the body rebuilds it. New capillaries deliver oxygen, nutrients, and growth factors to the repair site. Many regenerative peptides (BPC-157, GHK-Cu) work partly by upregulating angiogenesis.",
  },
  vegf: {
    term: "VEGF",
    short: "Vascular Endothelial Growth Factor. The primary signaling protein that triggers angiogenesis — tells cells to grow new blood vessels.",
    long: "VEGF is released at injury sites and by hypoxic (oxygen-starved) tissue. It binds receptors on endothelial cells and instructs them to proliferate and form new capillaries. When you read that a peptide 'upregulates VEGF,' it means the peptide is accelerating this vessel-formation process.",
  },
  fibroblast: {
    term: "Fibroblast",
    short: "The cell type that produces collagen and other structural proteins. The primary construction worker of tissue repair.",
    long: "Fibroblasts are activated by growth factors (TGF-β, FGF) during the proliferative phase of healing. They synthesize collagen, elastin, and the extracellular matrix that forms the physical scaffold of repaired tissue.",
  },
  collagen: {
    term: "Collagen",
    short: "The structural protein that forms the scaffolding of tendons, ligaments, skin, and most connective tissue.",
    long: "Collagen is produced by fibroblasts and goes through a maturation process over weeks to months. Early repair produces Type III collagen (faster but weaker), which is gradually remodeled into Type I collagen (stronger, more organized). This is why structural strength returns long after pain and swelling resolve.",
  },
  "tgf-b": {
    term: "TGF-β",
    short: "Transforming Growth Factor-beta. A key signaling protein that activates fibroblasts and drives collagen synthesis during repair.",
  },
  "fgf": {
    term: "FGF",
    short: "Fibroblast Growth Factor. Promotes fibroblast proliferation and angiogenesis — one of the key growth factors released at injury sites.",
  },
  cytokine: {
    term: "Cytokine",
    short: "A small signaling protein released by immune cells to coordinate the inflammatory and repair response.",
    long: "Cytokines are how immune cells talk to each other and to structural cells like fibroblasts. Pro-inflammatory cytokines (IL-1, TNF-α) initiate the acute response; anti-inflammatory cytokines help resolve it. Chronic inflammation is characterized by persistently elevated pro-inflammatory cytokines with no resolution.",
  },
  "extracellular-matrix": {
    term: "Extracellular matrix (ECM)",
    short: "The structural scaffold between cells — made of collagen, elastin, and other proteins. What repair peptides are ultimately rebuilding.",
  },
  enos: {
    term: "eNOS",
    short: "Endothelial nitric oxide synthase. The enzyme in blood vessel lining cells that produces vascular NO — BPC-157's primary documented target.",
    long: "eNOS is one of three nitric oxide synthase isoforms. Unlike iNOS (the inflammatory, high-output form), eNOS produces regulated, lower-volume NO in endothelial cells that drives vasodilation and is a co-mediator of VEGF-driven angiogenesis. BPC-157's healing effects are substantially blocked by NOS inhibitors like L-NAME, which is the pharmacological evidence that eNOS upregulation is the primary mechanism.",
  },
  "nitric-oxide": {
    term: "Nitric oxide (NO)",
    short: "A gaseous signaling molecule produced by NOS enzymes from arginine. Diffuses freely across membranes, drives vasodilation, supports angiogenesis, and has cytoprotective effects.",
    long: "Nitric oxide has a half-life measured in seconds in tissue, but its downstream effects (via cGMP and other mediators) can persist far longer. It relaxes smooth muscle in blood vessel walls (vasodilation), acts as a co-mediator of VEGF-driven angiogenesis, inhibits apoptosis under ischemic stress, and reduces platelet aggregation. The specific NOS isoform matters: eNOS-derived NO is generally protective and pro-vascular; iNOS-derived NO from immune cells can be damaging in excess.",
  },
  tenocyte: {
    term: "Tenocyte",
    short: "The fibroblast of tendon tissue. Produces Type I collagen and other ECM components that give tendons their tensile strength.",
    long: "Tenocytes are the primary resident cell of tendons and are responsible for producing and maintaining the dense Type I collagen matrix that defines tendon mechanical properties. They are sparse relative to cells in muscle or bone, and slow to activate — a core reason tendon healing is slow. Growth factors (TGF-β, VEGF, FGF) and compounds that directly promote tenocyte migration and proliferation are the targets in tendon repair research.",
  },
  gaba: {
    term: "GABA",
    short: "Gamma-aminobutyric acid. The primary inhibitory neurotransmitter in the CNS. BPC-157 shows normalizing effects on GABAergic signaling in animal withdrawal models.",
    long: "GABA binds GABA-A and GABA-B receptors to inhibit neuronal firing. Chronic exposure to alcohol, benzodiazepines, and other GABAergic drugs causes receptor downregulation (the same desensitization seen with peptide receptors). Withdrawal produces hyperexcitability as that suppressed baseline is suddenly removed. BPC-157 in animal models attenuates this hyperexcitability — not through direct GABA-A agonism, but through mechanisms that may involve NO signaling or gut-brain pathways.",
  },
  dopamine: {
    term: "Dopamine",
    short: "A catecholamine neurotransmitter central to reward, motivation, and motor control. BPC-157 shows normalizing effects on dopaminergic signaling in animal models of both excess and deficit.",
    long: "Dopamine is released from neurons in the ventral tegmental area and substantia nigra. Disruptions in dopaminergic tone are implicated in addiction, Parkinson's disease, and psychiatric conditions. BPC-157 in animal models shows a bidirectional normalizing effect — reducing dopamine excess in amphetamine-induced dysregulation and attenuating motor deficits in models of dopamine deficiency. The mechanism is not a direct receptor agonist/antagonist effect and is not yet fully characterized.",
  },
  cytoprotection: {
    term: "Cytoprotection",
    short: "The ability of a compound to help cells survive stress — particularly ischemia (oxygen deprivation) and mechanical trauma — by blocking the cellular signals that trigger programmed cell death.",
    long: "At the concentrations produced by eNOS, nitric oxide acts as a cytoprotective signal: it inhibits the apoptotic cascade that would otherwise execute damaged or oxygen-starved cells. This is one mechanism behind BPC-157's documented effects in CNS injury models and gut epithelial damage — the same eNOS/NO pathway that drives vascular repair also extends cell survival in stressed tissue.",
  },
  "g-actin": {
    term: "G-actin",
    short: "Globular (monomeric, unpolymerized) actin — the free-floating form that polymerizes into filaments. TB-500/Tβ4 sequesters G-actin to maintain a ready pool for rapid filament formation.",
    long: "The balance between G-actin (free monomers) and F-actin (polymerized filaments) determines what a cell can do with its cytoskeleton. Tβ4 holds G-actin in reserve in a 1:1 complex — not blocking it permanently, but buffering it for rapid deployment when the cell needs to migrate or reshape.",
  },
  "f-actin": {
    term: "F-actin",
    short: "Filamentous (polymerized) actin — the structural form that makes up the cytoskeleton and powers cell movement. Built from G-actin monomers.",
    long: "F-actin filaments form the cell's internal scaffold and, when assembled at the leading edge, push cell membranes forward during migration. The continuous polymerization (at the front) and depolymerization (at the rear) of F-actin is what physically moves a cell through tissue.",
  },
  "nf-kb": {
    term: "NF-κB",
    short: "Nuclear factor kappa B — the master transcription factor for inflammatory gene expression. TB-500 downregulates NF-κB signaling, reducing pro-inflammatory cytokine production.",
    long: "When NF-κB is activated, it enters the nucleus and drives expression of dozens of inflammatory genes: IL-1β, IL-6, TNF-α, and others. Chronic inflammation involves persistent NF-κB activation. Compounds that reduce NF-κB activity reduce the inflammatory load without necessarily targeting any single cytokine — a broader anti-inflammatory action.",
  },
  "progenitor-cell": {
    term: "Progenitor cell",
    short: "An early-stage cell capable of differentiating into specific cell types. TB-500 mobilizes progenitor cells from bone marrow into circulation, where they can home to injury sites.",
    long: "Progenitor cells (also called stem cells or precursor cells depending on context) are held in reserve in bone marrow and other niches. Injury signals — and certain compounds like Tβ4 — trigger their release into peripheral circulation. Once circulating, they respond to chemokines and growth factors produced at injury sites and migrate there to support repair. This mobilization mechanism is distinct from activating cells already present at an injury.",
  },
  chelation: {
    term: "Chelation",
    short: "The binding of a metal ion by a molecule with multiple coordination sites, forming a stable ring-like complex. In GHK-Cu, the peptide chelates Cu²⁺ — holding it safely without releasing it as free, reactive copper.",
    long: "Chelation is what makes GHK-Cu pharmacologically distinct from simply administering copper ions. Free Cu²⁺ in solution is a potent pro-oxidant — it catalyzes Fenton-like reactions that generate hydroxyl radicals. GHK chelates copper through its histidine imidazole nitrogen (primary anchor), glycine amino group, and peptide backbone, suppressing that redox activity. The resulting complex is stable enough to transport copper safely but labile enough to transfer it to copper-requiring enzymes with higher affinity. This is the key safety mechanism: copper delivered as a controlled vehicle, not a reactive ion.",
  },
  "lysyl-oxidase": {
    term: "Lysyl oxidase (LOX)",
    short: "A copper-requiring enzyme that crosslinks collagen and elastin fibers, converting newly synthesized precursors into mechanically strong matrix structures.",
    long: "Lysyl oxidase catalyzes the oxidative deamination of specific lysine and hydroxylysine residues in collagen and elastin — the chemical reaction that forms crosslinks between adjacent fibers. Without these crosslinks, collagen fibers are soluble and structurally weak: you can synthesize all the collagen you want, but without LOX activity it won't form a load-bearing matrix. LOX requires Cu²⁺ at its active site to function; copper deficiency selectively impairs matrix quality even when collagen synthesis continues normally. This is why GHK-Cu's copper delivery mechanism is most relevant to connective tissue quality.",
  },
  sparc: {
    term: "SPARC",
    short: "Secreted Protein Acidic and Rich in Cysteine — also called osteonectin. A matrix protein whose proteolytic cleavage releases the GHK tripeptide during tissue remodeling.",
    long: "SPARC is involved in extracellular matrix organization and the cell response to injury. When SPARC is cleaved during normal ECM turnover and tissue repair, GHK is among the peptide fragments released. This makes GHK genuinely endogenous — not just a sequence derived from a human protein in principle, but a peptide that actually circulates in the body at measurable concentrations as a result of normal biological processes. Its endogenous origin distinguishes GHK from BPC-157, which is derived from a gastric protein sequence but is not produced as a free peptide by the body.",
  },
  "ghrh-receptor": {
    term: "GHRH receptor",
    short: "A Gs-coupled GPCR on anterior pituitary somatotroph cells. Binding by GHRH or a GHRH analog triggers cAMP → PKA → CREB → GH synthesis and release.",
    long: "The GHRH receptor is the specific target of all GHRH analogs (sermorelin, Mod GRF 1-29, CJC-1295 with DAC, tesamorelin). It is distinct from the GHS-R1a ghrelin receptor that GHRPs bind — different receptor, different G-protein, different signaling cascade. GHRH-R uses the Gs/cAMP pathway; GHS-R1a uses the Gq/calcium pathway. This is why combining a GHRH analog with a GHRP is synergistic rather than redundant: they use different inputs to converge on the same somatotroph output.",
  },
  sermorelin: {
    term: "Sermorelin",
    short: "GHRH(1-29)-NH₂ — the 29-amino acid active fragment of GHRH with C-terminal amidation. Half-life ~10–20 min. The most pulsatile GHRH analog.",
    long: "Sermorelin was FDA-approved in 1997 as Geref (Serono) for pediatric growth hormone deficiency — giving it human pharmacokinetic and safety data that most research GHRH analogs lack. It was withdrawn from the US market in 2008 due to manufacturing discontinuation, not safety or efficacy failure. Its short half-life is its main clinical advantage: it fires a discrete GH pulse and clears, allowing genuine inter-pulse troughs that preserve receptor sensitivity and pulsatile axis physiology. Requires daily subcutaneous dosing; typically timed pre-sleep to amplify the natural nocturnal GH pulse window.",
  },
  "mod-grf-1-29": {
    term: "Mod GRF 1-29",
    short: "GHRH(1-29) with four amino acid substitutions at positions 2, 8, 15, and 27 to resist DPP-4 and plasma proteases. Half-life ~30 min. Often mislabeled as 'CJC-1295' in research supply chains.",
    long: "Mod GRF 1-29 is a more protease-stable version of sermorelin, with the same pulsatile pharmacokinetic profile. The position-2 substitution is the most important: it blocks DPP-4 access to the primary cleavage site, extending half-life from ~7 min (native GHRH) to ~30 min. It is frequently mislabeled as 'CJC-1295' without DAC notation in research supply chains — creating significant confusion with CJC-1295 with DAC, which has a ~6–8 day half-life from albumin binding. The two compounds produce fundamentally different GH profiles and cannot be distinguished by appearance.",
  },
  tesamorelin: {
    term: "Tesamorelin",
    short: "FDA-approved GHRH analog (brand name Egrifta). Full GHRH(1-44) sequence stabilized by N-terminal trans-3-hexenoic acid conjugation. Half-life ~26 min.",
    long: "Tesamorelin was approved by the FDA in 2010 (Theratechnologies) for HIV-associated lipodystrophy — the only GHRH analog to complete Phase 2 and Phase 3 randomized controlled trials. The trans-3-hexenoic acid group blocks DPP-4 access to the N-terminus, extending half-life from ~7 min (native GHRH) to ~26 min. This makes it more stable than sermorelin while remaining pulsatile (unlike CJC-1295 with DAC). Its mechanism is identical to other GHRH analogs: GHRH-R → cAMP → GH pulse → lipolysis and IGF-1. FDA approval establishes its clinical evidence base for HIV lipodystrophy; it does not establish efficacy for off-label GH optimization goals.",
  },
  lipodystrophy: {
    term: "Lipodystrophy (HIV-associated)",
    short: "A fat redistribution syndrome in HIV patients: visceral fat accumulates in the trunk while subcutaneous fat is lost from the limbs and face. The approved indication for tesamorelin.",
    long: "HIV-associated lipodystrophy develops in a significant fraction of HIV-positive patients, particularly on certain antiretroviral regimens. The visceral fat accumulation component raises triglycerides, drives insulin resistance, and substantially increases cardiovascular risk. Because visceral adipocytes are more GH-responsive than subcutaneous adipocytes, GH-axis stimulation via a GHRH analog preferentially reduces visceral fat — the mechanistic rationale for tesamorelin's development and approval. The Phase 3 trials demonstrated significant CT-measured visceral adipose tissue reduction with tesamorelin vs. placebo.",
  },
  "ghs-r1a": {
    term: "GHS-R1a",
    short: "Growth hormone secretagogue receptor type 1a — the ghrelin receptor. A Gq-coupled GPCR on anterior pituitary somatotrophs (and hypothalamus) that all GHRPs bind to trigger GH release.",
    long: "GHS-R1a is the receptor through which ghrelin — and all synthetic GHRPs — act. In the anterior pituitary, GHS-R1a activation triggers the Gq/PLC/IP3/calcium cascade that causes rapid exocytosis of stored GH vesicles. In the hypothalamus (arcuate nucleus), the same receptor mediates appetite signaling — which is why less selective GHRPs produce hunger alongside GH release. GHS-R1a is mechanistically distinct from the GHRH receptor: different G-protein coupling (Gq vs. Gs), different second messenger (calcium vs. cAMP), different primary output emphasis (rapid exocytosis vs. synthesis + release). Their independence is what makes GHRP + GHRH analog combinations synergistic.",
  },
  ipamorelin: {
    term: "Ipamorelin",
    short: "A synthetic pentapeptide GHRP. The most selective compound in the class — produces a clean GH pulse via GHS-R1a with minimal cortisol, prolactin, or appetite side effects.",
    long: "Ipamorelin was specifically engineered to drive GH release via GHS-R1a while minimizing off-target activation of the ACTH/cortisol and hypothalamic-appetite pathways that less selective GHRPs engage. This is biased agonism: ipamorelin's conformation at GHS-R1a preferentially couples to the GH-releasing downstream pathway. Half-life ~2 hours. No FDA approval; pharmacokinetics and GH-stimulating efficacy characterized in early human studies. The default starting point for GH secretagogue protocols because it isolates the GH effect from the noise. Typically paired with a GHRH analog to exploit the independent Gs/cAMP priming pathway for multiplicative GH output.",
  },
  "ghrp-2": {
    term: "GHRP-2",
    short: "A synthetic hexapeptide GHRP. Stronger GH pulse than ipamorelin with moderate cortisol and prolactin elevation. The middle-ground compound between selectivity and potency.",
    long: "GHRP-2 produces dose-dependent GH release via GHS-R1a with measurably higher output than ipamorelin in most comparisons. The trade-off is moderate ACTH/cortisol elevation and prolactin release with each dose — both more pronounced than ipamorelin but less than GHRP-6 or hexarelin. Minimal appetite stimulation. Half-life approximately 30–60 minutes. Has human pharmacokinetic data from 1990s–2000s clinical studies. No FDA approval. Chosen over ipamorelin when stronger GH output is the priority and the cortisol/prolactin trade is acceptable.",
  },
  "ghrp-6": {
    term: "GHRP-6",
    short: "A synthetic hexapeptide GHRP structurally close to native ghrelin. Produces strong GH release alongside significant appetite stimulation and moderate-to-high cortisol/prolactin elevation.",
    long: "GHRP-6's structural similarity to native ghrelin means it activates GHS-R1a broadly — including hypothalamic arcuate nucleus circuits that mediate ghrelin's hunger signaling. The result is pronounced appetite stimulation within 30–60 minutes of injection alongside the GH pulse. This effect is mechanistically inseparable from the compound's structure: the appetite drive and GH release both come from GHS-R1a activation by a ghrelin-like ligand. GHRP-6 is sometimes deliberately chosen when caloric surplus support is as important as GH output — useful for bulking protocols or recovery from illness. Cortisol and prolactin elevation are moderate-to-high. No FDA approval.",
  },
  hexarelin: {
    term: "Hexarelin",
    short: "The most potent GHRP — largest acute GH pulse, but fastest GHS-R1a desensitization and highest cortisol/prolactin profile. Also binds CD36 on cardiac tissue via an independent mechanism.",
    long: "Hexarelin produces the largest acute GH pulse of the synthetic GHRPs via high-affinity GHS-R1a binding. The same potency that drives strong initial GH output accelerates receptor desensitization — GRK-mediated phosphorylation and arrestin-driven internalization reduce the GH response substantially within 2–4 weeks of daily use (tachyphylaxis). This makes hexarelin a poor choice for longer protocols despite its acute potency advantage. Cortisol and prolactin elevation are the most pronounced in the GHRP class. CD36 discovery: hexarelin also binds CD36 (a scavenger receptor on cardiac muscle) independently of GHS-R1a, activating PI3K/Akt and ERK1/2 survival pathways — producing cardioprotective effects in preclinical ischemia models that are independent of GH release. This CD36 mechanism is well-characterized in animal models; human clinical cardioprotection has not been established in controlled trials.",
  },
  cortisol: {
    term: "Cortisol",
    short: "A glucocorticoid produced by the adrenal glands in response to ACTH. The primary stress hormone — catabolic in muscle, pro-lipolytic in fat, immunosuppressive at high levels.",
    long: "Cortisol is released from the adrenal cortex when ACTH (adrenocorticotropic hormone) signals from the anterior pituitary. Acute cortisol spikes are normal and generally benign — they're part of the stress response and morning cortisol awakening reaction. The concern with GHRPs that elevate ACTH/cortisol is chronic, repetitive elevation with every injection over weeks of a protocol: cortisol opposes insulin signaling (increasing insulin resistance), promotes muscle protein catabolism, and suppresses immune function at elevated levels. This directly counteracts body composition goals in a context where GH is being used partly for anabolic and lipolytic effects. The less selective GHRPs (GHRP-2, GHRP-6, hexarelin) produce measurable ACTH/cortisol elevation with each dose; ipamorelin does not.",
  },
  prolactin: {
    term: "Prolactin",
    short: "A hormone secreted by anterior pituitary lactotroph cells. Elevated prolactin suppresses LH and FSH — reducing testosterone production in men.",
    long: "Prolactin is primarily known for its role in lactation, but it's present in both sexes and has broader neuroendocrine effects. For men using GH secretagogues, the relevant concern is prolactin's suppression of the hypothalamic-pituitary-gonadal axis: elevated prolactin reduces gonadotropin-releasing hormone (GnRH) pulsatility, which lowers LH and FSH, which reduces testicular testosterone production. This effect is dose- and duration-dependent — a modest acute elevation with each GHRP dose is different from chronically elevated prolactin. Less selective GHRPs (GHRP-2, GHRP-6, hexarelin) stimulate prolactin release more than ipamorelin, which is one reason ipamorelin is preferred when minimizing off-target neuroendocrine effects matters.",
  },
  cd36: {
    term: "CD36",
    short: "A scavenger receptor expressed on cardiac muscle, macrophages, and other tissues. Hexarelin binds CD36 independently of GHS-R1a, producing cardioprotective signaling via PI3K/Akt and ERK1/2.",
    long: "CD36 (cluster of differentiation 36) is a multifunctional receptor involved in fatty acid uptake, lipid metabolism, and immune function. Its relevance to GHRPs comes from the unexpected discovery that hexarelin binds CD36 at a separate binding site from GHS-R1a. This activation drives PI3K/Akt and ERK1/2 survival pathways in cardiac tissue — mechanisms associated with protection from apoptosis and ischemia-reperfusion injury. The cardiac effects were demonstrated to be independent of GH release in GH-deficient animal models: blocking the GHS-R1a/GH axis did not eliminate hexarelin's cardioprotective effects, confirming CD36 as the mediating receptor. The CD36 mechanism is well-characterized preclinically; no large human RCT has established cardioprotective clinical outcomes from hexarelin administration.",
  },
};
