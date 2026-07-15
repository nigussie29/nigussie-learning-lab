const lesson06 = {
  id: "la-m01-l06",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 6,

  slug: "scalar-multiplication",

  title: "Scalar Multiplication and Direction",

  subtitle:
    "Understanding how a scalar stretches, shrinks, preserves, or reverses a vector.",

  status: "Available",

  duration: "75–90 minutes",

  level: "Foundation",

  essentialQuestion:
    "How does multiplying a vector by a scalar change its magnitude and direction?",

  bigIdea:
    "Scalar multiplication changes every component of a vector by the same factor. The scalar controls the vector’s length and may reverse its direction.",

  problemFirst: {
    title: "Changing a Robot’s Movement",

    scenario:
      "A robot has a movement command represented by the vector [3, 2]. We want the robot to move twice as far in the same direction, half as far, or in the opposite direction.",

    questions: [
      "How can we double the movement without changing direction?",
      "How can we reduce the movement by half?",
      "How can we reverse the movement?",
      "What happens when the scalar is zero?",
    ],

    expectedInsight:
      "Multiply every component by the same scalar. Positive scalars preserve direction, negative scalars reverse direction, and zero produces the zero vector.",
  },

  learningObjectives: [
    "Multiply a vector by a scalar.",
    "Interpret scalar multiplication geometrically.",
    "Explain how positive scalars affect direction.",
    "Explain how negative scalars reverse direction.",
    "Explain how scalar magnitude affects vector magnitude.",
    "Connect scalar multiplication to speed, force, graphics, data, and AI.",
    "Verify scalar multiplication properties.",
    "Implement scalar multiplication using Python.",
  ],

  prerequisiteKnowledge: [
    "Vector components",
    "Vector magnitude",
    "Positive and negative numbers",
    "Multiplication",
    "Vector addition",
  ],

  vocabulary: [
    {
      term: "Scalar",
      definition:
        "A single numerical value used to multiply or scale a vector.",
    },
    {
      term: "Scalar Multiplication",
      definition:
        "Multiplying every component of a vector by the same scalar.",
    },
    {
      term: "Scaling",
      definition:
        "Changing the magnitude of a vector by multiplication.",
    },
    {
      term: "Direction Reversal",
      definition:
        "Changing a vector so that it points in the opposite direction.",
    },
    {
      term: "Zero Vector",
      definition:
        "A vector with all components equal to zero.",
    },
    {
      term: "Collinear Vectors",
      definition:
        "Vectors that lie along the same line, possibly pointing in opposite directions.",
    },
  ],

  formulas: [
    {
      id: "scalar-vector-product",
      name: "Scalar Multiplication",
      formula:
        "cv = [cv1, cv2, ..., cvn]",
      meaning:
        "Multiply each component of v by c.",
    },
    {
      id: "scaled-magnitude",
      name: "Magnitude Under Scaling",
      formula:
        "||cv|| = |c| ||v||",
      meaning:
        "The magnitude is multiplied by the absolute value of the scalar.",
    },
    {
      id: "opposite-vector",
      name: "Opposite Vector",
      formula:
        "-v = (-1)v",
      meaning:
        "Multiplying by -1 preserves magnitude but reverses direction.",
    },
    {
      id: "zero-scaling",
      name: "Zero Scalar",
      formula:
        "0v = 0",
      meaning:
        "Multiplying any vector by zero produces the zero vector.",
    },
  ],

  scalarEffects: [
    {
      condition: "c > 1",
      effect:
        "The vector becomes longer and keeps the same direction.",
    },
    {
      condition: "0 < c < 1",
      effect:
        "The vector becomes shorter and keeps the same direction.",
    },
    {
      condition: "c = 1",
      effect:
        "The vector remains unchanged.",
    },
    {
      condition: "c = 0",
      effect:
        "The vector becomes the zero vector.",
    },
    {
      condition: "-1 < c < 0",
      effect:
        "The vector becomes shorter and reverses direction.",
    },
    {
      condition: "c = -1",
      effect:
        "The vector keeps its magnitude and reverses direction.",
    },
    {
      condition: "c < -1",
      effect:
        "The vector becomes longer and reverses direction.",
    },
  ],

  geometricInterpretation: {
    title: "Scaling Along the Same Line",

    explanation:
      "All scalar multiples of a nonzero vector lie on the same line through the origin.",

    examples: [
      {
        original: "[2, 1]",
        scalar: 2,
        result: "[4, 2]",
        interpretation:
          "Twice the magnitude in the same direction.",
      },
      {
        original: "[2, 1]",
        scalar: 0.5,
        result: "[1, 0.5]",
        interpretation:
          "Half the magnitude in the same direction.",
      },
      {
        original: "[2, 1]",
        scalar: -1,
        result: "[-2, -1]",
        interpretation:
          "Same magnitude in the opposite direction.",
      },
      {
        original: "[2, 1]",
        scalar: -3,
        result: "[-6, -3]",
        interpretation:
          "Three times the magnitude in the opposite direction.",
      },
    ],
  },

  properties: [
    {
      property: "Distributive over Vector Addition",
      formula:
        "c(u + v) = cu + cv",
      explanation:
        "Scaling a sum gives the same result as scaling each vector and then adding.",
    },
    {
      property: "Distributive over Scalar Addition",
      formula:
        "(a + b)v = av + bv",
      explanation:
        "Adding scalars before scaling gives the same result as adding the scaled vectors.",
    },
    {
      property: "Associative Scaling",
      formula:
        "a(bv) = (ab)v",
      explanation:
        "Successive scaling factors multiply.",
    },
    {
      property: "Multiplicative Identity",
      formula:
        "1v = v",
      explanation:
        "Multiplying by one leaves the vector unchanged.",
    },
    {
      property: "Zero Property",
      formula:
        "0v = 0",
      explanation:
        "Multiplying by zero removes all magnitude and direction.",
    },
  ],

  workedExamples: [
    {
      id: "example-06-01",

      title: "Positive Scalar",

      problem:
        "Calculate 3[2, -4].",

      solutionSteps: [
        "Multiply the first component by 3: 3 × 2 = 6.",
        "Multiply the second component by 3: 3 × (-4) = -12.",
      ],

      answer: "[6, -12]",

      interpretation:
        "The vector is three times longer and points in the same direction.",
    },

    {
      id: "example-06-02",

      title: "Fractional Scalar",

      problem:
        "Calculate 0.5[8, 6].",

      solutionSteps: [
        "Multiply 8 by 0.5 to get 4.",
        "Multiply 6 by 0.5 to get 3.",
      ],

      answer: "[4, 3]",

      interpretation:
        "The vector has half the original magnitude.",
    },

    {
      id: "example-06-03",

      title: "Negative Scalar",

      problem:
        "Calculate -2[3, 5].",

      solutionSteps: [
        "Multiply 3 by -2 to get -6.",
        "Multiply 5 by -2 to get -10.",
      ],

      answer: "[-6, -10]",

      interpretation:
        "The vector becomes twice as long and reverses direction.",
    },

    {
      id: "example-06-04",

      title: "Magnitude After Scaling",

      problem:
        "A vector v has magnitude 7. Find the magnitude of -4v.",

      solutionSteps: [
        "Use ||cv|| = |c| ||v||.",
        "The scalar is -4, so |c| = 4.",
        "Multiply 4 × 7.",
      ],

      answer: "||-4v|| = 28",
    },

    {
      id: "example-06-05",

      title: "Speeding Up a Robot",

      problem:
        "A robot’s velocity vector is [2, 3] meters per second. Its speed is tripled while direction remains unchanged. Find the new velocity.",

      solutionSteps: [
        "Use scalar 3.",
        "Multiply every component by 3.",
        "3[2, 3] = [6, 9].",
      ],

      answer: "[6, 9] meters per second",
    },

    {
      id: "example-06-06",

      title: "Reversing a Force",

      problem:
        "A force vector is [5, -2]. Find a vector with the same magnitude but opposite direction.",

      solutionSteps: [
        "Multiply by -1.",
        "-1[5, -2] = [-5, 2].",
      ],

      answer: "[-5, 2]",
    },

    {
      id: "example-06-07",

      title: "Scaling a Data Update",

      problem:
        "A model update vector is [0.2, -0.1, 0.4]. Apply a learning rate of 0.05.",

      solutionSteps: [
        "Multiply each component by 0.05.",
        "0.05 × 0.2 = 0.01.",
        "0.05 × -0.1 = -0.005.",
        "0.05 × 0.4 = 0.02.",
      ],

      answer: "[0.01, -0.005, 0.02]",

      interpretation:
        "The scalar controls the size of the update.",
    },
  ],

  realWorldApplications: [
    {
      field: "Physics",
      application:
        "Scaling changes the strength of velocity, force, acceleration, or momentum.",
    },
    {
      field: "Robotics",
      application:
        "A direction vector is multiplied by a speed or travel distance.",
    },
    {
      field: "Computer Graphics",
      application:
        "Objects and direction vectors are enlarged, reduced, or reversed.",
    },
    {
      field: "Data Science",
      application:
        "Feature vectors and model updates may be multiplied by weights.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Learning rates scale gradient vectors during model training.",
    },
    {
      field: "Finance",
      application:
        "Portfolio allocations can be scaled to reflect investment size.",
    },
  ],

  aiConnection: {
    title: "Learning Rates and Gradient Updates",

    explanation:
      "In machine learning, a gradient vector points in a direction of change. A learning rate is a scalar that controls how large the update should be.",

    formula:
      "new parameters = old parameters - learning rate × gradient",

    interpretation:
      "The gradient provides direction, while the learning rate controls step size.",

    caution:
      "A learning rate that is too large can overshoot a good solution, while one that is too small can make training very slow.",
  },

  pythonLab: {
    title: "Visualizing Scalar Multiplication",

    objective:
      "Scale a vector by several positive, fractional, zero, and negative scalars.",

    code: `import numpy as np
import matplotlib.pyplot as plt

vector = np.array([2, 1], dtype=float)
scalars = [2, 0.5, -1, -2, 0]

scaled_vectors = [scalar * vector for scalar in scalars]

plt.figure(figsize=(8, 8))

for scalar, scaled_vector in zip(scalars, scaled_vectors):
    plt.quiver(
        0,
        0,
        scaled_vector[0],
        scaled_vector[1],
        angles="xy",
        scale_units="xy",
        scale=1,
        label=f"{scalar}v"
    )

plt.xlim(-6, 6)
plt.ylim(-4, 4)
plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.legend()
plt.title("Scalar Multiples of v = [2, 1]")
plt.show()`,

    questions: [
      "Which scalar produces the longest vector?",
      "Which scalars preserve direction?",
      "Which scalars reverse direction?",
      "What does the scalar zero produce?",
      "Why do all nonzero scalar multiples lie on the same line?",
    ],

    extension:
      "Create a slider-based visualization that allows the user to change the scalar continuously.",
  },

  guidedPractice: [
    {
      id: "guided-06-01",
      question:
        "Calculate 4[1, -3].",
      answer: "[4, -12]",
    },
    {
      id: "guided-06-02",
      question:
        "Calculate -1[6, 2].",
      answer: "[-6, -2]",
    },
    {
      id: "guided-06-03",
      question:
        "Calculate 0.25[8, 12].",
      answer: "[2, 3]",
    },
    {
      id: "guided-06-04",
      question:
        "A vector has magnitude 9. Find the magnitude of 3v.",
      answer: "27",
    },
    {
      id: "guided-06-05",
      question:
        "What scalar produces the opposite of v?",
      answer: "-1",
    },
  ],

  independentPractice: [
    {
      id: "practice-06-01",
      difficulty: "Foundation",
      question:
        "Calculate 5[2, 4].",
      answer: "[10, 20]",
    },
    {
      id: "practice-06-02",
      difficulty: "Foundation",
      question:
        "Calculate -3[-2, 1].",
      answer: "[6, -3]",
    },
    {
      id: "practice-06-03",
      difficulty: "Developing",
      question:
        "A vector has magnitude 8. Find the magnitude of -0.5v.",
      answer: "4",
    },
    {
      id: "practice-06-04",
      difficulty: "Developing",
      question:
        "Find c if c[2, 3] = [10, 15].",
      answer: "c = 5",
    },
    {
      id: "practice-06-05",
      difficulty: "Developing",
      question:
        "Explain how multiplying a vector by -2 affects magnitude and direction.",
      answer:
        "The magnitude doubles and the direction reverses.",
    },
    {
      id: "practice-06-06",
      difficulty: "Challenge",
      question:
        "Verify c(u + v) = cu + cv for c = 3, u = [1, 2], and v = [4, -1].",
      answer:
        "Both sides equal [15, 3].",
    },
    {
      id: "practice-06-07",
      difficulty: "Challenge",
      question:
        "Explain why any two nonzero scalar multiples of the same vector are collinear.",
      sampleAnswer:
        "Each scalar multiple changes only length and possibly direction, so all multiples remain on the same line.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Multiplying only one component.",

      correction:
        "The scalar must multiply every component.",
    },
    {
      mistake:
        "Ignoring the sign of a negative scalar.",

      correction:
        "A negative scalar reverses the vector’s direction.",
    },
    {
      mistake:
        "Thinking a negative scalar creates a negative magnitude.",

      correction:
        "Magnitude is multiplied by the absolute value of the scalar.",
    },
    {
      mistake:
        "Confusing scalar multiplication with vector addition.",

      correction:
        "Scalar multiplication changes one vector. Addition combines two vectors.",
    },
    {
      mistake:
        "Thinking zero scaling preserves direction.",

      correction:
        "The zero vector has no defined direction.",
    },
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-06-01",
        type: "calculation",
        points: 3,
        prompt:
          "Calculate -2[4, -3].",
        answer: "[-8, 6]",
      },
      {
        id: "check-06-02",
        type: "concept",
        points: 3,
        prompt:
          "Describe the effect of multiplying a nonzero vector by 0.25.",
        answer:
          "The magnitude becomes one-fourth as large and direction stays the same.",
      },
      {
        id: "check-06-03",
        type: "calculation",
        points: 3,
        prompt:
          "A vector has magnitude 5. Find the magnitude of -6v.",
        answer: "30",
      },
      {
        id: "check-06-04",
        type: "explanation",
        points: 3,
        prompt:
          "Explain why v and -v have equal magnitude.",
        answer:
          "Multiplication by -1 changes direction but scales magnitude by |-1| = 1.",
      },
      {
        id: "check-06-05",
        type: "application",
        points: 3,
        prompt:
          "Explain how scalar multiplication appears in machine-learning training.",
        sampleAnswer:
          "A learning rate scales a gradient vector to control update size.",
      },
    ],
  },

  researchExtension: {
    title: "Scalar Multiplication in Optimization",

    researchQuestion:
      "How does step size affect movement along a direction vector in optimization?",

    task:
      "Investigate how several scalar step sizes affect repeated movement along the same or changing direction.",

    requiredEvidence: [
      "A direction vector",
      "At least four scalar values",
      "Calculated scaled vectors",
      "Visualization",
      "Discussion of overshooting and slow movement",
    ],
  },

  portfolioArtifact: {
    title: "Scalar Multiplication Visual Study",

    description:
      "Create a visual guide showing how several scalars affect one vector.",

    requiredScalars: [
      "A scalar greater than one",
      "A scalar between zero and one",
      "Zero",
      "-1",
      "A scalar less than -1",
    ],

    requiredEvidence: [
      "Original vector",
      "Scaled vectors",
      "Magnitude comparison",
      "Direction explanation",
      "Python visualization",
      "AI or robotics connection",
    ],
  },

  reflection: [
    "How does scalar sign affect vector direction?",
    "How does scalar magnitude affect vector length?",
    "Why is absolute value used in ||cv|| = |c|||v||?",
    "What information is lost when a vector is multiplied by zero?",
    "How is scalar multiplication used in machine learning?",
  ],

  summary: [
    "Scalar multiplication multiplies every vector component by the same number.",
    "Positive scalars preserve direction.",
    "Negative scalars reverse direction.",
    "The absolute scalar value controls magnitude.",
    "Multiplying by zero produces the zero vector.",
    "All scalar multiples of a nonzero vector are collinear.",
    "Scalar multiplication is used in physics, robotics, graphics, data science, and AI.",
  ],

  previousLesson: {
    id: "la-m01-l05",
    slug: "vector-addition",
    title: "Vector Addition and Subtraction",
  },

  nextLesson: {
    id: "la-m01-l07",
    slug: "dot-product",
    title: "The Dot Product",
  },

  lumineryGuidance: {
    message:
      "The vector supplies direction and structure. The scalar controls how strongly that direction is expressed.",

    prompt:
      "Before calculating, predict whether the result will be longer, shorter, unchanged, reversed, or zero.",
  },
};

export default lesson06;