export const linearAlgebraCourse = {
  id: "linear-algebra-foundations",
  title: "Linear Algebra Foundations",
  category: "Applied Mathematics",
  description:
    "Learn vectors, matrices, transformations, eigenvalues, and their applications in artificial intelligence, robotics, engineering, and data science.",
  level: "Beginner",
  duration: "6 weeks",
  progress: 40,

  outcomes: [
    "Understand vectors and matrices",
    "Perform matrix multiplication",
    "Explain linear transformations",
    "Work with determinants",
    "Understand eigenvalues and eigenvectors",
  ],

  lessons: [
    {
      id: "introduction",
      title: "Introduction to Linear Algebra",
      description:
        "Discover why linear algebra is one of the foundations of modern technology.",
      status: "completed",
      path: "/lesson-engine",
    },
    {
      id: "vectors",
      title: "Vectors",
      description:
        "Learn vector notation, magnitude, direction, and real-world applications.",
      status: "completed",
      path: "/lesson-engine",
    },
    {
      id: "matrix-multiplication",
      title: "Matrix Multiplication",
      description:
        "Use the row-column rule and connect matrices to artificial intelligence.",
      status: "current",
      path: "/lesson-engine",
    },
    {
      id: "determinants",
      title: "Determinants",
      description:
        "Understand invertibility, scaling, area, and system behavior.",
      status: "locked",
      path: "/lesson-engine",
    },
    {
      id: "eigenvalues",
      title: "Eigenvalues and Eigenvectors",
      description:
        "Explore stable directions, transformations, and machine-learning applications.",
      status: "locked",
      path: "/lesson-engine",
    },
  ],

  finalProject: {
    title: "Python Matrix Calculator",
    description:
      "Build a Python application that performs matrix operations and clearly explains each calculation.",
    path: "/projects",
  },

  certificateRequirement:
    "Complete all lessons and successfully finish the final project",
};