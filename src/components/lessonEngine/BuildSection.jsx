export default function BuildSection({ build }) {
  if (!build) return null;

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">💻</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Creator Challenge
          </h2>

          <p className="text-slate-500">
            Build something meaningful
          </p>
        </div>
      </div>

      <h3 className="mt-8 text-2xl font-bold">
        {build.title}
      </h3>

      {build.description && (
        <p className="mt-4 text-lg leading-8 text-slate-700">
          {build.description}
        </p>
      )}

      {build.requirements?.length > 0 && (
        <>
          <h4 className="mt-8 text-xl font-bold">
            Requirements
          </h4>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            {build.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </>
      )}

      {build.tools?.length > 0 && (
        <>
          <h4 className="mt-8 text-xl font-bold">
            Recommended Tools
          </h4>

          <div className="mt-4 flex flex-wrap gap-3">
            {build.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </>
      )}
    </section>
  );
}