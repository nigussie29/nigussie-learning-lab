import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import { getCompletedLessons } from "../../../services/linearAlgebraProgress.js";
import linearAlgebraLessons from "../../../data/mathematics/college/linearAlgebra/lessons/index.js";

const moduleCatalog = [
  {
    moduleNumber: 1,
    title: "Vectors and Geometric Foundations",
    description:
      "Build the vector foundations required for geometry, robotics, data science, machine learning, and artificial intelligence.",
    level: "Foundation",
    estimatedTime: "10–12 hours",
    status: "Available",
    theme: "from-blue-950 via-indigo-900 to-slate-950",
    topics: [
      "Vector representation",
      "Magnitude and distance",
      "Vector operations",
      "Dot product",
      "Cosine similarity",
    ],
  },
  {
    moduleNumber: 2,
    title: "Matrices and Matrix Operations",
    description:
      "Learn how matrices organize data, transform vectors, represent images, and power modern AI systems.",
    level: "Foundation",
    estimatedTime: "12–14 hours",
    status: "Available",
    theme: "from-emerald-950 via-teal-900 to-slate-950",
    topics: [
      "Matrix structure",
      "Special matrices",
      "Matrix operations",
      "Matrix multiplication",
      "Matrices in AI",
    ],
  },
  {
    moduleNumber: 3,
    title: "Systems of Linear Equations",
    description:
      "Model interacting constraints, perform row reduction, classify solutions, and connect linear systems to computing.",
    level: "Intermediate",
    estimatedTime: "12–14 hours",
    status: "Available",
    theme: "from-violet-950 via-purple-900 to-slate-950",
    topics: [
      "Linear systems",
      "Row operations",
      "Gaussian elimination",
      "RREF",
      "Applications",
    ],
  },
  {
    moduleNumber: 4,
    title: "Determinants and Invertibility",
    description:
      "Explore determinants, geometric scaling, invertibility, and structural properties of square matrices.",
    level: "Intermediate",
    estimatedTime: "10–12 hours",
    status: "Planned",
    theme: "from-amber-900 via-orange-800 to-slate-950",
    topics: [
      "Determinants",
      "Cofactors",
      "Invertibility",
      "Geometric meaning",
      "Applications",
    ],
  },
  {
    moduleNumber: 5,
    title: "Inverse Matrices",
    description:
      "Learn how inverse matrices reverse transformations and solve compatible linear systems.",
    level: "Intermediate",
    estimatedTime: "10–12 hours",
    status: "Planned",
    theme: "from-rose-950 via-red-900 to-slate-950",
    topics: [
      "Matrix inverses",
      "Identity relationships",
      "Solving systems",
      "Invertibility tests",
      "Applications",
    ],
  },
  {
    moduleNumber: 6,
    title: "Vector Spaces and Subspaces",
    description:
      "Study span, linear independence, basis, dimension, and the structure of vector spaces.",
    level: "Intermediate",
    estimatedTime: "12–14 hours",
    status: "Planned",
    theme: "from-cyan-950 via-sky-900 to-slate-950",
    topics: [
      "Vector spaces",
      "Subspaces",
      "Span",
      "Linear independence",
      "Basis and dimension",
    ],
  },
  {
    moduleNumber: 7,
    title: "Linear Transformations",
    description:
      "Understand transformations as functions that preserve vector addition and scalar multiplication.",
    level: "Intermediate",
    estimatedTime: "12–14 hours",
    status: "Planned",
    theme: "from-fuchsia-950 via-pink-900 to-slate-950",
    topics: [
      "Transformation rules",
      "Kernel and image",
      "Matrix representation",
      "Composition",
      "Geometry",
    ],
  },
  {
    moduleNumber: 8,
    title: "Eigenvalues and Eigenvectors",
    description:
      "Discover invariant directions, scaling factors, diagonalization, and dynamic-system behavior.",
    level: "Advanced",
    estimatedTime: "14–16 hours",
    status: "Planned",
    theme: "from-indigo-950 via-blue-900 to-slate-950",
    topics: [
      "Eigenvalues",
      "Eigenvectors",
      "Characteristic equation",
      "Diagonalization",
      "Dynamic systems",
    ],
  },
  {
    moduleNumber: 9,
    title: "Orthogonality and Projections",
    description:
      "Develop orthogonal bases, projections, Gram–Schmidt, and geometric decomposition.",
    level: "Advanced",
    estimatedTime: "12–14 hours",
    status: "Planned",
    theme: "from-lime-950 via-green-900 to-slate-950",
    topics: [
      "Orthogonality",
      "Projection",
      "Orthogonal complements",
      "Gram–Schmidt",
      "QR ideas",
    ],
  },
  {
    moduleNumber: 10,
    title: "Least Squares and Regression",
    description:
      "Find best-fit solutions when exact solutions do not exist and connect the method to regression.",
    level: "Advanced",
    estimatedTime: "12–14 hours",
    status: "Planned",
    theme: "from-stone-950 via-neutral-800 to-slate-950",
    topics: [
      "Approximate solutions",
      "Normal equations",
      "Regression",
      "Residuals",
      "Model evaluation",
    ],
  },
  {
    moduleNumber: 11,
    title: "Singular Value Decomposition",
    description:
      "Study one of linear algebra’s most powerful tools for compression, approximation, and AI.",
    level: "Advanced",
    estimatedTime: "14–16 hours",
    status: "Planned",
    theme: "from-purple-950 via-indigo-900 to-slate-950",
    topics: [
      "Singular values",
      "Singular vectors",
      "Low-rank approximation",
      "Compression",
      "PCA connection",
    ],
  },
  {
    moduleNumber: 12,
    title: "Linear Algebra for Artificial Intelligence",
    description:
      "Synthesize vectors, matrices, systems, decompositions, and optimization in modern AI applications.",
    level: "Advanced",
    estimatedTime: "14–16 hours",
    status: "Planned",
    theme: "from-slate-950 via-blue-950 to-indigo-950",
    topics: [
      "Neural networks",
      "Embeddings",
      "Attention",
      "Computer vision",
      "AI portfolio project",
    ],
  },
];

export default function LinearAlgebra() {
  const navigate = useNavigate();

  const modules = moduleCatalog.map((module) => {
    const lessons = linearAlgebraLessons.filter(
      (lesson) =>
        Number(lesson.moduleNumber) === module.moduleNumber
    );

    const savedCompletedLessons = getCompletedLessons(
      module.moduleNumber
    );

    const validCompletedLessons =
      savedCompletedLessons.filter((lessonSlug) =>
        lessons.some(
          (lesson) => lesson.slug === lessonSlug
        )
      );

    const completedCount =
      validCompletedLessons.length;

    const progress =
      lessons.length > 0
        ? Math.round(
            (completedCount / lessons.length) * 100
          )
        : 0;

    const firstIncompleteLesson =
      lessons.find(
        (lesson) =>
          !validCompletedLessons.includes(lesson.slug)
      ) || lessons[0] || null;

    return {
      ...module,
      lessons,
      lessonCount: lessons.length,
      completedCount,
      completedLessons: validCompletedLessons,
      progress,
      firstIncompleteLesson,
    };
  });

  const availableModules = modules.filter(
    (module) => module.status === "Available"
  );

  const totalAvailableLessons =
    availableModules.reduce(
      (total, module) =>
        total + module.lessonCount,
      0
    );

  const totalCompletedLessons =
    availableModules.reduce(
      (total, module) =>
        total + module.completedCount,
      0
    );

  const courseProgress =
    totalAvailableLessons > 0
      ? Math.round(
          (totalCompletedLessons /
            totalAvailableLessons) *
            100
        )
      : 0;

  function openModule(module) {
    if (module.status !== "Available") {
      return;
    }

    navigate(
      `/library/college/linear-algebra/module/${module.moduleNumber}`
    );
  }

  function continueLearning() {
    const nextModule =
      availableModules.find(
        (module) =>
          module.lessonCount > 0 &&
          module.progress < 100
      ) ||
      availableModules.find(
        (module) => module.lessonCount > 0
      );

    if (nextModule) {
      openModule(nextModule);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          {
            label: "Knowledge Library",
            to: "/library",
          },
          {
            label: "College Mathematics",
            to: "/library/college",
          },
          { label: "Linear Algebra" },
        ]}
      />

      <CourseHero
        progress={courseProgress}
        completedLessons={totalCompletedLessons}
        totalLessons={totalAvailableLessons}
        onContinue={continueLearning}
      />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <CourseOverview />

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Learning pathway
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
                Linear Algebra Modules
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Progress from vector foundations to
                advanced AI applications through a
                structured sequence of twelve modules.
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              12 Modules
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <ModuleCard
                key={module.moduleNumber}
                module={module}
                onOpen={() => openModule(module)}
              />
            ))}
          </div>
        </section>

        <LearningPhilosophy />
      </div>
    </main>
  );
}

function CourseHero({
  progress,
  completedLessons,
  totalLessons,
  onContinue,
}) {
  const courseCompleted =
    totalLessons > 0 &&
    completedLessons === totalLessons;

  return (
    <header className="bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
          SkillBridge Academy · College Mathematics
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Linear Algebra
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Build the mathematical language of data
              science, engineering, robotics, machine
              learning, and artificial intelligence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <HeroBadge>12 Modules</HeroBadge>

              <HeroBadge>
                {totalLessons} Available Lessons
              </HeroBadge>

              <HeroBadge>Python Labs</HeroBadge>

              <HeroBadge>
                Research and Projects
              </HeroBadge>
            </div>

            <button
              type="button"
              onClick={onContinue}
              disabled={totalLessons === 0}
              className="mt-8 rounded-xl bg-white px-6 py-4 font-extrabold text-blue-950 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {courseCompleted
                ? "Review Linear Algebra"
                : progress > 0
                  ? "Continue Learning"
                  : "Begin Linear Algebra"}
            </button>
          </div>

          <section className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
              Course Progress
            </p>

            <div className="mt-4 flex items-end justify-between gap-4">
              <p className="text-5xl font-black">
                {progress}%
              </p>

              <p className="text-sm font-semibold text-blue-100">
                {completedLessons}/{totalLessons} lessons
              </p>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  courseCompleted
                    ? "bg-emerald-400"
                    : "bg-white"
                }`}
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            {courseCompleted ? (
              <div className="mt-5 rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-4">
                <p className="font-extrabold text-emerald-200">
                  Available course completed ✓
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-100">
                  You completed all currently available
                  Linear Algebra lessons.
                </p>
              </div>
            ) : (
              <p className="mt-4 leading-7 text-blue-100">
                Learn deeply, practice carefully, build
                meaningful projects, and connect
                mathematics to intelligent systems.
              </p>
            )}
          </section>
        </div>
      </div>
    </header>
  );
}

function CourseOverview() {
  const outcomes = [
    "Represent mathematical and real-world systems using vectors and matrices.",
    "Solve linear systems using computational and analytical methods.",
    "Analyze vector spaces, transformations, eigenvalues, and orthogonality.",
    "Apply linear algebra to regression, data science, robotics, and AI.",
    "Build Python laboratories, research tasks, and portfolio projects.",
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Course Overview
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-950">
          Mathematics for creators
        </h2>

        <p className="mt-5 leading-8 text-slate-700">
          This course develops linear algebra as a
          connected language for reasoning, modeling,
          programming, scientific computing, and
          artificial intelligence. Learners move from
          visual intuition to formal mathematics, Python
          implementation, research, and portfolio
          creation.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome}
              className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                {index + 1}
              </span>

              <p className="leading-7 text-slate-700">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </article>

      <aside className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
          Luminery Guidance
        </p>

        <h2 className="mt-3 text-2xl font-black text-violet-950">
          Understand. Apply. Create.
        </h2>

        <p className="mt-4 leading-8 text-violet-900">
          Do not rush through formulas. Explain the
          meaning, visualize the structure, test the idea
          with Python, and build something that proves your
          understanding.
        </p>

        <div className="mt-6 space-y-3">
          {[
            "Problem-first learning",
            "Mathematical reasoning",
            "Python laboratories",
            "Research mindset",
            "Portfolio creation",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 font-semibold text-violet-900"
            >
              <span className="h-2 w-2 rounded-full bg-violet-600" />
              {item}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

function ModuleCard({ module, onOpen }) {
  const isAvailable =
    module.status === "Available";

  const moduleCompleted =
    isAvailable &&
    module.lessonCount > 0 &&
    module.completedCount === module.lessonCount;

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition ${
        isAvailable
          ? "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          : "border-slate-200 opacity-80"
      }`}
    >
      <div
        className={`bg-gradient-to-br ${module.theme} p-6 text-white`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Module{" "}
              {String(module.moduleNumber).padStart(
                2,
                "0"
              )}
            </p>

            <h3 className="mt-3 text-2xl font-black leading-tight">
              {module.title}
            </h3>
          </div>

          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {moduleCompleted
              ? "Completed"
              : module.status}
          </span>
        </div>

        <p className="mt-4 min-h-[84px] leading-7 text-white/80">
          {module.description}
        </p>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {module.topics
            .slice(0, 4)
            .map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
              >
                {topic}
              </span>
            ))}
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-4">
          <ModuleDetail
            label="Lessons"
            value={
              module.lessonCount > 0
                ? module.lessonCount
                : "Coming"
            }
          />

          <ModuleDetail
            label="Level"
            value={module.level}
          />

          <ModuleDetail
            label="Time"
            value={module.estimatedTime}
          />

          <ModuleDetail
            label="Progress"
            value={`${module.progress}%`}
          />

          {isAvailable &&
            module.lessonCount > 0 && (
              <ModuleDetail
                label="Completed"
                value={`${module.completedCount}/${module.lessonCount}`}
              />
            )}
        </dl>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              moduleCompleted
                ? "bg-emerald-500"
                : "bg-blue-600"
            }`}
            style={{
              width: `${module.progress}%`,
            }}
          />
        </div>

        <button
          type="button"
          onClick={onOpen}
          disabled={!isAvailable}
          className={`mt-6 w-full rounded-xl px-4 py-3 font-bold transition ${
            isAvailable
              ? moduleCompleted
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
              : "cursor-not-allowed bg-slate-200 text-slate-500"
          }`}
        >
          {!isAvailable
            ? "Planned"
            : moduleCompleted
              ? "Review Module"
              : module.progress > 0
                ? "Continue Module"
                : "Open Module"}
        </button>
      </div>
    </article>
  );
}

function ModuleDetail({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </dt>

      <dd className="mt-1 font-extrabold text-slate-900">
        {value}
      </dd>
    </div>
  );
}

function LearningPhilosophy() {
  return (
    <section className="mt-12 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
        SkillBridge Learning Philosophy
      </p>

      <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
        Learn deeply. Build boldly. Lead responsibly.
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <PhilosophyCard
          number="01"
          title="Understand"
          text="Develop intuition, reasoning, and mathematical language before memorizing procedures."
        />

        <PhilosophyCard
          number="02"
          title="Apply"
          text="Use mathematics in Python, data science, engineering, robotics, and artificial intelligence."
        />

        <PhilosophyCard
          number="03"
          title="Create"
          text="Build projects, conduct research, and produce portfolio evidence that demonstrates mastery."
        />
      </div>
    </section>
  );
}

function PhilosophyCard({
  number,
  title,
  text,
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-bold text-blue-300">
        {number}
      </p>

      <h3 className="mt-3 text-2xl font-black">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {text}
      </p>
    </article>
  );
}

function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}