export default function PortfolioEvidence({ evidence }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📂</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Portfolio Evidence
          </h2>

          <p className="text-slate-500">
            Proof of what you are building
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">
        <h3 className="text-2xl font-bold text-slate-900">
          {evidence.title}
        </h3>

        <p className="mt-3 text-slate-700">
          {evidence.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {evidence.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}