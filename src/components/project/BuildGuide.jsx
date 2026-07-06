export default function BuildGuide({ steps }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">💻</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Build Guide
          </h2>

          <p className="text-slate-500">
            Follow these steps to complete the project
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {index + 1}
            </div>

            <p className="font-medium text-slate-700">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}