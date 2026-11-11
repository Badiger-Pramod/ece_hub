/**
 * SSIT ECE Resource Hub - Centralized Resource Data Architecture
 * Created and Maintained by B. Pramod
 * Sri Siddhartha Institute of Technology (SSIT), Tumakuru
 * Department of Electronics & Communication Engineering
 *
 * HOW TO ADD OR UPDATE DRIVE LINKS:
 * When you receive the Google Drive folder links for 5th, 6th, 7th, or 8th semester,
 * simply paste them into the `DRIVE_FOLDERS` object below. The website will
 * automatically activate the Drive buttons for that semester!
 */

const DRIVE_FOLDERS = {
  // 3rd & 4th Semester Verified Drive Links
  SEM_3: "https://drive.google.com/drive/folders/10A22FDHw3j7eA5kIDYn6FzdEhDXj8HKC",
  SEM_4: "https://drive.google.com/drive/folders/1eTAomKSCOVdGVzwWvMAuI4Y-z9eiLtEl",
  
  // 5th to 8th Semester Verified Drive Links
  SEM_5: "https://drive.google.com/drive/folders/1Vl7GBvbNEtHJhae36wi89-S1IUgjO7qQ",
  SEM_6: "https://drive.google.com/drive/folders/1AP-suBvOmB0LhoK178qOOseBytJG1XCh",
  SEM_7: "https://drive.google.com/drive/folders/1VcCJliUxYvZ04etjz8dSz4T2kYgqFiDf",
  SEM_8: "https://drive.google.com/drive/folders/10OqT0GkKHCzddtY2W9A2M-kaDJ8RnKQn",

  // Original Combined Drive Reference
  COMBINED: "https://drive.google.com/drive/folders/1OHt9JDq2Va4piknGYh2rDRKOCKJKuct6"
};

/**
 * Metadata for all 6 active semesters (3rd to 8th)
 */
const ECE_SEMESTERS = [
  {
    id: "sem-3",
    semKey: "3rd Semester",
    number: 3,
    title: "3rd Semester ECE Resources",
    shortTitle: "3rd Semester",
    slug: "3rd-semester-ece-notes",
    pageUrl: "3rd-semester-ece-notes.html",
    description: "Access 3rd semester ECE notes, question papers, important questions, textbooks, assignments and other study resources.",
    badgeClass: "badge-sem3",
    cardClass: "sem-card-3",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    subjects: [
      "Network Theory",
      "Digital Electronics",
      "Engineering Mathematics III",
      "Electronic Devices"
    ]
  },
  {
    id: "sem-4",
    semKey: "4th Semester",
    number: 4,
    title: "4th Semester ECE Resources",
    shortTitle: "4th Semester",
    slug: "4th-semester-ece-notes",
    pageUrl: "4th-semester-ece-notes.html",
    description: "Access 4th semester ECE notes, question papers, important questions, textbooks, assignments and other study resources.",
    badgeClass: "badge-sem4",
    cardClass: "sem-card-4",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    subjects: [
      "Signals and Systems",
      "Control Systems",
      "Linear Integrated Circuits",
      "Electromagnetic Waves",
      "Engineering Mathematics IV"
    ]
  },
  {
    id: "sem-5",
    semKey: "5th Semester",
    number: 5,
    title: "5th Semester ECE Resources",
    shortTitle: "5th Semester",
    slug: "5th-semester-ece-notes",
    pageUrl: "5th-semester-ece-notes.html",
    description: "Access 5th semester ECE notes, question papers, PYQs, assignments, textbooks, important questions and other study materials.",
    badgeClass: "badge-sem5",
    cardClass: "sem-card-5",
    driveUrl: DRIVE_FOLDERS.SEM_5,
    subjects: [
      "Digital Signal Processing",
      "Microcontrollers & Embedded Systems",
      "Information Theory & Coding",
      "Analog & Digital Communication",
      "Management & Entrepreneurship"
    ]
  },
  {
    id: "sem-6",
    semKey: "6th Semester",
    number: 6,
    title: "6th Semester ECE Resources",
    shortTitle: "6th Semester",
    slug: "6th-semester-ece-notes",
    pageUrl: "6th-semester-ece-notes.html",
    description: "Access 6th semester ECE notes, question papers, PYQs, assignments, textbooks, important questions and other study materials.",
    badgeClass: "badge-sem6",
    cardClass: "sem-card-6",
    driveUrl: DRIVE_FOLDERS.SEM_6,
    subjects: [
      "VLSI Design & Technology",
      "Antennas and Wave Propagation",
      "Computer Communication Networks",
      "Embedded System Design",
      "Professional Electives"
    ]
  },
  {
    id: "sem-7",
    semKey: "7th Semester",
    number: 7,
    title: "7th Semester ECE Resources",
    shortTitle: "7th Semester",
    slug: "7th-semester-ece-notes",
    pageUrl: "7th-semester-ece-notes.html",
    description: "Access 7th semester ECE notes, question papers, PYQs, assignments, textbooks, important questions and other study materials.",
    badgeClass: "badge-sem7",
    cardClass: "sem-card-7",
    driveUrl: DRIVE_FOLDERS.SEM_7,
    subjects: [
      "Wireless & Cellular Communication",
      "Optical Communication & Networks",
      "Microwave Engineering & Radar",
      "Project Phase I",
      "Elective Courses"
    ]
  },
  {
    id: "sem-8",
    semKey: "8th Semester",
    number: 8,
    title: "8th Semester ECE Resources",
    shortTitle: "8th Semester",
    slug: "8th-semester-ece-notes",
    pageUrl: "8th-semester-ece-notes.html",
    description: "Access 8th semester ECE notes, question papers, PYQs, assignments, textbooks, important questions and other study materials.",
    badgeClass: "badge-sem8",
    cardClass: "sem-card-8",
    driveUrl: DRIVE_FOLDERS.SEM_8,
    subjects: [
      "Major Project Phase II",
      "Technical Seminar",
      "Industry Internship",
      "Emerging Technologies Elective"
    ]
  }
];

/**
 * Centralized Resource Database
 * All resources follow a single scalable schema across all semesters.
 */
const ECE_RESOURCES = [
  // ================= 3RD SEMESTER RESOURCES =================
  {
    id: "sem3-nt-notes-complete",
    name: "Network Theory Lecture Notes (Full Course)",
    semester: "3rd Semester",
    subject: "Network Theory",
    category: "Notes",
    year: "2024-2025",
    description: "Detailed unit-wise notes covering mesh & nodal analysis, network theorems, transient analysis, Laplace transforms, and two-port network parameters.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "notes",
    tags: ["network theory", "circuits", "theorems", "two-port", "3rd sem", "notes"]
  },
  {
    id: "sem3-nt-pyq-bundle",
    name: "Network Theory Previous Year Question Papers (PYQ)",
    semester: "3rd Semester",
    subject: "Network Theory",
    category: "PYQ",
    year: "2020-2024",
    description: "Comprehensive compilation of SSIT semester-end exam question papers with solution hints and numerical breakdowns.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "pyq",
    tags: ["network theory", "pyq", "previous year", "question paper", "solved", "3rd sem"]
  },
  {
    id: "sem3-nt-imp-questions",
    name: "Network Theory Important Questions & Derivations",
    semester: "3rd Semester",
    subject: "Network Theory",
    category: "Important Questions",
    year: "2024-2025",
    description: "Curated list of frequently repeated university examination questions, key theorem proofs (Thevenin, Norton, Superposition), and problem types.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "notes",
    tags: ["network theory", "important questions", "derivations", "exam prep", "3rd sem"]
  },
  {
    id: "sem3-nt-assignments",
    name: "Network Theory Module Assignments & Practice Sets",
    semester: "3rd Semester",
    subject: "Network Theory",
    category: "Assignment",
    year: "2024-2025",
    description: "Module-wise assignment problem sets with circuit diagrams and numerical problem solving guides.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "assignment",
    tags: ["network theory", "assignments", "homework", "practice", "3rd sem"]
  },
  {
    id: "sem3-nt-internal-papers",
    name: "Network Theory Internal Test & CIE Question Papers",
    semester: "3rd Semester",
    subject: "Network Theory",
    category: "Internal Exam",
    year: "2024-2025",
    description: "Continuous Internal Evaluation (CIE) test question papers 1, 2 & 3 for 3rd semester ECE.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "exam",
    tags: ["network theory", "cie", "internals", "test papers", "3rd sem"]
  },
  {
    id: "sem3-de-notes-complete",
    name: "Digital Electronics Comprehensive Notes",
    semester: "3rd Semester",
    subject: "Digital Electronics",
    category: "Notes",
    year: "2024-2025",
    description: "In-depth notes on Boolean algebra, K-maps, combinational logic (multiplexers, decoders), and sequential circuits (flip-flops, counters, shift registers).",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "notes",
    tags: ["digital electronics", "boolean algebra", "k-map", "counters", "flip-flops", "3rd sem", "notes"]
  },
  {
    id: "sem3-de-pyq-bundle",
    name: "Digital Electronics Previous Year Question Papers (PYQ)",
    semester: "3rd Semester",
    subject: "Digital Electronics",
    category: "PYQ",
    year: "2021-2024",
    description: "Previous years' university exam papers for Digital Electronics with timing diagram questions and state machine designs.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "pyq",
    tags: ["digital electronics", "pyq", "exam papers", "state tables", "3rd sem"]
  },
  {
    id: "sem3-de-imp-questions",
    name: "Digital Electronics Important Exam Questions",
    semester: "3rd Semester",
    subject: "Digital Electronics",
    category: "Important Questions",
    year: "2024-2025",
    description: "High-yield topics including flip-flop conversions, synchronous counter designs, state reduction, and logic family comparisons.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "notes",
    tags: ["digital electronics", "important questions", "revision", "3rd sem"]
  },
  {
    id: "sem3-de-textbook-ref",
    name: "Digital Electronics Reference Textbooks & Material",
    semester: "3rd Semester",
    subject: "Digital Electronics",
    category: "Textbook",
    year: "2024",
    description: "Standard reference materials and textbook chapters (M. Morris Mano, Floyd) recommended for SSIT ECE syllabus.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "book",
    tags: ["digital electronics", "textbook", "morris mano", "reference", "3rd sem"]
  },
  {
    id: "sem3-de-assignments",
    name: "Digital Electronics Lab & Theory Assignments",
    semester: "3rd Semester",
    subject: "Digital Electronics",
    category: "Assignment",
    year: "2024-2025",
    description: "Theory assignments on logic minimization and digital circuit design problems.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "assignment",
    tags: ["digital electronics", "assignments", "3rd sem"]
  },
  {
    id: "sem3-math-notes",
    name: "Transform Calculus, Fourier Series & Numerical Techniques Notes",
    semester: "3rd Semester",
    subject: "Engineering Mathematics III",
    category: "Notes",
    year: "2024-2025",
    description: "Complete module notes covering Laplace transforms, Fourier series, Fourier transforms, Z-transforms, and numerical solutions of ODEs.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "notes",
    tags: ["mathematics", "calculus", "fourier", "laplace", "z-transform", "3rd sem", "notes"]
  },
  {
    id: "sem3-math-pyq",
    name: "Engineering Mathematics III Previous Question Papers",
    semester: "3rd Semester",
    subject: "Engineering Mathematics III",
    category: "PYQ",
    year: "2021-2024",
    description: "Collection of past mathematics examination papers covering all 5 modules for SSIT 3rd semester ECE.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "pyq",
    tags: ["mathematics", "pyq", "question papers", "3rd sem"]
  },
  {
    id: "sem3-ed-notes",
    name: "Electronic Devices & Circuits (EDC) Notes",
    semester: "3rd Semester",
    subject: "Electronic Devices",
    category: "Notes",
    year: "2024-2025",
    description: "Semiconductor physics, diode characteristics, BJT biasing and stabilization, MOSFET operation, and small-signal amplifiers.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "notes",
    tags: ["electronic devices", "edc", "bjt", "mosfet", "semiconductor", "3rd sem", "notes"]
  },
  {
    id: "sem3-ed-pyq",
    name: "Electronic Devices Previous Year Question Papers",
    semester: "3rd Semester",
    subject: "Electronic Devices",
    category: "PYQ",
    year: "2021-2024",
    description: "Past question papers for EDC with numericals on bias stability, transconductance, and frequency response.",
    driveUrl: DRIVE_FOLDERS.SEM_3,
    type: "pyq",
    tags: ["electronic devices", "edc", "pyq", "past papers", "3rd sem"]
  },

  // ================= 4TH SEMESTER RESOURCES =================
  {
    id: "sem4-ss-notes-complete",
    name: "Signals and Systems Complete Lecture Notes",
    semester: "4th Semester",
    subject: "Signals and Systems",
    category: "Notes",
    year: "2024-2025",
    description: "Comprehensive notes covering classification of continuous & discrete signals, LTI systems, convolution integral & sum, Fourier series/transform, and Z-transforms.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "notes",
    tags: ["signals and systems", "convolution", "fourier transform", "z-transform", "lti systems", "4th sem", "notes"]
  },
  {
    id: "sem4-ss-pyq-bundle",
    name: "Signals and Systems Previous Year Question Papers (PYQ)",
    semester: "4th Semester",
    subject: "Signals and Systems",
    category: "PYQ",
    year: "2021-2024",
    description: "SSIT semester-end question papers with solved numericals on system stability, causality, and frequency response analysis.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "pyq",
    tags: ["signals and systems", "pyq", "question papers", "4th sem"]
  },
  {
    id: "sem4-ss-imp-questions",
    name: "Signals and Systems Important Questions & Properties",
    semester: "4th Semester",
    subject: "Signals and Systems",
    category: "Important Questions",
    year: "2024-2025",
    description: "Summary of critical theorems, Fourier transform properties, ROC determination in Z-transforms, and recurring examination problems.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "notes",
    tags: ["signals and systems", "important questions", "roc", "properties", "4th sem"]
  },
  {
    id: "sem4-ss-assignments",
    name: "Signals and Systems Assignments & Problem Sets",
    semester: "4th Semester",
    subject: "Signals and Systems",
    category: "Assignment",
    year: "2024-2025",
    description: "Practice assignment sheets covering convolution graphical methods, DTFT, and system transfer functions.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "assignment",
    tags: ["signals and systems", "assignments", "problems", "4th sem"]
  },
  {
    id: "sem4-ss-internals",
    name: "Signals and Systems CIE Internal Test Question Papers",
    semester: "4th Semester",
    subject: "Signals and Systems",
    category: "Internal Exam",
    year: "2024-2025",
    description: "Internal assessment question papers with model answers for 4th semester ECE.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "exam",
    tags: ["signals and systems", "cie", "internals", "test papers", "4th sem"]
  },
  {
    id: "sem4-cs-notes-complete",
    name: "Control Systems Theory & Analysis Notes",
    semester: "4th Semester",
    subject: "Control Systems",
    category: "Notes",
    year: "2024-2025",
    description: "Block diagram reduction, signal flow graphs (Mason's rule), time domain specifications, Routh-Hurwitz stability, Root Locus, and Bode plots.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "notes",
    tags: ["control systems", "root locus", "bode plot", "routh hurwitz", "nyquist", "4th sem", "notes"]
  },
  {
    id: "sem4-cs-pyq-bundle",
    name: "Control Systems Previous Year Question Papers (PYQ)",
    semester: "4th Semester",
    subject: "Control Systems",
    category: "PYQ",
    year: "2020-2024",
    description: "SSIT past examination papers focusing on second-order system responses, stability criteria, and compensator designs.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "pyq",
    tags: ["control systems", "pyq", "exam papers", "bode plot", "4th sem"]
  },
  {
    id: "sem4-cs-imp-questions",
    name: "Control Systems Important Questions & Plotting Guides",
    semester: "4th Semester",
    subject: "Control Systems",
    category: "Important Questions",
    year: "2024-2025",
    description: "Step-by-step rules for plotting Root Locus and Bode Plots, plus recurring theoretical definitions and proofs.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "notes",
    tags: ["control systems", "important questions", "root locus rules", "bode plot", "4th sem"]
  },
  {
    id: "sem4-lic-notes",
    name: "Linear Integrated Circuits (Op-Amp) Lecture Notes",
    semester: "4th Semester",
    subject: "Linear Integrated Circuits",
    category: "Notes",
    year: "2024-2025",
    description: "Ideal and practical op-amp characteristics, inverting/non-inverting amplifiers, Schmitt triggers, 555 timers, active filters, and voltage regulators.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "notes",
    tags: ["linear integrated circuits", "op-amp", "555 timer", "schmitt trigger", "4th sem", "notes"]
  },
  {
    id: "sem4-lic-pyq",
    name: "Linear Integrated Circuits Previous Year Question Papers",
    semester: "4th Semester",
    subject: "Linear Integrated Circuits",
    category: "PYQ",
    year: "2021-2024",
    description: "Collection of university question papers for LIC with circuit design problems and 555 timer multivibrator derivations.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "pyq",
    tags: ["lic", "op-amp", "pyq", "question papers", "4th sem"]
  },
  {
    id: "sem4-em-notes",
    name: "Electromagnetic Waves & Transmission Lines Notes",
    semester: "4th Semester",
    subject: "Electromagnetic Waves",
    category: "Notes",
    year: "2024-2025",
    description: "Electrostatics, magnetostatics, Maxwell's equations in differential and integral forms, uniform plane waves, and transmission line equations (Smith chart).",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "notes",
    tags: ["electromagnetics", "maxwells equations", "transmission lines", "smith chart", "4th sem", "notes"]
  },
  {
    id: "sem4-em-pyq",
    name: "Electromagnetic Waves Previous Year Question Papers",
    semester: "4th Semester",
    subject: "Electromagnetic Waves",
    category: "PYQ",
    year: "2020-2024",
    description: "Past year university exam papers on Maxwell's equations, Poynting vector, boundary conditions, and transmission line matching.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "pyq",
    tags: ["electromagnetics", "pyq", "question papers", "4th sem"]
  },
  {
    id: "sem4-math-notes",
    name: "Complex Analysis, Probability & Statistics Notes",
    semester: "4th Semester",
    subject: "Engineering Mathematics IV",
    category: "Notes",
    year: "2024-2025",
    description: "Cauchy-Riemann equations, conformal transformation, probability distributions (Binomial, Poisson, Normal), and joint probability distributions.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "notes",
    tags: ["mathematics", "complex analysis", "probability", "statistics", "4th sem", "notes"]
  },
  {
    id: "sem4-math-pyq",
    name: "Engineering Mathematics IV Previous Question Papers",
    semester: "4th Semester",
    subject: "Engineering Mathematics IV",
    category: "PYQ",
    year: "2021-2024",
    description: "Past question papers for 4th semester Engineering Mathematics IV for SSIT ECE.",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "pyq",
    tags: ["mathematics", "pyq", "question papers", "4th sem"]
  },
  {
    id: "sem4-ece-textbooks",
    name: "4th Semester Core ECE Reference Textbooks",
    semester: "4th Semester",
    subject: "Core Subjects",
    category: "Textbook",
    year: "2024",
    description: "Standard textbooks and syllabus references for Signals & Systems (Oppenheim), Control Systems (Nagrath & Gopal), and Op-Amps (Ramakant Gayakwad).",
    driveUrl: DRIVE_FOLDERS.SEM_4,
    type: "book",
    tags: ["textbook", "oppenheim", "control systems", "signals", "4th sem"]
  },

  // ================= 5TH SEMESTER RESOURCES =================
  {
    id: "sem5-dsp-notes",
    name: "Digital Signal Processing (DSP) Lecture Notes",
    semester: "5th Semester",
    subject: "Digital Signal Processing",
    category: "Notes",
    year: "2025-2026",
    description: "DFT & IDFT properties, FFT algorithms (Decimation in Time & Frequency), FIR and IIR digital filter designs, and finite word length effects.",
    driveUrl: DRIVE_FOLDERS.SEM_5,
    type: "notes",
    tags: ["dsp", "digital signal processing", "fft", "fir", "iir", "dft", "5th sem", "notes"]
  },
  {
    id: "sem5-dsp-pyq",
    name: "Digital Signal Processing Previous Year Question Papers (PYQ)",
    semester: "5th Semester",
    subject: "Digital Signal Processing",
    category: "PYQ",
    year: "2021-2025",
    description: "SSIT semester-end question papers covering Butterworth and Chebyshev filter design problems and butterfly diagrams.",
    driveUrl: DRIVE_FOLDERS.SEM_5,
    type: "pyq",
    tags: ["dsp", "digital signal processing", "pyq", "exam papers", "5th sem"]
  },
  {
    id: "sem5-mc-notes",
    name: "Microcontrollers & Embedded Systems Notes",
    semester: "5th Semester",
    subject: "Microcontrollers & Embedded Systems",
    category: "Notes",
    year: "2025-2026",
    description: "Architecture of ARM Cortex-M, 8051 microcontroller review, assembly and embedded C programming, timers, interrupts, and serial communication (UART, SPI, I2C).",
    driveUrl: DRIVE_FOLDERS.SEM_5,
    type: "notes",
    tags: ["microcontrollers", "arm", "cortex", "embedded systems", "8051", "5th sem", "notes"]
  },
  {
    id: "sem5-mc-pyq",
    name: "Microcontrollers & Embedded Systems PYQs & Solved Papers",
    semester: "5th Semester",
    subject: "Microcontrollers & Embedded Systems",
    category: "PYQ",
    year: "2021-2025",
    description: "Past examination question papers with embedded C interfacing programs for LCD, stepper motor, and ADC.",
    driveUrl: DRIVE_FOLDERS.SEM_5,
    type: "pyq",
    tags: ["microcontrollers", "arm", "pyq", "question papers", "5th sem"]
  },
  {
    id: "sem5-itc-notes",
    name: "Information Theory & Coding Comprehensive Notes",
    semester: "5th Semester",
    subject: "Information Theory & Coding",
    category: "Notes",
    year: "2025-2026",
    description: "Measure of information, entropy, Shannon-Fano and Huffman source coding, discrete memoryless channels, linear block codes, and cyclic codes.",
    driveUrl: DRIVE_FOLDERS.SEM_5,
    type: "notes",
    tags: ["information theory", "itc", "coding", "entropy", "huffman", "5th sem", "notes"]
  },
  {
    id: "sem5-itc-imp",
    name: "Information Theory & Coding Important Questions",
    semester: "5th Semester",
    subject: "Information Theory & Coding",
    category: "Important Questions",
    year: "2025-2026",
    description: "Key recurring exam derivations for channel capacity, parity check matrices, generator polynomial, and syndrome decoding.",
    driveUrl: DRIVE_FOLDERS.SEM_5,
    type: "notes",
    tags: ["information theory", "important questions", "cyclic codes", "5th sem"]
  },

  // ================= 6TH SEMESTER RESOURCES =================
  {
    id: "sem6-vlsi-notes",
    name: "VLSI Design & Technology Comprehensive Notes",
    semester: "6th Semester",
    subject: "VLSI Design & Technology",
    category: "Notes",
    year: "2025-2026",
    description: "MOS transistor theory, CMOS inverter characteristics, layout design rules, static CMOS logic, dynamic logic, and Verilog HDL modeling.",
    driveUrl: DRIVE_FOLDERS.SEM_6,
    type: "notes",
    tags: ["vlsi", "cmos", "verilog", "layout", "6th sem", "notes"]
  },
  {
    id: "sem6-vlsi-pyq",
    name: "VLSI Design Previous Year Question Papers (PYQ)",
    semester: "6th Semester",
    subject: "VLSI Design & Technology",
    category: "PYQ",
    year: "2021-2025",
    description: "SSIT semester-end exam papers with stick diagram drawings, CMOS transistor sizing, and timing analysis questions.",
    driveUrl: DRIVE_FOLDERS.SEM_6,
    type: "pyq",
    tags: ["vlsi", "pyq", "exam papers", "cmos", "6th sem"]
  },
  {
    id: "sem6-antenna-notes",
    name: "Antennas and Wave Propagation Lecture Notes",
    semester: "6th Semester",
    subject: "Antennas and Wave Propagation",
    category: "Notes",
    year: "2025-2026",
    description: "Radiation mechanisms, fundamental antenna parameters, dipole and loop antennas, antenna arrays, Yagi-Uda, horn, and atmospheric wave propagation modes.",
    driveUrl: DRIVE_FOLDERS.SEM_6,
    type: "notes",
    tags: ["antennas", "radiation", "propagation", "arrays", "6th sem", "notes"]
  },
  {
    id: "sem6-ccn-notes",
    name: "Computer Communication Networks (CCN) Notes",
    semester: "6th Semester",
    subject: "Computer Communication Networks",
    category: "Notes",
    year: "2025-2026",
    description: "OSI and TCP/IP layered architecture, data link protocols, routing algorithms (OSPF, BGP), TCP flow & congestion control, and network security.",
    driveUrl: DRIVE_FOLDERS.SEM_6,
    type: "notes",
    tags: ["ccn", "computer networks", "tcp/ip", "routing", "6th sem", "notes"]
  },

  // ================= 7TH SEMESTER RESOURCES =================
  {
    id: "sem7-wireless-notes",
    name: "Wireless & Cellular Communication Notes",
    semester: "7th Semester",
    subject: "Wireless & Cellular Communication",
    category: "Notes",
    year: "2025-2026",
    description: "Cellular radio fundamentals, frequency reuse, handoff strategies, fading channel models, spread spectrum (CDMA), and 4G/5G mobile standards.",
    driveUrl: DRIVE_FOLDERS.SEM_7,
    type: "notes",
    tags: ["wireless", "cellular", "5g", "gsm", "cdma", "7th sem", "notes"]
  },
  {
    id: "sem7-wireless-pyq",
    name: "Wireless Communication Previous Year Question Papers",
    semester: "7th Semester",
    subject: "Wireless & Cellular Communication",
    category: "PYQ",
    year: "2021-2025",
    description: "Past question papers with numerical calculations on trunking theory, Grade of Service (Erlang models), and path loss.",
    driveUrl: DRIVE_FOLDERS.SEM_7,
    type: "pyq",
    tags: ["wireless", "pyq", "question papers", "7th sem"]
  },
  {
    id: "sem7-optical-notes",
    name: "Optical Communication & Networks Notes",
    semester: "7th Semester",
    subject: "Optical Communication & Networks",
    category: "Notes",
    year: "2025-2026",
    description: "Optical fiber modes, attenuation & dispersion, laser diode & LED optical sources, photodetectors (PIN & APD), and WDM networks.",
    driveUrl: DRIVE_FOLDERS.SEM_7,
    type: "notes",
    tags: ["optical communication", "fiber optics", "laser", "wdm", "7th sem", "notes"]
  },
  {
    id: "sem7-microwave-notes",
    name: "Microwave Engineering & Radar Notes",
    semester: "7th Semester",
    subject: "Microwave Engineering & Radar",
    category: "Notes",
    year: "2025-2026",
    description: "Waveguide components, scattering parameters (S-matrix), microwave tubes (klystron, magnetron), solid-state devices, and radar range equations.",
    driveUrl: DRIVE_FOLDERS.SEM_7,
    type: "notes",
    tags: ["microwave", "radar", "s-matrix", "waveguides", "7th sem", "notes"]
  },

  // ================= 8TH SEMESTER RESOURCES =================
  {
    id: "sem8-project-guide",
    name: "Major Project Guidelines, Synopsis & Report Templates",
    semester: "8th Semester",
    subject: "Major Project Phase II",
    category: "Study Material",
    year: "2025-2026",
    description: "SSIT ECE department format standards for project synopsis, literature survey review, IEEE paper citations, and final dissertation report.",
    driveUrl: DRIVE_FOLDERS.SEM_8,
    type: "assignment",
    tags: ["major project", "synopsis", "report template", "8th sem"]
  },
  {
    id: "sem8-seminar-guide",
    name: "Technical Seminar Topic Selection & Presentation Standards",
    semester: "8th Semester",
    subject: "Technical Seminar",
    category: "Study Material",
    year: "2025-2026",
    description: "Curated lists of emerging technology seminar topics (Edge AI, Quantum Computing, IoT, 6G) with PPT slide presentation guidelines.",
    driveUrl: DRIVE_FOLDERS.SEM_8,
    type: "notes",
    tags: ["seminar", "presentation", "topics", "8th sem"]
  },
  {
    id: "sem8-internship-rubrics",
    name: "Industry Internship Diary & Evaluation Rubrics",
    semester: "8th Semester",
    subject: "Industry Internship",
    category: "Study Material",
    year: "2025-2026",
    description: "Official internship diary log format, certificate verification process, and final viva-voce evaluation guidelines.",
    driveUrl: DRIVE_FOLDERS.SEM_8,
    type: "assignment",
    tags: ["internship", "industry", "rubrics", "viva", "8th sem"]
  }
];

// Subjects registry by semester for navigation and filters
const ECE_SUBJECTS = {
  "3rd Semester": [
    "Network Theory",
    "Digital Electronics",
    "Engineering Mathematics III",
    "Electronic Devices"
  ],
  "4th Semester": [
    "Signals and Systems",
    "Control Systems",
    "Linear Integrated Circuits",
    "Electromagnetic Waves",
    "Engineering Mathematics IV"
  ],
  "5th Semester": [
    "Digital Signal Processing",
    "Microcontrollers & Embedded Systems",
    "Information Theory & Coding",
    "Analog & Digital Communication",
    "Management & Entrepreneurship"
  ],
  "6th Semester": [
    "VLSI Design & Technology",
    "Antennas and Wave Propagation",
    "Computer Communication Networks",
    "Embedded System Design"
  ],
  "7th Semester": [
    "Wireless & Cellular Communication",
    "Optical Communication & Networks",
    "Microwave Engineering & Radar"
  ],
  "8th Semester": [
    "Major Project Phase II",
    "Technical Seminar",
    "Industry Internship"
  ]
};

// Supported categories for UI filters
const ECE_CATEGORIES = [
  "All",
  "Notes",
  "PYQ",
  "Important Questions",
  "Textbook",
  "Assignment",
  "Internal Exam",
  "Study Material"
];

// Architecture prepared for future expansion (e.g. 1st, 2nd semester or other branches)
const EXPANSION_SEMESTERS = [
  { sem: "1st Semester", status: "Upcoming", subjects: ["Basic Electronics", "Mathematics I", "Applied Physics"] },
  { sem: "2nd Semester", status: "Upcoming", subjects: ["Basic Electrical Engg", "Mathematics II", "Applied Chemistry"] }
];

/**
 * SSIT ECE Resource Hub - Core Application Logic
 * Supports 3rd, 4th, 5th, 6th, 7th, and 8th Semesters
 * Created and Maintained by B. Pramod
 * Sri Siddhartha Institute of Technology (SSIT), Tumakuru
 */

(function () {
  'use strict';

  // --- State Management ---
  const state = {
    searchQuery: '',
    selectedSemester: 'all', // 'all', '3rd Semester', '4th Semester', '5th Semester', '6th Semester', '7th Semester', '8th Semester'
    selectedCategory: 'All', // 'All', 'Notes', 'PYQ', etc.
    selectedSubject: 'All'   // 'All' or specific subject string
  };
