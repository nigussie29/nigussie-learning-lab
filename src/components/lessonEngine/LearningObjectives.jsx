export default function LearningObjectives({ objectives }) {
  if (!Array.isArray(objectives) || objectives.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        Learning Objectives
      </h2>

      <div className="mt-6 space-y-4">
        {objectives.map((objective, index) => (
          <div
            key={`${objective}-${index}`}
            className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
          >
            <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-blue-600" />

            <p className="leading-7 text-slate-700">
              {objective}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}