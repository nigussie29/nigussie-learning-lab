import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white">
          <p className="font-bold text-blue-200">
            SkillBridge Academy
          </p>

          <h1 className="mt-3 text-5xl font-extrabold">
            Projects Library
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-blue-100">
            Learn by building real-world projects across every course.
            Every project strengthens your skills, earns Mastery Points,
            and helps build your professional portfolio.
          </p>
        </section>

        {/* Projects */}
        <section className="mt-10">

          <h2 className="text-3xl font-extrabold text-slate-900">
            Available Projects
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {projects.map((project) => (

              <div
                key={project.id}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg"
              >

                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 space-y-2 text-sm">

                  <p>
                    <strong>Level:</strong> {project.level}
                  </p>

                  <p>
                    <strong>Duration:</strong> {project.duration}
                  </p>

                  <p>
                    <strong>Mastery Points:</strong> {project.masteryPoints}
                  </p>

                  <p>
                    <strong>Portfolio Value:</strong> {project.portfolioValue}
                  </p>

                </div>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.skills.map((skill) => (

                    <span
                      key={skill}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

                <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700">
                  View Project
                </button>

              </div>

            ))}

          </div>

        </section>

      </div>
    </main>
  );
}