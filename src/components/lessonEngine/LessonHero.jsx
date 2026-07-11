export default function LessonHero({ lesson }) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
      <p className="font-bold text-blue-200">
        {lesson.subject}
      </p>

      <h1 className="mt-3 text-5xl font-extrabold">
        {lesson.title}
      </h1>

      <p className="mt-4 max-w-3xl text-blue-100">
        {lesson.whyItMatters}
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold">
        <span>{lesson.level}</span>
        <span>{lesson.duration}</span>
        <span>+{lesson.masteryPoints} Mastery Points</span>
      </div>
    </section>
  );
}