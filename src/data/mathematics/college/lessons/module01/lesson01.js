const lesson01 = {
  id: "la-m01-l01",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 1,

  slug: "why-do-we-need-vectors",

  title: "Why Do We Need Vectors?",

  subtitle:
    "Representing direction, movement, force, data, and meaning with mathematical objects.",

  status: "Available",

  duration: "75–90 minutes",

  level: "Foundation",

  essentialQuestion:
    "Why are ordinary numbers not enough to represent movement, direction, force, and multidimensional data?",

  bigIdea:
    "A vector represents several related quantities together and allows us to describe magnitude, direction, position, motion, and data in one mathematical object.",

  problemFirst: {
    title: "A Drone Navigation Problem",

    scenario:
      "A drone flies 4 meters east and 3 meters north. A single number such as 5 meters tells us the total straight-line distance from the starting point, but it does not tell us the direction of movement.",

    questions: [
      "How can we represent both horizontal and vertical movement?",
      "Why is the number 5 not enough?",
      "What mathematical object can preserve both magnitude and direction?",
    ],

    expectedInsight:
      "We need an ordered object such as [4, 3] that stores both components of the movement.",
  },

  learningObjectives: [
    "Explain why scalars alone cannot represent every real-world quantity.",
    "Describe a vector as an ordered collection of components.",
    "Interpret a two-dimensional vector geometrically.",
    "Identify real-world situations that require vectors.",
    "Connect vectors to data science, robotics, physics, and artificial intelligence.",
    "Represent simple movements using coordinate vectors.",
  ],

  prerequisiteKnowledge: [
    "Coordinate plane",
    "Positive and negative numbers",
    "Basic distance",
    "Horizontal and vertical direction",
  ],

  vocabulary: [
    {
      term: "Scalar",
      definition:
        "A quantity represented by one numerical value, such as temperature, mass, or time.",
    },
    {
      term: "Vector",
      definition:
        "An ordered collection of values that can represent direction, magnitude, position, or features.",
    },
    {
      term: "Component",
      definition:
        "One entry of a vector, representing one direction, coordinate, or feature.",
    },
    {
      term: "Magnitude",
      definition:
        "The length or size of a vector.",
    },
    {
      term: "Direction",
      definition:
        "The orientation in which a vector points.",
    },
  ],

  historicalContext: {
    title: "From Geometry to Modern Data",

    summary:
      "Vectors grew from geometric ideas about directed line segments. They later became essential in mechanics, electricity, engineering, computer graphics, and modern artificial intelligence.",

    timeline: [
      {
        period: "Ancient geometry",
        contribution:
          "Geometric thinkers studied length, direction, and position without modern vector notation.",
      },
      {
        period: "17th–19th centuries",
        contribution:
          "Coordinate geometry and mechanics created the need to represent forces and motion using components.",
      },
      {
        period: "Modern computing",
        contribution:
          "Vectors became fundamental data structures for graphics, simulations, machine learning, and AI embeddings.",
      },
    ],
  },

  intuition: {
    title: "A Vector Is More Than an Arrow",

    explanation:
      "In geometry, a vector can be drawn as an arrow. The arrow shows direction, and its length shows magnitude. In computing, the same vector can be written as an ordered list such as [4, 3]. In data science, a vector may represent a customer, image, word, sensor reading, or scientific observation.",

    representations: [
      {
        type: "Geometric",
        example:
          "An arrow from the origin to the point (4, 3).",
      },
      {
        type: "Coordinate",
        example:
          "[4, 3]",
      },
      {
        type: "Physical",
        example:
          "A force of 4 units east and 3 units north.",
      },
      {
        type: "Data",
        example:
          "[age, income, credit score, debt]",
      },
      {
        type: "AI",
        example:
          "A word embedding represented by hundreds of numerical components.",
      },
    ],
  },

  formalDefinition: {
    statement:
      "A vector in n-dimensional space is an ordered list of n numerical components.",

    notation:
      "v = [v1, v2, ..., vn]",

    interpretation:
      "Each component represents one independent coordinate, direction, measurement, or feature.",

    examples: [
      {
        vector: "[4, 3]",
        dimension: 2,
        meaning:
          "Four units in the first direction and three units in the second direction.",
      },
      {
        vector: "[2, -1, 5]",
        dimension: 3,
        meaning:
          "A three-dimensional vector with three components.",
      },
      {
        vector: "[52, 210, 6.0, 6.2]",
        dimension: 4,
        meaning:
          "A possible feature vector containing age, weight, height, and a health measurement.",
      },
    ],
  },

  visualModel: {
    coordinatePlane: {
      startPoint: [0, 0],
      endPoint: [4, 3],
      vector: [4, 3],
    },

    interpretation: [
      "Move 4 units horizontally.",
      "Move 3 units vertically.",
      "Draw an arrow from the starting point to the ending point.",
      "The arrow represents the complete vector.",
    ],
  },

  workedExamples: [
    {
      id: "example-01",

      title: "Representing Movement",

      problem:
        "A robot moves 6 meters east and 2 meters north. Represent the movement as a vector.",

      solutionSteps: [
        "Choose the first component for east-west movement.",
        "Choose the second component for north-south movement.",
        "East is positive, so the first component is 6.",
        "North is positive, so the second component is 2.",
        "The movement vector is [6, 2].",
      ],

      answer: "[6, 2]",

      interpretation:
        "The vector stores both directions in one object.",
    },

    {
      id: "example-02",

      title: "Negative Direction",

      problem:
        "A drone moves 3 meters west and 5 meters north. Represent the movement as a vector.",

      solutionSteps: [
        "West is represented by a negative horizontal component.",
        "North is represented by a positive vertical component.",
        "The horizontal component is -3.",
        "The vertical component is 5.",
      ],

      answer: "[-3, 5]",

      interpretation:
        "The negative sign indicates movement in the opposite horizontal direction.",
    },

    {
      id: "example-03",

      title: "A Data Vector",

      problem:
        "Represent a learner with 4 hours of weekly study, 85% attendance, and 72% assessment performance.",

      solutionSteps: [
        "Select a fixed order for the features.",
        "Use [study hours, attendance, assessment score].",
        "Insert the values in that order.",
      ],

      answer: "[4, 85, 72]",

      interpretation:
        "This vector does not represent physical direction. It represents a point in a three-feature data space.",
    },
  ],

  realWorldApplications: [
    {
      field: "Physics",
      application:
        "Velocity, acceleration, force, electric fields, and momentum are represented using vectors.",
    },
    {
      field: "Robotics",
      application:
        "Robot position, motion, sensor measurements, and joint movement use vectors.",
    },
    {
      field: "Computer Graphics",
      application:
        "Points, colors, lighting, camera direction, and animation use vectors.",
    },
    {
      field: "Data Science",
      application:
        "Each observation can be represented as a feature vector.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Words, images, users, and documents can be represented using embeddings.",
    },
    {
      field: "Finance",
      application:
        "A customer may be represented using income, debt, credit history, and payment behavior.",
    },
  ],

  aiConnection: {
    title: "Vectors as Meaning",

    explanation:
      "Modern AI systems convert text, images, and other information into vectors. Similar objects are often represented by vectors that point in similar directions or lie close together in high-dimensional space.",

    examples: [
      "A word embedding for 'teacher'",
      "An image embedding for a dog",
      "A customer vector for credit-risk prediction",
      "A document vector for semantic search",
    ],

    reflectionQuestion:
      "How can a list of numbers represent something as complex as the meaning of a word?",
  },

  pythonLab: {
    title: "Create and Plot Your First Vector",

    objective:
      "Represent a vector with NumPy and display it on a coordinate plane.",

    code: `import numpy as np
import matplotlib.pyplot as plt

vector = np.array([4, 3])

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

plt.xlim(-1, 6)
plt.ylim(-1, 6)
plt.axhline(0)
plt.axvline(0)
plt.grid(True)

plt.title("Vector [4, 3]")
plt.xlabel("Horizontal component")
plt.ylabel("Vertical component")

plt.show()`,

    questions: [
      "What does vector[0] represent?",
      "What does vector[1] represent?",
      "What changes if the first component becomes negative?",
      "What happens if both components are zero?",
    ],

    extension:
      "Create and plot three different movement vectors on the same coordinate plane.",
  },

  guidedPractice: [
    {
      id: "guided-01",
      question:
        "Represent a movement of 7 units east and 4 units south.",
      hint:
        "East is positive horizontally. South is negative vertically.",
      answer: "[7, -4]",
    },
    {
      id: "guided-02",
      question:
        "Represent a force of 2 units west and 6 units north.",
      hint:
        "West gives a negative first component.",
      answer: "[-2, 6]",
    },
    {
      id: "guided-03",
      question:
        "A data record contains age 25, income 52000, and credit score 710. Write the feature vector.",
      hint:
        "Keep the values in the given order.",
      answer: "[25, 52000, 710]",
    },
  ],

  independentPractice: [
    {
      id: "practice-01",
      difficulty: "Foundation",
      question:
        "Write a vector representing 5 units east and 8 units north.",
      answer: "[5, 8]",
    },
    {
      id: "practice-02",
      difficulty: "Foundation",
      question:
        "Write a vector representing 4 units west and 3 units south.",
      answer: "[-4, -3]",
    },
    {
      id: "practice-03",
      difficulty: "Developing",
      question:
        "Explain why speed is a scalar but velocity is a vector.",
      answer:
        "Speed gives magnitude only, while velocity includes both magnitude and direction.",
    },
    {
      id: "practice-04",
      difficulty: "Developing",
      question:
        "Create a four-component vector that could represent a student in a learning analytics system.",
      sampleAnswer:
        "[attendance, study hours, assignment score, test score]",
    },
    {
      id: "practice-05",
      difficulty: "Challenge",
      question:
        "Explain one advantage and one limitation of representing a person using a feature vector.",
      sampleAnswer:
        "A vector makes information computable and comparable, but it cannot capture every human quality or context.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Treating a vector as an unordered collection of numbers.",

      correction:
        "Component order matters. [4, 3] and [3, 4] generally represent different vectors.",
    },
    {
      mistake:
        "Ignoring signs.",

      correction:
        "Positive and negative components represent opposite directions or values.",
    },
    {
      mistake:
        "Thinking every vector must represent a physical arrow.",

      correction:
        "Vectors can also represent data, features, images, words, and measurements.",
    },
    {
      mistake:
        "Confusing the endpoint with the vector.",

      correction:
        "A position vector from the origin may share coordinates with its endpoint, but the vector represents displacement, not merely a point.",
    },
  ],

  discussionQuestions: [
    "Where do you see vectors in daily life?",
    "Why is component order important?",
    "Can two different real-world objects have the same vector representation?",
    "What information might be lost when a person or object is represented by a vector?",
  ],

  formativeAssessment: {
    totalPoints: 10,

    questions: [
      {
        id: "check-01",
        type: "multiple-choice",
        points: 2,
        prompt:
          "Which quantity must include direction?",
        options: [
          "Mass",
          "Temperature",
          "Velocity",
          "Time",
        ],
        answer: "Velocity",
      },
      {
        id: "check-02",
        type: "short-answer",
        points: 2,
        prompt:
          "Represent 3 units west and 7 units north as a vector.",
        answer: "[-3, 7]",
      },
      {
        id: "check-03",
        type: "explanation",
        points: 3,
        prompt:
          "Explain why a single number is not enough to represent the drone movement [4, 3].",
        answer:
          "A single number cannot preserve both independent directional components.",
      },
      {
        id: "check-04",
        type: "application",
        points: 3,
        prompt:
          "Give one example of a vector used in AI or data science and explain what its components represent.",
        sampleAnswer:
          "A customer vector may contain age, income, credit score, and debt.",
      },
    ],

    passingScore: 8,
  },

  researchExtension: {
    title: "Vectors in Artificial Intelligence",

    researchQuestion:
      "How do AI systems represent words, images, or users as vectors?",

    task:
      "Find one example of an embedding system and explain what makes its vector representation useful.",

    evidence: [
      "One credible source",
      "A written explanation",
      "One example vector or diagram",
      "A limitation or ethical concern",
    ],
  },

  portfolioArtifact: {
    title: "Vector Representation Gallery",

    description:
      "Create a one-page portfolio artifact showing at least four different uses of vectors.",

    requiredExamples: [
      "Movement vector",
      "Force or physics vector",
      "Data feature vector",
      "AI embedding vector",
    ],

    requiredEvidence: [
      "Vector notation",
      "Explanation of each component",
      "At least one visualization",
      "Reflection",
    ],
  },

  reflection: [
    "What was your understanding of a vector before this lesson?",
    "How is a data vector different from a geometric arrow?",
    "Which real-world application was most meaningful to you?",
    "What question do you still have?",
  ],

  summary: [
    "A scalar uses one numerical value.",
    "A vector contains ordered components.",
    "Vectors can represent direction, magnitude, position, motion, and data.",
    "Vectors are used in physics, robotics, graphics, data science, and AI.",
    "The meaning of a vector depends on the meaning and order of its components.",
  ],

  nextLesson: {
    id: "la-m01-l02",
    slug: "scalars-and-vectors",
    title: "Scalars and Vectors",
  },

  lumineryGuidance: {
    message:
      "Before calculating with a vector, identify what every component represents.",

    prompt:
      "Describe the vector in words before using a formula or writing code.",
  },
};

export default lesson01;