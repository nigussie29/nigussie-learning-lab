import module01Lessons from "./module01/index.js";
import module02Lessons from "./module02/index.js";
import module03Lessons from "./module03/index.js";

const linearAlgebraLessons = [
  ...module01Lessons,
  ...module02Lessons,
  ...module03Lessons,
];

export function getLinearAlgebraLessonById(id) {
  return linearAlgebraLessons.find((lesson) => lesson.id === id);
}

export function getLinearAlgebraLessonBySlug(slug) {
  return linearAlgebraLessons.find((lesson) => lesson.slug === slug);
}

export function getLinearAlgebraLessonsByModule(moduleNumber) {
  return linearAlgebraLessons.filter(
    (lesson) => lesson.moduleNumber === Number(moduleNumber)
  );
}

export default linearAlgebraLessons;