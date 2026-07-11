export default function ResearchExtension({ research }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🔬</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Research Extension
          </h2>

          <p className="text-slate-500">
            Explore the concept beyond the lesson
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-violet-50 p-6">
        <h3 className="text-2xl font-bold text-slate-900">
          {research.title}
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          {research.description}
        </p>

        <div className="mt-6 space-y-3">
          {research.questions.map((question) => (
            <div
              key={question}
              className="rounded-xl bg-white p-4 text-slate-700"
            >
              🔎 {question}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}