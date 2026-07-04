import { FaLightbulb, FaRocket, FaClock, FaTrophy } from "react-icons/fa";

export default function GuidanceCard({ scores }) {
  const defaultScores = {
    learn: 100,
    practice: 80,
    build: 60,
    master: 40,
    apply: 20,
  };

  const masteryScores = scores || defaultScores;

  const weakestStage = Object.entries(masteryScores).sort(
    (a, b) => a[1] - b[1]
  )[0][0];

  const guidanceMap = {
    learn: {
      message: "Review the lesson concepts before moving forward.",
      project: "Python Concepts Review",
      time: "20 minutes",
      difficulty: "Beginner",
      reward: "+20 Mastery Points",
    },
    practice: {
      message:
        "Strengthen your understanding by completing guided practice exercises.",
      project: "Python Practice Challenge",
      time: "25 minutes",
      difficulty: "Beginner",
      reward: "+30 Mastery Points",
    },
    build: {
      message:
        "Your next challenge is to build your first real-world Python project.",
      project: "Student Grade Calculator",
      time: "30 minutes",
      difficulty: "Intermediate",
      reward: "+50 Mastery Points",
    },
    master: {
      message:
        "You are ready to test your understanding with a mastery assessment.",
      project: "Python Mastery Quiz",
      time: "20 minutes",
      difficulty: "Intermediate",
      reward: "+75 Mastery Points",
    },
    apply: {
      message:
        "Apply your skills in a real-world scenario to strengthen long-term mastery.",
      project: "Real-World Student Tracker",
      time: "45 minutes",
      difficulty: "Advanced",
      reward: "+100 Mastery Points",
    },
  };

  const guidance = guidanceMap[weakestStage];

  return (
    <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <FaLightbulb className="text-3xl text-blue-600" />

        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Luminery Guidance
          </h2>

          <p className="text-sm text-slate-600">Your AI Mastery Mentor</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5">
        <h3 className="text-xl font-bold">Hello, Nigussie 👋</h3>

        <p className="mt-4 leading-7 text-slate-700">Excellent progress!</p>

        <p className="mt-3 leading-7 text-slate-700">
          You are building mastery step by step through Learn, Practice, Build,
          Master, and Apply.
        </p>

        <p className="mt-3 leading-7 text-slate-700">{guidance.message}</p>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5">
        <h3 className="flex items-center gap-2 text-xl font-bold">
          <FaRocket className="text-blue-600" />
          Next Project
        </h3>

        <p className="mt-4 font-bold text-slate-900">{guidance.project}</p>

        <div className="mt-5 space-y-2 text-slate-700">
          <p className="flex items-center gap-2">
            <FaClock />
            Estimated Time: {guidance.time}
          </p>

          <p>🎯 Difficulty: {guidance.difficulty}</p>

          <p className="flex items-center gap-2">
            <FaTrophy className="text-yellow-500" />
            Reward: {guidance.reward}
          </p>
        </div>

        <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700">
          Start Project
        </button>
      </div>
    </div>
  );
}