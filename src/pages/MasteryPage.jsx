import MasteryPanel from "../components/mastery/MasteryPanel";
import { studentMastery } from "../data/mastery/studentMastery";

export default function MasteryPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <MasteryPanel mastery={studentMastery} />
      </div>
    </main>
  );
}