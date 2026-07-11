export default function CareerConnection({ careers }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">💼</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Career Connection
          </h2>

          <p className="text-slate-500">
            Careers that use this skill
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {careers.map((career) => (
          <div
            key={career}
            className="rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {career}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}