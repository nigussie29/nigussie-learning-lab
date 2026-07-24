import { useState } from "react";
import { processLessonQuiz } from "../../academy/mastery";

export default function MasterSection({
    lesson,
    onProgressUpdate,
}) {
  const quiz = lesson?.master?.quiz || [];
  const passingScore = lesson?.master?.passingScore || 80;

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  if (!quiz.length) {
    return null;
  }

  const handleSelectAnswer = (questionIndex, optionIndex) => {
    if (result) {
      return;
    }

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: optionIndex,
    }));
  };

 const handleSubmit = () => {
  const submittedAnswers = quiz.map(
    (_, questionIndex) => answers[questionIndex]
  );

  const quizResult = processLessonQuiz(
    lesson,
    submittedAnswers
  );

  setResult(quizResult);

  // Refresh the progress bar after a successful quiz
  if (quizResult.passed && onProgressUpdate) {
    onProgressUpdate();
  }
};
  const handleRetry = () => {
    setAnswers({});
    setResult(null);
  };

  const answeredQuestions = Object.keys(answers).length;
  const allQuestionsAnswered =
    answeredQuestions === quiz.length;

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Master
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
            Check Your Understanding
          </h2>

          <p className="mt-3 text-slate-600">
            Answer every question and earn at least {passingScore}% to master
            this lesson.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700">
          {answeredQuestions} / {quiz.length} answered
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {quiz.map((question, questionIndex) => {
          const selectedAnswer = answers[questionIndex];
          const correctAnswer = question.correctAnswer;
          const hasSubmitted = Boolean(result);

          return (
            <article
              key={question.id || question.question}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h3 className="text-lg font-extrabold text-slate-900">
                {questionIndex + 1}. {question.question}
              </h3>

              <div className="mt-5 grid gap-3">
                {question.options?.map((option, optionIndex) => {
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
                      "border-green-600 bg-green-50 text-green-800";
                  }

                  if (isIncorrectSelection) {
                    optionStyles =
                      "border-red-600 bg-red-50 text-red-800";
                  }

                  return (
                    <button
                      key={`${question.id || questionIndex}-${optionIndex}`}
                      type="button"
                      disabled={hasSubmitted}
                      onClick={() =>
                        handleSelectAnswer(
                          questionIndex,
                          optionIndex
                        )
                      }
                      className={`rounded-xl border px-4 py-3 text-left font-semibold transition ${optionStyles}`}
                    >
                      <span className="mr-2">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>

                      {option}
                    </button>
                  );
                })}
              </div>

              {hasSubmitted && question.explanation && (
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
          Submit Quiz
        </button>
      ) : (
        <div
          className={`mt-8 rounded-2xl border p-6 ${
            result.passed
              ? "border-green-300 bg-green-50"
              : "border-amber-300 bg-amber-50"
          }`}
        >
          <h3 className="text-2xl font-extrabold text-slate-950">
            Quiz Result
          </h3>

          <p className="mt-3 text-lg font-bold text-slate-800">
            Score: {result.score} / {result.total}
          </p>

          <p className="mt-1 text-lg font-bold text-slate-800">
            Percentage: {result.percentage}%
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            {result.message}
          </p>

          {!result.passed && (
            <button
              type="button"
              onClick={handleRetry}
              className="mt-5 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Retry Quiz
            </button>
          )}
        </div>
      )}
    </section>
  );
}