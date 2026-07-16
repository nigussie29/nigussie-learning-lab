const lesson07 = {
  id: "la-m03-l07",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-03",
  moduleNumber: 3,
  lessonNumber: 7,
  slug: "applications-of-linear-systems",
  title: "Applications of Linear Systems",
  subtitle: "A complete lesson in Module 03: Systems of Linear Equations.",
  status: "Available",
  duration: "90–105 minutes",
  level: "Intermediate",

  essentialQuestion: "How can real-world constraints be translated into a solvable linear system?",
  bigIdea: "Linear systems model situations with several unknowns and interacting constraints.",

  problemFirst: {
    title: "Problem-First Investigation",
    scenario: "How can real-world constraints be translated into a solvable linear system?",
    questions: [
  "What are the unknown quantities?",
  "Which constraints must hold simultaneously?",
  "How can the situation be represented with equations or a matrix?",
  "How can the result be checked?"
],
    expectedInsight: "Linear systems model situations with several unknowns and interacting constraints."
  },

  learningObjectives: [
  "Explain the central idea of Applications of Linear Systems.",
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
    "id": "example-03-07-01",
    "title": "Ticket Sales",
    "problem": "Adult tickets cost $12, student tickets cost $8, 100 tickets produce $960.",
    "solutionSteps": [
      "Write a + s = 100.",
      "Write 12a + 8s = 960.",
      "Solve."
    ],
    "answer": "a = 40, s = 60."
  },
  {
    "id": "example-03-07-02",
    "title": "Mixture",
    "problem": "Make 20 liters of 18% solution from 10% and 30% solutions.",
    "solutionSteps": [
      "Write x + y = 20.",
      "Write 0.10x + 0.30y = 3.6.",
      "Solve."
    ],
    "answer": "x = 12 liters, y = 8 liters."
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
    title: "Python Lab: Applications of Linear Systems",
    objective:
      "Use Python to represent, solve, or analyze the lesson concept.",
    code: `import numpy as np

A = np.array([[1, 1], [12, 8]], dtype=float)
b = np.array([100, 960], dtype=float)
print(np.linalg.solve(A, b))`,
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
    "id": "guided-03-07-01",
    "question": "State the main idea of this lesson.",
    "answer": "Linear systems model situations with several unknowns and interacting constraints."
  },
  {
    "id": "guided-03-07-02",
    "question": "What should be checked before solving?",
    "answer": "Variable order, equations, matrix dimensions, and meaning."
  },
  {
    "id": "guided-03-07-03",
    "question": "How can a result be verified?",
    "answer": "Substitute into the original equations or compare with Python."
  }
],

  independentPractice: [
  {
    "id": "practice-03-07-01",
    "difficulty": "Foundation",
    "question": "Complete one basic example using the lesson method.",
    "answer": "Apply the stated equations or row operations."
  },
  {
    "id": "practice-03-07-02",
    "difficulty": "Developing",
    "question": "Explain why the method preserves or reveals the solution set.",
    "sampleAnswer": "It uses equivalent transformations or structural analysis."
  },
  {
    "id": "practice-03-07-03",
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
    "id": "check-03-07-01",
    "type": "concept",
    "points": 3,
    "prompt": "How can real-world constraints be translated into a solvable linear system?",
    "sampleAnswer": "Linear systems model situations with several unknowns and interacting constraints."
  },
  {
    "id": "check-03-07-02",
    "type": "calculation",
    "points": 4,
    "prompt": "Adult tickets cost $12, student tickets cost $8, 100 tickets produce $960.",
    "answer": "a = 40, s = 60."
  },
  {
    "id": "check-03-07-03",
    "type": "application",
    "points": 4,
    "prompt": "Describe one practical use.",
    "sampleAnswer": "Use the method to solve interacting constraints."
  },
  {
    "id": "check-03-07-04",
    "type": "reflection",
    "points": 4,
    "prompt": "State one limitation.",
    "sampleAnswer": "The equations and data must represent the real situation correctly."
  }
]
  },

  portfolioArtifact: {
    title: "Applications of Linear Systems Case Study",
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
  "Linear systems model situations with several unknowns and interacting constraints.",
  "Variable order must remain consistent.",
  "Solutions should be checked against the original system.",
  "Python can verify or approximate results."
],

  previousLesson: {
  "id": "la-m03-l06",
  "slug": "solution-types",
  "title": "Unique, Infinite, and No-Solution Systems"
},
  nextLesson: {
  "id": "la-m03-l08",
  "slug": "linear-systems-in-ai",
  "title": "Linear Systems in Data Science, Engineering, and AI"
},

  lumineryGuidance: {
    message:
      "Understand the structure before performing the calculation.",
    prompt:
      "Define variables, identify equations or dimensions, predict solution behavior, and then compute."
  }
};

export default lesson07;
