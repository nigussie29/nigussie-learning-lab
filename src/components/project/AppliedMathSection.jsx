export default function AppliedMathSection({ mathematics }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📐</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Mathematics Behind the Solution
          </h2>

          <p className="text-slate-500">
            Understand why the solution works
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {mathematics.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-slate-50 p-5"
          >
            <h3 className="font-bold text-slate-900">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}