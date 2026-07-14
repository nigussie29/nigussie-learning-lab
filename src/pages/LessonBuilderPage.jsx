import InstructorWorkspace from "../components/instructor/InstructorWorkspace";
import LessonBuilder from "../components/instructor/LessonBuilder";

export default function LessonBuilderPage() {
  return (
    <InstructorWorkspace title="Lesson Builder">
      <LessonBuilder />
    </InstructorWorkspace>
  );
}