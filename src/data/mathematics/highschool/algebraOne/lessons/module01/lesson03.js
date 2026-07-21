const lesson03 = {
  id: "algebra-one-module-01-lesson-03",
  slug: "properties-of-real-numbers",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 3,

  title: "Properties of Real Numbers",
  subtitle: "Use algebraic properties to rewrite expressions without changing their value.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "How do properties help us simplify and justify algebraic work?",
  bigIdea: "Properties of real numbers let us rearrange or regroup expressions while preserving equality.",

  learningObjectives: [
    "Use commutative and associative properties.",
    "Apply identity and inverse properties.",
    "Recognize the zero property.",
    "Justify steps using property names."
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
    { term: "Key idea", definition: "Properties of real numbers let us rearrange or regroup expressions while preserving equality." },
    { term: "Equivalent", definition: "Having the same value or meaning." },
    { term: "Justify", definition: "Explain why a mathematical step is valid." },
  ],

  conceptExplanation: {
    title: "Properties of Real Numbers",
    summary: "Properties of real numbers let us rearrange or regroup expressions while preserving equality.",
    teachingNotes: [
      "Begin with a concrete or real-world example.",
      "Connect words, symbols, and visual models.",
      "Ask students to justify each step.",
    ],
  },

  workedExamples: [
    {
      title: "Commutative",
      problem: "Rewrite 4 + x.",
      solutionSteps: [
      "Change the order of the addends."
],
      answer: "x + 4",
    },
    {
      title: "Associative",
      problem: "Rewrite (2 + x) + 5.",
      solutionSteps: [
      "Regroup the addends."
],
      answer: "2 + (x + 5)",
    },
    {
      title: "Inverse",
      problem: "Simplify y + (-y).",
      solutionSteps: [
      "A number plus its additive inverse is zero."
],
      answer: "0",
    }
  ],

  guidedPractice: [
    { question: "Name the property: 8 + 0 = 8.", answer: "Additive identity." },
    { question: "Name the property: 3 × 7 = 7 × 3.", answer: "Commutative property." },
    { question: "Simplify 12 + (-12).", answer: "0" }
  ],

  independentPractice: [
    { question: "Name the property: 8 + 0 = 8.", answer: "Additive identity." },
    { question: "Name the property: 3 × 7 = 7 × 3.", answer: "Commutative property." },
    { question: "Simplify 12 + (-12).", answer: "0" }
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
        prompt: "Name the property: 8 + 0 = 8.",
        answer: "Additive identity.",
      },
      {
        type: "short-response",
        prompt: "Name the property: 3 × 7 = 7 × 3.",
        answer: "Commutative property.",
      },
      {
        type: "explanation",
        prompt: "Explain the lesson's big idea in your own words.",
        sampleAnswer: "Properties of real numbers let us rearrange or regroup expressions while preserving equality.",
      },
    ],
  },

  creatorChallenge: {
    title: "Create a property reference poster with examples.",
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
    "Properties of real numbers let us rearrange or regroup expressions while preserving equality.",
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
  "lessonNumber": 2,
  "slug": "order-of-operations",
  "title": "Order of Operations"
},
  nextLesson: {
  "moduleNumber": 1,
  "lessonNumber": 4,
  "slug": "combining-like-terms",
  "title": "Combining Like Terms"
},
};

export default lesson03;
