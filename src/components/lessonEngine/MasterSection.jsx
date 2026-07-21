export default function MasterSection({ master }) {
  if (!master) return null;

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🏆</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Mastery Check
          </h2>

          <p className="text-slate-500">
            Demonstrate your understanding
          </p>
        </div>
      </div>

      <p className="mt-6 font-semibold text-green-700">
        Passing Score: {master.passingScore}
      </p>

      <div className="mt-8 space-y-6">
        {master.questions.map((question, index) => (
          <div
            key={index}
            className="rounded-2xl bg-yellow-50 p-6"
          >
            <p className="font-bold">
              Question {index + 1}
            </p>

            <p className="mt-2">
              {question.prompt}
            </p>

            {question.answer && (
              <details className="mt-4">
                <summary className="cursor-pointer font-semibold text-green-700">
                  Show Answer
                </summary>

                <p className="mt-3">
                  {question.answer}
                </p>
              </details>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}