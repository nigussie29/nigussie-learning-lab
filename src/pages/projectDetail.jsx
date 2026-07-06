import { Link, useParams } from "react-router-dom";
import { projectDetails } from "../data/projectDetails";
import RealWorldScenario from "../components/project/RealWorldScenario";
import YourMission from "../components/project/YourMission";
import AppliedMathSection from "../components/project/AppliedMathSection";
import ToolboxSection from "../components/project/ToolboxSection";
import BuildGuide from "../components/project/BuildGuide";
import LumineryCoach from "../components/project/LumineryCoach";
import CareerValue from "../components/project/CareerValue";
import NextMission from "../components/project/NextMission";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Project not found
        </h1>

        <Link to="/projects" className="mt-6 inline-block font-bold text-blue-600">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Link to="/projects" className="font-bold text-blue-600">
          ← Back to Projects
        </Link>

        <section className="mt-6 rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
          <p className="font-bold text-blue-200">{project.category}</p>

          <h1 className="mt-3 text-5xl font-extrabold">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-blue-100">
            {project.overview}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold">
            <span>{project.difficulty}</span>
            <span>{project.duration}</span>
            <span>+{project.masteryPoints} Mastery Points</span>
          </div>
        </section>
        <RealWorldScenario scenario={project.scenario} />
        <YourMission objectives={project.objectives} />


        <AppliedMathSection mathematics={project.mathematics} />

        <ToolboxSection technologies={project.technologies} />
        <BuildGuide steps={project.steps} />
        <LumineryCoach tips={project.tips} />
        <CareerValue careers={project.careers} />
        <NextMission nextProject={project.nextProject} />
      </div>
    </main>
  );
}