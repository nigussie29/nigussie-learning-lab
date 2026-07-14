const masteryStages = [
  {
    name: "Learn",
    description: "Understand the essential concepts and vocabulary.",
  },
  {
    name: "Practice",
    description: "Strengthen understanding through guided exercises.",
  },
  {
    name: "Build",
    description: "Create a meaningful project using the new knowledge.",
  },
  {
    name: "Master",
    description: "Demonstrate independent and consistent understanding.",
  },
  {
    name: "Apply",
    description: "Use knowledge to solve authentic real-world problems.",
  },
  {
    name: "Research",
    description: "Investigate open questions using evidence and analysis.",
  },
  {
    name: "Create",
    description: "Develop an original solution, idea, model, or product.",
  },
  {
    name: "Lead",
    description: "Teach, mentor, communicate, and help others grow.",
  },
];

export default function StepFourMastery({ value, onChange }) {
  const selectedStages = Array.isArray(value) ? value : [];

  function toggleStage(stageName) {
    const nextStages = selectedStages.includes(stageName)
      ? selectedStages.filter((stage) => stage !== stageName)
      : [...selectedStages, stageName];

    onChange(nextStages);
  }

  function selectAllStages() {
    onChange(masteryStages.map((stage) => stage.name));
  }

  function clearStages() {
    onChange([]);
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Step 4
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        How does this course support the Mastery Pyramid?
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Select the stages learners will experience. A complete SkillBridge
        course should move learners beyond understanding toward application,
        research, creation, and leadership.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={selectAllStages}
          className="rounded-xl border border-blue-600 px-4 py-2 font-bold text-blue-700 hover:bg-blue-50"
        >
          Select All
        </button>

        <button
          type="button"
          onClick={clearStages}
          className="rounded-xl border border-slate-300 px-4 py-2 font-bold text-slate-700 hover:bg-slate-50"
        >
          Clear
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {masteryStages.map((stage, index) => {
          const isSelected = selectedStages.includes(stage.name);

          return (
            <button
              key={stage.name}
              type="button"
              onClick={() => toggleStage(stage.name)}
              aria-pressed={isSelected}
              className={`rounded-2xl border p-5 text-left transition ${
                isSelected
                  ? "border-blue-600 bg-blue-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-extrabold ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {isSelected ? "✓" : index + 1}
                </div>

                <div>
                  <h3
                    className={`text-xl font-extrabold ${
                      isSelected ? "text-blue-800" : "text-slate-900"
                    }`}
                  >
                    {stage.name}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {stage.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">
        <p className="font-bold text-slate-800">
          Selected stages: {selectedStages.length}
        </p>

        <p className="mt-2 text-slate-600">
          {selectedStages.length > 0
            ? selectedStages.join(" → ")
            : "No mastery stages selected yet."}
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">🤖 Luminery Tip</p>

        <p className="mt-2 leading-7 text-slate-700">
          Strong courses include Learn, Practice, Build, Master, and Apply.
          Research, Create, and Lead should be included when they match the
          course level and purpose.
        </p>
      </div>
    </section>
  );
}