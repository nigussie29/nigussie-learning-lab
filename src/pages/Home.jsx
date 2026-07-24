import {
  BookOpen,
  Brain,
  Code2,
  Database,
  LineChart,
  Users,
} from "lucide-react";
import SchoolsSection from "../features/home/SchoolsSection";
import HomeHero from "../features/home/HomeHero.jsx";
import LearningOS from "../features/home/LearningOS.jsx";

const topics = [
  {
    icon: BookOpen,
    title: "Mathematics Library",
    text: "Build confidence in algebra, geometry, statistics, calculus, and problem-solving.",
  },
  {
    icon: Code2,
    title: "Computer Science Library",
    text: "Learn programming, Python, SQL, web development, and software engineering.",
  },
  {
    icon: LineChart,
    title: "Data Analytics Library",
    text: "Create dashboards, analyze data, and communicate meaningful insights.",
  },
  {
    icon: Database,
    title: "Data Engineering Library",
    text: "Explore Microsoft Fabric, databases, pipelines, and modern data platforms.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence Library",
    text: "Learn machine learning and create practical AI portfolio projects.",
  },
  {
    icon: Users,
    title: "Career Learning Paths",
    text: "Follow structured pathways designed for students and career changers.",
  },
];

export default function Home() {
  return (
    <main>
      <HomeHero />
       <LearningOS />
       <SchoolsSection />

      <section className="section py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Learning libraries
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Choose your learning journey
          </h2>

          <p className="mt-3 text-slate-600">
            Explore structured libraries that help you learn, practice, build
            projects, and create portfolio-ready work.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article className="card p-6" key={topic.title}>
                <Icon className="text-brand-600" size={30} />

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {topic.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {topic.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}