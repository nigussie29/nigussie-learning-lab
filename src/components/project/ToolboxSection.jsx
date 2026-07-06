export default function ToolboxSection({ technologies }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🛠</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Your Toolbox
          </h2>

          <p className="text-slate-500">
            Tools you will use to complete this project
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {technologies.map((tool) => (
          <span
            key={tool}
            className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}