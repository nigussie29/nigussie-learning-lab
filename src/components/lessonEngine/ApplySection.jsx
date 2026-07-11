export default function ApplySection({ apply }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🌍</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Apply
          </h2>

          <p className="text-slate-500">
            Connect learning to the real world
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {apply.map((item) => (
          <div
            key={item}
            className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-5"
          >
            <p className="text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}