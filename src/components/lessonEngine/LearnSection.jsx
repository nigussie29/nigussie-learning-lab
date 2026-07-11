export default function LearnSection({ learn }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📘</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Learn
          </h2>

          <p className="text-slate-500">
            Understand the concept
          </p>
        </div>
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {learn.title}
      </h3>

      <p className="mt-4 text-lg leading-8 text-slate-700">
        {learn.content}
      </p>

      <div className="mt-6 rounded-2xl bg-blue-50 p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          Formula
        </p>

        <p className="mt-2 text-xl font-extrabold text-slate-900">
          {learn.formula}
        </p>
      </div>
    </section>
  );
}