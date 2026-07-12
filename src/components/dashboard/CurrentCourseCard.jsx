import { Link } from "react-router-dom";

export default function CurrentCourseCard({
  title,
  category,
  progress,
  nextLesson,
  path,
}) {
  const safeProgress = Math.max(0, Math.min(progress ?? 0, 100));

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📚</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Current Course
          </h2>

          <p className="text-slate-500">
            Your active learning path
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-slate-600">
          Next lesson:{" "}
          <span className="font-bold text-slate-900">
            {nextLesson}
          </span>
        </p>

        <div className="mt-6 flex items-center justify-between">
          <p className="font-semibold text-slate-700">
            Course Progress
          </p>

          <p className="font-bold text-slate-900">
            {safeProgress}%
          </p>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: `${safeProgress}%` }}
          />
        </div>

        <Link
          to={path}
          className="mt-6 inline-block rounded-xl border border-blue-600 px-6 py-3 font-bold text-blue-600 hover:bg-blue-50"
        >
          View Course
        </Link>
      </div>
    </section>
  );
}