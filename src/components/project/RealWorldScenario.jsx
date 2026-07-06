export default function RealWorldScenario({ scenario }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🌍</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Real-World Scenario
          </h2>

          <p className="text-slate-500">
            Why this project exists
          </p>
        </div>
      </div>

      <p className="mt-8 text-lg leading-8 text-slate-700">
        {scenario}
      </p>
    </section>
  );
}