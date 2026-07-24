import { getProgress } from "../../academy/mastery";

export default function CourseProgress({
  courseId,
  courseLessons = [],
  refreshKey,
}) {
  const progress = getProgress();

  // Get completed lessons for this course
  const completedLessons =
    progress.completedLessons?.[courseId] ?? [];

  const completed = courseLessons.filter((lesson) =>
    completedLessons.includes(lesson.slug)
  ).length;

  const total = courseLessons.length;

  const percentage =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <>
      <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-600">
        {completed} of {total} lessons completed ({percentage}%)
      </p>

      <div className="mt-5 rounded-xl bg-slate-100 p-4">
        <p className="font-bold text-slate-900">XP Earned</p>

        <p className="mt-2 text-2xl font-extrabold text-blue-700">
          {progress.totalXP}
        </p>
      </div>
    </>
  );
}