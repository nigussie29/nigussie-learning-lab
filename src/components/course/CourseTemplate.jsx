import { Link } from "react-router-dom";

export default function CourseTemplate({ course }) {
  if (!course) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Course not found
        </h1>

        <Link
          to="/courses"
          className="mt-6 inline-block font-bold text-blue-600"
        >
          Back to Courses
        </Link>
      </main>
    );
  }

  const progress = course.progress ?? 0;
  const lessons = course.lessons ?? [];
  const outcomes = course.outcomes ?? [];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Course Hero */}
        <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
          <p className="font-bold uppercase tracking-wide text-blue-200">
            {course.category}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
            {course.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold">
            <span className="rounded-full bg-white/10 px-4 py-2">
              {course.level}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              {course.duration}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              {lessons.length} Lessons
            </span>
          </div>
        </section>

        {/* Progress */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Course Progress
              </h2>

              <p className="mt-1 text-slate-500">
                Track your learning journey
              </p>
            </div>

            <p className="text-3xl font-extrabold text-blue-600">
              {progress}%
            </p>
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {/* Outcomes */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                What You Will Learn
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5"
                  >
                    <span className="font-bold text-green-600">✓</span>

                    <p className="text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Course Lessons
              </h2>

              <div className="mt-6 space-y-4">
                {lessons.map((lesson, index) => {
                  const isLocked = lesson.status === "locked";
                  const isCompleted = lesson.status === "completed";
                  const isCurrent = lesson.status === "current";

                  return (
                    <div
                      key={lesson.id}
                      className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-extrabold ${
                            isCompleted
                              ? "bg-green-100 text-green-700"
                              : isCurrent
                                ? "bg-blue-100 text-blue-700"
                                : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {isCompleted ? "✓" : index + 1}
                        </div>

                        <div>
                          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                            Lesson {index + 1}
                          </p>

                          <h3 className="mt-1 text-xl font-bold text-slate-900">
                            {lesson.title}
                          </h3>

                          {lesson.description && (
                            <p className="mt-2 text-slate-600">
                              {lesson.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {isLocked ? (
                        <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
                          🔒 Locked
                        </span>
                      ) : (
                        <Link
                          to={lesson.path}
                          className={`rounded-xl px-5 py-3 text-center font-bold ${
                            isCompleted
                              ? "border border-slate-300 text-slate-700 hover:bg-slate-50"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                        >
                          {isCompleted
                            ? "Review Lesson"
                            : isCurrent
                              ? "Continue Lesson"
                              : "Start Lesson"}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            {/* Final Project */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                Final Project
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                {course.finalProject?.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {course.finalProject?.description}
              </p>

              {course.finalProject?.path && (
                <Link
                  to={course.finalProject.path}
                  className="mt-6 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700"
                >
                  View Final Project
                </Link>
              )}
            </section>

            {/* Certificate */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🏆</div>

              <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
                Course Certificate
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Complete all lessons and the final project to earn your
                SkillBridge Academy certificate.
              </p>

              <p className="mt-5 font-bold text-slate-800">
                Requirement: {course.certificateRequirement ?? "100% completion"}
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}