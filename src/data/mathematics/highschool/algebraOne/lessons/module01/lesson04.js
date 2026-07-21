const lesson04 = {
  id: "algebra-one-module-01-lesson-04",
  slug: "combining-like-terms",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 4,

  title: "Combining Like Terms",
  subtitle: "Simplify expressions by grouping terms with identical variable parts.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "Why can some terms be combined while others cannot?",
  bigIdea: "Like terms have the same variable part and combine by adding or subtracting coefficients.",

  learningObjectives: [
    "Identify like and unlike terms.",
    "Combine positive and negative coefficients.",
    "Simplify multi-term expressions.",
    "Explain with algebra tiles or words."
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
    { term: "Key idea", definition: "Like terms have the same variable part and combine by adding or subtracting coefficients." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Combining Like Terms",
    summary: "Like terms have the same variable part and combine by adding or subtracting coefficients.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "Basic combination",
      problem: "Simplify 3x + 5x.",
      solutionSteps: [
      "Both terms contain x.",
      "Add coefficients."
],
      answer: "8x",
    },
    {
      title: "With constants",
      problem: "Simplify 4x + 2 + 3x - 5.",
      solutionSteps: [
      "Combine x-terms.",
      "Combine constants."
],
      answer: "7x - 3",
    },
    {
      title: "Two variables",
      problem: "Simplify 2a + 3b + 5a - b.",
      solutionSteps: [
      "Combine a-terms.",
      "Combine b-terms."
],
      answer: "7a + 2b",
    }
  ],

  guidedPractice: [
    { question: "Simplify 7x - 2x.", answer: "5x" },
    { question: "Simplify 3a + 4 + 2a + 1.", answer: "5a + 5" },
    { question: "Simplify 6m - 3n + 2m + n.", answer: "8m - 2n" }
  ],

  independentPractice: [
    { question: "Simplify 7x - 2x.", answer: "5x" },
    { question: "Simplify 3a + 4 + 2a + 1.", answer: "5a + 5" },
    { question: "Simplify 6m - 3n + 2m + n.", answer: "8m - 2n" }
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
        prompt: "Simplify 7x - 2x.",
        answer: "5x",
      },
      {
        type: "short-response",
        prompt: "Simplify 3a + 4 + 2a + 1.",
        answer: "5a + 5",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "Like terms have the same variable part and combine by adding or subtracting coefficients.",
      },
    ],
  },

  creatorChallenge: {
    title: "Create an algebra-tile model showing how like terms combine.",
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
    "Like terms have the same variable part and combine by adding or subtracting coefficients.",
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
  "lessonNumber": 3,
  "slug": "properties-of-real-numbers",
  "title": "Properties of Real Numbers"
},
  nextLesson: {
  "moduleNumber": 1,
  "lessonNumber": 5,
  "slug": "distributive-property",
  "title": "Distributive Property"
},
};

export default lesson04;
