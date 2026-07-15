const linearAlgebraProjects = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra Project Library",

  description:
    "A project-based learning system that helps learners apply linear algebra through mathematics, Python, visualization, research, artificial intelligence, robotics, data science, and engineering.",

  philosophy: {
    statement:
      "Every major mathematical idea should lead to something the learner can build, test, explain, improve, and include in a professional portfolio.",

    principles: [
      "Projects must solve meaningful problems.",
      "Mathematics must be visible and explained.",
      "Code must be tested and documented.",
      "Visualizations must support understanding.",
      "Learners must evaluate assumptions and limitations.",
      "Every project should produce portfolio evidence.",
      "Projects should grow from guided work toward original creation.",
    ],
  },

  projectLevels: [
    {
      level: "Foundation",
      description:
        "Guided projects that strengthen core concepts and computational confidence.",
    },
    {
      level: "Intermediate",
      description:
        "Structured projects that combine multiple concepts and require independent decisions.",
    },
    {
      level: "Advanced",
      description:
        "Open-ended projects involving real data, numerical methods, AI, research, or engineering.",
    },
    {
      level: "Capstone",
      description:
        "A complete creator project integrating mathematics, software, research, documentation, and presentation.",
    },
  ],

  projects: [
    {
      id: "vector-visualizer",

      title: "Interactive Vector Visualizer",

      level: "Foundation",

      moduleNumbers: [1],

      category: "Visualization",

      duration: "4–6 hours",

      status: "Available",

      problem:
        "Many learners can calculate vector operations but cannot explain what those operations mean geometrically.",

      goal:
        "Build a Python application or notebook that displays vectors and explains their geometric relationships.",

      mathematics: [
        "Vector components",
        "Magnitude",
        "Direction",
        "Vector addition",
        "Vector subtraction",
        "Scalar multiplication",
        "Dot product",
        "Angle between vectors",
      ],

      requiredFeatures: [
        "Plot at least two vectors.",
        "Display vector components.",
        "Calculate magnitude.",
        "Show vector addition and subtraction.",
        "Calculate the dot product.",
        "Calculate the angle between vectors.",
        "Explain each result.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Matplotlib",
        "Jupyter Notebook",
      ],

      deliverables: [
        "Working notebook or application",
        "Vector plots",
        "Mathematical calculations",
        "Explanations",
        "Test cases",
        "Reflection",
        "README",
      ],

      portfolioEvidence: [
        "Project screenshot",
        "GitHub repository",
        "Mathematical explanation",
        "Code sample",
        "Reflection",
      ],

      extensionIdeas: [
        "Add three-dimensional vectors.",
        "Animate vector addition.",
        "Add cosine similarity.",
        "Apply the tool to navigation or force.",
      ],

      rubric: {
        mathematicalAccuracy: 25,
        functionality: 20,
        visualization: 20,
        explanation: 15,
        codeQuality: 10,
        reflection: 10,
      },
    },

    {
      id: "matrix-calculator",

      title: "Explainable Matrix Calculator",

      level: "Intermediate",

      moduleNumbers: [2, 3, 4],

      category: "Software Tool",

      duration: "8–12 hours",

      status: "Available",

      problem:
        "Most matrix calculators provide answers without teaching learners how the calculations work.",

      goal:
        "Create a matrix calculator that performs operations and explains every important mathematical step.",

      mathematics: [
        "Matrix dimensions",
        "Matrix addition",
        "Scalar multiplication",
        "Transpose",
        "Matrix multiplication",
        "Determinants",
        "Inverse matrices",
        "Linear systems",
      ],

      requiredFeatures: [
        "Accept matrix input.",
        "Validate matrix dimensions.",
        "Add and subtract matrices.",
        "Multiply matrices.",
        "Calculate transposes.",
        "Calculate determinants.",
        "Check invertibility.",
        "Explain row-column multiplication.",
        "Handle invalid input clearly.",
      ],

      tools: [
        "Python",
        "NumPy",
        "SymPy",
        "Streamlit or Jupyter Notebook",
      ],

      deliverables: [
        "Working calculator",
        "Input validation",
        "Step-by-step explanations",
        "Test cases",
        "User documentation",
        "README",
      ],

      portfolioEvidence: [
        "Demonstration video or screenshots",
        "GitHub repository",
        "Testing evidence",
        "Technical explanation",
      ],

      extensionIdeas: [
        "Add Gaussian elimination.",
        "Add reduced row-echelon form.",
        "Add eigenvalue calculations.",
        "Create a web interface.",
      ],

      rubric: {
        mathematicalAccuracy: 25,
        functionality: 20,
        explanations: 20,
        testing: 15,
        codeQuality: 10,
        documentation: 10,
      },
    },

    {
      id: "linear-system-solver",

      title: "Linear System Solver",

      level: "Intermediate",

      moduleNumbers: [3],

      category: "Scientific Computing",

      duration: "6–10 hours",

      status: "Planned",

      problem:
        "Real systems often contain several interacting constraints that must be solved simultaneously.",

      goal:
        "Build a solver that uses row operations to solve and classify systems of linear equations.",

      mathematics: [
        "Augmented matrices",
        "Elementary row operations",
        "Gaussian elimination",
        "Reduced row-echelon form",
        "Pivot variables",
        "Free variables",
        "Consistent and inconsistent systems",
      ],

      requiredFeatures: [
        "Accept a coefficient matrix and constant vector.",
        "Display the augmented matrix.",
        "Perform row operations.",
        "Show echelon or reduced row-echelon form.",
        "Classify the solution set.",
        "Explain pivot and free variables.",
        "Compare with NumPy or SymPy.",
      ],

      tools: [
        "Python",
        "NumPy",
        "SymPy",
      ],

      deliverables: [
        "Solver implementation",
        "Step history",
        "Solution classification",
        "Verification",
        "Test cases",
        "Technical report",
      ],

      portfolioEvidence: [
        "Code repository",
        "Worked examples",
        "Comparison table",
        "Reflection",
      ],

      extensionIdeas: [
        "Add sparse systems.",
        "Add graphical interpretation.",
        "Add LU factorization.",
      ],

      rubric: {
        mathematicalAccuracy: 25,
        algorithmImplementation: 25,
        explanation: 20,
        testing: 15,
        codeQuality: 10,
        reflection: 5,
      },
    },

    {
      id: "determinant-geometry-lab",

      title: "Determinant Geometry Lab",

      level: "Intermediate",

      moduleNumbers: [4, 6],

      category: "Visualization",

      duration: "6–8 hours",

      status: "Planned",

      problem:
        "The determinant is often taught as a formula without showing its geometric meaning.",

      goal:
        "Build a visual experiment showing how matrix transformations change area, orientation, and invertibility.",

      mathematics: [
        "Determinants",
        "Area scaling",
        "Orientation",
        "Singularity",
        "Linear transformations",
      ],

      requiredFeatures: [
        "Display an original shape.",
        "Apply a 2×2 transformation matrix.",
        "Display the transformed shape.",
        "Calculate the determinant.",
        "Compare original and transformed area.",
        "Indicate orientation reversal.",
        "Detect singular transformations.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Matplotlib",
      ],

      deliverables: [
        "Visualization",
        "Mathematical analysis",
        "Area comparison",
        "Orientation explanation",
        "Test cases",
      ],

      portfolioEvidence: [
        "Transformation gallery",
        "Code repository",
        "Mathematical report",
        "Reflection",
      ],

      extensionIdeas: [
        "Add three-dimensional volume scaling.",
        "Add interactive matrix controls.",
        "Connect to Jacobians.",
      ],

      rubric: {
        mathematicalAccuracy: 25,
        visualization: 25,
        functionality: 20,
        explanation: 15,
        testing: 10,
        reflection: 5,
      },
    },

    {
      id: "basis-coordinate-explorer",

      title: "Basis and Coordinate Explorer",

      level: "Advanced",

      moduleNumbers: [5],

      category: "Conceptual Tool",

      duration: "8–12 hours",

      status: "Planned",

      problem:
        "Learners often confuse a vector with the coordinates used to represent it.",

      goal:
        "Create a tool that converts vectors between bases and visualizes how coordinate descriptions change.",

      mathematics: [
        "Linear combinations",
        "Span",
        "Linear independence",
        "Basis",
        "Dimension",
        "Coordinate vectors",
        "Change of basis",
      ],

      requiredFeatures: [
        "Accept a basis.",
        "Check linear independence.",
        "Represent a vector in the selected basis.",
        "Convert between standard and custom coordinates.",
        "Visualize both coordinate systems.",
        "Explain that the vector remains unchanged.",
      ],

      tools: [
        "Python",
        "NumPy",
        "SymPy",
        "Matplotlib",
      ],

      deliverables: [
        "Basis validator",
        "Coordinate converter",
        "Visualization",
        "Worked examples",
        "Documentation",
      ],

      portfolioEvidence: [
        "Interactive demonstration",
        "GitHub repository",
        "Conceptual explanation",
        "Reflection",
      ],

      extensionIdeas: [
        "Add three-dimensional bases.",
        "Add orthonormal bases.",
        "Add change-of-basis matrices.",
      ],

      rubric: {
        mathematicalAccuracy: 30,
        functionality: 20,
        visualization: 15,
        conceptualExplanation: 20,
        codeQuality: 10,
        reflection: 5,
      },
    },

    {
      id: "transformation-studio",

      title: "Linear Transformation Studio",

      level: "Intermediate",

      moduleNumbers: [6],

      category: "Visualization",

      duration: "10–14 hours",

      status: "Available",

      problem:
        "Matrices become meaningful when learners can see how they transform space.",

      goal:
        "Build an interactive environment for exploring geometric transformations.",

      mathematics: [
        "Linear transformations",
        "Matrix representation",
        "Scaling",
        "Shearing",
        "Rotation",
        "Reflection",
        "Projection",
        "Composition",
      ],

      requiredFeatures: [
        "Display a coordinate grid.",
        "Apply scaling.",
        "Apply shearing.",
        "Apply rotation.",
        "Apply reflection.",
        "Apply projection.",
        "Compose at least two transformations.",
        "Show the transformation matrix.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Matplotlib",
        "Streamlit",
      ],

      deliverables: [
        "Interactive application",
        "Transformation gallery",
        "Matrix explanations",
        "Composition examples",
        "Testing",
        "README",
      ],

      portfolioEvidence: [
        "Application screenshots",
        "GitHub repository",
        "Technical explanation",
        "Demonstration video",
      ],

      extensionIdeas: [
        "Add 3D transformations.",
        "Add animation.",
        "Connect to robotics coordinates.",
        "Connect to computer graphics.",
      ],

      rubric: {
        mathematicalAccuracy: 25,
        functionality: 20,
        visualization: 20,
        transformationComposition: 15,
        codeQuality: 10,
        documentation: 10,
      },
    },

    {
      id: "eigenvector-explorer",

      title: "Eigenvalue and Eigenvector Explorer",

      level: "Advanced",

      moduleNumbers: [7],

      category: "Visualization and Analysis",

      duration: "10–14 hours",

      status: "Planned",

      problem:
        "Eigenvalues and eigenvectors are difficult to understand when taught only through symbolic calculations.",

      goal:
        "Build a visual tool that reveals eigendirections and scaling under transformations.",

      mathematics: [
        "Eigenvalue equation",
        "Characteristic polynomial",
        "Eigenvalues",
        "Eigenvectors",
        "Eigenspaces",
        "Diagonalization",
        "Repeated transformations",
      ],

      requiredFeatures: [
        "Accept a 2×2 matrix.",
        "Calculate eigenvalues.",
        "Calculate eigenvectors.",
        "Plot eigendirections.",
        "Transform sample vectors.",
        "Show repeated transformation behavior.",
        "Explain geometric meaning.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Matplotlib",
      ],

      deliverables: [
        "Eigen-analysis tool",
        "Visualizations",
        "Repeated transformation experiment",
        "Interpretation",
        "Testing",
      ],

      portfolioEvidence: [
        "Notebook or application",
        "Technical report",
        "Visual gallery",
        "GitHub repository",
      ],

      extensionIdeas: [
        "Add PCA.",
        "Add PageRank.",
        "Analyze dynamical systems.",
        "Add complex eigenvalues.",
      ],

      rubric: {
        mathematicalAccuracy: 30,
        visualization: 20,
        interpretation: 20,
        functionality: 15,
        testing: 10,
        documentation: 5,
      },
    },

    {
      id: "projection-tool",

      title: "Projection and Orthogonality Tool",

      level: "Intermediate",

      moduleNumbers: [8],

      category: "Visualization",

      duration: "6–10 hours",

      status: "Planned",

      problem:
        "Projection and residual ideas are central to approximation, but learners often cannot visualize them.",

      goal:
        "Build a tool that decomposes vectors into projected and perpendicular components.",

      mathematics: [
        "Orthogonality",
        "Projection",
        "Residual",
        "Orthogonal complement",
        "Orthonormal basis",
        "Gram-Schmidt",
      ],

      requiredFeatures: [
        "Plot two vectors.",
        "Calculate the projection.",
        "Calculate the residual.",
        "Verify perpendicularity.",
        "Display the geometric decomposition.",
        "Implement Gram-Schmidt for a small vector set.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Matplotlib",
      ],

      deliverables: [
        "Projection calculator",
        "Visualization",
        "Residual analysis",
        "Gram-Schmidt implementation",
        "Testing",
      ],

      portfolioEvidence: [
        "Code repository",
        "Visual explanation",
        "Worked examples",
        "Reflection",
      ],

      extensionIdeas: [
        "Project onto a plane.",
        "Add QR factorization.",
        "Connect to signal decomposition.",
      ],

      rubric: {
        mathematicalAccuracy: 30,
        visualization: 20,
        functionality: 20,
        verification: 15,
        codeQuality: 10,
        reflection: 5,
      },
    },

    {
      id: "least-squares-model",

      title: "Least-Squares Data Model",

      level: "Advanced",

      moduleNumbers: [9],

      category: "Data Science",

      duration: "10–16 hours",

      status: "Available",

      problem:
        "Real data contain noise, making exact solutions impossible.",

      goal:
        "Build linear regression from first principles and evaluate the quality of the model.",

      mathematics: [
        "Inconsistent systems",
        "Projection",
        "Normal equations",
        "Least squares",
        "Regression",
        "Residuals",
      ],

      requiredFeatures: [
        "Load or create a dataset.",
        "Build a design matrix.",
        "Derive the normal equations.",
        "Calculate model coefficients.",
        "Generate predictions.",
        "Analyze residuals.",
        "Compare with a library implementation.",
        "Discuss limitations.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
      ],

      deliverables: [
        "Regression notebook",
        "Derivation",
        "Visualizations",
        "Residual analysis",
        "Model comparison",
        "Technical report",
      ],

      portfolioEvidence: [
        "GitHub repository",
        "Dataset",
        "Model results",
        "Charts",
        "Written interpretation",
      ],

      extensionIdeas: [
        "Add multiple regression.",
        "Study outliers.",
        "Compare robust regression.",
        "Add confidence analysis.",
      ],

      rubric: {
        mathematicalAccuracy: 25,
        dataPreparation: 10,
        implementation: 20,
        residualAnalysis: 20,
        evaluation: 15,
        documentation: 10,
      },
    },

    {
      id: "svd-image-compression",

      title: "SVD Image Compression System",

      level: "Advanced",

      moduleNumbers: [10],

      category: "Computer Vision",

      duration: "12–18 hours",

      status: "Available",

      problem:
        "Digital images require large amounts of storage even though much of their structure may be redundant.",

      goal:
        "Use singular value decomposition to create and evaluate low-rank image approximations.",

      mathematics: [
        "Singular value decomposition",
        "Singular values",
        "Rank",
        "Low-rank approximation",
        "Reconstruction error",
      ],

      requiredFeatures: [
        "Load an image as a matrix.",
        "Calculate SVD.",
        "Display singular values.",
        "Create several rank-k approximations.",
        "Compare image quality.",
        "Estimate compression.",
        "Calculate reconstruction error.",
        "Explain mathematical meaning.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Matplotlib",
        "Pillow",
      ],

      deliverables: [
        "Compression notebook or application",
        "Original and reconstructed images",
        "Singular-value plot",
        "Error comparison",
        "Technical report",
      ],

      portfolioEvidence: [
        "Before-and-after image gallery",
        "GitHub repository",
        "Quality comparison",
        "Research reflection",
      ],

      extensionIdeas: [
        "Process color channels separately.",
        "Compare different images.",
        "Add an interactive rank slider.",
        "Connect SVD to PCA.",
      ],

      rubric: {
        mathematicalAccuracy: 25,
        implementation: 20,
        imageAnalysis: 20,
        visualization: 15,
        evaluation: 10,
        documentation: 10,
      },
    },

    {
      id: "numerical-solver-benchmark",

      title: "Numerical Linear Solver Benchmark",

      level: "Advanced",

      moduleNumbers: [11],

      category: "Scientific Computing",

      duration: "12–18 hours",

      status: "Planned",

      problem:
        "A mathematically correct algorithm may still be slow or numerically unstable on real computers.",

      goal:
        "Compare several linear-system algorithms using runtime, accuracy, conditioning, and scalability.",

      mathematics: [
        "Floating-point error",
        "Condition number",
        "Numerical stability",
        "LU factorization",
        "QR factorization",
        "Iterative methods",
        "Sparse matrices",
      ],

      requiredFeatures: [
        "Generate or load test matrices.",
        "Calculate condition numbers.",
        "Use multiple solution methods.",
        "Measure runtime.",
        "Measure solution error.",
        "Perturb inputs.",
        "Compare stable and unstable cases.",
        "Recommend an appropriate method.",
      ],

      tools: [
        "Python",
        "NumPy",
        "SciPy",
        "Pandas",
        "Matplotlib",
      ],

      deliverables: [
        "Benchmark code",
        "Performance tables",
        "Error charts",
        "Conditioning analysis",
        "Engineering recommendation",
      ],

      portfolioEvidence: [
        "GitHub repository",
        "Benchmark report",
        "Charts",
        "Technical conclusions",
      ],

      extensionIdeas: [
        "Add sparse solvers.",
        "Add GPU computation.",
        "Test very large matrices.",
        "Compare memory usage.",
      ],

      rubric: {
        algorithmCorrectness: 20,
        experimentalDesign: 20,
        runtimeAnalysis: 15,
        errorAnalysis: 20,
        recommendation: 15,
        documentation: 10,
      },
    },

    {
      id: "ai-linear-algebra-capstone",

      title: "Explainable Linear Algebra for AI Capstone",

      level: "Capstone",

      moduleNumbers: [12],

      category: "Artificial Intelligence",

      duration: "20–30 hours",

      status: "Available",

      problem:
        "Many AI systems are treated as black boxes even though their core computations are built from vectors and matrices.",

      goal:
        "Create an explainable AI application that makes its linear algebra visible.",

      projectOptions: [
        "Embedding similarity search",
        "Recommendation system",
        "PCA data explorer",
        "Neural-network layer from first principles",
        "Image transformation system",
        "Face or image compression study",
        "Small PageRank model",
      ],

      mathematics: [
        "Vectors",
        "Matrices",
        "Transformations",
        "Eigenvalues",
        "Projection",
        "Least squares",
        "SVD",
        "Numerical computation",
      ],

      requiredFeatures: [
        "Define a meaningful AI problem.",
        "Represent the data mathematically.",
        "Explain all major matrix operations.",
        "Implement the solution in Python.",
        "Create visualizations.",
        "Test the system.",
        "Evaluate limitations.",
        "Connect the project to research.",
        "Prepare professional documentation.",
      ],

      tools: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Scikit-learn",
        "Jupyter Notebook",
        "GitHub",
      ],

      deliverables: [
        "Problem statement",
        "Mathematical model",
        "Working implementation",
        "Testing",
        "Visualizations",
        "Research discussion",
        "README",
        "Technical report",
        "Presentation",
      ],

      portfolioEvidence: [
        "Published GitHub repository",
        "Project demonstration",
        "Technical case study",
        "Research reflection",
        "Presentation",
      ],

      extensionIdeas: [
        "Deploy the application.",
        "Use a real public dataset.",
        "Compare multiple methods.",
        "Publish a tutorial.",
        "Present the project to a community.",
      ],

      rubric: {
        mathematicalAccuracy: 20,
        softwareImplementation: 20,
        explainability: 15,
        applicationQuality: 15,
        testingAndEvaluation: 10,
        research: 10,
        documentationAndPresentation: 10,
      },
    },
  ],

  requiredPortfolioProjects: [
    "vector-visualizer",
    "matrix-calculator",
    "transformation-studio",
    "least-squares-model",
    "svd-image-compression",
  ],

  capstoneProjectId: "ai-linear-algebra-capstone",

  projectWorkflow: [
    {
      stage: 1,
      title: "Define",
      description:
        "Identify the problem, audience, constraints, and success criteria.",
    },
    {
      stage: 2,
      title: "Model",
      description:
        "Translate the problem into vectors, matrices, systems, transformations, or decompositions.",
    },
    {
      stage: 3,
      title: "Design",
      description:
        "Plan the calculations, software structure, visualizations, and tests.",
    },
    {
      stage: 4,
      title: "Build",
      description:
        "Implement the mathematical and computational solution.",
    },
    {
      stage: 5,
      title: "Test",
      description:
        "Verify correctness using normal, boundary, and error cases.",
    },
    {
      stage: 6,
      title: "Evaluate",
      description:
        "Analyze results, performance, assumptions, limitations, and uncertainty.",
    },
    {
      stage: 7,
      title: "Document",
      description:
        "Create explanations, a README, visuals, references, and technical evidence.",
    },
    {
      stage: 8,
      title: "Present",
      description:
        "Communicate the project clearly and respond to questions.",
    },
  ],

  generalProjectRubric: [
    {
      criterion: "Problem definition",
      weight: 10,

      proficient:
        "The project solves a meaningful, clearly defined problem.",
    },
    {
      criterion: "Mathematical accuracy",
      weight: 20,

      proficient:
        "The mathematics is correct, justified, and appropriately selected.",
    },
    {
      criterion: "Implementation",
      weight: 20,

      proficient:
        "The solution works reliably and reflects the mathematical model.",
    },
    {
      criterion: "Testing",
      weight: 15,

      proficient:
        "The project includes meaningful validation and error handling.",
    },
    {
      criterion: "Visualization and interpretation",
      weight: 10,

      proficient:
        "Visual evidence is clear and correctly interpreted.",
    },
    {
      criterion: "Evaluation and limitations",
      weight: 10,

      proficient:
        "The learner evaluates assumptions, performance, and limitations.",
    },
    {
      criterion: "Documentation",
      weight: 10,

      proficient:
        "The project is professionally documented and reproducible.",
    },
    {
      criterion: "Reflection and originality",
      weight: 5,

      proficient:
        "The learner demonstrates growth, judgment, and original contribution.",
    },
  ],

  lumineryGuidance: {
    message:
      "A strong project does more than produce an answer. It makes the mathematics visible, tests the solution, explains the results, and creates something useful.",

    recommendation:
      "Begin with a small working model. Verify the mathematics before adding features, then improve the project through testing and reflection.",
  },
};

export function getProjectById(id) {
  return linearAlgebraProjects.projects.find(
    (project) => project.id === id
  );
}

export function getProjectsForModule(moduleNumber) {
  return linearAlgebraProjects.projects.filter((project) =>
    project.moduleNumbers.includes(Number(moduleNumber))
  );
}

export function getProjectsByLevel(level) {
  return linearAlgebraProjects.projects.filter(
    (project) =>
      project.level.toLowerCase() === level.toLowerCase()
  );
}

export function getAvailableProjects() {
  return linearAlgebraProjects.projects.filter(
    (project) => project.status === "Available"
  );
}

export function getRequiredPortfolioProjects() {
  return linearAlgebraProjects.requiredPortfolioProjects
    .map((id) => getProjectById(id))
    .filter(Boolean);
}

export function getCapstoneProject() {
  return getProjectById(linearAlgebraProjects.capstoneProjectId);
}

export default linearAlgebraProjects;