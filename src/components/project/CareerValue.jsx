export default function CareerValue({ careers }) {
  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="text-4xl">💼</span>

        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Career Value
          </h2>

          <p className="text-slate-500">
            Skills employers will recognize
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {careers.map((career) => (
          <div
            key={career}
            className="rounded-2xl bg-green-50 p-5"
          >
            <p className="font-bold text-slate-900">
              💼 {career}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}