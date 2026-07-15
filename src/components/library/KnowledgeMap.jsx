export default function KnowledgeMap({
  title = "Knowledge Map",
  description = "See how concepts connect and build on one another.",
  concepts = [],
}) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
        Connected learning
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        {description}
      </p>

      {concepts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
          <p className="font-bold text-slate-700">
            Knowledge map coming soon
          </p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center">
          {concepts.map((concept, index) => (
            <div
              key={`${concept.title}-${index}`}
              className="flex w-full max-w-3xl flex-col items-center"
            >
              <article className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  Concept {index + 1}
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                  {concept.title}
                </h3>

                {concept.description && (
                  <p className="mt-2 leading-7 text-slate-600">
                    {concept.description}
                  </p>
                )}
              </article>

              {index < concepts.length - 1 && (
                <div
                  className="py-3 text-2xl text-blue-500"
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}