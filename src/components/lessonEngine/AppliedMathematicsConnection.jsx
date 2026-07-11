export default function AppliedMathematicsConnection({ math }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📐</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Applied Mathematics Connection
          </h2>

          <p className="text-slate-500">
            Discover the mathematical ideas behind this lesson
          </p>
        </div>
      </div>

      {/* Mathematical Foundation */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-900">
          Mathematical Foundation
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {math.foundation.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Related Topics */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-900">
          Related Mathematical Topics
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {math.relatedTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Why it matters */}
      <div className="mt-8 rounded-2xl bg-slate-50 p-6">
        <h3 className="text-xl font-bold text-slate-900">
          Mathematical Thinking
        </h3>

        <p className="mt-3 text-lg leading-8 text-slate-700">
          {math.thinking}
        </p>
      </div>

      {/* Future */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-900">
          This Mathematics Leads To
        </h3>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {math.future.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-violet-50 p-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}