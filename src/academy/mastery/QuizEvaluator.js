/**
 * SBLOS Quiz Evaluator
 * -----------------------------------
 * Calculates quiz scores and determines
 * whether a learner has passed.
 */

import { PassingScore } from "./masteryTypes";

export function evaluateQuiz(quiz = [], answers = []) {
  if (!quiz.length) {
    return {
      score: 0,
      correct: 0,
      total: 0,
      percentage: 0,
      passed: false,
    };
  }

  let correct = 0;

  quiz.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correct++;
    }
  });

  const total = quiz.length;

  const percentage = Math.round((correct / total) * 100);

  return {
    score: correct,
    correct,
    total,
    percentage,
    passed: percentage >= PassingScore,
  };
}