export default function StepSixResearch({ value, onChange }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Step 6
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Research Extension
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Every SkillBridge course should inspire curiosity. Design a research
        activity that encourages learners to investigate, analyze evidence,
        and discover new ideas.
      </p>

      <label
        htmlFor="research-extension"
        className="mt-8 block font-bold text-slate-800"
      >
        Research Challenge
      </label>

      <textarea
        id="research-extension"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={8}
        placeholder={`Example:

Investigate how matrix multiplication is used inside neural networks.

Research at least three AI applications.

Compare computational complexity for different matrix sizes.

Present your findings with references and visualizations.`}
        className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="text-lg font-extrabold text-slate-900">
            Research Goals
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Ask meaningful questions</li>
            <li>Collect evidence</li>
            <li>Analyze findings</li>
            <li>Draw conclusions</li>
            <li>Communicate discoveries</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <h3 className="text-lg font-extrabold text-slate-900">
            Deliverables
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Research Report</li>
            <li>Presentation</li>
            <li>Data Visualization</li>
            <li>Reflection</li>
            <li>References</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">
          🤖 Luminery Tip
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          Research is about discovering answers to meaningful questions—not
          simply searching the internet. Encourage learners to evaluate sources,
          compare ideas, and develop evidence-based conclusions.
        </p>
      </div>
    </section>
  );
}