const steps = [
  {
    number: "01",
    title: "Learn",
    description: "Understand concepts with engaging lessons and guided instruction.",
  },
  {
    number: "02",
    title: "Practice",
    description: "Strengthen your knowledge through exercises and interactive challenges.",
  },
  {
    number: "03",
    title: "Build",
    description: "Create real-world projects that demonstrate your skills.",
  },
  {
    number: "04",
    title: "Portfolio",
    description: "Collect your best work into a professional portfolio.",
  },
  {
    number: "05",
    title: "Career",
    description: "Prepare for interviews, certifications, and career opportunities.",
  },
  {
    number: "06",
    title: "Research",
    description: "Explore advanced topics and solve meaningful problems.",
  },
];

export default function LearningOS() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            SkillBridge Learning OS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
            Learning is more than taking a course.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our Learning Operating System helps learners move from understanding
            concepts to building projects, creating portfolios, conducting
            research, and preparing for meaningful careers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">
                  STEP {step.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
                  {step.number}
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}