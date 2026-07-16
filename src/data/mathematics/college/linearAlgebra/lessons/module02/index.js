import lesson01 from "./lesson01";
import lesson02 from "./lesson02";
import lesson03 from "./lesson03";
import lesson04 from "./lesson04";
import lesson05 from "./lesson05";
import lesson06 from "./lesson06";
import lesson07 from "./lesson07";
import lesson08 from "./lesson08";

const module02Lessons = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
];

export function getModule02LessonById(id) {
  return module02Lessons.find((lesson) => lesson.id === id);
}

export function getModule02LessonBySlug(slug) {
  return module02Lessons.find((lesson) => lesson.slug === slug);
}

export function getModule02LessonByNumber(lessonNumber) {
  return module02Lessons.find(
    (lesson) => lesson.lessonNumber === Number(lessonNumber)
  );
}

export function getAvailableModule02Lessons() {
  return module02Lessons.filter(
    (lesson) => lesson.status === "Available"
  );
}

export default module02Lessons;