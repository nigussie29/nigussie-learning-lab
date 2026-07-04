import { FaLightbulb, FaRocket, FaClock, FaTrophy } from "react-icons/fa";

export default function GuidanceCard() {
  return (
    <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-sm">

      <div className="flex items-center gap-3">
        <FaLightbulb className="text-3xl text-blue-600" />
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Luminery Guidance
          </h2>

          <p className="text-sm text-slate-600">
            Your AI Mastery Mentor
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5">

        <h3 className="text-xl font-bold">
          Hello, Nigussie 👋
        </h3>

        <p className="mt-4 text-slate-700 leading-7">
          Excellent progress!
        </p>

        <p className="mt-3 text-slate-700 leading-7">
          You have mastered the learning concepts and are developing
          your practical programming skills.
        </p>

        <p className="mt-3 text-slate-700 leading-7">
          Your next challenge is to build your first real-world Python project.
        </p>

      </div>

      <div className="mt-6 rounded-2xl bg-white p-5">

        <h3 className="flex items-center gap-2 text-xl font-bold">
          <FaRocket className="text-blue-600" />
          Next Project
        </h3>

        <p className="mt-4 font-bold text-slate-900">
          Student Grade Calculator
        </p>

        <div className="mt-5 space-y-2 text-slate-700">

          <p className="flex items-center gap-2">
            <FaClock />
            Estimated Time: 30 minutes
          </p>

          <p>
            🎯 Difficulty: Intermediate
          </p>

          <p className="flex items-center gap-2">
            <FaTrophy className="text-yellow-500" />
            Reward: +50 Mastery Points
          </p>

        </div>

        <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700">
          Start Project
        </button>

      </div>

    </div>
  );
}