export default function NextMission({ nextProject }) {
  return (
    <section className="mt-8 mb-12 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🚀</span>

        <div>
          <h2 className="text-3xl font-extrabold">
            Your Next Mission
          </h2>

          <p className="text-blue-100">
            Continue your learning journey
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-white/10 p-6">
        <h3 className="text-2xl font-bold">
          {nextProject}
        </h3>

        <p className="mt-3 text-blue-100">
          Complete this project to continue building your portfolio
          and strengthen your practical skills.
        </p>

        <button className="mt-6 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-100">
          Start Next Project →
        </button>
      </div>
    </section>
  );
}