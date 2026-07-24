const introductionToPython = {
  id: "python-1-1",

  slug: "introduction-to-python",

  metadata: {
    courseId: "python-beginners",
    courseTitle: "Python for Beginners",

    moduleId: "python-foundations",
    moduleTitle: "Python Foundations",

    lessonNumber: 1,

    title: "Introduction to Python",

    subtitle: "Write Your First Python Program",

    level: "Beginner",

    duration: "12 min",

    estimatedTime: "12 min",

    subject: "Computer Science",

    tags: [
      "Python",
      "Programming",
      "Beginner",
      "Hello World",
    ],
  },

  hero: {
    eyebrow: "Module 1 · Lesson 1",

    title: "Introduction to Python",

    subtitle: "Write Your First Python Program",

    description:
      "Learn what programming is, discover why Python is widely used, and write your first Python program.",
  },

  objectives: [
    "Explain what a programming language is.",
    "Describe what Python is used for.",
    "Recognize the basic structure of a Python program.",
    "Write and run a simple Python print statement.",
  ],

  essentialQuestion: {
    title: "Essential Question",

    question:
      "How can we give instructions to a computer using Python?",
  },

  bigIdea: {
    title: "Big Idea",

    content:
      "Programming allows us to communicate instructions to computers, and Python provides a clear and beginner-friendly way to write those instructions.",
  },

  whyItMatters: {
    title: "Why It Matters",

    content:
      "Python is used in web development, data analytics, automation, artificial intelligence, machine learning, scientific research, and many other careers.",
  },

  learn: {
    title: "Learn",

    video: {
      title: "Introduction to Python",
      url: "https://www.youtube.com/embed/rfscVS0vtbw",
    },

    notes:
      "Welcome to Python. In this lesson, you will understand what programming is, learn about Python, and write your first program.",
  },

  practice: {
    title: "Practice",

    instructions:
      "Type the following Python statement and run the program.",

    codeExample: `print("Hello SkillBridge Academy!")`,

    questions: [
      "What happens when you run the program?",
      "What text appears in the output?",
      "What do you think the print function does?",
    ],
  },

  build: {
    title: "Build",

    challenge:
      "Change the program so that it prints your name and one career goal.",

    starterCode: `print("My name is...")
print("My career goal is...")`,
  },

  master: {
    title: "Master",

    quiz: [
      {
        id: "python-1-1-question-1",

        question: "Python is a:",

        options: [
          "Programming language",
          "Database",
          "Operating system",
          "Web browser",
        ],

        correctAnswer: 0,

        explanation:
          "Python is a programming language used to give instructions to computers.",
      },
    ],
  },

  apply: {
    title: "Apply",

    task:
      "Write a Python program that introduces you by printing your name, profession, and learning goal.",
  },

  reflection: {
    title: "Reflection",

    questions: [
      "What did you learn about Python?",
      "What was easy about writing your first program?",
      "What would you like to build with Python?",
    ],
  },

  careerConnection: {
    title: "Career Connection",

    careers: [
      "Python Developer",
      "Data Analyst",
      "Data Scientist",
      "AI Engineer",
      "Automation Engineer",
    ],
  },

  appliedMathematics: {
    title: "Applied Mathematics Connection",

    content:
      "Python can be used to perform calculations, analyze mathematical patterns, create graphs, and build mathematical models.",
  },

  luminery: {
    enabled: true,

    openingPrompt:
      "Ask Luminery to explain Python in simple language or help you understand your first print statement.",
  },

  portfolioEvidence: {
    title: "Portfolio Evidence",

    artifact:
      "A working Python program that prints the learner’s name, profession, and career goal.",

    skillsDemonstrated: [
      "Running Python code",
      "Using the print function",
      "Writing basic program statements",
    ],
  },

  nextLesson: {
    title: "Variables and Data Types",

    slug: "variables-and-data-types",
  },
};

export default introductionToPython;