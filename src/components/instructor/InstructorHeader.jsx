export default function InstructorHeader({
  name = "Instructor",
  title = "Instructor Command Center",
}) {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-5 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            SkillBridge Academy
          </p>

          <h1 className="mt-1 text-2xl font-extrabold text-slate-900">
            {title}
          </h1>
        </div>

        <div className="rounded-xl bg-slate-100 px-4 py-3">
          <p className="text-sm text-slate-500">Signed in as</p>

          <p className="font-bold text-slate-900">
            {name}
          </p>
        </div>
      </div>
    </header>
  );
}