export default function CareerConnection({ lesson }) {
  const careerConnection = lesson?.careerConnection;

  if (!careerConnection) {
    return null;
  }

  const careers = careerConnection.careers || [];
  const skills = careerConnection.skills || [];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {careerConnection.title || "Career Connection"}
      </h2>

      {careerConnection.description && (
        <p className="mt-5 leading-8 text-slate-700">
          {careerConnection.description}
        </p>
      )}

      {careers.length > 0 && (
        <>
          <h3 className="mt-6 font-bold text-slate-900">
            Careers
          </h3>

          <div className="mt-3 flex flex-wrap gap-3">
            {careers.map((career, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
              >
                {career}
              </span>
            ))}
          </div>
        </>
      )}

      {skills.length > 0 && (
        <>
          <h3 className="mt-8 font-bold text-slate-900">
            Skills
          </h3>

          <ul className="mt-3 list-disc pl-6 text-slate-700">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}