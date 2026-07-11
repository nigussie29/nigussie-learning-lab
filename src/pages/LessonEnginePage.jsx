import LessonTemplate from "../components/lessonEngine/LessonTemplate";
import { linearAlgebraLessons } from "../data/lessons/linearAlgebraLessons";

export default function LessonEnginePage() {
  const lesson = linearAlgebraLessons[0];

  return <LessonTemplate lesson={lesson} />;
}