const lesson08 = {
  id: "la-m02-l08",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 8,

  slug: "matrices-in-ai",

  title: "Matrices in Data, Images, and Artificial Intelligence",

  subtitle:
    "Connecting matrix structure to datasets, digital images, neural networks, embeddings, and modern intelligent systems.",

  status: "Available",

  duration: "105–120 minutes",

  level: "Foundation",

  essentialQuestion:
    "How do matrices allow computers to represent and process large amounts of structured information?",

  bigIdea:
    "Matrices organize many related values into one structure. This makes it possible to process datasets, images, model weights, and batches of observations efficiently.",

  problemFirst: {
    title: "How Does an AI System See Data?",

    scenario:
      "A machine-learning system receives information about many students. Each student has attendance, study hours, assignment scores, and test scores. The system must process all students together and identify patterns.",

    studentData: [
      [92, 6, 88, 90],
      [78, 3, 72, 75],
      [95, 8, 94, 96],
      [84, 5, 81, 83],
    ],

    columnLabels: [
      "Attendance",
      "Weekly study hours",
      "Assignment score",
      "Test score",
    ],

    questions: [
      "What does each row represent?",
      "What does each column represent?",
      "Why is a matrix more useful than separate lists?",
      "How could a model transform four input features into two learned features?",
      "How can the same matrix idea represent an image?",
    ],

    expectedInsight:
      "A matrix lets the system process many observations and features at once. Matrix multiplication then transforms the data into new representations.",
  },

  learningObjectives: [
    "Interpret data matrices using rows and columns.",
    "Explain how grayscale and color images are represented using matrices.",
    "Describe batches of input vectors as matrices.",
    "Interpret a weight matrix in a neural-network layer.",
    "Predict output dimensions in an AI matrix calculation.",
    "Explain how matrix multiplication creates learned features.",
    "Connect matrices to embeddings, attention, and recommendations.",
    "Identify risks related to scaling, ordering, bias, and interpretation.",
    "Build a small matrix-based AI calculation using Python.",
  ],

  prerequisiteKnowledge: [
    "Matrix dimensions",
    "Rows, columns, and entries",
    "Matrix addition",
    "Matrix multiplication",
    "Transpose",
    "Vectors",
    "Feature vectors",
  ],

  vocabulary: [
    {
      term: "Data Matrix",
      definition:
        "A matrix in which rows commonly represent observations and columns represent features.",
    },
    {
      term: "Feature",
      definition:
        "A measurable property used to describe an observation.",
    },
    {
      term: "Observation",
      definition:
        "One row of data representing one object, person, event, or sample.",
    },
    {
      term: "Batch",
      definition:
        "A group of observations processed together.",
    },
    {
      term: "Pixel Matrix",
      definition:
        "A matrix whose entries represent pixel intensities or color values.",
    },
    {
      term: "Weight Matrix",
      definition:
        "A matrix of learned parameters used to transform input features.",
    },
    {
      term: "Embedding Matrix",
      definition:
        "A matrix containing vector representations of words, users, products, or other objects.",
    },
    {
      term: "Activation Matrix",
      definition:
        "The matrix of intermediate outputs produced by a neural-network layer.",
    },
    {
      term: "Similarity Matrix",
      definition:
        "A matrix whose entries measure similarity between pairs of objects.",
    },
  ],

  matrixRoles: [
    {
      role: "Data storage",
      description:
        "Organizes many observations and features in one rectangular structure.",
    },
    {
      role: "Transformation",
      description:
        "Maps input features into new coordinates or learned representations.",
    },
    {
      role: "Image representation",
      description:
        "Stores pixel intensities and color channels.",
    },
    {
      role: "Model parameters",
      description:
        "Stores learned weights inside neural networks.",
    },
    {
      role: "Similarity",
      description:
        "Stores relationships among documents, users, products, or embeddings.",
    },
    {
      role: "Batch processing",
      description:
        "Allows many observations to be transformed simultaneously.",
    },
  ],

  dataMatrixConcept: {
    title: "Rows as Observations, Columns as Features",

    matrix: [
      [45, 68000, 720, 0.28],
      [32, 51000, 690, 0.35],
      [54, 83000, 755, 0.22],
    ],

    rowLabels: [
      "Customer 1",
      "Customer 2",
      "Customer 3",
    ],

    columnLabels: [
      "Age",
      "Income",
      "Credit score",
      "Debt ratio",
    ],

    shape: "3 × 4",

    interpretation: [
      "There are three observations.",
      "Each observation contains four features.",
      "The entry in row 2, column 3 is Customer 2's credit score.",
      "Every row must use the same feature order.",
    ],

    warning:
      "A model will misinterpret the data if column order changes between training and prediction.",
  },

  imageMatrixConcept: {
    title: "Images as Matrices",

    grayscaleImage: {
      matrix: [
        [0, 40, 90],
        [120, 180, 220],
        [80, 140, 255],
      ],

      shape: "3 × 3",

      meaning:
        "Each entry stores one grayscale intensity.",

      intensityInterpretation: [
        {
          value: 0,
          meaning: "Black",
        },
        {
          value: 255,
          meaning: "White",
        },
        {
          value: "Between 0 and 255",
          meaning: "A shade of gray",
        },
      ],
    },

    colorImage: {
      structure:
        "A color image commonly uses three matrices or one three-dimensional array.",

      channels: [
        "Red",
        "Green",
        "Blue",
      ],

      examplePixel:
        "[255, 100, 20]",

      interpretation:
        "The three values describe red, green, and blue intensity for one pixel.",
    },

    aiConnection:
      "Computer-vision systems process image matrices through filtering, convolution, projection, and learned transformations.",
  },

  neuralLayerConcept: {
    title: "A Neural Layer as Matrix Multiplication",

    formula:
      "Z = XW + b",

    objects: [
      {
        symbol: "X",
        meaning:
          "Input matrix containing a batch of observations",
      },
      {
        symbol: "W",
        meaning:
          "Weight matrix containing learned parameters",
      },
      {
        symbol: "b",
        meaning:
          "Bias vector added to every output row",
      },
      {
        symbol: "Z",
        meaning:
          "Output matrix of transformed features",
      },
    ],

    shapeExample: {
      X: "4 × 3",
      W: "3 × 2",
      b: "1 × 2",
      Z: "4 × 2",
    },

    interpretation: [
      "Four observations are processed.",
      "Each observation contains three input features.",
      "The layer creates two output features.",
      "Each output entry is a weighted combination of the input features.",
    ],
  },

  embeddingConcept: {
    title: "Embedding Matrices",

    explanation:
      "An embedding matrix stores one vector representation for each item in a vocabulary, catalog, or dataset.",

    examples: [
      {
        application: "Language",
        rowsRepresent:
          "Words or tokens",
        columnsRepresent:
          "Embedding dimensions",
      },
      {
        application: "Recommendation systems",
        rowsRepresent:
          "Users or products",
        columnsRepresent:
          "Learned preference dimensions",
      },
      {
        application: "Image search",
        rowsRepresent:
          "Images",
        columnsRepresent:
          "Learned visual features",
      },
    ],

    sampleShape:
      "50,000 × 768",

    sampleInterpretation:
      "Fifty thousand items are each represented by a 768-dimensional vector.",
  },

  similarityMatrixConcept: {
    title: "Similarity Matrices",

    explanation:
      "A similarity matrix compares every object with every other object.",

    example: [
      [1.0, 0.8, 0.2],
      [0.8, 1.0, 0.4],
      [0.2, 0.4, 1.0],
    ],

    interpretation: [
      "Diagonal entries equal one because each object is identical to itself.",
      "The matrix is symmetric when pairwise similarity is symmetric.",
      "Larger off-diagonal values indicate greater similarity.",
    ],

    applications: [
      "Document search",
      "Recommendation systems",
      "Clustering",
      "Image retrieval",
      "Student similarity analysis",
    ],
  },

  workedExamples: [
    {
      id: "example-02-08-01",

      title: "Reading a Data Matrix",

      problem:
        "A matrix has shape 1200 × 25. Interpret its dimensions in a machine-learning context.",

      solutionSteps: [
        "The first dimension gives the number of rows.",
        "There are 1200 observations.",
        "The second dimension gives the number of columns.",
        "Each observation has 25 features.",
      ],

      answer:
        "The dataset contains 1200 observations and 25 features.",
    },

    {
      id: "example-02-08-02",

      title: "Image Dimensions",

      problem:
        "A grayscale image is represented by a 28 × 28 matrix. How many pixel values does it contain?",

      solutionSteps: [
        "Multiply rows by columns.",
        "28 × 28 = 784.",
      ],

      answer:
        "784 pixel values",
    },

    {
      id: "example-02-08-03",

      title: "Color Image Shape",

      problem:
        "A color image has height 64, width 64, and three color channels. Describe its common array shape.",

      solutionSteps: [
        "Use height, width, and channels.",
      ],

      answer:
        "64 × 64 × 3",
    },

    {
      id: "example-02-08-04",

      title: "Neural-Layer Dimensions",

      problem:
        "An input matrix X has shape 32 × 128, and a weight matrix W has shape 128 × 64. Find the shape of XW.",

      solutionSteps: [
        "The inner dimensions 128 and 128 match.",
        "Use the outer dimensions 32 and 64.",
      ],

      answer:
        "32 × 64",
    },

    {
      id: "example-02-08-05",

      title: "Manual Neural-Layer Calculation",

      problem:
        "Let x = [[2, 1, 3]], W = [[1, 0], [2, -1], [0, 4]], and b = [[1, 2]]. Calculate z = xW + b.",

      solutionSteps: [
        "First output before bias: 2(1) + 1(2) + 3(0) = 4.",
        "Second output before bias: 2(0) + 1(-1) + 3(4) = 11.",
        "Add bias [1, 2].",
      ],

      answer: [[5, 13]],
    },

    {
      id: "example-02-08-06",

      title: "Batch Processing",

      problem:
        "A batch contains 50 observations with 20 features. A layer creates 8 outputs. What are the shapes of X, W, and Z?",

      solutionSteps: [
        "X contains observations by features: 50 × 20.",
        "W maps 20 inputs to 8 outputs: 20 × 8.",
        "Z contains 50 observations by 8 outputs: 50 × 8.",
      ],

      answer: {
        X: "50 × 20",
        W: "20 × 8",
        Z: "50 × 8",
      },
    },

    {
      id: "example-02-08-07",

      title: "Feature-Order Error",

      problem:
        "A model was trained using columns [age, income, credit score], but prediction data uses [credit score, age, income]. Why is this a problem?",

      solutionSteps: [
        "Each weight corresponds to a specific feature position.",
        "The new order assigns values to the wrong learned weights.",
      ],

      answer:
        "The dimensions still match, but the model interprets every column incorrectly.",
    },

    {
      id: "example-02-08-08",

      title: "Image Brightness Scaling",

      problem:
        "A grayscale image matrix is [[40, 80], [120, 200]]. Multiply it by 0.5.",

      solutionSteps: [
        "Multiply every pixel value by 0.5.",
      ],

      answer: [
        [20, 40],
        [60, 100],
      ],

      interpretation:
        "The image becomes darker.",
    },

    {
      id: "example-02-08-09",

      title: "Similarity Matrix Interpretation",

      problem:
        "In a similarity matrix, entry s_23 = 0.92. What does it represent?",

      solutionSteps: [
        "Row 2 identifies object 2.",
        "Column 3 identifies object 3.",
      ],

      answer:
        "Objects 2 and 3 have similarity 0.92 under the selected similarity measure.",
    },
  ],

  dataQualityPrinciples: [
    {
      issue: "Inconsistent feature order",
      consequence:
        "Values are multiplied by the wrong model weights.",
    },
    {
      issue: "Different numerical scales",
      consequence:
        "Large-valued features may dominate calculations.",
    },
    {
      issue: "Missing values",
      consequence:
        "Operations may fail or produce misleading outputs.",
    },
    {
      issue: "Biased training data",
      consequence:
        "Matrix-based models may learn and reproduce unfair patterns.",
    },
    {
      issue: "Incorrect labels",
      consequence:
        "The model learns relationships from faulty targets.",
    },
    {
      issue: "Data leakage",
      consequence:
        "The model appears more accurate than it truly is.",
    },
  ],

  scalingAndPreprocessing: {
    title: "Why Feature Scale Matters",

    exampleVector:
      "[age = 40, income = 80000, credit score = 720]",

    concern:
      "Income has a much larger numerical scale than the other features.",

    possibleSolutions: [
      "Standardization",
      "Min-max scaling",
      "Normalization",
      "Logarithmic transformation",
      "Domain-specific preprocessing",
    ],

    keyInsight:
      "A matrix can be structurally correct while still requiring careful preprocessing.",
  },

  recommendationSystemConnection: {
    title: "User-Item Matrices",

    exampleMatrix: [
      [5, 0, 4, 0],
      [4, 3, 0, 1],
      [0, 5, 4, 2],
    ],

    rowsRepresent:
      "Users",

    columnsRepresent:
      "Products or movies",

    entriesRepresent:
      "Ratings, interactions, or preferences",

    challenge:
      "Many entries are missing because users interact with only a small number of items.",

    matrixMethods: [
      "Matrix factorization",
      "Low-rank approximation",
      "Embedding learning",
      "Similarity analysis",
    ],
  },

  attentionConnection: {
    title: "Matrices in Attention",

    explanation:
      "Modern language models transform token representations into query, key, and value matrices.",

    simplifiedSteps: [
      "Create a matrix of token embeddings.",
      "Multiply by learned weight matrices.",
      "Compare queries and keys.",
      "Convert comparison scores into attention weights.",
      "Use the weights to combine value vectors.",
    ],

    note:
      "The full attention mechanism is studied later, but its core computations depend heavily on matrix multiplication and transpose.",
  },

  realWorldApplications: [
    {
      field: "Education",
      application:
        "Student attendance, performance, engagement, and progress can be stored in data matrices.",
    },
    {
      field: "Finance",
      application:
        "Customer and transaction data are organized into feature matrices for risk modeling.",
    },
    {
      field: "Healthcare",
      application:
        "Patient measurements, medical images, and treatment data use matrices.",
    },
    {
      field: "Computer Vision",
      application:
        "Images and learned visual features are represented using matrices.",
    },
    {
      field: "Natural Language Processing",
      application:
        "Token embeddings and attention values are stored and processed as matrices.",
    },
    {
      field: "Recommendation Systems",
      application:
        "User-item interactions and learned embeddings use matrix representations.",
    },
    {
      field: "Robotics",
      application:
        "Sensor observations, coordinates, and transformations use matrices.",
    },
  ],

  aiConnection: {
    title: "Why AI Depends on Matrices",

    explanation:
      "AI systems must process large numbers of values quickly. Matrices allow modern hardware and software to calculate many weighted combinations in parallel.",

    coreUses: [
      "Input datasets",
      "Image pixels",
      "Embeddings",
      "Neural-network weights",
      "Activations",
      "Attention scores",
      "Similarity calculations",
      "Model updates",
    ],

    importantInsight:
      "AI is not powered by matrix multiplication alone. Good models also require appropriate data, objectives, architecture, evaluation, and ethical judgment.",

    ethicalQuestions: [
      "What information was included or excluded?",
      "Were the data collected fairly?",
      "Do the features represent people responsibly?",
      "Could the model disadvantage certain groups?",
      "Can the output be explained and challenged?",
    ],
  },

  pythonLab: {
    title: "Build a Small Matrix-Based AI Layer",

    objective:
      "Represent a batch of observations as a matrix and transform it with a weight matrix and bias vector.",

    code: `import numpy as np

inputs = np.array([
    [0.8, 6.0, 0.9],
    [0.6, 3.0, 0.7],
    [0.95, 8.0, 0.96]
], dtype=float)

weights = np.array([
    [0.5, -0.2],
    [0.1, 0.4],
    [0.7, 0.3]
], dtype=float)

bias = np.array([0.2, -0.1], dtype=float)

outputs = inputs @ weights + bias

print("Input shape:", inputs.shape)
print("Weight shape:", weights.shape)
print("Bias shape:", bias.shape)
print("Output shape:", outputs.shape)

print("Outputs:")
print(outputs)

first_manual_output = np.array([
    inputs[0] @ weights[:, 0] + bias[0],
    inputs[0] @ weights[:, 1] + bias[1]
])

print("First output calculated manually:")
print(first_manual_output)

print(
    "Manual calculation matches:",
    np.allclose(first_manual_output, outputs[0])
)`,

    questions: [
      "What does each input row represent?",
      "What does each input column represent?",
      "Why does the weight matrix have three rows?",
      "Why does the output contain two columns?",
      "How is the bias added to every row?",
      "What happens if the input feature order changes?",
    ],

    extension:
      "Add a ReLU activation function and compare the output before and after activation.",
  },

  secondPythonLab: {
    title: "Represent and Transform an Image Matrix",

    objective:
      "Create a small grayscale image matrix and apply scaling and threshold operations.",

    code: `import numpy as np
import matplotlib.pyplot as plt

image = np.array([
    [0, 40, 80, 120],
    [30, 70, 110, 150],
    [60, 100, 160, 210],
    [90, 140, 200, 255]
], dtype=float)

darker_image = 0.5 * image
threshold_image = np.where(image >= 128, 255, 0)

print("Image shape:", image.shape)
print("Original image:")
print(image)

plt.figure()
plt.imshow(image, cmap="gray", vmin=0, vmax=255)
plt.title("Original Image")
plt.axis("off")
plt.show()

plt.figure()
plt.imshow(darker_image, cmap="gray", vmin=0, vmax=255)
plt.title("Darker Image")
plt.axis("off")
plt.show()

plt.figure()
plt.imshow(threshold_image, cmap="gray", vmin=0, vmax=255)
plt.title("Threshold Image")
plt.axis("off")
plt.show()`,

    questions: [
      "What does each matrix entry represent?",
      "How does multiplying by 0.5 change the image?",
      "What does thresholding do?",
      "Why must pixel values remain within a valid range?",
      "How might a computer-vision model use this matrix?",
    ],
  },

  guidedPractice: [
    {
      id: "guided-02-08-01",

      question:
        "A matrix has shape 600 × 12. What do the dimensions commonly mean in a dataset?",

      answer:
        "There are 600 observations and 12 features.",
    },

    {
      id: "guided-02-08-02",

      question:
        "How many values are in a 32 × 32 grayscale image?",

      answer:
        "1024",
    },

    {
      id: "guided-02-08-03",

      question:
        "If X is 20 × 10 and W is 10 × 4, what is the shape of XW?",

      answer:
        "20 × 4",
    },

    {
      id: "guided-02-08-04",

      question:
        "What commonly does one row of an embedding matrix represent?",

      answer:
        "One object, token, product, image, or user represented as a vector.",
    },

    {
      id: "guided-02-08-05",

      question:
        "Why can a model fail even when matrix dimensions are correct?",

      answer:
        "The feature order, units, preprocessing, data quality, or meaning may be incorrect.",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-08-01",

      difficulty: "Foundation",

      question:
        "A dataset contains 5000 customers and 18 features. What is the matrix shape?",

      answer:
        "5000 × 18",
    },

    {
      id: "practice-02-08-02",

      difficulty: "Foundation",

      question:
        "A grayscale image is 100 pixels high and 200 pixels wide. What is its matrix shape?",

      answer:
        "100 × 200",
    },

    {
      id: "practice-02-08-03",

      difficulty: "Developing",

      question:
        "An input batch has shape 64 × 256, and a weight matrix has shape 256 × 32. Find the output shape.",

      answer:
        "64 × 32",
    },

    {
      id: "practice-02-08-04",

      difficulty: "Developing",

      question:
        "Explain why a color image is not completely represented by one simple two-dimensional intensity matrix.",

      sampleAnswer:
        "A color image requires multiple channels, commonly red, green, and blue, so it needs three matrices or a three-dimensional array.",
    },

    {
      id: "practice-02-08-05",

      difficulty: "Developing",

      question:
        "A model expects [attendance, study hours, test score]. Explain what happens if the input uses [test score, attendance, study hours].",

      answer:
        "Each value is multiplied by the wrong learned weight, so the prediction is not meaningful.",
    },

    {
      id: "practice-02-08-06",

      difficulty: "Developing",

      question:
        "Why is a similarity matrix often symmetric?",

      answer:
        "When the similarity measure is symmetric, similarity from object i to object j equals similarity from object j to object i.",
    },

    {
      id: "practice-02-08-07",

      difficulty: "Challenge",

      question:
        "Explain why matrices are efficient for processing batches of observations.",

      sampleAnswer:
        "One matrix operation computes many dot products and weighted combinations together, which can be accelerated by modern hardware.",
    },

    {
      id: "practice-02-08-08",

      difficulty: "Challenge",

      question:
        "Explain one ethical risk of representing a person as a feature vector.",

      sampleAnswer:
        "Important context may be excluded, and biased or incomplete features may lead to unfair conclusions.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Assuming rows always represent features.",

      correction:
        "The convention must be defined. Many datasets use rows for observations and columns for features.",
    },
    {
      mistake:
        "Ignoring feature order.",

      correction:
        "Feature columns must remain in the same order used during model training.",
    },
    {
      mistake:
        "Treating image matrices as ordinary tables without spatial meaning.",

      correction:
        "Row and column positions represent pixel locations.",
    },
    {
      mistake:
        "Assuming matrix multiplication alone creates intelligence.",

      correction:
        "Matrices support computation, but learning also depends on data, objectives, architecture, and evaluation.",
    },
    {
      mistake:
        "Ignoring numerical scale.",

      correction:
        "Features with different scales may require preprocessing.",
    },
    {
      mistake:
        "Believing correct dimensions guarantee correct results.",

      correction:
        "Dimensions can match while the semantics, order, or preprocessing are wrong.",
    },
    {
      mistake:
        "Assuming high similarity means factual accuracy.",

      correction:
        "Similarity measures closeness in a representation, not truth.",
    },
  ],

  discussionQuestions: [
    "Why are matrices useful for machine learning?",
    "How is an image different from a general data matrix?",
    "What does a weight matrix learn?",
    "Why can feature order be more important than matrix shape?",
    "How do embedding matrices represent meaning?",
    "What are the limitations of representing people as rows of numbers?",
    "How could matrices support SkillBridge Academy student learning analytics?",
    "What ethical safeguards should accompany educational prediction systems?",
  ],

  formativeAssessment: {
    totalPoints: 20,

    passingScore: 16,

    questions: [
      {
        id: "check-02-08-01",

        type: "data-shape",

        points: 3,

        prompt:
          "A dataset contains 2400 observations and 30 features. State its common matrix shape.",

        answer:
          "2400 × 30",
      },

      {
        id: "check-02-08-02",

        type: "image",

        points: 3,

        prompt:
          "How many entries are contained in a 64 × 64 grayscale image?",

        answer:
          "4096",
      },

      {
        id: "check-02-08-03",

        type: "neural-layer",

        points: 4,

        prompt:
          "If X is 16 × 100 and W is 100 × 20, find the shape of XW.",

        answer:
          "16 × 20",
      },

      {
        id: "check-02-08-04",

        type: "interpretation",

        points: 4,

        prompt:
          "Explain what one row and one column commonly represent in a data matrix.",

        sampleAnswer:
          "One row represents one observation, while one column represents one feature measured across observations.",
      },

      {
        id: "check-02-08-05",

        type: "ethics",

        points: 6,

        prompt:
          "Explain one technical and one ethical risk of using student data in an AI system.",

        sampleAnswer:
          "A technical risk is inconsistent scaling or missing data. An ethical risk is using biased features that unfairly classify students.",
      },
    ],
  },

  moduleSynthesis: {
    title: "Module 2 Matrix Foundations",

    concepts: [
      "Matrices organize values into rows and columns.",
      "Dimensions describe matrix shape.",
      "Special matrices reveal useful structure.",
      "Addition and subtraction combine matching entries.",
      "Scalar multiplication scales every entry.",
      "Transpose switches rows and columns.",
      "Matrix multiplication creates row-column weighted combinations.",
      "Composition combines sequential transformations.",
      "Matrices represent data, images, model weights, embeddings, and AI computations.",
    ],

    masteryChallenge: {
      title:
        "Explainable Matrix Intelligence Toolkit",

      requiredFeatures: [
        "Create and inspect matrices",
        "Classify special matrices",
        "Add and subtract matrices",
        "Scale matrices",
        "Transpose matrices",
        "Multiply compatible matrices",
        "Explain every product entry",
        "Build a composite transformation",
        "Process one image matrix",
        "Implement one neural-layer calculation",
      ],
    },
  },

  researchExtension: {
    title: "Matrices Inside an AI Application",

    researchQuestion:
      "How are matrices used to represent and transform information in one AI system?",

    applicationOptions: [
      "Credit-risk prediction",
      "Image recognition",
      "Semantic search",
      "Recommendation systems",
      "Student-support prediction",
      "Language models",
      "Medical imaging",
    ],

    task:
      "Select one application and identify at least three important matrices.",

    requiredEvidence: [
      "Application description",
      "At least three matrices",
      "Dimensions of each matrix",
      "Meaning of rows and columns",
      "At least one matrix multiplication",
      "Output interpretation",
      "One limitation or ethical concern",
      "Two credible sources",
    ],
  },

  portfolioArtifact: {
    title: "Matrices in AI Case Study",

    description:
      "Create a professional case study showing how matrices move from raw data to an AI output.",

    requiredSections: [
      "Problem definition",
      "Input data matrix",
      "Feature definitions",
      "Weight or transformation matrix",
      "Dimension checks",
      "Matrix multiplication",
      "Output matrix",
      "Visualization",
      "Limitations",
      "Ethical reflection",
    ],

    requiredEvidence: [
      "Worked numerical example",
      "Python implementation",
      "Shape table",
      "At least one image or diagram",
      "Testing",
      "Professional README",
    ],
  },

  reflection: [
    "How do matrices help computers process many observations?",
    "What is the relationship between a data matrix and a weight matrix?",
    "How are images represented mathematically?",
    "Why do feature order and scaling matter?",
    "What role do matrices play in neural networks?",
    "What ethical concerns arise when people are represented as feature vectors?",
    "Which Module 2 concept was most important?",
  ],

  summary: [
    "Data matrices commonly use rows for observations and columns for features.",
    "Images can be represented using pixel matrices.",
    "Color images require multiple channels.",
    "A batch of vectors can be processed as one matrix.",
    "Neural-network layers use Z = XW + b.",
    "Weight matrices transform input features into output features.",
    "Embedding matrices store vector representations of objects.",
    "Similarity matrices store pairwise relationships.",
    "Matrix dimensions must align, but meaning and feature order must also align.",
    "Data quality, scaling, fairness, and context are essential in responsible AI.",
  ],

  previousLesson: {
    id: "la-m02-l07",
    slug: "matrix-composition",
    title: "Matrix Multiplication as Composition",
  },

  nextModule: {
    id: "module-03",
    slug: "systems-of-linear-equations",
    title: "Systems of Linear Equations",
  },

  lumineryGuidance: {
    message:
      "Matrices make large-scale AI computation possible, but numbers do not explain themselves.",

    prompt:
      "For every matrix, identify its shape, row meaning, column meaning, transformation role, and possible limitation before trusting the output.",
  },
};

export default lesson08;