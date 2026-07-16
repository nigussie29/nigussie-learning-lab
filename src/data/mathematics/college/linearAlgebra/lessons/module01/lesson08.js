const lesson08 = {
  id: "la-m01-l08",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 8,

  slug: "cosine-similarity",

  title: "Angles, Orthogonality, and Cosine Similarity",

  subtitle:
    "Using vector direction to measure geometric and semantic similarity.",

  status: "Available",

  duration: "105–120 minutes",

  level: "Foundation",

  essentialQuestion:
    "How can the angle between vectors measure direction, perpendicularity, and similarity?",

  bigIdea:
    "The normalized dot product gives the cosine of the angle between vectors. This allows us to compare direction independently of magnitude.",

  problemFirst: {
    title: "Which Document Is Most Similar?",

    scenario:
      "A search system represents a user query and several documents as vectors. Some documents have larger vector magnitudes because they contain more words, but the system needs to compare meaning rather than raw size.",

    questions: [
      "Why might raw dot product favor larger vectors?",
      "How can magnitude be removed from the comparison?",
      "What does the angle between vectors reveal?",
      "How can perpendicular vectors be interpreted?",
    ],

    expectedInsight:
      "Dividing the dot product by both magnitudes produces cosine similarity, which compares direction rather than raw size.",
  },

  learningObjectives: [
    "Calculate the angle between nonzero vectors.",
    "Use the dot product to test orthogonality.",
    "Calculate cosine similarity.",
    "Interpret cosine-similarity values.",
    "Explain why normalization removes magnitude effects.",
    "Distinguish dot product from cosine similarity.",
    "Apply cosine similarity to embeddings and search.",
    "Evaluate limitations of vector-based similarity.",
  ],

  prerequisiteKnowledge: [
    "Vector magnitude",
    "Dot product",
    "Unit vectors",
    "Basic trigonometry",
    "Inverse cosine",
  ],

  vocabulary: [
    {
      term: "Angle Between Vectors",
      definition:
        "The geometric separation between two nonzero vector directions.",
    },
    {
      term: "Cosine Similarity",
      definition:
        "The dot product divided by the product of vector magnitudes.",
    },
    {
      term: "Orthogonal",
      definition:
        "Perpendicular vectors with zero dot product.",
    },
    {
      term: "Normalized Vector",
      definition:
        "A unit vector with magnitude one.",
    },
    {
      term: "Semantic Similarity",
      definition:
        "The degree to which meanings or concepts are related.",
    },
    {
      term: "Embedding",
      definition:
        "A vector representation of an object such as a word, document, image, product, or user.",
    },
  ],

  formulas: [
    {
      id: "angle-formula",
      name: "Cosine of the Angle",
      formula:
        "cos(theta) = (u · v) / (||u|| ||v||)",
      requirement:
        "Both vectors must be nonzero.",
    },
    {
      id: "angle-calculation",
      name: "Angle Between Vectors",
      formula:
        "theta = arccos((u · v) / (||u|| ||v||))",
      meaning:
        "Uses inverse cosine to recover the angle.",
    },
    {
      id: "cosine-similarity-formula",
      name: "Cosine Similarity",
      formula:
        "similarity(u, v) = (u · v) / (||u|| ||v||)",
      range:
        "Between -1 and 1 for real nonzero vectors.",
    },
    {
      id: "orthogonality-formula",
      name: "Orthogonality",
      formula:
        "u · v = 0",
      equivalent:
        "cos(theta) = 0 and theta = 90 degrees for nonzero vectors.",
    },
  ],

  similarityInterpretation: [
    {
      value: "1",
      meaning:
        "The vectors point in the same direction.",
    },
    {
      value: "Between 0 and 1",
      meaning:
        "The vectors form an acute angle and have positive directional similarity.",
    },
    {
      value: "0",
      meaning:
        "The vectors are orthogonal.",
    },
    {
      value: "Between -1 and 0",
      meaning:
        "The vectors form an obtuse angle.",
    },
    {
      value: "-1",
      meaning:
        "The vectors point in exactly opposite directions.",
    },
  ],

  dotProductComparison: {
    title: "Dot Product vs. Cosine Similarity",

    dotProduct: {
      formula:
        "u · v",
      affectedBy:
        "Direction and magnitude",
      use:
        "Weighted combinations, work, neural computations, raw alignment",
    },

    cosineSimilarity: {
      formula:
        "(u · v) / (||u|| ||v||)",
      affectedBy:
        "Primarily direction",
      use:
        "Comparing embeddings, documents, images, products, or users",
    },

    keyInsight:
      "Cosine similarity normalizes the dot product by both vector magnitudes.",
  },

  workedExamples: [
    {
      id: "example-08-01",

      title: "Angle Between Identical Directions",

      problem:
        "Find the cosine similarity between u = [2, 0] and v = [5, 0].",

      solutionSteps: [
        "Calculate u · v = 2 × 5 = 10.",
        "Calculate ||u|| = 2.",
        "Calculate ||v|| = 5.",
        "Divide: 10 / (2 × 5) = 1.",
      ],

      answer:
        "Cosine similarity = 1",

      interpretation:
        "The vectors point in the same direction despite different magnitudes.",
    },

    {
      id: "example-08-02",

      title: "Orthogonal Vectors",

      problem:
        "Find the cosine similarity between [1, 0] and [0, 4].",

      solutionSteps: [
        "The dot product is zero.",
        "Both vectors are nonzero.",
        "Cosine similarity is zero.",
      ],

      answer:
        "Cosine similarity = 0",

      interpretation:
        "The vectors are perpendicular.",
    },

    {
      id: "example-08-03",

      title: "Opposite Directions",

      problem:
        "Find the cosine similarity between [3, 0] and [-8, 0].",

      solutionSteps: [
        "Dot product: 3 × (-8) = -24.",
        "Magnitudes: 3 and 8.",
        "Similarity: -24 / 24 = -1.",
      ],

      answer:
        "Cosine similarity = -1",

      interpretation:
        "The vectors point in exactly opposite directions.",
    },

    {
      id: "example-08-04",

      title: "Finding an Angle",

      problem:
        "Find the angle between u = [1, 0] and v = [1, 1].",

      solutionSteps: [
        "u · v = 1.",
        "||u|| = 1.",
        "||v|| = sqrt(2).",
        "cos(theta) = 1/sqrt(2).",
        "theta = arccos(1/sqrt(2)).",
      ],

      answer:
        "theta = 45 degrees",
    },

    {
      id: "example-08-05",

      title: "Comparing Data Vectors",

      problem:
        "Compare u = [1, 2] and v = [2, 4].",

      solutionSteps: [
        "v is exactly 2u.",
        "They have different magnitudes.",
        "They point in the same direction.",
      ],

      answer:
        "Cosine similarity = 1",
    },

    {
      id: "example-08-06",

      title: "Document Similarity",

      problem:
        "A query vector is q = [1, 1, 0]. Document A is [2, 2, 0], and Document B is [0, 1, 3]. Which document is directionally more similar to the query?",

      solutionSteps: [
        "Document A is a positive scalar multiple of q.",
        "Therefore similarity(q, A) = 1.",
        "Document B includes a large third component absent from q.",
        "Its cosine similarity is lower.",
      ],

      answer:
        "Document A is more similar.",
    },
  ],

  orthogonality: {
    title: "Why Orthogonality Matters",

    explanation:
      "Orthogonal vectors represent independent geometric directions. A vector has no component in an orthogonal direction.",

    applications: [
      "Coordinate axes",
      "Projection",
      "Signal separation",
      "Least squares",
      "Feature decomposition",
      "Computer graphics",
    ],

    warning:
      "In application data, zero cosine similarity does not always mean concepts are completely unrelated. It means the vector representations are orthogonal under the chosen model.",
  },

  realWorldApplications: [
    {
      field: "Search Engines",
      application:
        "Compare query and document embeddings.",
    },
    {
      field: "Recommendation Systems",
      application:
        "Compare user-preference and product vectors.",
    },
    {
      field: "Natural Language Processing",
      application:
        "Compare word, sentence, or document embeddings.",
    },
    {
      field: "Computer Vision",
      application:
        "Compare image feature vectors.",
    },
    {
      field: "Robotics",
      application:
        "Measure directional alignment and perpendicularity.",
    },
    {
      field: "Data Science",
      application:
        "Compare observations based on pattern rather than raw magnitude.",
    },
  ],

  aiConnection: {
    title: "Semantic Search with Embeddings",

    explanation:
      "An AI model converts a query and documents into embeddings. Cosine similarity ranks documents whose vectors point in similar directions.",

    simplifiedWorkflow: [
      "Convert the query into a vector.",
      "Convert every document into a vector.",
      "Calculate cosine similarity.",
      "Rank documents from highest to lowest similarity.",
      "Return the most relevant results.",
    ],

    limitations: [
      "Similarity depends on the embedding model.",
      "Biases in training data may affect vector relationships.",
      "High similarity does not guarantee factual correctness.",
      "Context may be lost in a fixed vector representation.",
    ],
  },

  pythonLab: {
    title: "Cosine Similarity and Angle Calculator",

    objective:
      "Implement cosine similarity safely and calculate vector angles.",

    code: `import numpy as np

def magnitude(vector):
    vector = np.array(vector, dtype=float)
    return np.linalg.norm(vector)

def cosine_similarity(vector_a, vector_b):
    a = np.array(vector_a, dtype=float)
    b = np.array(vector_b, dtype=float)

    if a.shape != b.shape:
        raise ValueError("Vectors must have the same dimension.")

    magnitude_a = magnitude(a)
    magnitude_b = magnitude(b)

    if np.isclose(magnitude_a, 0) or np.isclose(magnitude_b, 0):
        raise ValueError(
            "Cosine similarity is undefined for the zero vector."
        )

    similarity = np.dot(a, b) / (magnitude_a * magnitude_b)

    return np.clip(similarity, -1.0, 1.0)

def angle_degrees(vector_a, vector_b):
    similarity = cosine_similarity(vector_a, vector_b)
    return np.degrees(np.arccos(similarity))

u = np.array([1, 0], dtype=float)
v = np.array([1, 1], dtype=float)

print("Cosine similarity:", cosine_similarity(u, v))
print("Angle:", angle_degrees(u, v))`,

    questions: [
      "Why is cosine similarity undefined for the zero vector?",
      "Why is np.clip used before arccos?",
      "What similarity corresponds to 90 degrees?",
      "Can vectors have similarity one but different magnitudes?",
      "How could this function rank document embeddings?",
    ],

    extension:
      "Given one query vector and five document vectors, rank the documents by cosine similarity.",
  },

  guidedPractice: [
    {
      id: "guided-08-01",
      question:
        "Find the cosine similarity between [1, 0] and [4, 0].",
      answer: "1",
    },
    {
      id: "guided-08-02",
      question:
        "Find the cosine similarity between [1, 0] and [-3, 0].",
      answer: "-1",
    },
    {
      id: "guided-08-03",
      question:
        "Find the cosine similarity between [1, 0] and [0, 5].",
      answer: "0",
    },
    {
      id: "guided-08-04",
      question:
        "Find the angle between [1, 0] and [1, sqrt(3)].",
      answer: "60 degrees",
    },
    {
      id: "guided-08-05",
      question:
        "Are [2, 4] and [1, 2] directionally identical?",
      answer:
        "Yes. Their cosine similarity is 1.",
    },
  ],

  independentPractice: [
    {
      id: "practice-08-01",
      difficulty: "Foundation",
      question:
        "Find the cosine similarity between [0, 2] and [0, 7].",
      answer: "1",
    },
    {
      id: "practice-08-02",
      difficulty: "Foundation",
      question:
        "Find the cosine similarity between [2, 0] and [0, -5].",
      answer: "0",
    },
    {
      id: "practice-08-03",
      difficulty: "Developing",
      question:
        "Find the angle between [1, 1] and [1, -1].",
      answer: "90 degrees",
    },
    {
      id: "practice-08-04",
      difficulty: "Developing",
      question:
        "Calculate the cosine similarity between [1, 2] and [2, 1].",
      answer: "4/5 or 0.8",
    },
    {
      id: "practice-08-05",
      difficulty: "Developing",
      question:
        "Explain why [1, 2] and [10, 20] have cosine similarity one.",
      answer:
        "One vector is a positive scalar multiple of the other, so their directions are identical.",
    },
    {
      id: "practice-08-06",
      difficulty: "Challenge",
      question:
        "Explain why raw dot product can rank a large vector above a better-aligned smaller vector.",
      sampleAnswer:
        "The raw dot product increases with magnitude as well as alignment.",
    },
    {
      id: "practice-08-07",
      difficulty: "Challenge",
      question:
        "Describe one limitation of using cosine similarity for human meaning.",
      sampleAnswer:
        "The embedding may reflect model bias or omit important context.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Using only the dot product as cosine similarity.",

      correction:
        "Divide the dot product by both vector magnitudes.",
    },
    {
      mistake:
        "Trying to compare vectors with different dimensions.",

      correction:
        "The vectors must use the same dimension and component meaning.",
    },
    {
      mistake:
        "Calculating similarity with a zero vector.",

      correction:
        "Cosine similarity is undefined because the denominator becomes zero.",
    },
    {
      mistake:
        "Assuming cosine similarity measures distance.",

      correction:
        "It measures directional similarity, not Euclidean separation.",
    },
    {
      mistake:
        "Assuming high similarity guarantees truth or correctness.",

      correction:
        "It only indicates similarity under the chosen vector representation.",
    },
  ],

  formativeAssessment: {
    totalPoints: 18,

    passingScore: 15,

    questions: [
      {
        id: "check-08-01",
        type: "calculation",
        points: 3,
        prompt:
          "Find the cosine similarity between [2, 0] and [7, 0].",
        answer: "1",
      },
      {
        id: "check-08-02",
        type: "calculation",
        points: 3,
        prompt:
          "Find the angle between [1, 0] and [0, 1].",
        answer: "90 degrees",
      },
      {
        id: "check-08-03",
        type: "calculation",
        points: 4,
        prompt:
          "Find the cosine similarity between [1, 2] and [2, 1].",
        answer: "0.8",
      },
      {
        id: "check-08-04",
        type: "explanation",
        points: 4,
        prompt:
          "Explain why cosine similarity is unaffected by positive scaling.",
        answer:
          "The scale factor appears in both the dot product and magnitude product, so it cancels.",
      },
      {
        id: "check-08-05",
        type: "application",
        points: 4,
        prompt:
          "Explain how cosine similarity can support semantic search.",
        sampleAnswer:
          "It compares the direction of query and document embeddings and ranks the most similar vectors.",
      },
    ],
  },

  moduleSynthesis: {
    title: "Module 1 Vector Foundations",

    connections: [
      "Components represent coordinates or features.",
      "Magnitude measures vector size.",
      "Normalization removes magnitude while preserving direction.",
      "Addition combines vector effects.",
      "Subtraction measures change.",
      "Scalar multiplication controls magnitude and direction.",
      "The dot product measures alignment.",
      "Cosine similarity compares direction independently of magnitude.",
    ],

    masteryChallenge:
      "Build a Vector Intelligence Toolkit that calculates magnitude, normalization, addition, subtraction, scaling, dot product, angle, orthogonality, and cosine similarity.",
  },

  researchExtension: {
    title: "Embedding Similarity Investigation",

    researchQuestion:
      "How well does cosine similarity represent meaningful similarity in an embedding system?",

    task:
      "Use or create a small collection of vectors representing words, documents, products, or users and compare their similarity rankings.",

    requiredEvidence: [
      "At least six vectors",
      "One query vector",
      "Cosine-similarity calculations",
      "Ranked results",
      "Interpretation",
      "At least one unexpected result",
      "Discussion of limitations",
    ],
  },

  portfolioArtifact: {
    title: "Vector Similarity Search Demonstration",

    description:
      "Create a small Python application or notebook that ranks vectors by cosine similarity.",

    requiredFeatures: [
      "Query vector",
      "At least five comparison vectors",
      "Safe zero-vector handling",
      "Ranked similarity results",
      "Angle or similarity visualization",
      "Written interpretation",
    ],

    requiredEvidence: [
      "Mathematical formula",
      "Python implementation",
      "Tests",
      "Results table",
      "Limitations",
      "Reflection",
    ],
  },

  reflection: [
    "What is the difference between dot product and cosine similarity?",
    "Why is cosine similarity unaffected by positive scaling?",
    "What does orthogonality mean geometrically and in data?",
    "Why can a high similarity score still be misleading?",
    "How do all eight Module 1 lessons connect?",
  ],

  summary: [
    "The angle between vectors is calculated using the normalized dot product.",
    "Cosine similarity ranges from -1 to 1 for real nonzero vectors.",
    "A similarity of 1 means the same direction.",
    "A similarity of 0 means orthogonality.",
    "A similarity of -1 means opposite directions.",
    "Cosine similarity removes raw magnitude effects.",
    "It is widely used with embeddings in search, recommendations, NLP, and computer vision.",
    "Similarity quality depends on the quality and meaning of the vector representation.",
  ],

  previousLesson: {
    id: "la-m01-l07",
    slug: "dot-product",
    title: "The Dot Product",
  },

  nextModule: {
    id: "module-02",
    slug: "matrices",
    title: "Matrices and Matrix Operations",
  },

  lumineryGuidance: {
    message:
      "Cosine similarity compares direction, but direction is meaningful only when vector components share the same representation.",

    prompt:
      "Before trusting a similarity score, ask how the vectors were created, what each dimension means, and what important context may be missing.",
  },
};

export default lesson08;