import { Link } from "react-router-dom";

export default function PortfolioCard({
  projects,
  skills,
  certificates,
  path,
}) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📂</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Portfolio
          </h2>

          <p className="text-slate-500">
            Evidence of what you have built
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-5 text-center">
          <p className="text-3xl font-extrabold text-slate-900">
            {projects}
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Projects
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5 text-center">
          <p className="text-3xl font-extrabold text-slate-900">
            {skills}
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Skills
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5 text-center">
          <p className="text-3xl font-extrabold text-slate-900">
            {certificates}
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Certificates
          </p>
        </div>
      </div>

      <Link
        to={path}
        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
      >
        View Portfolio
      </Link>
    </section>
  );
}