import LibraryLayout from "../../components/library/LibraryLayout";
import LibraryCard from "../../components/library/LibraryCard";
import CourseCard from "../../components/library/CourseCard";
import LearningPath from "../../components/library/LearningPath";
import KnowledgeMap from "../../components/library/KnowledgeMap";
import ProgressTracker from "../../components/library/ProgressTracker";
import CreatorJourney from "../../components/library/CreatorJourney";

const mathematicsPathways = [
  {
    icon: "📘",
    title: "High School Mathematics",
    description:
      "Build strong foundations in algebra, geometry, trigonometry, statistics, probability, precalculus, and calculus.",
    topics: [
      "Algebra",
      "Geometry",
      "Trigonometry",
      "Statistics",
      "Calculus",
    ],
    path: "/library/mathematics/high-school",
    available: true,
    actionLabel: "Explore High School Math",
  },
  {
    icon: "📗",
    title: "College Mathematics",
    description:
      "Study the mathematics used in science, engineering, computing, economics, and advanced research.",
    topics: [
      "Calculus",
      "Linear Algebra",
      "Differential Equations",
      "Discrete Mathematics",
      "Analysis",
    ],
    path: "/library/mathematics/college",
    available: true,
    actionLabel: "Explore College Math",
  },
  {
    icon: "📕",
    title: "AI Mathematics",
    description:
      "Connect mathematical foundations to machine learning, deep learning, data science, robotics, and artificial intelligence.",
    topics: [
      "Matrix Algebra",
      "Probability",
      "Optimization",
      "Information Theory",
      "Numerical Computing",
    ],
    path: "/library/mathematics/ai",
    available: true,
    actionLabel: "Explore AI Mathematics",
  },
];

const learningStages = [
  {
    title: "High School Foundations",
    description:
      "Build confidence in algebra, geometry, functions, probability, statistics, and calculus.",
    path: "/library/mathematics/high-school",
    complete: false,
    current: true,
  },
  {
    title: "College Mathematics",
    description:
      "Advance into calculus, linear algebra, differential equations, discrete mathematics, and analysis.",
    path: "/library/mathematics/college",
    complete: false,
    current: false,
  },
  {
    title: "AI Mathematics",
    description:
      "Apply mathematics to machine learning, optimization, neural networks, embeddings, and data science.",
    path: "/library/mathematics/ai",
    complete: false,
    current: false,
  },
  {
    title: "Research Mathematics",
    description:
      "Investigate advanced questions, mathematical models, proofs, experiments, and original ideas.",
    path: "/library/mathematics/research",
    complete: false,
    current: false,
  },
];

const featuredCourses = [
  {
    id: "linear-algebra-foundations",
    title: "Linear Algebra: Foundations to AI",
    description:
      "Move from vectors and systems of equations to transformations, determinants, vector spaces, eigenvalues, least squares, SVD, and AI applications.",
    level: "High School to College",
    duration: "12–16 weeks",
    status: "Available",
    lessons: 12,
    projects: 5,
    assessments: 4,
    topics: [
      "Vectors",
      "Matrices",
      "Transformations",
      "Eigenvalues",
      "Least Squares",
      "SVD",
    ],
    path: "/courses/linear-algebra-foundations",
  },
  {
    id: "algebra-1",
    title: "Algebra I",
    description:
      "Develop equations, inequalities, functions, systems, graphing, and mathematical modeling.",
    level: "High School",
    duration: "16 weeks",
    status: "Planned",
    lessons: 48,
    projects: 6,
    assessments: 8,
    topics: [
      "Linear Equations",
      "Functions",
      "Systems",
      "Exponents",
      "Quadratics",
    ],
  },
  {
    id: "calculus-1",
    title: "Calculus I",
    description:
      "Understand limits, derivatives, applications of differentiation, integrals, and the Fundamental Theorem of Calculus.",
    level: "College",
    duration: "16 weeks",
    status: "Planned",
    lessons: 42,
    projects: 5,
    assessments: 7,
    topics: [
      "Limits",
      "Derivatives",
      "Optimization",
      "Integrals",
      "Applications",
    ],
  },
];

const knowledgeConcepts = [
  {
    title: "Algebra and Functions",
    description:
      "Describe relationships, patterns, equations, change, and mathematical structure.",
  },
  {
    title: "Geometry and Trigonometry",
    description:
      "Understand shape, space, angle, measurement, transformations, and periodic behavior.",
  },
  {
    title: "Calculus",
    description:
      "Study limits, rates of change, accumulation, motion, optimization, and continuous systems.",
  },
  {
    title: "Linear Algebra",
    description:
      "Represent vectors, matrices, transformations, systems, data, and high-dimensional models.",
  },
  {
    title: "Probability and Statistics",
    description:
      "Model uncertainty, analyze evidence, estimate patterns, and make data-informed decisions.",
  },
  {
    title: "Optimization and AI Mathematics",
    description:
      "Find effective solutions and connect mathematics to machine learning, robotics, and research.",
  },
];

const progressMetrics = [
  {
    label: "Courses Started",
    value: 1,
  },
  {
    label: "Lessons Complete",
    value: 0,
  },
  {
    label: "Projects Built",
    value: 0,
  },
  {
    label: "Research Tasks",
    value: 0,
  },
];

export default function Mathematics() {
  return (
    <LibraryLayout
      breadcrumbs={[
        {
          label: "Mathematics",
        },
      ]}
      searchPlaceholder="Search mathematics, courses, formulas, lessons, projects, and research..."
    >
      <div className="space-y-12">
        <section className="rounded-3xl bg-gradient-to-br from-indigo-800 to-blue-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
            SkillBridge Academy
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Mathematics Library
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Learn mathematics as a connected language for reasoning, modeling,
            programming, artificial intelligence, engineering, research, and
            creation.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-xl font-bold">
              Understand deeply. Derive carefully. Apply meaningfully. Create
              confidently.
            </p>
          </div>
        </section>

        <ProgressTracker
          title="Your Mathematics Journey"
          progress={5}
          metrics={progressMetrics}
        />

        <LearningPath
          title="Mathematics Learning Pathway"
          description="Begin with your current foundation and progress toward college mathematics, artificial intelligence, research, and innovation."
          stages={learningStages}
        />

        <section>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Mathematics pathways
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Choose your learning pathway
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Each pathway connects mathematical knowledge to projects,
            programming, research, careers, and real-world applications.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {mathematicsPathways.map((pathway) => (
              <LibraryCard
                key={pathway.title}
                icon={pathway.icon}
                title={pathway.title}
                description={pathway.description}
                topics={pathway.topics}
                path={pathway.path}
                available={pathway.available}
                actionLabel={pathway.actionLabel}
              />
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
            Featured courses
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Begin building mathematical mastery
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Courses include deep lessons, guided practice, Python laboratories,
            visualizations, portfolio projects, research extensions, and
            mastery assessments.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <KnowledgeMap
          title="Mathematics Knowledge Map"
          description="Mathematical ideas are connected. Each stage prepares learners for deeper reasoning, advanced applications, artificial intelligence, and research."
          concepts={knowledgeConcepts}
        />

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Mathematics resources
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Learn through multiple forms of evidence
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Formula Library",
                  description:
                    "Definitions, derivations, interpretations, examples, and applications.",
                },
                {
                  title: "Proof Library",
                  description:
                    "Direct proof, contradiction, induction, geometric reasoning, and formal argument.",
                },
                {
                  title: "Python Lab",
                  description:
                    "Use Python, NumPy, SymPy, SciPy, Matplotlib, and real datasets.",
                },
                {
                  title: "Visualization Lab",
                  description:
                    "Explore graphs, vectors, matrices, transformations, probability, and simulations.",
                },
                {
                  title: "Project Center",
                  description:
                    "Build mathematical tools, models, dashboards, simulations, and applications.",
                },
                {
                  title: "Research Center",
                  description:
                    "Develop questions, collect evidence, analyze findings, and communicate discoveries.",
                },
              ].map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-2xl bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {resource.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl bg-violet-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
              Luminery Guidance
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              Where should you begin?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Begin with the earliest topic you cannot yet explain, calculate,
              visualize, apply, and teach confidently.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="font-bold text-slate-900">
                AI preparation pathway
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Strengthen algebra, geometry, functions, trigonometry,
                probability, statistics, calculus, linear algebra, and
                optimization.
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-white p-5">
              <p className="font-bold text-slate-900">
                Research preparation
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Practice mathematical reasoning, proofs, modeling, scientific
                computing, data analysis, and technical communication.
              </p>
            </div>
          </aside>
        </section>

        <CreatorJourney currentStage={1} />
      </div>
    </LibraryLayout>
  );
}