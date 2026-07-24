export default function AppliedMathematicsConnection({ lesson }) {
  const appliedMathematics = lesson?.appliedMathematics;

  if (!appliedMathematics) {
    return null;
  }

  const mainContent =
    appliedMathematics.content ||
    appliedMathematics.explanation ||
    appliedMathematics.concept ||
    appliedMathematics.foundation;

  const applications = appliedMathematics.applications || [];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {appliedMathematics.title ||
          "Applied Mathematics Connection"}
      </h2>

      {appliedMathematics.concept && (
        <h3 className="mt-5 text-lg font-bold text-slate-900">
          {appliedMathematics.concept}
        </h3>
      )}

      {mainContent && (
        <p className="mt-4 whitespace-pre-line leading-8 text-slate-700">
          {mainContent}
        </p>
      )}

      {applications.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold text-slate-900">
            Applications
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
            {applications.map((application, index) => (
              <li key={`${application}-${index}`}>
                {application}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}