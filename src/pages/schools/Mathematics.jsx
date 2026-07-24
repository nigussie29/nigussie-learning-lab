import SchoolHero from "../../components/school/SchoolHero";
import ProgramCard from "../../components/school/ProgramCard";
import PathwayTimeline from "../../components/school/PathwayTimeline";

import { mathematicsSchool } from "../../data/schools/mathematics";

export default function Mathematics() {
  return (
    <>
      <SchoolHero {...mathematicsSchool.hero} />

      <PathwayTimeline
        steps={mathematicsSchool.pathway}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-4xl font-bold">
            Mathematics Programs
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {mathematicsSchool.programs.map((program) => (
              <ProgramCard
                key={program.title}
                {...program}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}