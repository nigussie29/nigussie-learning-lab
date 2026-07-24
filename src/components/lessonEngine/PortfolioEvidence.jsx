export default function PortfolioEvidence({ lesson }) {
  const portfolioEvidence = lesson?.portfolioEvidence;

  if (
    !portfolioEvidence ||
    portfolioEvidence.enabled === false
  ) {
    return null;
  }

  const title =
    portfolioEvidence.title || "Portfolio Evidence";

  const description =
    portfolioEvidence.description ||
    portfolioEvidence.artifact;

  const skills =
    portfolioEvidence.skillsDemonstrated ||
    portfolioEvidence.skills ||
    [];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-slate-700">
          {description}
        </p>
      )}

      {skills.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold text-slate-900">
            Skills Demonstrated
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
            {skills.map((skill, index) => (
              <li key={`${skill}-${index}`}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}