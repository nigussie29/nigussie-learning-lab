export default function BuildSection({ build }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">💻</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Build
          </h2>

          <p className="text-slate-500">
            Create something real
          </p>
        </div>
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {build.title}
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        {build.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {build.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}