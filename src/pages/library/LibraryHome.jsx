import { Link } from "react-router-dom";

const libraries = [
  {
    title: "Mathematics",
    icon: "📘",
    description:
      "High school mathematics, college mathematics, and mathematics for artificial intelligence.",
    topics: ["Algebra", "Geometry", "Calculus", "Linear Algebra", "Probability"],
    path: "/library/mathematics",
    available: true,
  },
  {
    title: "Computer Science",
    icon: "💻",
    description:
      "Programming, algorithms, software engineering, computer systems, and problem solving.",
    topics: ["Python", "JavaScript", "Algorithms", "Software Engineering"],
    path: "#",
    available: false,
  },
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    description:
      "Machine learning, deep learning, computer vision, natural language processing, and AI agents.",
    topics: ["Machine Learning", "Deep Learning", "AI Agents", "Computer Vision"],
    path: "#",
    available: false,
  },
  {
    title: "Data Science",
    icon: "📊",
    description:
      "Statistics, Python, SQL, Power BI, data visualization, and predictive modeling.",
    topics: ["Statistics", "SQL", "Power BI", "Python"],
    path: "#",
    available: false,
  },
  {
    title: "Robotics",
    icon: "🦾",
    description:
      "Sensors, Raspberry Pi, Arduino, control systems, computer vision, and autonomous robots.",
    topics: ["Raspberry Pi", "Arduino", "Sensors", "Computer Vision"],
    path: "#",
    available: false,
  },
  {
    title: "Research",
    icon: "🔬",
    description:
      "Research questions, literature review, experimentation, analysis, writing, and publication.",
    topics: ["Research Methods", "Data Analysis", "Publication", "Innovation"],
    path: "#",
    available: false,
  },
];

export default function LibraryHome() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl bg-gradient-to-br from-blue-800 to-indigo-900 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
            SkillBridge Academy
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            The Knowledge Library
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Learn deeply. Build confidently. Research meaningful questions.
            Create original work. Lead others through knowledge.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-xl font-bold">
              We don&apos;t build courses. We build people.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Explore knowledge
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              Choose a field of study
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Every library connects foundational knowledge to projects,
              research, careers, and real-world applications.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {libraries.map((library) => (
              <article
                key={library.title}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="text-5xl">{library.icon}</div>

                <h3 className="mt-5 text-2xl font-extrabold text-slate-900">
                  {library.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {library.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {library.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  {library.available ? (
                    <Link
                      to={library.path}
                      className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                    >
                      Explore Library
                    </Link>
                  ) : (
                    <span className="inline-block rounded-xl bg-slate-100 px-5 py-3 font-bold text-slate-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
            The SkillBridge Method
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            A library designed for transformation
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Learn",
              "Practice",
              "Build",
              "Master",
              "Apply",
              "Research",
              "Create",
              "Lead",
            ].map((stage, index) => (
              <div
                key={stage}
                className="rounded-2xl bg-slate-50 p-5 text-center"
              >
                <p className="text-sm font-bold text-blue-600">
                  Stage {index + 1}
                </p>

                <p className="mt-2 text-xl font-extrabold text-slate-900">
                  {stage}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}