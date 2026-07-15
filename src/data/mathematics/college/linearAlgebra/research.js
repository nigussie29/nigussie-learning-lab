const linearAlgebraResearch = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra Research Center",

  description:
    "Research is an essential part of learning mathematics. Learners investigate questions, collect evidence, analyze mathematical structures, implement computational experiments, and communicate discoveries.",

  philosophy: {
    statement:
      "Mathematics grows through curiosity. Every learner should move beyond solving problems to asking better questions.",

    principles: [
      "Research begins with curiosity.",
      "Every claim should be supported by mathematical evidence.",
      "Programming strengthens mathematical investigation.",
      "Visualization reveals hidden structures.",
      "Good research communicates both successes and limitations.",
      "Research should produce reusable knowledge.",
      "Original thinking is valued more than memorization."
    ]
  },

  researchWorkflow: [
    {
      stage: 1,
      title: "Ask",
      description:
        "Define a meaningful mathematical question."
    },
    {
      stage: 2,
      title: "Study",
      description:
        "Review mathematical background and previous work."
    },
    {
      stage: 3,
      title: "Model",
      description:
        "Translate the problem into mathematical language."
    },
    {
      stage: 4,
      title: "Experiment",
      description:
        "Use mathematics and Python to investigate."
    },
    {
      stage: 5,
      title: "Analyze",
      description:
        "Interpret numerical and visual evidence."
    },
    {
      stage: 6,
      title: "Conclude",
      description:
        "Summarize findings and discuss limitations."
    },
    {
      stage: 7,
      title: "Communicate",
      description:
        "Present the work professionally."
    }
  ],

  researchAreas: [
    {
      id: "geometry",
      title: "Geometry of Linear Algebra",

      topics: [
        "Vectors",
        "Subspaces",
        "Transformations",
        "Orthogonality",
        "Projection",
        "Dimension"
      ]
    },

    {
      id: "numerical",

      title: "Numerical Linear Algebra",

      topics: [
        "Condition numbers",
        "Floating point error",
        "Matrix factorization",
        "Sparse matrices",
        "Iterative solvers"
      ]
    },

    {
      id: "machine-learning",

      title: "Artificial Intelligence",

      topics: [
        "Embeddings",
        "Recommendation systems",
        "Neural networks",
        "PCA",
        "Computer Vision",
        "Natural Language Processing"
      ]
    },

    {
      id: "robotics",

      title: "Robotics",

      topics: [
        "Coordinate systems",
        "Robot kinematics",
        "Transformation matrices",
        "Localization",
        "Motion planning"
      ]
    },

    {
      id: "computer-graphics",

      title: "Computer Graphics",

      topics: [
        "3D transformations",
        "Rendering",
        "Animation",
        "Camera models"
      ]
    },

    {
      id: "data-science",

      title: "Data Science",

      topics: [
        "Regression",
        "Dimensionality reduction",
        "Feature engineering",
        "Similarity search"
      ]
    }
  ],

  researchProjects: [

    {
      id: "research-01",

      module: 1,

      title: "How Do Search Engines Compare Documents?",

      researchQuestion:
        "How does cosine similarity measure document similarity?",

      mathematics: [
        "Vectors",
        "Dot Product",
        "Magnitude",
        "Cosine Similarity"
      ],

      deliverables: [
        "Literature review",
        "Python notebook",
        "Visualizations",
        "Reflection"
      ]
    },

    {
      id: "research-02",

      module: 2,

      title: "Matrix Multiplication in Neural Networks",

      researchQuestion:
        "Why is matrix multiplication the foundation of deep learning?",

      mathematics: [
        "Matrices",
        "Matrix Multiplication",
        "Dimensions"
      ],

      deliverables: [
        "Research paper",
        "Python implementation",
        "Network visualization"
      ]
    },

    {
      id: "research-03",

      module: 3,

      title: "Real-World Linear Systems",

      researchQuestion:
        "How can systems of equations model engineering and business constraints?",

      mathematics: [
        "Gaussian Elimination",
        "Row Reduction",
        "Linear Systems"
      ],

      deliverables: [
        "Case study",
        "Python solver",
        "Presentation"
      ]
    },

    {
      id: "research-04",

      module: 4,

      title: "Determinants and Geometry",

      researchQuestion:
        "How does the determinant explain area and volume scaling?",

      mathematics: [
        "Determinants",
        "Area",
        "Volume",
        "Transformation"
      ],

      deliverables: [
        "Interactive visualization",
        "Written explanation",
        "Reflection"
      ]
    },

    {
      id: "research-05",

      module: 5,

      title: "Finding Better Coordinate Systems",

      researchQuestion:
        "Why are basis vectors important in engineering and AI?",

      mathematics: [
        "Basis",
        "Span",
        "Dimension",
        "Coordinate Systems"
      ],

      deliverables: [
        "Python demonstration",
        "Research summary",
        "Presentation"
      ]
    },

    {
      id: "research-06",

      module: 6,

      title: "Transformation Matrices in Robotics",

      researchQuestion:
        "How do robots understand movement through transformation matrices?",

      mathematics: [
        "Linear Transformations",
        "Rotation",
        "Translation",
        "Coordinate Frames"
      ],

      deliverables: [
        "Robot simulation",
        "Python notebook",
        "Technical report"
      ]
    }
  ],

  researchTemplate: {

    title: "",

    abstract: "",

    introduction: "",

    literatureReview: "",

    mathematicalBackground: "",

    methodology: "",

    experiments: "",

    results: "",

    discussion: "",

    conclusion: "",

    futureWork: "",

    references: []
  },
    advancedResearchProjects: [
    {
      id: "research-07",

      module: 7,

      title: "Eigenvectors and Ranking Systems",

      researchQuestion:
        "How can eigenvectors identify important pages, nodes, or states in a network?",

      mathematics: [
        "Eigenvalues",
        "Eigenvectors",
        "Transition matrices",
        "Repeated matrix multiplication",
        "Steady-state behavior"
      ],

      methodology: [
        "Create a small directed network.",
        "Represent the network using a transition matrix.",
        "Calculate the dominant eigenvector.",
        "Compare the eigenvector ranking with repeated multiplication.",
        "Interpret the ranking results."
      ],

      deliverables: [
        "Network diagram",
        "Transition matrix",
        "Eigenvalue analysis",
        "Python notebook",
        "Results discussion",
        "Research presentation"
      ]
    },

    {
      id: "research-08",

      module: 8,

      title: "Orthogonality in Signal Decomposition",

      researchQuestion:
        "How does orthogonality help separate useful signals into independent components?",

      mathematics: [
        "Orthogonality",
        "Dot product",
        "Projection",
        "Orthonormal basis",
        "Residual"
      ],

      methodology: [
        "Create or select a simple signal.",
        "Choose orthogonal basis vectors.",
        "Project the signal onto the basis.",
        "Reconstruct the signal.",
        "Measure reconstruction error."
      ],

      deliverables: [
        "Signal representation",
        "Projection calculations",
        "Python implementation",
        "Reconstruction visualization",
        "Error analysis",
        "Research report"
      ]
    },

    {
      id: "research-09",

      module: 9,

      title: "How Does Noise Affect Least Squares?",

      researchQuestion:
        "How do noise level and outliers affect least-squares estimates and residuals?",

      mathematics: [
        "Least squares",
        "Normal equations",
        "Projection",
        "Regression",
        "Residuals"
      ],

      methodology: [
        "Generate a synthetic linear dataset.",
        "Add controlled levels of random noise.",
        "Add selected outliers.",
        "Fit least-squares models.",
        "Compare coefficients and residuals.",
        "Evaluate model stability."
      ],

      deliverables: [
        "Synthetic datasets",
        "Regression models",
        "Residual plots",
        "Coefficient comparison",
        "Python notebook",
        "Discussion of limitations"
      ]
    },

    {
      id: "research-10",

      module: 10,

      title: "SVD, Compression, and Image Quality",

      researchQuestion:
        "How does matrix rank affect compression, reconstruction error, and perceived image quality?",

      mathematics: [
        "Singular value decomposition",
        "Singular values",
        "Matrix rank",
        "Low-rank approximation",
        "Reconstruction error"
      ],

      methodology: [
        "Select one or more grayscale images.",
        "Calculate the singular value decomposition.",
        "Create several low-rank approximations.",
        "Measure reconstruction error.",
        "Estimate storage reduction.",
        "Compare visual quality."
      ],

      deliverables: [
        "Original image",
        "Singular-value plot",
        "Rank-k reconstructions",
        "Error table",
        "Compression analysis",
        "Research report"
      ]
    },

    {
      id: "research-11",

      module: 11,

      title: "Condition Numbers and Numerical Reliability",

      researchQuestion:
        "How does matrix conditioning influence the accuracy of computed solutions?",

      mathematics: [
        "Condition number",
        "Numerical stability",
        "Floating-point error",
        "Linear systems",
        "Matrix factorization"
      ],

      methodology: [
        "Create well-conditioned and ill-conditioned matrices.",
        "Solve each system numerically.",
        "Perturb the input values slightly.",
        "Measure changes in the solutions.",
        "Compare multiple solving methods.",
        "Analyze the relationship between condition number and error."
      ],

      deliverables: [
        "Test matrices",
        "Condition numbers",
        "Solution comparisons",
        "Error visualizations",
        "Python experiments",
        "Engineering recommendation"
      ]
    },

    {
      id: "research-12",

      module: 12,

      title: "Linear Algebra Inside Artificial Intelligence",

      researchQuestion:
        "How do vectors, matrices, embeddings, and transformations work together inside an AI system?",

      mathematics: [
        "Feature vectors",
        "Embeddings",
        "Matrix multiplication",
        "Affine transformations",
        "Cosine similarity",
        "Dimensionality reduction"
      ],

      methodology: [
        "Select an AI application.",
        "Identify the vectors and matrices used by the system.",
        "Implement a simplified mathematical model.",
        "Visualize one internal transformation.",
        "Evaluate the output.",
        "Explain limitations and possible improvements."
      ],

      deliverables: [
        "AI problem statement",
        "Mathematical model",
        "Python implementation",
        "Visualization",
        "Testing evidence",
        "Research paper",
        "Presentation"
      ]
    }
  ],

  researchMethods: [
    {
      id: "computational-experiment",

      title: "Computational Experiment",

      description:
        "Use Python to generate evidence, compare methods, or test mathematical behavior.",

      appropriateFor: [
        "Numerical stability",
        "Algorithm comparison",
        "Noise experiments",
        "Matrix approximation",
        "Simulation"
      ],

      requiredEvidence: [
        "Reproducible code",
        "Input description",
        "Experimental controls",
        "Results",
        "Interpretation",
        "Limitations"
      ]
    },

    {
      id: "mathematical-analysis",

      title: "Mathematical Analysis",

      description:
        "Use definitions, derivations, proofs, examples, and counterexamples to investigate a question.",

      appropriateFor: [
        "Vector spaces",
        "Independence",
        "Basis",
        "Determinants",
        "Eigenvalues",
        "Orthogonality"
      ],

      requiredEvidence: [
        "Definitions",
        "Logical argument",
        "Calculations",
        "Examples",
        "Conclusion"
      ]
    },

    {
      id: "data-analysis",

      title: "Data Analysis",

      description:
        "Use a dataset to test a mathematical model or evaluate an application.",

      appropriateFor: [
        "Least squares",
        "PCA",
        "Embeddings",
        "Recommendation systems",
        "Image compression"
      ],

      requiredEvidence: [
        "Dataset description",
        "Preparation steps",
        "Mathematical method",
        "Results",
        "Visualizations",
        "Interpretation"
      ]
    },

    {
      id: "comparative-study",

      title: "Comparative Study",

      description:
        "Compare two or more methods, representations, algorithms, or parameter choices.",

      appropriateFor: [
        "Matrix solvers",
        "Regression methods",
        "Compression ranks",
        "Similarity measures",
        "Factorization methods"
      ],

      requiredEvidence: [
        "Comparison criteria",
        "Consistent test conditions",
        "Results table",
        "Advantages",
        "Limitations",
        "Recommendation"
      ]
    },

    {
      id: "case-study",

      title: "Applied Case Study",

      description:
        "Investigate how linear algebra is used in a specific scientific, engineering, business, or AI context.",

      appropriateFor: [
        "Robotics",
        "Computer graphics",
        "Finance",
        "Medical imaging",
        "Search engines",
        "Autonomous systems"
      ],

      requiredEvidence: [
        "Problem context",
        "Mathematical model",
        "Implementation or analysis",
        "Findings",
        "Professional implications"
      ]
    }
  ],

  proposalTemplate: {
    title: "",

    researcher: "",

    moduleNumber: null,

    researchQuestion: "",

    background:
      "Explain the mathematical and real-world background of the problem.",

    significance:
      "Explain why this research question matters.",

    hypothesis:
      "State a prediction when appropriate.",

    mathematicalConcepts: [],

    method:
      "Describe the mathematical, computational, or data-analysis method.",

    evidencePlan:
      "Describe what evidence will be collected or generated.",

    tools: [],

    expectedResults:
      "Describe the results you expect and why.",

    possibleLimitations: [],

    references: []
  },

  finalReportTemplate: {
    title: "",

    abstract:
      "Summarize the question, method, main findings, and conclusion.",

    introduction:
      "Introduce the problem, purpose, and significance.",

    researchQuestion: "",

    background:
      "Explain the relevant mathematical concepts and previous work.",

    methodology:
      "Describe the procedure clearly enough for another learner to reproduce it.",

    mathematicalModel:
      "Present the equations, vectors, matrices, transformations, or algorithms used.",

    dataOrInputs:
      "Describe datasets, matrices, images, simulations, or other inputs.",

    results:
      "Present calculations, tables, graphs, visualizations, and observations.",

    discussion:
      "Interpret the results and explain what they mean.",

    limitations:
      "Identify assumptions, uncertainty, weaknesses, and possible sources of error.",

    conclusion:
      "Answer the research question based on the evidence.",

    futureWork:
      "Propose a meaningful next question or extension.",

    references: [],

    appendix:
      "Include code, additional calculations, or supporting evidence."
  },

  researchRubric: [
    {
      criterion: "Research question",

      weight: 10,

      advanced:
        "The question is focused, meaningful, original, and mathematically investigable.",

      proficient:
        "The question is clear, relevant, and mathematically investigable.",

      developing:
        "The question is broad, unclear, or only partly connected to mathematics.",

      beginning:
        "The question is missing or cannot be investigated using the proposed method."
    },

    {
      criterion: "Background and sources",

      weight: 15,

      advanced:
        "The learner synthesizes credible sources and clearly connects them to the investigation.",

      proficient:
        "The learner uses credible sources and explains the necessary mathematical background.",

      developing:
        "The background is incomplete or sources are weakly connected.",

      beginning:
        "The background is inaccurate, unsupported, or missing."
    },

    {
      criterion: "Mathematical model",

      weight: 15,

      advanced:
        "The model is accurate, well justified, and extended thoughtfully.",

      proficient:
        "The model is accurate and appropriate for the research question.",

      developing:
        "The model contains gaps or requires additional justification.",

      beginning:
        "The model is incorrect or not connected to the research question."
    },

    {
      criterion: "Methodology",

      weight: 15,

      advanced:
        "The method is rigorous, reproducible, efficient, and carefully controlled.",

      proficient:
        "The method is appropriate, clear, and reproducible.",

      developing:
        "The method is partially appropriate but lacks clarity or control.",

      beginning:
        "The method is incomplete, inappropriate, or not reproducible."
    },

    {
      criterion: "Evidence and analysis",

      weight: 25,

      advanced:
        "Evidence is complete and analyzed deeply using mathematics, computation, and multiple representations.",

      proficient:
        "Evidence is relevant and analyzed accurately.",

      developing:
        "Evidence is limited or analysis is mostly descriptive.",

      beginning:
        "Evidence is missing, inaccurate, or not analyzed."
    },

    {
      criterion: "Discussion and limitations",

      weight: 10,

      advanced:
        "The learner interprets findings critically and evaluates uncertainty, assumptions, and limitations.",

      proficient:
        "The learner explains findings and identifies meaningful limitations.",

      developing:
        "The discussion is brief or limitations are superficial.",

      beginning:
        "The learner makes unsupported claims or ignores limitations."
    },

    {
      criterion: "Communication and documentation",

      weight: 10,

      advanced:
        "The report is exceptionally clear, professional, reproducible, and visually effective.",

      proficient:
        "The report is organized, clear, referenced, and professionally presented.",

      developing:
        "The report communicates the main ideas but lacks clarity or completeness.",

      beginning:
        "The report is difficult to follow, incomplete, or poorly documented."
    }
  ],

  publicationStandards: {
    minimumSources: 3,

    citationStyle:
      "Use one consistent citation style selected by the instructor.",

    codeRequirements: [
      "Code must run without preventable errors.",
      "Functions and important steps must be documented.",
      "Inputs and dependencies must be identified.",
      "Results must be reproducible.",
      "External code must be credited."
    ],

    visualizationRequirements: [
      "Every chart must have a clear title.",
      "Axes must be labeled when applicable.",
      "Legends must be included when needed.",
      "Visualizations must be discussed in the report.",
      "Decorative graphics must not replace evidence."
    ],

    ethicsRequirements: [
      "Use data legally and responsibly.",
      "Protect private information.",
      "Do not fabricate results.",
      "Disclose AI assistance when required.",
      "Credit all sources and collaborators.",
      "Report unexpected or negative results honestly."
    ]
  },

  portfolioRequirements: {
    requiredArtifacts: [
      "Research proposal",
      "Research notebook",
      "Mathematical model",
      "Python code",
      "Evidence and visualizations",
      "Final report",
      "Presentation",
      "Reflection"
    ],

    reflectionPrompts: [
      "How did your research question change?",
      "Which mathematical concept became clearer?",
      "What evidence surprised you?",
      "What limitations affected the investigation?",
      "What would you improve in a second study?",
      "What new question emerged?"
    ]
  },

  completionRequirements: {
    requiredResearchActivities: 1,

    minimumRubricScore: 80,

    requiredProposal: true,

    requiredFinalReport: true,

    requiredPythonOrMathematicalEvidence: true,

    requiredPresentation: true,

    requiredPortfolioArtifact: true,

    statement:
      "Research completion requires evidence of authentic investigation, mathematical reasoning, transparent methodology, and professional communication."
  },

  lumineryGuidance: {
    message:
      "A strong research project does not begin with an answer. It begins with a question that can be investigated honestly through mathematics and evidence.",

    recommendation:
      "Keep the first experiment small, document every decision, analyze unexpected results, and distinguish clearly between evidence and opinion."
  }
};

export function getResearchProjectById(id) {
  return [
    ...linearAlgebraResearch.researchProjects,
    ...linearAlgebraResearch.advancedResearchProjects
  ].find((project) => project.id === id);
}

export function getResearchProjectsForModule(moduleNumber) {
  return [
    ...linearAlgebraResearch.researchProjects,
    ...linearAlgebraResearch.advancedResearchProjects
  ].filter((project) => project.module === Number(moduleNumber));
}

export function getResearchMethodById(id) {
  return linearAlgebraResearch.researchMethods.find(
    (method) => method.id === id
  );
}

export function getAllResearchProjects() {
  return [
    ...linearAlgebraResearch.researchProjects,
    ...linearAlgebraResearch.advancedResearchProjects
  ];
}

export function calculateResearchRubricScore(scores = {}) {
  const total = linearAlgebraResearch.researchRubric.reduce(
    (sum, criterion) => {
      const score = Number(scores[criterion.criterion] ?? 0);

      return sum + score * (criterion.weight / 100);
    },
    0
  );

  return Number(total.toFixed(2));
}

export default linearAlgebraResearch;