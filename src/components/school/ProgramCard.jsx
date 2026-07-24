import { Link } from "react-router-dom";

export default function ProgramCard({
  title,
  level,
  duration,
  lessons,
  projects,
  rating = 5,
  path = "#",
}) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {level}
        </span>

        <span className="text-yellow-500">
          {"★".repeat(rating)}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="mt-6 space-y-3 text-slate-600">
        <p>📅 {duration}</p>
        <p>📖 {lessons} Lessons</p>
        <p>🛠 {projects} Projects</p>
      </div>

      <Link
        to={path}
        className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Start Program →
      </Link>
    </article>
  );
}