function MasteryBar({ label, value, isStrongest, isFocus }) {
  const safeValue = Math.max(0, Math.min(value ?? 0, 100));

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-slate-700">{label}</p>

          {isStrongest && (
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
              Strongest
            </span>
          )}

          {isFocus && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-700">
              Focus
            </span>
          )}
        </div>

        <p className="font-bold text-blue-600">{safeValue}%</p>
      </div>

      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    </div>
  );
}

function getMasteryLevel(overall) {
  if (overall >= 95) return "Researcher";
  if (overall >= 80) return "Innovator";
  if (overall >= 60) return "Builder";
  if (overall >= 40) return "Explorer";
  if (overall >= 20) return "Learner";
  return "Beginner";
}

export default function MasteryEngine({ mastery }) {
  if (!mastery) {
    return (
      <section className="rounded-3xl bg-white p-6 shadow-sm">
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
    { label: "Learn", value: mastery.learn ?? 0 },
    { label: "Practice", value: mastery.practice ?? 0 },
    { label: "Build", value: mastery.build ?? 0 },
    { label: "Master", value: mastery.master ?? 0 },
    { label: "Apply", value: mastery.apply ?? 0 },
    { label: "Research", value: mastery.research ?? 0 },
  ];

  const calculatedOverall = Math.round(
    stages.reduce((total, stage) => total + stage.value, 0) / stages.length
  );

  const overall = Math.max(
    0,
    Math.min(mastery.overall ?? calculatedOverall, 100)
  );

  const strongestSkill = stages.reduce((best, current) =>
    current.value > best.value ? current : best
  );

  const focusSkill = stages.reduce((lowest, current) =>
    current.value < lowest.value ? current : lowest
  );

  const masteryLevel = getMasteryLevel(overall);
  const nextMilestone = mastery.nextMilestone ?? `${focusSkill.label} Extension`;
  const estimatedTime = mastery.estimatedTime ?? "24 minutes";
  const xpReward = mastery.xpReward ?? 18;

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
          🧠
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Mastery Engine
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Grow from learning concepts to applying knowledge in real-world
            projects.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Overall Mastery
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <p className="text-4xl font-extrabold text-slate-900">{overall}%</p>

          <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-indigo-700 shadow-sm">
            {masteryLevel} Level
          </span>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${overall}%` }}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-emerald-50 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Strongest Skill
          </p>

          <p className="mt-2 text-lg font-extrabold text-slate-900">
            {strongestSkill.label}
          </p>

          <p className="mt-1 text-sm font-semibold text-emerald-700">
            {strongestSkill.value}% mastery
          </p>
        </div>

        <div className="rounded-2xl bg-amber-50 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
            Focus Next
          </p>

          <p className="mt-2 text-lg font-extrabold text-slate-900">
            {focusSkill.label}
          </p>

          <p className="mt-1 text-sm font-semibold text-amber-700">
            {focusSkill.value}% mastery
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {stages.map((stage) => (
          <MasteryBar
            key={stage.label}
            label={stage.label}
            value={stage.value}
            isStrongest={stage.label === strongestSkill.label}
            isFocus={stage.label === focusSkill.label}
          />
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
          Next Milestone
        </p>

        <h3 className="mt-2 text-lg font-extrabold text-slate-900">
          {nextMilestone}
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <p className="text-slate-600">
            Estimated time:{" "}
            <span className="font-semibold text-slate-900">
              {estimatedTime}
            </span>
          </p>

          <p className="font-bold text-emerald-700">+{xpReward} XP</p>
        </div>
      </div>

      {mastery.recommendation && (
        <div className="mt-5 rounded-2xl bg-violet-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-700">
            Luminery Recommendation
          </p>

          <p className="mt-3 text-sm leading-7 text-slate-700">
            {mastery.recommendation}
          </p>
        </div>
      )}
    </section>
  );
}