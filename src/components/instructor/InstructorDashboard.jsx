import CreateCourseCard from "./CreateCourseCard";

export default function InstructorDashboard() {
  return (
    <div className="space-y-8">
      <CreateCourseCard />

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Courses
          </p>

          <p className="mt-3 text-4xl font-extrabold text-slate-900">
            3
          </p>

          <p className="mt-2 text-slate-600">
            Courses currently in development
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Lessons
          </p>

          <p className="mt-3 text-4xl font-extrabold text-slate-900">
            18
          </p>

          <p className="mt-2 text-slate-600">
            Lessons created across all courses
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Students
          </p>

          <p className="mt-3 text-4xl font-extrabold text-slate-900">
            126
          </p>

          <p className="mt-2 text-slate-600">
            Learners currently enrolled
          </p>
        </div>
      </section>
    </div>
  );
}