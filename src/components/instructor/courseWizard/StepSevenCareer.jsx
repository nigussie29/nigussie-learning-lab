export default function StepSevenCareer({ value, onChange }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Step 7
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        How does this course connect to careers?
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Explain how the course prepares learners for professional roles,
        research opportunities, entrepreneurship, and continued education.
      </p>

      <label
        htmlFor="career-connection"
        className="mt-8 block font-bold text-slate-800"
      >
        Career connection
      </label>

      <textarea
        id="career-connection"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={8}
        placeholder={`Example:

This course prepares learners for roles such as:

Machine Learning Engineer
Data Scientist
Robotics Engineer
Computer Vision Engineer
AI Research Assistant

Learners will demonstrate skills in linear algebra, Python, problem solving, mathematical modeling, technical communication, and research.`}
        className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="text-lg font-extrabold text-slate-900">
            Career roles
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            Identify the jobs, internships, research positions, or business
            opportunities connected to the course.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="text-lg font-extrabold text-slate-900">
            Professional evidence
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            Describe the projects, skills, research, and portfolio evidence
            learners can show to employers or institutions.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">
          🤖 Luminery Tip
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          Avoid listing careers without explanation. Connect each role to the
          skills learners will master and the evidence they will create.
        </p>
      </div>
    </section>
  );
}