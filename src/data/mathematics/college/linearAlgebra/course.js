const linearAlgebraCourse = {
  id: "linear-algebra-foundations-to-ai",
  slug: "linear-algebra-foundations-to-ai",

  title: "Linear Algebra: Foundations to AI",

  shortTitle: "Linear Algebra",

  category: "College Mathematics",

  subject: "Mathematics",

  level: "Advanced High School to College",

  status: "In Development",

  featured: true,

  duration: {
    weeks: "12–16 weeks",
    totalHours: "60–90 hours",
    weeklyCommitment: "5–7 hours",
  },

  description:
    "A deep, visual, computational, and project-based journey through vectors, matrices, systems of equations, transformations, vector spaces, eigenvalues, least squares, singular value decomposition, numerical methods, and artificial intelligence applications.",

  problemStatement:
    "Many learners can perform matrix calculations but do not understand how vectors, matrices, transformations, eigenvectors, and decompositions form one connected mathematical language for science, engineering, data, robotics, and artificial intelligence.",

  purpose:
    "Develop learners who can explain, calculate, visualize, program, apply, research, and create with linear algebra.",

  audience: [
    "Advanced high school students",
    "College students",
    "Career changers",
    "Data science learners",
    "Machine learning learners",
    "AI engineering learners",
    "Robotics learners",
    "Researchers strengthening mathematical foundations",
  ],

  prerequisites: [
    "Algebra II",
    "Functions and graphing",
    "Systems of linear equations",
    "Coordinate geometry",
    "Basic trigonometry",
    "Introductory Python is recommended but not required",
  ],

  learningOutcomes: [
    "Represent mathematical and real-world quantities using vectors.",
    "Perform vector and matrix operations accurately.",
    "Solve and interpret systems of linear equations.",
    "Explain matrix multiplication as composition and row-column interaction.",
    "Interpret matrices as linear transformations.",
    "Analyze determinants, invertibility, orientation, and scaling.",
    "Explain span, linear independence, basis, and dimension.",
    "Compute and interpret eigenvalues and eigenvectors.",
    "Apply orthogonality, projections, and least squares.",
    "Explain singular value decomposition and low-rank approximation.",
    "Implement core linear algebra methods in Python and NumPy.",
    "Apply linear algebra to AI, data science, robotics, graphics, and engineering.",
    "Complete portfolio projects and a research-based capstone.",
  ],

  masteryJourney: [
    {
      stage: "Learn",
      description:
        "Build intuition, vocabulary, notation, and conceptual understanding.",
    },
    {
      stage: "Practice",
      description:
        "Strengthen computational fluency and mathematical reasoning.",
    },
    {
      stage: "Build",
      description:
        "Create Python tools, visualizations, models, and simulations.",
    },
    {
      stage: "Master",
      description:
        "Solve unfamiliar problems independently and justify each step.",
    },
    {
      stage: "Apply",
      description:
        "Use linear algebra in real scientific, engineering, data, and AI contexts.",
    },
    {
      stage: "Research",
      description:
        "Investigate meaningful questions using evidence, computation, and mathematical analysis.",
    },
    {
      stage: "Create",
      description:
        "Develop original tools, experiments, explanations, or applications.",
    },
    {
      stage: "Lead",
      description:
        "Teach concepts, communicate findings, mentor others, and contribute knowledge.",
    },
  ],

  modules: [
    {
      id: "module-01",
      number: 1,
      slug: "vectors",
      title: "Vectors and Geometric Foundations",
      shortDescription:
        "Represent magnitude, direction, position, motion, features, and high-dimensional data.",
      status: "Available",
      lessonCount: 8,
    },
    {
      id: "module-02",
      number: 2,
      slug: "matrices",
      title: "Matrices and Matrix Operations",
      shortDescription:
        "Use matrices to organize data, encode relationships, and perform structured computations.",
      status: "Planned",
      lessonCount: 8,
    },
    {
      id: "module-03",
      number: 3,
      slug: "systems-of-linear-equations",
      title: "Systems of Linear Equations",
      shortDescription:
        "Model and solve multiple constraints using elimination, matrices, and geometry.",
      status: "Planned",
      lessonCount: 8,
    },
    {
      id: "module-04",
      number: 4,
      slug: "determinants",
      title: "Determinants and Invertibility",
      shortDescription:
        "Understand area scaling, orientation, invertibility, and singularity.",
      status: "Planned",
      lessonCount: 7,
    },
    {
      id: "module-05",
      number: 5,
      slug: "vector-spaces",
      title: "Vector Spaces, Span, Basis, and Dimension",
      shortDescription:
        "Study the structure of spaces generated by vectors.",
      status: "Planned",
      lessonCount: 9,
    },
    {
      id: "module-06",
      number: 6,
      slug: "linear-transformations",
      title: "Linear Transformations",
      shortDescription:
        "Interpret matrices as mappings that rotate, scale, reflect, shear, and project.",
      status: "Planned",
      lessonCount: 9,
    },
    {
      id: "module-07",
      number: 7,
      slug: "eigenvalues-and-eigenvectors",
      title: "Eigenvalues and Eigenvectors",
      shortDescription:
        "Identify stable directions and dominant behavior under transformation.",
      status: "Planned",
      lessonCount: 9,
    },
    {
      id: "module-08",
      number: 8,
      slug: "orthogonality",
      title: "Orthogonality and Projections",
      shortDescription:
        "Use perpendicular structure to decompose vectors and simplify problems.",
      status: "Planned",
      lessonCount: 7,
    },
    {
      id: "module-09",
      number: 9,
      slug: "least-squares",
      title: "Least Squares and Approximation",
      shortDescription:
        "Find the best approximate solution when an exact solution does not exist.",
      status: "Planned",
      lessonCount: 7,
    },
    {
      id: "module-10",
      number: 10,
      slug: "singular-value-decomposition",
      title: "Singular Value Decomposition",
      shortDescription:
        "Decompose matrices into interpretable geometric actions and low-rank structure.",
      status: "Planned",
      lessonCount: 8,
    },
    {
      id: "module-11",
      number: 11,
      slug: "numerical-linear-algebra",
      title: "Numerical Linear Algebra",
      shortDescription:
        "Study efficient and stable computational methods for large systems and matrices.",
      status: "Planned",
      lessonCount: 8,
    },
    {
      id: "module-12",
      number: 12,
      slug: "linear-algebra-for-ai",
      title: "Linear Algebra for Artificial Intelligence",
      shortDescription:
        "Connect vectors, matrices, eigenstructure, optimization, and decompositions to AI systems.",
      status: "Planned",
      lessonCount: 10,
    },
  ],

  featuredProjects: [
    {
      id: "vector-visualizer",
      title: "Interactive Vector Visualizer",
      level: "Beginner",
      description:
        "Build a Python tool that displays vectors, magnitude, direction, addition, scaling, and geometric relationships.",
    },
    {
      id: "matrix-calculator",
      title: "Explainable Matrix Calculator",
      level: "Intermediate",
      description:
        "Create a calculator that performs matrix operations and explains each mathematical step.",
    },
    {
      id: "transformation-studio",
      title: "Linear Transformation Studio",
      level: "Intermediate",
      description:
        "Visualize rotations, reflections, scaling, shearing, and projections.",
    },
    {
      id: "least-squares-model",
      title: "Least-Squares Data Model",
      level: "Advanced",
      description:
        "Build regression from first principles and analyze residuals, assumptions, and limitations.",
    },
    {
      id: "svd-compression",
      title: "SVD Image Compression Lab",
      level: "Advanced",
      description:
        "Use low-rank approximation to compress images and study the relationship between rank and quality.",
    },
  ],

  capstone: {
    id: "explainable-linear-algebra-toolkit",
    title: "Explainable Linear Algebra Toolkit",
    description:
      "Build a documented Python application or notebook suite that calculates, visualizes, explains, tests, and applies the major ideas of linear algebra.",
    requiredEvidence: [
      "Problem definition",
      "Mathematical explanations",
      "Vector operations",
      "Matrix operations",
      "System solving",
      "Transformations",
      "Determinants",
      "Eigen-analysis",
      "Least squares",
      "SVD",
      "Visualizations",
      "Python code",
      "Testing",
      "Technical documentation",
      "Reflection",
      "Research extension",
    ],
  },

  researchThemes: [
    "Matrix multiplication in neural networks",
    "Vector embeddings and semantic similarity",
    "Eigenvectors in ranking systems",
    "Linear transformations in robotics",
    "Least squares in noisy scientific data",
    "SVD in recommender systems",
    "Low-rank approximation in image compression",
    "Numerical stability in large matrix systems",
  ],

  careerConnections: [
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Scientist",
    "Robotics Engineer",
    "Computer Vision Engineer",
    "Quantitative Analyst",
    "Scientific Computing Engineer",
    "Graphics Programmer",
    "Operations Research Analyst",
    "AI Researcher",
  ],

  tools: [
    "Python",
    "NumPy",
    "Matplotlib",
    "SymPy",
    "SciPy",
    "Jupyter Notebook",
    "VS Code",
    "GitHub",
  ],

  assessmentModel: {
    practiceAndReflection: 15,
    mathematicalReasoning: 20,
    pythonLabs: 20,
    portfolioProjects: 20,
    researchExtension: 10,
    finalMasteryChallenge: 15,
  },

  certificationRequirements: [
    "Complete all required modules.",
    "Demonstrate mastery of core concepts.",
    "Complete required Python labs.",
    "Submit portfolio evidence.",
    "Complete at least one research extension.",
    "Pass the final mastery challenge.",
    "Complete the capstone project.",
  ],

  luminery: {
    role: "AI Mathematics Mentor",
    welcomeMessage:
      "Linear algebra is not a collection of disconnected formulas. It is a language for representing and transforming information.",
    recommendation:
      "Focus on meaning before procedure. Draw the vectors, explain the matrix, verify the calculation, and connect the result to a real system.",
  },
};

export default linearAlgebraCourse;