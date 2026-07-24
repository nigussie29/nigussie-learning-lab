export default function LessonHero({ lesson }) {
  if (!lesson || typeof lesson !== "object") {
    return null;
  }

  const metadata = lesson.metadata ?? {};
  const hero = lesson.hero ?? {};

  if (!hero.title) {
    return null;
  }

  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
      {hero.eyebrow && (
        <p className="font-bold text-blue-200">
          {hero.eyebrow}
        </p>
      )}

      <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
        {hero.title}
      </h1>

      {hero.subtitle && (
        <h2 className="mt-3 text-xl font-semibold text-blue-100">
          {hero.subtitle}
        </h2>
      )}

      {hero.description && (
        <p className="mt-5 max-w-3xl leading-8 text-blue-100">
          {hero.description}
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold">
        {metadata.subject && <span>{metadata.subject}</span>}
        {metadata.level && <span>{metadata.level}</span>}
        {metadata.duration && <span>{metadata.duration}</span>}
        {metadata.moduleTitle && (
          <span>{metadata.moduleTitle}</span>
        )}
      </div>
    </section>
  );
}