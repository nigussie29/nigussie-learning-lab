import { Link } from "react-router-dom";

export default function LearningPath({
  title = "Learning Path",
  description = "Follow the recommended sequence.",
  stages = [],
}) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Guided pathway
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, index) => (
          <article
            key={`${stage.title}-${index}`}
            className={`rounded-2xl border p-5 ${
              stage.current
                ? "border-blue-600 bg-blue-50"
                : stage.complete
                  ? "border-green-200 bg-green-50"
                  : "border-slate-200 bg-slate-50"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full font-extrabold ${
                  stage.current
                    ? "bg-blue-600 text-white"
                    : stage.complete
                      ? "bg-green-600 text-white"
                      : "bg-slate-200 text-slate-600"
                }`}
              >
                {stage.complete ? "✓" : index + 1}
              </span>

              {stage.current && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  Current
                </span>
              )}
            </div>

            <h3 className="mt-4 text-xl font-extrabold text-slate-900">
              {stage.title}
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              {stage.description}
            </p>

            {stage.path && (
              <Link
                to={stage.path}
                className="mt-5 inline-block font-bold text-blue-700 hover:text-blue-800"
              >
                Open pathway →
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}