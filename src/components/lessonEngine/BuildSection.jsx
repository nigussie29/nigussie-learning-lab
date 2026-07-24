export default function BuildSection({ build }) {
  if (!build || typeof build !== "object") {
    return null;
  }



  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {build.title || "Build"}
      </h2>

      {build.description && (
        <p className="mt-5 leading-8 text-slate-700">
          {build.description}
        </p>
      )}

      {(build.task || build.challenge) && (
        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Build Challenge
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            {build.task || build.challenge}
          </p>
        </div>
      )}

      {build.starterCode && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-slate-900">
            Starter Code
          </h3>

          <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-900 p-5 text-sm text-green-400">
            <code>{build.starterCode}</code>
          </pre>
        </div>
      )}

      {build.requirements?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-slate-900">
            Requirements
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
            {build.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}