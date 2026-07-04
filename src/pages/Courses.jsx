
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaClock, FaBookOpen, FaUsers, FaStar } from "react-icons/fa";
import { courses } from "../data/courses";



const categories = ["All", "Python", "Data Analytics", "AI", "SQL / Microsoft Fabric", "Mathematics", "Robotics"];

function levelColor(level) {
  if (level === "Beginner") return "bg-green-100 text-green-700";
  if (level === "Intermediate") return "bg-yellow-100 text-yellow-700";
  return "bg-red-100 text-red-700";
}

export default function Courses() {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selected === "All" || course.category === selected;
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Courses
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Explore career-ready courses.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Learn practical skills in Python, AI, data analytics, Power BI,
            Microsoft Fabric, mathematics, and robotics.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              ["12+", "Courses"],
              ["2,500+", "Students"],
              ["98%", "Completion"],
              ["4.9", "Average Rating"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-extrabold text-blue-600">{number}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 md:max-w-md"
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelected(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selected === category
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <article
                key={course.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-6 text-center">
                  <h2 className="text-2xl font-extrabold text-white">
                    {course.category}
                  </h2>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${levelColor(course.level)}`}>
                      {course.level}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {course.weeks}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                    {course.title}
                  </h3>

                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <FaBookOpen /> {course.lessons} lessons
                    </p>
                    <p className="flex items-center gap-2">
                      <FaClock /> {course.weeks}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaUsers /> {course.students}+ students
                    </p>
                    <p className="flex items-center gap-2">
                      <FaStar /> {course.rating}
                    </p>
                  </div>

                 <Link
  to={`/courses/${course.id}`}
  className="mt-6 block w-full rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-700"
>
  Start Learning →
</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}