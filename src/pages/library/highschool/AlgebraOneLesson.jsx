import { Link, useParams } from "react-router-dom";

import LessonTemplate from "../../../components/lessonEngine/LessonTemplate.jsx";
import { adaptLessonForEngine } from "../../../adapters/lessonAdapter.js";

import { getAlgebraOneLessonBySlug } from "../../../data/mathematics/highschool/algebraOne/lessons/index.js";

export default function AlgebraOneLesson() {
  const { lessonSlug } = useParams();

  const rawLesson = getAlgebraOneLessonBySlug(lessonSlug);
  const lesson = adaptLessonForEngine(rawLesson);

  if (!lesson) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
          <h1 className="text-3xl font-bold text-red-700">
            Lesson Not Found
          </h1>

          <p className="mt-3 text-gray-700">
            The requested Algebra I lesson could not be found.
          </p>

          <Link
            to="/library/high-school/algebra-1"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
          >
            Back to Algebra I
          </Link>
        </div>
      </main>
    );
  }

  return <LessonTemplate lesson={lesson} />;
}