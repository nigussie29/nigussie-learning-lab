export const lessonSchema = {
  id: "",
  slug: "",

  courseId: "",
  moduleId: "",

  lessonNumber: 0,
  title: "",
  subtitle: "",

  metadata: {
    subject: "",
    level: "",
    estimatedMinutes: 0,
    difficulty: "beginner",
    language: "English",
  },

  hero: {
    essentialQuestion: "",
    bigIdea: "",
  },

  objectives: [],
  prerequisiteKnowledge: [],
  vocabulary: [],

  learn: {
    introduction: "",
    concepts: [],
    guidedLearning: [],
  },

  practice: {
    guided: [],
    independent: [],
  },

  build: {
    title: "",
    description: "",
    instructions: [],
    deliverables: [],
  },

  mastery: {
    passingScore: 80,
    attemptsAllowed: 3,
    questions: [],
  },

  apply: {
    title: "",
    scenario: "",
    challenge: "",
  },

  researchExtension: {
    question: "",
    suggestedSources: [],
    deliverable: "",
    optional: true,
  },

  appliedMathematics: {
    connection: "",
    domainExamples: [],
    optional: false,
  },

  careerConnection: {
    careers: [],
    explanation: "",
  },

  portfolioEvidence: {
    enabled: false,
    evidenceType: "",
    title: "",
    requiredArtifacts: [],
  },

  reflection: [],

  nextMission: {
    lessonId: "",
    title: "",
  },

  skills: [],

  luminery: {
    enabled: true,
    coachingMode: "lesson-coach",
    allowedActions: [
      "explain-concept",
      "provide-hint",
      "ask-guiding-question",
      "recommend-review",
    ],
  },

  status: "draft",
  version: "1.0.0",
  order: 0,

  createdAt: "",
  updatedAt: "",
};