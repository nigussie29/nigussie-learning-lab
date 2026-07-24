export const lessonSchema = {
  id: "",
  slug: "",

  metadata: {
    courseId: "",
    courseTitle: "",
    moduleId: "",
    moduleTitle: "",
    lessonNumber: 1,
    title: "",
    subtitle: "",
    level: "",
    duration: "",
    estimatedTime: "",
    subject: "",
    tags: [],
  },

  hero: {
    eyebrow: "",
    title: "",
    subtitle: "",
    description: "",
  },

  objectives: [],

  essentialQuestion: {
    title: "Essential Question",
    question: "",
  },

  bigIdea: {
    title: "Big Idea",
    content: "",
  },

  whyItMatters: {
    title: "Why This Matters",
    content: "",
    examples: [],
  },

  learn: {
    title: "Learn",
    introduction: "",
    sections: [],
  },

  practice: {
    title: "Practice",
    instructions: "",
    activities: [],
  },

  build: {
    title: "Build",
    description: "",
    task: "",
    requirements: [],
  },

  master: {
    title: "Master",
    instructions: "",
    questions: [],
    passingScore: 80,
  },

  apply: {
    title: "Apply",
    description: "",
    challenge: "",
  },

  research: {
    title: "Research",
    question: "",
    instructions: "",
    resources: [],
  },

  create: {
    title: "Create",
    description: "",
    deliverables: [],
  },

  reflection: {
    title: "Reflection",
    questions: [],
  },

  luminery: {
    enabled: true,
    welcomeMessage: "",
    prompts: [],
    hints: [],
  },

  portfolioEvidence: {
    enabled: false,
    title: "",
    description: "",
    evidenceType: "",
    skills: [],
  },

  careerConnection: {
    title: "Career Connection",
    careers: [],
    skills: [],
    description: "",
  },

  appliedMathematics: {
    title: "Applied Mathematics Connection",
    concept: "",
    explanation: "",
    applications: [],
  },

  nextLesson: {
    lessonId: "",
    slug: "",
    title: "",
    description: "",
  },
};
export const validateLesson = (lesson) => {
  const errors = [];

  if (!lesson) {
    errors.push("Lesson data is missing.");

    return {
      isValid: false,
      errors,
    };
  }

  if (!lesson.id) {
    errors.push("Lesson id is required.");
  }

  if (!lesson.slug) {
    errors.push("Lesson slug is required.");
  }

  if (!lesson.metadata) {
    errors.push("Lesson metadata is required.");
  } else {
    if (!lesson.metadata.courseId) {
      errors.push("metadata.courseId is required.");
    }

    if (!lesson.metadata.title) {
      errors.push("metadata.title is required.");
    }

    if (!lesson.metadata.lessonNumber) {
      errors.push("metadata.lessonNumber is required.");
    }
  }

  if (!lesson.hero) {
    errors.push("Lesson hero is required.");
  } else {
    if (!lesson.hero.title) {
      errors.push("hero.title is required.");
    }

    if (!lesson.hero.description) {
      errors.push("hero.description is required.");
    }
  }

  if (!Array.isArray(lesson.objectives) || lesson.objectives.length === 0) {
    errors.push("At least one learning objective is required.");
  }

  if (!lesson.essentialQuestion?.question) {
    errors.push("An essential question is required.");
  }

  if (!lesson.bigIdea?.content) {
    errors.push("A big idea is required.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};