export default function MasterSection({ master }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🏆</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Master
          </h2>

          <p className="text-slate-500">
            Check your understanding
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {master.map((question) => (
          <div
            key={question}
            className="rounded-2xl bg-yellow-50 p-5"
          >
            <p className="font-semibold text-slate-800">
              ❓ {question}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}