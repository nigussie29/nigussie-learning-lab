import MasteryEngine from "../mastery/MasteryPanel";

export default function MasteryCard({ mastery }) {
  return (
    <section>
      <MasteryEngine mastery={mastery} />
    </section>
  );
}