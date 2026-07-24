export default function WhyItMatters({ text }) {
  if (!text || typeof text !== "object") {
    return null;
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {text.title || "Why It Matters"}
      </h2>

      {text.content && (
        <p className="mt-5 leading-8 text-slate-700">
          {text.content}
        </p>
      )}

      {text.examples?.length > 0 && (
        <ul className="mt-6 list-disc space-y-2 pl-6 text-slate-700">
          {text.examples.map((example, index) => (
            <li key={`${example}-${index}`}>
              {example}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}