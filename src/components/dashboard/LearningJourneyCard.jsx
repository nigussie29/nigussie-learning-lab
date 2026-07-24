const stages = [
  {
    id: 1,
    title: "Learn",
    icon: "📘",
    status: "completed",
    xp: 100,
  },
  {
    id: 2,
    title: "Practice",
    icon: "✍️",
    status: "completed",
    xp: 150,
  },
  {
    id: 3,
    title: "Build",
    icon: "🛠️",
    status: "current",
    xp: 250,
  },
  {
    id: 4,
    title: "Master",
    icon: "🏅",
    status: "locked",
    xp: 300,
  },
  {
    id: 5,
    title: "Apply",
    icon: "🚀",
    status: "locked",
    xp: 400,
  },
  {
    id: 6,
    title: "Research",
    icon: "🔬",
    status: "locked",
    xp: 500,
  },
];

function getColors(status) {
  switch (status) {
    case "completed":
      return {
        circle: "bg-green-500",
        line: "bg-green-500",
        text: "text-green-700",
      };

    case "current":
      return {
        circle: "bg-blue-600 animate-pulse",
        line: "bg-slate-300",
        text: "text-blue-700",
      };

    default:
      return {
        circle: "bg-slate-300",
        line: "bg-slate-300",
        text: "text-slate-500",
      };
  }
}

export default function LearningJourneyCard() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
          🧭
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Learning Journey
          </h2>

          <p className="text-slate-500">
            Your SkillBridge roadmap
          </p>
        </div>

      </div>

      <div className="mt-8 space-y-5">

        {stages.map((stage, index) => {
          const colors = getColors(stage.status);

          return (
            <div key={stage.id}>

              <div className="flex items-center gap-4">

                <div className="flex flex-col items-center">

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${colors.circle}`}
                  >
                    {stage.icon}
                  </div>

                  {index < stages.length - 1 && (
                    <div
                      className={`mt-1 h-10 w-1 rounded ${colors.line}`}
                    />
                  )}

                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3
                      className={`text-lg font-bold ${colors.text}`}
                    >
                      {stage.title}
                    </h3>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">
                      +{stage.xp} XP
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-slate-500">

                    {stage.status === "completed" &&
                      "Completed"}

                    {stage.status === "current" &&
                      "Current Stage"}

                    {stage.status === "locked" &&
                      "Locked"}

                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}