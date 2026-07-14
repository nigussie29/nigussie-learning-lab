export default function StepOneProblem({ value, onChange }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Step 1
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        What problem does this course solve?
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Start with a real learner or industry problem. A strong course is built
        around meaningful outcomes, not only a list of topics.
      </p>

      <label
        htmlFor="course-problem"
        className="mt-8 block font-bold text-slate-800"
      >
        Problem statement
      </label>

      <textarea
        id="course-problem"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={7}
        placeholder="Example: Many beginners understand Python syntax but struggle to apply it to real educational problems."
        className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">
          🤖 Luminery Tip
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          Describe who experiences the problem, why it matters, and what should
          improve after the learner completes the course.
        </p>
      </div>
    </section>
  );
}