const lesson06 = {
  id: "algebra-one-module-01-lesson-06",
  slug: "evaluating-expressions",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 6,

  title: "Evaluating Expressions",
  subtitle: "Substitute values and calculate expression values accurately.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "How do we determine the value of an expression?",
  bigIdea: "To evaluate an expression, substitute values and apply the order of operations.",

  learningObjectives: [
    "Substitute values for variables.",
    "Use parentheses for negative substitutions.",
    "Evaluate expressions with multiple variables.",
    "Interpret results in context."
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
    { term: "Key idea", definition: "To evaluate an expression, substitute values and apply the order of operations." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Evaluating Expressions",
    summary: "To evaluate an expression, substitute values and apply the order of operations.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "One variable",
      problem: "Evaluate 3x + 4 when x = 5.",
      solutionSteps: [
      "Substitute 5.",
      "Compute 3(5) + 4."
],
      answer: "19",
    },
    {
      title: "Negative value",
      problem: "Evaluate x² + 2 when x = -3.",
      solutionSteps: [
      "Use (-3)².",
      "Add 2."
],
      answer: "11",
    },
    {
      title: "Two variables",
      problem: "Evaluate 2a - b when a = 6 and b = 4.",
      solutionSteps: [
      "Substitute both values.",
      "Compute."
],
      answer: "8",
    }
  ],

  guidedPractice: [
    { question: "Evaluate 4n - 1 when n = 3.", answer: "11" },
    { question: "Evaluate y² - 5 when y = -2.", answer: "-1" },
    { question: "Evaluate 3a + 2b when a = 2 and b = 5.", answer: "16" }
  ],

  independentPractice: [
    { question: "Evaluate 4n - 1 when n = 3.", answer: "11" },
    { question: "Evaluate y² - 5 when y = -2.", answer: "-1" },
    { question: "Evaluate 3a + 2b when a = 2 and b = 5.", answer: "16" }
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
        prompt: "Evaluate 4n - 1 when n = 3.",
        answer: "11",
      },
      {
        type: "short-response",
        prompt: "Evaluate y² - 5 when y = -2.",
        answer: "-1",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "To evaluate an expression, substitute values and apply the order of operations.",
      },
    ],
  },

  creatorChallenge: {
    title: "Build an input-output table for an expression.",
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
    "To evaluate an expression, substitute values and apply the order of operations.",
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
  "lessonNumber": 5,
  "slug": "distributive-property",
  "title": "Distributive Property"
},
  nextLesson: {
  "moduleNumber": 1,
  "lessonNumber": 7,
  "slug": "translating-words-into-algebra",
  "title": "Translating Words into Algebra"
},
};

export default lesson06;
