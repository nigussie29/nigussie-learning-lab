import { Link } from "react-router-dom";

export default function SchoolCard({
  icon,
  title,
  description,
  programs,
  path,
}) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-4xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-500">
          {programs} Programs
        </span>

        <Link
          to={path}
          className="font-bold text-blue-600 transition group-hover:text-blue-700"
        >
          Enter School →
        </Link>
      </div>
    </article>
  );
}