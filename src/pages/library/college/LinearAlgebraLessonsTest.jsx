import linearAlgebraLessons from "../../../data/mathematics/college/linearAlgebra/lessons";

export default function LinearAlgebraLessonsTest() {
  const requiredFields = [
    "id",
    "moduleNumber",
    "lessonNumber",
    "slug",
    "title",
    "status",
    "learningObjectives",
    "summary",
  ];

  const lessonResults = linearAlgebraLessons.map((lesson) => {
    const missingFields = requiredFields.filter((field) => {
      const value = lesson[field];

      if (Array.isArray(value)) {
        return value.length === 0;
      }

      return value === undefined || value === null || value === "";
    });

    return {
      ...lesson,
      missingFields,
      isValid: missingFields.length === 0,
    };
  });

  const validLessons = lessonResults.filter(
    (lesson) => lesson.isValid
  );

  const invalidLessons = lessonResults.filter(
    (lesson) => !lesson.isValid
  );

  const duplicateIds = findDuplicates(
    lessonResults.map((lesson) => lesson.id)
  );

  const duplicateSlugs = findDuplicates(
    lessonResults.map((lesson) => lesson.slug)
  );

  const module01Lessons = lessonResults.filter(
    (lesson) => lesson.moduleNumber === 1
  );

  const module02Lessons = lessonResults.filter(
    (lesson) => lesson.moduleNumber === 2
  );

  const allTestsPassed =
    lessonResults.length === 16 &&
    module01Lessons.length === 8 &&
    module02Lessons.length === 8 &&
    invalidLessons.length === 0 &&
    duplicateIds.length === 0 &&
    duplicateSlugs.length === 0;

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header
          className={`rounded-3xl p-8 text-white ${
            allTestsPassed ? "bg-emerald-700" : "bg-red-700"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-widest">
            Linear Algebra Validation
          </p>

          <h1 className="mt-3 text-4xl font-extrabold">
            {allTestsPassed
              ? "All lesson tests passed"
              : "Some lesson tests failed"}
          </h1>

          <p className="mt-4 text-lg">
            {validLessons.length} of {lessonResults.length} lessons are
            structurally valid.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Lessons"
            value={lessonResults.length}
            expected="Expected: 16"
          />

          <StatCard
            title="Module 01"
            value={module01Lessons.length}
            expected="Expected: 8"
          />

          <StatCard
            title="Module 02"
            value={module02Lessons.length}
            expected="Expected: 8"
          />

          <StatCard
            title="Invalid Lessons"
            value={invalidLessons.length}
            expected="Expected: 0"
          />
        </section>

        <ValidationSection
          title="Duplicate IDs"
          items={duplicateIds}
          successMessage="No duplicate lesson IDs."
        />

        <ValidationSection
          title="Duplicate Slugs"
          items={duplicateSlugs}
          successMessage="No duplicate lesson slugs."
        />

        <section className="rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Lesson Results
          </h2>

          <div className="mt-6 space-y-4">
            {lessonResults.map((lesson) => (
              <article
                key={lesson.id}
                className={`rounded-2xl border p-5 ${
                  lesson.isValid
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                      Module {lesson.moduleNumber} · Lesson{" "}
                      {lesson.lessonNumber}
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                      {lesson.title || "Missing title"}
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      ID: {lesson.id || "Missing ID"}
                    </p>

                    <p className="text-sm text-slate-600">
                      Slug: {lesson.slug || "Missing slug"}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-bold ${
                      lesson.isValid
                        ? "bg-emerald-200 text-emerald-900"
                        : "bg-red-200 text-red-900"
                    }`}
                  >
                    {lesson.isValid ? "Passed" : "Failed"}
                  </span>
                </div>

                {!lesson.isValid && (
                  <div className="mt-4">
                    <p className="font-bold text-red-800">
                      Missing fields:
                    </p>

                    <ul className="mt-2 list-disc pl-6 text-red-700">
                      {lesson.missingFields.map((field) => (
                        <li key={field}>{field}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, expected }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-4xl font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">{expected}</p>
    </article>
  );
}

function ValidationSection({ title, items, successMessage }) {
  return (
    <section className="rounded-3xl bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {title}
      </h2>

      {items.length === 0 ? (
        <p className="mt-4 font-semibold text-emerald-700">
          {successMessage}
        </p>
      ) : (
        <ul className="mt-4 list-disc pl-6 text-red-700">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function findDuplicates(values) {
  const counts = new Map();

  values.forEach((value) => {
    if (!value) return;

    counts.set(value, (counts.get(value) || 0) + 1);
  });

  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([value]) => value);
}