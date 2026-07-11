export default function LumineryCoach({
  message,
  recommendation,
  confidence,
}) {
  return (
    <section className="mt-8 rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-700 p-8 text-white">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🤖</span>

        <div>
          <h2 className="text-3xl font-extrabold">
            Luminery Coach
          </h2>

          <p className="text-violet-200">
            Your AI Learning Mentor
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="font-bold text-violet-200">
            Feedback
          </h3>

          <p className="mt-2 text-lg">
            {message}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-violet-200">
            Recommendation
          </h3>

          <p className="mt-2 text-lg">
            {recommendation}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-violet-200">
            Confidence Level
          </h3>

          <div className="mt-3 h-3 rounded-full bg-white/20">
            <div
              className="h-3 rounded-full bg-green-400"
              style={{ width: `${confidence}%` }}
            />
          </div>

          <p className="mt-2 font-bold">
            {confidence}% Ready
          </p>
        </div>
      </div>
    </section>
  );
}