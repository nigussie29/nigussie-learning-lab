import { useNavigate } from "react-router-dom";

export default function ContinueLearningCard({ course }) {
  const navigate = useNavigate();

  const progress = course?.progress ?? 0;

  function handleResumeLesson() {
    const currentLesson = course?.lessons?.find(
      (lesson) => lesson.status === "current"
    );

    if (!currentLesson) {
      console.warn("No current lesson was found.", course);

      if (course?.id) {
        navigate(`/courses/${course.id}`);
      }

      return;
    }
console.log("Current Lesson:", currentLesson);
console.log("Navigating to:", currentLesson.path);
    navigate(currentLesson.path, {
      state: {
        courseId: course.id,
        lessonId: currentLesson.id,
        lessonTitle: currentLesson.title,
      },
    });
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-2xl text-white">
          ▶
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Continue Learning
          </h2>

          <p className="text-sm text-slate-500">
            Resume where you left off
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-slate-700">
            Lesson Progress
          </p>

          <span className="font-bold text-slate-900">
            {progress}%
          </span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          type="button"
          onClick={handleResumeLesson}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Resume Lesson
        </button>
      </div>
    </section>
  );
}