const linearAlgebraPrerequisites = {
  courseId: "linear-algebra-foundations-to-ai",

  purpose:
    "Help learners determine whether they are ready for the course, identify gaps, and follow a clear preparation pathway before beginning advanced linear algebra.",

  minimumReadiness: {
    title: "Minimum Readiness",
    description:
      "A learner does not need to be perfect in every prerequisite, but should be able to solve standard problems and explain the main ideas with reasonable confidence.",
    recommendedScore: 70,
  },

  prerequisiteAreas: [
    {
      id: "prerequisite-01",
      category: "Algebra",
      title: "Algebraic Manipulation",
      importance: "Essential",
      description:
        "Learners should be comfortable simplifying expressions, solving equations, working with variables, and applying algebraic properties.",
      skills: [
        "Simplify algebraic expressions.",
        "Use the distributive property.",
        "Combine like terms.",
        "Solve one-variable linear equations.",
        "Solve equations containing fractions.",
        "Rearrange formulas.",
        "Work with exponents and radicals.",
      ],
      readinessQuestions: [
        "Can you solve 3x - 7 = 11?",
        "Can you rearrange y = mx + b to solve for x?",
        "Can you simplify 2(a + 3) - 4a?",
      ],
      recommendedReview: [
        "Algebra I",
        "Algebra II",
        "Equation solving",
        "Exponent rules",
      ],
    },

    {
      id: "prerequisite-02",
      category: "Functions",
      title: "Functions and Graphs",
      importance: "Essential",
      description:
        "Learners should understand functions as input-output relationships and interpret equations, tables, and graphs.",
      skills: [
        "Evaluate a function.",
        "Interpret function notation.",
        "Identify domain and range.",
        "Graph linear functions.",
        "Interpret slope and intercept.",
        "Recognize transformations of graphs.",
        "Compare functions using multiple representations.",
      ],
      readinessQuestions: [
        "Can you evaluate f(3) when f(x) = 2x - 5?",
        "Can you explain the meaning of slope?",
        "Can you identify the intercepts of a line?",
      ],
      recommendedReview: [
        "Functions",
        "Linear functions",
        "Graph interpretation",
        "Coordinate geometry",
      ],
    },

    {
      id: "prerequisite-03",
      category: "Systems",
      title: "Systems of Linear Equations",
      importance: "Essential",
      description:
        "Learners should understand that a system represents multiple constraints and should be able to solve small systems.",
      skills: [
        "Solve two-variable systems by substitution.",
        "Solve two-variable systems by elimination.",
        "Interpret intersections graphically.",
        "Recognize one, none, or infinitely many solutions.",
        "Translate word problems into systems.",
      ],
      readinessQuestions: [
        "Can you solve x + y = 7 and x - y = 1?",
        "Can you explain what the intersection of two lines means?",
        "Can you identify an inconsistent system?",
      ],
      recommendedReview: [
        "Substitution",
        "Elimination",
        "Graphical systems",
        "Word-problem modeling",
      ],
    },

    {
      id: "prerequisite-04",
      category: "Geometry",
      title: "Coordinate Geometry",
      importance: "Essential",
      description:
        "Learners should understand points, distance, slope, direction, and geometric relationships in the coordinate plane.",
      skills: [
        "Plot points.",
        "Calculate slope.",
        "Calculate distance between points.",
        "Use the midpoint formula.",
        "Interpret geometric transformations.",
        "Recognize parallel and perpendicular lines.",
      ],
      readinessQuestions: [
        "Can you find the distance between two points?",
        "Can you determine whether two lines are perpendicular?",
        "Can you explain what a translation or rotation does?",
      ],
      recommendedReview: [
        "Coordinate plane",
        "Slope",
        "Distance formula",
        "Transformations",
      ],
    },

    {
      id: "prerequisite-05",
      category: "Trigonometry",
      title: "Basic Trigonometry",
      importance: "Recommended",
      description:
        "Basic trigonometry supports vector direction, angles, rotations, and geometric interpretation.",
      skills: [
        "Use sine, cosine, and tangent.",
        "Work with right triangles.",
        "Convert between degrees and radians.",
        "Interpret the unit circle.",
        "Use basic angle relationships.",
      ],
      readinessQuestions: [
        "Can you calculate a missing side in a right triangle?",
        "Can you explain cosine as a ratio?",
        "Can you convert 180 degrees to radians?",
      ],
      recommendedReview: [
        "Right-triangle trigonometry",
        "Unit circle",
        "Radians",
        "Angle measurement",
      ],
    },

    {
      id: "prerequisite-06",
      category: "Logic",
      title: "Mathematical Reasoning",
      importance: "Recommended",
      description:
        "Learners should be willing to explain why a procedure works, identify assumptions, and justify conclusions.",
      skills: [
        "Follow a multi-step argument.",
        "Explain a mathematical conclusion.",
        "Recognize examples and counterexamples.",
        "Use definitions carefully.",
        "Check whether an answer is reasonable.",
      ],
      readinessQuestions: [
        "Can you explain why a solution is valid?",
        "Can you identify a counterexample?",
        "Can you compare two methods for solving the same problem?",
      ],
      recommendedReview: [
        "Mathematical reasoning",
        "Proof vocabulary",
        "Error analysis",
        "Logical argument",
      ],
    },

    {
      id: "prerequisite-07",
      category: "Programming",
      title: "Introductory Python",
      importance: "Helpful",
      description:
        "Python is not required at the start, but basic programming experience will make the labs easier.",
      skills: [
        "Create variables.",
        "Use lists.",
        "Write simple functions.",
        "Use loops.",
        "Use conditionals.",
        "Import a library.",
        "Read simple error messages.",
      ],
      readinessQuestions: [
        "Can you create and print a Python list?",
        "Can you write a function that returns a value?",
        "Can you use a loop to process several numbers?",
      ],
      recommendedReview: [
        "Python variables",
        "Lists",
        "Functions",
        "Loops",
        "NumPy introduction",
      ],
    },
  ],

  readinessChecklist: [
    {
      id: "check-01",
      statement:
        "I can solve standard linear equations without step-by-step help.",
      category: "Algebra",
    },
    {
      id: "check-02",
      statement:
        "I can interpret and graph a linear function.",
      category: "Functions",
    },
    {
      id: "check-03",
      statement:
        "I can solve a two-variable system of equations.",
      category: "Systems",
    },
    {
      id: "check-04",
      statement:
        "I understand points, slope, distance, and direction.",
      category: "Geometry",
    },
    {
      id: "check-05",
      statement:
        "I can use basic sine and cosine relationships.",
      category: "Trigonometry",
    },
    {
      id: "check-06",
      statement:
        "I can explain why a mathematical answer makes sense.",
      category: "Reasoning",
    },
    {
      id: "check-07",
      statement:
        "I am willing to use Python to verify mathematical ideas.",
      category: "Programming",
    },
  ],

  diagnosticAssessment: {
    title: "Linear Algebra Readiness Diagnostic",
    description:
      "A short diagnostic should measure prerequisite knowledge without penalizing learners. The goal is to recommend preparation, not exclude learners.",
    sections: [
      {
        title: "Algebra",
        questionCount: 6,
        weight: 25,
      },
      {
        title: "Functions and Graphs",
        questionCount: 5,
        weight: 20,
      },
      {
        title: "Systems of Equations",
        questionCount: 4,
        weight: 20,
      },
      {
        title: "Coordinate Geometry",
        questionCount: 4,
        weight: 15,
      },
      {
        title: "Trigonometry",
        questionCount: 3,
        weight: 10,
      },
      {
        title: "Reasoning and Explanation",
        questionCount: 2,
        weight: 10,
      },
    ],
    scoreBands: [
      {
        minimum: 85,
        maximum: 100,
        recommendation: "Ready to begin the course.",
      },
      {
        minimum: 70,
        maximum: 84,
        recommendation:
          "Ready to begin with targeted review of weaker areas.",
      },
      {
        minimum: 50,
        maximum: 69,
        recommendation:
          "Complete the preparation pathway before beginning the main course.",
      },
      {
        minimum: 0,
        maximum: 49,
        recommendation:
          "Begin with Algebra and Functions Foundations before Linear Algebra.",
      },
    ],
  },

  preparationPathways: [
    {
      id: "pathway-01",
      title: "Fast Review Pathway",
      duration: "1–2 weeks",
      audience:
        "Learners who remember most prerequisite topics but need practice.",
      topics: [
        "Linear equations",
        "Functions and graphs",
        "Systems",
        "Distance and slope",
        "Basic trigonometry",
      ],
      completionEvidence: [
        "Diagnostic score of at least 70%",
        "Completed review problems",
        "Written reflection on remaining gaps",
      ],
    },
    {
      id: "pathway-02",
      title: "Algebra Foundations Pathway",
      duration: "3–5 weeks",
      audience:
        "Learners who need stronger equation solving and function skills.",
      topics: [
        "Expressions",
        "Linear equations",
        "Functions",
        "Graphing",
        "Systems",
        "Exponents",
      ],
      completionEvidence: [
        "Algebra review assessment",
        "Graphing activity",
        "System-solving task",
      ],
    },
    {
      id: "pathway-03",
      title: "Geometry and Trigonometry Review",
      duration: "2–3 weeks",
      audience:
        "Learners who need stronger geometric and directional understanding.",
      topics: [
        "Coordinate plane",
        "Distance",
        "Slope",
        "Angles",
        "Sine and cosine",
        "Rotations",
      ],
      completionEvidence: [
        "Coordinate geometry assessment",
        "Trigonometry practice",
        "Transformation visualization",
      ],
    },
    {
      id: "pathway-04",
      title: "Python Preparation Pathway",
      duration: "1–2 weeks",
      audience:
        "Learners who have not previously used Python.",
      topics: [
        "Variables",
        "Lists",
        "Functions",
        "Loops",
        "Conditionals",
        "NumPy arrays",
      ],
      completionEvidence: [
        "Python mini-project",
        "Vector function",
        "Simple NumPy notebook",
      ],
    },
  ],

  bridgeLessons: [
    {
      id: "bridge-01",
      title: "Algebra Review for Linear Algebra",
      duration: "90 minutes",
      topics: [
        "Expressions",
        "Equations",
        "Rearranging formulas",
        "Exponents",
      ],
    },
    {
      id: "bridge-02",
      title: "Functions and Graphs Review",
      duration: "90 minutes",
      topics: [
        "Function notation",
        "Slope",
        "Intercepts",
        "Graph interpretation",
      ],
    },
    {
      id: "bridge-03",
      title: "Systems of Equations Review",
      duration: "105 minutes",
      topics: [
        "Substitution",
        "Elimination",
        "Graphical interpretation",
        "Solution classification",
      ],
    },
    {
      id: "bridge-04",
      title: "Coordinate Geometry and Trigonometry",
      duration: "105 minutes",
      topics: [
        "Distance",
        "Direction",
        "Angles",
        "Sine",
        "Cosine",
      ],
    },
    {
      id: "bridge-05",
      title: "Python and NumPy Foundations",
      duration: "120 minutes",
      topics: [
        "Lists",
        "Functions",
        "Arrays",
        "Vector calculations",
        "Basic plotting",
      ],
    },
  ],

  supportRecommendations: [
    {
      challenge: "Algebra weakness",
      recommendation:
        "Complete the Algebra Foundations Pathway before beginning Module 2.",
    },
    {
      challenge: "Difficulty visualizing geometry",
      recommendation:
        "Use the Visualization Lab alongside every vector and transformation lesson.",
    },
    {
      challenge: "Limited Python experience",
      recommendation:
        "Complete the Python Preparation Pathway and use starter notebooks.",
    },
    {
      challenge: "Strong computation but weak explanation",
      recommendation:
        "Complete reflection prompts and teach one example after every lesson.",
    },
    {
      challenge: "Math anxiety",
      recommendation:
        "Begin with guided examples, short practice sessions, and visible progress milestones.",
    },
  ],

  lumineryGuidance: {
    welcomeMessage:
      "Readiness is not about being perfect. It is about identifying what you know, what needs review, and what support will help you succeed.",
    recommendation:
      "Complete the diagnostic honestly. Start with the earliest prerequisite you cannot explain and apply confidently.",
  },
};

export function getPrerequisiteAreaById(id) {
  return linearAlgebraPrerequisites.prerequisiteAreas.find(
    (area) => area.id === id
  );
}

export function getPrerequisitesByImportance(importance) {
  return linearAlgebraPrerequisites.prerequisiteAreas.filter(
    (area) => area.importance === importance
  );
}

export function getReadinessRecommendation(score) {
  return linearAlgebraPrerequisites.diagnosticAssessment.scoreBands.find(
    (band) => score >= band.minimum && score <= band.maximum
  );
}

export default linearAlgebraPrerequisites;