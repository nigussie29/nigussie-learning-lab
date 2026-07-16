const lesson03 = {
  id: "la-m03-l03",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-03",
  moduleNumber: 3,
  lessonNumber: 3,
  slug: "augmented-matrices-row-operations",
  title: "Augmented Matrices and Elementary Row Operations",
  subtitle: "A complete lesson in Module 03: Systems of Linear Equations.",
  status: "Available",
  duration: "90–105 minutes",
  level: "Foundation",

  essentialQuestion: "How can row operations simplify a system without changing its solutions?",
  bigIdea: "Elementary row operations create equivalent systems with the same solution set.",

  problemFirst: {
    title: "Problem-First Investigation",
    scenario: "How can row operations simplify a system without changing its solutions?",
    questions: [
  "What are the unknown quantities?",
  "Which constraints must hold simultaneously?",
  "How can the situation be represented with equations or a matrix?",
  "How can the result be checked?"
],
    expectedInsight: "Elementary row operations create equivalent systems with the same solution set."
  },

  learningObjectives: [
  "Explain the central idea of Augmented Matrices and Elementary Row Operations.",
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
    "id": "example-03-03-01",
    "title": "Create an Augmented Matrix",
    "problem": "Write the augmented matrix for 2x + 3y = 7 and x - y = 1.",
    "solutionSteps": [
      "Use coefficient columns for x and y.",
      "Attach the constants column."
    ],
    "answer": "[[2, 3, 7], [1, -1, 1]]"
  },
  {
    "id": "example-03-03-02",
    "title": "Row Replacement",
    "problem": "Apply R2 ← R2 - 2R1 to [[1, 2, 5], [2, 5, 12]].",
    "solutionSteps": [
      "Multiply row 1 by 2.",
      "Subtract it from row 2."
    ],
    "answer": "[[1, 2, 5], [0, 1, 2]]"
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
    title: "Python Lab: Augmented Matrices and Elementary Row Operations",
    objective:
      "Use Python to represent, solve, or analyze the lesson concept.",
    code: `import numpy as np

M = np.array([[1., 2., 5.], [2., 5., 12.]])
M[1] = M[1] - 2 * M[0]
print(M)`,
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
    "id": "guided-03-03-01",
    "question": "State the main idea of this lesson.",
    "answer": "Elementary row operations create equivalent systems with the same solution set."
  },
  {
    "id": "guided-03-03-02",
    "question": "What should be checked before solving?",
    "answer": "Variable order, equations, matrix dimensions, and meaning."
  },
  {
    "id": "guided-03-03-03",
    "question": "How can a result be verified?",
    "answer": "Substitute into the original equations or compare with Python."
  }
],

  independentPractice: [
  {
    "id": "practice-03-03-01",
    "difficulty": "Foundation",
    "question": "Complete one basic example using the lesson method.",
    "answer": "Apply the stated equations or row operations."
  },
  {
    "id": "practice-03-03-02",
    "difficulty": "Developing",
    "question": "Explain why the method preserves or reveals the solution set.",
    "sampleAnswer": "It uses equivalent transformations or structural analysis."
  },
  {
    "id": "practice-03-03-03",
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
    "id": "check-03-03-01",
    "type": "concept",
    "points": 3,
    "prompt": "How can row operations simplify a system without changing its solutions?",
    "sampleAnswer": "Elementary row operations create equivalent systems with the same solution set."
  },
  {
    "id": "check-03-03-02",
    "type": "calculation",
    "points": 4,
    "prompt": "Write the augmented matrix for 2x + 3y = 7 and x - y = 1.",
    "answer": "[[2, 3, 7], [1, -1, 1]]"
  },
  {
    "id": "check-03-03-03",
    "type": "application",
    "points": 4,
    "prompt": "Describe one practical use.",
    "sampleAnswer": "Use the method to solve interacting constraints."
  },
  {
    "id": "check-03-03-04",
    "type": "reflection",
    "points": 4,
    "prompt": "State one limitation.",
    "sampleAnswer": "The equations and data must represent the real situation correctly."
  }
]
  },

  portfolioArtifact: {
    title: "Augmented Matrices and Elementary Row Operations Case Study",
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
  "Elementary row operations create equivalent systems with the same solution set.",
  "Variable order must remain consistent.",
  "Solutions should be checked against the original system.",
  "Python can verify or approximate results."
],

  previousLesson: {
  "id": "la-m03-l02",
  "slug": "geometric-interpretation",
  "title": "Geometric Interpretation of Linear Systems"
},
  nextLesson: {
  "id": "la-m03-l04",
  "slug": "gaussian-elimination",
  "title": "Gaussian Elimination and Row Echelon Form"
},

  lumineryGuidance: {
    message:
      "Understand the structure before performing the calculation.",
    prompt:
      "Define variables, identify equations or dimensions, predict solution behavior, and then compute."
  }
};

export default lesson03;
