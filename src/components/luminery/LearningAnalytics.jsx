import {
  FaBookOpen,
  FaCode,
  FaClock,
  FaChartLine,
  FaFire,
} from "react-icons/fa";

const analytics = [
  {
    icon: <FaBookOpen className="text-2xl text-blue-600" />,
    title: "Courses Completed",
    value: "4",
  },
  {
    icon: <FaCode className="text-2xl text-green-600" />,
    title: "Projects Built",
    value: "3",
  },
  {
    icon: <FaClock className="text-2xl text-yellow-500" />,
    title: "Study Time",
    value: "12.5 hrs",
  },
  {
    icon: <FaChartLine className="text-2xl text-purple-600" />,
    title: "Average Score",
    value: "92%",
  },
  {
    icon: <FaFire className="text-2xl text-red-500" />,
    title: "Current Streak",
    value: "7 Days",
  },
];

export default function LearningAnalytics() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        Learning Analytics
      </h2>

      <p className="mt-2 text-slate-600">
        Track your overall learning performance.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {analytics.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 p-5 text-center"
          >
            <div className="flex justify-center">{item.icon}</div>

            <p className="mt-3 text-sm text-slate-500">{item.title}</p>

            <p className="mt-2 text-3xl font-extrabold text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}