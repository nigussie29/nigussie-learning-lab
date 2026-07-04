import { useParams, Link } from "react-router-dom";
import { FaClock, FaBookOpen, FaUsers, FaStar, FaCheckCircle } from "react-icons/fa";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Course not found</h1>
        <Link to="/courses" className="mt-6 inline-block text-blue-600 font-bold">
          Back to Courses
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-wide text-blue-200">
            {course.category}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
            {course.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
            <span className="flex items-center gap-2"><FaBookOpen /> {course.lessons} lessons</span>
            <span className="flex items-center gap-2"><FaClock /> {course.weeks}</span>
            <span className="flex items-center gap-2"><FaUsers /> {course.students}+ students</span>
            <span className="flex items-center gap-2"><FaStar /> {course.rating}</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                What you will learn
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {course.skills.map((skill) => (
                  <p key={skill} className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-600" />
                    {skill}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Course Curriculum
              </h2>

              <div className="mt-6 space-y-3">
                {course.curriculum.map((lesson, index) => (
                  <div
                    key={lesson}
                    className="flex items-center justify-between rounded-xl border border-slate-200 p-4"
                  >
                    <span className="font-semibold text-slate-800">
                      Lesson {index + 1}: {lesson}
                    </span>
                    <span className="text-sm text-slate-500">Preview</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Enroll in this course
            </h3>

            <p className="mt-4 text-slate-600">
              Start learning today and build real career-ready skills.
            </p>
<Link
  to="/lessons/1"
  className="mt-6 block w-full rounded-xl bg-blue-600 py-3 text-center font-bold text-white hover:bg-blue-700"
>
  Start First Lesson
</Link>

            <Link
              to="/dashboard"
              className="mt-3 block w-full rounded-xl border border-slate-300 py-3 text-center font-bold text-slate-700 hover:bg-slate-50"
            >
              Go to Dashboard
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}