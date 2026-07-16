import { useNavigate, useParams } from "react-router-dom";
import LessonViewer from "../../../components/library/LessonViewer";
import {
  getLinearAlgebraLessonBySlug,
  getLinearAlgebraLessonsByModule,
} from "../../../data/mathematics/college/linearAlgebra/lessons/index.js";

export default function LinearAlgebraLesson() {
  const navigate = useNavigate();
  const { moduleNumber, lessonSlug } = useParams();

  const lesson = getLinearAlgebraLessonBySlug(lessonSlug);

  const moduleLessons = getLinearAlgebraLessonsByModule(moduleNumber);

  const currentLessonIndex = moduleLessons.findIndex(
    (item) => item.slug === lessonSlug
  );

  const previousLesson =
    currentLessonIndex > 0
      ? moduleLessons[currentLessonIndex - 1]
      : null;

  const nextLesson =
    currentLessonIndex >= 0 &&
    currentLessonIndex < moduleLessons.length - 1
      ? moduleLessons[currentLessonIndex + 1]
      : null;

  function handleBackToModule() {
    navigate(`/library/college/linear-algebra/module/${moduleNumber}`);
  }

  function handlePrevious() {
    if (!previousLesson) return;

    navigate(
      `/library/college/linear-algebra/module/${moduleNumber}/lesson/${previousLesson.slug}`
    );
  }

  function handleNext() {
    if (!nextLesson) return;

    navigate(
      `/library/college/linear-algebra/module/${moduleNumber}/lesson/${nextLesson.slug}`
    );
  }

  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Linear Algebra
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-red-900">
            Lesson not found
          </h1>

          <p className="mt-4 leading-7 text-red-700">
            The lesson slug does not match any lesson in the Linear
            Algebra library.
          </p>

          <button
            type="button"
            onClick={handleBackToModule}
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-800"
          >
            Back to Module
          </button>
        </div>
      </main>
    );
  }

  return (
    <LessonViewer
      lesson={{
        ...lesson,
        previousLesson:
          lesson.previousLesson || previousLesson,
        nextLesson:
          lesson.nextLesson || nextLesson,
      }}
      onPrevious={handlePrevious}
      onNext={handleNext}
      onBackToModule={handleBackToModule}
    />
  );
}