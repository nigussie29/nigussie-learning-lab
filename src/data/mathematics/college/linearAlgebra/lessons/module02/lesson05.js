const lesson05 = {
  id: "la-m02-l05",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 5,

  slug: "matrix-transpose",

  title: "The Matrix Transpose",

  subtitle:
    "Turning rows into columns and revealing structure, symmetry, and new ways to organize data.",

  status: "Available",

  duration: "90–105 minutes",

  level: "Foundation",

  essentialQuestion:
    "What changes when a matrix is transposed, and why is the transpose so important in data, geometry, least squares, and artificial intelligence?",

  bigIdea:
    "The transpose of a matrix is created by switching rows and columns. This changes the matrix shape and helps connect row-based and column-based representations.",

  problemFirst: {
    title: "Reorganizing Student Data",

    scenario:
      "A school stores data with students as rows and subjects as columns. A teacher now wants subjects as rows and students as columns without changing the values themselves.",

    originalMatrix: [
      [88, 84, 91],
      [76, 82, 79],
      [93, 89, 95],
    ],

    rowMeaning:
      "Students",

    columnMeaning:
      "Mathematics, science, and programming",

    questions: [
      "How can rows become columns?",
      "What happens to the matrix dimensions?",
      "Where does each entry move?",
      "Does the numerical information change?",
      "Why might this reorganization be useful?",
    ],

    expectedInsight:
      "The transpose switches rows and columns while preserving the values.",
  },

  learningObjectives: [
    "Define the transpose of a matrix.",
    "Calculate the transpose of rectangular and square matrices.",
    "Explain how matrix dimensions change under transpose.",
    "Track the movement of individual entries.",
    "Distinguish row vectors from column vectors using transpose.",
    "Recognize symmetric matrices using transpose.",
    "Apply transpose to data organization and dot-product calculations.",
    "Use NumPy to compute and verify transposes.",
  ],

  prerequisiteKnowledge: [
    "Matrix dimensions",
    "Rows and columns",
    "Matrix entries",
    "Row and column vectors",
    "Special matrices",
  ],

  vocabulary: [
    {
      term: "Transpose",
      definition:
        "A matrix formed by switching the rows and columns of another matrix.",
    },
    {
      term: "Transposed Matrix",
      definition:
        "The new matrix produced after rows become columns.",
    },
    {
      term: "Symmetric Matrix",
      definition:
        "A square matrix equal to its transpose.",
    },
    {
      term: "Row Vector",
      definition:
        "A 1 × n matrix.",
    },
    {
      term: "Column Vector",
      definition:
        "An n × 1 matrix.",
    },
    {
      term: "Main Diagonal",
      definition:
        "The entries from the upper-left to lower-right that remain fixed under transpose.",
    },
  ],

  formulas: [
    {
      id: "transpose-definition",
      name: "Transpose Definition",
      formula:
        "(A^T)_ij = A_ji",
      meaning:
        "The entry in row i, column j of A^T comes from row j, column i of A.",
    },
    {
      id: "transpose-dimensions",
      name: "Transpose Dimensions",
      formula:
        "If A is m × n, then A^T is n × m.",
      meaning:
        "The row and column counts switch.",
    },
    {
      id: "double-transpose",
      name: "Double Transpose",
      formula:
        "(A^T)^T = A",
      meaning:
        "Transposing twice returns the original matrix.",
    },
    {
      id: "transpose-sum",
      name: "Transpose of a Sum",
      formula:
        "(A + B)^T = A^T + B^T",
      requirement:
        "A and B must have the same dimensions.",
    },
    {
      id: "transpose-scalar",
      name: "Transpose of a Scalar Multiple",
      formula:
        "(cA)^T = cA^T",
      meaning:
        "Scalar multiplication and transpose can be performed in either order.",
    },
    {
      id: "transpose-product",
      name: "Transpose of a Product",
      formula:
        "(AB)^T = B^T A^T",
      meaning:
        "The order reverses when transposing a matrix product.",
    },
  ],

  geometricIntuition: {
    title: "Reflection Across the Main Diagonal",

    explanation:
      "For a square matrix, the transpose can be visualized as reflecting entries across the main diagonal.",

    exampleMatrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],

    transposedMatrix: [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],

    fixedEntries: [
      "a_11",
      "a_22",
      "a_33",
    ],

    swappedPairs: [
      ["a_12", "a_21"],
      ["a_13", "a_31"],
      ["a_23", "a_32"],
    ],
  },

  rowColumnConnection: {
    title: "Turning Row Vectors into Column Vectors",

    rowVector: [[2, 5, -1]],

    rowDimensions: "1 × 3",

    columnVector: [
      [2],
      [5],
      [-1],
    ],

    columnDimensions: "3 × 1",

    explanation:
      "The transpose changes orientation without changing component values.",
  },

  dataInterpretation: {
    title: "Changing the View of a Dataset",

    original: {
      matrix: [
        [88, 84, 91],
        [76, 82, 79],
      ],

      rowsRepresent:
        "Students",

      columnsRepresent:
        "Subjects",

      shape:
        "2 × 3",
    },

    transposed: {
      matrix: [
        [88, 76],
        [84, 82],
        [91, 79],
      ],

      rowsRepresent:
        "Subjects",

      columnsRepresent:
        "Students",

      shape:
        "3 × 2",
    },

    keyInsight:
      "The values remain the same, but their row-column interpretation changes.",
  },

  workedExamples: [
    {
      id: "example-02-05-01",

      title: "Transpose of a 2 × 3 Matrix",

      problem:
        "Find A^T for A = [[1, 2, 3], [4, 5, 6]].",

      solutionSteps: [
        "Row 1 of A becomes column 1 of A^T.",
        "Row 2 of A becomes column 2 of A^T.",
        "The dimensions change from 2 × 3 to 3 × 2.",
      ],

      answer: [
        [1, 4],
        [2, 5],
        [3, 6],
      ],
    },

    {
      id: "example-02-05-02",

      title: "Transpose of a Square Matrix",

      problem:
        "Find B^T for B = [[2, 7], [3, 5]].",

      solutionSteps: [
        "Keep diagonal entries in place.",
        "Swap b_12 and b_21.",
      ],

      answer: [
        [2, 3],
        [7, 5],
      ],
    },

    {
      id: "example-02-05-03",

      title: "Transpose of a Row Vector",

      problem:
        "Transpose the row vector [[4, -2, 7]].",

      solutionSteps: [
        "The 1 × 3 row becomes a 3 × 1 column.",
      ],

      answer: [
        [4],
        [-2],
        [7],
      ],
    },

    {
      id: "example-02-05-04",

      title: "Transpose of a Column Vector",

      problem:
        "Transpose [[5], [1], [-3]].",

      solutionSteps: [
        "The 3 × 1 column becomes a 1 × 3 row.",
      ],

      answer: [[5, 1, -3]],
    },

    {
      id: "example-02-05-05",

      title: "Testing Symmetry",

      problem:
        "Determine whether A = [[4, 2, 1], [2, 5, 3], [1, 3, 6]] is symmetric.",

      solutionSteps: [
        "Calculate A^T.",
        "Compare every entry of A with A^T.",
        "The reflected entries match.",
      ],

      answer:
        "Yes. A^T = A.",
    },

    {
      id: "example-02-05-06",

      title: "Not Symmetric",

      problem:
        "Determine whether B = [[1, 4], [2, 3]] is symmetric.",

      solutionSteps: [
        "B^T = [[1, 2], [4, 3]].",
        "Compare B with B^T.",
        "The off-diagonal entries do not match.",
      ],

      answer:
        "No. B is not symmetric.",
    },

    {
      id: "example-02-05-07",

      title: "Double Transpose",

      problem:
        "Let A = [[3, 8, 1], [2, 5, 7]]. Find (A^T)^T.",

      solutionSteps: [
        "Transpose A once.",
        "Transpose the result again.",
      ],

      answer: [
        [3, 8, 1],
        [2, 5, 7],
      ],

      interpretation:
        "The original matrix is recovered.",
    },

    {
      id: "example-02-05-08",

      title: "Transpose of a Sum",

      problem:
        "Verify (A + B)^T = A^T + B^T for A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]].",

      solutionSteps: [
        "Calculate A + B = [[6, 8], [10, 12]].",
        "Transpose the sum to get [[6, 10], [8, 12]].",
        "Calculate A^T = [[1, 3], [2, 4]].",
        "Calculate B^T = [[5, 7], [6, 8]].",
        "Add A^T and B^T.",
      ],

      answer:
        "Both sides equal [[6, 10], [8, 12]].",
    },

    {
      id: "example-02-05-09",

      title: "Entry Movement",

      problem:
        "If a_23 = 9 in A, where does this value appear in A^T?",

      solutionSteps: [
        "Transpose reverses the indices.",
        "a_23 becomes the entry in row 3, column 2.",
      ],

      answer:
        "(A^T)_32 = 9",
    },
  ],

  transposeProperties: [
    {
      property: "Double Transpose",
      formula:
        "(A^T)^T = A",
      explanation:
        "Switching rows and columns twice restores the original matrix.",
    },
    {
      property: "Addition",
      formula:
        "(A + B)^T = A^T + B^T",
      explanation:
        "Transpose distributes over addition.",
    },
    {
      property: "Scalar Multiplication",
      formula:
        "(cA)^T = cA^T",
      explanation:
        "The scalar can be applied before or after transposing.",
    },
    {
      property: "Product Reversal",
      formula:
        "(AB)^T = B^T A^T",
      explanation:
        "The order of multiplication reverses.",
    },
    {
      property: "Symmetry",
      formula:
        "A^T = A",
      explanation:
        "This condition defines a symmetric matrix.",
    },
  ],

  dotProductConnection: {
    title: "Dot Product as Matrix Multiplication",

    explanation:
      "A vector dot product can be written as a row vector multiplied by a column vector.",

    vectors: {
      u: [1, 2, 3],
      v: [4, 5, 6],
    },

    matrixForm:
      "u^T v",

    calculation:
      "1(4) + 2(5) + 3(6) = 32",

    importance:
      "This connection prepares learners for matrix multiplication, least squares, regression, and neural networks.",
  },

  leastSquaresConnection: {
    title: "Why Transpose Appears in Least Squares",

    formula:
      "A^T A x = A^T b",

    explanation:
      "The transpose helps convert information from the output space back into the feature or input space.",

    note:
      "The full derivation appears later in the least-squares module.",
  },

  realWorldApplications: [
    {
      field: "Data Science",
      application:
        "Switching between observations-as-rows and features-as-rows.",
    },
    {
      field: "Statistics",
      application:
        "Covariance and least-squares formulas use transposes.",
    },
    {
      field: "Machine Learning",
      application:
        "Gradient calculations and matrix derivatives frequently require transposes.",
    },
    {
      field: "Neural Networks",
      application:
        "Weights and activations may need reorientation for compatible multiplication.",
    },
    {
      field: "Computer Graphics",
      application:
        "Transpose appears in normal transformations and orthogonal matrices.",
    },
    {
      field: "Linear Systems",
      application:
        "Transpose helps define row space, column space, and normal equations.",
    },
  ],

  aiConnection: {
    title: "Transpose in AI Computation",

    explanation:
      "AI systems often store data in batches. Depending on the software convention, observations may be rows or columns. Transpose changes orientation so that matrix dimensions align.",

    example: {
      inputShape:
        "32 × 128",

      interpretation:
        "32 observations with 128 features",

      transposedShape:
        "128 × 32",

      transposedInterpretation:
        "128 features across 32 observations",
    },

    importance: [
      "Aligning inputs with weight matrices",
      "Computing similarity matrices",
      "Building covariance matrices",
      "Calculating gradients",
      "Switching between batch-first and feature-first conventions",
    ],

    caution:
      "Transposing fixes orientation, not meaning. The programmer must still understand what each axis represents.",
  },

  pythonLab: {
    title: "Transpose and Symmetry with NumPy",

    objective:
      "Compute transposes, track dimensions, and test symmetry.",

    code: `import numpy as np

def transpose_matrix(matrix):
    matrix = np.array(matrix, dtype=float)

    if matrix.ndim != 2:
        raise ValueError("Input must be a two-dimensional matrix.")

    return matrix.T

def is_symmetric(matrix):
    matrix = np.array(matrix, dtype=float)

    if matrix.ndim != 2:
        return False

    if matrix.shape[0] != matrix.shape[1]:
        return False

    return np.allclose(matrix, matrix.T)

matrix = np.array([
    [1, 2, 3],
    [4, 5, 6]
], dtype=float)

transposed = transpose_matrix(matrix)

print("Original matrix:")
print(matrix)

print("Original shape:", matrix.shape)

print("Transposed matrix:")
print(transposed)

print("Transposed shape:", transposed.shape)

symmetric_matrix = np.array([
    [2, 4, 1],
    [4, 5, 3],
    [1, 3, 7]
], dtype=float)

print("Symmetric:", is_symmetric(symmetric_matrix))
print(
    "Double transpose returns original:",
    np.allclose(matrix.T.T, matrix)
)`,

    questions: [
      "What happens to the shape when the matrix is transposed?",
      "Why must a symmetric matrix be square?",
      "What does matrix.T.T return?",
      "How does mathematical entry a_23 move under transpose?",
      "Why might np.allclose be safer than exact equality?",
      "How can transpose convert a row vector into a column vector?",
    ],

    extension:
      "Create a function that returns every pair of entries swapped by transpose.",
  },

  guidedPractice: [
    {
      id: "guided-02-05-01",
      question:
        "Transpose [[1, 2, 3], [4, 5, 6]].",
      answer: [
        [1, 4],
        [2, 5],
        [3, 6],
      ],
    },
    {
      id: "guided-02-05-02",
      question:
        "What are the dimensions of A^T if A is 4 × 7?",
      answer: "7 × 4",
    },
    {
      id: "guided-02-05-03",
      question:
        "Transpose the row vector [[3, -1, 8]].",
      answer: [
        [3],
        [-1],
        [8],
      ],
    },
    {
      id: "guided-02-05-04",
      question:
        "Is [[2, 5], [5, 4]] symmetric?",
      answer: "Yes",
    },
    {
      id: "guided-02-05-05",
      question:
        "If a_14 = 6, where does it appear in A^T?",
      answer:
        "(A^T)_41 = 6",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-05-01",
      difficulty: "Foundation",
      question:
        "Transpose [[7, 2], [4, 9], [1, 5]].",
      answer: [
        [7, 4, 1],
        [2, 9, 5],
      ],
    },
    {
      id: "practice-02-05-02",
      difficulty: "Foundation",
      question:
        "What are the dimensions of the transpose of a 2 × 9 matrix?",
      answer: "9 × 2",
    },
    {
      id: "practice-02-05-03",
      difficulty: "Developing",
      question:
        "Determine whether [[3, 1, 2], [1, 4, 5], [2, 5, 6]] is symmetric.",
      answer: "Yes",
    },
    {
      id: "practice-02-05-04",
      difficulty: "Developing",
      question:
        "Determine whether [[3, 1], [4, 2]] is symmetric.",
      answer:
        "No, because a_12 is not equal to a_21.",
    },
    {
      id: "practice-02-05-05",
      difficulty: "Developing",
      question:
        "If A is 3 × 5, what are the dimensions of A^T?",
      answer: "5 × 3",
    },
    {
      id: "practice-02-05-06",
      difficulty: "Developing",
      question:
        "Verify that (A^T)^T = A for A = [[2, 4, 6], [1, 3, 5]].",
      answer:
        "Transposing twice returns [[2, 4, 6], [1, 3, 5]].",
    },
    {
      id: "practice-02-05-07",
      difficulty: "Challenge",
      question:
        "Explain why the main diagonal of a square matrix remains unchanged after transpose.",
      sampleAnswer:
        "Each diagonal entry a_ii swaps indices with itself, so its position does not change.",
    },
    {
      id: "practice-02-05-08",
      difficulty: "Challenge",
      question:
        "Explain why the order reverses in (AB)^T = B^T A^T.",
      sampleAnswer:
        "The row-column relationships in AB become column-row relationships after transpose, requiring the factors to appear in reverse order.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Reversing the order of entries inside each row without changing rows into columns.",

      correction:
        "Transpose does not reverse values. It switches row and column positions.",
    },
    {
      mistake:
        "Keeping the same dimensions for a rectangular matrix.",

      correction:
        "An m × n matrix becomes n × m.",
    },
    {
      mistake:
        "Moving diagonal entries.",

      correction:
        "Main-diagonal entries remain fixed.",
    },
    {
      mistake:
        "Assuming every square matrix is symmetric.",

      correction:
        "A square matrix is symmetric only when A^T = A.",
    },
    {
      mistake:
        "Writing (AB)^T = A^T B^T.",

      correction:
        "The correct order is (AB)^T = B^T A^T.",
    },
    {
      mistake:
        "Confusing transpose with inverse.",

      correction:
        "Transpose switches rows and columns. Inverse reverses a transformation when it exists.",
    },
  ],

  discussionQuestions: [
    "What information changes when a matrix is transposed?",
    "What information remains unchanged?",
    "Why is transpose useful in data analysis?",
    "Why must a symmetric matrix be square?",
    "How does transpose connect vectors to dot products?",
    "Why does product order reverse under transpose?",
    "How could transpose help align AI data with model weights?",
  ],

  formativeAssessment: {
    totalPoints: 18,

    passingScore: 15,

    questions: [
      {
        id: "check-02-05-01",
        type: "transpose",
        points: 4,
        prompt:
          "Transpose [[2, 5, 8], [1, 4, 7]].",
        answer: [
          [2, 1],
          [5, 4],
          [8, 7],
        ],
      },
      {
        id: "check-02-05-02",
        type: "dimensions",
        points: 3,
        prompt:
          "If A is 6 × 3, what are the dimensions of A^T?",
        answer: "3 × 6",
      },
      {
        id: "check-02-05-03",
        type: "symmetry",
        points: 4,
        prompt:
          "Determine whether [[4, 2, 1], [2, 5, 3], [1, 3, 7]] is symmetric.",
        answer: "Yes",
      },
      {
        id: "check-02-05-04",
        type: "entry",
        points: 3,
        prompt:
          "If a_24 = 11, identify its location in A^T.",
        answer:
          "(A^T)_42 = 11",
      },
      {
        id: "check-02-05-05",
        type: "explanation",
        points: 4,
        prompt:
          "Explain one reason transpose is important in machine learning.",
        sampleAnswer:
          "It reorients data or weights so matrix dimensions align for multiplication and gradient calculations.",
      },
    ],
  },

  researchExtension: {
    title: "Transpose in Machine Learning",

    researchQuestion:
      "Why does transpose appear in regression, covariance, neural networks, or gradient calculations?",

    applicationOptions: [
      "Normal equations",
      "Covariance matrices",
      "Neural-network backpropagation",
      "Similarity matrices",
      "Batch data orientation",
    ],

    task:
      "Select one application and explain the role of transpose.",

    requiredEvidence: [
      "Application description",
      "Relevant matrix shapes",
      "A transpose operation",
      "Explanation of why the orientation changes",
      "One formula or computation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Matrix Transpose Visual Guide",

    description:
      "Create a visual explanation of transpose using rectangular, square, row-vector, and symmetric examples.",

    requiredSections: [
      "Definition",
      "Entry movement rule",
      "Dimension change",
      "Row-to-column vector",
      "Symmetry test",
      "Double transpose",
      "Data interpretation",
      "AI application",
    ],

    requiredEvidence: [
      "At least four matrices",
      "Arrows showing entry movement",
      "Python verification",
      "One property proof or explanation",
      "Reflection",
    ],
  },

  reflection: [
    "How does transpose change matrix shape?",
    "Why do diagonal entries remain fixed?",
    "What is the connection between transpose and symmetry?",
    "How does transpose convert a row vector into a column vector?",
    "Why is transpose important for AI matrix dimensions?",
  ],

  summary: [
    "Transpose switches matrix rows and columns.",
    "If A is m × n, then A^T is n × m.",
    "The entry a_ij moves to position a_ji.",
    "Main-diagonal entries remain fixed.",
    "A row vector becomes a column vector under transpose.",
    "Transposing twice returns the original matrix.",
    "A symmetric matrix satisfies A^T = A.",
    "Transpose distributes over addition and scalar multiplication.",
    "The transpose of a product reverses factor order.",
    "Transpose is essential in data science, regression, statistics, and AI.",
  ],

  previousLesson: {
    id: "la-m02-l04",
    slug: "matrix-addition-and-scaling",
    title:
      "Matrix Addition, Subtraction, and Scalar Multiplication",
  },

  nextLesson: {
    id: "la-m02-l06",
    slug: "matrix-multiplication",
    title: "Matrix Multiplication",
  },

  lumineryGuidance: {
    message:
      "Transpose changes orientation, not the underlying values.",

    prompt:
      "Before transposing, state the original dimensions and row-column meaning. After transposing, explain how both have changed.",
  },
};

export default lesson05;