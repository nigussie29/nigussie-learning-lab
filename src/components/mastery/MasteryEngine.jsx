function MasteryBar({ label, value }) {
  const safeValue = Math.max(0, Math.min(value ?? 0, 100));

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-slate-700">
          {label}
        </p>

        <p className="font-bold text-slate-900">
          {safeValue}%
        </p>
      </div>

      <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}

export default function MasteryEngine({ mastery }) {
  if (!mastery) {
    return (
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Mastery data unavailable
        </h2>

        <p className="mt-3 text-slate-600">
          Complete learning activities to begin measuring mastery.
        </p>
      </section>
    );
  }

  const stages = [
    { label: "Learn", value: mastery.learn },
    { label: "Practice", value: mastery.practice },
    { label: "Build", value: mastery.build },
    { label: "Master", value: mastery.master },
    { label: "Apply", value: mastery.apply },
    { label: "Research", value: mastery.research },
  ];

  const calculatedOverall = Math.round(
    stages.reduce((total, stage) => total + (stage.value ?? 0), 0) /
      stages.length
  );

  const overall = mastery.overall ?? calculatedOverall;

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-4xl">🧠</span>

            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Mastery Engine
              </h2>

              <p className="text-slate-500">
                Measure understanding, creation, and application
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-blue-50 px-8 py-5 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Overall Mastery
          </p>

          <p className="mt-1 text-4xl font-extrabold text-slate-900">
            {overall}%
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {stages.map((stage) => (
          <MasteryBar
            key={stage.label}
            label={stage.label}
            value={stage.value}
          />
        ))}
      </div>

      {mastery.recommendation && (
        <div className="mt-8 rounded-2xl bg-violet-50 p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
            Luminery Recommendation
          </p>

          <p className="mt-3 text-lg leading-8 text-slate-700">
            {mastery.recommendation}
          </p>
        </div>
      )}
    </section>
  );
}