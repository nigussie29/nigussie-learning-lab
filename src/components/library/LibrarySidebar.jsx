import { useState } from "react";
import { NavLink } from "react-router-dom";

const highSchoolCourses = [
  { label: "Pre-Algebra", path: "/library/mathematics/high-school/pre-algebra" },
  { label: "Algebra I", path: "/library/mathematics/high-school/algebra-1" },
  { label: "Geometry", path: "/library/mathematics/high-school/geometry" },
  { label: "Algebra II", path: "/library/mathematics/high-school/algebra-2" },
  {
    label: "Trigonometry",
    path: "/library/mathematics/high-school/trigonometry",
  },
  {
    label: "Precalculus",
    path: "/library/mathematics/high-school/precalculus",
  },
  {
    label: "Statistics",
    path: "/library/mathematics/high-school/statistics",
  },
  {
    label: "Probability",
    path: "/library/mathematics/high-school/probability",
  },
  {
    label: "Calculus AB",
    path: "/library/mathematics/high-school/calculus-ab",
  },
  {
    label: "Calculus BC",
    path: "/library/mathematics/high-school/calculus-bc",
  },
];

const collegeCourses = [
  { label: "Calculus I", path: "/library/mathematics/college/calculus-1" },
  { label: "Calculus II", path: "/library/mathematics/college/calculus-2" },
  { label: "Calculus III", path: "/library/mathematics/college/calculus-3" },
  {
    label: "Linear Algebra",
    path: "/library/mathematics/college/linear-algebra",
  },
  {
    label: "Differential Equations",
    path: "/library/mathematics/college/differential-equations",
  },
  {
    label: "Discrete Mathematics",
    path: "/library/mathematics/college/discrete-mathematics",
  },
  {
    label: "Numerical Analysis",
    path: "/library/mathematics/college/numerical-analysis",
  },
  {
    label: "Optimization",
    path: "/library/mathematics/college/optimization",
  },
  {
    label: "Real Analysis",
    path: "/library/mathematics/college/real-analysis",
  },
  {
    label: "Complex Analysis",
    path: "/library/mathematics/college/complex-analysis",
  },
];

const aiCourses = [
  {
    label: "Linear Algebra for AI",
    path: "/library/mathematics/ai/linear-algebra",
  },
  {
    label: "Probability for AI",
    path: "/library/mathematics/ai/probability",
  },
  {
    label: "Statistics for AI",
    path: "/library/mathematics/ai/statistics",
  },
  {
    label: "Optimization for AI",
    path: "/library/mathematics/ai/optimization",
  },
  {
    label: "Information Theory",
    path: "/library/mathematics/ai/information-theory",
  },
  {
    label: "Graph Theory",
    path: "/library/mathematics/ai/graph-theory",
  },
  {
    label: "Numerical Computing",
    path: "/library/mathematics/ai/numerical-computing",
  },
  {
    label: "Deep Learning Mathematics",
    path: "/library/mathematics/ai/deep-learning-mathematics",
  },
];

const resourceLinks = [
  {
    label: "Learning Roadmap",
    path: "/library/mathematics/roadmap",
    icon: "🗺️",
  },
  {
    label: "Formula Library",
    path: "/library/mathematics/formulas",
    icon: "🧮",
  },
  {
    label: "Proof Library",
    path: "/library/mathematics/proofs",
    icon: "📐",
  },
  {
    label: "Python Lab",
    path: "/library/mathematics/python",
    icon: "💻",
  },
  {
    label: "Visualization Lab",
    path: "/library/mathematics/visualizations",
    icon: "📊",
  },
  {
    label: "Research Center",
    path: "/library/mathematics/research",
    icon: "🔬",
  },
  {
    label: "Projects",
    path: "/library/mathematics/projects",
    icon: "🛠️",
  },
  {
    label: "Portfolio",
    path: "/library/mathematics/portfolio",
    icon: "📁",
  },
];

export default function LibrarySidebar() {
  const [openSections, setOpenSections] = useState({
    mathematics: true,
    highSchool: false,
    college: false,
    ai: false,
  });

  function toggleSection(section) {
    setOpenSections((previous) => ({
      ...previous,
      [section]: !previous[section],
    }));
  }

  return (
    <div className="sticky top-0 flex h-screen flex-col overflow-y-auto p-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          SkillBridge Academy
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          Knowledge Library
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Learn, build, research, create, and lead.
        </p>
      </div>

      <nav className="mt-8">
        <p className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          Explore
        </p>

        <div className="mt-3 space-y-1">
          <NavItem
            label="Library Home"
            path="/library"
            icon="🏠"
            end
          />

          <button
            type="button"
            onClick={() => toggleSection("mathematics")}
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <span className="flex items-center gap-3">
              <span aria-hidden="true">📘</span>
              <span>Mathematics</span>
            </span>

            <span aria-hidden="true">
              {openSections.mathematics ? "▾" : "▸"}
            </span>
          </button>

          {openSections.mathematics && (
            <div className="ml-4 border-l border-slate-200 pl-3">
              <NavItem
                label="Mathematics Home"
                path="/library/mathematics"
                icon="•"
                end
              />

              <ExpandableGroup
                label="High School Mathematics"
                icon="🎓"
                isOpen={openSections.highSchool}
                onToggle={() => toggleSection("highSchool")}
                courses={highSchoolCourses}
                overviewPath="/library/mathematics/high-school"
              />

              <ExpandableGroup
                label="College Mathematics"
                icon="📗"
                isOpen={openSections.college}
                onToggle={() => toggleSection("college")}
                courses={collegeCourses}
                overviewPath="/library/mathematics/college"
              />

              <ExpandableGroup
                label="AI Mathematics"
                icon="🤖"
                isOpen={openSections.ai}
                onToggle={() => toggleSection("ai")}
                courses={aiCourses}
                overviewPath="/library/mathematics/ai"
              />
            </div>
          )}
        </div>
      </nav>

      <nav className="mt-8">
        <p className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          Mathematics Resources
        </p>

        <div className="mt-3 space-y-1">
          {resourceLinks.map((link) => (
            <NavItem
              key={link.path}
              label={link.label}
              path={link.path}
              icon={link.icon}
            />
          ))}
        </div>
      </nav>

      <div className="mt-auto rounded-2xl bg-violet-50 p-4">
        <p className="font-bold text-violet-700">
          Luminery Guidance
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Follow the pathway that matches your current knowledge, goals, and
          creator journey.
        </p>
      </div>
    </div>
  );
}

function ExpandableGroup({
  label,
  icon,
  isOpen,
  onToggle,
  courses,
  overviewPath,
}) {
  return (
    <div className="mt-1">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onToggle}
          className="flex flex-1 items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          <span className="flex items-center gap-3">
            <span aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </span>

          <span aria-hidden="true">
            {isOpen ? "▾" : "▸"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="ml-5 border-l border-slate-200 pl-3">
          <NavLink
            to={overviewPath}
            end
            className={({ isActive }) =>
              `mt-1 block rounded-lg px-3 py-2 text-xs font-bold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-blue-700 hover:bg-blue-50"
              }`
            }
          >
            Overview
          </NavLink>

          {courses.map((course) => (
            <NavLink
              key={course.path}
              to={course.path}
              className={({ isActive }) =>
                `mt-1 block rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {course.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function NavItem({ label, path, icon, end = false }) {
  return (
    <NavLink
      to={path}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
          isActive
            ? "bg-blue-600 text-white shadow-sm"
            : "text-slate-700 hover:bg-slate-100"
        }`
      }
    >
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}