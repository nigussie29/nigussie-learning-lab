export default function YourMission({ objectives }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🎯</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Your Mission
          </h2>

          <p className="text-slate-500">
            What you will accomplish
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {objectives.map((objective) => (
          <div
            key={objective}
            className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700"
          >
            ✅ {objective}
          </div>
        ))}
      </div>
    </section>
  );
}