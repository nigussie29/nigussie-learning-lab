import { Link } from "react-router-dom";
import {
  PlayCircle,
  BookOpen,
  Code2,
  CheckCircle,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function LessonPage() {
  const progress = 10;

  return (
    <section className="section py-16">
      <Link
        to="/courses/python-for-beginners"
        className="inline-flex items-center font-semibold text-blue-600"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Course
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Python for Beginners
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900">
            Lesson 1: Introduction to Python
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            In this lesson, you will understand what Python is, why it is useful,
            and how it connects to data analytics, artificial intelligence, and
            real-world problem solving.
          </p>

          <div className="mt-8 aspect-video rounded-3xl bg-slate-900 p-6 text-white">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <PlayCircle size={64} className="text-blue-300" />
              <h2 className="mt-4 text-2xl font-bold">Lesson Video</h2>
              <p className="mt-2 text-slate-300">
                Video player placeholder — later we connect YouTube, Vimeo, or
                Supabase Storage.
              </p>
            </div>
          </div>

          <div className="mt-10 card p-8">
            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-600" />
              <h2 className="text-2xl font-bold">Lesson Notes</h2>
            </div>

            <p className="mt-5 leading-8 text-slate-600">
              Python is a beginner-friendly programming language used for web
              development, automation, data analysis, machine learning, artificial
              intelligence, and scientific computing. It is popular because the
              syntax is readable and close to normal English.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              In SkillBridge Academy, we teach Python through real projects so
              learners do not only memorize syntax. They learn how to think,
              solve problems, and build useful tools.
            </p>
          </div>

          <div className="mt-8 card p-8">
            <div className="flex items-center gap-3">
              <Code2 className="text-blue-600" />
              <h2 className="text-2xl font-bold">Example Code</h2>
            </div>

            <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm text-slate-100">
{`print("Welcome to SkillBridge Academy")

name = input("What is your name? ")
print("Hello, " + name + "! You are learning Python.")`}
            </pre>
          </div>

          <div className="mt-8 card p-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <h2 className="text-2xl font-bold">Practice Exercise</h2>
            </div>

            <p className="mt-5 leading-8 text-slate-600">
              Write a Python program that asks the learner for their name,
              favorite subject, and career goal. Then print a friendly message
              encouraging them to keep learning.
            </p>
          </div>

          <div className="mt-8 card p-8">
            <div className="flex items-center gap-3">
              <HelpCircle className="text-blue-600" />
              <h2 className="text-2xl font-bold">Quick Quiz</h2>
            </div>

            <p className="mt-5 font-semibold">
              What is Python commonly used for?
            </p>

            <div className="mt-4 space-y-3">
              {[
                "Only drawing pictures",
                "Data analysis, automation, AI, and web development",
                "Only playing games",
                "Only writing emails",
              ].map((choice) => (
                <button
                  key={choice}
                  className="block w-full rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-300 hover:bg-blue-50"
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="sticky top-24 card p-6">
            <h3 className="text-xl font-bold">Lesson Progress</h3>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-sm font-semibold text-slate-600">
              {progress}% complete
            </p>

            <div className="mt-8 space-y-3">
              {[
                "1. Introduction to Python",
                "2. Installing Python",
                "3. Variables and Data Types",
                "4. Input and Output",
                "5. Conditional Statements",
              ].map((lesson, index) => (
                <div
                  key={lesson}
                  className={`rounded-xl p-3 text-sm font-semibold ${
                    index === 0
                      ? "bg-blue-50 text-blue-700"
                      : "bg-slate-50 text-slate-600"
                  }`}
                >
                  {lesson}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button className="flex-1 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-600">
                Previous
              </button>

              <button className="flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
                Next
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}