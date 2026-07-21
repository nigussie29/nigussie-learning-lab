const lesson01 = {
  id: "algebra-one-module-01-lesson-01",
  slug: "variables-and-expressions",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 1,

  title: "Variables and Expressions",
  subtitle: "Use symbols to represent unknown and changing quantities.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "How do variables and expressions describe real situations?",
  bigIdea: "A variable represents a changing or unknown quantity, and an expression combines numbers, variables, and operations.",

  learningObjectives: [
    "Identify variables, constants, coefficients, and terms.",
    "Distinguish expressions from equations.",
    "Translate verbal phrases into algebraic expressions.",
    "Interpret expressions in context."
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
    { term: "Key idea", definition: "A variable represents a changing or unknown quantity, and an expression combines numbers, variables, and operations." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Variables and Expressions",
    summary: "A variable represents a changing or unknown quantity, and an expression combines numbers, variables, and operations.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "Identify parts",
      problem: "Identify the coefficient and constant in 5x + 8.",
      solutionSteps: [
      "The variable term is 5x.",
      "The coefficient is 5.",
      "The constant is 8."
],
      answer: "Coefficient: 5; constant: 8.",
    },
    {
      title: "Translate words",
      problem: "Write an expression for seven more than n.",
      solutionSteps: [
      "Start with n.",
      "Seven more means add 7."
],
      answer: "n + 7",
    },
    {
      title: "Model cost",
      problem: "A ticket costs $12. Write the cost of t tickets.",
      solutionSteps: [
      "Multiply price by number of tickets."
],
      answer: "12t",
    }
  ],

  guidedPractice: [
    { question: "Identify the variable and coefficient in 6x + 11.", answer: "Variable: x; coefficient: 6." },
    { question: "Write an expression for five less than n.", answer: "n - 5" },
    { question: "A gym charges $20 per month plus $35. Write the total after m months.", answer: "20m + 35" }
  ],

  independentPractice: [
    { question: "Identify the variable and coefficient in 6x + 11.", answer: "Variable: x; coefficient: 6." },
    { question: "Write an expression for five less than n.", answer: "n - 5" },
    { question: "A gym charges $20 per month plus $35. Write the total after m months.", answer: "20m + 35" }
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
        prompt: "Identify the variable and coefficient in 6x + 11.",
        answer: "Variable: x; coefficient: 6.",
      },
      {
        type: "short-response",
        prompt: "Write an expression for five less than n.",
        answer: "n - 5",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "A variable represents a changing or unknown quantity, and an expression combines numbers, variables, and operations.",
      },
    ],
  },

  creatorChallenge: {
    title: "Create a real-world situation represented by ax + b and explain every part.",
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
    "A variable represents a changing or unknown quantity, and an expression combines numbers, variables, and operations.",
    "Mathematical steps should be accurate and justified.",
    "Algebra connects symbols to real quantities and relationships.",
  ],

  reflection: [
    "What was the most important idea?",
    "Which example helped you most?",
    "What mistake should you avoid?",
    "Where could this idea be used?",
  ],

  previousLesson: null,
  nextLesson: {
  "moduleNumber": 1,
  "lessonNumber": 2,
  "slug": "order-of-operations",
  "title": "Order of Operations"
},
};

export default lesson01;
