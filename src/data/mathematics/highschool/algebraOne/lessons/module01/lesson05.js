const lesson05 = {
  id: "algebra-one-module-01-lesson-05",
  slug: "distributive-property",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 5,

  title: "Distributive Property",
  subtitle: "Multiply across grouped terms and factor common quantities.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "How does the distributive property connect multiplication and addition?",
  bigIdea: "The distributive property rewrites a product and a sum as equivalent expressions.",

  learningObjectives: [
    "Expand expressions using distribution.",
    "Distribute negative numbers correctly.",
    "Combine distribution with like terms.",
    "Factor simple expressions."
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
    { term: "Key idea", definition: "The distributive property rewrites a product and a sum as equivalent expressions." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Distributive Property",
    summary: "The distributive property rewrites a product and a sum as equivalent expressions.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "Positive factor",
      problem: "Expand 3(x + 4).",
      solutionSteps: [
      "Multiply 3 by x.",
      "Multiply 3 by 4."
],
      answer: "3x + 12",
    },
    {
      title: "Negative factor",
      problem: "Expand -2(x - 5).",
      solutionSteps: [
      "Multiply -2 by x.",
      "Multiply -2 by -5."
],
      answer: "-2x + 10",
    },
    {
      title: "Combine terms",
      problem: "Simplify 2(x + 3) + 4x.",
      solutionSteps: [
      "Distribute.",
      "Combine x-terms."
],
      answer: "6x + 6",
    }
  ],

  guidedPractice: [
    { question: "Expand 5(x + 2).", answer: "5x + 10" },
    { question: "Expand -3(y + 4).", answer: "-3y - 12" },
    { question: "Simplify 4(a - 1) + 2a.", answer: "6a - 4" }
  ],

  independentPractice: [
    { question: "Expand 5(x + 2).", answer: "5x + 10" },
    { question: "Expand -3(y + 4).", answer: "-3y - 12" },
    { question: "Simplify 4(a - 1) + 2a.", answer: "6a - 4" }
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
        prompt: "Expand 5(x + 2).",
        answer: "5x + 10",
      },
      {
        type: "short-response",
        prompt: "Expand -3(y + 4).",
        answer: "-3y - 12",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "The distributive property rewrites a product and a sum as equivalent expressions.",
      },
    ],
  },

  creatorChallenge: {
    title: "Use an area model to demonstrate distribution and factoring.",
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
    "The distributive property rewrites a product and a sum as equivalent expressions.",
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
  "lessonNumber": 4,
  "slug": "combining-like-terms",
  "title": "Combining Like Terms"
},
  nextLesson: {
  "moduleNumber": 1,
  "lessonNumber": 6,
  "slug": "evaluating-expressions",
  "title": "Evaluating Expressions"
},
};

export default lesson05;
