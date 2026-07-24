export default function ApplySection({ apply }) {
  if (!apply || typeof apply !== "object") {
    return null;
  }

  return (
    <section>
      {apply.eyebrow && <p>{apply.eyebrow}</p>}
      {apply.title && <h2>{apply.title}</h2>}
    </section>
  );
}