export default function DashboardHeader() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Student Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Track your learning journey, celebrate milestones, and continue
            building mastery.
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">Today</p>

          <p className="font-semibold text-lg">
            {today}
          </p>
        </div>
      </div>
    </div>
  );
}