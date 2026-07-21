export default function PracticeSection({ practice = [] }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">✍️</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Practice
          </h2>

          <p className="text-slate-500">
            Strengthen your understanding
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {practice.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-blue-50 p-6"
          >
            <h3 className="font-bold text-slate-900">
              Question {index + 1}
            </h3>

            <p className="mt-2 text-slate-700">
              {item.question || item.prompt || item}
            </p>

            {item.answer && (
              <details className="mt-4">
                <summary className="cursor-pointer font-semibold text-blue-600">
                  Show Answer
                </summary>

                <p className="mt-3 text-slate-700">
                  {item.answer}
                </p>
              </details>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}