const lesson03 = {
  id: "la-m01-l03",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 3,

  slug: "vector-components",

  title: "Vector Components and Coordinate Representation",

  subtitle:
    "Describing vectors through ordered components in two, three, and higher dimensions.",

  status: "Available",

  duration: "90 minutes",

  level: "Foundation",

  essentialQuestion:
    "How do vector components describe direction, position, movement, and data?",

  bigIdea:
    "A vector is represented by ordered components, and each component describes the vector’s contribution in one coordinate direction or feature dimension.",

  problemFirst: {
    title: "Locating a Drone in Space",

    scenario:
      "A drone is located 4 meters east, 3 meters north, and 2 meters above its starting point. A two-dimensional vector cannot fully describe this position because height adds a third independent direction.",

    questions: [
      "How many components are needed to represent the drone’s position?",
      "What does each component mean?",
      "Why must the components be written in a fixed order?",
      "What would happen if the order were changed?",
    ],

    expectedInsight:
      "The drone requires a three-component vector such as [4, 3, 2], where each component has a defined meaning and position.",
  },

  learningObjectives: [
    "Identify the components of a vector.",
    "Represent vectors in two and three dimensions.",
    "Interpret positive, negative, and zero components.",
    "Explain why component order matters.",
    "Convert between geometric and coordinate representations.",
    "Find a displacement vector from two points.",
    "Represent non-geometric data using feature vectors.",
    "Distinguish position vectors from displacement vectors.",
  ],

  prerequisiteKnowledge: [
    "Coordinate plane",
    "Positive and negative numbers",
    "Scalars and vectors",
    "Ordered pairs",
    "Basic subtraction",
  ],

  vocabulary: [
    {
      term: "Component",
      definition:
        "One numerical entry of a vector representing one coordinate, direction, or feature.",
    },
    {
      term: "Coordinate Vector",
      definition:
        "A vector written using an ordered list of numerical components.",
    },
    {
      term: "Dimension",
      definition:
        "The number of components required to represent a vector.",
    },
    {
      term: "Position Vector",
      definition:
        "A vector from the origin to a point.",
    },
    {
      term: "Displacement Vector",
      definition:
        "A vector describing the change from one position to another.",
    },
    {
      term: "Standard Basis",
      definition:
        "The coordinate directions used to describe vectors, such as the x-, y-, and z-directions.",
    },
    {
      term: "Feature Vector",
      definition:
        "An ordered list of measurements or characteristics describing one observation.",
    },
  ],

  coordinateConventions: {
    title: "Standard Coordinate Directions",

    twoDimensional: [
      {
        component: "First component",
        direction: "Horizontal or x-direction",
        positiveMeaning: "Right or east",
        negativeMeaning: "Left or west",
      },
      {
        component: "Second component",
        direction: "Vertical or y-direction",
        positiveMeaning: "Up or north",
        negativeMeaning: "Down or south",
      },
    ],

    threeDimensional: [
      {
        component: "First component",
        direction: "x-direction",
      },
      {
        component: "Second component",
        direction: "y-direction",
      },
      {
        component: "Third component",
        direction: "z-direction",
      },
    ],

    note:
      "The coordinate convention may vary by field, but the order must always be clearly defined and used consistently.",
  },

  formalDefinition: {
    statement:
      "An n-dimensional vector is an ordered list of n numerical components.",

    notation:
      "v = [v1, v2, ..., vn]",

    dimensionRule:
      "The number of components determines the dimension of the vector.",

    examples: [
      {
        vector: "[5, -2]",
        dimension: 2,
        interpretation:
          "Five units in the first coordinate direction and negative two units in the second direction.",
      },
      {
        vector: "[3, 1, 7]",
        dimension: 3,
        interpretation:
          "A vector with three independent components.",
      },
      {
        vector: "[25, 52000, 710, 0.32]",
        dimension: 4,
        interpretation:
          "A feature vector with four ordered measurements.",
      },
    ],
  },

  standardBasis: {
    title: "Building a Vector from Coordinate Directions",

    twoDimensions: {
      basisVectors: [
        {
          symbol: "e1",
          vector: "[1, 0]",
          meaning: "One unit in the x-direction",
        },
        {
          symbol: "e2",
          vector: "[0, 1]",
          meaning: "One unit in the y-direction",
        },
      ],

      decomposition:
        "[a, b] = a[1, 0] + b[0, 1]",

      interpretation:
        "Every two-dimensional vector is built by combining horizontal and vertical directions.",
    },

    threeDimensions: {
      basisVectors: [
        {
          symbol: "e1",
          vector: "[1, 0, 0]",
        },
        {
          symbol: "e2",
          vector: "[0, 1, 0]",
        },
        {
          symbol: "e3",
          vector: "[0, 0, 1]",
        },
      ],

      decomposition:
        "[a, b, c] = a[1, 0, 0] + b[0, 1, 0] + c[0, 0, 1]",
    },
  },

  geometricInterpretation: {
    title: "Vectors as Arrows",

    explanation:
      "A two-dimensional vector [a, b] can be drawn as an arrow from the origin to the point (a, b). The first component controls horizontal movement, and the second controls vertical movement.",

    examples: [
      {
        vector: "[4, 3]",
        movement: [
          "Move 4 units right.",
          "Move 3 units up.",
        ],
        endpoint: "(4, 3)",
      },
      {
        vector: "[-2, 5]",
        movement: [
          "Move 2 units left.",
          "Move 5 units up.",
        ],
        endpoint: "(-2, 5)",
      },
      {
        vector: "[0, -6]",
        movement: [
          "No horizontal movement.",
          "Move 6 units down.",
        ],
        endpoint: "(0, -6)",
      },
    ],
  },

  positionAndDisplacement: {
    positionVector: {
      definition:
        "The position vector of point P is the vector from the origin to P.",

      notation:
        "If P = (x, y), then OP = [x, y].",

      example:
        "If P = (3, 4), then its position vector is [3, 4].",
    },

    displacementVector: {
      definition:
        "The displacement vector from point A to point B is found by subtracting the coordinates of A from B.",

      formula:
        "AB = B - A",

      componentForm:
        "If A = (x1, y1) and B = (x2, y2), then AB = [x2 - x1, y2 - y1].",

      interpretation:
        "Displacement records the change required to move from the starting point to the ending point.",
    },
  },

  workedExamples: [
    {
      id: "example-03-01",

      title: "Reading Vector Components",

      problem:
        "Interpret the vector [6, -2].",

      solutionSteps: [
        "The first component is 6.",
        "A positive first component represents 6 units right or east.",
        "The second component is -2.",
        "A negative second component represents 2 units down or south.",
      ],

      answer:
        "The vector represents 6 units right and 2 units down.",

      endpoint:
        "(6, -2)",
    },

    {
      id: "example-03-02",

      title: "Writing a Vector from Movement",

      problem:
        "Write a vector representing 5 meters west and 7 meters north.",

      solutionSteps: [
        "West is negative in the horizontal direction.",
        "North is positive in the vertical direction.",
        "The horizontal component is -5.",
        "The vertical component is 7.",
      ],

      answer: "[-5, 7]",
    },

    {
      id: "example-03-03",

      title: "Finding Displacement",

      problem:
        "A robot moves from A = (2, 1) to B = (8, 5). Find the displacement vector.",

      solutionSteps: [
        "Subtract the starting coordinates from the ending coordinates.",
        "Horizontal change: 8 - 2 = 6.",
        "Vertical change: 5 - 1 = 4.",
      ],

      answer: "[6, 4]",

      interpretation:
        "The robot moves 6 units right and 4 units up.",
    },

    {
      id: "example-03-04",

      title: "Negative Displacement",

      problem:
        "Find the displacement from A = (4, 6) to B = (-1, 2).",

      solutionSteps: [
        "Horizontal change: -1 - 4 = -5.",
        "Vertical change: 2 - 6 = -4.",
      ],

      answer: "[-5, -4]",

      interpretation:
        "The movement is 5 units left and 4 units down.",
    },

    {
      id: "example-03-05",

      title: "Three-Dimensional Position",

      problem:
        "A drone is 3 meters east, 2 meters north, and 5 meters above the origin. Write its position vector.",

      solutionSteps: [
        "Use the coordinate order [east-west, north-south, vertical].",
        "East gives 3.",
        "North gives 2.",
        "Up gives 5.",
      ],

      answer: "[3, 2, 5]",
    },

    {
      id: "example-03-06",

      title: "A Feature Vector",

      problem:
        "Represent a customer with age 42, annual income 68000, credit score 720, and debt ratio 0.28.",

      solutionSteps: [
        "Define the feature order.",
        "Use [age, income, credit score, debt ratio].",
        "Insert the values in that exact order.",
      ],

      answer: "[42, 68000, 720, 0.28]",

      interpretation:
        "Changing the order would change the meaning of every component.",
    },
  ],

  higherDimensionalVectors: {
    title: "Vectors Beyond Three Dimensions",

    explanation:
      "Vectors do not stop at two or three dimensions. In data science and AI, a vector may contain hundreds or thousands of components.",

    examples: [
      {
        context: "Student analytics",
        vector:
          "[attendance, homework score, test score, study hours]",
      },
      {
        context: "Credit-risk modeling",
        vector:
          "[income, debt, payment history, credit utilization, account age]",
      },
      {
        context: "Image",
        vector:
          "A long ordered list of pixel values or learned image features.",
      },
      {
        context: "Word embedding",
        vector:
          "A high-dimensional representation in which each component contributes to learned meaning.",
      },
    ],

    keyInsight:
      "Higher dimensions may be difficult to visualize, but the component rules remain the same.",
  },

  componentOrder: {
    title: "Why Order Matters",

    comparison: [
      {
        vector: "[25, 720]",
        interpretation:
          "Could mean [age, credit score].",
      },
      {
        vector: "[720, 25]",
        interpretation:
          "Would mean [age, credit score] only if age were 720 and credit score were 25, which is not the same record.",
      },
    ],

    principle:
      "A vector is ordered. Swapping components generally changes the mathematical and real-world meaning.",
  },

  realWorldApplications: [
    {
      field: "Robotics",
      vectorExample:
        "[x-position, y-position, z-position]",
      explanation:
        "A robot’s location may require three spatial components.",
    },
    {
      field: "Navigation",
      vectorExample:
        "[east-west movement, north-south movement]",
      explanation:
        "Movement is represented by independent coordinate changes.",
    },
    {
      field: "Computer Graphics",
      vectorExample:
        "[red, green, blue]",
      explanation:
        "Color can be represented using three ordered channel values.",
    },
    {
      field: "Data Science",
      vectorExample:
        "[age, income, credit score, debt]",
      explanation:
        "Each row of a dataset may be represented as a feature vector.",
    },
    {
      field: "Artificial Intelligence",
      vectorExample:
        "[v1, v2, ..., v768]",
      explanation:
        "An embedding may use hundreds of dimensions to represent information.",
    },
  ],

  aiConnection: {
    title: "Feature Vectors and Embeddings",

    explanation:
      "In machine learning, each observation is often converted into a feature vector. Every component represents a defined feature or a learned coordinate in a high-dimensional space.",

    examples: [
      {
        object: "Customer",
        vector:
          "[income, debt, credit score, missed payments]",
      },
      {
        object: "Image",
        vector:
          "[pixel values or learned features]",
      },
      {
        object: "Word",
        vector:
          "[embedding component 1, component 2, ..., component n]",
      },
    ],

    warning:
      "A model can only interpret vectors correctly when training data and future inputs use the same component order and preprocessing.",
  },

  pythonLab: {
    title: "Create, Inspect, and Plot Vector Components",

    objective:
      "Use NumPy to create vectors, inspect components, calculate displacement, and visualize two-dimensional vectors.",

    code: `import numpy as np
import matplotlib.pyplot as plt

vector = np.array([4, -3], dtype=float)

print("Vector:", vector)
print("Dimension:", vector.shape[0])
print("First component:", vector[0])
print("Second component:", vector[1])

start_point = np.array([2, 1], dtype=float)
end_point = np.array([7, 5], dtype=float)

displacement = end_point - start_point

print("Displacement:", displacement)

plt.figure(figsize=(6, 6))
plt.quiver(
    0,
    0,
    vector[0],
    vector[1],
    angles="xy",
    scale_units="xy",
    scale=1
)

plt.xlim(-6, 6)
plt.ylim(-6, 6)
plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.title("Vector Components")
plt.xlabel("First component")
plt.ylabel("Second component")
plt.show()`,

    questions: [
      "What does vector.shape[0] return?",
      "Why does Python use index 0 for the first component?",
      "What displacement is produced by end_point - start_point?",
      "What changes if start_point and end_point are reversed?",
      "How would you represent a three-dimensional vector?",
    ],

    extension:
      "Create a function named displacement(start, end) that validates dimensions and returns end - start.",
  },

  guidedPractice: [
    {
      id: "guided-03-01",
      question:
        "Interpret the vector [-4, 6].",
      answer:
        "Four units left and six units up.",
    },
    {
      id: "guided-03-02",
      question:
        "Write a vector for 8 units east and 3 units south.",
      answer: "[8, -3]",
    },
    {
      id: "guided-03-03",
      question:
        "Find the displacement from (1, 2) to (6, 9).",
      answer: "[5, 7]",
    },
    {
      id: "guided-03-04",
      question:
        "What is the dimension of [3, -1, 8, 4]?",
      answer: "4",
    },
    {
      id: "guided-03-05",
      question:
        "Write [5, -2] as a combination of standard basis vectors.",
      answer:
        "5[1, 0] - 2[0, 1]",
    },
  ],

  independentPractice: [
    {
      id: "practice-03-01",
      difficulty: "Foundation",
      question:
        "Identify the first and second components of [9, -7].",
      answer:
        "First component: 9; second component: -7.",
    },
    {
      id: "practice-03-02",
      difficulty: "Foundation",
      question:
        "Write a vector representing 6 units west and 2 units south.",
      answer: "[-6, -2]",
    },
    {
      id: "practice-03-03",
      difficulty: "Developing",
      question:
        "Find the displacement from A = (-2, 3) to B = (5, -1).",
      answer: "[7, -4]",
    },
    {
      id: "practice-03-04",
      difficulty: "Developing",
      question:
        "Find the displacement from A = (1, 4, 2) to B = (6, 1, 9).",
      answer: "[5, -3, 7]",
    },
    {
      id: "practice-03-05",
      difficulty: "Developing",
      question:
        "Express [3, 5] using the standard basis vectors e1 and e2.",
      answer:
        "3e1 + 5e2",
    },
    {
      id: "practice-03-06",
      difficulty: "Challenge",
      question:
        "Explain why [40, 700] and [700, 40] are different feature vectors when the order is [age, credit score].",
      sampleAnswer:
        "The first means age 40 and credit score 700. The second means age 700 and credit score 40, so the meanings are completely different.",
    },
    {
      id: "practice-03-07",
      difficulty: "Challenge",
      question:
        "Can two different points have the same displacement vector? Give an example.",
      sampleAnswer:
        "Yes. Moving from (0, 0) to (3, 2) and moving from (5, 4) to (8, 6) both produce displacement [3, 2].",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Changing component order.",

      correction:
        "Vector components must remain in the defined order.",
    },
    {
      mistake:
        "Subtracting coordinates in the wrong direction.",

      correction:
        "Displacement from A to B is B - A, not A - B.",
    },
    {
      mistake:
        "Confusing a position vector with a displacement vector.",

      correction:
        "A position vector begins at the origin. A displacement vector compares any two positions.",
    },
    {
      mistake:
        "Ignoring zero components.",

      correction:
        "A zero component means there is no contribution in that direction or feature.",
    },
    {
      mistake:
        "Assuming dimensions must be spatial.",

      correction:
        "Dimensions can represent any ordered features, not only physical directions.",
    },
  ],

  discussionQuestions: [
    "Why is a coordinate system necessary for interpreting a vector?",
    "How can the same vector represent different things in different contexts?",
    "Why is displacement independent of the path taken?",
    "What difficulties arise when working with vectors in hundreds of dimensions?",
    "How does feature order affect machine-learning predictions?",
  ],

  formativeAssessment: {
    totalPoints: 12,

    passingScore: 10,

    questions: [
      {
        id: "check-03-01",
        type: "multiple-choice",
        points: 2,
        prompt:
          "What is the dimension of [2, 5, -1]?",
        options: [
          "1",
          "2",
          "3",
          "5",
        ],
        answer: "3",
      },
      {
        id: "check-03-02",
        type: "short-answer",
        points: 2,
        prompt:
          "Interpret the vector [4, -6].",
        answer:
          "Four units right and six units down.",
      },
      {
        id: "check-03-03",
        type: "calculation",
        points: 3,
        prompt:
          "Find the displacement from (3, 2) to (9, -1).",
        answer: "[6, -3]",
      },
      {
        id: "check-03-04",
        type: "representation",
        points: 2,
        prompt:
          "Write [-2, 7] using standard basis vectors.",
        answer:
          "-2e1 + 7e2",
      },
      {
        id: "check-03-05",
        type: "explanation",
        points: 3,
        prompt:
          "Explain why component order matters in a feature vector.",
        sampleAnswer:
          "Each position corresponds to a specific feature. Changing the order changes which value belongs to each feature.",
      },
    ],
  },

  researchExtension: {
    title: "High-Dimensional Feature Vectors",

    researchQuestion:
      "How are real-world objects represented using vectors with many dimensions?",

    task:
      "Select one AI or data-science application and investigate what the vector components represent.",

    applicationOptions: [
      "Credit-risk prediction",
      "Image recognition",
      "Document search",
      "Recommendation systems",
      "Student-performance prediction",
    ],

    requiredEvidence: [
      "Description of the represented object",
      "Explanation of at least five components or feature groups",
      "Discussion of component order",
      "One limitation of the representation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Coordinate and Feature Vector Guide",

    description:
      "Create a visual portfolio page showing geometric, position, displacement, three-dimensional, and feature vectors.",

    requiredExamples: [
      "One two-dimensional geometric vector",
      "One position vector",
      "One displacement vector",
      "One three-dimensional vector",
      "One AI or data feature vector",
    ],

    requiredEvidence: [
      "Component labels",
      "Dimension labels",
      "Interpretation of every component",
      "At least two visualizations",
      "Reflection",
    ],
  },

  reflection: [
    "How does each component contribute to the meaning of a vector?",
    "Why is subtraction useful for finding displacement?",
    "What is the difference between position and displacement?",
    "Which higher-dimensional example was most interesting?",
    "What would happen if a dataset used inconsistent feature order?",
  ],

  summary: [
    "A vector is an ordered collection of components.",
    "The number of components determines the vector’s dimension.",
    "Each component represents one coordinate direction or feature.",
    "A two-dimensional vector can be written as a combination of standard basis vectors.",
    "Displacement from A to B is calculated as B - A.",
    "Position vectors begin at the origin.",
    "Vectors can represent geometric movement or high-dimensional data.",
    "Component meaning and order must remain consistent.",
  ],

  previousLesson: {
    id: "la-m01-l02",
    slug: "scalars-and-vectors",
    title: "Scalars and Vectors",
  },

  nextLesson: {
    id: "la-m01-l04",
    slug: "vector-magnitude",
    title: "Magnitude, Distance, and Normalization",
  },

  lumineryGuidance: {
    message:
      "A component has no meaning by itself. Its meaning comes from its position, coordinate system, unit, and context.",

    prompt:
      "Before using a vector, label every component and verify that all vectors follow the same order.",
  },
};

export default lesson03;