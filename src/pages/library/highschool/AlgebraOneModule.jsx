import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { getAlgebraOneModule } from "../../../data/mathematics/highschool/algebraOne/modules.js";

import { getAlgebraOneLessonsByModule } from "../../../data/mathematics/highschool/algebraOne/lessons/index.js";

export default function AlgebraOneModule() {
  const navigate = useNavigate();
  const { moduleNumber } = useParams();

  const module = getAlgebraOneModule(moduleNumber);
  const lessons = getAlgebraOneLessonsByModule(moduleNumber);

  function openLesson(lesson) {
    navigate(
      `/library/high-school/algebra-1/module/${module.moduleNumber}/lesson/${lesson.slug}`
    );
  }

  if (!module) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">
            Module not found
          </h1>

          <Link
            to="/library/high-school/algebra-1"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-bold text-white"
          >
            <ArrowLeft size={18} />
            Back to Algebra I
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Link
            to="/library/high-school/algebra-1"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-200 hover:text-white"
          >
            <ArrowLeft size={17} />
            Algebra I
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-100">
                <BookOpen size={17} />
                Module {module.moduleNumber}
              </div>

              <h1 className="mt-6 text-4xl font-black sm:text-5xl">
                {module.title}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {module.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                  {lessons.length} lessons
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                  <Clock3 size={16} />
                  {module.estimatedTime}
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                  {module.level}
                </span>
              </div>

              {lessons.length > 0 && (
                <button
                  type="button"
                  onClick={() => openLesson(lessons[0])}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-extrabold text-white hover:bg-blue-400"
                >
                  Start Module
                  <ArrowRight size={19} />
                </button>
              )}
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <h2 className="text-lg font-black">Learning outcomes</h2>

              <ul className="mt-5 space-y-4">
                {module.objectives?.map((objective) => (
                  <li
                    key={objective}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-200"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-emerald-400"
                    />
                    {objective}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-700">
            Learning sequence
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Module lessons
          </h2>
        </div>

        <div className="grid gap-5">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              type="button"
              onClick={() => openLesson(lesson)}
              className="group w-full rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-lg font-black text-blue-800">
                  {String(lesson.lessonNumber).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
                    Lesson {lesson.lessonNumber}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950 group-hover:text-blue-800">
                    {lesson.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {lesson.subtitle}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                      {lesson.duration}
                    </span>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      {lesson.status}
                    </span>
                  </div>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <ArrowRight size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}