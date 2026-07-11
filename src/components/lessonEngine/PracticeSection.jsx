export default function PracticeSection({ practice }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">📝</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Practice
          </h2>

          <p className="text-slate-500">
            Work through guided steps
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {practice.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              {index + 1}
            </div>

            <p className="font-medium text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}