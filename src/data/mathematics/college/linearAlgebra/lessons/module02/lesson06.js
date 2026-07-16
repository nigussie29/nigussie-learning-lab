const lesson06 = {
  id: "la-m02-l06",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 6,

  slug: "matrix-multiplication",

  title: "Matrix Multiplication",

  subtitle:
    "Combining rows and columns to transform vectors, connect systems, and produce new information.",

  status: "Available",

  duration: "105–120 minutes",

  level: "Foundation",

  essentialQuestion:
    "How does matrix multiplication combine information, and why are its dimension rules different from matrix addition?",

  bigIdea:
    "Matrix multiplication combines rows of the first matrix with columns of the second matrix. Each output entry is a dot product, and compatible inner dimensions determine whether multiplication is possible.",

  problemFirst: {
    title: "Calculating Store Revenue",

    scenario:
      "A company sells three products in two stores. A quantity matrix records how many units each store sold, while a price vector records the price of each product. The company wants total revenue for each store.",

    quantityMatrix: [
      [10, 5, 8],
      [7, 12, 4],
    ],

    priceVector: [
      [20],
      [15],
      [10],
    ],

    questions: [
      "How should the three product quantities be combined with the three prices?",
      "Why is ordinary entry-by-entry multiplication not enough?",
      "Why must the number of product columns match the number of price rows?",
      "What should each output entry represent?",
    ],

    expectedInsight:
      "Each store row is dotted with the price column. The result is a 2 × 1 revenue matrix.",
  },

  learningObjectives: [
    "Determine whether two matrices can be multiplied.",
    "Predict the dimensions of a matrix product.",
    "Calculate matrix products using the row-column rule.",
    "Interpret each product entry as a dot product.",
    "Multiply matrices by column vectors.",
    "Explain why matrix multiplication is generally not commutative.",
    "Distinguish matrix multiplication from entrywise multiplication.",
    "Apply matrix multiplication to data, systems, transformations, and AI.",
    "Implement matrix multiplication from first principles and verify it with NumPy.",
  ],

  prerequisiteKnowledge: [
    "Matrix dimensions",
    "Rows and columns",
    "Dot product",
    "Matrix transpose",
    "Vector multiplication",
    "Basic arithmetic",
  ],

  vocabulary: [
    {
      term: "Matrix Product",
      definition:
        "The matrix produced by multiplying two compatible matrices.",
    },
    {
      term: "Compatible Dimensions",
      definition:
        "Dimensions for which the number of columns of the first matrix equals the number of rows of the second matrix.",
    },
    {
      term: "Inner Dimensions",
      definition:
        "The middle dimensions in an expression such as (m × n)(n × p).",
    },
    {
      term: "Outer Dimensions",
      definition:
        "The dimensions m and p that determine the shape of the product.",
    },
    {
      term: "Row-Column Rule",
      definition:
        "Each product entry is found by taking a row from the first matrix and a column from the second matrix.",
    },
    {
      term: "Dot Product",
      definition:
        "The scalar result formed by multiplying corresponding components and adding.",
    },
    {
      term: "Noncommutative",
      definition:
        "A property in which changing the order may change the result or make the operation undefined.",
    },
    {
      term: "Entrywise Multiplication",
      definition:
        "Multiplying matching entries directly, which is different from standard matrix multiplication.",
    },
  ],

  formulas: [
    {
      id: "matrix-product-entry",

      name: "Matrix Product Entry",

      formula:
        "(AB)_ij = sum over k of a_ik b_kj",

      meaning:
        "Entry i,j of the product is the dot product of row i of A with column j of B.",
    },

    {
      id: "dimension-rule",

      name: "Dimension Compatibility",

      formula:
        "(m × n)(n × p) = m × p",

      meaning:
        "The inner dimensions must match, and the outer dimensions become the product shape.",
    },

    {
      id: "matrix-vector-product",

      name: "Matrix-Vector Product",

      formula:
        "y = Ax",

      meaning:
        "Each output component is the dot product of one row of A with x.",
    },

    {
      id: "identity-product",

      name: "Identity Property",

      formula:
        "AI = IA = A",

      meaning:
        "Multiplying by a compatible identity matrix leaves A unchanged.",
    },
  ],

  dimensionLogic: {
    title: "Inner Dimensions Match, Outer Dimensions Remain",

    examples: [
      {
        expression: "(2 × 3)(3 × 4)",
        valid: true,
        productDimensions: "2 × 4",
        explanation:
          "The inner dimensions 3 and 3 match.",
      },
      {
        expression: "(4 × 2)(2 × 1)",
        valid: true,
        productDimensions: "4 × 1",
        explanation:
          "The inner dimensions 2 and 2 match.",
      },
      {
        expression: "(3 × 2)(4 × 3)",
        valid: false,
        explanation:
          "The inner dimensions 2 and 4 do not match.",
      },
      {
        expression: "(1 × 5)(5 × 1)",
        valid: true,
        productDimensions: "1 × 1",
        explanation:
          "The product is one scalar stored as a 1 × 1 matrix.",
      },
      {
        expression: "(5 × 1)(1 × 5)",
        valid: true,
        productDimensions: "5 × 5",
        explanation:
          "Reversing the order produces a completely different shape.",
      },
    ],

    memoryRule:
      "The inside dimensions must agree; the outside dimensions give the answer shape.",
  },

  rowColumnRule: {
    title: "How One Product Entry Is Built",

    matrixA: [
      [1, 2, 3],
      [4, 5, 6],
    ],

    matrixB: [
      [7, 8],
      [9, 10],
      [11, 12],
    ],

    productShape:
      "2 × 2",

    entries: [
      {
        entry: "c_11",
        row: [1, 2, 3],
        column: [7, 9, 11],
        calculation:
          "1(7) + 2(9) + 3(11) = 58",
      },
      {
        entry: "c_12",
        row: [1, 2, 3],
        column: [8, 10, 12],
        calculation:
          "1(8) + 2(10) + 3(12) = 64",
      },
      {
        entry: "c_21",
        row: [4, 5, 6],
        column: [7, 9, 11],
        calculation:
          "4(7) + 5(9) + 6(11) = 139",
      },
      {
        entry: "c_22",
        row: [4, 5, 6],
        column: [8, 10, 12],
        calculation:
          "4(8) + 5(10) + 6(12) = 154",
      },
    ],

    product: [
      [58, 64],
      [139, 154],
    ],
  },

  workedExamples: [
    {
      id: "example-02-06-01",

      title: "Checking Compatibility",

      problem:
        "Can a 3 × 4 matrix multiply a 4 × 2 matrix? If so, what is the product shape?",

      solutionSteps: [
        "Write the dimensions side by side.",
        "(3 × 4)(4 × 2).",
        "The inner dimensions 4 and 4 match.",
        "The outer dimensions are 3 and 2.",
      ],

      answer:
        "Yes. The product is 3 × 2.",
    },

    {
      id: "example-02-06-02",

      title: "Incompatible Multiplication",

      problem:
        "Can a 2 × 3 matrix multiply a 4 × 2 matrix?",

      solutionSteps: [
        "The inner dimensions are 3 and 4.",
        "They do not match.",
      ],

      answer:
        "No. The product is undefined.",
    },

    {
      id: "example-02-06-03",

      title: "Multiplying Two 2 × 2 Matrices",

      problem:
        "Calculate AB for A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]].",

      solutionSteps: [
        "c_11 = 1(5) + 2(7) = 19.",
        "c_12 = 1(6) + 2(8) = 22.",
        "c_21 = 3(5) + 4(7) = 43.",
        "c_22 = 3(6) + 4(8) = 50.",
      ],

      answer: [
        [19, 22],
        [43, 50],
      ],
    },

    {
      id: "example-02-06-04",

      title: "Matrix Times Column Vector",

      problem:
        "Calculate Ax for A = [[2, 1], [4, 3]] and x = [[5], [2]].",

      solutionSteps: [
        "First output: 2(5) + 1(2) = 12.",
        "Second output: 4(5) + 3(2) = 26.",
      ],

      answer: [
        [12],
        [26],
      ],

      interpretation:
        "Each row of A creates one output component.",
    },

    {
      id: "example-02-06-05",

      title: "Revenue Calculation",

      problem:
        "Calculate revenue using quantity matrix [[10, 5, 8], [7, 12, 4]] and price vector [[20], [15], [10]].",

      solutionSteps: [
        "Store 1: 10(20) + 5(15) + 8(10).",
        "Store 1 revenue = 200 + 75 + 80 = 355.",
        "Store 2: 7(20) + 12(15) + 4(10).",
        "Store 2 revenue = 140 + 180 + 40 = 360.",
      ],

      answer: [
        [355],
        [360],
      ],

      interpretation:
        "Each output entry gives total revenue for one store.",
    },

    {
      id: "example-02-06-06",

      title: "Order Matters",

      problem:
        "For A = [[1, 2], [0, 1]] and B = [[2, 0], [3, 4]], calculate AB and BA.",

      solutionSteps: [
        "Calculate AB using row-column products.",
        "Calculate BA separately.",
        "Compare the results.",
      ],

      answer: {
        AB: [
          [8, 8],
          [3, 4],
        ],

        BA: [
          [2, 4],
          [3, 10],
        ],
      },

      interpretation:
        "AB is not equal to BA.",
    },

    {
      id: "example-02-06-07",

      title: "Row Vector Times Column Vector",

      problem:
        "Calculate [[1, 2, 3]] [[4], [5], [6]].",

      solutionSteps: [
        "The product has shape 1 × 1.",
        "Calculate 1(4) + 2(5) + 3(6).",
      ],

      answer: [[32]],

      interpretation:
        "This is the dot product written as matrix multiplication.",
    },

    {
      id: "example-02-06-08",

      title: "Column Vector Times Row Vector",

      problem:
        "Calculate [[1], [2], [3]] [[4, 5, 6]].",

      solutionSteps: [
        "The product has shape 3 × 3.",
        "Multiply each column-vector entry by the complete row vector.",
      ],

      answer: [
        [4, 5, 6],
        [8, 10, 12],
        [12, 15, 18],
      ],

      interpretation:
        "This is an outer product.",
    },

    {
      id: "example-02-06-09",

      title: "Identity Matrix",

      problem:
        "Calculate AI for A = [[3, 5], [2, 7]] and I = [[1, 0], [0, 1]].",

      solutionSteps: [
        "Multiply each row of A by each column of I.",
        "The first identity column selects the first column of A.",
        "The second identity column selects the second column of A.",
      ],

      answer: [
        [3, 5],
        [2, 7],
      ],
    },

    {
      id: "example-02-06-10",

      title: "Weighted Student Scores",

      problem:
        "A student score matrix is [[80, 90, 70], [75, 85, 95]]. The assessment weights are [[0.3], [0.4], [0.3]]. Find each student’s weighted score.",

      solutionSteps: [
        "Student 1: 80(0.3) + 90(0.4) + 70(0.3).",
        "Student 1 score = 24 + 36 + 21 = 81.",
        "Student 2: 75(0.3) + 85(0.4) + 95(0.3).",
        "Student 2 score = 22.5 + 34 + 28.5 = 85.",
      ],

      answer: [
        [81],
        [85],
      ],
    },
  ],

  matrixMultiplicationProperties: [
    {
      property: "Associative",

      formula:
        "(AB)C = A(BC)",

      explanation:
        "Grouping compatible matrix products does not change the final result.",
    },

    {
      property: "Distributive",

      formula:
        "A(B + C) = AB + AC",

      explanation:
        "Matrix multiplication distributes over matrix addition.",
    },

    {
      property: "Right Distributive",

      formula:
        "(A + B)C = AC + BC",

      explanation:
        "Distribution also works from the right.",
    },

    {
      property: "Identity",

      formula:
        "AI = IA = A",

      explanation:
        "A compatible identity matrix leaves A unchanged.",
    },

    {
      property: "Generally Not Commutative",

      formula:
        "AB is generally not equal to BA",

      explanation:
        "Order changes row-column interactions and may change dimensions.",
    },

    {
      property: "Zero Product Possibility",

      formula:
        "AB = 0 does not always imply A = 0 or B = 0",

      explanation:
        "Nonzero matrices can multiply to the zero matrix.",
    },
  ],

  entrywiseComparison: {
    title: "Matrix Product vs. Entrywise Product",

    matrices: {
      A: [
        [1, 2],
        [3, 4],
      ],

      B: [
        [5, 6],
        [7, 8],
      ],
    },

    matrixProduct: [
      [19, 22],
      [43, 50],
    ],

    entrywiseProduct: [
      [5, 12],
      [21, 32],
    ],

    explanation:
      "Standard matrix multiplication uses row-column dot products. Entrywise multiplication multiplies matching positions and is a different operation.",
  },

  transformationMeaning: {
    title: "Matrix Multiplication as a Transformation",

    explanation:
      "When A multiplies a vector x, the columns of A determine how the input components combine to produce the output.",

    example: {
      matrix: [
        [2, 0],
        [0, 3],
      ],

      vector: [
        [4],
        [5],
      ],

      result: [
        [8],
        [15],
      ],

      interpretation:
        "The x-coordinate is scaled by 2, and the y-coordinate is scaled by 3.",
    },

    keyInsight:
      "Matrix multiplication is not only arithmetic. It applies a structured transformation.",
  },

  dataScienceApplication: {
    title: "Many Weighted Sums at Once",

    explanation:
      "A data matrix can multiply a weight matrix to calculate many weighted combinations simultaneously.",

    inputShape:
      "m × n",

    weightShape:
      "n × p",

    outputShape:
      "m × p",

    interpretation: [
      "m is the number of observations.",
      "n is the number of input features.",
      "p is the number of outputs or learned features.",
    ],
  },

  aiConnection: {
    title: "Matrix Multiplication in Neural Networks",

    explanation:
      "A neural-network layer processes a batch of input vectors using a weight matrix.",

    formula:
      "Z = XW + b",

    shapeExample: {
      X:
        "32 × 128",

      W:
        "128 × 64",

      Z:
        "32 × 64",
    },

    interpretation: [
      "32 observations are processed together.",
      "Each observation has 128 input features.",
      "The layer creates 64 output features.",
      "Each output value is a weighted combination of input values.",
    ],

    importance: [
      "Dense neural layers",
      "Attention calculations",
      "Embedding transformations",
      "Computer vision",
      "Language models",
      "Recommendation systems",
    ],

    caution:
      "Correct dimensions do not guarantee correct meaning. Feature order and weight interpretation must also align.",
  },

  pythonLab: {
    title: "Matrix Multiplication from First Principles",

    objective:
      "Implement the row-column algorithm, validate dimensions, and compare with NumPy.",

    code: `import numpy as np

def matrix_multiply(matrix_a, matrix_b):
    a = np.array(matrix_a, dtype=float)
    b = np.array(matrix_b, dtype=float)

    if a.ndim != 2 or b.ndim != 2:
        raise ValueError("Both inputs must be two-dimensional matrices.")

    if a.shape[1] != b.shape[0]:
        raise ValueError(
            f"Incompatible dimensions: {a.shape} cannot multiply {b.shape}"
        )

    result = np.zeros((a.shape[0], b.shape[1]))

    for row_index in range(a.shape[0]):
        for column_index in range(b.shape[1]):
            result[row_index, column_index] = np.dot(
                a[row_index, :],
                b[:, column_index]
            )

    return result

a = np.array([
    [1, 2],
    [3, 4]
], dtype=float)

b = np.array([
    [5, 6],
    [7, 8]
], dtype=float)

manual_product = matrix_multiply(a, b)
numpy_product = a @ b

print("Manual product:")
print(manual_product)

print("NumPy product:")
print(numpy_product)

print("Products match:", np.allclose(manual_product, numpy_product))`,

    questions: [
      "Why must a.shape[1] equal b.shape[0]?",
      "Why is the result shape a.shape[0] × b.shape[1]?",
      "What does a[row_index, :] select?",
      "What does b[:, column_index] select?",
      "Why does each output entry use np.dot?",
      "What is the difference between a @ b and a * b?",
    ],

    extension:
      "Modify the function to store a written explanation of how every product entry was calculated.",
  },

  guidedPractice: [
    {
      id: "guided-02-06-01",

      question:
        "Can a 2 × 5 matrix multiply a 5 × 3 matrix? What is the product shape?",

      answer:
        "Yes. The product is 2 × 3.",
    },

    {
      id: "guided-02-06-02",

      question:
        "Can a 4 × 2 matrix multiply a 3 × 4 matrix?",

      answer:
        "No. The inner dimensions 2 and 3 do not match.",
    },

    {
      id: "guided-02-06-03",

      question:
        "Calculate [[1, 2], [0, 3]] [[4], [5]].",

      answer: [
        [14],
        [15],
      ],
    },

    {
      id: "guided-02-06-04",

      question:
        "Calculate [[2, 1]] [[3], [4]].",

      answer: [[10]],
    },

    {
      id: "guided-02-06-05",

      question:
        "What are the dimensions of (6 × 4)(4 × 8)?",

      answer:
        "6 × 8",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-06-01",

      difficulty: "Foundation",

      question:
        "Calculate [[1, 0], [2, 3]] [[4, 5], [6, 7]].",

      answer: [
        [4, 5],
        [26, 31],
      ],
    },

    {
      id: "practice-02-06-02",

      difficulty: "Foundation",

      question:
        "Calculate [[3, 2], [1, 4]] [[5], [6]].",

      answer: [
        [27],
        [29],
      ],
    },

    {
      id: "practice-02-06-03",

      difficulty: "Developing",

      question:
        "Determine whether (3 × 7)(7 × 2) is valid and state the output shape.",

      answer:
        "Valid; output shape 3 × 2.",
    },

    {
      id: "practice-02-06-04",

      difficulty: "Developing",

      question:
        "Determine whether (5 × 3)(2 × 4) is valid.",

      answer:
        "Invalid because 3 does not equal 2.",
    },

    {
      id: "practice-02-06-05",

      difficulty: "Developing",

      question:
        "Calculate AB and BA for A = [[1, 1], [0, 1]] and B = [[2, 0], [1, 3]].",

      answer: {
        AB: [
          [3, 3],
          [1, 3],
        ],

        BA: [
          [2, 2],
          [1, 4],
        ],
      },
    },

    {
      id: "practice-02-06-06",

      difficulty: "Developing",

      question:
        "A data matrix has shape 500 × 20 and a weight matrix has shape 20 × 8. What is the output shape?",

      answer:
        "500 × 8",
    },

    {
      id: "practice-02-06-07",

      difficulty: "Challenge",

      question:
        "Explain why changing matrix multiplication order can change both value and shape.",

      sampleAnswer:
        "Rows and columns interact differently in each order, and the outer dimensions may also differ.",
    },

    {
      id: "practice-02-06-08",

      difficulty: "Challenge",

      question:
        "Explain why matrix multiplication can represent many dot products at once.",

      sampleAnswer:
        "Each output entry is one row-column dot product, and the full product computes all compatible combinations simultaneously.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Checking whether complete matrix dimensions are equal.",

      correction:
        "For multiplication, only the inner dimensions must match.",
    },

    {
      mistake:
        "Using entrywise multiplication.",

      correction:
        "Standard matrix multiplication uses row-column dot products.",
    },

    {
      mistake:
        "Predicting the wrong output shape.",

      correction:
        "Use the outer dimensions of the two matrices.",
    },

    {
      mistake:
        "Assuming AB = BA.",

      correction:
        "Matrix multiplication is generally not commutative.",
    },

    {
      mistake:
        "Using a row from both matrices.",

      correction:
        "Use a row from the first matrix and a column from the second.",
    },

    {
      mistake:
        "Adding before multiplying component pairs.",

      correction:
        "Multiply corresponding row-column components first, then add.",
    },

    {
      mistake:
        "Ignoring real-world feature order.",

      correction:
        "The columns of the first matrix must correspond meaningfully to the rows of the second.",
    },
  ],

  discussionQuestions: [
    "Why are the inner dimensions required to match?",
    "Why do the outer dimensions determine the result shape?",
    "How is each matrix-product entry related to the dot product?",
    "Why is matrix multiplication not usually commutative?",
    "How does matrix-vector multiplication represent a transformation?",
    "Why is matrix multiplication central to AI?",
    "What could happen if dimensions match but feature meanings do not?",
  ],

  formativeAssessment: {
    totalPoints: 20,

    passingScore: 16,

    questions: [
      {
        id: "check-02-06-01",

        type: "dimensions",

        points: 3,

        prompt:
          "Can a 4 × 6 matrix multiply a 6 × 2 matrix? State the product dimensions.",

        answer:
          "Yes. The product is 4 × 2.",
      },

      {
        id: "check-02-06-02",

        type: "calculation",

        points: 5,

        prompt:
          "Calculate [[1, 2], [3, 4]] [[2, 0], [1, 5]].",

        answer: [
          [4, 10],
          [10, 20],
        ],
      },

      {
        id: "check-02-06-03",

        type: "matrix-vector",

        points: 4,

        prompt:
          "Calculate [[2, 3], [1, 4]] [[5], [2]].",

        answer: [
          [16],
          [13],
        ],
      },

      {
        id: "check-02-06-04",

        type: "concept",

        points: 4,

        prompt:
          "Explain why AB and BA may be different.",

        sampleAnswer:
          "The row-column combinations change when order changes, and the dimensions may also differ.",
      },

      {
        id: "check-02-06-05",

        type: "application",

        points: 4,

        prompt:
          "Explain how matrix multiplication is used in a neural-network layer.",

        sampleAnswer:
          "A batch input matrix multiplies a weight matrix to create weighted combinations of input features for every observation.",
      },
    ],
  },

  researchExtension: {
    title: "Matrix Multiplication in a Modern System",

    researchQuestion:
      "How does matrix multiplication transform information in one scientific or technological application?",

    applicationOptions: [
      "Neural networks",
      "Computer graphics",
      "Recommendation systems",
      "Robotics",
      "Economic input-output models",
      "Image processing",
      "Student-performance analytics",
    ],

    task:
      "Select one application and explain the meaning of both input matrices and the output matrix.",

    requiredEvidence: [
      "Application description",
      "Input matrix dimensions",
      "Meaning of rows and columns",
      "Compatibility explanation",
      "At least one calculated product entry",
      "Output interpretation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Explainable Matrix Multiplication Tool",

    description:
      "Create a visual or Python tool that explains every entry of a matrix product.",

    requiredFeatures: [
      "Dimension validation",
      "Output-shape prediction",
      "Row and column highlighting",
      "Step-by-step dot products",
      "Final matrix",
      "Comparison with NumPy",
      "Invalid-input handling",
    ],

    requiredEvidence: [
      "At least three multiplication examples",
      "One matrix-vector example",
      "One order-comparison example",
      "One AI or data application",
      "Tests",
      "Reflection",
    ],
  },

  reflection: [
    "How do you decide whether two matrices can multiply?",
    "What does one output entry represent?",
    "Why is matrix multiplication different from entrywise multiplication?",
    "Why does order matter?",
    "How does matrix multiplication create weighted combinations?",
    "Why is this operation foundational in AI?",
  ],

  summary: [
    "Matrix multiplication uses rows from the first matrix and columns from the second.",
    "The inner dimensions must match.",
    "The outer dimensions determine the product shape.",
    "Every output entry is a dot product.",
    "Matrix-vector multiplication creates a transformed vector.",
    "Matrix multiplication is associative and distributive.",
    "It is generally not commutative.",
    "A row vector times a column vector gives a dot product.",
    "A column vector times a row vector gives an outer product.",
    "Matrix multiplication powers data transformations, graphics, robotics, and AI.",
  ],

  previousLesson: {
    id: "la-m02-l05",
    slug: "matrix-transpose",
    title: "The Matrix Transpose",
  },

  nextLesson: {
    id: "la-m02-l07",
    slug: "matrix-composition",
    title: "Matrix Multiplication as Composition",
  },

  lumineryGuidance: {
    message:
      "Do not multiply matrices mechanically. First identify the input, transformation, and expected output.",

    prompt:
      "State the dimensions, predict the output shape, explain one row-column interaction, and then calculate.",
  },
};

export default lesson06;