const lesson07 = {
  id: "algebra-one-module-01-lesson-07",
  slug: "translating-words-into-algebra",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 7,

  title: "Translating Words into Algebra",
  subtitle: "Convert verbal statements and situations into algebraic expressions.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "How can words be translated into precise algebraic language?",
  bigIdea: "Verbal phrases describe operations and relationships that can be represented with symbols.",

  learningObjectives: [
    "Recognize operation words.",
    "Translate verbal phrases.",
    "Handle order-sensitive phrases.",
    "Create expressions from situations."
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
    { term: "Key idea", definition: "Verbal phrases describe operations and relationships that can be represented with symbols." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Translating Words into Algebra",
    summary: "Verbal phrases describe operations and relationships that can be represented with symbols.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "Addition phrase",
      problem: "Translate five more than x.",
      solutionSteps: [
      "Start with x.",
      "Add 5."
],
      answer: "x + 5",
    },
    {
      title: "Order-sensitive subtraction",
      problem: "Translate seven less than n.",
      solutionSteps: [
      "Start with n.",
      "Subtract 7."
],
      answer: "n - 7",
    },
    {
      title: "Grouped quantity",
      problem: "Translate three times the sum of x and 4.",
      solutionSteps: [
      "Group x + 4.",
      "Multiply by 3."
],
      answer: "3(x + 4)",
    }
  ],

  guidedPractice: [
    { question: "Translate twice a number p.", answer: "2p" },
    { question: "Translate the quotient of y and 6.", answer: "y / 6" },
    { question: "Translate four less than three times x.", answer: "3x - 4" }
  ],

  independentPractice: [
    { question: "Translate twice a number p.", answer: "2p" },
    { question: "Translate the quotient of y and 6.", answer: "y / 6" },
    { question: "Translate four less than three times x.", answer: "3x - 4" }
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
        prompt: "Translate twice a number p.",
        answer: "2p",
      },
      {
        type: "short-response",
        prompt: "Translate the quotient of y and 6.",
        answer: "y / 6",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "Verbal phrases describe operations and relationships that can be represented with symbols.",
      },
    ],
  },

  creatorChallenge: {
    title: "Write five original verbal situations and translate each one.",
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
    "Verbal phrases describe operations and relationships that can be represented with symbols.",
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
  "lessonNumber": 6,
  "slug": "evaluating-expressions",
  "title": "Evaluating Expressions"
},
  nextLesson: {
  "moduleNumber": 1,
  "lessonNumber": 8,
  "slug": "module-review-assessment-project",
  "title": "Module Review, Assessment, and Creator Project"
},
};

export default lesson07;
