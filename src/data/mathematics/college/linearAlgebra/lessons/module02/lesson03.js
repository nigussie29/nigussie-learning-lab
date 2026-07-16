const lesson03 = {
  id: "la-m02-l03",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 3,

  slug: "special-matrices",

  title: "Special Matrices",

  subtitle:
    "Recognizing matrix structures that simplify calculations, transformations, systems, and artificial-intelligence models.",

  status: "Available",

  duration: "90–105 minutes",

  level: "Foundation",

  essentialQuestion:
    "Why do certain matrix patterns appear repeatedly, and what useful mathematical behavior does each special matrix provide?",

  bigIdea:
    "Special matrices have recognizable structures that reveal important properties before calculations begin.",

  problemFirst: {
    title: "Which Matrix Leaves a Vector Unchanged?",

    scenario:
      "A graphics program applies a matrix to every point in an image. One operation must leave every point exactly where it is. Another must remove every coordinate. A third must scale the horizontal and vertical directions independently.",

    questions: [
      "Which matrix leaves every vector unchanged?",
      "Which matrix sends every vector to zero?",
      "Which matrix scales coordinate directions independently?",
      "How can the matrix structure reveal its behavior before multiplication?",
    ],

    expectedInsight:
      "The identity matrix leaves vectors unchanged, the zero matrix sends vectors to zero, and a diagonal matrix scales coordinate directions independently.",
  },

  learningObjectives: [
    "Define and recognize common special matrices.",
    "Distinguish square, zero, identity, diagonal, scalar, triangular, and symmetric matrices.",
    "Identify the main diagonal of a matrix.",
    "Explain how special matrix structure affects computation.",
    "Determine whether a matrix is symmetric.",
    "Explain the role of identity matrices in matrix multiplication.",
    "Interpret diagonal matrices as coordinate scaling transformations.",
    "Create and classify special matrices using Python and NumPy.",
  ],

  prerequisiteKnowledge: [
    "Matrix definition",
    "Matrix dimensions",
    "Rows, columns, and entries",
    "Vectors",
    "Basic matrix notation",
  ],

  vocabulary: [
    {
      term: "Square Matrix",
      definition:
        "A matrix with the same number of rows and columns.",
    },
    {
      term: "Main Diagonal",
      definition:
        "The entries running from the upper-left corner to the lower-right corner.",
    },
    {
      term: "Zero Matrix",
      definition:
        "A matrix in which every entry is zero.",
    },
    {
      term: "Identity Matrix",
      definition:
        "A square matrix with ones on the main diagonal and zeros elsewhere.",
    },
    {
      term: "Diagonal Matrix",
      definition:
        "A square matrix whose entries outside the main diagonal are zero.",
    },
    {
      term: "Scalar Matrix",
      definition:
        "A diagonal matrix whose diagonal entries are all equal.",
    },
    {
      term: "Upper-Triangular Matrix",
      definition:
        "A square matrix with zeros below the main diagonal.",
    },
    {
      term: "Lower-Triangular Matrix",
      definition:
        "A square matrix with zeros above the main diagonal.",
    },
    {
      term: "Symmetric Matrix",
      definition:
        "A square matrix equal to its transpose.",
    },
  ],

  mainDiagonal: {
    title: "The Main Diagonal",

    definition:
      "For a square matrix A, the main diagonal contains entries a_11, a_22, ..., a_nn.",

    exampleMatrix: [
      [4, 2, 1],
      [7, 5, 3],
      [8, 6, 9],
    ],

    diagonalEntries: [4, 5, 9],

    importance: [
      "Identity matrices place ones on the main diagonal.",
      "Diagonal matrices may contain nonzero values only on the main diagonal.",
      "Triangular matrices are defined using positions relative to the main diagonal.",
      "The trace of a matrix is the sum of diagonal entries.",
      "Eigenvalues of triangular matrices appear on the diagonal.",
    ],
  },

  specialMatrixTypes: [
    {
      id: "square-matrix",

      name: "Square Matrix",

      condition:
        "Number of rows equals number of columns.",

      notation:
        "n × n",

      example: [
        [2, 5],
        [1, 4],
      ],

      properties: [
        "May have a determinant.",
        "May have an inverse.",
        "May have eigenvalues and eigenvectors.",
        "Can represent a transformation from a space to itself.",
      ],

      application:
        "Transformation matrices, covariance matrices, transition matrices, and coefficient matrices.",
    },

    {
      id: "zero-matrix",

      name: "Zero Matrix",

      condition:
        "Every entry equals zero.",

      notation:
        "0",

      example: [
        [0, 0],
        [0, 0],
      ],

      properties: [
        "Acts as the additive identity.",
        "A + 0 = A.",
        "Multiplying the zero matrix by a compatible vector produces the zero vector.",
      ],

      application:
        "Represents no change, no connection, no contribution, or an initialized structure.",
    },

    {
      id: "identity-matrix",

      name: "Identity Matrix",

      condition:
        "Ones appear on the main diagonal, and all other entries are zero.",

      notation:
        "I_n",

      example: [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],

      properties: [
        "AI = IA = A for compatible square matrices.",
        "Iv = v for compatible vectors.",
        "It represents the transformation that changes nothing.",
        "It is the matrix equivalent of the number one in multiplication.",
      ],

      application:
        "Inverse matrices, transformations, numerical algorithms, and system solving.",
    },

    {
      id: "diagonal-matrix",

      name: "Diagonal Matrix",

      condition:
        "All entries outside the main diagonal equal zero.",

      example: [
        [2, 0, 0],
        [0, 5, 0],
        [0, 0, -1],
      ],

      properties: [
        "Diagonal entries may be different.",
        "Matrix-vector multiplication is simple.",
        "Each coordinate direction is scaled independently.",
        "Powers of diagonal matrices are easy to compute.",
      ],

      application:
        "Scaling transformations, eigenvalue decompositions, and computational simplification.",
    },

    {
      id: "scalar-matrix",

      name: "Scalar Matrix",

      condition:
        "The matrix is diagonal and every diagonal entry equals the same scalar.",

      example: [
        [3, 0],
        [0, 3],
      ],

      properties: [
        "Can be written as cI.",
        "Scales all coordinate directions equally.",
        "Preserves direction for positive c.",
      ],

      application:
        "Uniform scaling transformations.",
    },

    {
      id: "upper-triangular-matrix",

      name: "Upper-Triangular Matrix",

      condition:
        "All entries below the main diagonal equal zero.",

      example: [
        [3, 2, 5],
        [0, 4, 1],
        [0, 0, 6],
      ],

      properties: [
        "Systems can be solved using back substitution.",
        "The determinant equals the product of diagonal entries.",
        "Eigenvalues are the diagonal entries.",
      ],

      application:
        "Gaussian elimination, QR factorization, and numerical system solving.",
    },

    {
      id: "lower-triangular-matrix",

      name: "Lower-Triangular Matrix",

      condition:
        "All entries above the main diagonal equal zero.",

      example: [
        [3, 0, 0],
        [2, 4, 0],
        [5, 1, 6],
      ],

      properties: [
        "Systems can be solved using forward substitution.",
        "The determinant equals the product of diagonal entries.",
        "It appears in LU factorization.",
      ],

      application:
        "Numerical linear algebra and repeated system solving.",
    },

    {
      id: "symmetric-matrix",

      name: "Symmetric Matrix",

      condition:
        "A equals its transpose.",

      formula:
        "A^T = A",

      example: [
        [2, 4, 1],
        [4, 5, 3],
        [1, 3, 7],
      ],

      properties: [
        "Entries reflect across the main diagonal.",
        "a_ij = a_ji.",
        "Real symmetric matrices have real eigenvalues.",
        "They have orthogonal eigenvectors under suitable conditions.",
      ],

      application:
        "Covariance matrices, distance relationships, optimization, physics, and machine learning.",
    },
  ],

  identityMatrixConcept: {
    title: "The Identity Matrix",

    explanation:
      "The identity matrix preserves every coordinate because each output component receives exactly its matching input component and no contribution from the others.",

    twoDimensionalExample: {
      matrix: [
        [1, 0],
        [0, 1],
      ],

      vector: [4, -3],

      result: [4, -3],

      interpretation:
        "The vector remains unchanged.",
    },

    comparison:
      "The identity matrix plays the same role in matrix multiplication that the number 1 plays in ordinary multiplication.",
  },

  diagonalTransformation: {
    title: "Diagonal Matrices as Scaling Transformations",

    matrix: [
      [2, 0],
      [0, 3],
    ],

    vector: [4, 5],

    result: [8, 15],

    interpretation: [
      "The first coordinate is multiplied by 2.",
      "The second coordinate is multiplied by 3.",
      "No coordinate is mixed with another coordinate.",
    ],

    keyInsight:
      "Diagonal matrices scale coordinate directions independently.",
  },

  symmetricStructure: {
    title: "Reflection Across the Main Diagonal",

    explanation:
      "A symmetric matrix has matching entries on opposite sides of the main diagonal.",

    comparisonPairs: [
      {
        entries: ["a_12", "a_21"],
        relationship: "Equal",
      },
      {
        entries: ["a_13", "a_31"],
        relationship: "Equal",
      },
      {
        entries: ["a_23", "a_32"],
        relationship: "Equal",
      },
    ],

    dataExample:
      "A similarity matrix is often symmetric because the similarity of object A to object B equals the similarity of object B to object A.",
  },

  workedExamples: [
    {
      id: "example-02-03-01",

      title: "Classifying a Square Matrix",

      problem:
        "Classify A = [[2, 1], [5, 4]] by shape.",

      solutionSteps: [
        "Count the rows: 2.",
        "Count the columns: 2.",
        "The numbers are equal.",
      ],

      answer:
        "A is a 2 × 2 square matrix.",
    },

    {
      id: "example-02-03-02",

      title: "Recognizing the Identity Matrix",

      problem:
        "Determine whether [[1, 0, 0], [0, 1, 0], [0, 0, 1]] is an identity matrix.",

      solutionSteps: [
        "Check that the matrix is square.",
        "Check that every diagonal entry is 1.",
        "Check that every off-diagonal entry is 0.",
      ],

      answer:
        "Yes. It is I_3.",
    },

    {
      id: "example-02-03-03",

      title: "Recognizing a Diagonal Matrix",

      problem:
        "Classify D = [[4, 0, 0], [0, -2, 0], [0, 0, 7]].",

      solutionSteps: [
        "The matrix is square.",
        "Every off-diagonal entry is zero.",
        "The diagonal entries may be different.",
      ],

      answer:
        "D is a diagonal matrix.",
    },

    {
      id: "example-02-03-04",

      title: "Scalar Matrix",

      problem:
        "Determine whether A = [[5, 0], [0, 5]] is a scalar matrix.",

      solutionSteps: [
        "The matrix is diagonal.",
        "Both diagonal entries equal 5.",
        "Therefore A = 5I.",
      ],

      answer:
        "Yes. It is a scalar matrix.",
    },

    {
      id: "example-02-03-05",

      title: "Upper-Triangular Matrix",

      problem:
        "Classify U = [[3, 2, 1], [0, 4, 5], [0, 0, 6]].",

      solutionSteps: [
        "The matrix is square.",
        "Every entry below the main diagonal is zero.",
      ],

      answer:
        "U is upper triangular.",
    },

    {
      id: "example-02-03-06",

      title: "Lower-Triangular Matrix",

      problem:
        "Classify L = [[3, 0, 0], [2, 4, 0], [8, 1, 6]].",

      solutionSteps: [
        "The matrix is square.",
        "Every entry above the main diagonal is zero.",
      ],

      answer:
        "L is lower triangular.",
    },

    {
      id: "example-02-03-07",

      title: "Testing Symmetry",

      problem:
        "Determine whether A = [[2, 5, 1], [5, 3, 4], [1, 4, 6]] is symmetric.",

      solutionSteps: [
        "Compare entries reflected across the main diagonal.",
        "a_12 = 5 and a_21 = 5.",
        "a_13 = 1 and a_31 = 1.",
        "a_23 = 4 and a_32 = 4.",
      ],

      answer:
        "Yes. A is symmetric.",
    },

    {
      id: "example-02-03-08",

      title: "Identity Transformation",

      problem:
        "Apply I_2 to v = [7, -2].",

      solutionSteps: [
        "The identity matrix preserves each component.",
      ],

      answer: "[7, -2]",

      interpretation:
        "The transformation makes no change.",
    },

    {
      id: "example-02-03-09",

      title: "Diagonal Scaling",

      problem:
        "Apply D = [[3, 0], [0, -2]] to v = [4, 5].",

      solutionSteps: [
        "Multiply the first coordinate by 3.",
        "Multiply the second coordinate by -2.",
      ],

      answer: "[12, -10]",

      interpretation:
        "The first direction is stretched by 3, while the second is stretched by 2 and reversed.",
    },
  ],

  classificationHierarchy: {
    title: "One Matrix Can Belong to Several Categories",

    examples: [
      {
        matrix: [
          [1, 0],
          [0, 1],
        ],
        classifications: [
          "Square",
          "Diagonal",
          "Scalar",
          "Identity",
          "Upper triangular",
          "Lower triangular",
          "Symmetric",
        ],
      },
      {
        matrix: [
          [0, 0],
          [0, 0],
        ],
        classifications: [
          "Square",
          "Zero",
          "Diagonal",
          "Scalar",
          "Upper triangular",
          "Lower triangular",
          "Symmetric",
        ],
      },
      {
        matrix: [
          [2, 0],
          [0, 5],
        ],
        classifications: [
          "Square",
          "Diagonal",
          "Upper triangular",
          "Lower triangular",
          "Symmetric",
        ],
      },
    ],

    keyInsight:
      "Matrix categories can overlap. Classification should include every condition the matrix satisfies.",
  },

  realWorldApplications: [
    {
      field: "Computer Graphics",
      matrixType: "Identity and diagonal matrices",
      application:
        "Identity matrices preserve objects, while diagonal matrices scale coordinate directions.",
    },
    {
      field: "Statistics",
      matrixType: "Symmetric matrices",
      application:
        "Covariance matrices describe relationships among variables.",
    },
    {
      field: "Machine Learning",
      matrixType: "Diagonal and symmetric matrices",
      application:
        "Feature scaling, covariance analysis, regularization, and decompositions.",
    },
    {
      field: "Numerical Computing",
      matrixType: "Triangular matrices",
      application:
        "Efficient solution of linear systems.",
    },
    {
      field: "Networks",
      matrixType: "Symmetric matrices",
      application:
        "Undirected network adjacency matrices are symmetric.",
    },
    {
      field: "Robotics",
      matrixType: "Identity matrix",
      application:
        "Represents no rotation or coordinate change.",
    },
  ],

  aiConnection: {
    title: "Special Matrices in AI",

    explanation:
      "Special matrix structure can make AI computations faster, more stable, and easier to interpret.",

    examples: [
      {
        matrixType: "Identity matrix",
        use:
          "Residual connections and initialization concepts may preserve information.",
      },
      {
        matrixType: "Diagonal matrix",
        use:
          "Independent feature scaling and simplified covariance models.",
      },
      {
        matrixType: "Symmetric matrix",
        use:
          "Covariance, similarity, kernel, and attention-related structures.",
      },
      {
        matrixType: "Triangular matrix",
        use:
          "Efficient numerical solvers inside optimization algorithms.",
      },
      {
        matrixType: "Zero matrix",
        use:
          "Parameter initialization, masks, and absence of connections.",
      },
    ],

    caution:
      "Special structure should be verified rather than assumed. Numerical rounding may make an approximately symmetric matrix differ slightly from its transpose.",
  },

  pythonLab: {
    title: "Creating and Classifying Special Matrices",

    objective:
      "Use NumPy to create and test zero, identity, diagonal, triangular, and symmetric matrices.",

    code: `import numpy as np

def is_square(matrix):
    matrix = np.array(matrix)
    return matrix.ndim == 2 and matrix.shape[0] == matrix.shape[1]

def is_zero_matrix(matrix):
    matrix = np.array(matrix, dtype=float)
    return np.allclose(matrix, 0)

def is_diagonal(matrix):
    matrix = np.array(matrix, dtype=float)

    if not is_square(matrix):
        return False

    diagonal_part = np.diag(np.diag(matrix))
    return np.allclose(matrix, diagonal_part)

def is_identity(matrix):
    matrix = np.array(matrix, dtype=float)

    if not is_square(matrix):
        return False

    return np.allclose(matrix, np.eye(matrix.shape[0]))

def is_symmetric(matrix):
    matrix = np.array(matrix, dtype=float)

    if not is_square(matrix):
        return False

    return np.allclose(matrix, matrix.T)

def is_upper_triangular(matrix):
    matrix = np.array(matrix, dtype=float)

    if not is_square(matrix):
        return False

    return np.allclose(matrix, np.triu(matrix))

def is_lower_triangular(matrix):
    matrix = np.array(matrix, dtype=float)

    if not is_square(matrix):
        return False

    return np.allclose(matrix, np.tril(matrix))

matrix = np.array([
    [2, 4, 1],
    [4, 5, 3],
    [1, 3, 7]
], dtype=float)

print("Square:", is_square(matrix))
print("Zero:", is_zero_matrix(matrix))
print("Diagonal:", is_diagonal(matrix))
print("Identity:", is_identity(matrix))
print("Symmetric:", is_symmetric(matrix))
print("Upper triangular:", is_upper_triangular(matrix))
print("Lower triangular:", is_lower_triangular(matrix))`,

    questions: [
      "Why must a symmetric matrix be square?",
      "What does np.eye(3) create?",
      "What does np.diag(np.diag(matrix)) do?",
      "Why is np.allclose preferable to exact equality for floating-point values?",
      "Can an identity matrix also be triangular and symmetric?",
      "How would you test whether a diagonal matrix is also a scalar matrix?",
    ],

    extension:
      "Write a function classify_matrix(matrix) that returns every special-matrix category satisfied by the input.",
  },

  guidedPractice: [
    {
      id: "guided-02-03-01",
      question:
        "Classify [[1, 0], [0, 1]].",
      answer:
        "Identity, diagonal, scalar, square, upper triangular, lower triangular, and symmetric.",
    },
    {
      id: "guided-02-03-02",
      question:
        "Is [[2, 0], [0, 5]] diagonal?",
      answer: "Yes",
    },
    {
      id: "guided-02-03-03",
      question:
        "Is [[2, 1], [0, 3]] upper triangular?",
      answer: "Yes",
    },
    {
      id: "guided-02-03-04",
      question:
        "Is [[2, 0], [4, 3]] lower triangular?",
      answer: "Yes",
    },
    {
      id: "guided-02-03-05",
      question:
        "Is [[1, 3], [3, 4]] symmetric?",
      answer: "Yes",
    },
    {
      id: "guided-02-03-06",
      question:
        "Is [[1, 2, 3], [4, 5, 6]] square?",
      answer: "No",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-03-01",
      difficulty: "Foundation",
      question:
        "Classify [[0, 0], [0, 0]].",
      answer:
        "Zero, square, diagonal, scalar, upper triangular, lower triangular, and symmetric.",
    },
    {
      id: "practice-02-03-02",
      difficulty: "Foundation",
      question:
        "Is [[4, 0, 0], [0, 4, 0], [0, 0, 4]] a scalar matrix?",
      answer:
        "Yes. It equals 4I.",
    },
    {
      id: "practice-02-03-03",
      difficulty: "Developing",
      question:
        "Determine whether [[2, 5], [5, 7]] is symmetric.",
      answer: "Yes",
    },
    {
      id: "practice-02-03-04",
      difficulty: "Developing",
      question:
        "Determine whether [[2, 5], [3, 7]] is symmetric.",
      answer:
        "No, because a_12 is not equal to a_21.",
    },
    {
      id: "practice-02-03-05",
      difficulty: "Developing",
      question:
        "Apply [[2, 0], [0, 5]] to [3, 4].",
      answer: "[6, 20]",
    },
    {
      id: "practice-02-03-06",
      difficulty: "Developing",
      question:
        "Explain why every identity matrix is diagonal but not every diagonal matrix is an identity matrix.",
      answer:
        "Identity matrices require every diagonal entry to equal one, while diagonal matrices may contain other diagonal values.",
    },
    {
      id: "practice-02-03-07",
      difficulty: "Challenge",
      question:
        "Can a matrix be both upper triangular and lower triangular? Explain.",
      sampleAnswer:
        "Yes. A matrix that is both must have zeros above and below the main diagonal, so it is diagonal.",
    },
    {
      id: "practice-02-03-08",
      difficulty: "Challenge",
      question:
        "Explain why an undirected network adjacency matrix is symmetric.",
      sampleAnswer:
        "A connection from node i to node j also represents a connection from node j to node i, so a_ij = a_ji.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Calling every square matrix diagonal.",

      correction:
        "A diagonal matrix must have zeros in every off-diagonal position.",
    },
    {
      mistake:
        "Calling every diagonal matrix an identity matrix.",

      correction:
        "An identity matrix must have diagonal entries equal to one.",
    },
    {
      mistake:
        "Testing symmetry without checking that the matrix is square.",

      correction:
        "A symmetric matrix must be square and equal to its transpose.",
    },
    {
      mistake:
        "Confusing upper and lower triangular matrices.",

      correction:
        "Upper triangular means zeros below the diagonal; lower triangular means zeros above it.",
    },
    {
      mistake:
        "Believing a matrix can belong to only one category.",

      correction:
        "Many special-matrix categories overlap.",
    },
    {
      mistake:
        "Checking only diagonal entries when testing identity.",

      correction:
        "Identity matrices also require every off-diagonal entry to be zero.",
    },
  ],

  discussionQuestions: [
    "Why is the identity matrix important?",
    "What transformation does a diagonal matrix represent?",
    "Why are triangular matrices easier to solve with?",
    "Why do symmetric matrices appear frequently in data science?",
    "Can the zero matrix be considered a scalar matrix?",
    "Which special matrix belongs to the most categories?",
    "How could matrix structure improve computing efficiency?",
  ],

  formativeAssessment: {
    totalPoints: 18,

    passingScore: 15,

    questions: [
      {
        id: "check-02-03-01",
        type: "classification",
        points: 3,
        prompt:
          "Classify [[1, 0], [0, 1]].",
        answer:
          "Identity, diagonal, scalar, square, triangular, and symmetric.",
      },
      {
        id: "check-02-03-02",
        type: "classification",
        points: 3,
        prompt:
          "Is [[3, 2], [0, 5]] upper triangular?",
        answer: "Yes",
      },
      {
        id: "check-02-03-03",
        type: "symmetry",
        points: 3,
        prompt:
          "Determine whether [[2, 4, 1], [4, 5, 3], [1, 3, 6]] is symmetric.",
        answer: "Yes",
      },
      {
        id: "check-02-03-04",
        type: "application",
        points: 4,
        prompt:
          "Apply the diagonal matrix [[2, 0], [0, -3]] to [4, 5].",
        answer: "[8, -15]",
      },
      {
        id: "check-02-03-05",
        type: "explanation",
        points: 5,
        prompt:
          "Explain why the identity matrix is the multiplicative identity for matrices.",
        sampleAnswer:
          "Multiplication by the identity preserves every coordinate and therefore leaves compatible matrices and vectors unchanged.",
      },
    ],
  },

  researchExtension: {
    title: "Special Matrices in a Real Application",

    researchQuestion:
      "How does the structure of a special matrix improve interpretation or computation?",

    applicationOptions: [
      "Covariance matrices",
      "Undirected network adjacency matrices",
      "Scaling transformations",
      "Identity transformations",
      "Triangular system solvers",
      "Diagonal matrices in PCA",
    ],

    task:
      "Select one application and explain why the matrix has its special structure.",

    requiredEvidence: [
      "Application description",
      "Example matrix",
      "Matrix classification",
      "Explanation of structural properties",
      "One calculation",
      "Computational or interpretive advantage",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Special Matrix Classification Guide",

    description:
      "Create a visual reference that identifies and compares common special matrices.",

    requiredMatrixTypes: [
      "Square",
      "Zero",
      "Identity",
      "Diagonal",
      "Scalar",
      "Upper triangular",
      "Lower triangular",
      "Symmetric",
    ],

    requiredEvidence: [
      "Definition",
      "Example",
      "Key properties",
      "Application",
      "Overlapping classifications",
      "Python classifier",
      "Reflection",
    ],
  },

  reflection: [
    "Which special matrix is easiest to recognize?",
    "Why can one matrix belong to several categories?",
    "How does the identity matrix act on vectors?",
    "Why are diagonal matrices computationally simple?",
    "Where might symmetric matrices appear in AI?",
    "What classification rule still needs more practice?",
  ],

  summary: [
    "A square matrix has equal numbers of rows and columns.",
    "The zero matrix contains only zeros.",
    "The identity matrix has ones on the main diagonal and zeros elsewhere.",
    "A diagonal matrix has zeros outside the main diagonal.",
    "A scalar matrix equals cI.",
    "Upper-triangular matrices have zeros below the diagonal.",
    "Lower-triangular matrices have zeros above the diagonal.",
    "A symmetric matrix satisfies A^T = A.",
    "One matrix may belong to several special categories.",
    "Special structure can simplify interpretation and computation.",
  ],

  previousLesson: {
    id: "la-m02-l02",
    slug: "matrix-dimensions",
    title: "Matrix Dimensions, Rows, Columns, and Entries",
  },

  nextLesson: {
    id: "la-m02-l04",
    slug: "matrix-addition-and-scaling",
    title:
      "Matrix Addition, Subtraction, and Scalar Multiplication",
  },

  lumineryGuidance: {
    message:
      "Before performing calculations, inspect the matrix structure. Its pattern may already reveal how it behaves.",

    prompt:
      "Classify the matrix, identify its diagonal, and explain which computations become easier because of its structure.",
  },
};

export default lesson03;