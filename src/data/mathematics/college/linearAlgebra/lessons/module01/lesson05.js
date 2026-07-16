const lesson05 = {
  id: "la-m01-l05",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 5,

  slug: "vector-addition",

  title: "Vector Addition and Subtraction",

  subtitle:
    "Combining movements, forces, changes, and data using component-wise operations.",

  status: "Available",

  duration: "90–105 minutes",

  level: "Foundation",

  essentialQuestion:
    "How can vectors be combined to represent total movement, net force, change, and difference?",

  bigIdea:
    "Vectors are added and subtracted component by component. Addition combines effects, while subtraction measures change or difference.",

  problemFirst: {
    title: "Combining Two Drone Movements",

    scenario:
      "A drone first moves 4 meters east and 2 meters north. It then moves 3 meters east and 5 meters south. We need one vector that describes the drone’s total displacement.",

    questions: [
      "How should the horizontal movements be combined?",
      "How should the vertical movements be combined?",
      "What does the sign of each component tell us?",
      "How can one vector represent the complete movement?",
    ],

    expectedInsight:
      "Add corresponding components: [4, 2] + [3, -5] = [7, -3].",
  },

  learningObjectives: [
    "Add vectors component by component.",
    "Subtract vectors component by component.",
    "Interpret vector addition geometrically.",
    "Interpret vector subtraction as change or difference.",
    "Use the tip-to-tail and parallelogram methods.",
    "Calculate resultant displacement and net force.",
    "Verify vector operations with Python.",
    "Apply vector addition and subtraction to data and AI examples.",
  ],

  prerequisiteKnowledge: [
    "Vector components",
    "Positive and negative numbers",
    "Coordinate representation",
    "Basic arithmetic",
    "Magnitude and displacement",
  ],

  vocabulary: [
    {
      term: "Vector Addition",
      definition:
        "The operation of adding corresponding components of vectors with the same dimension.",
    },
    {
      term: "Vector Subtraction",
      definition:
        "The operation of subtracting corresponding components of vectors with the same dimension.",
    },
    {
      term: "Resultant Vector",
      definition:
        "The single vector produced by combining two or more vectors.",
    },
    {
      term: "Tip-to-Tail Method",
      definition:
        "A geometric method where the tail of the second vector is placed at the tip of the first vector.",
    },
    {
      term: "Parallelogram Method",
      definition:
        "A geometric method that uses two vectors as adjacent sides of a parallelogram.",
    },
    {
      term: "Difference Vector",
      definition:
        "A vector showing how one vector differs from another.",
    },
    {
      term: "Net Effect",
      definition:
        "The total result after all vector contributions are combined.",
    },
  ],

  formulas: [
    {
      id: "vector-addition-formula",
      name: "Vector Addition",
      formula:
        "u + v = [u1 + v1, u2 + v2, ..., un + vn]",
      requirement:
        "The vectors must have the same dimension.",
      meaning:
        "Corresponding components are combined.",
    },
    {
      id: "vector-subtraction-formula",
      name: "Vector Subtraction",
      formula:
        "u - v = [u1 - v1, u2 - v2, ..., un - vn]",
      requirement:
        "The vectors must have the same dimension.",
      meaning:
        "Corresponding components are subtracted.",
    },
    {
      id: "subtraction-as-addition",
      name: "Subtraction as Addition of the Opposite",
      formula:
        "u - v = u + (-v)",
      meaning:
        "Subtracting a vector is equivalent to adding its opposite.",
    },
    {
      id: "displacement-change",
      name: "Displacement Between Positions",
      formula:
        "displacement = final position - initial position",
      meaning:
        "Subtraction measures the change from one position to another.",
    },
  ],

  geometricInterpretation: {
    addition: {
      title: "Tip-to-Tail Addition",

      explanation:
        "Place the tail of the second vector at the tip of the first. The resultant vector points from the starting point to the final endpoint.",

      process: [
        "Draw the first vector.",
        "Move the second vector without changing its length or direction.",
        "Place its tail at the tip of the first vector.",
        "Draw the resultant from the original start to the final tip.",
      ],
    },

    parallelogram: {
      title: "Parallelogram Method",

      explanation:
        "Draw both vectors from the same starting point. Complete a parallelogram. The diagonal from the common starting point is the sum.",

      insight:
        "The tip-to-tail and parallelogram methods produce the same resultant.",
    },

    subtraction: {
      title: "Subtraction and the Opposite Vector",

      explanation:
        "To subtract v from u, reverse the direction of v to create -v, then add u + (-v).",

      interpretation:
        "The vector u - v points from the tip of v to the tip of u when both begin at the same origin.",
    },
  },

  properties: [
    {
      property: "Commutative Property",
      formula:
        "u + v = v + u",
      explanation:
        "Changing the order of vector addition does not change the result.",
    },
    {
      property: "Associative Property",
      formula:
        "(u + v) + w = u + (v + w)",
      explanation:
        "Grouping does not change the sum.",
    },
    {
      property: "Additive Identity",
      formula:
        "v + 0 = v",
      explanation:
        "Adding the zero vector leaves a vector unchanged.",
    },
    {
      property: "Additive Inverse",
      formula:
        "v + (-v) = 0",
      explanation:
        "A vector and its opposite cancel.",
    },
    {
      property: "Subtraction Is Not Commutative",
      formula:
        "u - v is generally not equal to v - u",
      explanation:
        "Reversing the order changes the direction of the difference.",
    },
  ],

  workedExamples: [
    {
      id: "example-05-01",

      title: "Adding Two Vectors",

      problem:
        "Calculate [3, 4] + [5, -2].",

      solutionSteps: [
        "Add the first components: 3 + 5 = 8.",
        "Add the second components: 4 + (-2) = 2.",
      ],

      answer: "[8, 2]",

      interpretation:
        "The combined vector moves 8 units horizontally and 2 units vertically.",
    },

    {
      id: "example-05-02",

      title: "Subtracting Two Vectors",

      problem:
        "Calculate [7, 3] - [2, 5].",

      solutionSteps: [
        "Subtract the first components: 7 - 2 = 5.",
        "Subtract the second components: 3 - 5 = -2.",
      ],

      answer: "[5, -2]",
    },

    {
      id: "example-05-03",

      title: "Resultant Displacement",

      problem:
        "A robot moves [4, 2], then [3, -5]. Find the total displacement.",

      solutionSteps: [
        "Add the movement vectors.",
        "Horizontal component: 4 + 3 = 7.",
        "Vertical component: 2 + (-5) = -3.",
      ],

      answer: "[7, -3]",

      interpretation:
        "The robot finishes 7 units right and 3 units down from its starting point.",
    },

    {
      id: "example-05-04",

      title: "Net Force",

      problem:
        "Two forces act on an object: F1 = [10, 4] newtons and F2 = [-3, 6] newtons. Find the net force.",

      solutionSteps: [
        "Add the force vectors.",
        "Horizontal force: 10 + (-3) = 7.",
        "Vertical force: 4 + 6 = 10.",
      ],

      answer: "[7, 10] newtons",
    },

    {
      id: "example-05-05",

      title: "Change in Velocity",

      problem:
        "An object’s initial velocity is [2, 5] and its final velocity is [8, 1]. Find the change in velocity.",

      solutionSteps: [
        "Use final velocity minus initial velocity.",
        "First component: 8 - 2 = 6.",
        "Second component: 1 - 5 = -4.",
      ],

      answer: "[6, -4]",

      interpretation:
        "The velocity changed by 6 units in the first direction and -4 units in the second direction.",
    },

    {
      id: "example-05-06",

      title: "Difference Between Data Vectors",

      problem:
        "A student’s earlier performance vector is [70, 80, 65] and the later vector is [78, 85, 75]. Find the change.",

      solutionSteps: [
        "Subtract earlier values from later values.",
        "78 - 70 = 8.",
        "85 - 80 = 5.",
        "75 - 65 = 10.",
      ],

      answer: "[8, 5, 10]",

      interpretation:
        "The student improved by 8, 5, and 10 units across the three measured features.",
    },

    {
      id: "example-05-07",

      title: "Three-Dimensional Addition",

      problem:
        "Calculate [1, 4, -2] + [3, -1, 5].",

      solutionSteps: [
        "First component: 1 + 3 = 4.",
        "Second component: 4 + (-1) = 3.",
        "Third component: -2 + 5 = 3.",
      ],

      answer: "[4, 3, 3]",
    },
  ],

  realWorldApplications: [
    {
      field: "Navigation",
      application:
        "Several movements are combined to find total displacement.",
    },
    {
      field: "Physics",
      application:
        "Forces are added to calculate net force.",
    },
    {
      field: "Robotics",
      application:
        "Motion commands and position changes are combined using vectors.",
    },
    {
      field: "Computer Graphics",
      application:
        "Position vectors are updated by adding movement vectors.",
    },
    {
      field: "Data Science",
      application:
        "Vector subtraction measures change between two observations.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Embedding differences can represent relationships or transformations between concepts.",
    },
  ],

  aiConnection: {
    title: "Vector Differences in Embeddings",

    explanation:
      "In embedding spaces, subtraction can describe a direction of change. A difference vector may represent how one concept differs from another.",

    example:
      "If word vectors encode meaning, subtracting one embedding from another may reveal a semantic direction.",

    caution:
      "Embedding relationships depend on the model and training data. They should not be assumed to represent human meaning perfectly.",

    reflectionQuestion:
      "What might a difference vector represent in a customer, image, or text dataset?",
  },

  pythonLab: {
    title: "Vector Addition and Subtraction with NumPy",

    objective:
      "Implement and visualize vector addition and subtraction.",

    code: `import numpy as np
import matplotlib.pyplot as plt

def add_vectors(vector_a, vector_b):
    a = np.array(vector_a, dtype=float)
    b = np.array(vector_b, dtype=float)

    if a.shape != b.shape:
        raise ValueError("Vectors must have the same dimension.")

    return a + b

def subtract_vectors(vector_a, vector_b):
    a = np.array(vector_a, dtype=float)
    b = np.array(vector_b, dtype=float)

    if a.shape != b.shape:
        raise ValueError("Vectors must have the same dimension.")

    return a - b

u = np.array([4, 2], dtype=float)
v = np.array([3, -5], dtype=float)

resultant = add_vectors(u, v)
difference = subtract_vectors(u, v)

print("u + v =", resultant)
print("u - v =", difference)

plt.figure(figsize=(7, 7))

plt.quiver(
    0, 0,
    u[0], u[1],
    angles="xy",
    scale_units="xy",
    scale=1,
    label="u"
)

plt.quiver(
    u[0], u[1],
    v[0], v[1],
    angles="xy",
    scale_units="xy",
    scale=1,
    label="v"
)

plt.quiver(
    0, 0,
    resultant[0], resultant[1],
    angles="xy",
    scale_units="xy",
    scale=1,
    label="u + v"
)

plt.xlim(-2, 10)
plt.ylim(-7, 7)
plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.legend()
plt.title("Tip-to-Tail Vector Addition")
plt.show()`,

    questions: [
      "Why must the vectors have the same shape?",
      "What does the resultant vector represent?",
      "What changes when v is replaced by -v?",
      "Is u - v equal to v - u?",
      "How can subtraction measure change in a dataset?",
    ],

    extension:
      "Create a function that adds any number of equal-dimension vectors.",
  },

  guidedPractice: [
    {
      id: "guided-05-01",
      question:
        "Calculate [2, 3] + [4, 1].",
      answer: "[6, 4]",
    },
    {
      id: "guided-05-02",
      question:
        "Calculate [8, 5] - [3, 7].",
      answer: "[5, -2]",
    },
    {
      id: "guided-05-03",
      question:
        "A person moves [5, 2] and then [-1, 4]. Find total displacement.",
      answer: "[4, 6]",
    },
    {
      id: "guided-05-04",
      question:
        "Find the opposite of [3, -6].",
      answer: "[-3, 6]",
    },
    {
      id: "guided-05-05",
      question:
        "Verify that [3, -6] + [-3, 6] equals the zero vector.",
      answer: "[0, 0]",
    },
  ],

  independentPractice: [
    {
      id: "practice-05-01",
      difficulty: "Foundation",
      question:
        "Calculate [6, -2] + [1, 5].",
      answer: "[7, 3]",
    },
    {
      id: "practice-05-02",
      difficulty: "Foundation",
      question:
        "Calculate [4, 9] - [7, 2].",
      answer: "[-3, 7]",
    },
    {
      id: "practice-05-03",
      difficulty: "Developing",
      question:
        "A boat moves [8, 3], then [-2, 5], then [1, -4]. Find total displacement.",
      answer: "[7, 4]",
    },
    {
      id: "practice-05-04",
      difficulty: "Developing",
      question:
        "Initial position is [2, -1, 4] and final position is [7, 3, 1]. Find displacement.",
      answer: "[5, 4, -3]",
    },
    {
      id: "practice-05-05",
      difficulty: "Developing",
      question:
        "Show that u + v = v + u for u = [2, 5] and v = [-1, 3].",
      answer:
        "Both sums equal [1, 8].",
    },
    {
      id: "practice-05-06",
      difficulty: "Challenge",
      question:
        "Explain geometrically why vector addition is commutative.",
      sampleAnswer:
        "Both orders form the same parallelogram diagonal, so the resultant is unchanged.",
    },
    {
      id: "practice-05-07",
      difficulty: "Challenge",
      question:
        "Explain why u - v and v - u have equal magnitude but opposite directions.",
      sampleAnswer:
        "v - u = -(u - v), so one is the negative of the other.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Adding components from different positions.",

      correction:
        "Add first components together, second components together, and so on.",
    },
    {
      mistake:
        "Ignoring negative signs.",

      correction:
        "Preserve every sign before performing arithmetic.",
    },
    {
      mistake:
        "Adding vectors with different dimensions.",

      correction:
        "Vector addition and subtraction require equal dimensions.",
    },
    {
      mistake:
        "Thinking subtraction is commutative.",

      correction:
        "u - v usually differs from v - u.",
    },
    {
      mistake:
        "Drawing the second vector from the origin during tip-to-tail addition.",

      correction:
        "Move the second vector so its tail begins at the tip of the first.",
    },
    {
      mistake:
        "Confusing total distance with resultant displacement.",

      correction:
        "The vector sum gives net displacement, not total path length.",
    },
  ],

  discussionQuestions: [
    "Why must vectors have equal dimensions before addition?",
    "How does vector addition differ from adding magnitudes?",
    "Why can total distance exceed the magnitude of displacement?",
    "How does subtraction represent change?",
    "What could a difference vector mean in a machine-learning dataset?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-05-01",
        type: "calculation",
        points: 3,
        prompt:
          "Calculate [4, -1] + [2, 6].",
        answer: "[6, 5]",
      },
      {
        id: "check-05-02",
        type: "calculation",
        points: 3,
        prompt:
          "Calculate [7, 3] - [10, -2].",
        answer: "[-3, 5]",
      },
      {
        id: "check-05-03",
        type: "application",
        points: 3,
        prompt:
          "A robot moves [5, 4] and then [-2, -1]. Find total displacement.",
        answer: "[3, 3]",
      },
      {
        id: "check-05-04",
        type: "explanation",
        points: 3,
        prompt:
          "Explain why vector subtraction can be written as addition of the opposite.",
        answer:
          "Subtracting v removes its contribution, which is equivalent to adding -v.",
      },
      {
        id: "check-05-05",
        type: "concept",
        points: 3,
        prompt:
          "Explain one real-world meaning of a difference vector.",
        sampleAnswer:
          "It can represent the change from an initial state to a final state.",
      },
    ],
  },

  researchExtension: {
    title: "Vector Addition in a Real System",

    researchQuestion:
      "How are multiple vector effects combined in navigation, physics, robotics, or data analysis?",

    applicationOptions: [
      "Drone navigation",
      "Force balance",
      "Ocean current and boat motion",
      "Robot movement",
      "Velocity change",
      "Student growth data",
    ],

    task:
      "Select one system, identify at least three vectors, calculate the resultant or change, and interpret the result.",

    requiredEvidence: [
      "System description",
      "Vector definitions",
      "Component calculations",
      "Diagram or visualization",
      "Interpretation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Vector Addition and Change Case Study",

    description:
      "Create a visual case study demonstrating addition and subtraction in one real-world context.",

    requiredSections: [
      "Problem statement",
      "Input vectors",
      "Component calculations",
      "Geometric representation",
      "Resultant or difference",
      "Interpretation",
      "Python verification",
    ],

    requiredEvidence: [
      "At least three vectors",
      "One tip-to-tail diagram",
      "One subtraction example",
      "Worked mathematics",
      "Reflection",
    ],
  },

  reflection: [
    "What does vector addition represent in your own words?",
    "How is subtraction connected to change?",
    "Why does the order of subtraction matter?",
    "Which geometric method helped you most?",
    "How can vector differences be useful in AI or data science?",
  ],

  summary: [
    "Vectors are added and subtracted component by component.",
    "Only equal-dimension vectors can be directly added or subtracted.",
    "Vector addition combines effects.",
    "Vector subtraction measures difference or change.",
    "Subtraction can be written as addition of the opposite vector.",
    "Addition is commutative and associative.",
    "Subtraction is generally not commutative.",
    "The resultant vector represents the net effect, not total path length.",
    "Vector addition and subtraction are used in physics, robotics, data science, and AI.",
  ],

  previousLesson: {
    id: "la-m01-l04",
    slug: "vector-magnitude",
    title: "Magnitude, Distance, and Normalization",
  },

  nextLesson: {
    id: "la-m01-l06",
    slug: "scalar-multiplication",
    title: "Scalar Multiplication and Direction",
  },

  lumineryGuidance: {
    message:
      "Addition answers what happens when effects combine. Subtraction answers what changed between two states.",

    prompt:
      "Before calculating, label what each vector represents and explain whether you are combining effects or measuring a difference.",
  },
};

export default lesson05;