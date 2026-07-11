export default function NextLesson({ lesson }) {
  return (
    <section className="mt-8 rounded-3xl bg-gradient-to-r from-indigo-700 to-blue-700 p-8 text-white">
      <h2 className="text-3xl font-extrabold">
        🚀 Next Mission
      </h2>

      <p className="mt-4 text-lg text-blue-100">
        Continue your learning journey with:
      </p>

      <div className="mt-6 rounded-2xl bg-white/10 p-6">
        <h3 className="text-2xl font-bold">
          {lesson}
        </h3>
      </div>
    </section>
  );
}