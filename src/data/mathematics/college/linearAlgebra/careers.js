const linearAlgebraCareers = {
  courseId: "linear-algebra-foundations-to-ai",

  title: "Career Connections",

  description:
    "Linear Algebra is one of the most valuable mathematical subjects in the modern world. It powers artificial intelligence, robotics, engineering, finance, graphics, scientific computing, and data science.",

  careerClusters: [
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      icon: "🤖",
      description:
        "Linear algebra is the mathematical language of AI and deep learning.",

      careers: [
        {
          title: "AI Engineer",
          salary: "$120,000 - $220,000",
          skills: [
            "Vectors",
            "Matrices",
            "Neural Networks",
            "Optimization",
            "Python",
          ],
        },
        {
          title: "Machine Learning Engineer",
          salary: "$130,000 - $230,000",
          skills: [
            "Matrix Operations",
            "SVD",
            "PCA",
            "Regression",
            "Python",
          ],
        },
        {
          title: "AI Research Scientist",
          salary: "$150,000+",
          skills: [
            "Advanced Mathematics",
            "Research",
            "Optimization",
            "Deep Learning",
          ],
        },
      ],
    },

    {
      id: "data-science",
      title: "Data Science",
      icon: "📊",
      description:
        "Modern analytics depends heavily on matrix computation and dimensionality reduction.",

      careers: [
        {
          title: "Data Scientist",
          salary: "$110,000 - $190,000",
          skills: [
            "Statistics",
            "Linear Algebra",
            "Python",
            "SQL",
            "Machine Learning",
          ],
        },
        {
          title: "Data Analyst",
          salary: "$75,000 - $130,000",
          skills: [
            "Statistics",
            "Excel",
            "SQL",
            "Visualization",
          ],
        },
      ],
    },

    {
      id: "robotics",
      title: "Robotics",
      icon: "🦾",

      description:
        "Robotics relies on vectors, matrices, coordinate systems, transformations, and optimization.",

      careers: [
        {
          title: "Robotics Engineer",
          salary: "$110,000 - $190,000",
          skills: [
            "Transformation Matrices",
            "Kinematics",
            "Control",
            "Python",
          ],
        },
        {
          title: "Autonomous Vehicle Engineer",
          salary: "$140,000+",
          skills: [
            "Computer Vision",
            "Sensors",
            "Optimization",
            "AI",
          ],
        },
      ],
    },

    {
      id: "computer-vision",
      title: "Computer Vision",
      icon: "👁️",

      description:
        "Images are matrices. Computer vision transforms, filters, compresses, and interprets them using linear algebra.",

      careers: [
        {
          title: "Computer Vision Engineer",
          salary: "$140,000+",
          skills: [
            "Image Processing",
            "OpenCV",
            "Linear Algebra",
            "Deep Learning",
          ],
        },
      ],
    },

    {
      id: "graphics",
      title: "Computer Graphics",
      icon: "🎮",

      description:
        "Every animation, game, and 3D engine uses transformation matrices.",

      careers: [
        {
          title: "Graphics Programmer",
          salary: "$100,000 - $180,000",
          skills: [
            "Matrices",
            "3D Geometry",
            "Transformations",
            "OpenGL",
          ],
        },
      ],
    },

    {
      id: "finance",
      title: "Finance and Quantitative Analysis",
      icon: "💰",

      description:
        "Large financial models and portfolio optimization depend on linear algebra.",

      careers: [
        {
          title: "Quantitative Analyst",
          salary: "$150,000+",
          skills: [
            "Optimization",
            "Statistics",
            "Programming",
            "Mathematics",
          ],
        },
      ],
    },

    {
      id: "research",
      title: "Research",
      icon: "🔬",

      description:
        "Linear algebra supports scientific discovery across physics, biology, engineering, medicine, and artificial intelligence.",

      careers: [
        {
          title: "Research Scientist",
          salary: "$120,000+",
          skills: [
            "Mathematics",
            "Research",
            "Programming",
            "Scientific Computing",
          ],
        },
      ],
    },
  ],

  industryApplications: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Robotics",
    "Medical Imaging",
    "Cybersecurity",
    "Scientific Computing",
    "Weather Prediction",
    "Economics",
    "Finance",
    "Recommendation Systems",
    "Search Engines",
    "Natural Language Processing",
    "Autonomous Vehicles",
  ],

  portfolioProjects: [
    "Vector Visualizer",
    "Matrix Calculator",
    "Linear Transformation Studio",
    "Least Squares Regression",
    "Image Compression using SVD",
    "Face Recognition Mathematics",
    "Recommendation Engine Mathematics",
    "Neural Network from Scratch",
  ],

  certificationsSupported: [
    "Python Programming",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Vision",
    "Scientific Computing",
  ],

  nextCourses: [
    "Probability and Statistics",
    "Optimization",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Robotics Mathematics",
  ],

  lumineryAdvice:
    "Master Linear Algebra before diving deeply into Machine Learning. It will make advanced AI concepts far easier to understand and apply.",
};

export function getCareerCluster(id) {
  return linearAlgebraCareers.careerClusters.find(
    (cluster) => cluster.id === id
  );
}

export function getAllCareers() {
  return linearAlgebraCareers.careerClusters.flatMap(
    (cluster) => cluster.careers
  );
}

export default linearAlgebraCareers;