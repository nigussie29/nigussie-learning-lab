import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaClock, FaCode, FaFileAlt, FaQuestionCircle } from "react-icons/fa";
import VideoPlayer from "../components/VideoPlayer";
import { lessons } from "../data/lessons";
import { courses } from "../data/courses";
import LumineryTutor from "../components/LumineryTutor";
export default function LessonPage() {
  const { lessonId } = useParams();

  const lesson = lessons.find((item) => String(item.id) === String(lessonId));
  const course = courses.find((item) => item.id === lesson?.courseId);

  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Lesson not found</h1>
        <Link to="/courses" className="mt-6 inline-block font-bold text-blue-600">
          Back to Courses
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Link to={`/courses/${course?.id}`} className="font-bold text-blue-600">
          ← Back to Course
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              {course?.title}
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-slate-950">
              Lesson {lesson.lessonNumber}: {lesson.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-slate-600">
              <FaClock /> {lesson.duration}
            </p>

            <div className="mt-8">
              <VideoPlayer src={lesson.video} title={lesson.title} />
            </div>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-3 text-2xl font-extrabold text-slate-900">
                <FaFileAlt className="text-blue-600" />
                Lesson Notes
              </h2>

              <p className="mt-5 whitespace-pre-line leading-8 text-slate-700">
                {lesson.notes}
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-950 p-8 shadow-sm">
              <h2 className="flex items-center gap-3 text-2xl font-extrabold text-white">
                <FaCode className="text-blue-400" />
                Code Example
              </h2>

              <pre className="mt-5 overflow-x-auto rounded-2xl bg-black p-5 text-sm text-green-400">
                <code>{lesson.code}</code>
              </pre>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-3 text-2xl font-extrabold text-slate-900">
                <FaQuestionCircle className="text-blue-600" />
                Quick Quiz
              </h2>

              {lesson.quiz.map((q, index) => (
                <div key={q.question} className="mt-6">
                  <p className="font-bold text-slate-900">
                    {index + 1}. {q.question}
                  </p>

                  <div className="mt-4 grid gap-3">
                    {q.options.map((option, optionIndex) => (
                      <button
                        key={option}
                        className="rounded-xl border border-slate-200 px-4 py-3 text-left font-medium text-slate-700 hover:border-blue-600 hover:bg-blue-50"
                      >
                        {optionIndex + 1}. {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="h-fit rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Course Progress
            </h2>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[20%] rounded-full bg-blue-600"></div>
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-600">
              20% completed
            </p>

            <div className="mt-8">
              <h3 className="font-extrabold text-slate-900">Lesson List</h3>

              <div className="mt-4 space-y-3">
                {lessons
                  .filter((item) => item.courseId === lesson.courseId)
                  .map((item) => (
                    <Link
                      key={item.id}
                      to={`/lessons/${item.id}`}
                      className={`flex items-center gap-3 rounded-xl border p-4 font-semibold ${
                        item.id === lesson.id
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-200 text-slate-700 hover:border-blue-600"
                      }`}
                    >
                      <FaCheckCircle />
                      Lesson {item.lessonNumber}: {item.title}
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              to="/dashboard"
              className="mt-8 block rounded-xl bg-blue-600 py-3 text-center font-bold text-white hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>
            <div className="mt-8">
           <LumineryTutor
             courseTitle={course?.title}
              lessonTitle={lesson.title}
    
             />
           </div>
          </aside>
        </div>
      </div>
    </main>
  );
}