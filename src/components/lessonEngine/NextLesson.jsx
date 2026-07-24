import { Link } from "react-router-dom";

export default function NextLesson({ lesson }) {
  const nextLesson = lesson?.nextLesson;

  if (!nextLesson?.slug) {
    return null;
  }

  return (
    <section className="rounded-3xl bg-blue-600 p-8 text-white">
      <p className="font-semibold text-blue-100">
        Continue Learning
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        Next Lesson
      </h2>

      <h3 className="mt-4 text-xl font-semibold">
        {nextLesson.title || "Continue to the next lesson"}
      </h3>

      {nextLesson.description && (
        <p className="mt-3 leading-7 text-blue-100">
          {nextLesson.description}
        </p>
      )}

      <Link
        to={`/lessons/${nextLesson.slug}`}
        className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-600 hover:bg-blue-50"
      >
        Continue →
      </Link>
    </section>
  );
}