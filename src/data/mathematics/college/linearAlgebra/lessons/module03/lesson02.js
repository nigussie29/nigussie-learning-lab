const lesson02 = {
  id: "la-m03-l02",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-03",
  moduleNumber: 3,
  lessonNumber: 2,
  slug: "geometric-interpretation",
  title: "Geometric Interpretation of Linear Systems",
  subtitle: "A complete lesson in Module 03: Systems of Linear Equations.",
  status: "Available",
  duration: "90–105 minutes",
  level: "Foundation",

  essentialQuestion: "What does a system’s solution look like geometrically?",
  bigIdea: "Solutions correspond to intersections of lines, planes, or higher-dimensional objects.",

  problemFirst: {
    title: "Problem-First Investigation",
    scenario: "What does a system’s solution look like geometrically?",
    questions: [
  "What are the unknown quantities?",
  "Which constraints must hold simultaneously?",
  "How can the situation be represented with equations or a matrix?",
  "How can the result be checked?"
],
    expectedInsight: "Solutions correspond to intersections of lines, planes, or higher-dimensional objects."
  },

  learningObjectives: [
  "Explain the central idea of Geometric Interpretation of Linear Systems.",
  "Represent the problem using equations, matrices, or geometry.",
  "Complete the relevant calculations accurately.",
  "Interpret the result in context.",
  "Verify the result using substitution or Python."
],

  prerequisiteKnowledge: [
  "Basic algebra",
  "Module 01 vector foundations",
  "Module 02 matrix foundations"
],

  vocabulary: [
  {
    "term": "Linear System",
    "definition": "A collection of linear equations considered together."
  },
  {
    "term": "Solution",
    "definition": "Values that satisfy every equation in the system."
  },
  {
    "term": "Pivot",
    "definition": "A leading nonzero entry used during row reduction."
  },
  {
    "term": "Consistency",
    "definition": "Whether a system has at least one solution."
  }
],

  formulas: [
  {
    "name": "Matrix Form",
    "formula": "Ax = b",
    "meaning": "A stores coefficients, x stores unknowns, and b stores constants."
  }
],

  workedExamples: [
  {
    "id": "example-03-02-01",
    "title": "One Intersection",
    "problem": "Solve y = x + 1 and y = -x + 5.",
    "solutionSteps": [
      "Set the right sides equal.",
      "Solve x + 1 = -x + 5.",
      "Find x = 2 and y = 3."
    ],
    "answer": "The lines intersect at (2, 3)."
  },
  {
    "id": "example-03-02-02",
    "title": "Parallel Lines",
    "problem": "Interpret y = 2x + 1 and y = 2x - 4.",
    "solutionSteps": [
      "The slopes are equal.",
      "The intercepts are different."
    ],
    "answer": "No solution."
  }
],

  realWorldApplications: [
  {
    "field": "Education",
    "application": "Scheduling, enrollment, grading, and resource constraints."
  },
  {
    "field": "Engineering",
    "application": "Calibration, circuits, structures, and balance equations."
  },
  {
    "field": "Data Science",
    "application": "Regression, estimation, and model fitting."
  },
  {
    "field": "Artificial Intelligence",
    "application": "Optimization, parameter estimation, and numerical computation."
  }
],

  aiConnection: {
    title: "Connection to AI and Computing",
    explanation:
      "Linear systems provide a common language for constraints, parameter estimation, calibration, and approximation.",
    examples: [
  "Regression",
  "Calibration",
  "Optimization",
  "Simulation"
],
    caution:
      "A numerical solution is meaningful only when the model, data, units, and assumptions are correct."
  },

  pythonLab: {
    title: "Python Lab: Geometric Interpretation of Linear Systems",
    objective:
      "Use Python to represent, solve, or analyze the lesson concept.",
    code: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 200)
plt.plot(x, x + 1, label="y = x + 1")
plt.plot(x, -x + 5, label="y = -x + 5")
plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.legend()
plt.show()`,
    questions: [
  "What do the rows and columns represent?",
  "What result does Python produce?",
  "How can the result be checked?",
  "What limitation should be considered?"
],
    extension:
      "Modify the example using a new system and compare the result."
  },

  guidedPractice: [
  {
    "id": "guided-03-02-01",
    "question": "State the main idea of this lesson.",
    "answer": "Solutions correspond to intersections of lines, planes, or higher-dimensional objects."
  },
  {
    "id": "guided-03-02-02",
    "question": "What should be checked before solving?",
    "answer": "Variable order, equations, matrix dimensions, and meaning."
  },
  {
    "id": "guided-03-02-03",
    "question": "How can a result be verified?",
    "answer": "Substitute into the original equations or compare with Python."
  }
],

  independentPractice: [
  {
    "id": "practice-03-02-01",
    "difficulty": "Foundation",
    "question": "Complete one basic example using the lesson method.",
    "answer": "Apply the stated equations or row operations."
  },
  {
    "id": "practice-03-02-02",
    "difficulty": "Developing",
    "question": "Explain why the method preserves or reveals the solution set.",
    "sampleAnswer": "It uses equivalent transformations or structural analysis."
  },
  {
    "id": "practice-03-02-03",
    "difficulty": "Challenge",
    "question": "Connect the lesson to a real application.",
    "sampleAnswer": "Represent unknowns and constraints using Ax = b."
  }
],

  commonMistakes: [
  {
    "mistake": "Changing variable order.",
    "correction": "Use the same variable order in every equation and matrix column."
  },
  {
    "mistake": "Applying a row operation to only part of a row.",
    "correction": "Apply it to the complete row, including the augmented column."
  },
  {
    "mistake": "Giving an answer without interpretation.",
    "correction": "Check units, context, and the original equations."
  }
],

  formativeAssessment: {
    totalPoints: 15,
    passingScore: 12,
    questions: [
  {
    "id": "check-03-02-01",
    "type": "concept",
    "points": 3,
    "prompt": "What does a system’s solution look like geometrically?",
    "sampleAnswer": "Solutions correspond to intersections of lines, planes, or higher-dimensional objects."
  },
  {
    "id": "check-03-02-02",
    "type": "calculation",
    "points": 4,
    "prompt": "Solve y = x + 1 and y = -x + 5.",
    "answer": "The lines intersect at (2, 3)."
  },
  {
    "id": "check-03-02-03",
    "type": "application",
    "points": 4,
    "prompt": "Describe one practical use.",
    "sampleAnswer": "Use the method to solve interacting constraints."
  },
  {
    "id": "check-03-02-04",
    "type": "reflection",
    "points": 4,
    "prompt": "State one limitation.",
    "sampleAnswer": "The equations and data must represent the real situation correctly."
  }
]
  },

  portfolioArtifact: {
    title: "Geometric Interpretation of Linear Systems Case Study",
    description:
      "Create a worked case study explaining the model, calculations, code, result, and limitations.",
    requiredEvidence: [
  "Problem statement",
  "Variables and equations",
  "Matrix representation",
  "Worked solution",
  "Python verification",
  "Interpretation",
  "Reflection"
]
  },

  reflection: [
  "What was the central idea?",
  "Which step required the most reasoning?",
  "How can the result be verified?",
  "Where could this concept be applied?"
],

  summary: [
  "Solutions correspond to intersections of lines, planes, or higher-dimensional objects.",
  "Variable order must remain consistent.",
  "Solutions should be checked against the original system.",
  "Python can verify or approximate results."
],

  previousLesson: {
  "id": "la-m03-l01",
  "slug": "introduction-to-linear-systems",
  "title": "Introduction to Systems of Linear Equations"
},
  nextLesson: {
  "id": "la-m03-l03",
  "slug": "augmented-matrices-row-operations",
  "title": "Augmented Matrices and Elementary Row Operations"
},

  lumineryGuidance: {
    message:
      "Understand the structure before performing the calculation.",
    prompt:
      "Define variables, identify equations or dimensions, predict solution behavior, and then compute."
  }
};

export default lesson02;
