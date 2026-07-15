const linearAlgebraRoadmap = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra Learning Roadmap",

  description:
    "A structured pathway from vector foundations to advanced applications in artificial intelligence, data science, robotics, engineering, and research.",

  estimatedDuration: "12–16 weeks",

  totalModules: 12,

  totalLessons: 98,

  totalPythonLabs: 12,

  totalProjects: 12,

  totalResearchActivities: 12,

  philosophy: {
    statement:
      "Learners should progress from intuition and visual understanding to formal mathematics, computation, application, research, creation, and leadership.",

    principles: [
      "Begin with meaning before procedure.",
      "Connect algebra, geometry, and computation.",
      "Build mastery through practice and application.",
      "Use Python to verify and extend mathematical ideas.",
      "Create portfolio evidence throughout the course.",
      "Use research to move beyond known answers.",
      "Progress only when essential ideas are understood.",
    ],
  },

  phases: [
    {
      id: "phase-01",

      number: 1,

      title: "Foundations",

      subtitle: "Vectors, Matrices, Systems, and Determinants",

      weeks: "Weeks 1–4",

      moduleNumbers: [1, 2, 3, 4],

      color: "blue",

      goal:
        "Build fluency with vectors, matrices, systems of equations, determinants, and invertibility.",

      essentialQuestions: [
        "How can vectors represent direction, motion, and data?",
        "How do matrices organize and transform information?",
        "How can several constraints be solved simultaneously?",
        "What does a determinant reveal about a transformation?",
      ],

      skills: [
        "Represent vectors",
        "Perform vector operations",
        "Perform matrix operations",
        "Multiply matrices",
        "Solve linear systems",
        "Use row reduction",
        "Calculate determinants",
        "Analyze invertibility",
      ],

      requiredModules: [
        {
          moduleNumber: 1,
          title: "Vectors and Geometric Foundations",
          status: "Available",
        },
        {
          moduleNumber: 2,
          title: "Matrices and Matrix Operations",
          status: "Planned",
        },
        {
          moduleNumber: 3,
          title: "Systems of Linear Equations",
          status: "Planned",
        },
        {
          moduleNumber: 4,
          title: "Determinants and Invertibility",
          status: "Planned",
        },
      ],

      requiredLabs: [
        "python-lab-01",
        "python-lab-02",
        "python-lab-03",
        "python-lab-04",
      ],

      requiredProjects: [
        "vector-visualizer",
        "matrix-calculator",
      ],

      milestone: {
        title: "Foundations Builder",

        description:
          "Demonstrate fluency with vectors, matrices, systems, and determinants.",

        evidence: [
          "Vector toolkit",
          "Matrix calculator",
          "Linear-system solution",
          "Determinant visualization",
          "Phase reflection",
        ],
      },
    },

    {
      id: "phase-02",

      number: 2,

      title: "Structure and Transformation",

      subtitle:
        "Vector Spaces, Linear Transformations, Eigenvalues, and Orthogonality",

      weeks: "Weeks 5–8",

      moduleNumbers: [5, 6, 7, 8],

      color: "violet",

      goal:
        "Understand the deeper structure of vector spaces and how transformations act on them.",

      essentialQuestions: [
        "What makes a collection of vectors a space?",
        "How do basis and dimension organize information?",
        "How do matrices transform space?",
        "Which directions remain stable under transformation?",
        "Why is orthogonality so useful?",
      ],

      skills: [
        "Analyze span",
        "Test linear independence",
        "Construct a basis",
        "Determine dimension",
        "Represent transformations with matrices",
        "Compose transformations",
        "Calculate eigenvalues",
        "Calculate eigenvectors",
        "Project vectors",
        "Construct orthonormal bases",
      ],

      requiredModules: [
        {
          moduleNumber: 5,
          title: "Vector Spaces, Span, Basis, and Dimension",
          status: "Planned",
        },
        {
          moduleNumber: 6,
          title: "Linear Transformations",
          status: "Planned",
        },
        {
          moduleNumber: 7,
          title: "Eigenvalues and Eigenvectors",
          status: "Planned",
        },
        {
          moduleNumber: 8,
          title: "Orthogonality and Projections",
          status: "Planned",
        },
      ],

      requiredLabs: [
        "python-lab-05",
        "python-lab-06",
        "python-lab-07",
        "python-lab-08",
      ],

      requiredProjects: [
        "basis-coordinate-explorer",
        "transformation-studio",
        "eigenvector-explorer",
      ],

      milestone: {
        title: "Transformation Thinker",

        description:
          "Explain and visualize the structure of spaces and transformations.",

        evidence: [
          "Basis investigation",
          "Transformation studio",
          "Eigenvector analysis",
          "Projection tool",
          "Phase reflection",
        ],
      },
    },

    {
      id: "phase-03",

      number: 3,

      title: "Approximation and Computation",

      subtitle:
        "Least Squares, Singular Value Decomposition, and Numerical Methods",

      weeks: "Weeks 9–12",

      moduleNumbers: [9, 10, 11],

      color: "emerald",

      goal:
        "Use linear algebra to approximate, compress, and solve large computational problems reliably.",

      essentialQuestions: [
        "What is the best solution when no exact solution exists?",
        "How can complex matrices be simplified?",
        "How can we preserve important information while reducing dimension?",
        "How do numerical error and conditioning affect results?",
      ],

      skills: [
        "Apply least squares",
        "Derive normal equations",
        "Analyze residuals",
        "Perform SVD",
        "Construct low-rank approximations",
        "Evaluate reconstruction error",
        "Analyze condition numbers",
        "Compare numerical solvers",
      ],

      requiredModules: [
        {
          moduleNumber: 9,
          title: "Least Squares and Approximation",
          status: "Planned",
        },
        {
          moduleNumber: 10,
          title: "Singular Value Decomposition",
          status: "Planned",
        },
        {
          moduleNumber: 11,
          title: "Numerical Linear Algebra",
          status: "Planned",
        },
      ],

      requiredLabs: [
        "python-lab-09",
        "python-lab-10",
        "python-lab-11",
      ],

      requiredProjects: [
        "least-squares-model",
        "svd-image-compression",
        "numerical-solver-benchmark",
      ],

      milestone: {
        title: "Approximation Analyst",

        description:
          "Model noisy data, compress matrices, and evaluate numerical reliability.",

        evidence: [
          "Least-squares model",
          "SVD compression system",
          "Solver benchmark",
          "Error analysis",
          "Phase reflection",
        ],
      },
    },

    {
      id: "phase-04",

      number: 4,

      title: "Artificial Intelligence and Creation",

      subtitle:
        "Embeddings, Neural Networks, Computer Vision, and Capstone",

      weeks: "Weeks 13–16",

      moduleNumbers: [12],

      color: "amber",

      goal:
        "Integrate the complete course into explainable artificial-intelligence applications and original work.",

      essentialQuestions: [
        "How are data represented as vectors and matrices?",
        "How does matrix multiplication power neural networks?",
        "How do embeddings represent meaning?",
        "How do PCA and SVD support dimensionality reduction?",
        "What can a learner create using linear algebra?",
      ],

      skills: [
        "Represent data matrices",
        "Analyze feature vectors",
        "Use cosine similarity",
        "Implement affine transformations",
        "Build a neural-network layer",
        "Apply PCA",
        "Interpret embeddings",
        "Create an explainable AI application",
        "Present technical work",
      ],

      requiredModules: [
        {
          moduleNumber: 12,
          title: "Linear Algebra for Artificial Intelligence",
          status: "Planned",
        },
      ],

      requiredLabs: [
        "python-lab-12",
      ],

      requiredProjects: [
        "ai-linear-algebra-capstone",
      ],

      milestone: {
        title: "Linear Algebra Creator",

        description:
          "Create, test, document, and present an original application powered by linear algebra.",

        evidence: [
          "AI capstone",
          "Research extension",
          "Portfolio publication",
          "Technical presentation",
          "Final reflection",
        ],
      },
    },
  ],

  weeklyPlan: [
    {
      week: 1,
      phaseId: "phase-01",
      moduleNumbers: [1],
      focus: "Vectors and geometric foundations",
      deliverables: [
        "Vector lesson checks",
        "Python Vector Toolkit",
        "Interactive Vector Visualizer",
      ],
    },
    {
      week: 2,
      phaseId: "phase-01",
      moduleNumbers: [2],
      focus: "Matrices and matrix operations",
      deliverables: [
        "Matrix lesson checks",
        "Explainable Matrix Operations Lab",
        "Matrix Calculator progress",
      ],
    },
    {
      week: 3,
      phaseId: "phase-01",
      moduleNumbers: [3],
      focus: "Systems of linear equations",
      deliverables: [
        "Gaussian elimination practice",
        "Linear-System Solver Lab",
        "Module mastery assessment",
      ],
    },
    {
      week: 4,
      phaseId: "phase-01",
      moduleNumbers: [4],
      focus: "Determinants and invertibility",
      deliverables: [
        "Determinant Geometry Lab",
        "Foundations milestone",
        "Phase reflection",
      ],
    },
    {
      week: 5,
      phaseId: "phase-02",
      moduleNumbers: [5],
      focus: "Vector spaces, span, basis, and dimension",
      deliverables: [
        "Basis investigation",
        "Rank-nullity evidence",
        "Module mastery assessment",
      ],
    },
    {
      week: 6,
      phaseId: "phase-02",
      moduleNumbers: [6],
      focus: "Linear transformations",
      deliverables: [
        "Transformation Studio Lab",
        "Transformation composition analysis",
        "Portfolio update",
      ],
    },
    {
      week: 7,
      phaseId: "phase-02",
      moduleNumbers: [7],
      focus: "Eigenvalues and eigenvectors",
      deliverables: [
        "Eigenvector Explorer",
        "Repeated transformation experiment",
        "Research proposal",
      ],
    },
    {
      week: 8,
      phaseId: "phase-02",
      moduleNumbers: [8],
      focus: "Orthogonality and projections",
      deliverables: [
        "Projection and Gram-Schmidt Lab",
        "Transformation milestone",
        "Phase reflection",
      ],
    },
    {
      week: 9,
      phaseId: "phase-03",
      moduleNumbers: [9],
      focus: "Least squares and approximation",
      deliverables: [
        "Regression from first principles",
        "Residual analysis",
        "Least-squares project",
      ],
    },
    {
      week: 10,
      phaseId: "phase-03",
      moduleNumbers: [10],
      focus: "Singular value decomposition",
      deliverables: [
        "SVD Compression Lab",
        "Low-rank comparison",
        "Research evidence",
      ],
    },
    {
      week: 11,
      phaseId: "phase-03",
      moduleNumbers: [11],
      focus: "Numerical linear algebra",
      deliverables: [
        "Numerical Stability Lab",
        "Solver benchmark",
        "Engineering recommendation",
      ],
    },
    {
      week: 12,
      phaseId: "phase-03",
      moduleNumbers: [9, 10, 11],
      focus: "Approximation and computation integration",
      deliverables: [
        "Approximation milestone",
        "Research draft",
        "Phase reflection",
      ],
    },
    {
      week: 13,
      phaseId: "phase-04",
      moduleNumbers: [12],
      focus: "Data, feature vectors, and embeddings",
      deliverables: [
        "Embedding analysis",
        "Cosine similarity experiment",
        "Capstone proposal",
      ],
    },
    {
      week: 14,
      phaseId: "phase-04",
      moduleNumbers: [12],
      focus: "Neural networks and matrix operations",
      deliverables: [
        "Dense Neural Layer Lab",
        "Dimension analysis",
        "Capstone implementation",
      ],
    },
    {
      week: 15,
      phaseId: "phase-04",
      moduleNumbers: [12],
      focus: "PCA, computer vision, and evaluation",
      deliverables: [
        "AI visualization",
        "Testing and limitations",
        "Research report",
      ],
    },
    {
      week: 16,
      phaseId: "phase-04",
      moduleNumbers: [12],
      focus: "Creation, presentation, and leadership",
      deliverables: [
        "Final capstone",
        "Portfolio publication",
        "Technical presentation",
        "Final mastery challenge",
      ],
    },
  ],

  learningCycle: [
    {
      step: 1,
      title: "Problem",
      description:
        "Begin with a meaningful question, application, or challenge.",
    },
    {
      step: 2,
      title: "Intuition",
      description:
        "Build geometric, visual, and conceptual understanding.",
    },
    {
      step: 3,
      title: "Formal Mathematics",
      description:
        "Learn definitions, notation, derivations, and proofs.",
    },
    {
      step: 4,
      title: "Practice",
      description:
        "Strengthen accuracy, reasoning, and fluency.",
    },
    {
      step: 5,
      title: "Python",
      description:
        "Implement, verify, visualize, and test the mathematics.",
    },
    {
      step: 6,
      title: "Apply",
      description:
        "Use the concept in science, engineering, data, robotics, or AI.",
    },
    {
      step: 7,
      title: "Research",
      description:
        "Investigate a question using evidence and computation.",
    },
    {
      step: 8,
      title: "Create",
      description:
        "Produce original portfolio evidence.",
    },
    {
      step: 9,
      title: "Reflect",
      description:
        "Evaluate understanding, limitations, and next steps.",
    },
  ],

  progressMilestones: [
    {
      percent: 0,
      title: "Starting the Journey",
      description:
        "Complete the readiness diagnostic and select a preparation pathway.",
    },
    {
      percent: 10,
      title: "Vector Explorer",
      description:
        "Represent, calculate, compare, and visualize vectors.",
    },
    {
      percent: 25,
      title: "Foundations Builder",
      description:
        "Complete Modules 1–4 and foundational portfolio evidence.",
    },
    {
      percent: 40,
      title: "Space and Basis Thinker",
      description:
        "Explain span, independence, basis, dimension, and rank.",
    },
    {
      percent: 50,
      title: "Transformation Thinker",
      description:
        "Complete Modules 5–8 and the transformation milestone.",
    },
    {
      percent: 65,
      title: "Approximation Builder",
      description:
        "Use least squares and residual analysis on real data.",
    },
    {
      percent: 75,
      title: "Matrix Decomposition Analyst",
      description:
        "Apply SVD and analyze low-rank structure.",
    },
    {
      percent: 85,
      title: "Numerical Problem Solver",
      description:
        "Evaluate conditioning, stability, and solver performance.",
    },
    {
      percent: 95,
      title: "AI Mathematics Creator",
      description:
        "Complete the explainable AI capstone.",
    },
    {
      percent: 100,
      title: "Linear Algebra Creator",
      description:
        "Complete all mastery, research, portfolio, and presentation requirements.",
    },
  ],

  pathwayOptions: [
    {
      id: "standard-pathway",
      title: "Standard Academic Pathway",
      duration: "16 weeks",
      audience:
        "Learners completing the full course with weekly projects and research.",
      weeklyCommitment: "5–7 hours",
      requirements: [
        "All 12 modules",
        "At least 10 Python labs",
        "Five portfolio projects",
        "One research extension",
        "Final mastery challenge",
        "Capstone",
      ],
    },
    {
      id: "accelerated-pathway",
      title: "Accelerated AI Preparation Pathway",
      duration: "10–12 weeks",
      audience:
        "Learners with strong algebra, calculus, and programming foundations.",
      weeklyCommitment: "8–10 hours",
      requirements: [
        "All essential modules",
        "All AI-aligned labs",
        "Three portfolio projects",
        "One research extension",
        "AI capstone",
      ],
    },
    {
      id: "foundation-pathway",
      title: "Supported Foundations Pathway",
      duration: "18–24 weeks",
      audience:
        "Learners who need additional algebra, geometry, or Python support.",
      weeklyCommitment: "4–6 hours",
      requirements: [
        "Bridge lessons",
        "All 12 modules",
        "Guided practice",
        "At least 10 Python labs",
        "Five portfolio projects",
        "Capstone",
      ],
    },
    {
      id: "research-pathway",
      title: "Research and Graduate Preparation Pathway",
      duration: "16–20 weeks",
      audience:
        "Learners preparing for advanced study, research, or AI graduate programs.",
      weeklyCommitment: "8–12 hours",
      requirements: [
        "All 12 modules",
        "Proof and derivation extensions",
        "All Python labs",
        "Advanced numerical project",
        "Formal research paper",
        "Capstone presentation",
      ],
    },
  ],

  completionRequirements: {
    requiredModules: 12,
    requiredPythonLabs: 10,
    requiredPortfolioProjects: 5,
    requiredResearchActivities: 1,
    requiredPhaseMilestones: 4,
    finalMasteryChallengeRequired: true,
    capstoneRequired: true,
    portfolioRequired: true,
    minimumOverallMastery: 80,

    statement:
      "The course is complete when the learner demonstrates sustained mastery through mathematics, Python, application, research, creation, and communication.",
  },

  lumineryGuidance: {
    message:
      "Do not rush through the roadmap. Progress when you can explain the concept, perform the calculation, visualize the meaning, verify it with Python, and apply it independently.",

    recommendation:
      "Use the current phase milestone as your main goal. When you struggle, return to the earliest concept that is not yet clear.",
  },
};

export function getRoadmapPhaseById(id) {
  return linearAlgebraRoadmap.phases.find(
    (phase) => phase.id === id
  );
}

export function getRoadmapPhaseForModule(moduleNumber) {
  return linearAlgebraRoadmap.phases.find((phase) =>
    phase.moduleNumbers.includes(Number(moduleNumber))
  );
}

export function getRoadmapWeek(weekNumber) {
  return linearAlgebraRoadmap.weeklyPlan.find(
    (week) => week.week === Number(weekNumber)
  );
}

export function getProgressMilestone(progressPercent) {
  const numericProgress = Math.min(
    Math.max(Number(progressPercent) || 0, 0),
    100
  );

  return [...linearAlgebraRoadmap.progressMilestones]
    .reverse()
    .find((milestone) => numericProgress >= milestone.percent);
}

export function getPathwayById(id) {
  return linearAlgebraRoadmap.pathwayOptions.find(
    (pathway) => pathway.id === id
  );
}

export default linearAlgebraRoadmap;