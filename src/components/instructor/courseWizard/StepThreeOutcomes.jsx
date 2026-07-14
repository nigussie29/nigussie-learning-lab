export default function StepThreeOutcomes({ value, onChange }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Step 3
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Learning Outcomes
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Define measurable outcomes that describe what learners will be able to
        understand, build, apply, research, and communicate by the end of the
        course.
      </p>

      <label
        htmlFor="learning-outcomes"
        className="mt-8 block font-bold text-slate-800"
      >
        Learning Outcomes
      </label>

      <textarea
        id="learning-outcomes"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={10}
        placeholder={`Example:

• Explain the mathematical foundations of matrices.

• Perform matrix multiplication accurately.

• Build a Python matrix calculator.

• Apply matrices to machine learning problems.

• Investigate how matrices are used in neural networks.

• Present research findings using technical communication.`}
        className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="text-lg font-extrabold text-slate-900">
            Strong Learning Outcomes
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Use measurable action verbs.</li>
            <li>Describe observable skills.</li>
            <li>Focus on learner performance.</li>
            <li>Support the course problem.</li>
            <li>Align with the Mastery Pyramid.</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="text-lg font-extrabold text-slate-900">
            Recommended Action Verbs
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            Explain • Analyze • Design • Build • Evaluate • Research • Create •
            Apply • Communicate • Lead
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">
          🤖 Luminery Tip
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          Great outcomes describe what learners can DO, not simply what they
          will study. If an outcome cannot be observed or assessed, rewrite it
          using a measurable action verb.
        </p>
      </div>
    </section>
  );
}