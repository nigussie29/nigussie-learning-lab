/**
 * SBLOS Progress Tracker
 * -----------------------------------
 * Maintains learner progress by course.
 */

import { loadProgress, saveProgress } from "./ProgressStorage";

function defaultProgress() {
  return {
    currentCourse: null,
    currentLesson: null,

    completedLessons: {},
    completedCourses: [],

    lessonScores: {},

    totalXP: 0,
    streak: 0,
    lastStudyDate: null,
  };
}

function isObject(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  );
}

function normalizeProgress(progress) {
  const defaults = defaultProgress();
  const savedProgress = isObject(progress) ? progress : {};

  return {
    ...defaults,
    ...savedProgress,

    completedLessons: isObject(savedProgress.completedLessons)
      ? savedProgress.completedLessons
      : {},

    completedCourses: Array.isArray(savedProgress.completedCourses)
      ? savedProgress.completedCourses
      : [],

    lessonScores: isObject(savedProgress.lessonScores)
      ? savedProgress.lessonScores
      : {},

    totalXP: Number.isFinite(savedProgress.totalXP)
      ? Math.max(0, savedProgress.totalXP)
      : 0,

    streak: Number.isFinite(savedProgress.streak)
      ? Math.max(0, savedProgress.streak)
      : 0,
  };
}

export function getProgress() {
  return normalizeProgress(loadProgress());
}

export function updateProgress(updates = {}) {
  const current = getProgress();

  const updated = normalizeProgress({
    ...current,
    ...(isObject(updates) ? updates : {}),
  });

  saveProgress(updated);

  return updated;
}

export function completeLesson(courseId, lessonId, score = 0) {
  if (!courseId || !lessonId) {
    console.warn(
      "completeLesson requires both courseId and lessonId."
    );

    return getProgress();
  }

  const progress = getProgress();

  const savedCourseLessons =
    progress.completedLessons[courseId];

  const courseLessons = Array.isArray(savedCourseLessons)
    ? savedCourseLessons
    : [];

  const alreadyCompleted = courseLessons.includes(lessonId);

  const completedLessons = alreadyCompleted
    ? courseLessons
    : [...courseLessons, lessonId];

  const normalizedScore = Number.isFinite(Number(score))
    ? Math.min(100, Math.max(0, Number(score)))
    : 0;

  const updatedProgress = {
    ...progress,

    currentCourse: courseId,
    currentLesson: lessonId,

    completedLessons: {
      ...progress.completedLessons,
      [courseId]: completedLessons,
    },

    lessonScores: {
      ...progress.lessonScores,
      [`${courseId}:${lessonId}`]: normalizedScore,
    },

    totalXP: alreadyCompleted
      ? progress.totalXP
      : progress.totalXP + 100,

    lastStudyDate: new Date().toISOString(),
  };

  saveProgress(updatedProgress);

  return updatedProgress;
}

export function getCompletedLessons(courseId) {
  if (!courseId) {
    return [];
  }

  const progress = getProgress();
  const completedLessons = progress.completedLessons[courseId];

  return Array.isArray(completedLessons)
    ? completedLessons
    : [];
}

export function getCourseProgress(courseId, totalLessons) {
  const lessonCount = Number(totalLessons);

  if (!courseId || !Number.isFinite(lessonCount) || lessonCount <= 0) {
    return 0;
  }

  const completedCount = getCompletedLessons(courseId).length;

  return Math.min(
    100,
    Math.round((completedCount / lessonCount) * 100)
  );
}

export function resetProgress() {
  const reset = defaultProgress();

  saveProgress(reset);

  return reset;
}