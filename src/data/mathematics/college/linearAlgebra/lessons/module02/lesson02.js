const lesson02 = {
  id: "la-m02-l02",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 2,

  slug: "matrix-dimensions",

  title: "Matrix Dimensions, Rows, Columns, and Entries",

  subtitle:
    "Reading matrix structure accurately and interpreting the meaning of every position.",

  status: "Available",

  duration: "75–90 minutes",

  level: "Foundation",

  essentialQuestion:
    "How does the position of an entry inside a matrix communicate mathematical and real-world meaning?",

  bigIdea:
    "A matrix has a precise rectangular structure. Its dimensions describe its shape, while row and column positions determine the meaning of each entry.",

  problemFirst: {
    title: "Reading a Hospital Data Matrix",

    scenario:
      "A hospital stores patient measurements in a matrix. Each row represents one patient, while columns represent age, heart rate, blood pressure, and temperature. A doctor needs to retrieve one exact measurement without confusing patients or features.",

    matrix: [
      [45, 72, 120, 98.4],
      [63, 81, 135, 99.1],
      [29, 68, 116, 98.0],
    ],

    rowMeaning: "Patients",

    columnMeaning: [
      "Age",
      "Heart rate",
      "Blood pressure",
      "Temperature",
    ],

    questions: [
      "How many patients are represented?",
      "How many measurements are recorded for each patient?",
      "What are the dimensions of the matrix?",
      "What does the entry in row 2, column 3 mean?",
      "Why could reversing the row and column indices create a serious error?",
    ],

    expectedInsight:
      "The matrix is 3 × 4. The entry in row 2, column 3 is 135, representing the second patient’s blood pressure.",
  },

  learningObjectives: [
    "Determine matrix dimensions.",
    "Identify matrix rows and columns.",
    "Locate entries using row-column notation.",
    "Interpret the notation a_ij.",
    "Extract complete rows and columns.",
    "Calculate the number of entries in a matrix.",
    "Distinguish row matrices from column matrices.",
    "Interpret matrix positions in data and mathematical contexts.",
    "Use NumPy indexing and slicing to inspect matrices.",
  ],

  prerequisiteKnowledge: [
    "Definition of a matrix",
    "Tables",
    "Rows and columns",
    "Basic indexing",
    "Vectors",
  ],

  vocabulary: [
    {
      term: "Dimension",
      definition:
        "The shape of a matrix, written as number of rows × number of columns.",
    },
    {
      term: "Order of a Matrix",
      definition:
        "Another term for matrix dimensions.",
    },
    {
      term: "Entry",
      definition:
        "An individual value inside a matrix.",
    },
    {
      term: "Row Index",
      definition:
        "The first index in matrix-entry notation.",
    },
    {
      term: "Column Index",
      definition:
        "The second index in matrix-entry notation.",
    },
    {
      term: "Row Matrix",
      definition:
        "A matrix containing exactly one row.",
    },
    {
      term: "Column Matrix",
      definition:
        "A matrix containing exactly one column.",
    },
    {
      term: "Rectangular Matrix",
      definition:
        "A matrix whose number of rows and columns are different.",
    },
    {
      term: "Square Matrix",
      definition:
        "A matrix with the same number of rows and columns.",
    },
  ],

  coreRules: [
    {
      rule: "Dimensions are written rows × columns.",
      example:
        "A matrix with 3 rows and 5 columns is a 3 × 5 matrix.",
    },
    {
      rule: "The first index identifies the row.",
      example:
        "In a_24, the number 2 means row 2.",
    },
    {
      rule: "The second index identifies the column.",
      example:
        "In a_24, the number 4 means column 4.",
    },
    {
      rule: "Every row must have the same number of entries.",
      example:
        "A valid 3 × 2 matrix contains exactly two entries in every row.",
    },
    {
      rule: "The total number of entries is rows × columns.",
      example:
        "A 4 × 6 matrix contains 24 entries.",
    },
  ],

  formalDefinition: {
    statement:
      "An m × n matrix A contains m rows and n columns.",

    notation:
      "A = [a_ij]",

    indexMeaning:
      "The entry a_ij is found at the intersection of row i and column j.",

    validIndexRanges: [
      "1 ≤ i ≤ m",
      "1 ≤ j ≤ n",
    ],

    totalEntries:
      "An m × n matrix contains mn entries.",
  },

  exampleMatrix: {
    name: "A",

    values: [
      [2, 7, 4, 9],
      [5, 1, 8, 3],
      [6, 0, 2, 7],
    ],

    dimensions: "3 × 4",

    rowDescriptions: [
      {
        rowNumber: 1,
        notation: "Row 1",
        values: [2, 7, 4, 9],
      },
      {
        rowNumber: 2,
        notation: "Row 2",
        values: [5, 1, 8, 3],
      },
      {
        rowNumber: 3,
        notation: "Row 3",
        values: [6, 0, 2, 7],
      },
    ],

    columnDescriptions: [
      {
        columnNumber: 1,
        notation: "Column 1",
        values: [2, 5, 6],
      },
      {
        columnNumber: 2,
        notation: "Column 2",
        values: [7, 1, 0],
      },
      {
        columnNumber: 3,
        notation: "Column 3",
        values: [4, 8, 2],
      },
      {
        columnNumber: 4,
        notation: "Column 4",
        values: [9, 3, 7],
      },
    ],

    selectedEntries: [
      {
        notation: "a_11",
        value: 2,
        position: "Row 1, column 1",
      },
      {
        notation: "a_23",
        value: 8,
        position: "Row 2, column 3",
      },
      {
        notation: "a_34",
        value: 7,
        position: "Row 3, column 4",
      },
      {
        notation: "a_32",
        value: 0,
        position: "Row 3, column 2",
      },
    ],
  },

  matrixShapeTypes: [
    {
      type: "Row Matrix",
      dimensions: "1 × n",
      example: [[2, 5, 7]],
      explanation:
        "Contains one horizontal row.",
    },
    {
      type: "Column Matrix",
      dimensions: "m × 1",
      example: [[2], [5], [7]],
      explanation:
        "Contains one vertical column.",
    },
    {
      type: "Square Matrix",
      dimensions: "n × n",
      example: [
        [1, 2],
        [3, 4],
      ],
      explanation:
        "Contains the same number of rows and columns.",
    },
    {
      type: "Rectangular Matrix",
      dimensions: "m × n where m is not equal to n",
      example: [
        [1, 2, 3],
        [4, 5, 6],
      ],
      explanation:
        "The number of rows and columns are different.",
    },
  ],

  rowAndColumnMeaning: {
    title: "Rows and Columns Carry Meaning",

    explanation:
      "Matrix positions are not arbitrary. In an application, each row and column must correspond to a defined observation, feature, equation, variable, location, or relationship.",

    contexts: [
      {
        context: "Dataset",
        rowsRepresent: "Observations",
        columnsRepresent: "Features",
      },
      {
        context: "System of equations",
        rowsRepresent: "Equations",
        columnsRepresent: "Variable coefficients",
      },
      {
        context: "Image",
        rowsRepresent: "Vertical pixel positions",
        columnsRepresent: "Horizontal pixel positions",
      },
      {
        context: "Network",
        rowsRepresent: "Source nodes",
        columnsRepresent: "Destination nodes",
      },
      {
        context: "Transformation matrix",
        rowsRepresent: "Output coordinates",
        columnsRepresent: "Input coordinate contributions",
      },
    ],
  },

  workedExamples: [
    {
      id: "example-02-02-01",

      title: "Determine Matrix Dimensions",

      problem:
        "Determine the dimensions of A = [[3, 5, 7], [2, 4, 6], [1, 8, 9], [0, 3, 2]].",

      solutionSteps: [
        "Count the rows.",
        "There are 4 rows.",
        "Count the entries in each row.",
        "There are 3 columns.",
        "Write rows first and columns second.",
      ],

      answer: "4 × 3",
    },

    {
      id: "example-02-02-02",

      title: "Find a Matrix Entry",

      problem:
        "For B = [[6, 2, 9], [4, 7, 1], [8, 5, 3]], find b_23.",

      solutionSteps: [
        "The first index 2 identifies row 2.",
        "Row 2 is [4, 7, 1].",
        "The second index 3 identifies column 3.",
        "The third entry of row 2 is 1.",
      ],

      answer: "b_23 = 1",
    },

    {
      id: "example-02-02-03",

      title: "Compare Two Entries",

      problem:
        "For C = [[2, 8], [5, 4], [7, 1]], find c_12 and c_21.",

      solutionSteps: [
        "c_12 is row 1, column 2, so c_12 = 8.",
        "c_21 is row 2, column 1, so c_21 = 5.",
      ],

      answer:
        "c_12 = 8 and c_21 = 5",

      interpretation:
        "Switching the indices usually identifies a different entry.",
    },

    {
      id: "example-02-02-04",

      title: "Find the Number of Entries",

      problem:
        "How many entries are contained in a 7 × 5 matrix?",

      solutionSteps: [
        "Multiply the number of rows by the number of columns.",
        "7 × 5 = 35.",
      ],

      answer: "35 entries",
    },

    {
      id: "example-02-02-05",

      title: "Extract a Row",

      problem:
        "For D = [[4, 2, 8], [1, 9, 6], [7, 3, 5]], identify row 2.",

      solutionSteps: [
        "Locate the second horizontal sequence.",
      ],

      answer: "[1, 9, 6]",
    },

    {
      id: "example-02-02-06",

      title: "Extract a Column",

      problem:
        "For D = [[4, 2, 8], [1, 9, 6], [7, 3, 5]], identify column 3.",

      solutionSteps: [
        "Select the third entry from every row.",
        "The values are 8, 6, and 5.",
      ],

      answer: "[8, 6, 5]",
    },

    {
      id: "example-02-02-07",

      title: "Interpret a Dataset Entry",

      problem:
        "A data matrix has rows representing customers and columns [age, income, credit score]. What does the entry in row 4, column 2 represent?",

      solutionSteps: [
        "Row 4 identifies the fourth customer.",
        "Column 2 identifies income.",
      ],

      answer:
        "The fourth customer’s income.",
    },

    {
      id: "example-02-02-08",

      title: "Row Matrix vs. Column Matrix",

      problem:
        "Compare A = [[1, 2, 3]] and B = [[1], [2], [3]].",

      solutionSteps: [
        "A contains one row and three columns.",
        "B contains three rows and one column.",
      ],

      answer:
        "A is 1 × 3, while B is 3 × 1.",

      interpretation:
        "They contain the same values but have different shapes and mathematical behavior.",
    },
  ],

  dataInterpretationExample: {
    title: "Student Learning Matrix",

    matrix: [
      [90, 85, 6],
      [78, 81, 4],
      [95, 92, 8],
      [84, 79, 5],
    ],

    rowLabels: [
      "Student 1",
      "Student 2",
      "Student 3",
      "Student 4",
    ],

    columnLabels: [
      "Attendance percentage",
      "Assessment score",
      "Study hours",
    ],

    interpretationQuestions: [
      {
        question:
          "What does entry a_32 represent?",
        answer:
          "Student 3’s assessment score, which is 92.",
      },
      {
        question:
          "What does row 2 represent?",
        answer:
          "All recorded features for Student 2: [78, 81, 4].",
      },
      {
        question:
          "What does column 1 represent?",
        answer:
          "Attendance percentages for all four students.",
      },
    ],
  },

  aiConnection: {
    title: "Matrix Shape in Machine Learning",

    explanation:
      "Machine-learning code depends heavily on matrix shape. An input data matrix commonly uses rows for observations and columns for features.",

    example: {
      shape: "1000 × 20",
      meaning:
        "One thousand observations, each containing twenty features.",
    },

    batchExample: {
      inputShape: "32 × 128",
      meaning:
        "A batch of 32 observations, each represented by 128 features.",
    },

    importance: [
      "Matrix multiplication requires compatible dimensions.",
      "Model weights must align with the number of input features.",
      "Predictions often preserve the number of input rows.",
      "Incorrect dimensions commonly cause software errors.",
    ],

    warning:
      "A matrix can have the correct numerical shape but still be wrong if feature order or meaning is inconsistent.",
  },

  pythonLab: {
    title: "Matrix Indexing and Slicing with NumPy",

    objective:
      "Inspect dimensions and safely retrieve entries, rows, columns, and submatrices.",

    code: `import numpy as np

matrix = np.array([
    [2, 7, 4, 9],
    [5, 1, 8, 3],
    [6, 0, 2, 7]
])

print("Matrix:")
print(matrix)

rows, columns = matrix.shape

print("Rows:", rows)
print("Columns:", columns)
print("Total entries:", matrix.size)

print("Entry a_23:", matrix[1, 2])
print("Row 2:", matrix[1, :])
print("Column 3:", matrix[:, 2])

submatrix = matrix[0:2, 1:4]

print("Submatrix:")
print(submatrix)`,

    questions: [
      "Why does matrix[1, 2] correspond to mathematical entry a_23?",
      "What does matrix.size return?",
      "How do you retrieve the final row?",
      "How do you retrieve the first two columns?",
      "What are the dimensions of the selected submatrix?",
      "How does Python indexing differ from mathematical indexing?",
    ],

    extension:
      "Create a function named describe_matrix(matrix) that returns rows, columns, total entries, and whether the matrix is square.",
  },

  guidedPractice: [
    {
      id: "guided-02-02-01",
      question:
        "Determine the dimensions of [[1, 2, 3, 4], [5, 6, 7, 8]].",
      answer: "2 × 4",
    },
    {
      id: "guided-02-02-02",
      question:
        "For A = [[2, 5], [7, 9], [4, 1]], find a_31.",
      answer: "4",
    },
    {
      id: "guided-02-02-03",
      question:
        "How many entries are in a 6 × 8 matrix?",
      answer: "48",
    },
    {
      id: "guided-02-02-04",
      question:
        "Is a 5 × 5 matrix square or rectangular?",
      answer: "Square",
    },
    {
      id: "guided-02-02-05",
      question:
        "What is the shape of a column vector containing seven components?",
      answer: "7 × 1",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-02-01",
      difficulty: "Foundation",
      question:
        "Determine the dimensions of [[3, 2], [5, 4], [7, 6]].",
      answer: "3 × 2",
    },
    {
      id: "practice-02-02-02",
      difficulty: "Foundation",
      question:
        "For B = [[9, 1, 4], [6, 8, 2]], find b_13.",
      answer: "4",
    },
    {
      id: "practice-02-02-03",
      difficulty: "Foundation",
      question:
        "For B = [[9, 1, 4], [6, 8, 2]], find b_21.",
      answer: "6",
    },
    {
      id: "practice-02-02-04",
      difficulty: "Developing",
      question:
        "How many entries does a 12 × 9 matrix contain?",
      answer: "108",
    },
    {
      id: "practice-02-02-05",
      difficulty: "Developing",
      question:
        "Write the dimensions of a row matrix containing eight entries.",
      answer: "1 × 8",
    },
    {
      id: "practice-02-02-06",
      difficulty: "Developing",
      question:
        "Write the dimensions of a column matrix containing eight entries.",
      answer: "8 × 1",
    },
    {
      id: "practice-02-02-07",
      difficulty: "Challenge",
      question:
        "Explain why a 1 × 4 matrix and a 4 × 1 matrix cannot always be used interchangeably.",
      sampleAnswer:
        "They have different shapes and participate differently in matrix multiplication and transformations.",
    },
    {
      id: "practice-02-02-08",
      difficulty: "Challenge",
      question:
        "A matrix has 30 entries and 5 rows. How many columns does it have?",
      answer: "6 columns",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Writing columns before rows.",

      correction:
        "Always write dimensions as rows × columns.",
    },
    {
      mistake:
        "Reading a_ij as column i, row j.",

      correction:
        "The first index is the row, and the second is the column.",
    },
    {
      mistake:
        "Forgetting that Python begins indexing at zero.",

      correction:
        "Mathematical a_23 corresponds to Python matrix[1, 2].",
    },
    {
      mistake:
        "Treating row and column vectors as identical.",

      correction:
        "Their values may match, but their dimensions differ.",
    },
    {
      mistake:
        "Ignoring matrix shape in an application.",

      correction:
        "Shape determines how the matrix can interact with vectors and other matrices.",
    },
    {
      mistake:
        "Using an index outside the matrix dimensions.",

      correction:
        "Row indices must remain within the available rows, and column indices within the available columns.",
    },
  ],

  discussionQuestions: [
    "Why are matrix dimensions written rows first?",
    "Why does entry position matter?",
    "How does a row matrix differ from a column matrix?",
    "Why are shape errors common in machine learning?",
    "Can two matrices have the same dimensions but different meanings?",
    "What could one row represent in SkillBridge Academy learning data?",
  ],

  formativeAssessment: {
    totalPoints: 16,

    passingScore: 13,

    questions: [
      {
        id: "check-02-02-01",
        type: "dimensions",
        points: 3,
        prompt:
          "Determine the dimensions of [[1, 2], [3, 4], [5, 6], [7, 8]].",
        answer: "4 × 2",
      },
      {
        id: "check-02-02-02",
        type: "entry",
        points: 3,
        prompt:
          "For A = [[3, 7, 2], [8, 1, 5], [4, 9, 6]], find a_32.",
        answer: "9",
      },
      {
        id: "check-02-02-03",
        type: "total-entries",
        points: 3,
        prompt:
          "How many entries are in a 9 × 4 matrix?",
        answer: "36",
      },
      {
        id: "check-02-02-04",
        type: "classification",
        points: 3,
        prompt:
          "Classify a 1 × 6 matrix.",
        answer:
          "It is a row matrix and a rectangular matrix.",
      },
      {
        id: "check-02-02-05",
        type: "explanation",
        points: 4,
        prompt:
          "Explain why matrix dimensions are important in machine learning.",
        sampleAnswer:
          "The number of features, observations, weights, and outputs must align correctly for matrix operations.",
      },
    ],
  },

  researchExtension: {
    title: "Matrix Shape in a Real Dataset",

    researchQuestion:
      "How do rows, columns, and dimensions represent information in a real dataset?",

    task:
      "Select a small public or instructor-provided dataset and describe its matrix structure.",

    requiredEvidence: [
      "Dataset purpose",
      "Number of rows",
      "Number of columns",
      "Meaning of one row",
      "Meaning of each column",
      "Meaning of one selected entry",
      "Discussion of missing or categorical data",
    ],
  },

  portfolioArtifact: {
    title: "Matrix Anatomy Reference",

    description:
      "Create a visual reference showing matrix dimensions, rows, columns, entries, and indexing.",

    requiredSections: [
      "General m × n notation",
      "Labeled example matrix",
      "Selected entries",
      "Row and column extraction",
      "Row matrix",
      "Column matrix",
      "Square and rectangular matrices",
      "Python indexing comparison",
    ],

    requiredEvidence: [
      "At least one 3 × 4 matrix",
      "Clear labels",
      "Mathematical and Python indices",
      "A real-world interpretation",
      "Reflection",
    ],
  },

  reflection: [
    "What does matrix shape communicate?",
    "Why is a_23 different from a_32?",
    "What is the difference between mathematical and Python indexing?",
    "Why are row and column vectors different?",
    "How could incorrect matrix shape affect an AI model?",
  ],

  summary: [
    "Matrix dimensions are written rows × columns.",
    "An m × n matrix contains mn entries.",
    "The entry a_ij lies in row i and column j.",
    "Rows and columns can represent observations, features, equations, variables, or locations.",
    "A row matrix has shape 1 × n.",
    "A column matrix has shape m × 1.",
    "A square matrix has the same number of rows and columns.",
    "Matrix shape determines which operations are possible.",
    "Python uses zero-based indexing, while mathematical notation begins at one.",
  ],

  previousLesson: {
    id: "la-m02-l01",
    slug: "what-is-a-matrix",
    title: "What Is a Matrix?",
  },

  nextLesson: {
    id: "la-m02-l03",
    slug: "special-matrices",
    title: "Special Matrices",
  },

  lumineryGuidance: {
    message:
      "Matrix shape is part of the mathematics, not a formatting detail.",

    prompt:
      "Before every matrix operation, state the dimensions and identify what the rows, columns, and selected entries represent.",
  },
};

export default lesson02;