import { Link } from "react-router-dom";

export default function ResearchCard({
  projects,
  questions,
  publications,
  path,
}) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🔬</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Research Progress
          </h2>

          <p className="text-slate-500">
            Turn curiosity into discovery
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-violet-50 p-5 text-center">
          <p className="text-3xl font-extrabold text-slate-900">
            {projects}
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Research Projects
          </p>
        </div>

        <div className="rounded-2xl bg-violet-50 p-5 text-center">
          <p className="text-3xl font-extrabold text-slate-900">
            {questions}
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Research Questions
          </p>
        </div>

        <div className="rounded-2xl bg-violet-50 p-5 text-center">
          <p className="text-3xl font-extrabold text-slate-900">
            {publications}
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Publications
          </p>
        </div>
      </div>

      <Link
        to={path}
        className="mt-6 inline-block rounded-xl border border-violet-600 px-6 py-3 font-bold text-violet-700 hover:bg-violet-50"
      >
        Open Research Lab
      </Link>
    </section>
  );
}