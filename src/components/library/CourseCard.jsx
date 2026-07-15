import { Link } from "react-router-dom";

export default function CourseCard({
  course,
  defaultPath = "/library/mathematics",
}) {
  const {
    title,
    description,
    level = "Beginner",
    duration = "Self-paced",
    status = "Planned",
    topics = [],
    lessons = 0,
    projects = 0,
    assessments = 0,
    path,
  } = course;

  const isAvailable = status === "Available" || status === "Published";

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            {level}
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
            {title}
          </h3>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <CourseMetric label="Lessons" value={lessons} />
        <CourseMetric label="Projects" value={projects} />
        <CourseMetric label="Assessments" value={assessments} />
        <CourseMetric label="Duration" value={duration} />
      </div>

      {topics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-7">
        {isAvailable ? (
          <Link
            to={path || defaultPath}
            className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Open Course
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="rounded-xl bg-slate-100 px-5 py-3 font-bold text-slate-500"
          >
            Course Development Planned
          </button>
        )}
      </div>
    </article>
  );
}

function CourseMetric({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-lg font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </div>
  );
}