import { portfolio } from "../data/portfolio";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
          <p className="font-bold text-blue-200">Student Portfolio</p>

          <h1 className="mt-3 text-5xl font-extrabold">
            {portfolio.name}
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            {portfolio.title}
          </p>

          <p className="mt-4 max-w-3xl text-blue-100">
            {portfolio.bio}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-3xl font-extrabold">
                {portfolio.overallMastery}%
              </p>
              <p className="text-sm text-blue-100">Overall Mastery</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-3xl font-extrabold">
                {portfolio.projectsCompleted}
              </p>
              <p className="text-sm text-blue-100">Projects Completed</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-3xl font-extrabold">
                {portfolio.coursesCompleted}
              </p>
              <p className="text-sm text-blue-100">Courses Completed</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-3xl font-extrabold">
                {portfolio.certificatesEarned}
              </p>
              <p className="text-sm text-blue-100">Certificates Earned</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}