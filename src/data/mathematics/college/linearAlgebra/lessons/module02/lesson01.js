const lesson01 = {
  id: "la-m02-l01",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 1,

  slug: "what-is-a-matrix",

  title: "What Is a Matrix?",

  subtitle:
    "Organizing data, equations, relationships, images, and transformations using rows and columns.",

  status: "Available",

  duration: "75–90 minutes",

  level: "Foundation",

  essentialQuestion:
    "Why do mathematics, data science, engineering, and artificial intelligence use matrices to organize and transform information?",

  bigIdea:
    "A matrix is a rectangular arrangement of values organized into rows and columns. It can represent data, equations, images, networks, transformations, and model parameters.",

  problemFirst: {
    title: "Organizing Student Performance Data",

    scenario:
      "A school records mathematics, science, and programming scores for four students. Writing every score separately makes comparison difficult. We need a structure that keeps students and subjects organized.",

    data: [
      {
        student: "Student A",
        mathematics: 88,
        science: 84,
        programming: 91,
      },
      {
        student: "Student B",
        mathematics: 76,
        science: 82,
        programming: 79,
      },
      {
        student: "Student C",
        mathematics: 93,
        science: 89,
        programming: 95,
      },
      {
        student: "Student D",
        mathematics: 81,
        science: 78,
        programming: 86,
      },
    ],

    questions: [
      "How can all twelve scores be stored in one mathematical object?",
      "What should each row represent?",
      "What should each column represent?",
      "Why must the row and column order remain consistent?",
      "How could a computer use this structure?",
    ],

    expectedInsight:
      "The values can be organized in a 4 × 3 matrix, where rows represent students and columns represent subjects.",
  },

  learningObjectives: [
    "Define a matrix.",
    "Identify rows, columns, entries, and dimensions.",
    "Read and write matrices using mathematical notation.",
    "Explain what matrix rows and columns represent.",
    "Interpret matrices in several real-world contexts.",
    "Distinguish matrices from scalars and vectors.",
    "Represent simple datasets and systems using matrices.",
    "Create and inspect matrices using Python and NumPy.",
  ],

  prerequisiteKnowledge: [
    "Scalars",
    "Vectors",
    "Ordered components",
    "Tables",
    "Basic algebra",
  ],

  vocabulary: [
    {
      term: "Matrix",
      definition:
        "A rectangular arrangement of values organized into rows and columns.",
    },
    {
      term: "Entry",
      definition:
        "One individual value inside a matrix.",
    },
    {
      term: "Row",
      definition:
        "A horizontal sequence of matrix entries.",
    },
    {
      term: "Column",
      definition:
        "A vertical sequence of matrix entries.",
    },
    {
      term: "Dimensions",
      definition:
        "The number of rows and columns in a matrix, written rows × columns.",
    },
    {
      term: "Coefficient Matrix",
      definition:
        "A matrix containing the coefficients of variables in a system of equations.",
    },
    {
      term: "Data Matrix",
      definition:
        "A matrix in which rows usually represent observations and columns represent features.",
    },
    {
      term: "Pixel Matrix",
      definition:
        "A matrix whose entries represent image pixel intensities or color values.",
    },
  ],

  historicalContext: {
    title: "From Equation Tables to Modern Computing",

    summary:
      "Matrix-like arrangements appeared in ancient methods for solving systems of equations. Modern matrix notation developed later and became essential in algebra, physics, engineering, statistics, computing, and artificial intelligence.",

    timeline: [
      {
        period: "Ancient mathematics",
        contribution:
          "Rectangular arrays were used to organize coefficients when solving systems of equations.",
      },
      {
        period: "19th century",
        contribution:
          "Matrices became formal mathematical objects with their own algebraic operations.",
      },
      {
        period: "20th century",
        contribution:
          "Matrices became central to physics, engineering, statistics, and computer graphics.",
      },
      {
        period: "Modern AI",
        contribution:
          "Datasets, images, embeddings, neural-network weights, and model computations are represented using matrices and higher-dimensional arrays.",
      },
    ],
  },

  formalDefinition: {
    statement:
      "An m × n matrix is a rectangular array containing m rows and n columns.",

    notation:
      "A = [a_ij]",

    generalForm: `A = [
  [a11, a12, ..., a1n],
  [a21, a22, ..., a2n],
  ...
  [am1, am2, ..., amn]
]`,

    interpretation:
      "The symbol a_ij represents the entry located in row i and column j.",

    dimensionNotation:
      "A ∈ R^(m × n)",

    dimensionMeaning:
      "The matrix A contains m rows and n columns of real-number entries.",
  },

  scalarVectorMatrixComparison: [
    {
      object: "Scalar",
      example: "5",
      structure: "One value",
      possibleMeaning: "One temperature, score, or weight",
    },
    {
      object: "Vector",
      example: "[5, 2, -1]",
      structure: "One ordered list",
      possibleMeaning: "One observation containing three features",
    },
    {
      object: "Matrix",
      example: "[[5, 2, -1], [3, 4, 7]]",
      structure: "Several rows and columns",
      possibleMeaning:
        "Two observations, each containing three features",
    },
  ],

  anatomyOfAMatrix: {
    exampleMatrix: [
      [4, 7, 2],
      [1, 5, 9],
    ],

    dimensions: "2 × 3",

    rows: [
      {
        rowNumber: 1,
        values: [4, 7, 2],
      },
      {
        rowNumber: 2,
        values: [1, 5, 9],
      },
    ],

    columns: [
      {
        columnNumber: 1,
        values: [4, 1],
      },
      {
        columnNumber: 2,
        values: [7, 5],
      },
      {
        columnNumber: 3,
        values: [2, 9],
      },
    ],

    selectedEntries: [
      {
        notation: "a11",
        value: 4,
        explanation: "Row 1, column 1",
      },
      {
        notation: "a23",
        value: 9,
        explanation: "Row 2, column 3",
      },
      {
        notation: "a12",
        value: 7,
        explanation: "Row 1, column 2",
      },
    ],
  },

  matrixRepresentations: [
    {
      context: "Student Data",
      matrix: [
        [88, 84, 91],
        [76, 82, 79],
        [93, 89, 95],
        [81, 78, 86],
      ],
      rowsRepresent: "Students",
      columnsRepresent:
        "Mathematics, science, and programming scores",
    },
    {
      context: "Linear Equations",
      matrix: [
        [2, 3],
        [4, -1],
      ],
      rowsRepresent: "Equations",
      columnsRepresent: "Variable coefficients",
    },
    {
      context: "Grayscale Image",
      matrix: [
        [0, 50, 100],
        [150, 200, 255],
        [80, 120, 170],
      ],
      rowsRepresent: "Pixel rows",
      columnsRepresent: "Pixel columns",
    },
    {
      context: "Network Connections",
      matrix: [
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
      ],
      rowsRepresent: "Starting nodes",
      columnsRepresent: "Ending nodes",
    },
  ],

  workedExamples: [
    {
      id: "example-02-01-01",

      title: "Finding Matrix Dimensions",

      problem:
        "Determine the dimensions of A = [[2, 5, 1], [4, 0, 7]].",

      solutionSteps: [
        "Count the horizontal rows.",
        "There are 2 rows.",
        "Count the entries in each row.",
        "There are 3 columns.",
        "Write rows first, then columns.",
      ],

      answer: "A is a 2 × 3 matrix.",
    },

    {
      id: "example-02-01-02",

      title: "Identifying an Entry",

      problem:
        "For B = [[3, 8], [1, 6], [4, 9]], find b32.",

      solutionSteps: [
        "The first index gives the row.",
        "The second index gives the column.",
        "Go to row 3: [4, 9].",
        "Select column 2.",
      ],

      answer: "b32 = 9",
    },

    {
      id: "example-02-01-03",

      title: "Reading a Data Matrix",

      problem:
        "A matrix contains three students and two test scores: [[80, 85], [72, 90], [88, 91]]. What does the entry in row 2, column 1 represent?",

      solutionSteps: [
        "Rows represent students.",
        "Columns represent tests.",
        "Row 2 identifies the second student.",
        "Column 1 identifies the first test.",
      ],

      answer:
        "The second student scored 72 on the first test.",
    },

    {
      id: "example-02-01-04",

      title: "Creating a Matrix from a Table",

      problem:
        "Two products have prices and quantities: Product A has price 12 and quantity 5. Product B has price 8 and quantity 9. Represent the information as a matrix using columns [price, quantity].",

      solutionSteps: [
        "Use one row for each product.",
        "Use the first column for price.",
        "Use the second column for quantity.",
        "Keep the order consistent.",
      ],

      answer: [
        [12, 5],
        [8, 9],
      ],
    },

    {
      id: "example-02-01-05",

      title: "Representing a Grayscale Image",

      problem:
        "A 2 × 2 grayscale image has pixel intensities 0, 100, 180, and 255 arranged row by row. Write the image matrix.",

      solutionSteps: [
        "Place the first two values in row 1.",
        "Place the next two values in row 2.",
      ],

      answer: [
        [0, 100],
        [180, 255],
      ],

      interpretation:
        "Smaller values are darker, and larger values are brighter.",
    },

    {
      id: "example-02-01-06",

      title: "Coefficient Matrix",

      problem:
        "Write the coefficient matrix for the system 2x + 3y = 7 and 4x - y = 5.",

      solutionSteps: [
        "Use one row for each equation.",
        "Use the first column for x-coefficients.",
        "Use the second column for y-coefficients.",
        "The first row is [2, 3].",
        "The second row is [4, -1].",
      ],

      answer: [
        [2, 3],
        [4, -1],
      ],
    },
  ],

  matrixMeaningDependsOnContext: {
    title: "The Same Numbers Can Have Different Meanings",

    explanation:
      "A matrix is a mathematical structure. Its meaning depends on how rows, columns, units, and entries are defined.",

    examples: [
      {
        matrix: [
          [1, 0],
          [0, 1],
        ],
        possibleMeaning:
          "An identity transformation",
      },
      {
        matrix: [
          [1, 0],
          [0, 1],
        ],
        possibleMeaning:
          "A two-person, two-feature dataset",
      },
      {
        matrix: [
          [1, 0],
          [0, 1],
        ],
        possibleMeaning:
          "A network connection matrix",
      },
    ],

    principle:
      "Always identify what rows, columns, and entries represent before performing calculations.",
  },

  realWorldApplications: [
    {
      field: "Data Science",
      application:
        "Datasets are often organized with observations as rows and features as columns.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Neural-network weights and batches of inputs are stored as matrices.",
    },
    {
      field: "Computer Vision",
      application:
        "Images are represented as matrices of pixel values.",
    },
    {
      field: "Robotics",
      application:
        "Matrices represent coordinate transformations, sensor data, and motion systems.",
    },
    {
      field: "Finance",
      application:
        "Returns, prices, risks, and portfolio relationships can be organized in matrices.",
    },
    {
      field: "Networks",
      application:
        "Adjacency matrices represent connections among nodes.",
    },
    {
      field: "Education",
      application:
        "Student performance, attendance, and learning behaviors can be stored in data matrices.",
    },
  ],

  aiConnection: {
    title: "Matrices as the Working Language of AI",

    explanation:
      "Artificial-intelligence systems process many observations simultaneously. A group of input vectors can be stacked as rows of a matrix. Neural-network parameters are also stored in matrices.",

    example: {
      inputMatrix: [
        [0.2, 1.5, -0.4],
        [1.1, 0.3, 2.0],
      ],
      rowsRepresent: "Two observations",
      columnsRepresent: "Three input features",
    },

    neuralNetworkConnection:
      "A neural layer multiplies an input matrix by a weight matrix to produce a new matrix of learned representations.",

    caution:
      "The matrix values are meaningful only when feature definitions, ordering, units, and preprocessing are consistent.",
  },

  pythonLab: {
    title: "Creating and Inspecting Matrices with NumPy",

    objective:
      "Create matrices, inspect their shape, retrieve entries, rows, and columns, and connect the results to matrix notation.",

    code: `import numpy as np

student_scores = np.array([
    [88, 84, 91],
    [76, 82, 79],
    [93, 89, 95],
    [81, 78, 86]
])

print("Matrix:")
print(student_scores)

print("Shape:", student_scores.shape)
print("Number of rows:", student_scores.shape[0])
print("Number of columns:", student_scores.shape[1])

print("Entry in row 2, column 3:", student_scores[1, 2])
print("First row:", student_scores[0, :])
print("Second column:", student_scores[:, 1])

print("Data type:", student_scores.dtype)`,

    questions: [
      "Why does Python use index 0 for the first row?",
      "What does student_scores.shape return?",
      "How do you select the third row?",
      "How do you select the first column?",
      "What does student_scores[1, 2] mean mathematically?",
      "Why must every row contain the same number of entries?",
    ],

    extension:
      "Create a matrix representing five students and four features: attendance, homework score, test score, and weekly study hours.",
  },

  guidedPractice: [
    {
      id: "guided-02-01-01",
      question:
        "What are the dimensions of [[1, 2], [3, 4], [5, 6]]?",
      answer: "3 × 2",
    },
    {
      id: "guided-02-01-02",
      question:
        "For A = [[4, 7, 2], [1, 5, 9]], find a23.",
      answer: "9",
    },
    {
      id: "guided-02-01-03",
      question:
        "How many entries are in a 4 × 6 matrix?",
      answer: "24",
    },
    {
      id: "guided-02-01-04",
      question:
        "Write a 2 × 2 matrix containing the values 3, 5, 7, and 9 row by row.",
      answer: [
        [3, 5],
        [7, 9],
      ],
    },
    {
      id: "guided-02-01-05",
      question:
        "In a data matrix, what commonly represents observations and features?",
      answer:
        "Rows commonly represent observations, and columns commonly represent features.",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-01-01",
      difficulty: "Foundation",
      question:
        "Determine the dimensions of [[2, 4, 6, 8]].",
      answer: "1 × 4",
    },
    {
      id: "practice-02-01-02",
      difficulty: "Foundation",
      question:
        "Determine the dimensions of [[1], [3], [5], [7]].",
      answer: "4 × 1",
    },
    {
      id: "practice-02-01-03",
      difficulty: "Foundation",
      question:
        "For B = [[5, 1, 7], [2, 8, 4], [9, 3, 6]], find b21.",
      answer: "2",
    },
    {
      id: "practice-02-01-04",
      difficulty: "Developing",
      question:
        "A matrix has 5 rows and 7 columns. How many entries does it contain?",
      answer: "35",
    },
    {
      id: "practice-02-01-05",
      difficulty: "Developing",
      question:
        "Create a matrix for three products using columns [price, quantity, rating].",
      sampleAnswer: [
        [12, 5, 4.7],
        [8, 9, 4.2],
        [20, 3, 4.9],
      ],
    },
    {
      id: "practice-02-01-06",
      difficulty: "Developing",
      question:
        "Write the coefficient matrix for 3x - 2y = 4 and x + 5y = 9.",
      answer: [
        [3, -2],
        [1, 5],
      ],
    },
    {
      id: "practice-02-01-07",
      difficulty: "Challenge",
      question:
        "Explain why a matrix without row and column labels may be difficult to interpret.",
      sampleAnswer:
        "The numerical structure is visible, but the real-world meaning, units, and component order are unknown.",
    },
    {
      id: "practice-02-01-08",
      difficulty: "Challenge",
      question:
        "Explain how a matrix differs from a spreadsheet.",
      sampleAnswer:
        "A matrix is a mathematical object with defined operations. A spreadsheet is a broader software structure that may contain labels, formulas, text, formatting, and multiple data types.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Writing dimensions as columns × rows.",

      correction:
        "Matrix dimensions are always written rows × columns.",
    },
    {
      mistake:
        "Confusing a23 with a32.",

      correction:
        "The first index gives the row, and the second gives the column.",
    },
    {
      mistake:
        "Using rows with different lengths.",

      correction:
        "Every row of a matrix must contain the same number of columns.",
    },
    {
      mistake:
        "Ignoring row and column meaning.",

      correction:
        "Always define what each row and column represents.",
    },
    {
      mistake:
        "Assuming every table is automatically a matrix.",

      correction:
        "A mathematical matrix requires a rectangular structure of compatible entries.",
    },
    {
      mistake:
        "Confusing a one-row matrix with a column vector.",

      correction:
        "A 1 × n row matrix and an n × 1 column matrix have different shapes.",
    },
  ],

  discussionQuestions: [
    "Why are matrices useful for representing datasets?",
    "Can the same matrix have different meanings in different contexts?",
    "Why is shape important in matrix computation?",
    "How is an image represented as a matrix?",
    "How are vectors related to matrices?",
    "What information is lost when row and column labels are removed?",
    "Why are matrices central to modern AI?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-02-01-01",
        type: "multiple-choice",
        points: 2,
        prompt:
          "What are the dimensions of [[1, 2, 3], [4, 5, 6]]?",
        options: [
          "2 × 3",
          "3 × 2",
          "2 × 2",
          "3 × 3",
        ],
        answer: "2 × 3",
      },
      {
        id: "check-02-01-02",
        type: "entry-identification",
        points: 3,
        prompt:
          "For A = [[4, 8], [1, 6], [5, 9]], find a32.",
        answer: "9",
      },
      {
        id: "check-02-01-03",
        type: "representation",
        points: 3,
        prompt:
          "Create a matrix for two students with mathematics and science scores [85, 90] and [78, 82].",
        answer: [
          [85, 90],
          [78, 82],
        ],
      },
      {
        id: "check-02-01-04",
        type: "explanation",
        points: 3,
        prompt:
          "Explain why component order matters in a data matrix.",
        sampleAnswer:
          "Each column corresponds to a defined feature, so changing the order changes the meaning of the values.",
      },
      {
        id: "check-02-01-05",
        type: "application",
        points: 4,
        prompt:
          "Explain how an image can be represented as a matrix.",
        sampleAnswer:
          "Rows and columns identify pixel locations, while matrix entries store pixel intensity or color information.",
      },
    ],
  },

  researchExtension: {
    title: "Matrices in a Modern Technology",

    researchQuestion:
      "How does one modern technology use matrices to represent or process information?",

    applicationOptions: [
      "Digital images",
      "Recommendation systems",
      "Robotics",
      "Neural networks",
      "Social networks",
      "Medical imaging",
      "Financial modeling",
    ],

    task:
      "Select one application and explain what the rows, columns, and entries represent.",

    requiredEvidence: [
      "Application description",
      "Example matrix",
      "Row interpretation",
      "Column interpretation",
      "Entry interpretation",
      "One mathematical or computational operation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Matrix Representation Gallery",

    description:
      "Create a visual portfolio page showing how matrices represent several different systems.",

    requiredExamples: [
      "A data matrix",
      "A coefficient matrix",
      "An image matrix",
      "A network or transformation matrix",
    ],

    requiredEvidence: [
      "Matrix dimensions",
      "Row labels",
      "Column labels",
      "Entry explanations",
      "One Python example",
      "Reflection",
    ],
  },

  reflection: [
    "How is a matrix different from a vector?",
    "What does matrix shape tell you?",
    "Why must row and column meanings remain consistent?",
    "Which real-world matrix application was most interesting?",
    "How might matrices support SkillBridge Academy learning analytics?",
    "What question do you still have about matrices?",
  ],

  summary: [
    "A matrix is a rectangular arrangement of values.",
    "Matrices contain rows, columns, and entries.",
    "Matrix dimensions are written rows × columns.",
    "The entry a_ij is located in row i and column j.",
    "Rows and columns must have clearly defined meanings.",
    "Vectors can be treated as one-row or one-column matrices.",
    "Matrices represent datasets, systems, images, networks, transformations, and AI parameters.",
    "Matrix interpretation depends on context, labels, units, and ordering.",
  ],

  previousModule: {
    id: "module-01",
    slug: "vectors",
    title: "Vectors and Geometric Foundations",
  },

  nextLesson: {
    id: "la-m02-l02",
    slug: "matrix-dimensions",
    title: "Matrix Dimensions, Rows, Columns, and Entries",
  },

  lumineryGuidance: {
    message:
      "Before calculating with a matrix, identify its shape and explain what every row, column, and entry represents.",

    prompt:
      "Read the matrix as a structured system, not merely as a collection of numbers.",
  },
};

export default lesson01;