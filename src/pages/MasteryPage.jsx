import MasteryEngine from "../components/mastery/MasteryEngine";
import { studentMastery } from "../data/mastery/studentMastery";

export default function MasteryPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <MasteryEngine mastery={studentMastery} />
      </div>
    </main>
  );
}