import InstructorLayout from "./InstructorLayout";
import InstructorSidebar from "./InstructorSidebar";
import InstructorHeader from "./InstructorHeader";

export default function InstructorWorkspace({
  title,
  name = "Nigussie",
  children,
}) {
  return (
    <InstructorLayout
      sidebar={<InstructorSidebar />}
      header={<InstructorHeader name={name} title={title} />}
    >
      {children}
    </InstructorLayout>
  );
}