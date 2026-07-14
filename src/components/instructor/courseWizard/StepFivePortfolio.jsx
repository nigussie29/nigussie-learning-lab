export default function StepFivePortfolio({ value, onChange }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Step 5
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        What will learners build for their portfolio?
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Define a meaningful artifact that demonstrates real capability.
      </p>

      <label
        htmlFor="portfolio-project"
        className="mt-8 block font-bold text-slate-800"
      >
        Portfolio project
      </label>

      <textarea
        id="portfolio-project"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={7}
        placeholder="Example: Build and document a Python matrix calculator that performs multiplication, validates dimensions, and explains each calculation."
        className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">
          🤖 Luminery Tip
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          The project should solve a real problem and produce evidence such as
          code, reports, dashboards, presentations, or research findings.
        </p>
      </div>
    </section>
  );
}