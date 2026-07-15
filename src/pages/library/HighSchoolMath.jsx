import { Link } from "react-router-dom";

const highSchoolCourses = [
  {
    id: "pre-algebra",
    title: "Pre-Algebra",
    level: "Foundation",
    duration: "10–12 weeks",
    description:
      "Strengthen number sense, fractions, ratios, proportions, expressions, equations, and introductory geometry.",
    topics: [
      "Integers",
      "Fractions",
      "Ratios",
      "Expressions",
      "Equations",
      "Coordinate Plane",
    ],
    status: "Planned",
  },
  {
    id: "algebra-1",
    title: "Algebra I",
    level: "High School",
    duration: "16 weeks",
    description:
      "Build the foundations of algebraic reasoning through equations, inequalities, functions, systems, and modeling.",
    topics: [
      "Linear Equations",
      "Inequalities",
      "Functions",
      "Systems",
      "Exponents",
      "Quadratics",
    ],
    status: "Planned",
  },
  {
    id: "geometry",
    title: "Geometry",
    level: "High School",
    duration: "16 weeks",
    description:
      "Develop visual reasoning, proof, measurement, transformations, similarity, and spatial problem-solving.",
    topics: [
      "Proof",
      "Triangles",
      "Similarity",
      "Circles",
      "Transformations",
      "Coordinate Geometry",
    ],
    status: "Planned",
  },
  {
    id: "algebra-2",
    title: "Algebra II",
    level: "High School",
    duration: "16 weeks",
    description:
      "Extend algebraic thinking through polynomial, rational, exponential, logarithmic, and complex-number systems.",
    topics: [
      "Polynomials",
      "Rational Functions",
      "Exponentials",
      "Logarithms",
      "Complex Numbers",
      "Sequences",
    ],
    status: "Planned",
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    level: "High School",
    duration: "10–12 weeks",
    description:
      "Study angles, triangles, periodic behavior, identities, vectors, and real-world modeling.",
    topics: [
      "Unit Circle",
      "Sine",
      "Cosine",
      "Tangent",
      "Identities",
      "Applications",
    ],
    status: "Planned",
  },
  {
    id: "precalculus",
    title: "Precalculus",
    level: "High School",
    duration: "16 weeks",
    description:
      "Connect advanced functions, trigonometry, sequences, limits, vectors, and mathematical modeling.",
    topics: [
      "Functions",
      "Transformations",
      "Sequences",
      "Limits",
      "Vectors",
      "Modeling",
    ],
    status: "Planned",
  },
  {
    id: "statistics",
    title: "Statistics",
    level: "High School",
    duration: "12 weeks",
    description:
      "Learn to collect, summarize, visualize, analyze, and communicate evidence from data.",
    topics: [
      "Data Collection",
      "Distributions",
      "Sampling",
      "Correlation",
      "Regression",
      "Inference",
    ],
    status: "Planned",
  },
  {
    id: "probability",
    title: "Probability",
    level: "High School",
    duration: "8–10 weeks",
    description:
      "Understand uncertainty through counting, conditional probability, random variables, and simulation.",
    topics: [
      "Counting",
      "Events",
      "Conditional Probability",
      "Random Variables",
      "Expected Value",
      "Simulation",
    ],
    status: "Planned",
  },
  {
    id: "calculus-ab",
    title: "AP Calculus AB",
    level: "Advanced High School",
    duration: "20 weeks",
    description:
      "Develop a deep understanding of limits, derivatives, integrals, differential equations, and applications.",
    topics: [
      "Limits",
      "Derivatives",
      "Applications",
      "Integrals",
      "Differential Equations",
      "Area and Volume",
    ],
    status: "Planned",
  },
  {
    id: "calculus-bc",
    title: "AP Calculus BC",
    level: "Advanced High School",
    duration: "20 weeks",
    description:
      "Extend calculus through advanced integration, parametric equations, polar curves, and infinite series.",
    topics: [
      "Advanced Integration",
      "Sequences",
      "Series",
      "Taylor Series",
      "Parametric Curves",
      "Polar Coordinates",
    ],
    status: "Planned",
  },
];

const pathwayStages = [
  {
    number: "01",
    title: "Build Foundations",
    description:
      "Develop confidence with numbers, expressions, equations, graphs, and logical reasoning.",
  },
  {
    number: "02",
    title: "Connect Representations",
    description:
      "Move fluently among words, equations, tables, graphs, diagrams, and computer models.",
  },
  {
    number: "03",
    title: "Solve Real Problems",
    description:
      "Use mathematics to model scientific, technological, financial, and social situations.",
  },
  {
    number: "04",
    title: "Prepare for College and AI",
    description:
      "Build the algebra, geometry, probability, statistics, and calculus needed for advanced study.",
  },
];

export default function HighSchoolMath() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl bg-gradient-to-br from-blue-800 to-indigo-950 px-8 py-12 text-white md:px-12">
          <Link
            to="/library/mathematics"
            className="text-sm font-bold text-blue-200 transition hover:text-white"
          >
            ← Mathematics Library
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
            SkillBridge Academy
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            High School Mathematics
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Build the mathematical foundation required for college, science,
            engineering, data analysis, artificial intelligence, research, and
            lifelong problem-solving.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard value="10" label="Core courses" />
            <StatCard value="Creator focused" label="Learning philosophy" />
            <StatCard value="College + AI" label="Preparation pathway" />
          </div>
        </section>

        <section className="mt-12">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Learning pathway
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Progress from foundations to advanced mathematics
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Learners do not simply memorize procedures. They develop
            mathematical reasoning, representation, modeling, research, and
            creation.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pathwayStages.map((stage) => (
              <article
                key={stage.number}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-extrabold text-blue-600">
                  Stage {stage.number}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                  {stage.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                Course catalog
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                High school mathematics courses
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-slate-600">
              Each course will include deep lessons, worked examples, practice,
              Python labs, projects, research, assessments, and portfolio
              evidence.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {highSchoolCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
              SkillBridge standard
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Every mathematics course develops creators
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Start with a meaningful problem",
                "Build visual and conceptual understanding",
                "Derive important formulas",
                "Practice with increasing challenge",
                "Use Python and real data",
                "Complete portfolio projects",
                "Investigate research questions",
                "Explain and teach the mathematics",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl bg-violet-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
              Luminery pathway guidance
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              Where should a learner begin?
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Begin at the earliest course where the learner cannot yet explain
              and apply the essential ideas confidently.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="font-bold text-slate-900">
                AI preparation recommendation
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                Prioritize Algebra I, Geometry, Algebra II, Trigonometry,
                Precalculus, Probability, Statistics, and Calculus.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-12 rounded-3xl bg-slate-900 p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-300">
            Creator pathway
          </p>

          <h2 className="mt-2 text-3xl font-extrabold">
            Mathematics becomes meaningful through creation
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            Learners will build graphing tools, simulations, data studies,
            mathematical models, optimization projects, visual proofs, and
            research investigations as they progress.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Think",
              "Model",
              "Calculate",
              "Visualize",
              "Program",
              "Research",
              "Create",
              "Lead",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/10 px-5 py-3 font-bold"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="mt-1 text-sm text-blue-100">{label}</p>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            {course.level}
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
            {course.title}
          </h3>
        </div>

        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
          {course.status}
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        {course.description}
      </p>

      <p className="mt-4 text-sm font-bold text-slate-500">
        Estimated duration: {course.duration}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {course.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <button
          type="button"
          disabled
          className="rounded-xl bg-slate-100 px-5 py-3 font-bold text-slate-500"
        >
          Course Development Planned
        </button>
      </div>
    </article>
  );
}