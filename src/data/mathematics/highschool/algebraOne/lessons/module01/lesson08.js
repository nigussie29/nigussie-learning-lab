const lesson08 = {
  id: "algebra-one-module-01-lesson-08",
  slug: "module-review-assessment-project",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 8,

  title: "Module Review, Assessment, and Creator Project",
  subtitle: "Integrate the major ideas from Foundations of Algebra.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "How do expressions help us represent, simplify, and evaluate situations?",
  bigIdea: "Algebra provides a symbolic language for quantities, patterns, and relationships.",

  learningObjectives: [
    "Review foundational vocabulary.",
    "Simplify and evaluate expressions.",
    "Translate between words and symbols.",
    "Complete a creator project."
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
    { term: "Key idea", definition: "Algebra provides a symbolic language for quantities, patterns, and relationships." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Module Review, Assessment, and Creator Project",
    summary: "Algebra provides a symbolic language for quantities, patterns, and relationships.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "Integrated simplification",
      problem: "Simplify 3(x + 2) + 4x - 5.",
      solutionSteps: [
      "Distribute.",
      "Combine like terms."
],
      answer: "7x + 1",
    },
    {
      title: "Evaluate",
      problem: "Evaluate 2x² - 3x + 1 when x = 2.",
      solutionSteps: [
      "Substitute 2.",
      "Apply order of operations."
],
      answer: "3",
    },
    {
      title: "Model",
      problem: "A service charges $25 plus $8 per hour h.",
      solutionSteps: [
      "Identify fixed fee.",
      "Identify hourly rate."
],
      answer: "8h + 25",
    }
  ],

  guidedPractice: [
    { question: "Simplify 5x + 3 - 2x + 8.", answer: "3x + 11" },
    { question: "Evaluate 4a - 7 when a = 6.", answer: "17" },
    { question: "Translate two more than five times n.", answer: "5n + 2" }
  ],

  independentPractice: [
    { question: "Simplify 5x + 3 - 2x + 8.", answer: "3x + 11" },
    { question: "Evaluate 4a - 7 when a = 6.", answer: "17" },
    { question: "Translate two more than five times n.", answer: "5n + 2" }
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
        prompt: "Simplify 5x + 3 - 2x + 8.",
        answer: "3x + 11",
      },
      {
        type: "short-response",
        prompt: "Evaluate 4a - 7 when a = 6.",
        answer: "17",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "Algebra provides a symbolic language for quantities, patterns, and relationships.",
      },
    ],
  },

  creatorChallenge: {
    title: "Create an Algebra Expression Designer portfolio artifact.",
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
    "Algebra provides a symbolic language for quantities, patterns, and relationships.",
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
  "lessonNumber": 7,
  "slug": "translating-words-into-algebra",
  "title": "Translating Words into Algebra"
},
  nextLesson: null,
};

export default lesson08;
