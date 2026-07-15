const lesson07 = {
  id: "la-m01-l07",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 7,

  slug: "dot-product",

  title: "The Dot Product",

  subtitle:
    "Measuring alignment, work, similarity, and projection using vector multiplication.",

  status: "Available",

  duration: "90–105 minutes",

  level: "Foundation",

  essentialQuestion:
    "How can two vectors be combined to measure alignment and produce one meaningful scalar?",

  bigIdea:
    "The dot product multiplies corresponding components and adds the results. It measures how strongly two vectors align.",

  problemFirst: {
    title: "Does a Force Help the Motion?",

    scenario:
      "A box moves horizontally while a force is applied at an angle. Only the portion of the force pointing in the movement direction contributes directly to the work done.",

    questions: [
      "How can we measure how much of the force aligns with movement?",
      "What happens if the force is perpendicular to motion?",
      "What happens if the force points backward?",
      "Why should the result be a scalar?",
    ],

    expectedInsight:
      "The dot product measures directional alignment and produces a scalar.",
  },

  learningObjectives: [
    "Calculate the dot product of equal-dimension vectors.",
    "Interpret the sign of a dot product.",
    "Connect the dot product to vector magnitude and angle.",
    "Use the dot product to identify orthogonality.",
    "Explain the physical meaning of work.",
    "Connect dot products to projection and cosine similarity.",
    "Implement the dot product from first principles.",
    "Apply dot products in AI, graphics, physics, and data science.",
  ],

  prerequisiteKnowledge: [
    "Vector components",
    "Scalar multiplication",
    "Vector magnitude",
    "Basic multiplication and addition",
    "Angles and cosine",
  ],

  vocabulary: [
    {
      term: "Dot Product",
      definition:
        "A scalar obtained by multiplying corresponding vector components and adding the products.",
    },
    {
      term: "Inner Product",
      definition:
        "A general operation that measures geometric relationships such as length and angle.",
    },
    {
      term: "Alignment",
      definition:
        "The degree to which two vectors point in similar directions.",
    },
    {
      term: "Orthogonal",
      definition:
        "Perpendicular vectors whose dot product is zero.",
    },
    {
      term: "Acute Angle",
      definition:
        "An angle less than 90 degrees, associated with a positive dot product.",
    },
    {
      term: "Obtuse Angle",
      definition:
        "An angle greater than 90 degrees, associated with a negative dot product.",
    },
  ],

  formulas: [
    {
      id: "component-dot-product",
      name: "Component Formula",
      formula:
        "u · v = u1v1 + u2v2 + ... + unvn",
      meaning:
        "Multiply matching components and add.",
    },
    {
      id: "geometric-dot-product",
      name: "Geometric Formula",
      formula:
        "u · v = ||u|| ||v|| cos(theta)",
      meaning:
        "Connects dot product to vector lengths and angle.",
    },
    {
      id: "orthogonality-condition",
      name: "Orthogonality Test",
      formula:
        "u · v = 0",
      meaning:
        "Nonzero vectors are perpendicular when their dot product is zero.",
    },
    {
      id: "work-formula",
      name: "Work",
      formula:
        "W = F · d",
      meaning:
        "Work equals force dotted with displacement.",
    },
  ],

  signInterpretation: [
    {
      condition: "u · v > 0",
      interpretation:
        "The angle is acute and the vectors point generally in similar directions.",
    },
    {
      condition: "u · v = 0",
      interpretation:
        "The vectors are orthogonal, assuming both are nonzero.",
    },
    {
      condition: "u · v < 0",
      interpretation:
        "The angle is obtuse and the vectors point generally in opposite directions.",
    },
  ],

  workedExamples: [
    {
      id: "example-07-01",

      title: "Basic Dot Product",

      problem:
        "Calculate [2, 3] · [4, 5].",

      solutionSteps: [
        "Multiply corresponding components.",
        "2 × 4 = 8.",
        "3 × 5 = 15.",
        "Add the products: 8 + 15 = 23.",
      ],

      answer: "23",
    },

    {
      id: "example-07-02",

      title: "Dot Product with Negative Components",

      problem:
        "Calculate [3, -2] · [5, 4].",

      solutionSteps: [
        "3 × 5 = 15.",
        "-2 × 4 = -8.",
        "Add: 15 + (-8) = 7.",
      ],

      answer: "7",
    },

    {
      id: "example-07-03",

      title: "Orthogonal Vectors",

      problem:
        "Determine whether [1, 2] and [4, -2] are orthogonal.",

      solutionSteps: [
        "Calculate the dot product.",
        "1 × 4 + 2 × (-2) = 4 - 4.",
        "The result is zero.",
      ],

      answer:
        "Yes. The vectors are orthogonal.",
    },

    {
      id: "example-07-04",

      title: "Positive Alignment",

      problem:
        "Interpret the sign of [2, 1] · [3, 4].",

      solutionSteps: [
        "Calculate 2 × 3 + 1 × 4.",
        "The result is 10.",
        "The result is positive.",
      ],

      answer:
        "The vectors form an acute angle and point generally in similar directions.",
    },

    {
      id: "example-07-05",

      title: "Negative Alignment",

      problem:
        "Interpret [2, 1] · [-3, -4].",

      solutionSteps: [
        "Calculate 2 × (-3) + 1 × (-4).",
        "The result is -10.",
      ],

      answer:
        "The vectors form an obtuse angle and point generally in opposite directions.",
    },

    {
      id: "example-07-06",

      title: "Work Done by a Force",

      problem:
        "A force F = [10, 0] newtons moves an object through displacement d = [5, 0] meters. Find the work.",

      solutionSteps: [
        "Use W = F · d.",
        "10 × 5 + 0 × 0 = 50.",
      ],

      answer: "50 joules",
    },

    {
      id: "example-07-07",

      title: "Perpendicular Force",

      problem:
        "A force F = [0, 8] acts while displacement is d = [6, 0]. Find the work.",

      solutionSteps: [
        "Calculate F · d.",
        "0 × 6 + 8 × 0 = 0.",
      ],

      answer: "0 joules",

      interpretation:
        "The force is perpendicular to displacement and contributes no work in the movement direction.",
    },

    {
      id: "example-07-08",

      title: "High-Dimensional Dot Product",

      problem:
        "Calculate [1, 2, 3] · [4, 0, -1].",

      solutionSteps: [
        "1 × 4 = 4.",
        "2 × 0 = 0.",
        "3 × (-1) = -3.",
        "Add: 4 + 0 - 3 = 1.",
      ],

      answer: "1",
    },
  ],

  properties: [
    {
      property: "Commutative",
      formula:
        "u · v = v · u",
      explanation:
        "The order of the vectors does not change the result.",
    },
    {
      property: "Distributive",
      formula:
        "u · (v + w) = u · v + u · w",
      explanation:
        "The dot product distributes over addition.",
    },
    {
      property: "Scalar Compatibility",
      formula:
        "(cu) · v = c(u · v)",
      explanation:
        "A scalar can be factored out.",
    },
    {
      property: "Self Dot Product",
      formula:
        "v · v = ||v||^2",
      explanation:
        "A vector dotted with itself equals its magnitude squared.",
    },
  ],

  realWorldApplications: [
    {
      field: "Physics",
      application:
        "Calculating work and directional force.",
    },
    {
      field: "Computer Graphics",
      application:
        "Lighting depends on alignment between light direction and surface normals.",
    },
    {
      field: "Robotics",
      application:
        "Checking whether directions are perpendicular or aligned.",
    },
    {
      field: "Data Science",
      application:
        "Weighted sums and similarity calculations use dot products.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Neural-network units calculate weighted dot products.",
    },
    {
      field: "Search Systems",
      application:
        "Embeddings are compared using dot products or normalized dot products.",
    },
  ],

  aiConnection: {
    title: "Dot Products in Neural Networks",

    explanation:
      "A neuron receives an input vector and a weight vector. Their dot product combines the inputs using learned weights.",

    formula:
      "z = w · x + b",

    interpretation:
      "Each feature contributes according to its corresponding weight.",

    example:
      "If x = [income, debt, payment history] and w contains learned weights, w · x produces a weighted score before the activation function.",
  },

  pythonLab: {
    title: "Dot Product from First Principles",

    objective:
      "Implement the dot product manually and compare it with NumPy.",

    code: `import numpy as np

def dot_product(vector_a, vector_b):
    a = np.array(vector_a, dtype=float)
    b = np.array(vector_b, dtype=float)

    if a.shape != b.shape:
        raise ValueError("Vectors must have the same dimension.")

    total = 0.0

    for component_a, component_b in zip(a, b):
        total += component_a * component_b

    return total

u = np.array([2, 3], dtype=float)
v = np.array([4, 5], dtype=float)

manual_result = dot_product(u, v)
numpy_result = np.dot(u, v)

print("Manual:", manual_result)
print("NumPy:", numpy_result)
print("Equal:", np.isclose(manual_result, numpy_result))`,

    questions: [
      "Why must the vectors have the same dimension?",
      "Why does the output have only one value?",
      "What does a zero result mean geometrically?",
      "How is v · v related to magnitude?",
      "How is a neural-network weighted sum a dot product?",
    ],

    extension:
      "Create a function that returns positive, zero, or negative alignment interpretation.",
  },

  guidedPractice: [
    {
      id: "guided-07-01",
      question:
        "Calculate [1, 3] · [2, 4].",
      answer: "14",
    },
    {
      id: "guided-07-02",
      question:
        "Calculate [5, -2] · [1, 3].",
      answer: "-1",
    },
    {
      id: "guided-07-03",
      question:
        "Determine whether [3, 4] and [4, -3] are orthogonal.",
      answer:
        "Yes, because 3(4) + 4(-3) = 0.",
    },
    {
      id: "guided-07-04",
      question:
        "If ||v|| = 6, find v · v.",
      answer: "36",
    },
    {
      id: "guided-07-05",
      question:
        "What does a negative dot product indicate?",
      answer:
        "The angle between the vectors is obtuse.",
    },
  ],

  independentPractice: [
    {
      id: "practice-07-01",
      difficulty: "Foundation",
      question:
        "Calculate [2, 5] · [3, 1].",
      answer: "11",
    },
    {
      id: "practice-07-02",
      difficulty: "Foundation",
      question:
        "Calculate [-2, 4] · [3, -1].",
      answer: "-10",
    },
    {
      id: "practice-07-03",
      difficulty: "Developing",
      question:
        "Find k so that [2, k] is orthogonal to [3, 6].",
      answer:
        "k = -1",
    },
    {
      id: "practice-07-04",
      difficulty: "Developing",
      question:
        "A force [8, 2] acts through displacement [4, 0]. Find the work.",
      answer: "32",
    },
    {
      id: "practice-07-05",
      difficulty: "Developing",
      question:
        "Verify v · v = ||v||^2 for v = [3, 4].",
      answer:
        "v · v = 25 and ||v||^2 = 25.",
    },
    {
      id: "practice-07-06",
      difficulty: "Challenge",
      question:
        "Explain why perpendicular force contributes zero work along a displacement.",
      sampleAnswer:
        "Its component in the displacement direction is zero, so their dot product is zero.",
    },
    {
      id: "practice-07-07",
      difficulty: "Challenge",
      question:
        "Explain why a large dot product does not always mean two vectors have a small angle.",
      sampleAnswer:
        "Magnitude also affects the dot product. Large vectors can produce a large dot product even if their directions are not extremely similar.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Returning a vector instead of a scalar.",

      correction:
        "The dot product multiplies components and then adds them into one number.",
    },
    {
      mistake:
        "Multiplying unmatched components.",

      correction:
        "Multiply components in corresponding positions.",
    },
    {
      mistake:
        "Forgetting to add the component products.",

      correction:
        "The final dot product is the sum of all component products.",
    },
    {
      mistake:
        "Assuming zero dot product means one vector is zero.",

      correction:
        "Two nonzero perpendicular vectors can have a zero dot product.",
    },
    {
      mistake:
        "Using dot product alone as normalized similarity.",

      correction:
        "Raw dot product is affected by vector magnitude. Cosine similarity normalizes it.",
    },
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-07-01",
        type: "calculation",
        points: 3,
        prompt:
          "Calculate [3, 2] · [5, -1].",
        answer: "13",
      },
      {
        id: "check-07-02",
        type: "orthogonality",
        points: 3,
        prompt:
          "Are [2, 1] and [1, -2] orthogonal?",
        answer:
          "Yes. Their dot product is zero.",
      },
      {
        id: "check-07-03",
        type: "concept",
        points: 3,
        prompt:
          "What does a negative dot product indicate?",
        answer:
          "The vectors form an obtuse angle.",
      },
      {
        id: "check-07-04",
        type: "application",
        points: 3,
        prompt:
          "A force [6, 0] acts through displacement [3, 4]. Find the work.",
        answer: "18",
      },
      {
        id: "check-07-05",
        type: "explanation",
        points: 3,
        prompt:
          "Explain how a neuron uses a dot product.",
        sampleAnswer:
          "It multiplies input features by learned weights and adds the products.",
      },
    ],
  },

  researchExtension: {
    title: "Dot Products in Neural Networks",

    researchQuestion:
      "Why is the dot product one of the central operations in machine learning?",

    task:
      "Investigate how one neuron or dense layer uses dot products.",

    requiredEvidence: [
      "Input vector",
      "Weight vector",
      "Manual dot-product calculation",
      "Python verification",
      "Interpretation of the output",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Dot Product Application Guide",

    description:
      "Create a portfolio page demonstrating at least four meanings of the dot product.",

    requiredApplications: [
      "Alignment",
      "Orthogonality",
      "Physical work",
      "Neural-network weighted sum",
    ],

    requiredEvidence: [
      "Formula",
      "Worked examples",
      "One geometric diagram",
      "Python verification",
      "Reflection",
    ],
  },

  reflection: [
    "Why does the dot product produce a scalar?",
    "What does its sign reveal?",
    "How does it test orthogonality?",
    "How does magnitude affect the dot product?",
    "Why is the dot product fundamental in AI?",
  ],

  summary: [
    "The dot product multiplies corresponding components and adds the results.",
    "Its output is a scalar.",
    "A positive result indicates general alignment.",
    "A zero result indicates orthogonality for nonzero vectors.",
    "A negative result indicates generally opposite directions.",
    "The dot product equals ||u||||v||cos(theta).",
    "A vector dotted with itself equals its magnitude squared.",
    "Dot products power work calculations, lighting, similarity, and neural networks.",
  ],

  previousLesson: {
    id: "la-m01-l06",
    slug: "scalar-multiplication",
    title: "Scalar Multiplication and Direction",
  },

  nextLesson: {
    id: "la-m01-l08",
    slug: "cosine-similarity",
    title: "Angles, Orthogonality, and Cosine Similarity",
  },

  lumineryGuidance: {
    message:
      "The dot product does not merely multiply numbers. It measures how much one vector points in the direction of another.",

    prompt:
      "Before calculating, predict whether the result should be positive, zero, or negative.",
  },
};

export default lesson07;