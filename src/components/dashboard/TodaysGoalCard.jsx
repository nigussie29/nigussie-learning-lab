export default function TodaysGoalCard({
  title,
  description,
  estimatedTime,
  progress,
}) {
  const safeProgress = Math.max(0, Math.min(progress ?? 0, 100));

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🎯</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Today&apos;s Goal
          </h2>

          <p className="text-slate-500">
            Your most important learning mission
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-amber-50 p-6">
        <h3 className="text-2xl font-extrabold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-700">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full bg-white px-4 py-2 font-semibold text-slate-700">
            ⏱ {estimatedTime}
          </span>

          <span className="rounded-full bg-white px-4 py-2 font-semibold text-slate-700">
            {safeProgress}% complete
          </span>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-amber-100">
          <div
            className="h-full rounded-full bg-amber-500"
            style={{ width: `${safeProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
}