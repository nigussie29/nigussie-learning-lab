import { Link, useParams } from "react-router-dom";
import {
  completeLesson,
  getCompletedLessons,
} from "../../../academy/mastery/ProgressTracker";
import { getAlgebraOneLessonBySlug } from "../../../data/mathematics/highschool/algebraOne/lessons/index.js";
import { useState } from "react";

export default function AlgebraOneLesson() {
  const { lessonSlug } = useParams();

  const lesson = getAlgebraOneLessonBySlug(lessonSlug);

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

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Lesson header */}

      <section className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Module {lesson.moduleNumber}
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          {lesson.title}
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          {lesson.subtitle}
        </p>
      </section>

      {/* Lesson information and objectives */}

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Lesson Information
          </h2>

          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Lesson:</strong> {lesson.lessonNumber}
            </p>

            <p>
              <strong>Duration:</strong> {lesson.duration}
            </p>

            <p>
              <strong>Difficulty:</strong> {lesson.level}
            </p>

            <p>
              <strong>Status:</strong> {lesson.status}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Learning Objectives
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            {lesson.learningObjectives?.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Essential question and big idea */}

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-xl font-bold text-blue-900">
            Essential Question
          </h2>

          <p className="mt-3 text-gray-800">
            {lesson.essentialQuestion}
          </p>
        </div>

        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
          <h2 className="text-xl font-bold text-indigo-900">
            Big Idea
          </h2>

          <p className="mt-3 text-gray-800">
            {lesson.bigIdea}
          </p>
        </div>
      </section>

      {/* Warm-up */}

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          {lesson.warmUp?.title}
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          {lesson.warmUp?.prompts?.map((prompt, index) => (
            <li key={index}>{prompt}</li>
          ))}
        </ul>
      </section>

      {/* Vocabulary */}

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Vocabulary
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {lesson.vocabulary?.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-bold text-blue-700">
                {item.term}
              </h3>

              <p className="mt-2 text-gray-700">
                {item.definition}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Concept explanation */}

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          {lesson.conceptExplanation?.title}
        </h2>

        <p className="mt-3 text-gray-700">
          {lesson.conceptExplanation?.summary}
        </p>

        <h3 className="mt-5 text-lg font-bold text-gray-900">
          Teaching Notes
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700">
          {lesson.conceptExplanation?.teachingNotes?.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Worked examples */}

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Worked Examples
        </h2>

        <div className="mt-4 space-y-5">
          {lesson.workedExamples?.map((example, index) => (
            <article
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Example {index + 1}
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-900">
                {example.title}
              </h3>

              <p className="mt-3 font-medium text-gray-800">
                {example.problem}
              </p>

              <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-700">
                {example.solutionSteps?.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>

              <div className="mt-4 rounded-lg bg-green-50 p-4 text-green-900">
                <strong>Answer:</strong> {example.answer}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Guided practice */}

      <PracticeSection
        title="Guided Practice"
        questions={lesson.guidedPractice}
      />

      {/* Independent practice */}

      <PracticeSection
        title="Independent Practice"
        questions={lesson.independentPractice}
      />

      {/* Common mistakes */}

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Common Mistakes
        </h2>

        <div className="mt-4 space-y-4">
          {lesson.commonMistakes?.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-orange-200 bg-orange-50 p-5"
            >
              <p className="font-bold text-orange-900">
                Mistake: {item.mistake}
              </p>

              <p className="mt-2 text-gray-800">
                <strong>Correction:</strong> {item.correction}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Technology activity */}

      <section className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-6">
        <h2 className="text-2xl font-bold text-purple-900">
          {lesson.technologyActivity?.title}
        </h2>

        <p className="mt-2 text-gray-800">
          <strong>Tool:</strong> {lesson.technologyActivity?.tool}
        </p>

        <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-700">
          {lesson.technologyActivity?.instructions?.map(
            (instruction, index) => (
              <li key={index}>{instruction}</li>
            )
          )}
        </ol>
      </section>

      {/* Python lab */}

      <section className="mt-8 rounded-2xl bg-gray-900 p-6 text-white">
        <h2 className="text-2xl font-bold">
          {lesson.pythonLab?.title}
        </h2>

        <p className="mt-3 text-gray-300">
          {lesson.pythonLab?.objective}
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl bg-black p-5 text-sm">
          <code>{lesson.pythonLab?.code}</code>
        </pre>

        <h3 className="mt-5 text-lg font-bold">
          Reflection Questions
        </h3>

        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
          {lesson.pythonLab?.reflectionQuestions?.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </section>

      {/* Luminery guidance */}

      <section className="mt-8 rounded-2xl border border-yellow-300 bg-yellow-50 p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-yellow-800">
          Luminery Guidance
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900">
          {lesson.lumineryGuidance?.message}
        </h2>

        <p className="mt-3 text-gray-800">
          {lesson.lumineryGuidance?.prompt}
        </p>
      </section>

      {/* Creator challenge */}

      <section className="mt-8 rounded-2xl border border-blue-300 bg-blue-50 p-6">
        <h2 className="text-2xl font-bold text-blue-900">
          Creator Challenge
        </h2>

        <p className="mt-3 text-lg font-semibold text-gray-900">
          {lesson.creatorChallenge?.title}
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          {lesson.creatorChallenge?.requirements?.map(
            (requirement, index) => (
              <li key={index}>{requirement}</li>
            )
          )}
        </ul>
      </section>

      {/* Summary and reflection */}

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Lesson Summary
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            {lesson.summary?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Reflection
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            {lesson.reflection?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      {/* Lesson completion */}

<section
  className={`mt-10 rounded-2xl border p-6 ${
    isCompleted
      ? "border-emerald-300 bg-emerald-50"
      : "border-blue-200 bg-blue-50"
  }`}
>
  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
        Lesson Progress
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900">
        {isCompleted
          ? "Lesson completed!"
          : "Ready to complete this lesson?"}
      </h2>

      <p className="mt-2 text-gray-700">
        {isCompleted
          ? "Your progress and XP have been recorded."
          : "Complete the lesson after reviewing the material and activities."}
      </p>
    </div>

    <button
      type="button"
      onClick={handleCompleteLesson}
      disabled={isCompleted}
      className={`rounded-xl px-6 py-3 font-bold text-white transition ${
        isCompleted
          ? "cursor-not-allowed bg-emerald-600"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {isCompleted ? "✓ Completed" : "Complete Lesson"}
    </button>
  </div>
</section>

      {/* Navigation */}

      <section className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {lesson.previousLesson ? (
            <Link
              to={`/library/high-school/algebra-1/module/${lesson.previousLesson.moduleNumber}/lesson/${lesson.previousLesson.slug}`}
              className="inline-block rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800"
            >
              ← {lesson.previousLesson.title}
            </Link>
          ) : (
            <Link
              to={`/library/high-school/algebra-1/module/${lesson.moduleNumber}`}
              className="inline-block rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800"
            >
              ← Back to Module
            </Link>
          )}
        </div>

        <div>
          {lesson.nextLesson && (
            <Link
              to={`/library/high-school/algebra-1/module/${lesson.nextLesson.moduleNumber}/lesson/${lesson.nextLesson.slug}`}
              className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              {lesson.nextLesson.title} →
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}

function PracticeSection({ title, questions = [] }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900">
        {title}
      </h2>

      <div className="mt-4 space-y-4">
        {questions.map((item, index) => (
          <details
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer font-semibold text-gray-900">
              {index + 1}. {item.question}
            </summary>

            <p className="mt-4 rounded-lg bg-green-50 p-4 text-green-900">
              <strong>Answer:</strong> {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}