const lesson02 = {
  id: "algebra-one-module-01-lesson-02",
  slug: "order-of-operations",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 2,

  title: "Order of Operations",
  subtitle: "Evaluate numerical and algebraic expressions accurately.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "Why must operations be completed in a consistent order?",
  bigIdea: "The order of operations ensures that everyone evaluates an expression in the same way.",

  learningObjectives: [
    "Use grouping symbols correctly.",
    "Evaluate exponents.",
    "Multiply and divide from left to right.",
    "Add and subtract from left to right."
  ],

  warmUp: {
    title: "Activate Prior Knowledge",
    prompts: [
      "Write what you already know about today's topic.",
      "Solve one simple example.",
      "Explain your reasoning in words.",
    ],
  },

  vocabulary: [
    { term: "Key idea", definition: "The order of operations ensures that everyone evaluates an expression in the same way." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Order of Operations",
    summary: "The order of operations ensures that everyone evaluates an expression in the same way.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "Numerical expression",
      problem: "Evaluate 3 + 4 × 2.",
      solutionSteps: [
      "Multiply first: 4 × 2 = 8.",
      "Then add: 3 + 8 = 11."
],
      answer: "11",
    },
    {
      title: "Grouping symbols",
      problem: "Evaluate (3 + 4) × 2.",
      solutionSteps: [
      "Add inside parentheses.",
      "Multiply by 2."
],
      answer: "14",
    },
    {
      title: "Exponent",
      problem: "Evaluate 2³ + 5.",
      solutionSteps: [
      "Evaluate 2³.",
      "Add 5."
],
      answer: "13",
    }
  ],

  guidedPractice: [
    { question: "Evaluate 6 + 2 × 5.", answer: "16" },
    { question: "Evaluate (6 + 2) × 5.", answer: "40" },
    { question: "Evaluate 3x + 2 when x = 5.", answer: "17" }
  ],

  independentPractice: [
    { question: "Evaluate 6 + 2 × 5.", answer: "16" },
    { question: "Evaluate (6 + 2) × 5.", answer: "40" },
    { question: "Evaluate 3x + 2 when x = 5.", answer: "17" }
  ],

  commonMistakes: [
    {
      mistake: "Skipping steps or ignoring signs and grouping symbols.",
      correction: "Write each step clearly and check signs before simplifying.",
    },
    {
      mistake: "Using a rule without explaining why it applies.",
      correction: "Name the property, definition, or operation used.",
    },
  ],

  technologyActivity: {
    title: "Digital Algebra Exploration",
    tool: "Desmos",
    instructions: [
      "Enter an example from the lesson.",
      "Change one value at a time.",
      "Record what changes and what remains the same.",
      "Write one mathematical observation.",
    ],
  },

  pythonLab: {
    title: "Algebra with Python",
    objective: "Represent the lesson concept using variables and calculations.",
    code: "x = 5\nresult = 3 * x + 2\nprint(result)",
    reflectionQuestions: [
      "Which Python name represents a variable?",
      "How does the code match the algebra?",
      "What changes when x changes?",
    ],
  },

  realWorldConnection: {
    title: "Algebra in Context",
    prompts: [
      "Identify the changing quantity.",
      "Identify any fixed quantity.",
      "Write a mathematical expression.",
      "Explain the meaning of the result.",
    ],
  },

  formativeAssessment: {
    passingScore: 2,
    questions: [
      {
        type: "short-response",
        prompt: "Evaluate 6 + 2 × 5.",
        answer: "16",
      },
      {
        type: "short-response",
        prompt: "Evaluate (6 + 2) × 5.",
        answer: "40",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "The order of operations ensures that everyone evaluates an expression in the same way.",
      },
    ],
  },

  creatorChallenge: {
    title: "Design an order-of-operations puzzle and explain each step.",
    requirements: [
      "Use correct mathematical vocabulary.",
      "Include at least one worked example.",
      "Include a visual, table, diagram, or code output.",
      "Explain the result.",
      "Add a short reflection.",
    ],
  },

  lumineryGuidance: {
    message: "Understand the meaning first, then use the procedure.",
    prompt: "Explain how today's lesson connects words, quantities, symbols, and reasoning.",
  },

  summary: [
    "The order of operations ensures that everyone evaluates an expression in the same way.",
    "Mathematical steps should be accurate and justified.",
    "Algebra connects symbols to real quantities and relationships.",
  ],

  reflection: [
    "What was the most important idea?",
    "Which example helped you most?",
    "What mistake should you avoid?",
    "Where could this idea be used?",
  ],

  previousLesson: {
  "moduleNumber": 1,
  "lessonNumber": 1,
  "slug": "variables-and-expressions",
  "title": "Variables and Expressions"
},
  nextLesson: {
  "moduleNumber": 1,
  "lessonNumber": 3,
  "slug": "properties-of-real-numbers",
  "title": "Properties of Real Numbers"
},
};

export default lesson02;
