import { useEffect, useMemo, useState } from "react";
import { processLessonQuiz } from "../../academy/mastery";

export default function MasterSection({
  lesson,
  onProgressUpdate,
}) {
  const quiz = lesson?.master?.quiz ?? [];
  const passingScore = lesson?.master?.passingScore ?? 80;

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  /*
   * Reset the quiz when the student navigates
   * from one lesson to another.
   */
  useEffect(() => {
    setAnswers({});
    setResult(null);
  }, [lesson?.id, lesson?.slug]);

  const answeredQuestions = Object.keys(answers).length;

  const allQuestionsAnswered = useMemo(
    () =>
      quiz.length > 0 &&
      quiz.every((_, questionIndex) =>
        Object.prototype.hasOwnProperty.call(
          answers,
          questionIndex
        )
      ),
    [answers, quiz]
  );

  if (!quiz.length) {
    return null;
  }

  const handleSelectAnswer = (
    questionIndex,
    optionIndex
  ) => {
    if (result) {
      return;
    }

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    if (!allQuestionsAnswered) {
      return;
    }

    const submittedAnswers = quiz.map(
      (_, questionIndex) => answers[questionIndex]
    );

    const quizResult = processLessonQuiz(
      lesson,
      submittedAnswers
    );

    setResult(quizResult);

    if (
      quizResult?.passed &&
      typeof onProgressUpdate === "function"
    ) {
      onProgressUpdate(quizResult);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setResult(null);
  };

  return (
    <section
      className="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="master-section-title"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Master
          </p>

          <h2
            id="master-section-title"
            className="mt-2 text-3xl font-extrabold text-slate-950"
          >
            Check Your Understanding
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Answer every question and earn at least{" "}
            <strong>{passingScore}%</strong> to master this
            lesson.
          </p>
        </div>

        <div
          className="shrink-0 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700"
          aria-live="polite"
        >
          {answeredQuestions} / {quiz.length} answered
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {quiz.map((question, questionIndex) => {
          const selectedAnswer =
            answers[questionIndex];

          const correctAnswer =
            question.correctAnswer;

          const hasSubmitted = result !== null;

          return (
            <article
              key={
                question.id ??
                `${question.question}-${questionIndex}`
              }
              className="rounded-2xl border border-slate-200 p-5 sm:p-6"
            >
              <fieldset>
                <legend className="text-lg font-extrabold text-slate-900">
                  {questionIndex + 1}.{" "}
                  {question.question}
                </legend>

                <div className="mt-5 grid gap-3">
                  {question.options?.map(
                    (option, optionIndex) => {
                      const isSelected =
                        selectedAnswer === optionIndex;

                      const isCorrect =
                        hasSubmitted &&
                        optionIndex === correctAnswer;

                      const isIncorrectSelection =
                        hasSubmitted &&
                        isSelected &&
                        optionIndex !== correctAnswer;

                      let optionStyles =
                        "border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:bg-blue-50";

                      if (!hasSubmitted && isSelected) {
                        optionStyles =
                          "border-blue-600 bg-blue-50 text-blue-800";
                      }

                      if (isCorrect) {
                        optionStyles =
                          "border-emerald-600 bg-emerald-50 text-emerald-800";
                      }

                      if (isIncorrectSelection) {
                        optionStyles =
                          "border-red-600 bg-red-50 text-red-800";
                      }

                      return (
                        <button
                          key={`${question.id ?? questionIndex}-${optionIndex}`}
                          type="button"
                          disabled={hasSubmitted}
                          aria-pressed={isSelected}
                          onClick={() =>
                            handleSelectAnswer(
                              questionIndex,
                              optionIndex
                            )
                          }
                          className={`rounded-xl border px-4 py-3 text-left font-semibold transition disabled:cursor-default ${optionStyles}`}
                        >
                          <span className="mr-2">
                            {String.fromCharCode(
                              65 + optionIndex
                            )}
                            .
                          </span>

                          {option}

                          {isCorrect && (
                            <span className="ml-2">
                              ✓ Correct
                            </span>
                          )}

                          {isIncorrectSelection && (
                            <span className="ml-2">
                              ✕ Your answer
                            </span>
                          )}
                        </button>
                      );
                    }
                  )}
                </div>
              </fieldset>

              {hasSubmitted &&
                question.explanation && (
                  <div className="mt-5 rounded-xl bg-slate-100 p-4">
                    <p className="font-bold text-slate-900">
                      Explanation
                    </p>

                    <p className="mt-2 leading-7 text-slate-700">
                      {question.explanation}
                    </p>
                  </div>
                )}
            </article>
          );
        })}
      </div>

      {!result ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!allQuestionsAnswered}
          className={`mt-8 w-full rounded-xl py-4 font-bold text-white transition ${
            allQuestionsAnswered
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-slate-400"
          }`}
        >
          {allQuestionsAnswered
            ? "Submit Mastery Quiz"
            : `Answer all ${quiz.length} questions`}
        </button>
      ) : (
        <div
          aria-live="polite"
          className={`mt-8 rounded-2xl border p-6 ${
            result.passed
              ? "border-emerald-300 bg-emerald-50"
              : "border-amber-300 bg-amber-50"
          }`}
        >
          <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
            Quiz Result
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
            {result.passed
              ? "Lesson Mastered!"
              : "Keep Practicing"}
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            <div className="rounded-xl bg-white px-4 py-3 font-bold text-slate-800 shadow-sm">
              Score: {result.score} / {result.total}
            </div>

            <div className="rounded-xl bg-white px-4 py-3 font-bold text-slate-800 shadow-sm">
              Mastery: {result.percentage}%
            </div>

            <div className="rounded-xl bg-white px-4 py-3 font-bold text-slate-800 shadow-sm">
              Required: {passingScore}%
            </div>
          </div>

          {result.message && (
            <p className="mt-5 leading-7 text-slate-700">
              {result.message}
            </p>
          )}

          {!result.passed && (
            <button
              type="button"
              onClick={handleRetry}
              className="mt-5 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Review and Retry
            </button>
          )}
        </div>
      )}
    </section>
  );
}