export default function LumineryCard({
  learner = "Learner",
  greeting = "Good Morning",
  message,
  recommendation,
  confidence,
  mission = "Complete today's learning mission.",
  tasks = [
    { title: "Review previous lesson", duration: "10 min" },
    { title: "Complete today's lesson", duration: "20 min" },
    { title: "Take mastery quiz", duration: "5 min" },
  ],
}) {
  const safeConfidence = Math.max(0, Math.min(confidence ?? 0, 100));

  const confidenceLabel =
    safeConfidence >= 90
      ? "Excellent"
      : safeConfidence >= 75
      ? "High"
      : safeConfidence >= 60
      ? "Good"
      : safeConfidence >= 40
      ? "Fair"
      : "Needs Attention";

  return (
    <section className="rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-800 p-6 text-white shadow-lg">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          ✨
        </div>

        <div>
          <h2 className="text-2xl font-extrabold">
            Luminery AI
          </h2>

          <p className="text-sm text-violet-200">
            Your Personal Learning Mentor
          </p>
        </div>
      </div>

      {/* Greeting */}
      <div className="mt-6 rounded-2xl bg-white/10 p-4">
        <p className="text-sm text-violet-200">
          {greeting}, {learner} 👋
        </p>

        <p className="mt-2 text-lg font-semibold leading-7">
          {message}
        </p>
      </div>

      {/* Today's Mission */}
      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-200">
          Today's Mission
        </p>

        <p className="mt-2 text-base leading-7">
          {mission}
        </p>
      </div>

      {/* Confidence */}
      <div className="mt-6 rounded-2xl bg-white/10 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">
            Learning Confidence
          </p>

          <p className="text-xl font-extrabold">
            {safeConfidence}%
          </p>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-green-400 transition-all duration-500"
            style={{ width: `${safeConfidence}%` }}
          />
        </div>

        <p className="mt-2 text-sm font-semibold text-green-300">
          {confidenceLabel} Confidence
        </p>
      </div>

      {/* Today's Plan */}
      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-200">
          Today's Plan
        </p>

        <div className="mt-3 space-y-3">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span>☐</span>

                <span className="text-sm">
                  {task.title}
                </span>
              </div>

              <span className="text-xs text-violet-200">
                {task.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="mt-6 rounded-2xl bg-white/10 p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-200">
          AI Insight
        </p>

        <p className="mt-2 text-sm leading-7">
          {recommendation}
        </p>
      </div>

      {/* CTA */}
      <button
        className="mt-6 w-full rounded-2xl bg-white py-3 text-center font-bold text-indigo-700 transition hover:bg-indigo-50"
      >
        🚀 Start Today's Session
      </button>
    </section>
  );
}