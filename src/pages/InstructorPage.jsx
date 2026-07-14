import InstructorLayout from "../components/instructor/InstructorLayout";
import InstructorSidebar from "../components/instructor/InstructorSidebar";
import InstructorHeader from "../components/instructor/InstructorHeader";
import InstructorDashboard from "../components/instructor/InstructorDashboard";

export default function InstructorPage() {
  return (
    <InstructorLayout
      sidebar={<InstructorSidebar />}
      header={
        <InstructorHeader
          name="Nigussie"
          title="Instructor Command Center"
        />
      }
    >
      <InstructorDashboard />
    </InstructorLayout>
  );
}