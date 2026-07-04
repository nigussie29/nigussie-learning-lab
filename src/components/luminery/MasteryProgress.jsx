import { masteryStages } from "../../data/masteryLevels";

export default function MasteryProgress({ scores }) {
  const defaultScores = {
    learn: 100,
    practice: 80,
    build: 60,
    master: 40,
    apply: 20,
  };

  const masteryScores = scores || defaultScores;

  const overall =
    Object.values(masteryScores).reduce((sum, score) => sum + score, 0) /
    Object.values(masteryScores).length;
    let masteryLevel = "Getting Started";

if (overall >= 90) {
  masteryLevel = "Expert";
} else if (overall >= 75) {
  masteryLevel = "Master";
} else if (overall >= 60) {
  masteryLevel = "Developing";
} else if (overall >= 40) {
  masteryLevel = "Beginner";
}

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        Luminery Mastery
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        Track progress through Learn → Practice → Build → Master → Apply.
      </p>

      <div className="mt-6">
        <p className="text-4xl font-extrabold text-blue-600">
          {Math.round(overall)}%
        </p>
        <p className="text-sm font-semibold text-slate-500">
          Overall Mastery
        </p>
      </div>
      <div className="mt-4 rounded-xl bg-yellow-50 border border-yellow-200 p-4">
  <p className="text-sm font-bold uppercase tracking-wide text-yellow-700">
    Mastery Points
  </p>

  <h3 className="mt-1 text-3xl font-extrabold text-yellow-600">
    240 MP
  </h3>

  <p className="mt-1 text-sm text-slate-600">
    Earn points by completing lessons, projects, and assessments.
  </p>
</div>
      <div className="mt-6 rounded-2xl bg-blue-50 p-5">
  <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
    Mastery Level
  </p>

  <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
    {masteryLevel}
  </h3>
</div>

      <div className="mt-6 space-y-5">
        {masteryStages.map((stage) => {
          const score = masteryScores[stage.id] || 0;

          return (
            <div key={stage.id}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{stage.title}</p>
                  <p className="text-sm text-slate-500">
                    {stage.description}
                  </p>
                </div>

                <p className="font-extrabold text-slate-900">{score}%</p>
              </div>

              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full ${stage.color}`}
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}