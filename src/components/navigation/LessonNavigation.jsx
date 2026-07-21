import { Link } from "react-router-dom";

function buildLessonUrl(coursePath, lesson) {
  if (!lesson) return "#";

  return `${coursePath}/module/${lesson.moduleNumber}/lesson/${lesson.slug}`;
}

export default function LessonNavigation({
  coursePath,
  previousLesson,
  nextLesson,
}) {
  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:justify-between"
    >
      <div>
        {previousLesson ? (
          <Link
            to={buildLessonUrl(coursePath, previousLesson)}
            className="inline-flex rounded-lg border px-4 py-3 font-medium hover:bg-gray-50"
          >
            ← {previousLesson.title}
          </Link>
        ) : (
          <span />
        )}
      </div>

      <div>
        {nextLesson && (
          <Link
            to={buildLessonUrl(coursePath, nextLesson)}
            className="inline-flex rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
          >
            {nextLesson.title} →
          </Link>
        )}
      </div>
    </nav>
  );
}