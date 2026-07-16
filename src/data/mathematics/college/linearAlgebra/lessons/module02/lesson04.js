const lesson04 = {
  id: "la-m02-l04",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 4,

  slug: "matrix-addition-and-scaling",

  title: "Matrix Addition, Subtraction, and Scalar Multiplication",

  subtitle:
    "Combining matrices entry by entry and scaling every entry by a common factor.",

  status: "Available",

  duration: "90–105 minutes",

  level: "Foundation",

  essentialQuestion:
    "How can matrices be combined or scaled while preserving their structure and meaning?",

  bigIdea:
    "Matrix addition and subtraction combine corresponding entries, while scalar multiplication changes every entry by the same factor. These operations require careful attention to matrix dimensions and context.",

  problemFirst: {
    title: "Combining Monthly Sales Data",

    scenario:
      "A company records sales for three products across two stores. One matrix stores January sales and another stores February sales. The company needs total sales, monthly change, and projected sales after a percentage increase.",

    januarySales: [
      [120, 150, 90],
      [100, 130, 110],
    ],

    februarySales: [
      [140, 160, 100],
      [115, 125, 120],
    ],

    questions: [
      "How can January and February sales be combined?",
      "How can the change from January to February be measured?",
      "Why must the matrices have the same dimensions?",
      "How can every sales value be increased by the same percentage?",
    ],

    expectedInsight:
      "Addition and subtraction are performed entry by entry, while scalar multiplication applies the same factor to every matrix entry.",
  },

  learningObjectives: [
    "Add matrices with equal dimensions.",
    "Subtract matrices with equal dimensions.",
    "Multiply a matrix by a scalar.",
    "Explain why matrix addition and subtraction require matching dimensions.",
    "Interpret matrix operations in real-world contexts.",
    "Use matrix properties to simplify calculations.",
    "Identify invalid matrix operations.",
    "Implement matrix addition, subtraction, and scaling with Python and NumPy.",
  ],

  prerequisiteKnowledge: [
    "Matrix dimensions",
    "Rows, columns, and entries",
    "Vector addition",
    "Scalar multiplication of vectors",
    "Basic arithmetic",
  ],

  vocabulary: [
    {
      term: "Matrix Addition",
      definition:
        "The operation of adding corresponding entries of two matrices with the same dimensions.",
    },
    {
      term: "Matrix Subtraction",
      definition:
        "The operation of subtracting corresponding entries of two matrices with the same dimensions.",
    },
    {
      term: "Scalar Multiplication",
      definition:
        "The operation of multiplying every matrix entry by the same scalar.",
    },
    {
      term: "Compatible Dimensions",
      definition:
        "Dimensions that allow a particular matrix operation to be performed.",
    },
    {
      term: "Corresponding Entries",
      definition:
        "Entries located in the same row and column positions.",
    },
    {
      term: "Additive Identity",
      definition:
        "The zero matrix, which leaves another matrix unchanged under addition.",
    },
    {
      term: "Additive Inverse",
      definition:
        "The matrix -A, which satisfies A + (-A) = 0.",
    },
  ],

  formulas: [
    {
      id: "matrix-addition",
      name: "Matrix Addition",
      formula:
        "(A + B)_ij = a_ij + b_ij",
      requirement:
        "A and B must have the same dimensions.",
      meaning:
        "Add entries in matching positions.",
    },
    {
      id: "matrix-subtraction",
      name: "Matrix Subtraction",
      formula:
        "(A - B)_ij = a_ij - b_ij",
      requirement:
        "A and B must have the same dimensions.",
      meaning:
        "Subtract entries in matching positions.",
    },
    {
      id: "matrix-scalar-multiplication",
      name: "Scalar Multiplication",
      formula:
        "(cA)_ij = c a_ij",
      requirement:
        "No dimension matching is needed because c is one scalar.",
      meaning:
        "Multiply every matrix entry by c.",
    },
    {
      id: "matrix-additive-inverse",
      name: "Additive Inverse",
      formula:
        "-A = (-1)A",
      meaning:
        "Negate every matrix entry.",
    },
  ],

  dimensionRules: {
    additionAndSubtraction: {
      rule:
        "Matrices must have identical numbers of rows and columns.",

      validExample:
        "A is 2 × 3 and B is 2 × 3.",

      invalidExamples: [
        "A is 2 × 3 and B is 3 × 2.",
        "A is 2 × 2 and B is 2 × 3.",
        "A is 1 × 4 and B is 4 × 1.",
      ],
    },

    scalarMultiplication: {
      rule:
        "A scalar can multiply a matrix of any dimensions.",

      outputShape:
        "The resulting matrix has the same dimensions as the original matrix.",
    },
  },

  geometricAndDataMeaning: {
    addition: {
      explanation:
        "Matrix addition combines matching quantities stored in corresponding positions.",

      examples: [
        "Combining sales from two months",
        "Combining forces or transformations when addition is meaningful",
        "Adding image brightness values",
        "Combining model updates",
      ],
    },

    subtraction: {
      explanation:
        "Matrix subtraction measures change or difference between matching entries.",

      examples: [
        "February sales minus January sales",
        "Current image minus background image",
        "New model parameters minus old model parameters",
        "Observed data minus predicted data",
      ],
    },

    scalarMultiplication: {
      explanation:
        "Scalar multiplication applies the same scaling factor to every entry.",

      examples: [
        "Applying a percentage increase",
        "Converting measurement units",
        "Changing image brightness",
        "Scaling model updates",
      ],
    },
  },

  workedExamples: [
    {
      id: "example-02-04-01",

      title: "Adding Two Matrices",

      problem:
        "Calculate A + B where A = [[2, 4], [1, 3]] and B = [[5, 1], [6, 2]].",

      solutionSteps: [
        "Check dimensions: both matrices are 2 × 2.",
        "Add corresponding entries.",
        "Top-left: 2 + 5 = 7.",
        "Top-right: 4 + 1 = 5.",
        "Bottom-left: 1 + 6 = 7.",
        "Bottom-right: 3 + 2 = 5.",
      ],

      answer: [
        [7, 5],
        [7, 5],
      ],
    },

    {
      id: "example-02-04-02",

      title: "Subtracting Two Matrices",

      problem:
        "Calculate A - B where A = [[8, 5], [4, 7]] and B = [[3, 6], [1, 2]].",

      solutionSteps: [
        "Check dimensions: both matrices are 2 × 2.",
        "Subtract corresponding entries.",
        "8 - 3 = 5.",
        "5 - 6 = -1.",
        "4 - 1 = 3.",
        "7 - 2 = 5.",
      ],

      answer: [
        [5, -1],
        [3, 5],
      ],
    },

    {
      id: "example-02-04-03",

      title: "Scalar Multiplication",

      problem:
        "Calculate 3A for A = [[2, -1], [4, 5]].",

      solutionSteps: [
        "Multiply every entry by 3.",
        "3 × 2 = 6.",
        "3 × (-1) = -3.",
        "3 × 4 = 12.",
        "3 × 5 = 15.",
      ],

      answer: [
        [6, -3],
        [12, 15],
      ],
    },

    {
      id: "example-02-04-04",

      title: "Negative Scalar",

      problem:
        "Calculate -2A for A = [[1, 3], [-4, 2]].",

      solutionSteps: [
        "Multiply each entry by -2.",
        "-2 × 1 = -2.",
        "-2 × 3 = -6.",
        "-2 × (-4) = 8.",
        "-2 × 2 = -4.",
      ],

      answer: [
        [-2, -6],
        [8, -4],
      ],
    },

    {
      id: "example-02-04-05",

      title: "Monthly Sales Total",

      problem:
        "Add January [[120, 150], [100, 130]] and February [[140, 160], [115, 125]].",

      solutionSteps: [
        "Add corresponding sales values.",
        "120 + 140 = 260.",
        "150 + 160 = 310.",
        "100 + 115 = 215.",
        "130 + 125 = 255.",
      ],

      answer: [
        [260, 310],
        [215, 255],
      ],

      interpretation:
        "Each entry gives combined sales for the same store and product.",
    },

    {
      id: "example-02-04-06",

      title: "Monthly Change",

      problem:
        "Find February minus January using February [[140, 160], [115, 125]] and January [[120, 150], [100, 130]].",

      solutionSteps: [
        "Subtract January entries from matching February entries.",
        "140 - 120 = 20.",
        "160 - 150 = 10.",
        "115 - 100 = 15.",
        "125 - 130 = -5.",
      ],

      answer: [
        [20, 10],
        [15, -5],
      ],

      interpretation:
        "Positive entries indicate growth, while the negative entry indicates decline.",
    },

    {
      id: "example-02-04-07",

      title: "Percentage Increase",

      problem:
        "A company expects sales to increase by 10%. Scale A = [[100, 200], [150, 250]] by 1.10.",

      solutionSteps: [
        "Use scalar 1.10.",
        "Multiply every entry by 1.10.",
      ],

      answer: [
        [110, 220],
        [165, 275],
      ],
    },

    {
      id: "example-02-04-08",

      title: "Invalid Addition",

      problem:
        "Can A = [[1, 2, 3], [4, 5, 6]] be added to B = [[1, 2], [3, 4], [5, 6]]?",

      solutionSteps: [
        "A is 2 × 3.",
        "B is 3 × 2.",
        "The dimensions do not match.",
      ],

      answer:
        "No. Matrix addition is undefined.",
    },

    {
      id: "example-02-04-09",

      title: "Additive Inverse",

      problem:
        "Find -A and verify A + (-A) = 0 for A = [[3, -2], [5, 1]].",

      solutionSteps: [
        "Negate every entry.",
        "-A = [[-3, 2], [-5, -1]].",
        "Add A and -A entry by entry.",
      ],

      answer: {
        negativeMatrix: [
          [-3, 2],
          [-5, -1],
        ],
        sum: [
          [0, 0],
          [0, 0],
        ],
      },
    },
  ],

  properties: [
    {
      property: "Commutative Property of Addition",
      formula:
        "A + B = B + A",
      explanation:
        "Changing addition order does not change the result.",
    },
    {
      property: "Associative Property of Addition",
      formula:
        "(A + B) + C = A + (B + C)",
      explanation:
        "Grouping does not change the sum.",
    },
    {
      property: "Additive Identity",
      formula:
        "A + 0 = A",
      explanation:
        "Adding the zero matrix leaves A unchanged.",
    },
    {
      property: "Additive Inverse",
      formula:
        "A + (-A) = 0",
      explanation:
        "Each matrix has an opposite under addition.",
    },
    {
      property: "Distributive Property",
      formula:
        "c(A + B) = cA + cB",
      explanation:
        "Scaling a sum equals scaling each matrix and then adding.",
    },
    {
      property: "Scalar Addition",
      formula:
        "(c + d)A = cA + dA",
      explanation:
        "Adding scalars before scaling gives the same result.",
    },
    {
      property: "Associative Scaling",
      formula:
        "c(dA) = (cd)A",
      explanation:
        "Successive scalar multiplications combine.",
    },
    {
      property: "Scalar Identity",
      formula:
        "1A = A",
      explanation:
        "Multiplying by one leaves a matrix unchanged.",
    },
  ],

  imageApplication: {
    title: "Image Brightness as Matrix Addition and Scaling",

    explanation:
      "A grayscale image can be represented as a matrix of pixel intensities.",

    originalImage: [
      [40, 80],
      [120, 160],
    ],

    brightnessIncreaseMatrix: [
      [20, 20],
      [20, 20],
    ],

    brighterImage: [
      [60, 100],
      [140, 180],
    ],

    scalingExample: {
      scalar: 0.5,
      result: [
        [20, 40],
        [60, 80],
      ],
      interpretation:
        "Scaling by 0.5 reduces every pixel intensity and darkens the image.",
    },

    caution:
      "Real image systems must ensure pixel values remain within valid limits.",
  },

  aiConnection: {
    title: "Matrix Updates in Machine Learning",

    explanation:
      "Machine-learning models often update a matrix of parameters by adding or subtracting a scaled update matrix.",

    formula:
      "new weights = old weights - learning rate × gradient matrix",

    interpretation: [
      "The gradient matrix identifies how each parameter should change.",
      "The learning rate scales the size of the update.",
      "Subtraction moves the model toward lower error.",
    ],

    example: {
      oldWeights: [
        [0.5, -0.2],
        [0.1, 0.8],
      ],

      gradient: [
        [0.04, -0.01],
        [0.02, 0.05],
      ],

      learningRate: 0.1,

      scaledGradient: [
        [0.004, -0.001],
        [0.002, 0.005],
      ],

      newWeights: [
        [0.496, -0.199],
        [0.098, 0.795],
      ],
    },

    caution:
      "The matrices must have matching dimensions because every model parameter requires a corresponding update.",
  },

  pythonLab: {
    title: "Matrix Addition, Subtraction, and Scaling with NumPy",

    objective:
      "Implement matrix operations with dimension validation and compare with NumPy.",

    code: `import numpy as np

def validate_same_shape(matrix_a, matrix_b):
    a = np.array(matrix_a, dtype=float)
    b = np.array(matrix_b, dtype=float)

    if a.shape != b.shape:
        raise ValueError(
            f"Matrices must have the same shape: {a.shape} != {b.shape}"
        )

    return a, b

def add_matrices(matrix_a, matrix_b):
    a, b = validate_same_shape(matrix_a, matrix_b)
    return a + b

def subtract_matrices(matrix_a, matrix_b):
    a, b = validate_same_shape(matrix_a, matrix_b)
    return a - b

def scale_matrix(scalar, matrix):
    matrix = np.array(matrix, dtype=float)
    return scalar * matrix

a = np.array([
    [2, 4],
    [1, 3]
], dtype=float)

b = np.array([
    [5, 1],
    [6, 2]
], dtype=float)

print("A + B:")
print(add_matrices(a, b))

print("A - B:")
print(subtract_matrices(a, b))

print("3A:")
print(scale_matrix(3, a))`,

    questions: [
      "Why must A and B have the same shape for addition?",
      "Why does scalar multiplication preserve matrix shape?",
      "What error should be raised for incompatible matrices?",
      "How can you verify A + B = B + A?",
      "How would you apply a 10% increase to every matrix entry?",
    ],

    extension:
      "Create a function percent_change(old_matrix, new_matrix) that calculates entrywise percentage change while handling zero entries safely.",
  },

  guidedPractice: [
    {
      id: "guided-02-04-01",
      question:
        "Calculate [[1, 2], [3, 4]] + [[5, 6], [7, 8]].",
      answer: [
        [6, 8],
        [10, 12],
      ],
    },
    {
      id: "guided-02-04-02",
      question:
        "Calculate [[9, 5], [6, 2]] - [[4, 7], [1, 3]].",
      answer: [
        [5, -2],
        [5, -1],
      ],
    },
    {
      id: "guided-02-04-03",
      question:
        "Calculate 2[[3, -1], [4, 5]].",
      answer: [
        [6, -2],
        [8, 10],
      ],
    },
    {
      id: "guided-02-04-04",
      question:
        "Can a 2 × 3 matrix be added to a 3 × 2 matrix?",
      answer: "No",
    },
    {
      id: "guided-02-04-05",
      question:
        "Find the additive inverse of [[2, -5], [1, 4]].",
      answer: [
        [-2, 5],
        [-1, -4],
      ],
    },
  ],

  independentPractice: [
    {
      id: "practice-02-04-01",
      difficulty: "Foundation",
      question:
        "Calculate [[2, 3], [4, 5]] + [[1, 6], [2, 7]].",
      answer: [
        [3, 9],
        [6, 12],
      ],
    },
    {
      id: "practice-02-04-02",
      difficulty: "Foundation",
      question:
        "Calculate [[8, 4], [3, 9]] - [[5, 1], [7, 2]].",
      answer: [
        [3, 3],
        [-4, 7],
      ],
    },
    {
      id: "practice-02-04-03",
      difficulty: "Foundation",
      question:
        "Calculate -3[[2, 1], [-4, 5]].",
      answer: [
        [-6, -3],
        [12, -15],
      ],
    },
    {
      id: "practice-02-04-04",
      difficulty: "Developing",
      question:
        "A 3 × 4 matrix is added to another matrix. What dimensions must the second matrix have?",
      answer: "3 × 4",
    },
    {
      id: "practice-02-04-05",
      difficulty: "Developing",
      question:
        "Verify A + 0 = A for A = [[3, 2], [5, 1]].",
      answer:
        "Adding [[0, 0], [0, 0]] returns [[3, 2], [5, 1]].",
    },
    {
      id: "practice-02-04-06",
      difficulty: "Developing",
      question:
        "A matrix of prices is [[10, 20], [15, 25]]. Increase all prices by 8%.",
      answer: [
        [10.8, 21.6],
        [16.2, 27],
      ],
    },
    {
      id: "practice-02-04-07",
      difficulty: "Challenge",
      question:
        "Verify 2(A + B) = 2A + 2B for A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]].",
      answer:
        "Both sides equal [[12, 16], [20, 24]].",
    },
    {
      id: "practice-02-04-08",
      difficulty: "Challenge",
      question:
        "Explain why matrix subtraction is generally not commutative.",
      sampleAnswer:
        "A - B and B - A are additive inverses of each other, so their signs are reversed unless A = B.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Adding matrices with different dimensions.",

      correction:
        "Addition and subtraction require identical dimensions.",
    },
    {
      mistake:
        "Adding rows or columns as whole numbers.",

      correction:
        "Add corresponding entries individually.",
    },
    {
      mistake:
        "Multiplying only diagonal entries by a scalar.",

      correction:
        "A scalar multiplies every entry.",
    },
    {
      mistake:
        "Changing matrix dimensions during scalar multiplication.",

      correction:
        "Scalar multiplication preserves matrix dimensions.",
    },
    {
      mistake:
        "Ignoring negative signs in subtraction.",

      correction:
        "Subtract every corresponding entry carefully.",
    },
    {
      mistake:
        "Confusing entrywise addition with matrix multiplication.",

      correction:
        "Matrix addition is entrywise; matrix multiplication uses row-column combinations.",
    },
  ],

  discussionQuestions: [
    "Why must matrix dimensions match for addition?",
    "What does matrix subtraction represent in data analysis?",
    "How can scalar multiplication change image brightness?",
    "Why is the zero matrix the additive identity?",
    "How do model training updates use all three operations?",
    "What could go wrong if matching entries represent different features?",
  ],

  formativeAssessment: {
    totalPoints: 18,

    passingScore: 15,

    questions: [
      {
        id: "check-02-04-01",
        type: "addition",
        points: 4,
        prompt:
          "Calculate [[2, 5], [1, 4]] + [[3, 2], [6, 1]].",
        answer: [
          [5, 7],
          [7, 5],
        ],
      },
      {
        id: "check-02-04-02",
        type: "subtraction",
        points: 4,
        prompt:
          "Calculate [[8, 3], [5, 9]] - [[2, 7], [1, 4]].",
        answer: [
          [6, -4],
          [4, 5],
        ],
      },
      {
        id: "check-02-04-03",
        type: "scaling",
        points: 3,
        prompt:
          "Calculate -2[[3, -1], [4, 0]].",
        answer: [
          [-6, 2],
          [-8, 0],
        ],
      },
      {
        id: "check-02-04-04",
        type: "dimensions",
        points: 3,
        prompt:
          "Can a 2 × 4 matrix be subtracted from a 2 × 3 matrix? Explain.",
        answer:
          "No. The dimensions do not match.",
      },
      {
        id: "check-02-04-05",
        type: "application",
        points: 4,
        prompt:
          "Explain how matrix subtraction can be used to measure change in a dataset.",
        sampleAnswer:
          "Subtracting an earlier data matrix from a later matrix gives the change in every corresponding observation and feature.",
      },
    ],
  },

  researchExtension: {
    title: "Matrix Updates in Machine Learning",

    researchQuestion:
      "How do matrix addition, subtraction, and scalar multiplication update model parameters during training?",

    task:
      "Investigate one gradient-descent update involving a small weight matrix.",

    requiredEvidence: [
      "Original weight matrix",
      "Gradient matrix",
      "Learning-rate scalar",
      "Scaled gradient",
      "Updated matrix",
      "Interpretation of one entry",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Matrix Operations Case Study",

    description:
      "Create a visual case study demonstrating matrix addition, subtraction, and scalar multiplication in one application.",

    applicationOptions: [
      "Sales analysis",
      "Image brightness",
      "Student growth",
      "Inventory change",
      "Model training",
      "Sensor data",
    ],

    requiredEvidence: [
      "Input matrices",
      "Dimension check",
      "Worked calculations",
      "Interpretation of results",
      "Python verification",
      "One invalid-operation example",
      "Reflection",
    ],
  },

  reflection: [
    "Why do matrix dimensions need to match for addition?",
    "How is matrix subtraction connected to change?",
    "What does scalar multiplication preserve?",
    "How are these operations used in machine learning?",
    "What is the difference between entrywise operations and matrix multiplication?",
  ],

  summary: [
    "Matrix addition combines corresponding entries.",
    "Matrix subtraction measures entrywise difference.",
    "Addition and subtraction require identical dimensions.",
    "Scalar multiplication multiplies every entry by the same number.",
    "Scalar multiplication preserves matrix dimensions.",
    "The zero matrix is the additive identity.",
    "The negative matrix is the additive inverse.",
    "Matrix addition is commutative and associative.",
    "These operations support data analysis, image processing, and machine-learning updates.",
  ],

  previousLesson: {
    id: "la-m02-l03",
    slug: "special-matrices",
    title: "Special Matrices",
  },

  nextLesson: {
    id: "la-m02-l05",
    slug: "matrix-transpose",
    title: "The Matrix Transpose",
  },

  lumineryGuidance: {
    message:
      "Before combining matrices, verify that corresponding positions represent the same kind of information.",

    prompt:
      "Check dimensions first, explain the meaning of one entry before and after the operation, and then calculate.",
  },
};

export default lesson04;