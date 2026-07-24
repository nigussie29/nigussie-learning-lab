export default function WelcomeCard({ name, mission }) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 p-5 md:p-6 text-white shadow-lg">

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
            Student Learning Command Center
          </p>

          <h1 className="mt-1 text-2xl md:text-3xl font-bold">
            Welcome back, {name} 👋
          </h1>
        </div>

        <div className="hidden lg:flex items-center rounded-xl bg-white/10 px-4 py-2">
          <span className="text-3xl">🎯</span>

          <div className="ml-3">
            <p className="text-xs uppercase tracking-wide text-blue-200">
              Today's Focus
            </p>

            <p className="font-semibold">
              {mission.subject}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-white/10 p-4 backdrop-blur-md">

        <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
          Today's Learning Mission
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {mission.subject}
        </h2>

        <p className="mt-2 text-sm leading-6 text-blue-100 max-w-3xl">
          {mission.purpose}
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">

          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs uppercase tracking-wide text-blue-200">
              Current Stage
            </p>

            <p className="mt-1 font-semibold">
              {mission.currentStage}
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs uppercase tracking-wide text-blue-200">
              Next Step
            </p>

            <p className="mt-1 font-semibold">
              {mission.nextStep}
            </p>
          </div>

          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs uppercase tracking-wide text-blue-200">
              Estimated Time
            </p>

            <p className="mt-1 font-semibold">
              {mission.estimatedTime}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}