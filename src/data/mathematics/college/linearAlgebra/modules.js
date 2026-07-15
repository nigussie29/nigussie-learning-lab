const linearAlgebraModules = [
  {
    id: "module-01",
    number: 1,
    slug: "vectors",
    title: "Vectors and Geometric Foundations",
    shortTitle: "Vectors",
    status: "Available",
    duration: "1–2 weeks",

    overview:
      "This module introduces vectors as mathematical objects that represent magnitude, direction, position, motion, forces, features, and high-dimensional data. Learners connect coordinate geometry to modern applications in physics, robotics, data science, and artificial intelligence.",

    problemStatement:
      "How can we represent quantities that have several components, such as movement, force, color, customer features, or word meaning?",

    whyItMatters:
      "Vectors form the foundation of linear algebra. Data points, images, motion, embeddings, and neural-network inputs are commonly represented as vectors.",

    prerequisites: [
      "Coordinate plane",
      "Basic algebra",
      "Distance formula",
      "Pythagorean theorem",
      "Basic trigonometry",
    ],

    learningObjectives: [
      "Distinguish scalars from vectors.",
      "Represent vectors using coordinates and notation.",
      "Interpret vectors geometrically.",
      "Calculate vector magnitude.",
      "Add, subtract, and scale vectors.",
      "Calculate and interpret the dot product.",
      "Determine angles and similarity between vectors.",
      "Apply vectors to physical and data-based problems.",
    ],

    knowledgeMap: [
      "Scalars",
      "Vectors",
      "Components",
      "Magnitude",
      "Direction",
      "Vector Addition",
      "Scalar Multiplication",
      "Dot Product",
      "Angle",
      "Cosine Similarity",
    ],

    lessons: [
      {
        id: "lesson-01-01",
        number: 1,
        slug: "why-vectors",
        title: "Why Do We Need Vectors?",
        duration: "75 minutes",
        status: "Available",
        description:
          "Explore how vectors represent movement, force, data, images, and artificial-intelligence features.",
      },
      {
        id: "lesson-01-02",
        number: 2,
        slug: "scalars-and-vectors",
        title: "Scalars and Vectors",
        duration: "75 minutes",
        status: "Available",
        description:
          "Distinguish quantities with magnitude only from quantities with magnitude and direction.",
      },
      {
        id: "lesson-01-03",
        number: 3,
        slug: "vector-components",
        title: "Vector Components and Coordinate Representation",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Represent vectors in two, three, and higher dimensions using components.",
      },
      {
        id: "lesson-01-04",
        number: 4,
        slug: "vector-magnitude",
        title: "Magnitude, Distance, and Normalization",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Calculate vector length and create unit vectors.",
      },
      {
        id: "lesson-01-05",
        number: 5,
        slug: "vector-addition",
        title: "Vector Addition and Subtraction",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Combine and compare vectors algebraically and geometrically.",
      },
      {
        id: "lesson-01-06",
        number: 6,
        slug: "scalar-multiplication",
        title: "Scalar Multiplication and Direction",
        duration: "75 minutes",
        status: "Planned",
        description:
          "Understand how scaling changes magnitude and direction.",
      },
      {
        id: "lesson-01-07",
        number: 7,
        slug: "dot-product",
        title: "The Dot Product",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Measure alignment, work, projection, and similarity.",
      },
      {
        id: "lesson-01-08",
        number: 8,
        slug: "cosine-similarity",
        title: "Angles, Orthogonality, and Cosine Similarity",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Use vector angles to compare directions and data representations.",
      },
    ],

    practice: [
      "Calculate vector magnitude.",
      "Add and subtract vectors.",
      "Normalize vectors.",
      "Calculate dot products.",
      "Determine whether vectors are perpendicular.",
      "Compare data vectors using cosine similarity.",
    ],

    pythonLab: {
      id: "python-lab-01",
      title: "Python Vector Toolkit",
      description:
        "Build reusable Python functions for vector addition, scaling, magnitude, normalization, dot products, and cosine similarity.",
      tools: ["Python", "NumPy", "Matplotlib"],
    },

    visualization: {
      title: "Interactive Vector Visualizer",
      description:
        "Plot vectors, components, sums, differences, angles, and projections in two dimensions.",
    },

    project: {
      id: "vector-navigation-project",
      title: "Vector Navigation System",
      description:
        "Model movement, direction, displacement, and route planning using vectors.",
      portfolioEvidence: [
        "Vector model",
        "Calculations",
        "Python code",
        "Visualization",
        "Testing",
        "Reflection",
      ],
    },

    researchExtension:
      "Investigate how vectors represent words, images, users, products, or documents in modern artificial-intelligence systems.",

    assessment: {
      title: "Vector Foundations Mastery Check",
      format: "Concepts, calculations, visualization, Python, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Data Scientist",
      "Robotics Engineer",
      "Machine Learning Engineer",
      "Physics Researcher",
      "Computer Graphics Developer",
    ],
  },

  {
    id: "module-02",
    number: 2,
    slug: "matrices",
    title: "Matrices and Matrix Operations",
    shortTitle: "Matrices",
    status: "Planned",
    duration: "1–2 weeks",

    overview:
      "This module introduces matrices as structured arrays used to represent data, systems, transformations, graphs, images, and model parameters.",

    problemStatement:
      "How can we organize many related numbers and perform meaningful operations on them efficiently?",

    whyItMatters:
      "Matrices are used throughout mathematics, machine learning, data science, graphics, networks, scientific computing, and engineering.",

    prerequisites: [
      "Vectors",
      "Arithmetic operations",
      "Algebraic expressions",
      "Coordinate geometry",
    ],

    learningObjectives: [
      "Identify matrix dimensions and entries.",
      "Classify common matrix types.",
      "Add, subtract, and scale matrices.",
      "Calculate matrix transposes.",
      "Perform matrix multiplication.",
      "Interpret matrix multiplication as composition.",
      "Explain why matrix multiplication is not generally commutative.",
      "Represent data and transformations using matrices.",
    ],

    knowledgeMap: [
      "Matrix Notation",
      "Dimensions",
      "Rows and Columns",
      "Special Matrices",
      "Addition",
      "Scalar Multiplication",
      "Transpose",
      "Matrix Multiplication",
      "Composition",
    ],

    lessons: [
      {
        id: "lesson-02-01",
        number: 1,
        slug: "matrix-introduction",
        title: "What Is a Matrix?",
        duration: "75 minutes",
        status: "Planned",
        description:
          "Understand matrices as organized structures for data and operations.",
      },
      {
        id: "lesson-02-02",
        number: 2,
        slug: "matrix-dimensions",
        title: "Dimensions, Entries, Rows, and Columns",
        duration: "75 minutes",
        status: "Planned",
        description:
          "Read and describe matrix structure accurately.",
      },
      {
        id: "lesson-02-03",
        number: 3,
        slug: "special-matrices",
        title: "Special Matrices",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Explore zero, identity, diagonal, symmetric, and triangular matrices.",
      },
      {
        id: "lesson-02-04",
        number: 4,
        slug: "matrix-addition",
        title: "Matrix Addition, Subtraction, and Scaling",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Perform elementwise matrix operations and interpret their meaning.",
      },
      {
        id: "lesson-02-05",
        number: 5,
        slug: "matrix-transpose",
        title: "The Matrix Transpose",
        duration: "75 minutes",
        status: "Planned",
        description:
          "Reverse rows and columns and study symmetric structure.",
      },
      {
        id: "lesson-02-06",
        number: 6,
        slug: "matrix-multiplication",
        title: "Matrix Multiplication",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Master dimension compatibility and the row-column rule.",
      },
      {
        id: "lesson-02-07",
        number: 7,
        slug: "matrix-composition",
        title: "Matrix Multiplication as Composition",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Connect matrix products to sequences of transformations and operations.",
      },
      {
        id: "lesson-02-08",
        number: 8,
        slug: "matrices-in-data-and-ai",
        title: "Matrices in Data, Images, and AI",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Represent datasets, images, networks, and model weights using matrices.",
      },
    ],

    practice: [
      "Identify matrix dimensions.",
      "Classify matrix types.",
      "Add and subtract matrices.",
      "Calculate transposes.",
      "Check multiplication compatibility.",
      "Multiply matrices.",
      "Interpret matrix products.",
    ],

    pythonLab: {
      id: "python-lab-02",
      title: "Explainable Matrix Calculator",
      description:
        "Build a Python calculator for matrix addition, scaling, transpose, and multiplication.",
      tools: ["Python", "NumPy"],
    },

    visualization: {
      title: "Row-Column Multiplication Explorer",
      description:
        "Visualize how every output entry is formed from one row and one column.",
    },

    project: {
      id: "matrix-calculator-project",
      title: "Explainable Matrix Calculator",
      description:
        "Build a matrix calculator that displays both answers and mathematical reasoning.",
      portfolioEvidence: [
        "Interface or notebook",
        "Dimension validation",
        "Calculations",
        "Explanations",
        "Testing",
        "Documentation",
      ],
    },

    researchExtension:
      "Investigate why matrix multiplication is the central computational operation in modern neural networks.",

    assessment: {
      title: "Matrix Operations Mastery Challenge",
      format: "Calculations, explanations, debugging, Python, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Machine Learning Engineer",
      "Data Analyst",
      "Computer Vision Engineer",
      "Scientific Programmer",
      "Graphics Engineer",
    ],
  },

  {
    id: "module-03",
    number: 3,
    slug: "systems-of-linear-equations",
    title: "Systems of Linear Equations",
    shortTitle: "Linear Systems",
    status: "Planned",
    duration: "1–2 weeks",

    overview:
      "This module studies systems of equations as collections of constraints and develops graphical, algebraic, matrix, and computational solution methods.",

    problemStatement:
      "How can several equations or constraints be satisfied at the same time?",

    whyItMatters:
      "Linear systems appear in economics, engineering, networks, optimization, data fitting, physics, and scientific modeling.",

    prerequisites: [
      "Linear equations",
      "Matrices",
      "Basic graphing",
      "Algebraic manipulation",
    ],

    learningObjectives: [
      "Represent systems graphically and algebraically.",
      "Classify systems by their number of solutions.",
      "Use elimination and substitution.",
      "Represent systems as augmented matrices.",
      "Perform Gaussian elimination.",
      "Interpret pivot positions.",
      "Use reduced row-echelon form.",
      "Solve systems computationally.",
    ],

    knowledgeMap: [
      "Linear Equations",
      "Intersections",
      "Augmented Matrices",
      "Row Operations",
      "Echelon Form",
      "Pivots",
      "Gaussian Elimination",
      "Solution Sets",
    ],

    lessons: [
      {
        id: "lesson-03-01",
        number: 1,
        slug: "systems-as-constraints",
        title: "Systems as Interacting Constraints",
        duration: "75 minutes",
        status: "Planned",
        description:
          "Interpret systems as multiple conditions acting simultaneously.",
      },
      {
        id: "lesson-03-02",
        number: 2,
        slug: "graphical-solutions",
        title: "Graphical Solutions",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Interpret unique, nonexistent, and infinite solutions geometrically.",
      },
      {
        id: "lesson-03-03",
        number: 3,
        slug: "substitution-elimination",
        title: "Substitution and Elimination",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Solve systems using familiar algebraic strategies.",
      },
      {
        id: "lesson-03-04",
        number: 4,
        slug: "augmented-matrices",
        title: "Augmented Matrices",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Translate systems into matrix form.",
      },
      {
        id: "lesson-03-05",
        number: 5,
        slug: "row-operations",
        title: "Elementary Row Operations",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Use valid operations that preserve the solution set.",
      },
      {
        id: "lesson-03-06",
        number: 6,
        slug: "gaussian-elimination",
        title: "Gaussian Elimination",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Systematically transform systems into echelon form.",
      },
      {
        id: "lesson-03-07",
        number: 7,
        slug: "rref-pivots",
        title: "Reduced Row-Echelon Form and Pivots",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Interpret pivot and free variables.",
      },
      {
        id: "lesson-03-08",
        number: 8,
        slug: "linear-systems-applications",
        title: "Applications of Linear Systems",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Model mixtures, networks, resource allocation, and scientific problems.",
      },
    ],

    pythonLab: {
      id: "python-lab-03",
      title: "Linear System Solver",
      description:
        "Implement Gaussian elimination and compare results with NumPy.",
      tools: ["Python", "NumPy"],
    },

    visualization: {
      title: "System Geometry Explorer",
      description:
        "Visualize lines and planes with unique, infinite, or no intersections.",
    },

    project: {
      id: "resource-allocation-project",
      title: "Resource Allocation Model",
      description:
        "Build and solve a real system involving costs, materials, time, or capacity.",
      portfolioEvidence: [
        "Problem model",
        "System of equations",
        "Matrix representation",
        "Solution method",
        "Python verification",
        "Interpretation",
      ],
    },

    researchExtension:
      "Investigate how linear systems are used inside scientific simulations, networks, or optimization problems.",

    assessment: {
      title: "Linear Systems Mastery Assessment",
      format: "Graphical, algebraic, matrix, computational, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Operations Research Analyst",
      "Engineer",
      "Economist",
      "Data Scientist",
      "Scientific Computing Specialist",
    ],
  },

  {
    id: "module-04",
    number: 4,
    slug: "determinants",
    title: "Determinants and Invertibility",
    shortTitle: "Determinants",
    status: "Planned",
    duration: "1 week",

    overview:
      "This module develops determinants as measures of signed area or volume scaling, orientation, and invertibility.",

    problemStatement:
      "How can one number summarize whether a transformation preserves dimension, reverses orientation, or collapses space?",

    whyItMatters:
      "Determinants reveal invertibility, geometric scaling, dependence, coordinate changes, and singular behavior.",

    prerequisites: [
      "Matrices",
      "Matrix multiplication",
      "Linear systems",
      "Area and volume",
    ],

    learningObjectives: [
      "Calculate determinants of 2×2 and 3×3 matrices.",
      "Interpret determinant geometrically.",
      "Explain the meaning of determinant sign.",
      "Connect zero determinant to singularity.",
      "Use determinant properties.",
      "Determine whether a matrix is invertible.",
      "Connect determinants to systems and transformations.",
    ],

    knowledgeMap: [
      "Signed Area",
      "Volume Scaling",
      "Orientation",
      "Determinant Formula",
      "Cofactor Expansion",
      "Singularity",
      "Invertibility",
    ],

    lessons: [
      {
        id: "lesson-04-01",
        number: 1,
        slug: "determinant-intuition",
        title: "Why Determinants Exist",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Develop geometric intuition through area and volume scaling.",
      },
      {
        id: "lesson-04-02",
        number: 2,
        slug: "two-by-two-determinants",
        title: "Determinants of 2×2 Matrices",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Calculate and interpret the 2×2 determinant.",
      },
      {
        id: "lesson-04-03",
        number: 3,
        slug: "three-by-three-determinants",
        title: "Determinants of 3×3 Matrices",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Use expansion methods for larger matrices.",
      },
      {
        id: "lesson-04-04",
        number: 4,
        slug: "determinant-properties",
        title: "Properties of Determinants",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Analyze how row operations and products affect determinants.",
      },
      {
        id: "lesson-04-05",
        number: 5,
        slug: "invertibility",
        title: "Determinants and Invertibility",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Connect nonzero determinants to inverse matrices and unique solutions.",
      },
      {
        id: "lesson-04-06",
        number: 6,
        slug: "orientation-scaling",
        title: "Orientation and Scaling",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Interpret determinant magnitude and sign geometrically.",
      },
      {
        id: "lesson-04-07",
        number: 7,
        slug: "determinant-applications",
        title: "Applications of Determinants",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Explore Jacobians, coordinate changes, and stability.",
      },
    ],

    pythonLab: {
      id: "python-lab-04",
      title: "Determinant Explorer",
      description:
        "Calculate determinants and visualize area scaling under transformations.",
      tools: ["Python", "NumPy", "Matplotlib"],
    },

    visualization: {
      title: "Area and Orientation Explorer",
      description:
        "Transform a unit square and observe determinant magnitude and sign.",
    },

    project: {
      id: "determinant-area-project",
      title: "Determinant Geometry Lab",
      description:
        "Build a visual tool showing how matrices scale and orient shapes.",
      portfolioEvidence: [
        "Transformation matrix",
        "Original shape",
        "Transformed shape",
        "Determinant",
        "Geometric interpretation",
        "Code",
      ],
    },

    researchExtension:
      "Investigate how determinants and Jacobians are used in robotics, probability distributions, or coordinate transformations.",

    assessment: {
      title: "Determinant and Invertibility Challenge",
      format: "Calculation, geometry, reasoning, Python, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Robotics Engineer",
      "Computer Vision Engineer",
      "Applied Mathematician",
      "Physics Researcher",
      "AI Engineer",
    ],
  },

  {
    id: "module-05",
    number: 5,
    slug: "vector-spaces",
    title: "Vector Spaces, Span, Basis, and Dimension",
    shortTitle: "Vector Spaces",
    status: "Planned",
    duration: "2 weeks",

    overview:
      "This module moves from concrete vectors to the abstract structure of vector spaces, subspaces, span, independence, basis, and dimension.",

    problemStatement:
      "How can we describe all possible combinations of vectors and identify the smallest efficient set that generates a space?",

    whyItMatters:
      "Vector spaces provide the language for high-dimensional data, features, functions, signals, and model representations.",

    prerequisites: [
      "Vectors",
      "Linear combinations",
      "Systems of equations",
      "Row reduction",
    ],

    learningObjectives: [
      "Define a vector space and subspace.",
      "Generate vectors using linear combinations.",
      "Determine span.",
      "Test linear independence.",
      "Identify bases.",
      "Determine dimension.",
      "Interpret coordinates relative to a basis.",
      "Connect rank to span and independence.",
    ],

    knowledgeMap: [
      "Linear Combinations",
      "Span",
      "Subspaces",
      "Independence",
      "Basis",
      "Dimension",
      "Coordinates",
      "Rank",
      "Null Space",
      "Column Space",
    ],

    lessons: [
      {
        id: "lesson-05-01",
        number: 1,
        slug: "vector-space-intuition",
        title: "From Vectors to Vector Spaces",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Generalize vector ideas beyond arrows in the plane.",
      },
      {
        id: "lesson-05-02",
        number: 2,
        slug: "linear-combinations",
        title: "Linear Combinations",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Build new vectors from scaled combinations.",
      },
      {
        id: "lesson-05-03",
        number: 3,
        slug: "span",
        title: "Span and Generated Spaces",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Determine which vectors can be generated.",
      },
      {
        id: "lesson-05-04",
        number: 4,
        slug: "subspaces",
        title: "Subspaces",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Identify subsets that preserve vector-space structure.",
      },
      {
        id: "lesson-05-05",
        number: 5,
        slug: "linear-independence",
        title: "Linear Independence",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Identify redundancy among vectors.",
      },
      {
        id: "lesson-05-06",
        number: 6,
        slug: "basis",
        title: "Basis",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Find efficient generating sets.",
      },
      {
        id: "lesson-05-07",
        number: 7,
        slug: "dimension",
        title: "Dimension",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Measure the number of independent directions in a space.",
      },
      {
        id: "lesson-05-08",
        number: 8,
        slug: "coordinates-basis",
        title: "Coordinates Relative to a Basis",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Represent vectors using different coordinate systems.",
      },
      {
        id: "lesson-05-09",
        number: 9,
        slug: "fundamental-subspaces",
        title: "Column Space, Row Space, and Null Space",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Analyze the fundamental spaces associated with a matrix.",
      },
    ],

    pythonLab: {
      id: "python-lab-05",
      title: "Span and Basis Investigator",
      description:
        "Use Python to test independence, calculate rank, and explore bases.",
      tools: ["Python", "NumPy", "SymPy"],
    },

    visualization: {
      title: "Span and Independence Explorer",
      description:
        "Visualize how vectors generate lines, planes, and spaces.",
    },

    project: {
      id: "basis-explorer-project",
      title: "Basis and Coordinate Explorer",
      description:
        "Build a tool that converts vectors between coordinate bases.",
      portfolioEvidence: [
        "Basis definition",
        "Coordinate conversion",
        "Independence verification",
        "Visualization",
        "Python code",
        "Reflection",
      ],
    },

    researchExtension:
      "Investigate how learned feature spaces and embeddings act like coordinate systems in machine learning.",

    assessment: {
      title: "Vector Spaces Mastery Assessment",
      format: "Conceptual, proof, calculation, Python, and interpretation",
      passingScore: 80,
    },

    careerConnections: [
      "AI Researcher",
      "Machine Learning Engineer",
      "Signal Processing Engineer",
      "Data Scientist",
      "Applied Mathematician",
    ],
  },

  {
    id: "module-06",
    number: 6,
    slug: "linear-transformations",
    title: "Linear Transformations",
    shortTitle: "Transformations",
    status: "Planned",
    duration: "2 weeks",

    overview:
      "This module interprets matrices as functions that transform vectors while preserving linear structure.",

    problemStatement:
      "How can we systematically rotate, scale, reflect, shear, project, and map objects or data?",

    whyItMatters:
      "Linear transformations power graphics, robotics, computer vision, coordinate systems, neural networks, and scientific modeling.",

    prerequisites: [
      "Matrices",
      "Matrix multiplication",
      "Vector spaces",
      "Basis",
    ],

    learningObjectives: [
      "Define a linear transformation.",
      "Test whether a mapping is linear.",
      "Apply transformation matrices.",
      "Build standard transformation matrices.",
      "Compose transformations.",
      "Interpret kernel and image.",
      "Create matrix representations relative to bases.",
      "Apply transformations to real systems.",
    ],

    knowledgeMap: [
      "Functions",
      "Linearity",
      "Matrix Representation",
      "Rotation",
      "Reflection",
      "Scaling",
      "Shearing",
      "Projection",
      "Kernel",
      "Image",
      "Composition",
    ],

    lessons: [
      {
        id: "lesson-06-01",
        number: 1,
        slug: "transformation-intuition",
        title: "Transformations as Mathematical Machines",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Understand mappings that take vectors as input and produce vectors as output.",
      },
      {
        id: "lesson-06-02",
        number: 2,
        slug: "linearity",
        title: "What Makes a Transformation Linear?",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Test additivity and scalar compatibility.",
      },
      {
        id: "lesson-06-03",
        number: 3,
        slug: "matrix-representation",
        title: "Matrix Representation of Transformations",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Construct transformation matrices using basis vectors.",
      },
      {
        id: "lesson-06-04",
        number: 4,
        slug: "scaling-shearing",
        title: "Scaling and Shearing",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Create and interpret scaling and shearing matrices.",
      },
      {
        id: "lesson-06-05",
        number: 5,
        slug: "rotation-reflection",
        title: "Rotation and Reflection",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Model geometric rotations and reflections.",
      },
      {
        id: "lesson-06-06",
        number: 6,
        slug: "projection-transformations",
        title: "Projection Transformations",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Map vectors onto lines and subspaces.",
      },
      {
        id: "lesson-06-07",
        number: 7,
        slug: "composition-transformations",
        title: "Composition of Transformations",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Connect matrix multiplication to sequential transformations.",
      },
      {
        id: "lesson-06-08",
        number: 8,
        slug: "kernel-image",
        title: "Kernel and Image",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Analyze what a transformation loses and what it can produce.",
      },
      {
        id: "lesson-06-09",
        number: 9,
        slug: "transformations-applications",
        title: "Transformations in Robotics, Graphics, and AI",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Apply transformation matrices to meaningful systems.",
      },
    ],

    pythonLab: {
      id: "python-lab-06",
      title: "Transformation Studio",
      description:
        "Build an interactive Python visualizer for standard 2D transformations.",
      tools: ["Python", "NumPy", "Matplotlib"],
    },

    visualization: {
      title: "Interactive Transformation Plane",
      description:
        "Manipulate matrix entries and observe how the coordinate grid changes.",
    },

    project: {
      id: "transformation-studio-project",
      title: "Linear Transformation Studio",
      description:
        "Build a visual application for rotation, reflection, scaling, shear, and projection.",
      portfolioEvidence: [
        "Transformation matrices",
        "Visual outputs",
        "Composition",
        "Python implementation",
        "User explanation",
        "Testing",
      ],
    },

    researchExtension:
      "Investigate coordinate transformations in robotics, augmented reality, or computer vision.",

    assessment: {
      title: "Linear Transformations Mastery Challenge",
      format: "Definition, construction, visualization, Python, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Robotics Engineer",
      "Computer Vision Engineer",
      "Graphics Programmer",
      "AI Engineer",
      "Simulation Engineer",
    ],
  },

  {
    id: "module-07",
    number: 7,
    slug: "eigenvalues-and-eigenvectors",
    title: "Eigenvalues and Eigenvectors",
    shortTitle: "Eigenvalues",
    status: "Planned",
    duration: "2 weeks",

    overview:
      "This module studies directions that remain unchanged except for scaling under a linear transformation.",

    problemStatement:
      "Which directions preserve their orientation under a transformation, and what can those directions reveal about system behavior?",

    whyItMatters:
      "Eigenvalues and eigenvectors reveal dominant patterns, stability, ranking, vibration modes, dimensional structure, and long-term behavior.",

    prerequisites: [
      "Matrices",
      "Determinants",
      "Vector spaces",
      "Linear transformations",
    ],

    learningObjectives: [
      "Explain the eigenvector equation.",
      "Calculate eigenvalues.",
      "Calculate eigenvectors.",
      "Interpret eigendirections geometrically.",
      "Diagonalize suitable matrices.",
      "Analyze repeated transformations.",
      "Apply eigen-analysis to real systems.",
      "Connect eigenvectors to PCA and ranking.",
    ],

    knowledgeMap: [
      "Invariant Directions",
      "Eigenvalue Equation",
      "Characteristic Polynomial",
      "Eigenspaces",
      "Diagonalization",
      "Repeated Transformations",
      "Stability",
      "Principal Components",
    ],

    lessons: [
      {
        id: "lesson-07-01",
        number: 1,
        slug: "eigen-intuition",
        title: "Stable Directions Under Transformation",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Develop geometric intuition for eigendirections.",
      },
      {
        id: "lesson-07-02",
        number: 2,
        slug: "eigen-equation",
        title: "The Eigenvalue Equation",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Interpret Av = λv conceptually and algebraically.",
      },
      {
        id: "lesson-07-03",
        number: 3,
        slug: "characteristic-equation",
        title: "The Characteristic Equation",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Derive eigenvalues using determinants.",
      },
      {
        id: "lesson-07-04",
        number: 4,
        slug: "finding-eigenvectors",
        title: "Finding Eigenvectors",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Calculate eigenspaces associated with eigenvalues.",
      },
      {
        id: "lesson-07-05",
        number: 5,
        slug: "eigen-geometry",
        title: "Geometric Interpretation",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Visualize eigendirections under transformations.",
      },
      {
        id: "lesson-07-06",
        number: 6,
        slug: "diagonalization",
        title: "Diagonalization",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Represent transformations in an eigenvector basis.",
      },
      {
        id: "lesson-07-07",
        number: 7,
        slug: "repeated-transformations",
        title: "Repeated Transformations and Dynamical Systems",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Analyze long-term system behavior.",
      },
      {
        id: "lesson-07-08",
        number: 8,
        slug: "pca-eigenvectors",
        title: "Eigenvectors and Principal Component Analysis",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Connect eigenstructure to variance and dimensionality reduction.",
      },
      {
        id: "lesson-07-09",
        number: 9,
        slug: "eigen-applications",
        title: "Eigenvalue Applications",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Explore PageRank, vibration, stability, and AI applications.",
      },
    ],

    pythonLab: {
      id: "python-lab-07",
      title: "Eigenvector Visualizer",
      description:
        "Calculate and visualize eigendirections for 2×2 matrices.",
      tools: ["Python", "NumPy", "Matplotlib"],
    },

    visualization: {
      title: "Eigendirection Explorer",
      description:
        "Change matrix entries and observe stable directions and scaling factors.",
    },

    project: {
      id: "eigenvector-project",
      title: "Eigenvalue Application Notebook",
      description:
        "Investigate PCA, ranking, vibration, or repeated transformations.",
      portfolioEvidence: [
        "Problem definition",
        "Matrix model",
        "Eigenvalues",
        "Eigenvectors",
        "Visualization",
        "Interpretation",
        "Python code",
      ],
    },

    researchExtension:
      "Investigate how eigenvectors are used in PageRank, PCA, quantum mechanics, vibration analysis, or dynamical systems.",

    assessment: {
      title: "Eigenvalues and Eigenvectors Mastery Assessment",
      format: "Computation, geometry, explanation, Python, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Machine Learning Engineer",
      "AI Researcher",
      "Structural Engineer",
      "Quantitative Analyst",
      "Data Scientist",
    ],
  },

  {
    id: "module-08",
    number: 8,
    slug: "orthogonality",
    title: "Orthogonality and Projections",
    shortTitle: "Orthogonality",
    status: "Planned",
    duration: "1 week",

    overview:
      "This module studies perpendicular structure, orthogonal bases, projections, and decomposition.",

    problemStatement:
      "How can a vector be separated into meaningful perpendicular components?",

    whyItMatters:
      "Orthogonality simplifies calculations and supports regression, signal processing, geometry, optimization, QR factorization, and machine learning.",

    prerequisites: [
      "Dot product",
      "Vector spaces",
      "Basis",
      "Linear transformations",
    ],

    learningObjectives: [
      "Identify orthogonal vectors.",
      "Determine orthogonal complements.",
      "Project vectors onto lines and subspaces.",
      "Construct orthogonal and orthonormal bases.",
      "Use Gram-Schmidt orthogonalization.",
      "Interpret projection error.",
      "Apply orthogonality to approximation problems.",
    ],

    knowledgeMap: [
      "Perpendicularity",
      "Orthogonal Sets",
      "Orthonormal Bases",
      "Projection",
      "Orthogonal Complement",
      "Gram-Schmidt",
      "Decomposition",
    ],

    lessons: [
      {
        id: "lesson-08-01",
        number: 1,
        slug: "orthogonality-intuition",
        title: "Orthogonality Beyond Perpendicular Lines",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Generalize perpendicularity using the dot product.",
      },
      {
        id: "lesson-08-02",
        number: 2,
        slug: "orthogonal-sets",
        title: "Orthogonal and Orthonormal Sets",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Analyze sets of mutually perpendicular vectors.",
      },
      {
        id: "lesson-08-03",
        number: 3,
        slug: "vector-projection",
        title: "Projection onto a Vector",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Find the closest component in a selected direction.",
      },
      {
        id: "lesson-08-04",
        number: 4,
        slug: "subspace-projection",
        title: "Projection onto a Subspace",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Approximate vectors using a subspace.",
      },
      {
        id: "lesson-08-05",
        number: 5,
        slug: "orthogonal-complements",
        title: "Orthogonal Complements",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Analyze vectors perpendicular to entire subspaces.",
      },
      {
        id: "lesson-08-06",
        number: 6,
        slug: "gram-schmidt",
        title: "Gram-Schmidt Orthogonalization",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Convert independent vectors into an orthonormal basis.",
      },
      {
        id: "lesson-08-07",
        number: 7,
        slug: "orthogonality-applications",
        title: "Applications of Orthogonality",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Explore signals, regression, graphics, and data representations.",
      },
    ],

    pythonLab: {
      id: "python-lab-08",
      title: "Projection and Gram-Schmidt Lab",
      description:
        "Implement projections and orthonormalization in Python.",
      tools: ["Python", "NumPy"],
    },

    visualization: {
      title: "Projection Explorer",
      description:
        "Visualize projection, residual, and perpendicular decomposition.",
    },

    project: {
      id: "projection-project",
      title: "Projection Decomposition Tool",
      description:
        "Build a tool that decomposes vectors into projected and residual components.",
      portfolioEvidence: [
        "Vector model",
        "Projection formula",
        "Residual",
        "Visualization",
        "Python code",
        "Interpretation",
      ],
    },

    researchExtension:
      "Investigate orthogonality in Fourier analysis, signal processing, or feature engineering.",

    assessment: {
      title: "Orthogonality and Projection Mastery Check",
      format: "Calculation, geometry, derivation, Python, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Signal Processing Engineer",
      "Data Scientist",
      "Computer Vision Engineer",
      "Machine Learning Engineer",
      "Applied Mathematician",
    ],
  },

  {
    id: "module-09",
    number: 9,
    slug: "least-squares",
    title: "Least Squares and Approximation",
    shortTitle: "Least Squares",
    status: "Planned",
    duration: "1–2 weeks",

    overview:
      "This module develops least squares as the method for finding the best approximate solution when exact consistency is impossible.",

    problemStatement:
      "How can we find the best solution when data are noisy or a system has no exact answer?",

    whyItMatters:
      "Least squares is foundational to regression, estimation, forecasting, scientific measurement, data fitting, and machine learning.",

    prerequisites: [
      "Linear systems",
      "Orthogonality",
      "Projection",
      "Matrix multiplication",
    ],

    learningObjectives: [
      "Explain why inconsistent systems arise.",
      "Interpret least squares geometrically.",
      "Derive the normal equations.",
      "Calculate least-squares solutions.",
      "Fit linear models.",
      "Analyze residuals.",
      "Evaluate model limitations.",
      "Implement regression from first principles.",
    ],

    knowledgeMap: [
      "Inconsistent Systems",
      "Projection",
      "Residual",
      "Normal Equations",
      "Best Fit",
      "Regression",
      "Error Analysis",
    ],

    lessons: [
      {
        id: "lesson-09-01",
        number: 1,
        slug: "approximation-problem",
        title: "When Exact Solutions Do Not Exist",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Understand noisy and inconsistent systems.",
      },
      {
        id: "lesson-09-02",
        number: 2,
        slug: "least-squares-geometry",
        title: "The Geometry of Least Squares",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Interpret approximation as projection.",
      },
      {
        id: "lesson-09-03",
        number: 3,
        slug: "normal-equations",
        title: "Deriving the Normal Equations",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Derive the least-squares system from orthogonality.",
      },
      {
        id: "lesson-09-04",
        number: 4,
        slug: "least-squares-calculation",
        title: "Calculating Least-Squares Solutions",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Solve approximation problems using matrices.",
      },
      {
        id: "lesson-09-05",
        number: 5,
        slug: "linear-regression",
        title: "Linear Regression from First Principles",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Build regression using linear algebra.",
      },
      {
        id: "lesson-09-06",
        number: 6,
        slug: "residual-analysis",
        title: "Residuals, Error, and Model Quality",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Interpret approximation error and limitations.",
      },
      {
        id: "lesson-09-07",
        number: 7,
        slug: "least-squares-applications",
        title: "Least-Squares Applications",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Apply least squares to scientific data and prediction.",
      },
    ],

    pythonLab: {
      id: "python-lab-09",
      title: "Regression from First Principles",
      description:
        "Implement least-squares regression and compare it with library results.",
      tools: ["Python", "NumPy", "Matplotlib", "Pandas"],
    },

    visualization: {
      title: "Best-Fit Projection Explorer",
      description:
        "Visualize observed values, predictions, residuals, and the best-fit line.",
    },

    project: {
      id: "least-squares-data-project",
      title: "Real-World Least-Squares Model",
      description:
        "Fit and evaluate a model using a meaningful dataset.",
      portfolioEvidence: [
        "Dataset",
        "Mathematical derivation",
        "Model coefficients",
        "Predictions",
        "Residual analysis",
        "Visualization",
        "Reflection",
      ],
    },

    researchExtension:
      "Investigate how least squares changes when outliers, nonlinear patterns, or unequal error variance are present.",

    assessment: {
      title: "Least Squares Mastery Challenge",
      format: "Derivation, calculation, Python, modeling, and evaluation",
      passingScore: 80,
    },

    careerConnections: [
      "Data Scientist",
      "Statistician",
      "Economist",
      "Quantitative Analyst",
      "Machine Learning Engineer",
    ],
  },

  {
    id: "module-10",
    number: 10,
    slug: "singular-value-decomposition",
    title: "Singular Value Decomposition",
    shortTitle: "SVD",
    status: "Planned",
    duration: "1–2 weeks",

    overview:
      "This module develops singular value decomposition as a universal matrix factorization that reveals geometry, rank, importance, and low-dimensional structure.",

    problemStatement:
      "How can a complex matrix be separated into simpler transformations that reveal its most important structure?",

    whyItMatters:
      "SVD supports compression, recommendation, denoising, dimensionality reduction, image processing, and numerical stability.",

    prerequisites: [
      "Eigenvalues and eigenvectors",
      "Orthogonality",
      "Linear transformations",
      "Matrices",
    ],

    learningObjectives: [
      "Explain the geometric meaning of SVD.",
      "Identify singular values and singular vectors.",
      "Interpret rank using singular values.",
      "Construct low-rank approximations.",
      "Apply SVD to compression.",
      "Connect SVD to PCA.",
      "Use SVD for data and recommendation problems.",
    ],

    knowledgeMap: [
      "Orthogonal Matrices",
      "Singular Values",
      "Left Singular Vectors",
      "Right Singular Vectors",
      "Rank",
      "Low-Rank Approximation",
      "Compression",
      "Latent Structure",
    ],

    lessons: [
      {
        id: "lesson-10-01",
        number: 1,
        slug: "svd-intuition",
        title: "Why Singular Value Decomposition?",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Understand SVD as rotation, scaling, and rotation.",
      },
      {
        id: "lesson-10-02",
        number: 2,
        slug: "svd-components",
        title: "The Components of SVD",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Interpret U, Σ, and Vᵀ.",
      },
      {
        id: "lesson-10-03",
        number: 3,
        slug: "singular-values",
        title: "Singular Values and Importance",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Measure dominant directions and matrix strength.",
      },
      {
        id: "lesson-10-04",
        number: 4,
        slug: "svd-rank",
        title: "Rank and SVD",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Analyze effective dimensionality.",
      },
      {
        id: "lesson-10-05",
        number: 5,
        slug: "low-rank-approximation",
        title: "Low-Rank Approximation",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Approximate matrices using their most important components.",
      },
      {
        id: "lesson-10-06",
        number: 6,
        slug: "svd-image-compression",
        title: "Image Compression with SVD",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Apply low-rank approximation to image data.",
      },
      {
        id: "lesson-10-07",
        number: 7,
        slug: "svd-recommenders",
        title: "SVD and Recommender Systems",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Reveal latent user and product factors.",
      },
      {
        id: "lesson-10-08",
        number: 8,
        slug: "svd-pca-connection",
        title: "The Connection Between SVD and PCA",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Connect matrix factorization and dimensionality reduction.",
      },
    ],

    pythonLab: {
      id: "python-lab-10",
      title: "SVD Compression Lab",
      description:
        "Compress images and analyze quality as rank changes.",
      tools: ["Python", "NumPy", "Matplotlib", "Pillow"],
    },

    visualization: {
      title: "SVD Geometry Explorer",
      description:
        "Visualize rotation, axis scaling, and final orientation.",
    },

    project: {
      id: "svd-compression-project",
      title: "SVD Image Compression System",
      description:
        "Create and evaluate a low-rank image-compression application.",
      portfolioEvidence: [
        "Original image",
        "Singular values",
        "Rank comparisons",
        "Compressed outputs",
        "Quality analysis",
        "Python implementation",
        "Technical report",
      ],
    },

    researchExtension:
      "Investigate SVD in recommender systems, latent semantic analysis, denoising, or model compression.",

    assessment: {
      title: "SVD Mastery Assessment",
      format: "Conceptual, geometric, computational, Python, and application",
      passingScore: 80,
    },

    careerConnections: [
      "Machine Learning Engineer",
      "Data Scientist",
      "Computer Vision Engineer",
      "Recommendation Systems Engineer",
      "AI Researcher",
    ],
  },

  {
    id: "module-11",
    number: 11,
    slug: "numerical-linear-algebra",
    title: "Numerical Linear Algebra",
    shortTitle: "Numerical Methods",
    status: "Planned",
    duration: "1–2 weeks",

    overview:
      "This module studies how linear algebra is computed efficiently, accurately, and reliably on real computers.",

    problemStatement:
      "How can large matrix problems be solved when exact symbolic methods are too slow, unstable, or expensive?",

    whyItMatters:
      "Modern AI and scientific computing require stable and efficient numerical algorithms for massive matrices.",

    prerequisites: [
      "Linear systems",
      "Matrix factorization",
      "Eigenvalues",
      "Orthogonality",
      "Python",
    ],

    learningObjectives: [
      "Explain floating-point error.",
      "Analyze numerical stability.",
      "Understand matrix conditioning.",
      "Use LU decomposition.",
      "Use QR decomposition.",
      "Compare direct and iterative solvers.",
      "Analyze computational complexity.",
      "Select suitable numerical methods.",
    ],

    knowledgeMap: [
      "Floating-Point Arithmetic",
      "Conditioning",
      "Stability",
      "LU Factorization",
      "QR Factorization",
      "Iterative Methods",
      "Complexity",
      "Sparse Matrices",
    ],

    lessons: [
      {
        id: "lesson-11-01",
        number: 1,
        slug: "numerical-computation",
        title: "Exact Mathematics vs Computer Arithmetic",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Understand floating-point representation and numerical error.",
      },
      {
        id: "lesson-11-02",
        number: 2,
        slug: "conditioning",
        title: "Conditioning",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Measure sensitivity to input changes.",
      },
      {
        id: "lesson-11-03",
        number: 3,
        slug: "numerical-stability",
        title: "Numerical Stability",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Evaluate how algorithms amplify or control error.",
      },
      {
        id: "lesson-11-04",
        number: 4,
        slug: "lu-factorization",
        title: "LU Factorization",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Factor matrices for repeated system solving.",
      },
      {
        id: "lesson-11-05",
        number: 5,
        slug: "qr-factorization",
        title: "QR Factorization",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Use orthogonality for stable computation.",
      },
      {
        id: "lesson-11-06",
        number: 6,
        slug: "iterative-methods",
        title: "Iterative Methods",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Approximate solutions for large systems.",
      },
      {
        id: "lesson-11-07",
        number: 7,
        slug: "sparse-matrices",
        title: "Sparse Matrices",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Store and compute efficiently with mostly zero matrices.",
      },
      {
        id: "lesson-11-08",
        number: 8,
        slug: "numerical-ai",
        title: "Numerical Linear Algebra in AI",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Connect numerical methods to large-scale machine learning.",
      },
    ],

    pythonLab: {
      id: "python-lab-11",
      title: "Numerical Stability Experiment",
      description:
        "Compare algorithms on well-conditioned and ill-conditioned systems.",
      tools: ["Python", "NumPy", "SciPy"],
    },

    visualization: {
      title: "Conditioning and Error Dashboard",
      description:
        "Explore sensitivity, approximation error, and algorithm performance.",
    },

    project: {
      id: "numerical-solver-project",
      title: "Linear Solver Benchmark",
      description:
        "Compare direct and iterative methods across matrix sizes and conditions.",
      portfolioEvidence: [
        "Algorithm implementations",
        "Datasets or matrices",
        "Runtime comparison",
        "Error comparison",
        "Condition analysis",
        "Recommendation",
      ],
    },

    researchExtension:
      "Investigate numerical stability in large neural-network training or scientific simulation.",

    assessment: {
      title: "Numerical Linear Algebra Assessment",
      format: "Concepts, experiments, algorithm analysis, Python, and recommendation",
      passingScore: 80,
    },

    careerConnections: [
      "Scientific Computing Engineer",
      "Machine Learning Infrastructure Engineer",
      "Numerical Analyst",
      "Simulation Engineer",
      "AI Research Engineer",
    ],
  },

  {
    id: "module-12",
    number: 12,
    slug: "linear-algebra-for-ai",
    title: "Linear Algebra for Artificial Intelligence",
    shortTitle: "Linear Algebra for AI",
    status: "Planned",
    duration: "2 weeks",

    overview:
      "This final module integrates vectors, matrices, transformations, eigenstructure, least squares, SVD, and numerical computation into modern artificial-intelligence applications.",

    problemStatement:
      "How does linear algebra power data representation, neural networks, embeddings, optimization, computer vision, and modern AI systems?",

    whyItMatters:
      "Linear algebra is the computational language of machine learning and deep learning.",

    prerequisites: [
      "All previous modules",
      "Basic Python",
      "Introductory machine-learning vocabulary recommended",
    ],

    learningObjectives: [
      "Represent datasets and model parameters using matrices.",
      "Explain neural-network layers using matrix multiplication.",
      "Interpret embeddings as vectors.",
      "Use cosine similarity.",
      "Connect projections and PCA to dimensionality reduction.",
      "Explain gradient-based parameter updates using vectors.",
      "Analyze images and tensors as numerical arrays.",
      "Build an explainable AI mathematics project.",
    ],

    knowledgeMap: [
      "Data Matrices",
      "Feature Vectors",
      "Embeddings",
      "Neural Layers",
      "Weights and Biases",
      "Similarity",
      "Dimensionality Reduction",
      "Computer Vision",
      "Optimization",
      "Tensors",
    ],

    lessons: [
      {
        id: "lesson-12-01",
        number: 1,
        slug: "data-as-vectors",
        title: "Data as Vectors and Matrices",
        duration: "90 minutes",
        status: "Planned",
        description:
          "Represent observations, features, images, and datasets numerically.",
      },
      {
        id: "lesson-12-02",
        number: 2,
        slug: "embeddings",
        title: "Vector Embeddings",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Represent meaning and similarity in vector spaces.",
      },
      {
        id: "lesson-12-03",
        number: 3,
        slug: "neural-network-matrices",
        title: "Matrix Multiplication in Neural Networks",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Interpret dense layers as affine transformations.",
      },
      {
        id: "lesson-12-04",
        number: 4,
        slug: "weights-biases",
        title: "Weights, Biases, and Transformations",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Understand the mathematical parameters of neural models.",
      },
      {
        id: "lesson-12-05",
        number: 5,
        slug: "similarity-search",
        title: "Cosine Similarity and Vector Search",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Compare embeddings and retrieve related items.",
      },
      {
        id: "lesson-12-06",
        number: 6,
        slug: "pca-ai",
        title: "PCA and Dimensionality Reduction",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Reduce data while preserving dominant structure.",
      },
      {
        id: "lesson-12-07",
        number: 7,
        slug: "computer-vision-linear-algebra",
        title: "Linear Algebra in Computer Vision",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Represent and transform images, pixels, and coordinates.",
      },
      {
        id: "lesson-12-08",
        number: 8,
        slug: "optimization-vectors",
        title: "Vectors, Gradients, and Optimization",
        duration: "120 minutes",
        status: "Planned",
        description:
          "Connect parameter updates to vector movement.",
      },
      {
        id: "lesson-12-09",
        number: 9,
        slug: "tensors",
        title: "From Matrices to Tensors",
        duration: "105 minutes",
        status: "Planned",
        description:
          "Extend arrays to higher-dimensional AI data structures.",
      },
      {
        id: "lesson-12-10",
        number: 10,
        slug: "ai-capstone",
        title: "Linear Algebra for AI Capstone",
        duration: "180 minutes",
        status: "Planned",
        description:
          "Integrate course knowledge in an explainable AI application.",
      },
    ],

    pythonLab: {
      id: "python-lab-12",
      title: "Neural Layer from First Principles",
      description:
        "Implement a simple dense neural-network layer using NumPy.",
      tools: ["Python", "NumPy", "Matplotlib"],
    },

    visualization: {
      title: "AI Matrix Flow Explorer",
      description:
        "Visualize how input vectors move through weights, biases, and transformations.",
    },

    project: {
      id: "ai-linear-algebra-capstone",
      title: "Explainable AI Linear Algebra Application",
      description:
        "Build an application involving embeddings, PCA, image transformation, recommendation, or neural computation.",
      portfolioEvidence: [
        "Problem statement",
        "Dataset or inputs",
        "Mathematical model",
        "Matrix operations",
        "Python implementation",
        "Visualizations",
        "Model interpretation",
        "Testing",
        "Research reflection",
      ],
    },

    researchExtension:
      "Investigate how linear algebra is used in transformers, attention mechanisms, embeddings, or multimodal AI.",

    assessment: {
      title: "Linear Algebra for AI Final Mastery Challenge",
      format: "Concepts, mathematics, Python, application, research, and communication",
      passingScore: 80,
    },

    careerConnections: [
      "Machine Learning Engineer",
      "AI Engineer",
      "Deep Learning Engineer",
      "Computer Vision Engineer",
      "AI Researcher",
      "Data Scientist",
    ],
  },
];

export function getLinearAlgebraModuleBySlug(slug) {
  return linearAlgebraModules.find((module) => module.slug === slug);
}

export function getLinearAlgebraModuleByNumber(number) {
  return linearAlgebraModules.find((module) => module.number === number);
}

export function getAvailableLinearAlgebraModules() {
  return linearAlgebraModules.filter(
    (module) => module.status === "Available"
  );
}

export default linearAlgebraModules;