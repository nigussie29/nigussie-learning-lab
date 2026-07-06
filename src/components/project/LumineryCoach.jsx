export default function LumineryCoach({ tips }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🤖</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Luminery Coach
          </h2>

          <p className="text-slate-500">
            AI guidance to help you succeed
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5"
          >
            <p className="font-medium text-slate-700">
              💡 {tip}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}