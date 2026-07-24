import variablesAndExpressions from "./data/algebra/variablesAndExpressions";
import introductionToPython from "./data/python/introductionToPython";

export const lessons = [
  variablesAndExpressions,
  introductionToPython,
];

export const lessonMap = lessons.reduce((map, lesson) => {
  map[lesson.slug] = lesson;
  return map;
}, {});

export const getLessonBySlug = (slug) => lessonMap[slug] || null;

export const getLessonsByCourse = (courseId) =>
  lessons.filter(
    (lesson) => lesson.metadata.courseId === courseId
  );