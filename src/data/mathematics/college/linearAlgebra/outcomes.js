const linearAlgebraOutcomes = {
  courseId: "linear-algebra-foundations-to-ai",

  purpose:
    "Define what learners should know, explain, calculate, visualize, program, apply, research, create, and communicate by the end of the course.",

  coreOutcomes: [
    {
      id: "outcome-01",
      category: "Conceptual Understanding",
      title: "Explain the language of linear algebra",
      description:
        "Explain how vectors, matrices, systems, transformations, vector spaces, eigenvalues, orthogonality, least squares, and decompositions form one connected mathematical system.",
      evidence: [
        "Written explanations",
        "Concept maps",
        "Oral presentations",
        "Lesson reflections",
      ],
    },
    {
      id: "outcome-02",
      category: "Vector Reasoning",
      title: "Represent and analyze vectors",
      description:
        "Represent physical, geometric, and data-based quantities using vectors in two, three, and higher dimensions.",
      evidence: [
        "Vector calculations",
        "Geometric diagrams",
        "Python visualizations",
        "Applied modeling tasks",
      ],
    },
    {
      id: "outcome-03",
      category: "Matrix Fluency",
      title: "Perform and interpret matrix operations",
      description:
        "Add, subtract, scale, transpose, and multiply matrices while explaining what each operation means.",
      evidence: [
        "Worked calculations",
        "Matrix calculator",
        "Error analysis",
        "Dimension validation",
      ],
    },
    {
      id: "outcome-04",
      category: "Systems",
      title: "Solve systems of linear equations",
      description:
        "Solve and interpret systems graphically, algebraically, through matrices, and computationally.",
      evidence: [
        "Gaussian elimination",
        "Row-reduction work",
        "System solver",
        "Real-world model",
      ],
    },
    {
      id: "outcome-05",
      category: "Transformation Thinking",
      title: "Interpret matrices as transformations",
      description:
        "Explain and visualize how matrices rotate, reflect, scale, shear, project, and map vectors or data.",
      evidence: [
        "Transformation diagrams",
        "Python simulator",
        "Matrix construction",
        "Composition analysis",
      ],
    },
    {
      id: "outcome-06",
      category: "Determinants",
      title: "Analyze determinants and invertibility",
      description:
        "Calculate determinants and interpret them as measures of signed scaling, orientation, singularity, and invertibility.",
      evidence: [
        "Determinant calculations",
        "Area and volume visualizations",
        "Invertibility analysis",
        "Applied investigation",
      ],
    },
    {
      id: "outcome-07",
      category: "Vector Spaces",
      title: "Explain span, independence, basis, and dimension",
      description:
        "Analyze how vectors generate spaces, identify redundancy, construct bases, and interpret dimension.",
      evidence: [
        "Span investigation",
        "Independence tests",
        "Basis construction",
        "Coordinate conversion",
      ],
    },
    {
      id: "outcome-08",
      category: "Eigenstructure",
      title: "Compute and interpret eigenvalues and eigenvectors",
      description:
        "Identify invariant directions, calculate eigenvalues and eigenvectors, and connect eigenstructure to repeated transformations and data analysis.",
      evidence: [
        "Characteristic equations",
        "Eigenspace calculations",
        "Python visualizations",
        "PCA or ranking application",
      ],
    },
    {
      id: "outcome-09",
      category: "Orthogonality",
      title: "Use orthogonality and projection",
      description:
        "Project vectors onto lines or subspaces, construct orthonormal bases, and interpret residual components.",
      evidence: [
        "Projection calculations",
        "Gram-Schmidt work",
        "Projection visualizer",
        "Approximation explanation",
      ],
    },
    {
      id: "outcome-10",
      category: "Approximation",
      title: "Apply least squares",
      description:
        "Derive and use least-squares methods to solve inconsistent systems and fit models to noisy data.",
      evidence: [
        "Normal-equation derivation",
        "Regression notebook",
        "Residual analysis",
        "Model evaluation",
      ],
    },
    {
      id: "outcome-11",
      category: "Matrix Factorization",
      title: "Explain singular value decomposition",
      description:
        "Interpret SVD geometrically and use it for low-rank approximation, compression, dimensionality reduction, and latent-structure discovery.",
      evidence: [
        "SVD decomposition",
        "Image compression lab",
        "Rank comparison",
        "Technical explanation",
      ],
    },
    {
      id: "outcome-12",
      category: "Numerical Computing",
      title: "Evaluate numerical methods",
      description:
        "Analyze conditioning, stability, computational cost, and numerical error in matrix algorithms.",
      evidence: [
        "Conditioning experiment",
        "Solver benchmark",
        "Runtime comparison",
        "Error analysis",
      ],
    },
    {
      id: "outcome-13",
      category: "Programming",
      title: "Implement linear algebra with Python",
      description:
        "Create reusable Python and NumPy tools for vectors, matrices, systems, transformations, eigen-analysis, least squares, and SVD.",
      evidence: [
        "Documented code",
        "Test cases",
        "Notebooks",
        "GitHub repository",
      ],
    },
    {
      id: "outcome-14",
      category: "Artificial Intelligence",
      title: "Apply linear algebra to AI",
      description:
        "Explain how vectors and matrices support embeddings, neural-network layers, computer vision, dimensionality reduction, and optimization.",
      evidence: [
        "Embedding analysis",
        "Neural-layer implementation",
        "PCA project",
        "AI capstone",
      ],
    },
    {
      id: "outcome-15",
      category: "Research",
      title: "Conduct a mathematical investigation",
      description:
        "Formulate a meaningful question, select a method, gather evidence, analyze results, acknowledge uncertainty, and communicate findings.",
      evidence: [
        "Research question",
        "Methodology",
        "Evidence",
        "Findings",
        "References",
        "Presentation",
      ],
    },
    {
      id: "outcome-16",
      category: "Creation and Leadership",
      title: "Create and communicate original work",
      description:
        "Build an original mathematical, computational, research, or AI artifact and explain it clearly to others.",
      evidence: [
        "Capstone project",
        "Portfolio artifact",
        "Technical presentation",
        "Peer teaching",
      ],
    },
  ],

  masteryLevels: [
    {
      level: 1,
      name: "Foundation",
      description:
        "Recognize notation, vocabulary, and basic representations.",
      indicators: [
        "Identifies vectors and matrices",
        "Reads dimensions correctly",
        "Uses basic notation",
        "Completes guided calculations",
      ],
    },
    {
      level: 2,
      name: "Developing",
      description:
        "Performs standard procedures with partial independence.",
      indicators: [
        "Completes routine calculations",
        "Uses formulas correctly",
        "Explains some reasoning",
        "Verifies results with support",
      ],
    },
    {
      level: 3,
      name: "Proficient",
      description:
        "Solves unfamiliar problems accurately and explains the method.",
      indicators: [
        "Selects appropriate methods",
        "Justifies each step",
        "Connects algebra and geometry",
        "Uses Python for verification",
      ],
    },
    {
      level: 4,
      name: "Advanced",
      description:
        "Applies concepts across domains and evaluates alternative approaches.",
      indicators: [
        "Compares methods",
        "Analyzes limitations",
        "Builds original applications",
        "Communicates professionally",
      ],
    },
    {
      level: 5,
      name: "Creator",
      description:
        "Produces original mathematical, computational, or research work.",
      indicators: [
        "Designs an original solution",
        "Conducts research",
        "Creates portfolio evidence",
        "Teaches or mentors others",
      ],
    },
  ],

  outcomeGroups: [
    {
      id: "group-knowledge",
      title: "Knowledge",
      description:
        "Understand the concepts, definitions, notation, and relationships of linear algebra.",
      outcomeIds: [
        "outcome-01",
        "outcome-02",
        "outcome-03",
        "outcome-04",
        "outcome-05",
        "outcome-06",
        "outcome-07",
        "outcome-08",
        "outcome-09",
        "outcome-10",
        "outcome-11",
        "outcome-12",
      ],
    },
    {
      id: "group-computation",
      title: "Computation",
      description:
        "Calculate accurately by hand and implement reliable computational methods.",
      outcomeIds: [
        "outcome-02",
        "outcome-03",
        "outcome-04",
        "outcome-06",
        "outcome-08",
        "outcome-09",
        "outcome-10",
        "outcome-11",
        "outcome-12",
        "outcome-13",
      ],
    },
    {
      id: "group-application",
      title: "Application",
      description:
        "Use linear algebra to solve meaningful problems in science, engineering, data, robotics, and AI.",
      outcomeIds: [
        "outcome-05",
        "outcome-08",
        "outcome-10",
        "outcome-11",
        "outcome-12",
        "outcome-14",
      ],
    },
    {
      id: "group-research",
      title: "Research",
      description:
        "Investigate questions using mathematical reasoning, computation, and evidence.",
      outcomeIds: [
        "outcome-12",
        "outcome-14",
        "outcome-15",
      ],
    },
    {
      id: "group-creation",
      title: "Creation and Leadership",
      description:
        "Build original work, communicate it clearly, and contribute knowledge to others.",
      outcomeIds: [
        "outcome-13",
        "outcome-14",
        "outcome-15",
        "outcome-16",
      ],
    },
  ],

  moduleAlignment: [
    {
      moduleNumber: 1,
      moduleTitle: "Vectors and Geometric Foundations",
      outcomeIds: [
        "outcome-01",
        "outcome-02",
        "outcome-13",
        "outcome-14",
      ],
    },
    {
      moduleNumber: 2,
      moduleTitle: "Matrices and Matrix Operations",
      outcomeIds: [
        "outcome-01",
        "outcome-03",
        "outcome-13",
        "outcome-14",
      ],
    },
    {
      moduleNumber: 3,
      moduleTitle: "Systems of Linear Equations",
      outcomeIds: [
        "outcome-04",
        "outcome-12",
        "outcome-13",
      ],
    },
    {
      moduleNumber: 4,
      moduleTitle: "Determinants and Invertibility",
      outcomeIds: [
        "outcome-05",
        "outcome-06",
        "outcome-12",
      ],
    },
    {
      moduleNumber: 5,
      moduleTitle: "Vector Spaces, Span, Basis, and Dimension",
      outcomeIds: [
        "outcome-01",
        "outcome-07",
        "outcome-15",
      ],
    },
    {
      moduleNumber: 6,
      moduleTitle: "Linear Transformations",
      outcomeIds: [
        "outcome-05",
        "outcome-13",
        "outcome-14",
        "outcome-16",
      ],
    },
    {
      moduleNumber: 7,
      moduleTitle: "Eigenvalues and Eigenvectors",
      outcomeIds: [
        "outcome-08",
        "outcome-13",
        "outcome-14",
        "outcome-15",
      ],
    },
    {
      moduleNumber: 8,
      moduleTitle: "Orthogonality and Projections",
      outcomeIds: [
        "outcome-09",
        "outcome-13",
      ],
    },
    {
      moduleNumber: 9,
      moduleTitle: "Least Squares and Approximation",
      outcomeIds: [
        "outcome-10",
        "outcome-13",
        "outcome-14",
        "outcome-15",
      ],
    },
    {
      moduleNumber: 10,
      moduleTitle: "Singular Value Decomposition",
      outcomeIds: [
        "outcome-11",
        "outcome-13",
        "outcome-14",
        "outcome-15",
      ],
    },
    {
      moduleNumber: 11,
      moduleTitle: "Numerical Linear Algebra",
      outcomeIds: [
        "outcome-12",
        "outcome-13",
        "outcome-15",
      ],
    },
    {
      moduleNumber: 12,
      moduleTitle: "Linear Algebra for Artificial Intelligence",
      outcomeIds: [
        "outcome-13",
        "outcome-14",
        "outcome-15",
        "outcome-16",
      ],
    },
  ],

  assessmentEvidence: [
    {
      type: "Concept Explanations",
      purpose:
        "Measure whether learners understand meaning rather than memorized procedures.",
    },
    {
      type: "Worked Calculations",
      purpose:
        "Measure mathematical accuracy, notation, reasoning, and verification.",
    },
    {
      type: "Visualizations",
      purpose:
        "Measure geometric understanding and the ability to connect representations.",
    },
    {
      type: "Python Labs",
      purpose:
        "Measure computational implementation, testing, and interpretation.",
    },
    {
      type: "Projects",
      purpose:
        "Measure application, problem solving, design, and documentation.",
    },
    {
      type: "Research Extensions",
      purpose:
        "Measure curiosity, evidence-based reasoning, and communication.",
    },
    {
      type: "Portfolio Artifacts",
      purpose:
        "Provide visible evidence of sustained capability and growth.",
    },
    {
      type: "Capstone",
      purpose:
        "Integrate mathematics, programming, application, research, creation, and leadership.",
    },
  ],

  completionStandard: {
    minimumOverallMastery: 80,
    requiredModuleCompletion: 12,
    requiredPythonLabs: 10,
    requiredProjects: 5,
    requiredResearchExtensions: 1,
    requiredCapstone: true,
    requiredPortfolio: true,
    description:
      "Course completion requires demonstrated mastery, not attendance or page completion alone.",
  },
};

export function getOutcomeById(id) {
  return linearAlgebraOutcomes.coreOutcomes.find(
    (outcome) => outcome.id === id
  );
}

export function getOutcomesByCategory(category) {
  return linearAlgebraOutcomes.coreOutcomes.filter(
    (outcome) => outcome.category === category
  );
}

export function getOutcomesForModule(moduleNumber) {
  const alignment = linearAlgebraOutcomes.moduleAlignment.find(
    (module) => module.moduleNumber === moduleNumber
  );

  if (!alignment) {
    return [];
  }

  return alignment.outcomeIds
    .map((id) => getOutcomeById(id))
    .filter(Boolean);
}

export default linearAlgebraOutcomes;