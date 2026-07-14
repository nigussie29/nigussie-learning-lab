import InstructorWorkspace from "../components/instructor/InstructorWorkspace";
import AssessmentBuilder from "../components/instructor/AssessmentBuilder";

export default function AssessmentBuilderPage() {
  return (
    <InstructorWorkspace title="Assessment Builder">
      <AssessmentBuilder />
    </InstructorWorkspace>
  );
}