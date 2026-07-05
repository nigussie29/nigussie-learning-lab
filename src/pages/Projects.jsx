import { projects } from "../data/projects";
import ProjectCard from "../components/project/ProjectCard";

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
  <ProjectCard
    key={project.id}
    project={project}
  />
))}

          </div>

        </section>

      </div>
    </main>
  );
}