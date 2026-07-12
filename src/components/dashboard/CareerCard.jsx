import { Link } from "react-router-dom";

export default function CareerCard({
  readiness,
  targetRole,
  nextSkill,
  path,
}) {
  const safeReadiness = Math.max(0, Math.min(readiness ?? 0, 100));

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">💼</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Career Readiness
          </h2>

          <p className="text-slate-500">
            Connect learning to opportunity
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Target Role
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              {targetRole}
            </h3>
          </div>

          <p className="text-4xl font-extrabold text-blue-700">
            {safeReadiness}%
          </p>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-blue-100">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: `${safeReadiness}%` }}
          />
        </div>

        <p className="mt-5 text-slate-700">
          Next skill to strengthen:{" "}
          <span className="font-bold text-slate-900">
            {nextSkill}
          </span>
        </p>
      </div>

      <Link
        to={path}
        className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
      >
        Open TalentBridge AI
      </Link>
    </section>
  );
}