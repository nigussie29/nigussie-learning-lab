const defaultStages = [
  {
    title: "Learn",
    description: "Understand concepts and vocabulary.",
  },
  {
    title: "Practice",
    description: "Strengthen skills through guided work.",
  },
  {
    title: "Build",
    description: "Create meaningful projects.",
  },
  {
    title: "Master",
    description: "Demonstrate independent understanding.",
  },
  {
    title: "Apply",
    description: "Solve authentic real-world problems.",
  },
  {
    title: "Research",
    description: "Investigate questions using evidence.",
  },
  {
    title: "Create",
    description: "Produce original knowledge or solutions.",
  },
  {
    title: "Lead",
    description: "Teach, mentor, and serve others.",
  },
];

export default function CreatorJourney({
  stages = defaultStages,
  currentStage = 1,
}) {
  return (
    <section className="rounded-3xl bg-slate-900 p-8 text-white md:p-10">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-300">
        SkillBridge Method
      </p>

      <h2 className="mt-2 text-3xl font-extrabold">
        The Creator Journey
      </h2>

      <p className="mt-4 max-w-4xl leading-8 text-slate-300">
        Education begins with understanding and grows toward research,
        creation, leadership, and meaningful contribution.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, index) => {
          const stageNumber = index + 1;
          const isComplete = stageNumber < currentStage;
          const isCurrent = stageNumber === currentStage;

          return (
            <article
              key={stage.title}
              className={`rounded-2xl border p-5 ${
                isCurrent
                  ? "border-blue-400 bg-blue-500/20"
                  : isComplete
                    ? "border-green-400 bg-green-500/10"
                    : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-extrabold ${
                    isCurrent
                      ? "bg-blue-500 text-white"
                      : isComplete
                        ? "bg-green-500 text-white"
                        : "bg-white/10 text-slate-300"
                  }`}
                >
                  {isComplete ? "✓" : stageNumber}
                </span>

                {isCurrent && (
                  <span className="text-xs font-bold uppercase tracking-wide text-blue-300">
                    Current
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-xl font-extrabold">
                {stage.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-300">
                {stage.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}