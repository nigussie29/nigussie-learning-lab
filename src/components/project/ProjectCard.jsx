export default function ProjectCard({ project }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        {project.category}
      </p>

      <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
        {project.title}
      </h3>

      <p className="mt-4 text-slate-600">{project.description}</p>

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
  );
}