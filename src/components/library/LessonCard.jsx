import { Link } from "react-router-dom";

export default function LessonCard({
  lesson,
  coursePath = "/library/mathematics",
}) {
  const {
    number,
    title,
    description,
    duration = "60 minutes",
    level = "Foundation",
    status = "locked",
    path,
    progress = 0,
  } = lesson;

  const isLocked = status === "locked";
  const isComplete = status === "complete";

  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-extrabold ${
              isComplete
                ? "bg-green-100 text-green-700"
                : isLocked
                  ? "bg-slate-100 text-slate-500"
                  : "bg-blue-100 text-blue-700"
            }`}
          >
            {isComplete ? "✓" : number}
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              {level}
            </p>

            <h3 className="mt-1 text-xl font-extrabold text-slate-900">
              {title}
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              {description}
            </p>

            <p className="mt-3 text-sm font-semibold text-slate-500">
              Estimated time: {duration}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          {isLocked ? (
            <span className="rounded-xl bg-slate-100 px-4 py-2 font-bold text-slate-500">
              Locked
            </span>
          ) : (
            <Link
              to={path || coursePath}
              className="inline-block rounded-xl bg-blue-600 px-4 py-2 font-bold text-white transition hover:bg-blue-700"
            >
              {isComplete ? "Review" : "Open Lesson"}
            </Link>
          )}
        </div>
      </div>

      {!isLocked && (
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-600">
              Lesson progress
            </p>

            <p className="text-sm font-bold text-blue-700">
              {progress}%
            </p>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      )}
    </article>
  );
}