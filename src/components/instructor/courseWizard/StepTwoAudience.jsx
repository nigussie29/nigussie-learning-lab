export default function StepTwoAudience({ value, onChange }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Step 2
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Who is this course for?
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Define the learners clearly so the course can match their background,
        goals, challenges, and expected outcomes.
      </p>

      <label
        htmlFor="course-audience"
        className="mt-8 block font-bold text-slate-800"
      >
        Target audience
      </label>

      <textarea
        id="course-audience"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={7}
        placeholder="Example: Career changers with basic computer skills who want to learn Python for data analysis and automation."
        className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">
          🤖 Luminery Tip
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          Describe the learner&apos;s current level, goals, common obstacles,
          and what success should look like after completing the course.
        </p>
      </div>
    </section>
  );
}