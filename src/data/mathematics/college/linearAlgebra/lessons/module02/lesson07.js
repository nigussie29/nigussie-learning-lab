const lesson07 = {
  id: "la-m02-l07",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 7,

  slug: "matrix-composition",

  title: "Matrix Multiplication as Composition",

  subtitle:
    "Understanding how sequential transformations combine into one matrix operation.",

  status: "Available",

  duration: "105–120 minutes",

  level: "Intermediate",

  essentialQuestion:
    "How can several transformations be combined into one matrix, and why does the order of multiplication matter?",

  bigIdea:
    "Matrix multiplication represents composition. When one transformation is followed by another, their matrices multiply in reverse written order: the rightmost matrix acts first.",

  problemFirst: {
    title: "Rotate, Then Scale—or Scale, Then Rotate?",

    scenario:
      "A graphics program applies two transformations to a shape: a rotation and a nonuniform scaling. The final image changes depending on which transformation is applied first.",

    questions: [
      "How can two transformations be represented using matrices?",
      "How can they be combined into one matrix?",
      "Which matrix acts first in a product such as BA?",
      "Why can changing the order change the result?",
      "Can one composite matrix replace both individual steps?",
    ],

    expectedInsight:
      "If A acts first and B acts second, the composite transformation is BA. Matrix order records transformation order.",
  },

  learningObjectives: [
    "Define composition of linear transformations.",
    "Represent sequential transformations using matrix products.",
    "Explain why the rightmost matrix acts first.",
    "Calculate composite transformation matrices.",
    "Apply a composite matrix to vectors and shapes.",
    "Compare AB and BA geometrically and algebraically.",
    "Use identity matrices in a composition.",
    "Connect composition to robotics, graphics, neural networks, and data pipelines.",
    "Verify composite transformations using Python.",
  ],

  prerequisiteKnowledge: [
    "Matrix multiplication",
    "Matrix-vector multiplication",
    "Transformation matrices",
    "Vector coordinates",
    "Identity matrices",
    "Basic geometry",
  ],

  vocabulary: [
    {
      term: "Composition",
      definition:
        "The process of applying one transformation after another.",
    },
    {
      term: "Composite Transformation",
      definition:
        "A single transformation that has the same effect as several transformations applied in sequence.",
    },
    {
      term: "Transformation Matrix",
      definition:
        "A matrix that maps input vectors to output vectors.",
    },
    {
      term: "Order of Operations",
      definition:
        "The sequence in which transformations are applied.",
    },
    {
      term: "Rightmost Matrix",
      definition:
        "The matrix that acts first in a product applied to a vector.",
    },
    {
      term: "Identity Transformation",
      definition:
        "A transformation that leaves every vector unchanged.",
    },
    {
      term: "Pipeline",
      definition:
        "A sequence of processing steps applied to data or objects.",
    },
  ],

  formulas: [
    {
      id: "composition-definition",
      name: "Composition of Transformations",
      formula:
        "(T2 composed with T1)(x) = T2(T1(x))",
      meaning:
        "T1 acts first, followed by T2.",
    },
    {
      id: "matrix-composition",
      name: "Matrix Form of Composition",
      formula:
        "If T1(x) = Ax and T2(x) = Bx, then T2(T1(x)) = BAx",
      meaning:
        "The composite matrix is BA.",
    },
    {
      id: "three-transformations",
      name: "Three-Step Composition",
      formula:
        "T3(T2(T1(x))) = CBAx",
      meaning:
        "A acts first, then B, then C.",
    },
    {
      id: "identity-composition",
      name: "Identity Composition",
      formula:
        "AI = IA = A",
      meaning:
        "Composing with the identity transformation changes nothing.",
    },
    {
      id: "associative-composition",
      name: "Associativity",
      formula:
        "(CB)A = C(BA)",
      meaning:
        "Compatible transformation matrices can be grouped differently without changing the final result.",
    },
  ],

  orderRule: {
    title: "The Rightmost Matrix Acts First",

    expression:
      "BAx",

    sequence: [
      "Start with x.",
      "Apply A to produce Ax.",
      "Apply B to Ax.",
      "The final result is B(Ax) = BAx.",
    ],

    memoryAid:
      "Read transformation products from right to left when applying them to a vector.",

    warning:
      "Do not assume BA means B happens first. In BAx, A acts first.",
  },

  commonTransformationMatrices: [
    {
      id: "scale-2d",
      name: "Two-Dimensional Scaling",
      matrix:
        "[[sx, 0], [0, sy]]",
      effect:
        "Scales the horizontal and vertical coordinates independently.",
    },
    {
      id: "rotation-2d",
      name: "Two-Dimensional Rotation",
      matrix:
        "[[cos(theta), -sin(theta)], [sin(theta), cos(theta)]]",
      effect:
        "Rotates vectors counterclockwise by theta.",
    },
    {
      id: "horizontal-shear",
      name: "Horizontal Shear",
      matrix:
        "[[1, k], [0, 1]]",
      effect:
        "Changes the first coordinate in proportion to the second.",
    },
    {
      id: "x-reflection",
      name: "Reflection Across the x-Axis",
      matrix:
        "[[1, 0], [0, -1]]",
      effect:
        "Reverses the vertical coordinate.",
    },
    {
      id: "y-reflection",
      name: "Reflection Across the y-Axis",
      matrix:
        "[[-1, 0], [0, 1]]",
      effect:
        "Reverses the horizontal coordinate.",
    },
    {
      id: "coordinate-swap",
      name: "Reflection Across y = x",
      matrix:
        "[[0, 1], [1, 0]]",
      effect:
        "Swaps the two coordinates.",
    },
  ],

  compositionInterpretation: {
    title: "One Matrix Can Represent an Entire Sequence",

    explanation:
      "Once the matrices are multiplied, the composite matrix can be applied directly to every future vector.",

    advantages: [
      "Fewer repeated calculations",
      "Clear representation of the full transformation",
      "Efficient processing of many points",
      "Easier deployment in graphics, robotics, and AI",
      "Supports analysis of the final transformation",
    ],

    caution:
      "The composite matrix preserves the final effect, but it may hide the meaning of the individual stages unless those stages are documented.",
  },

  workedExamples: [
    {
      id: "example-02-07-01",

      title: "Scale, Then Reflect",

      problem:
        "Let A = [[2, 0], [0, 3]] scale x by 2 and y by 3. Let B = [[1, 0], [0, -1]] reflect across the x-axis. Find the composite matrix when scaling happens first and reflection second.",

      solutionSteps: [
        "Scaling first means apply A first.",
        "Reflection second means apply B after A.",
        "The composite matrix is BA.",
        "Multiply B and A.",
      ],

      answer: [
        [2, 0],
        [0, -3],
      ],

      interpretation:
        "The first coordinate is doubled, while the second is tripled and reflected.",
    },

    {
      id: "example-02-07-02",

      title: "Apply the Composite Matrix",

      problem:
        "Use the composite matrix [[2, 0], [0, -3]] on v = [4, 5].",

      solutionSteps: [
        "First output: 2(4) + 0(5) = 8.",
        "Second output: 0(4) + (-3)(5) = -15.",
      ],

      answer: "[8, -15]",
    },

    {
      id: "example-02-07-03",

      title: "Verify Step by Step",

      problem:
        "Verify the previous result by applying scaling and reflection separately to [4, 5].",

      solutionSteps: [
        "Apply A: [4, 5] becomes [8, 15].",
        "Apply B: [8, 15] becomes [8, -15].",
        "Compare with the composite result.",
      ],

      answer:
        "Both methods produce [8, -15].",
    },

    {
      id: "example-02-07-04",

      title: "Order Changes the Result",

      problem:
        "Let A = [[2, 0], [0, 1]] scale x by 2 and B = [[1, 1], [0, 1]] shear horizontally. Compare BA and AB.",

      solutionSteps: [
        "Calculate BA.",
        "Calculate AB.",
        "Compare the two products.",
      ],

      answer: {
        BA: [
          [2, 1],
          [0, 1],
        ],
        AB: [
          [2, 2],
          [0, 1],
        ],
      },

      interpretation:
        "Scaling then shearing differs from shearing then scaling.",
    },

    {
      id: "example-02-07-05",

      title: "Rotation Followed by Scaling",

      problem:
        "Let R = [[0, -1], [1, 0]] represent a 90-degree rotation. Let S = [[2, 0], [0, 3]] represent scaling. Find the matrix for rotation first, then scaling.",

      solutionSteps: [
        "Rotation first means R acts first.",
        "Scaling second means S acts after R.",
        "The composite matrix is SR.",
        "Multiply S by R.",
      ],

      answer: [
        [0, -2],
        [3, 0],
      ],
    },

    {
      id: "example-02-07-06",

      title: "Scaling Followed by Rotation",

      problem:
        "Using the same R and S, find the matrix for scaling first, then rotation.",

      solutionSteps: [
        "Scaling first means S acts first.",
        "Rotation second means R acts after S.",
        "The composite matrix is RS.",
      ],

      answer: [
        [0, -3],
        [2, 0],
      ],

      interpretation:
        "SR and RS are different because the scaling is nonuniform.",
    },

    {
      id: "example-02-07-07",

      title: "Three-Step Composition",

      problem:
        "Suppose A scales by 2, B reflects across the x-axis, and C swaps coordinates. Which product represents A first, then B, then C?",

      solutionSteps: [
        "A acts first.",
        "B acts second.",
        "C acts third.",
        "Write the matrices in reverse application order.",
      ],

      answer:
        "CBA",
    },

    {
      id: "example-02-07-08",

      title: "Identity Inside a Composition",

      problem:
        "Simplify BIA.",

      solutionSteps: [
        "The identity matrix leaves compatible matrices unchanged.",
        "IA = A.",
        "Therefore BIA = BA.",
      ],

      answer:
        "BA",
    },

    {
      id: "example-02-07-09",

      title: "Data Transformation Pipeline",

      problem:
        "A preprocessing matrix A standardizes three input features, and a matrix B creates two learned features. What product maps the original input directly to the learned features?",

      solutionSteps: [
        "A acts on the original input first.",
        "B acts on the processed result second.",
      ],

      answer:
        "BA",

      interpretation:
        "The composite matrix maps original features directly into the learned feature space.",
    },
  ],

  compositionProperties: [
    {
      property: "Associative",

      formula:
        "(CB)A = C(BA)",

      explanation:
        "Grouping can change without changing the final composite transformation.",
    },

    {
      property: "Generally Not Commutative",

      formula:
        "BA is generally not equal to AB",

      explanation:
        "Changing order changes which transformation acts first.",
    },

    {
      property: "Identity",

      formula:
        "IA = AI = A",

      explanation:
        "The identity transformation can appear anywhere without changing the result.",
    },

    {
      property: "Inverse Cancellation",

      formula:
        "A^-1 A = AA^-1 = I",

      explanation:
        "A transformation followed by its inverse returns the original vector when the inverse exists.",
    },

    {
      property: "Dimension Compatibility",

      formula:
        "Every adjacent product must have matching inner dimensions.",

      explanation:
        "The output space of one transformation must match the input space of the next.",
    },
  ],

  geometryComparison: {
    title: "Why Order Matters Geometrically",

    explanation:
      "A transformation changes the coordinate directions available to the next transformation.",

    examples: [
      {
        sequence:
          "Stretch horizontally, then rotate",

        result:
          "The stretched horizontal direction is rotated into a new direction.",
      },
      {
        sequence:
          "Rotate, then stretch horizontally",

        result:
          "The original directions rotate first, and the fixed horizontal scaling acts afterward.",
      },
    ],

    keyInsight:
      "Nonuniform transformations are especially sensitive to order.",
  },

  roboticsConnection: {
    title: "Coordinate Frames in Robotics",

    explanation:
      "A robot may transform coordinates from a sensor frame to a robot frame and then from the robot frame to a world frame.",

    sequence: [
      "Sensor coordinates",
      "Robot coordinates",
      "World coordinates",
    ],

    matrixForm:
      "world_vector = T_world_robot T_robot_sensor sensor_vector",

    keyInsight:
      "The rightmost transformation converts the vector from the sensor frame first.",
  },

  graphicsConnection: {
    title: "Graphics Transformation Pipeline",

    explanation:
      "Computer graphics combines scaling, rotation, projection, and camera transformations using matrix products.",

    examplePipeline: [
      "Model coordinates",
      "World coordinates",
      "Camera coordinates",
      "Screen coordinates",
    ],

    advantage:
      "Thousands of points can be transformed efficiently using one composite matrix.",
  },

  aiConnection: {
    title: "Composition in Neural Networks",

    explanation:
      "A neural network applies a sequence of transformations. Each linear layer uses a matrix, while activation functions introduce nonlinearity.",

    simplifiedLinearCase:
      "If z1 = W1x and z2 = W2z1, then z2 = W2W1x.",

    keyInsight:
      "Without nonlinear activation functions, several linear layers collapse into one composite linear transformation.",

    significance: [
      "Explains why nonlinear activations are necessary",
      "Shows how learned representations are built in stages",
      "Connects matrix products to deep learning architecture",
      "Supports analysis of model dimensions",
    ],

    caution:
      "When biases or nonlinear functions are present, the full network cannot generally be replaced by one simple matrix product.",
  },

  pythonLab: {
    title: "Build and Compare Composite Transformations",

    objective:
      "Create transformation matrices, compose them in different orders, and visualize the results.",

    code: `import numpy as np
import matplotlib.pyplot as plt

def scaling_matrix(scale_x, scale_y):
    return np.array([
        [scale_x, 0],
        [0, scale_y]
    ], dtype=float)

def rotation_90_matrix():
    return np.array([
        [0, -1],
        [1, 0]
    ], dtype=float)

def horizontal_shear_matrix(shear):
    return np.array([
        [1, shear],
        [0, 1]
    ], dtype=float)

def apply_transformation(matrix, points):
    matrix = np.array(matrix, dtype=float)
    points = np.array(points, dtype=float)

    return matrix @ points

shape = np.array([
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0]
], dtype=float)

scaling = scaling_matrix(2, 1)
rotation = rotation_90_matrix()

rotation_then_scaling = scaling @ rotation
scaling_then_rotation = rotation @ scaling

result_one = apply_transformation(
    rotation_then_scaling,
    shape
)

result_two = apply_transformation(
    scaling_then_rotation,
    shape
)

print("Rotation then scaling:")
print(rotation_then_scaling)

print("Scaling then rotation:")
print(scaling_then_rotation)

print(
    "Composite matrices equal:",
    np.allclose(
        rotation_then_scaling,
        scaling_then_rotation
    )
)

plt.figure(figsize=(7, 7))
plt.plot(shape[0], shape[1], marker="o", label="Original")
plt.plot(
    result_one[0],
    result_one[1],
    marker="o",
    label="Rotate then scale"
)
plt.plot(
    result_two[0],
    result_two[1],
    marker="o",
    label="Scale then rotate"
)

plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.axis("equal")
plt.legend()
plt.title("Transformation Order")
plt.show()`,

    questions: [
      "Why is scaling @ rotation used for rotation first and scaling second?",
      "Why do the two composite matrices differ?",
      "What happens when the scaling is uniform?",
      "How can a composite matrix improve efficiency?",
      "How would you add a reflection as a third transformation?",
      "Why does matrix associativity help when composing several transformations?",
    ],

    extension:
      "Create an interactive transformation pipeline where users choose three transformations and their order.",
  },

  guidedPractice: [
    {
      id: "guided-02-07-01",

      question:
        "If A acts first and B acts second, what is the composite matrix?",

      answer:
        "BA",
    },

    {
      id: "guided-02-07-02",

      question:
        "In CBAx, which matrix acts first?",

      answer:
        "A",
    },

    {
      id: "guided-02-07-03",

      question:
        "Simplify AIB.",

      answer:
        "AB",
    },

    {
      id: "guided-02-07-04",

      question:
        "If T1(x) = Ax and T2(x) = Bx, write T2(T1(x)).",

      answer:
        "BAx",
    },

    {
      id: "guided-02-07-05",

      question:
        "Why may AB differ from BA?",

      answer:
        "They apply the transformations in different orders.",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-07-01",

      difficulty: "Foundation",

      question:
        "If transformations A, B, and C occur in that order, write the composite matrix.",

      answer:
        "CBA",
    },

    {
      id: "practice-02-07-02",

      difficulty: "Foundation",

      question:
        "Which matrix acts first in DCBAv?",

      answer:
        "A",
    },

    {
      id: "practice-02-07-03",

      difficulty: "Developing",

      question:
        "Let A = [[2, 0], [0, 1]] and B = [[1, 1], [0, 1]]. Calculate BA.",

      answer: [
        [2, 1],
        [0, 1],
      ],
    },

    {
      id: "practice-02-07-04",

      difficulty: "Developing",

      question:
        "Using the same matrices, calculate AB.",

      answer: [
        [2, 2],
        [0, 1],
      ],
    },

    {
      id: "practice-02-07-05",

      difficulty: "Developing",

      question:
        "Apply BA = [[2, 1], [0, 1]] to [3, 4].",

      answer:
        "[10, 4]",
    },

    {
      id: "practice-02-07-06",

      difficulty: "Developing",

      question:
        "Explain why three linear layers without activation functions can be combined into one matrix.",

      sampleAnswer:
        "Their sequential matrix products are associative, so W3W2W1 acts as one composite linear transformation.",
    },

    {
      id: "practice-02-07-07",

      difficulty: "Challenge",

      question:
        "Under what condition might scaling and rotation commute in two dimensions?",

      sampleAnswer:
        "Uniform scaling commutes with rotation because it scales every direction equally.",
    },

    {
      id: "practice-02-07-08",

      difficulty: "Challenge",

      question:
        "Explain how composition supports coordinate conversion in robotics.",

      sampleAnswer:
        "Each matrix converts coordinates from one frame to another, and their product maps directly from the original frame to the final frame.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Writing the matrices in the same left-to-right order as the transformations occur.",

      correction:
        "When applied to a vector, the first transformation appears on the right.",
    },

    {
      mistake:
        "Assuming AB and BA represent the same sequence.",

      correction:
        "AB means B acts first, while BA means A acts first.",
    },

    {
      mistake:
        "Applying the composite matrix and individual transformations inconsistently.",

      correction:
        "Use the same stated transformation order in both methods.",
    },

    {
      mistake:
        "Ignoring dimension compatibility between stages.",

      correction:
        "The output dimension of one transformation must match the input dimension of the next.",
    },

    {
      mistake:
        "Assuming every transformation sequence can be reordered.",

      correction:
        "Matrix multiplication is generally not commutative.",
    },

    {
      mistake:
        "Assuming multiple neural-network layers always collapse into one matrix.",

      correction:
        "This is only true for purely linear layers without nonlinear activations and with compatible handling of biases.",
    },
  ],

  discussionQuestions: [
    "Why does the rightmost matrix act first?",
    "How does composition reduce repeated computation?",
    "Why can changing transformation order change a shape?",
    "When might two transformations commute?",
    "How is matrix composition used in robotics?",
    "Why do neural networks need nonlinear activation functions?",
    "What information may be hidden after combining several matrices into one?",
  ],

  formativeAssessment: {
    totalPoints: 20,

    passingScore: 16,

    questions: [
      {
        id: "check-02-07-01",

        type: "order",

        points: 3,

        prompt:
          "If A acts first, B second, and C third, write the composite matrix.",

        answer:
          "CBA",
      },

      {
        id: "check-02-07-02",

        type: "interpretation",

        points: 3,

        prompt:
          "Which transformation acts first in BAx?",

        answer:
          "A",
      },

      {
        id: "check-02-07-03",

        type: "calculation",

        points: 5,

        prompt:
          "Calculate BA for A = [[2, 0], [0, 1]] and B = [[1, 1], [0, 1]].",

        answer: [
          [2, 1],
          [0, 1],
        ],
      },

      {
        id: "check-02-07-04",

        type: "application",

        points: 4,

        prompt:
          "Explain how composition is used in a graphics pipeline.",

        sampleAnswer:
          "Matrices for model, camera, and screen transformations are multiplied to map points directly from model coordinates to screen coordinates.",
      },

      {
        id: "check-02-07-05",

        type: "ai-connection",

        points: 5,

        prompt:
          "Explain why several linear neural-network layers without activation functions are equivalent to one linear layer.",

        sampleAnswer:
          "Their weight matrices multiply into one composite matrix, so the full sequence remains one linear transformation.",
      },
    ],
  },

  researchExtension: {
    title: "Transformation Composition in Robotics or Graphics",

    researchQuestion:
      "How are multiple coordinate transformations combined in a real system?",

    applicationOptions: [
      "Robot arm coordinate frames",
      "Drone navigation",
      "3D graphics pipelines",
      "Camera transformations",
      "Augmented reality",
      "Computer vision",
    ],

    task:
      "Select one application and describe at least three transformation stages.",

    requiredEvidence: [
      "System description",
      "Coordinate frames or stages",
      "Transformation order",
      "Matrix dimensions",
      "Composite-matrix expression",
      "One worked example",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Transformation Composition Studio",

    description:
      "Create a Python notebook or application that composes and compares transformation sequences.",

    requiredFeatures: [
      "Scaling",
      "Rotation",
      "Reflection or shear",
      "User-selected order",
      "Composite matrix",
      "Step-by-step result",
      "Direct composite result",
      "Order comparison",
    ],

    requiredEvidence: [
      "At least three shapes or vectors",
      "Visualizations",
      "Matrix calculations",
      "Verification that sequential and composite methods match",
      "One robotics, graphics, or AI application",
      "Reflection",
    ],
  },

  reflection: [
    "Why is composition written in reverse order?",
    "What does a composite matrix preserve?",
    "What information about individual stages may be hidden?",
    "Why does order matter for nonuniform transformations?",
    "How does composition appear in robotics or graphics?",
    "Why do nonlinear activations matter in neural networks?",
  ],

  summary: [
    "Composition applies transformations sequentially.",
    "If A acts first and B acts second, the composite matrix is BA.",
    "The rightmost matrix acts first.",
    "One composite matrix can replace several linear transformation steps.",
    "Matrix multiplication is associative, supporting flexible grouping.",
    "Transformation order generally matters because matrix multiplication is not commutative.",
    "Identity transformations do not change a composition.",
    "Robotics and graphics use composition to move between coordinate systems.",
    "Purely linear neural layers can collapse into one composite matrix.",
    "Nonlinear activations prevent deep networks from becoming one simple linear transformation.",
  ],

  previousLesson: {
    id: "la-m02-l06",
    slug: "matrix-multiplication",
    title: "Matrix Multiplication",
  },

  nextLesson: {
    id: "la-m02-l08",
    slug: "matrices-in-ai",
    title:
      "Matrices in Data, Images, and Artificial Intelligence",
  },

  lumineryGuidance: {
    message:
      "A matrix product records a sequence of actions. The order tells the story of how the input becomes the output.",

    prompt:
      "Name each transformation, state which acts first, predict the effect, and then build the composite matrix.",
  },
};

export default lesson07;