import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import { getCompletedLessons } from "../../../services/linearAlgebraProgress.js";
import { getLinearAlgebraLessonsByModule } from "../../../data/mathematics/college/linearAlgebra/lessons/index.js";

const moduleMetadata = {
  1: {
    title: "Vectors and Geometric Foundations",
    description:
      "Build the vector foundations required for geometry, data science, robotics, machine learning, and artificial intelligence.",
    estimatedTime: "10–12 hours",
    level: "Foundation",
    color: "from-blue-950 via-indigo-900 to-slate-950",
    objectives: [
      "Represent quantities using vectors.",
      "Calculate magnitude, distance, and direction.",
      "Add, subtract, and scale vectors.",
      "Use dot products and cosine similarity.",
      "Connect vectors to data, robotics, and AI.",
    ],
  },

  2: {
    title: "Matrices and Matrix Operations",
    description:
      "Learn how matrices organize data, transform vectors, represent images, and power modern artificial-intelligence systems.",
    estimatedTime: "12–14 hours",
    level: "Foundation",
    color: "from-emerald-950 via-teal-900 to-slate-950",
    objectives: [
      "Interpret matrix rows, columns, entries, and dimensions.",
      "Recognize important special matrices.",
      "Perform matrix addition, subtraction, scaling, and transpose.",
      "Calculate matrix products.",
      "Connect matrices to data, images, and neural networks.",
    ],
  },

  3: {
    title: "Systems of Linear Equations",
    description:
      "Model interacting constraints, perform row reduction, classify solution types, and connect linear systems to science and AI.",
    estimatedTime: "12–14 hours",
    level: "Intermediate",
    color: "from-violet-950 via-purple-900 to-slate-950",
    objectives: [
      "Represent systems using equations and augmented matrices.",
      "Apply elementary row operations.",
      "Use Gaussian and Gauss–Jordan elimination.",
      "Classify unique, infinite, and no-solution systems.",
      "Apply linear systems in engineering, data science, and AI.",
    ],
  },
};

export default function LinearAlgebraModule() {
  const navigate = useNavigate();
  const { moduleNumber } = useParams();

  const numericModuleNumber = Number(moduleNumber);

  const lessons = useMemo(
    () => getLinearAlgebraLessonsByModule(numericModuleNumber),
    [numericModuleNumber]
  );

  const metadata = moduleMetadata[numericModuleNumber];

  const completedLessons = useMemo(
    () => getCompletedLessons(numericModuleNumber),
    [numericModuleNumber]
  );

  function handleOpenLesson(lesson) {
    navigate(
      `/library/college/linear-algebra/module/${numericModuleNumber}/lesson/${lesson.slug}`
    );
  }

  function handleBackToCourse() {
    navigate("/library/college/linear-algebra");
  }

  if (!metadata || lessons.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Linear Algebra
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-red-900">
            Module not found
          </h1>

          <p className="mt-4 leading-7 text-red-700">
            This module does not contain available lessons yet.
          </p>

          <button
            type="button"
            onClick={handleBackToCourse}
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-800"
          >
            Back to Linear Algebra
          </button>
        </div>
      </main>
    );
  }

  const validCompletedLessons = completedLessons.filter((lessonSlug) =>
    lessons.some((lesson) => lesson.slug === lessonSlug)
  );

  const completedCount = validCompletedLessons.length;

  const progressPercentage =
    lessons.length > 0
      ? Math.round((completedCount / lessons.length) * 100)
      : 0;

  const firstIncompleteLesson =
    lessons.find(
      (lesson) => !validCompletedLessons.includes(lesson.slug)
    ) || lessons[0];

  function handleStartOrContinue() {
    if (firstIncompleteLesson) {
      handleOpenLesson(firstIncompleteLesson);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Library", to: "/library" },
          {
            label: "College Mathematics",
            to: "/library/college",
          },
          {
            label: "Linear Algebra",
            to: "/library/college/linear-algebra",
          },
          {
            label: `Module ${numericModuleNumber}: ${metadata.title}`,
          },
        ]}
      />

      <ModuleHero
        moduleNumber={numericModuleNumber}
        metadata={metadata}
        lessonCount={lessons.length}
        completedCount={completedCount}
        progressPercentage={progressPercentage}
        onBack={handleBackToCourse}
      />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Module overview
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-950">
                What you will learn
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {metadata.objectives.map((objective, index) => (
                  <article
                    key={objective}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                      {index + 1}
                    </span>

                    <p className="leading-7 text-slate-700">
                      {objective}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Learning sequence
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-slate-950">
                    Module Lessons
                  </h2>

                  <p className="mt-3 text-slate-600">
                    Complete the lessons in sequence for the strongest
                    learning experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                    {lessons.length} lessons
                  </span>

                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                    {completedCount} completed
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {lessons.map((lesson, index) => {
                  const isCompleted =
                    validCompletedLessons.includes(lesson.slug);

                  return (
                    <LessonCard
                      key={lesson.id || lesson.slug}
                      lesson={lesson}
                      position={index + 1}
                      isCompleted={isCompleted}
                      onOpen={() => handleOpenLesson(lesson)}
                    />
                  );
                })}
              </div>
            </section>
          </div>

          <ModuleSidebar
            metadata={metadata}
            lessonCount={lessons.length}
            completedCount={completedCount}
            progressPercentage={progressPercentage}
            continueLesson={firstIncompleteLesson}
            onStart={handleStartOrContinue}
          />
        </div>
      </div>
    </main>
  );
}

function ModuleHero({
  moduleNumber,
  metadata,
  lessonCount,
  completedCount,
  progressPercentage,
  onBack,
}) {
  return (
    <header
      className={`bg-gradient-to-br ${metadata.color} text-white`}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-bold text-white/70 transition hover:text-white"
        >
          ← Back to Linear Algebra
        </button>

        <div className="mt-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            Linear Algebra · Module {moduleNumber}
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {metadata.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            {metadata.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <HeroBadge>{lessonCount} Lessons</HeroBadge>
            <HeroBadge>{metadata.estimatedTime}</HeroBadge>
            <HeroBadge>{metadata.level}</HeroBadge>
            <HeroBadge>
              {completedCount}/{lessonCount} Completed
            </HeroBadge>
            <HeroBadge>{progressPercentage}% Complete</HeroBadge>
          </div>
        </div>
      </div>
    </header>
  );
}

function LessonCard({
  lesson,
  position,
  isCompleted,
  onOpen,
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white transition hover:border-blue-300 hover:shadow-md">
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full items-start gap-5 p-5 text-left md:p-6"
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black ${
            isCompleted
              ? "bg-emerald-100 text-emerald-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {isCompleted ? "✓" : position}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Lesson {lesson.lessonNumber}
              </p>

              <h3 className="mt-1 text-xl font-extrabold text-slate-950 transition group-hover:text-blue-700">
                {lesson.title}
              </h3>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {isCompleted
                ? "Completed"
                : lesson.status || "Available"}
            </span>
          </div>

          {lesson.subtitle && (
            <p className="mt-3 line-clamp-2 leading-7 text-slate-600">
              {lesson.subtitle}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
            {lesson.duration && <span>{lesson.duration}</span>}
            {lesson.level && <span>• {lesson.level}</span>}
          </div>
        </div>

        <span className="mt-2 text-2xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
          →
        </span>
      </button>
    </article>
  );
}

function ModuleSidebar({
  metadata,
  lessonCount,
  completedCount,
  progressPercentage,
  continueLesson,
  onStart,
}) {
  const moduleCompleted =
    lessonCount > 0 && completedCount === lessonCount;

  return (
    <aside className="h-fit space-y-5 lg:sticky lg:top-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Module progress
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <p className="text-4xl font-black text-slate-950">
            {progressPercentage}%
          </p>

          <p className="text-sm font-semibold text-slate-500">
            {completedCount}/{lessonCount} lessons
          </p>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              moduleCompleted ? "bg-emerald-500" : "bg-blue-600"
            }`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {moduleCompleted && (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
            <p className="font-extrabold text-emerald-800">
              Module completed ✓
            </p>

            <p className="mt-1 text-sm text-emerald-700">
              You completed all {lessonCount} lessons.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={onStart}
          className={`mt-6 w-full rounded-xl px-4 py-3 font-bold text-white transition ${
            moduleCompleted
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {completedCount === 0
            ? "Start Module"
            : moduleCompleted
              ? "Review Module"
              : "Continue Learning"}
        </button>

        {continueLesson && (
          <p className="mt-3 text-center text-sm text-slate-500">
            {moduleCompleted ? "Review from" : "Next lesson"}:{" "}
            {continueLesson.title}
          </p>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Module details
        </p>

        <dl className="mt-5 space-y-4">
          <DetailRow label="Level" value={metadata.level} />

          <DetailRow
            label="Estimated time"
            value={metadata.estimatedTime}
          />

          <DetailRow label="Lessons" value={lessonCount} />

          <DetailRow
            label="Completed"
            value={`${completedCount}/${lessonCount}`}
          />
        </dl>
      </section>

      <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6">
        <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
          Luminery
        </p>

        <h2 className="mt-3 text-xl font-black text-violet-950">
          Learn in sequence
        </h2>

        <p className="mt-3 leading-7 text-violet-900">
          Complete each lesson, explain the central idea in your own
          words, and build the portfolio artifact before moving forward.
        </p>
      </section>
    </aside>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
      <dt className="text-sm font-semibold text-slate-500">
        {label}
      </dt>

      <dd className="text-right font-bold text-slate-900">
        {value}
      </dd>
    </div>
  );
}

function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}