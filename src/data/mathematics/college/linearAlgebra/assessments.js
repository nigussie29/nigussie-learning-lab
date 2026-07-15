const linearAlgebraAssessments = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra Assessment System",

  description:
    "A mastery-based assessment system that measures conceptual understanding, mathematical reasoning, computation, visualization, Python implementation, application, research, and communication.",

  philosophy: {
    statement:
      "Assessment should measure what learners can explain, calculate, visualize, build, apply, research, and create—not merely what pages they completed.",

    principles: [
      "Use assessment to improve learning.",
      "Measure understanding before memorization.",
      "Require mathematical reasoning and justification.",
      "Connect symbolic, geometric, and computational representations.",
      "Allow revision after meaningful feedback.",
      "Collect authentic portfolio evidence.",
      "Measure mastery through multiple forms of evidence.",
    ],
  },

  gradingModel: {
    lessonChecks: 10,
    moduleAssessments: 25,
    pythonLabs: 20,
    portfolioProjects: 20,
    researchExtension: 10,
    finalMasteryChallenge: 15,
  },

  assessmentTypes: [
    {
      id: "diagnostic",
      title: "Readiness Diagnostic",
      type: "Diagnostic",
      weight: 0,

      purpose:
        "Identify prerequisite strengths and learning gaps before the course begins.",

      evidence: [
        "Algebra readiness",
        "Function knowledge",
        "Systems of equations",
        "Coordinate geometry",
        "Basic trigonometry",
        "Mathematical reasoning",
      ],
    },

    {
      id: "lesson-checks",
      title: "Lesson Mastery Checks",
      type: "Formative",
      weight: 10,

      purpose:
        "Provide immediate feedback after each lesson and identify concepts requiring additional practice.",

      evidence: [
        "Concept explanation",
        "Short calculation",
        "Visual interpretation",
        "Error analysis",
        "Reflection",
      ],
    },

    {
      id: "module-assessments",
      title: "Module Mastery Assessments",
      type: "Summative",
      weight: 25,

      purpose:
        "Measure independent mastery of the knowledge and skills in each module.",

      evidence: [
        "Conceptual understanding",
        "Mathematical accuracy",
        "Reasoning",
        "Visualization",
        "Python application",
        "Real-world interpretation",
      ],
    },

    {
      id: "python-labs",
      title: "Python Laboratory Assessments",
      type: "Performance",
      weight: 20,

      purpose:
        "Measure learners’ ability to implement, test, visualize, and explain linear algebra computationally.",

      evidence: [
        "Working code",
        "Correct mathematical implementation",
        "Test cases",
        "Visual output",
        "Code documentation",
        "Interpretation",
      ],
    },

    {
      id: "portfolio-projects",
      title: "Portfolio Projects",
      type: "Authentic",
      weight: 20,

      purpose:
        "Measure the ability to design, build, document, and communicate meaningful mathematical applications.",

      evidence: [
        "Problem statement",
        "Mathematical model",
        "Implementation",
        "Testing",
        "Visualization",
        "Documentation",
        "Reflection",
      ],
    },

    {
      id: "research-extension",
      title: "Research Extension",
      type: "Research",
      weight: 10,

      purpose:
        "Measure evidence-based investigation, analysis, uncertainty, and professional communication.",

      evidence: [
        "Research question",
        "Background",
        "Method",
        "Evidence",
        "Results",
        "Limitations",
        "Conclusion",
        "References",
      ],
    },

    {
      id: "final-mastery-challenge",
      title: "Final Mastery Challenge",
      type: "Capstone",
      weight: 15,

      purpose:
        "Integrate mathematical understanding, Python, application, research, portfolio creation, and communication.",

      evidence: [
        "Complete mathematical model",
        "Accurate calculations",
        "Python implementation",
        "Visualizations",
        "Testing",
        "Application",
        "Research reflection",
        "Technical presentation",
      ],
    },
  ],

  lessonCheckTemplate: {
    title: "Lesson Mastery Check",

    totalPoints: 20,

    passingScore: 16,

    sections: [
      {
        id: "lesson-concept",
        title: "Explain the Concept",
        points: 4,

        instructions:
          "Explain the central idea of the lesson using your own words.",

        criteria: [
          "Uses accurate vocabulary",
          "Explains mathematical meaning",
          "Connects the idea to the lesson problem",
        ],
      },

      {
        id: "lesson-calculation",
        title: "Complete a Calculation",
        points: 5,

        instructions:
          "Solve one representative mathematical problem and show all important steps.",

        criteria: [
          "Correct setup",
          "Accurate calculation",
          "Clear notation",
          "Answer verified",
        ],
      },

      {
        id: "lesson-visualization",
        title: "Interpret a Representation",
        points: 3,

        instructions:
          "Interpret a graph, geometric diagram, vector model, or matrix representation.",

        criteria: [
          "Connects visual and algebraic meaning",
          "Identifies important structure",
        ],
      },

      {
        id: "lesson-error-analysis",
        title: "Analyze an Error",
        points: 4,

        instructions:
          "Identify, explain, and correct a common mathematical mistake.",

        criteria: [
          "Identifies the exact error",
          "Explains why it is incorrect",
          "Provides a correct solution",
        ],
      },

      {
        id: "lesson-reflection",
        title: "Reflect",
        points: 4,

        instructions:
          "Describe what you understood, what remains difficult, and how the concept connects to another topic.",

        criteria: [
          "Honest reflection",
          "Meaningful connection",
          "Clear next step",
        ],
      },
    ],
  },

  moduleAssessments: [
    {
      id: "module-01-assessment",
      moduleNumber: 1,
      moduleSlug: "vectors",
      title: "Vectors and Geometric Foundations Mastery Assessment",

      focus: [
        "Scalars and vectors",
        "Components",
        "Magnitude",
        "Normalization",
        "Vector operations",
        "Dot product",
        "Angles",
        "Cosine similarity",
      ],

      appliedTask:
        "Model and visualize a navigation, force, or data-similarity problem using vectors.",
    },

    {
      id: "module-02-assessment",
      moduleNumber: 2,
      moduleSlug: "matrices",
      title: "Matrices and Matrix Operations Mastery Assessment",

      focus: [
        "Matrix notation",
        "Dimensions",
        "Special matrices",
        "Addition",
        "Scaling",
        "Transpose",
        "Matrix multiplication",
        "Composition",
      ],

      appliedTask:
        "Build or analyze an explainable matrix-calculation process.",
    },

    {
      id: "module-03-assessment",
      moduleNumber: 3,
      moduleSlug: "systems-of-linear-equations",
      title: "Systems of Linear Equations Mastery Assessment",

      focus: [
        "Systems as constraints",
        "Graphical interpretation",
        "Augmented matrices",
        "Row operations",
        "Gaussian elimination",
        "RREF",
        "Pivot variables",
        "Free variables",
      ],

      appliedTask:
        "Model and solve a real resource, mixture, network, or allocation problem.",
    },

    {
      id: "module-04-assessment",
      moduleNumber: 4,
      moduleSlug: "determinants",
      title: "Determinants and Invertibility Mastery Assessment",

      focus: [
        "2×2 determinants",
        "3×3 determinants",
        "Determinant properties",
        "Area and volume scaling",
        "Orientation",
        "Singularity",
        "Invertibility",
      ],

      appliedTask:
        "Analyze how a transformation changes area, orientation, and invertibility.",
    },

    {
      id: "module-05-assessment",
      moduleNumber: 5,
      moduleSlug: "vector-spaces",
      title: "Vector Spaces, Span, Basis, and Dimension Assessment",

      focus: [
        "Linear combinations",
        "Span",
        "Subspaces",
        "Linear independence",
        "Basis",
        "Dimension",
        "Column space",
        "Null space",
        "Rank",
      ],

      appliedTask:
        "Determine an efficient basis and explain what information it preserves.",
    },

    {
      id: "module-06-assessment",
      moduleNumber: 6,
      moduleSlug: "linear-transformations",
      title: "Linear Transformations Mastery Assessment",

      focus: [
        "Definition of linearity",
        "Matrix representation",
        "Scaling",
        "Shearing",
        "Rotation",
        "Reflection",
        "Projection",
        "Composition",
        "Kernel and image",
      ],

      appliedTask:
        "Design and visualize a sequence of geometric transformations.",
    },

    {
      id: "module-07-assessment",
      moduleNumber: 7,
      moduleSlug: "eigenvalues-and-eigenvectors",
      title: "Eigenvalues and Eigenvectors Mastery Assessment",

      focus: [
        "Eigenvalue equation",
        "Characteristic polynomial",
        "Eigenvalues",
        "Eigenvectors",
        "Eigenspaces",
        "Geometric meaning",
        "Diagonalization",
        "Repeated transformations",
      ],

      appliedTask:
        "Analyze stability, ranking, principal directions, or repeated transformation behavior.",
    },

    {
      id: "module-08-assessment",
      moduleNumber: 8,
      moduleSlug: "orthogonality",
      title: "Orthogonality and Projections Mastery Assessment",

      focus: [
        "Orthogonal vectors",
        "Orthonormal sets",
        "Projection onto a vector",
        "Projection onto a subspace",
        "Residuals",
        "Orthogonal complements",
        "Gram-Schmidt",
      ],

      appliedTask:
        "Decompose a vector into projected and perpendicular components.",
    },

    {
      id: "module-09-assessment",
      moduleNumber: 9,
      moduleSlug: "least-squares",
      title: "Least Squares and Approximation Mastery Assessment",

      focus: [
        "Inconsistent systems",
        "Projection interpretation",
        "Normal equations",
        "Least-squares solutions",
        "Regression",
        "Residual analysis",
        "Model limitations",
      ],

      appliedTask:
        "Build and evaluate a least-squares model using real or simulated data.",
    },

    {
      id: "module-10-assessment",
      moduleNumber: 10,
      moduleSlug: "singular-value-decomposition",
      title: "Singular Value Decomposition Mastery Assessment",

      focus: [
        "SVD structure",
        "Left singular vectors",
        "Right singular vectors",
        "Singular values",
        "Rank",
        "Low-rank approximation",
        "Compression",
        "SVD and PCA",
      ],

      appliedTask:
        "Create and evaluate a low-rank image or data approximation.",
    },

    {
      id: "module-11-assessment",
      moduleNumber: 11,
      moduleSlug: "numerical-linear-algebra",
      title: "Numerical Linear Algebra Mastery Assessment",

      focus: [
        "Floating-point error",
        "Conditioning",
        "Numerical stability",
        "LU factorization",
        "QR factorization",
        "Iterative methods",
        "Sparse matrices",
        "Computational complexity",
      ],

      appliedTask:
        "Compare numerical methods using runtime, accuracy, and stability.",
    },

    {
      id: "module-12-assessment",
      moduleNumber: 12,
      moduleSlug: "linear-algebra-for-ai",
      title: "Linear Algebra for Artificial Intelligence Assessment",

      focus: [
        "Data matrices",
        "Feature vectors",
        "Embeddings",
        "Matrix multiplication in neural networks",
        "Weights and biases",
        "Cosine similarity",
        "PCA",
        "Computer vision",
        "Tensors",
      ],

      appliedTask:
        "Build an explainable AI application powered by linear algebra.",
    },
  ],

  moduleAssessmentTemplate: {
    totalPoints: 100,

    passingScore: 80,

    sections: [
      {
        id: "conceptual-understanding",
        title: "Conceptual Understanding",
        points: 20,

        description:
          "Explain definitions, relationships, and mathematical meaning.",
      },

      {
        id: "mathematical-calculation",
        title: "Mathematical Calculation",
        points: 25,

        description:
          "Perform calculations accurately using correct notation and methods.",
      },

      {
        id: "reasoning-justification",
        title: "Reasoning and Justification",
        points: 20,

        description:
          "Explain why the selected method works and justify important steps.",
      },

      {
        id: "visual-interpretation",
        title: "Visualization and Interpretation",
        points: 15,

        description:
          "Connect algebraic results to geometry, data, diagrams, or transformations.",
      },

      {
        id: "python-application",
        title: "Python or Applied Task",
        points: 20,

        description:
          "Implement, verify, visualize, or apply the mathematics computationally.",
      },
    ],
  },

  pythonLabRubric: [
    {
      criterion: "Mathematical accuracy",
      weight: 25,

      proficient:
        "The implementation correctly represents the mathematics.",
    },

    {
      criterion: "Code correctness",
      weight: 20,

      proficient:
        "The code runs correctly and produces expected results.",
    },

    {
      criterion: "Testing",
      weight: 15,

      proficient:
        "The submission includes meaningful normal, boundary, and error tests.",
    },

    {
      criterion: "Visualization and interpretation",
      weight: 15,

      proficient:
        "Outputs are clear and correctly interpreted.",
    },

    {
      criterion: "Code quality",
      weight: 15,

      proficient:
        "Code is organized, readable, reusable, and documented.",
    },

    {
      criterion: "Reflection",
      weight: 10,

      proficient:
        "The learner explains findings, difficulties, and improvements.",
    },
  ],

  projectRubric: [
    {
      criterion: "Problem definition",
      weight: 10,

      proficient:
        "The project addresses a meaningful and clearly defined problem.",
    },

    {
      criterion: "Mathematical model",
      weight: 20,

      proficient:
        "The selected linear algebra model is correct and well justified.",
    },

    {
      criterion: "Implementation",
      weight: 20,

      proficient:
        "The project is functional and implements the mathematical model accurately.",
    },

    {
      criterion: "Testing and evaluation",
      weight: 15,

      proficient:
        "The learner tests the project and evaluates performance or limitations.",
    },

    {
      criterion: "Visualization",
      weight: 10,

      proficient:
        "Visual evidence clearly supports understanding and analysis.",
    },

    {
      criterion: "Documentation",
      weight: 15,

      proficient:
        "The project contains professional explanations, instructions, and evidence.",
    },

    {
      criterion: "Originality and reflection",
      weight: 10,

      proficient:
        "The learner extends the work and reflects meaningfully on the process.",
    },
  ],

  researchRubric: [
    {
      criterion: "Research question",
      weight: 10,

      proficient:
        "The question is focused, meaningful, and mathematically investigable.",
    },

    {
      criterion: "Background and sources",
      weight: 15,

      proficient:
        "The learner uses credible sources and explains relevant mathematical background.",
    },

    {
      criterion: "Method",
      weight: 20,

      proficient:
        "The method is appropriate, reproducible, and clearly explained.",
    },

    {
      criterion: "Evidence and analysis",
      weight: 25,

      proficient:
        "Evidence is analyzed accurately using mathematics and computation.",
    },

    {
      criterion: "Discussion and limitations",
      weight: 15,

      proficient:
        "The learner interprets findings and acknowledges uncertainty and limitations.",
    },

    {
      criterion: "Communication",
      weight: 15,

      proficient:
        "The report is organized, clear, properly referenced, and professional.",
    },
  ],

  masteryLevels: [
    {
      level: 1,
      name: "Beginning",
      minimumScore: 0,
      maximumScore: 59,

      description:
        "The learner recognizes some ideas but requires substantial support.",

      nextAction:
        "Review prerequisite ideas and complete guided practice.",
    },

    {
      level: 2,
      name: "Developing",
      minimumScore: 60,
      maximumScore: 79,

      description:
        "The learner completes familiar procedures but needs stronger explanation and consistency.",

      nextAction:
        "Correct errors, complete targeted practice, and reassess.",
    },

    {
      level: 3,
      name: "Proficient",
      minimumScore: 80,
      maximumScore: 89,

      description:
        "The learner solves and explains standard and unfamiliar problems accurately.",

      nextAction:
        "Continue to applications, projects, and research.",
    },

    {
      level: 4,
      name: "Advanced",
      minimumScore: 90,
      maximumScore: 96,

      description:
        "The learner connects representations, evaluates methods, and applies ideas independently.",

      nextAction:
        "Complete advanced applications and creator challenges.",
    },

    {
      level: 5,
      name: "Creator",
      minimumScore: 97,
      maximumScore: 100,

      description:
        "The learner produces original mathematical, computational, or research work and communicates it effectively.",

      nextAction:
        "Publish portfolio evidence, mentor peers, and pursue deeper research.",
    },
  ],

  reassessmentPolicy: {
    allowed: true,

    statement:
      "Learners may reassess after completing corrections, reflection, and targeted practice.",

    requirements: [
      "Review feedback.",
      "Correct previous errors.",
      "Explain why each error occurred.",
      "Complete assigned practice.",
      "Submit a reassessment request.",
    ],

    scorePolicy:
      "The newest demonstrated mastery score replaces the earlier score when the reassessment is completed honestly and independently.",
  },

  finalMasteryChallenge: {
    id: "linear-algebra-final-mastery-challenge",

    title: "Explainable Linear Algebra Final Mastery Challenge",

    totalPoints: 100,

    passingScore: 80,

    purpose:
      "Demonstrate integrated mastery of linear algebra through mathematics, programming, application, research, creation, and communication.",

    requiredComponents: [
      {
        title: "Concept Map",
        points: 10,

        description:
          "Show how vectors, matrices, systems, transformations, vector spaces, eigenvalues, orthogonality, least squares, SVD, and AI connect.",
      },

      {
        title: "Mathematical Analysis",
        points: 20,

        description:
          "Complete and justify a substantial mathematical analysis.",
      },

      {
        title: "Python Implementation",
        points: 20,

        description:
          "Implement the major mathematical operations accurately.",
      },

      {
        title: "Visualization",
        points: 10,

        description:
          "Create visual evidence that supports interpretation.",
      },

      {
        title: "Application",
        points: 15,

        description:
          "Apply linear algebra to AI, robotics, data science, engineering, graphics, or another meaningful field.",
      },

      {
        title: "Testing and Limitations",
        points: 10,

        description:
          "Test the solution and discuss errors, assumptions, and limitations.",
      },

      {
        title: "Research Reflection",
        points: 5,

        description:
          "Connect the project to a research question and describe future investigation.",
      },

      {
        title: "Presentation and Documentation",
        points: 10,

        description:
          "Communicate the work professionally through a report, README, and presentation.",
      },
    ],
  },

  completionRequirements: {
    minimumOverallScore: 80,
    requiredModules: 12,
    minimumModuleAssessmentScore: 80,
    requiredPythonLabs: 10,
    requiredPortfolioProjects: 5,
    requiredResearchExtensions: 1,
    finalMasteryChallengeRequired: true,
    capstoneRequired: true,
    portfolioRequired: true,

    statement:
      "Course completion requires demonstrated mastery and authentic evidence—not page views or attendance alone.",
  },

  lumineryGuidance: {
    message:
      "Assessment is not the end of learning. It reveals what you understand, what needs improvement, and what you are ready to create next.",

    recommendation:
      "Explain your reasoning, verify calculations, learn from errors, and use every assessment as evidence of growth.",
  },
};

export function getAssessmentTypeById(id) {
  return linearAlgebraAssessments.assessmentTypes.find(
    (assessment) => assessment.id === id
  );
}

export function getModuleAssessment(moduleNumber) {
  return linearAlgebraAssessments.moduleAssessments.find(
    (assessment) => assessment.moduleNumber === Number(moduleNumber)
  );
}

export function getMasteryLevel(score) {
  const numericScore = Number(score);

  if (Number.isNaN(numericScore)) {
    return null;
  }

  return linearAlgebraAssessments.masteryLevels.find(
    (level) =>
      numericScore >= level.minimumScore &&
      numericScore <= level.maximumScore
  );
}

export function calculateWeightedCourseScore(scores = {}) {
  const weights = linearAlgebraAssessments.gradingModel;

  const scoreEntries = [
    ["lessonChecks", weights.lessonChecks],
    ["moduleAssessments", weights.moduleAssessments],
    ["pythonLabs", weights.pythonLabs],
    ["portfolioProjects", weights.portfolioProjects],
    ["researchExtension", weights.researchExtension],
    ["finalMasteryChallenge", weights.finalMasteryChallenge],
  ];

  const total = scoreEntries.reduce((sum, [key, weight]) => {
    const score = Number(scores[key] ?? 0);

    return sum + score * (weight / 100);
  }, 0);

  return Number(total.toFixed(2));
}

export function hasCompletedAssessmentRequirements(progress = {}) {
  const requirements = linearAlgebraAssessments.completionRequirements;

  return (
    Number(progress.overallScore ?? 0) >=
      requirements.minimumOverallScore &&
    Number(progress.completedModules ?? 0) >=
      requirements.requiredModules &&
    Number(progress.completedPythonLabs ?? 0) >=
      requirements.requiredPythonLabs &&
    Number(progress.completedProjects ?? 0) >=
      requirements.requiredPortfolioProjects &&
    Number(progress.completedResearchExtensions ?? 0) >=
      requirements.requiredResearchExtensions &&
    Boolean(progress.finalMasteryChallengeComplete) &&
    Boolean(progress.capstoneComplete) &&
    Boolean(progress.portfolioComplete)
  );
}

export default linearAlgebraAssessments;