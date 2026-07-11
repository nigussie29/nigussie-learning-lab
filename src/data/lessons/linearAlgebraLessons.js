export const linearAlgebraLessons = [
  {
    id: "matrix-multiplication",
    title: "Matrix Multiplication",
    subject: "Linear Algebra",
    level: "Beginner",
    duration: "45 minutes",
    masteryPoints: 75,

    objectives: [
      "Understand what matrix multiplication means",
      "Apply the row-column rule",
      "Check whether two matrices can be multiplied",
      "Compute a 2x2 matrix product",
      "Explain how matrix multiplication is used in AI",
    ],

    whyItMatters:
      "Matrix multiplication is one of the most important operations in artificial intelligence, robotics, computer graphics, data science, and engineering. Neural networks, image processing, transformations, and optimization all depend on matrices.",

    learn: {
      title: "Learn the Concept",
      content:
        "Matrix multiplication combines rows from the first matrix with columns from the second matrix. Each entry in the result is found by multiplying corresponding values and adding them together.",
      formula: "(AB)ij = row i of A · column j of B",
    },

    practice: [
      "Find the first row of matrix A.",
      "Find the first column of matrix B.",
      "Multiply corresponding entries.",
      "Add the products.",
      "Repeat for every row-column pair.",
    ],

    build: {
      title: "Build a Matrix Calculator",
      description:
        "Create a Python program that multiplies two 2x2 matrices and displays the result.",
      tools: ["Python", "VS Code", "Terminal"],
    },

    master: [
      "Why must the number of columns in A equal the number of rows in B?",
      "Why is matrix multiplication usually not commutative?",
      "How can you check if your matrix product is correct?",
    ],
    luminery: {
  message:
    "Excellent progress! You understand the basic concept of matrix multiplication.",

  recommendation:
    "Before moving to eigenvalues, practice multiplying three additional 2×2 matrices and then build the Python Matrix Calculator.",

  confidence: 82,
},
portfolioEvidence: {
  title: "Matrix Multiplication Skill Evidence",
  description:
    "You practiced matrix multiplication and prepared to build a Python Matrix Calculator.",
  skills: ["Linear Algebra", "Matrix Multiplication", "Python", "AI Foundations"],
},
careerConnection: [
  "Artificial Intelligence Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Robotics Engineer",
  "Computer Vision Engineer",
  "Research Scientist",
],
researchExtension: {
  title: "Matrix Multiplication in Neural Networks",

  description:
    "Investigate how matrix multiplication is used during the forward pass of a neural network. Explore how input data, weights, and outputs can be represented as matrices.",

  questions: [
    "How does a neural network represent input data as a matrix?",
    "Why are weights stored in matrices?",
    "How does matrix multiplication transform information between layers?",
    "What happens when matrix dimensions do not match?",
  ],
},
appliedMathematics: {
  foundation: [
    "Vectors",
    "Dot Product",
    "Linear Transformations",
    "Matrix Operations",
  ],

  relatedTopics: [
    "Determinants",
    "Eigenvalues",
    "Eigenvectors",
    "Vector Spaces",
    "Singular Value Decomposition",
  ],

  thinking:
    "Matrix multiplication represents how one linear transformation is combined with another. The row-column rule is not only a calculation procedure; it describes how inputs are transformed into new outputs.",

  future: [
    "Machine Learning",
    "Neural Networks",
    "Computer Vision",
    "Robotics",
    "Principal Component Analysis",
    "Scientific Computing",
  ],
},

    apply: [
      "Artificial Intelligence: Neural networks use matrix multiplication for forward propagation.",
      "Robotics: Rotation matrices help robots understand movement and position.",
      "Computer Graphics: 3D transformations use matrices to rotate and scale objects.",
      "Data Science: Matrix operations power recommendation systems and dimensionality reduction.",
    ],


    nextLesson: "Eigenvalues and Eigenvectors",
  },
];