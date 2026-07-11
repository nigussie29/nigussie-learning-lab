import CourseTemplate from "../components/course/CourseTemplate";
import { linearAlgebraCourse } from "../data/courses/linearAlgebraCourse";

export default function LinearAlgebraCoursePage() {
  return <CourseTemplate course={linearAlgebraCourse} />;
}