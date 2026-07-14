import InstructorWorkspace from "../components/instructor/InstructorWorkspace";
import CourseWizard from "../components/instructor/courseWizard/CourseWizard";

export default function CreateCoursePage() {
  return (
    <InstructorWorkspace title="Create a New Course">
      <CourseWizard />
    </InstructorWorkspace>
  );
}