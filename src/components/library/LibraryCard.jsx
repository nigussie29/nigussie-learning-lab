import { Link } from "react-router-dom";

export default function LibraryCard({
  icon = "📚",
  title,
  description,
  topics = [],
  path,
  available = true,
  actionLabel = "Explore Library",
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-5xl" aria-hidden="true">
        {icon}
      </div>

      <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

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
        {available && path ? (
          <Link
            to={path}
            className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            {actionLabel}
          </Link>
        ) : (
          <span className="inline-block rounded-xl bg-slate-100 px-5 py-3 font-bold text-slate-500">
            Coming Soon
          </span>
        )}
      </div>
    </article>
  );
}