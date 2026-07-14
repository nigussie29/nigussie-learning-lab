import InstructorWorkspace from "../components/instructor/InstructorWorkspace";
import CourseBuilder from "../components/instructor/CourseBuilder";

export default function CourseBuilderPage() {
  return (
    <InstructorWorkspace title="Course Builder">
      <CourseBuilder />
    </InstructorWorkspace>
  );
}