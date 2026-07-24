import SchoolCard from "../../components/ui/SchoolCard.jsx";
import { schools } from "../../data/schools.js";

export default function SchoolsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Academic Schools
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
            Choose Your School
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Enter a structured learning environment with programs, projects,
            research opportunities, and career preparation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {schools.map((school) => (
            <SchoolCard key={school.id} {...school} />
          ))}
        </div>
      </div>
    </section>
  );
}