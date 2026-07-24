import { useState } from "react";
import { learningJourney } from "../../data/journey/learningJourney";

function getStageStyles(status, isSelected) {
  if (status === "completed") {
    return {
      circle: "bg-emerald-500 text-white",
      title: "text-emerald-700",
      line: "bg-emerald-400",
      badge: "bg-emerald-50 text-emerald-700",
      border: isSelected
        ? "border-emerald-400 ring-4 ring-emerald-50"
        : "border-slate-200",
    };
  }

  if (status === "current") {
    return {
      circle: "bg-blue-600 text-white",
      title: "text-blue-700",
      line: "bg-slate-200",
      badge: "bg-blue-50 text-blue-700",
      border: isSelected
        ? "border-blue-500 ring-4 ring-blue-50"
        : "border-blue-200",
    };
  }

  return {
    circle: "bg-slate-200 text-slate-500",
    title: "text-slate-600",
    line: "bg-slate-200",
    badge: "bg-slate-100 text-slate-500",
    border: isSelected
      ? "border-slate-400 ring-4 ring-slate-100"
      : "border-slate-200",
  };
}

function getStatusLabel(status) {
  if (status === "completed") return "Completed";
  if (status === "current") return "Current Stage";
  return "Locked";
}

export default function LearningJourneyCard() {
  const currentStage =
    learningJourney.find((stage) => stage.status === "current") ||
    learningJourney[0];

  const [selectedStage, setSelectedStage] = useState(currentStage);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
              🧭
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                SkillBridge Roadmap
              </p>

              <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                Learning Journey
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Learn, practice, build, master, apply, and research.
              </p>
            </div>
          </div>

          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            Current: {currentStage.title}
          </span>
        </div>
      </div>

      <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)]">
        <div className="p-6">
          <div className="space-y-3">
            {learningJourney.map((stage, index) => {
              const isSelected = selectedStage.id === stage.id;
              const styles = getStageStyles(stage.status, isSelected);

              return (
                <div key={stage.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setSelectedStage(stage)}
                    className={`w-full rounded-2xl border bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${styles.border}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold ${styles.circle}`}
                        >
                          {stage.icon}
                        </div>

                        {index < learningJourney.length - 1 && (
                          <div
                            className={`absolute top-12 h-7 w-1 rounded-full ${styles.line}`}
                          />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h3
                              className={`text-lg font-extrabold ${styles.title}`}
                            >
                              {stage.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              {stage.description}
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold ${styles.badge}`}
                          >
                            {getStatusLabel(stage.status)}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                          <span>{stage.lessons} lessons</span>
                          <span>{stage.projects} projects</span>
                          <span>+{stage.xp} XP</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="border-t border-slate-100 bg-slate-50 p-6 xl:border-l xl:border-t-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
                Selected Stage
              </p>

              <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
                {selectedStage.icon} {selectedStage.title}
              </h3>
            </div>

            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">
              {getStatusLabel(selectedStage.status)}
            </span>
          </div>

          <p className="mt-4 leading-7 text-slate-600">
            {selectedStage.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Lessons
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-900">
                {selectedStage.lessons}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Projects
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-900">
                {selectedStage.projects}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                XP Reward
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-900">
                +{selectedStage.xp}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Estimated Time
              </p>
              <p className="mt-2 text-lg font-extrabold text-slate-900">
                {selectedStage.estimatedTime}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-5">
            <p className="text-sm font-extrabold text-violet-800">
              ✨ Luminery Recommendation
            </p>

            <p className="mt-2 text-sm leading-6 text-violet-700">
              {selectedStage.luminery}
            </p>
          </div>

          <button
            type="button"
            disabled={selectedStage.status === "locked"}
            className="mt-6 w-full rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {selectedStage.status === "locked"
              ? "Complete Previous Stage"
              : selectedStage.status === "completed"
                ? "Review Stage"
                : "Continue Learning"}
          </button>
        </aside>
      </div>
    </section>
  );
}