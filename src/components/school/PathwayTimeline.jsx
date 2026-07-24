export default function PathwayTimeline({ steps = [] }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Learning Journey
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
            Your Mathematics Pathway
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Progress step by step from foundational mathematics to advanced
            topics that prepare you for data science, engineering, and AI.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.title || index}
              className="flex items-start gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>

                {index < steps.length - 1 && (
                  <div className="mt-2 h-12 w-1 rounded bg-blue-200" />
                )}
              </div>

              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {step.description && (
                  <p className="mt-2 leading-7 text-slate-600">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}