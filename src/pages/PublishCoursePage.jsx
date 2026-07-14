import { useState } from "react";

import InstructorWorkspace from "../components/instructor/InstructorWorkspace";
import PublishCourseCard from "../components/instructor/PublishCourseCard";

const publishingChecklist = {
  problem: true,
  audience: true,
  outcomes: true,
  modules: true,
  lessons: true,
  assessment: true,
  research: true,
  portfolio: true,
};

export default function PublishCoursePage() {
  const [published, setPublished] = useState(false);

  function handlePublish() {
    setPublished(true);

    console.log("Course published");
  }

  return (
    <InstructorWorkspace title="Publish Course">
      <div className="space-y-8">
        <PublishCourseCard
          courseTitle="Linear Algebra Foundations"
          status={published ? "Published" : "Ready for Review"}
          checklist={publishingChecklist}
          onPublish={handlePublish}
        />

        {published && (
          <section className="rounded-3xl bg-green-50 p-8">
            <h2 className="text-2xl font-extrabold text-green-800">
              Course published successfully
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Linear Algebra Foundations is now ready for SkillBridge Academy
              learners.
            </p>
          </section>
        )}
      </div>
    </InstructorWorkspace>
  );
}