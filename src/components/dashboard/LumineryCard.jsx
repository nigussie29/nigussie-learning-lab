export default function LumineryCard({
  message,
  recommendation,
  confidence,
}) {
  const safeConfidence = Math.max(0, Math.min(confidence ?? 0, 100));

  return (
    <section className="rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-700 p-8 text-white">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🤖</span>

        <div>
          <h2 className="text-3xl font-extrabold">
            Luminery
          </h2>

          <p className="text-violet-200">
            Your AI learning mentor
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <p className="font-bold text-violet-200">Today’s Insight</p>
          <p className="mt-2 text-lg leading-8">{message}</p>
        </div>

        <div>
          <p className="font-bold text-violet-200">Recommendation</p>
          <p className="mt-2 text-lg leading-8">{recommendation}</p>
        </div>

        <div>
          <div className="flex justify-between font-bold">
            <span>Readiness</span>
            <span>{safeConfidence}%</span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-green-400"
              style={{ width: `${safeConfidence}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}