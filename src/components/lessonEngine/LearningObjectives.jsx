export default function LearningObjectives({ objectives }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🎯</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Learning Objectives
          </h2>

          <p className="text-slate-500">
            By the end of this lesson you will be able to:
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {objectives.map((objective) => (
          <div
            key={objective}
            className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
          >
            <div className="mt-1 text-green-600 text-xl">
              ✓
            </div>

            <p className="text-lg text-slate-700">
              {objective}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}