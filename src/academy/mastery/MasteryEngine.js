/**
 * SBLOS Mastery Engine
 * -----------------------------------
 * Coordinates quiz evaluation,
 * mastery determination,
 * and learner progress.
 */

import { evaluateQuiz } from "./QuizEvaluator";
import { completeLesson } from "./ProgressTracker";

export function processLessonQuiz(lesson, answers = []) {
  const result = evaluateQuiz(
    lesson.master?.quiz || [],
    answers
  );

 if (result.passed) {
  completeLesson(
    lesson.metadata.courseId,
    lesson.slug,
    result.percentage
  );
}
  return {
    lessonSlug: lesson.slug,
    lessonTitle: lesson.metadata.title,

    score: result.score,
    total: result.total,
    percentage: result.percentage,

    passed: result.passed,

    message: result.passed
      ? "Congratulations! Lesson mastered."
      : "Keep practicing and try again.",

    unlockNextLesson: result.passed,
  };
}