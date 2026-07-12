export default function AchievementsCard({ achievements }) {
  const safeAchievements = achievements ?? [];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">🏅</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Achievements
          </h2>

          <p className="text-slate-500">
            Celebrate meaningful learning milestones
          </p>
        </div>
      </div>

      {safeAchievements.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <p className="text-slate-600">
            Complete lessons, projects, and research activities to earn
            achievements.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {safeAchievements.map((achievement) => (
            <div
              key={achievement.id ?? achievement.title}
              className="rounded-2xl bg-amber-50 p-5"
            >
              <div className="text-3xl">
                {achievement.icon ?? "🏆"}
              </div>

              <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                {achievement.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {achievement.description}
              </p>

              {achievement.date && (
                <p className="mt-4 text-sm font-semibold text-amber-700">
                  Earned {achievement.date}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}