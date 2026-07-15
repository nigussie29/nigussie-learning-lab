import lesson01 from "../../../data/mathematics/college/linearAlgebra/lessons/module01/lesson01";

export default function Lesson01Test() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-3xl bg-blue-950 p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Module {lesson01.moduleNumber} · Lesson {lesson01.lessonNumber}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold">
            {lesson01.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-blue-100">
            {lesson01.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2">
              {lesson01.duration}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              {lesson01.level}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              {lesson01.status}
            </span>
          </div>
        </section>

        <Section title="Essential Question">
          <p>{lesson01.essentialQuestion}</p>
        </Section>

        <Section title="Big Idea">
          <p>{lesson01.bigIdea}</p>
        </Section>

        <Section title={lesson01.problemFirst.title}>
          <p>{lesson01.problemFirst.scenario}</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            {lesson01.problemFirst.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </Section>

        <Section title="Learning Objectives">
          <ul className="list-disc space-y-2 pl-6">
            {lesson01.learningObjectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </Section>

        <Section title="Vocabulary">
          <div className="grid gap-4 md:grid-cols-2">
            {lesson01.vocabulary.map((item) => (
              <article
                key={item.term}
                className="rounded-2xl bg-slate-100 p-5"
              >
                <h3 className="font-extrabold text-slate-900">
                  {item.term}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.definition}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Worked Examples">
          <div className="space-y-5">
            {lesson01.workedExamples.map((example) => (
              <article
                key={example.id}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <h3 className="text-xl font-extrabold text-slate-900">
                  {example.title}
                </h3>

                <p className="mt-3 text-slate-700">
                  {example.problem}
                </p>

                <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-600">
                  {example.solutionSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>

                <p className="mt-4 font-bold text-blue-700">
                  Answer: {example.answer}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Guided Practice">
          <div className="space-y-4">
            {lesson01.guidedPractice.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-amber-50 p-5"
              >
                <p className="font-bold text-slate-900">
                  {item.question}
                </p>

                <p className="mt-2 text-slate-600">
                  Hint: {item.hint}
                </p>

                <p className="mt-2 font-semibold text-green-700">
                  Answer: {item.answer}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Lesson Summary">
          <ul className="list-disc space-y-2 pl-6">
            {lesson01.summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="rounded-3xl bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {title}
      </h2>

      <div className="mt-4 leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}