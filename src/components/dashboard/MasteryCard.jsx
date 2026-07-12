import MasteryEngine from "../mastery/MasteryEngine";

export default function MasteryCard({ mastery }) {
  return (
    <section>
      <MasteryEngine mastery={mastery} />
    </section>
  );
}