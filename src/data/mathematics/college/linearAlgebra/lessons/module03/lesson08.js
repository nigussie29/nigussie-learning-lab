const lesson08 = {
  id: "la-m03-l08",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-03",
  moduleNumber: 3,
  lessonNumber: 8,
  slug: "linear-systems-in-ai",
  title: "Linear Systems in Data Science, Engineering, and AI",
  subtitle: "A complete lesson in Module 03: Systems of Linear Equations.",
  status: "Available",
  duration: "90–105 minutes",
  level: "Intermediate",

  essentialQuestion: "Why are linear systems foundational in engineering, data science, and AI?",
  bigIdea: "Many computational problems reduce to solving or approximating Ax = b.",

  problemFirst: {
    title: "Problem-First Investigation",
    scenario: "Why are linear systems foundational in engineering, data science, and AI?",
    questions: [
  "What are the unknown quantities?",
  "Which constraints must hold simultaneously?",
  "How can the situation be represented with equations or a matrix?",
  "How can the result be checked?"
],
    expectedInsight: "Many computational problems reduce to solving or approximating Ax = b."
  },

  learningObjectives: [
  "Explain the central idea of Linear Systems in Data Science, Engineering, and AI.",
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
    "id": "example-03-08-01",
    "title": "Sensor Calibration",
    "problem": "Represent calibration parameters with Ax = b.",
    "solutionSteps": [
      "Build A from known measurements.",
      "Build b from reference values.",
      "Solve and validate."
    ],
    "answer": "The solution gives calibration coefficients."
  },
  {
    "id": "example-03-08-02",
    "title": "Least Squares",
    "problem": "A system has more equations than unknowns.",
    "solutionSteps": [
      "An exact solution may not exist.",
      "Minimize the squared residual norm."
    ],
    "answer": "Use a least-squares solution."
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
    title: "Python Lab: Linear Systems in Data Science, Engineering, and AI",
    objective:
      "Use Python to represent, solve, or analyze the lesson concept.",
    code: `import numpy as np

A = np.array([[1, 1], [1, 2], [1, 3], [1, 4]], dtype=float)
b = np.array([2.1, 2.9, 4.2, 5.1], dtype=float)

solution, residuals, rank, singular_values = np.linalg.lstsq(
    A, b, rcond=None
)

print(solution)
print(residuals)
print(rank)`,
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
    "id": "guided-03-08-01",
    "question": "State the main idea of this lesson.",
    "answer": "Many computational problems reduce to solving or approximating Ax = b."
  },
  {
    "id": "guided-03-08-02",
    "question": "What should be checked before solving?",
    "answer": "Variable order, equations, matrix dimensions, and meaning."
  },
  {
    "id": "guided-03-08-03",
    "question": "How can a result be verified?",
    "answer": "Substitute into the original equations or compare with Python."
  }
],

  independentPractice: [
  {
    "id": "practice-03-08-01",
    "difficulty": "Foundation",
    "question": "Complete one basic example using the lesson method.",
    "answer": "Apply the stated equations or row operations."
  },
  {
    "id": "practice-03-08-02",
    "difficulty": "Developing",
    "question": "Explain why the method preserves or reveals the solution set.",
    "sampleAnswer": "It uses equivalent transformations or structural analysis."
  },
  {
    "id": "practice-03-08-03",
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
    "id": "check-03-08-01",
    "type": "concept",
    "points": 3,
    "prompt": "Why are linear systems foundational in engineering, data science, and AI?",
    "sampleAnswer": "Many computational problems reduce to solving or approximating Ax = b."
  },
  {
    "id": "check-03-08-02",
    "type": "calculation",
    "points": 4,
    "prompt": "Represent calibration parameters with Ax = b.",
    "answer": "The solution gives calibration coefficients."
  },
  {
    "id": "check-03-08-03",
    "type": "application",
    "points": 4,
    "prompt": "Describe one practical use.",
    "sampleAnswer": "Use the method to solve interacting constraints."
  },
  {
    "id": "check-03-08-04",
    "type": "reflection",
    "points": 4,
    "prompt": "State one limitation.",
    "sampleAnswer": "The equations and data must represent the real situation correctly."
  }
]
  },

  portfolioArtifact: {
    title: "Linear Systems in Data Science, Engineering, and AI Case Study",
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
  "Many computational problems reduce to solving or approximating Ax = b.",
  "Variable order must remain consistent.",
  "Solutions should be checked against the original system.",
  "Python can verify or approximate results."
],

  previousLesson: {
  "id": "la-m03-l07",
  "slug": "applications-of-linear-systems",
  "title": "Applications of Linear Systems"
},
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Understand the structure before performing the calculation.",
    prompt:
      "Define variables, identify equations or dimensions, predict solution behavior, and then compute."
  }
};

export default lesson08;
