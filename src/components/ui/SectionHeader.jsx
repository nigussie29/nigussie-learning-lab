export default function SectionHeader({
  label,
  title,
  description,
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        {label}
      </p>

      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}