const lesson04 = {
  id: "la-m01-l04",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 4,

  slug: "vector-magnitude",

  title: "Magnitude, Distance, and Normalization",

  subtitle:
    "Measuring vector length, comparing positions, and creating unit vectors.",

  status: "Available",

  duration: "90–105 minutes",

  level: "Foundation",

  essentialQuestion:
    "How can we measure the size of a vector, calculate distance between points, and preserve direction while changing magnitude?",

  bigIdea:
    "Vector magnitude measures length, distance measures separation, and normalization creates a unit vector that preserves direction while giving the vector magnitude one.",

  problemFirst: {
    title: "How Far Did the Drone Move?",

    scenario:
      "A drone moves 4 meters east and 3 meters north. The movement vector is [4, 3]. We know the components, but we still need a single number that describes the total straight-line displacement.",

    questions: [
      "How can horizontal and vertical movement be combined into one length?",
      "What geometric shape is formed by the vector components?",
      "How is the Pythagorean theorem connected to vector magnitude?",
      "How can the direction be preserved while changing the vector length to one?",
    ],

    expectedInsight:
      "The components form the legs of a right triangle, so the vector magnitude is found using the Pythagorean theorem.",
  },

  learningObjectives: [
    "Define the magnitude or norm of a vector.",
    "Calculate magnitude in two and three dimensions.",
    "Connect vector magnitude to the Pythagorean theorem.",
    "Calculate distance between two points.",
    "Explain the relationship between displacement and distance.",
    "Normalize a nonzero vector.",
    "Verify that a unit vector has magnitude one.",
    "Apply magnitude and normalization in physics, robotics, data science, and AI.",
  ],

  prerequisiteKnowledge: [
    "Vector components",
    "Coordinate representation",
    "Squares and square roots",
    "Pythagorean theorem",
    "Basic algebra",
  ],

  vocabulary: [
    {
      term: "Magnitude",
      definition:
        "The length or size of a vector.",
    },
    {
      term: "Norm",
      definition:
        "A mathematical function that measures vector size.",
    },
    {
      term: "Euclidean Norm",
      definition:
        "The standard vector length calculated using the square root of the sum of squared components.",
    },
    {
      term: "Distance",
      definition:
        "The length of the displacement vector between two points.",
    },
    {
      term: "Unit Vector",
      definition:
        "A vector whose magnitude is one.",
    },
    {
      term: "Normalization",
      definition:
        "The process of dividing a nonzero vector by its magnitude to create a unit vector.",
    },
    {
      term: "Zero Vector",
      definition:
        "A vector whose components are all zero.",
    },
  ],

  historicalContext: {
    title: "From the Pythagorean Theorem to Vector Norms",

    summary:
      "The standard magnitude formula extends the Pythagorean theorem from right triangles to vectors in two, three, and higher dimensions.",

    connection:
      "For a vector [a, b], the components form perpendicular sides of a right triangle, and the magnitude is the hypotenuse.",

    extension:
      "In higher dimensions, the same idea continues by adding the squares of all components.",
  },

  formulas: [
    {
      id: "magnitude-2d",
      name: "Two-Dimensional Magnitude",
      formula:
        "||v|| = sqrt(v1^2 + v2^2)",
      meaning:
        "Measures the length of a two-dimensional vector.",
    },
    {
      id: "magnitude-3d",
      name: "Three-Dimensional Magnitude",
      formula:
        "||v|| = sqrt(v1^2 + v2^2 + v3^2)",
      meaning:
        "Measures the length of a three-dimensional vector.",
    },
    {
      id: "magnitude-nd",
      name: "n-Dimensional Magnitude",
      formula:
        "||v|| = sqrt(v1^2 + v2^2 + ... + vn^2)",
      meaning:
        "Generalizes Euclidean length to any number of dimensions.",
    },
    {
      id: "distance-formula",
      name: "Distance Between Two Points",
      formula:
        "distance(A, B) = ||B - A||",
      componentForm:
        "sqrt((x2 - x1)^2 + (y2 - y1)^2)",
      meaning:
        "Distance is the magnitude of the displacement vector.",
    },
    {
      id: "normalization-formula",
      name: "Normalization",
      formula:
        "u = v / ||v||",
      requirement:
        "v must be nonzero.",
      meaning:
        "Produces a unit vector in the same direction as v.",
    },
  ],

  geometricIntuition: {
    title: "Magnitude as the Hypotenuse",

    explanation:
      "For the vector [a, b], draw horizontal movement a and vertical movement b. These components form perpendicular sides of a right triangle. The vector itself is the hypotenuse.",

    example: {
      vector: "[3, 4]",
      horizontalLength: 3,
      verticalLength: 4,
      magnitude:
        "sqrt(3^2 + 4^2) = sqrt(9 + 16) = 5",
    },

    keyInsight:
      "Signs determine direction, but squaring the components makes magnitude nonnegative.",
  },

  magnitudeProperties: [
    {
      property: "Nonnegative",
      statement:
        "||v|| >= 0",
      explanation:
        "Length cannot be negative.",
    },
    {
      property: "Zero condition",
      statement:
        "||v|| = 0 only when v is the zero vector.",
      explanation:
        "Only a vector with no component movement has zero length.",
    },
    {
      property: "Scaling",
      statement:
        "||cv|| = |c| ||v||",
      explanation:
        "Scaling a vector by c scales its length by the absolute value of c.",
    },
    {
      property: "Direction independence",
      statement:
        "v and -v have the same magnitude.",
      explanation:
        "Opposite directions can have equal length.",
    },
  ],

  distanceConnection: {
    title: "Distance Is the Magnitude of Displacement",

    explanation:
      "To find the distance between points A and B, first calculate the displacement vector B - A, then calculate its magnitude.",

    process: [
      "Identify the starting point A.",
      "Identify the ending point B.",
      "Calculate displacement B - A.",
      "Calculate the magnitude of the displacement.",
    ],

    formula:
      "distance(A, B) = ||B - A||",
  },

  normalizationConcept: {
    title: "Why Normalize a Vector?",

    explanation:
      "Normalization removes the original magnitude while preserving direction. This is useful whenever direction matters more than size.",

    process: [
      "Calculate the vector magnitude.",
      "Confirm the magnitude is not zero.",
      "Divide every component by the magnitude.",
      "Verify that the new vector has magnitude one.",
    ],

    example: {
      vector: "[3, 4]",
      magnitude: "5",
      normalizedVector: "[3/5, 4/5]",
      verification:
        "sqrt((3/5)^2 + (4/5)^2) = 1",
    },

    warning:
      "The zero vector cannot be normalized because division by zero is undefined.",
  },

  workedExamples: [
    {
      id: "example-04-01",

      title: "Magnitude of a Two-Dimensional Vector",

      problem:
        "Find the magnitude of v = [6, 8].",

      solutionSteps: [
        "Use ||v|| = sqrt(v1^2 + v2^2).",
        "Substitute the components: sqrt(6^2 + 8^2).",
        "Calculate the squares: sqrt(36 + 64).",
        "Add: sqrt(100).",
        "Take the square root: 10.",
      ],

      answer: "||v|| = 10",
    },

    {
      id: "example-04-02",

      title: "Magnitude with Negative Components",

      problem:
        "Find the magnitude of v = [-5, 12].",

      solutionSteps: [
        "Use the magnitude formula.",
        "Square both components.",
        "(-5)^2 = 25 and 12^2 = 144.",
        "Add: 25 + 144 = 169.",
        "Take the square root: 13.",
      ],

      answer: "||v|| = 13",

      interpretation:
        "Negative direction does not make the length negative.",
    },

    {
      id: "example-04-03",

      title: "Magnitude in Three Dimensions",

      problem:
        "Find the magnitude of v = [2, 3, 6].",

      solutionSteps: [
        "Use ||v|| = sqrt(v1^2 + v2^2 + v3^2).",
        "Substitute: sqrt(2^2 + 3^2 + 6^2).",
        "Calculate: sqrt(4 + 9 + 36).",
        "Add: sqrt(49).",
        "Take the square root: 7.",
      ],

      answer: "||v|| = 7",
    },

    {
      id: "example-04-04",

      title: "Distance Between Two Points",

      problem:
        "Find the distance between A = (2, 1) and B = (8, 9).",

      solutionSteps: [
        "Find displacement B - A.",
        "B - A = [8 - 2, 9 - 1] = [6, 8].",
        "Calculate the magnitude of [6, 8].",
        "sqrt(6^2 + 8^2) = sqrt(100) = 10.",
      ],

      answer: "Distance = 10 units",
    },

    {
      id: "example-04-05",

      title: "Normalizing a Vector",

      problem:
        "Normalize v = [5, 12].",

      solutionSteps: [
        "Calculate the magnitude: sqrt(5^2 + 12^2).",
        "Magnitude = sqrt(25 + 144) = 13.",
        "Divide every component by 13.",
      ],

      answer: "[5/13, 12/13]",

      verification:
        "The magnitude of [5/13, 12/13] is 1.",
    },

    {
      id: "example-04-06",

      title: "A Vector Already Normalized",

      problem:
        "Determine whether u = [0.6, 0.8] is a unit vector.",

      solutionSteps: [
        "Calculate the magnitude.",
        "sqrt(0.6^2 + 0.8^2).",
        "sqrt(0.36 + 0.64) = sqrt(1).",
      ],

      answer:
        "Yes. The magnitude is 1.",
    },

    {
      id: "example-04-07",

      title: "Magnitude of a Data Vector",

      problem:
        "Calculate the magnitude of x = [2, 1, 2].",

      solutionSteps: [
        "Square each component.",
        "2^2 + 1^2 + 2^2 = 4 + 1 + 4.",
        "The sum is 9.",
        "Take the square root.",
      ],

      answer: "||x|| = 3",

      interpretation:
        "In a data context, magnitude summarizes overall vector size, though feature scaling must be considered.",
    },
  ],

  realWorldApplications: [
    {
      field: "Physics",
      application:
        "Magnitude gives the speed associated with a velocity vector or the strength of a force vector.",
    },
    {
      field: "Navigation",
      application:
        "Distance from the start is the magnitude of the displacement vector.",
    },
    {
      field: "Robotics",
      application:
        "Robots normalize direction vectors before moving a chosen distance.",
    },
    {
      field: "Computer Graphics",
      application:
        "Lighting calculations often require normalized surface and direction vectors.",
    },
    {
      field: "Data Science",
      application:
        "Norms are used in distance calculations, regularization, and similarity measures.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Embeddings are often normalized before cosine-similarity search.",
    },
  ],

  aiConnection: {
    title: "Normalization in AI Systems",

    explanation:
      "In AI, vectors may have very different magnitudes. Normalization allows systems to compare direction or pattern without allowing raw vector size to dominate.",

    examples: [
      "Text embeddings normalized before similarity search",
      "Feature vectors scaled before machine learning",
      "Direction vectors normalized in computer vision",
      "Weight vectors analyzed using norms",
    ],

    caution:
      "Normalization does not solve every scaling problem. Features with different units may require standardization or other preprocessing.",
  },

  pythonLab: {
    title: "Magnitude, Distance, and Normalization with NumPy",

    objective:
      "Implement vector magnitude, point distance, and normalization, then verify the results with NumPy.",

    code: `import numpy as np

def magnitude(vector):
    vector = np.array(vector, dtype=float)
    return np.sqrt(np.sum(vector ** 2))

def distance(point_a, point_b):
    a = np.array(point_a, dtype=float)
    b = np.array(point_b, dtype=float)

    if a.shape != b.shape:
        raise ValueError("Points must have the same dimension.")

    return magnitude(b - a)

def normalize(vector):
    vector = np.array(vector, dtype=float)
    length = magnitude(vector)

    if np.isclose(length, 0):
        raise ValueError("The zero vector cannot be normalized.")

    return vector / length

vector = np.array([3, 4], dtype=float)

print("Magnitude:", magnitude(vector))
print("NumPy magnitude:", np.linalg.norm(vector))
print("Normalized vector:", normalize(vector))
print("Normalized magnitude:", magnitude(normalize(vector)))

point_a = np.array([2, 1], dtype=float)
point_b = np.array([8, 9], dtype=float)

print("Distance:", distance(point_a, point_b))`,

    questions: [
      "Why are the vector components squared?",
      "Why does magnitude never become negative?",
      "Why must two points have the same dimension?",
      "Why is np.isclose useful when checking for zero?",
      "What happens when you try to normalize [0, 0]?",
    ],

    extension:
      "Create a function that normalizes every nonzero row of a matrix representing several feature vectors.",
  },

  guidedPractice: [
    {
      id: "guided-04-01",
      question:
        "Find the magnitude of [3, 4].",
      answer: "5",
    },
    {
      id: "guided-04-02",
      question:
        "Find the magnitude of [-8, 15].",
      answer: "17",
    },
    {
      id: "guided-04-03",
      question:
        "Find the distance from (1, 2) to (4, 6).",
      answer: "5",
    },
    {
      id: "guided-04-04",
      question:
        "Normalize [0, 7].",
      answer: "[0, 1]",
    },
    {
      id: "guided-04-05",
      question:
        "Determine whether [1/sqrt(2), 1/sqrt(2)] is a unit vector.",
      answer:
        "Yes. Its magnitude is 1.",
    },
  ],

  independentPractice: [
    {
      id: "practice-04-01",
      difficulty: "Foundation",
      question:
        "Find the magnitude of [9, 12].",
      answer: "15",
    },
    {
      id: "practice-04-02",
      difficulty: "Foundation",
      question:
        "Find the magnitude of [1, 2, 2].",
      answer: "3",
    },
    {
      id: "practice-04-03",
      difficulty: "Developing",
      question:
        "Find the distance between A = (-2, 3) and B = (4, -5).",
      answer: "10",
    },
    {
      id: "practice-04-04",
      difficulty: "Developing",
      question:
        "Normalize [8, 15].",
      answer: "[8/17, 15/17]",
    },
    {
      id: "practice-04-05",
      difficulty: "Developing",
      question:
        "A vector has magnitude 6. What is the magnitude of -4v?",
      answer: "24",
    },
    {
      id: "practice-04-06",
      difficulty: "Challenge",
      question:
        "Explain why [3, 4] and [-3, -4] have the same magnitude but different directions.",
      sampleAnswer:
        "Their components have equal squared values, so their lengths match, but every component has the opposite sign.",
    },
    {
      id: "practice-04-07",
      difficulty: "Challenge",
      question:
        "Why might magnitude be misleading when a feature vector contains age in years and income in dollars?",
      sampleAnswer:
        "Income may dominate because its numerical scale is much larger, so features may need preprocessing before magnitude-based comparison.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Adding components instead of adding their squares.",

      correction:
        "Magnitude uses the square root of the sum of squared components.",
    },
    {
      mistake:
        "Keeping negative signs after squaring.",

      correction:
        "The square of a negative number is positive.",
    },
    {
      mistake:
        "Confusing distance with displacement.",

      correction:
        "Displacement is a vector. Distance is the magnitude of that vector.",
    },
    {
      mistake:
        "Normalizing by dividing by the sum of components.",

      correction:
        "Normalize by dividing by the vector magnitude.",
    },
    {
      mistake:
        "Normalizing the zero vector.",

      correction:
        "The zero vector has magnitude zero, so normalization would require division by zero.",
    },
    {
      mistake:
        "Assuming normalization changes direction.",

      correction:
        "A positive normalization factor preserves direction.",
    },
  ],

  discussionQuestions: [
    "Why does the magnitude formula use squares?",
    "How is vector magnitude connected to the distance formula?",
    "Why do opposite vectors have the same magnitude?",
    "When is normalization useful?",
    "When might normalization remove important information?",
    "Why can feature scale affect vector magnitude in data science?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-04-01",
        type: "calculation",
        points: 3,
        prompt:
          "Find the magnitude of [5, 12].",
        answer: "13",
      },
      {
        id: "check-04-02",
        type: "calculation",
        points: 3,
        prompt:
          "Find the distance between (1, 1) and (4, 5).",
        answer: "5",
      },
      {
        id: "check-04-03",
        type: "calculation",
        points: 3,
        prompt:
          "Normalize [3, 4].",
        answer: "[3/5, 4/5]",
      },
      {
        id: "check-04-04",
        type: "explanation",
        points: 3,
        prompt:
          "Explain why the zero vector cannot be normalized.",
        answer:
          "Its magnitude is zero, so normalization would divide by zero.",
      },
      {
        id: "check-04-05",
        type: "application",
        points: 3,
        prompt:
          "Explain one reason an AI system may normalize embedding vectors.",
        sampleAnswer:
          "Normalization allows comparison based more on direction than raw magnitude.",
      },
    ],
  },

  researchExtension: {
    title: "Norms and Distance in Data Science",

    researchQuestion:
      "How do vector magnitude and distance affect nearest-neighbor search or similarity analysis?",

    task:
      "Investigate one application that uses vector distance or normalization.",

    applicationOptions: [
      "Image retrieval",
      "Document similarity",
      "Recommendation systems",
      "Fraud detection",
      "Student similarity analysis",
    ],

    requiredEvidence: [
      "Description of the application",
      "Explanation of the vector representation",
      "Explanation of the norm or distance used",
      "One example calculation",
      "One limitation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Magnitude and Normalization Visual Guide",

    description:
      "Create a visual explanation showing how magnitude, distance, and normalization are connected.",

    requiredSections: [
      "Pythagorean connection",
      "Two-dimensional magnitude example",
      "Three-dimensional magnitude example",
      "Distance between points",
      "Normalization process",
      "AI or robotics application",
    ],

    requiredEvidence: [
      "At least two diagrams",
      "Worked calculations",
      "Python verification",
      "Explanation of the zero-vector limitation",
      "Reflection",
    ],
  },

  reflection: [
    "How is magnitude related to the Pythagorean theorem?",
    "What is the difference between displacement and distance?",
    "Why does normalization preserve direction?",
    "What happens to information about original size after normalization?",
    "How might feature scale affect magnitude in a dataset?",
  ],

  summary: [
    "Magnitude measures vector length.",
    "The Euclidean norm extends the Pythagorean theorem.",
    "Distance between points equals the magnitude of their displacement.",
    "Magnitude is always nonnegative.",
    "Opposite vectors have equal magnitude.",
    "Normalization creates a unit vector.",
    "The zero vector cannot be normalized.",
    "Norms and normalization are important in robotics, graphics, data science, and AI.",
  ],

  previousLesson: {
    id: "la-m01-l03",
    slug: "vector-components",
    title: "Vector Components and Coordinate Representation",
  },

  nextLesson: {
    id: "la-m01-l05",
    slug: "vector-addition",
    title: "Vector Addition and Subtraction",
  },

  lumineryGuidance: {
    message:
      "Magnitude answers how large a vector is. Normalization answers which direction it points when size is removed.",

    prompt:
      "Before normalizing, calculate the magnitude, confirm the vector is nonzero, and explain what information will be preserved or lost.",
  },
};

export default lesson04;