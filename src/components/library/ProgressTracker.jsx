export default function ProgressTracker({
  title = "Your Mathematics Journey",
  progress = 0,
  metrics = [],
}) {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Progress
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            {title}
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-50 px-6 py-4 text-center">
          <p className="text-3xl font-extrabold text-blue-700">
            {safeProgress}%
          </p>

          <p className="mt-1 text-sm font-semibold text-blue-600">
            Overall progress
          </p>
        </div>
      </div>

      <div className="mt-7 h-4 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${safeProgress}%` }}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl bg-slate-50 p-5"
          >
            <p className="text-3xl font-extrabold text-slate-900">
              {metric.value}
            </p>

            <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-500">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}