export default function ApplySection({ apply }) {
  if (!apply) return null;

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🌍</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Apply Your Learning
          </h2>

          <p className="text-slate-500">
            Connect today's lesson to the real world
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">

        {/* Real World */}
        {apply.realWorldConnection && (
          <div className="rounded-2xl border-l-4 border-green-500 bg-green-50 p-6">
            <h3 className="font-bold text-green-700">
              🌍 Real-World Connection
            </h3>

            <p className="mt-3">
              {typeof apply.realWorldConnection === "string"
                ? apply.realWorldConnection
                : apply.realWorldConnection.description ??
                  apply.realWorldConnection.title}
            </p>
          </div>
        )}

        {/* Technology Activity */}
        {apply.technologyActivity && (
          <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
            <h3 className="font-bold text-blue-700">
              💻 Technology Activity
            </h3>

            <h4 className="mt-3 font-bold">
              {apply.technologyActivity.title}
            </h4>

            {apply.technologyActivity.tool && (
              <p className="mt-2">
                <strong>Tool:</strong>{" "}
                {apply.technologyActivity.tool}
              </p>
            )}

            {apply.technologyActivity.instructions?.length > 0 && (
              <ul className="mt-3 list-disc pl-6">
                {apply.technologyActivity.instructions.map(
                  (step, index) => (
                    <li key={index}>{step}</li>
                  )
                )}
              </ul>
            )}
          </div>
        )}

        {/* Python Lab */}
        {apply.pythonLab && (
          <div className="rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 p-6">
            <h3 className="font-bold text-yellow-700">
              🐍 Python Lab
            </h3>

            <h4 className="mt-3 font-bold">
              {apply.pythonLab.title}
            </h4>

            {apply.pythonLab.tool && (
              <p className="mt-2">
                <strong>Tool:</strong>{" "}
                {apply.pythonLab.tool}
              </p>
            )}

            {apply.pythonLab.instructions?.length > 0 && (
              <ul className="mt-3 list-disc pl-6">
                {apply.pythonLab.instructions.map(
                  (step, index) => (
                    <li key={index}>{step}</li>
                  )
                )}
              </ul>
            )}
          </div>
        )}

      </div>
    </section>
  );
}