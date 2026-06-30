import { Link } from "react-router-dom";
import {
  Clock,
  BookOpen,
  Award,
  CheckCircle,
  PlayCircle,
} from "lucide-react";

const lessons = [
  "Introduction to Python",
  "Installing Python",
  "Variables and Data Types",
  "Input and Output",
  "Conditional Statements",
  "Loops",
  "Functions",
  "Lists and Tuples",
  "Dictionaries",
  "Final Project",
];

export default function CourseDetail() {
  return (
    <section className="section py-16">
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

        {/* Left Side */}

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Programming
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-slate-900">
            Python for Beginners
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn Python from the ground up by building practical projects.
            This course is designed for complete beginners who want to
            transition into programming, data analytics, AI, or software
            development.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">

            <div className="flex items-center gap-2">
              <Clock size={20} className="text-blue-600" />
              <span>6 Weeks</span>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" />
              <span>24 Lessons</span>
            </div>

            <div className="flex items-center gap-2">
              <Award size={20} className="text-blue-600" />
              <span>Certificate Included</span>
            </div>

          </div>

          <div className="mt-12">

            <h2 className="text-3xl font-bold">
              What You'll Learn
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {[
                "Python Fundamentals",
                "Programming Logic",
                "Functions",
                "Loops",
                "Lists",
                "Dictionaries",
                "File Handling",
                "Mini Projects",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <CheckCircle className="text-green-600" size={20} />
                  {item}
                </div>
              ))}

            </div>

          </div>

          <div className="mt-14">

            <h2 className="text-3xl font-bold">
              Course Curriculum
            </h2>

            <div className="mt-6 space-y-4">

              {lessons.map((lesson, index) => (
                <div
                  key={lesson}
                  className="card flex items-center justify-between p-5"
                >
                  <div className="flex items-center gap-4">
                    <PlayCircle className="text-blue-600" />
                    <span>
                      Lesson {index + 1}: {lesson}
                    </span>
                  </div>

                  <span className="text-sm text-slate-500">
                    15 min
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div>

          <div className="sticky top-24 rounded-3xl border bg-white p-8 shadow-lg">

            <div className="aspect-video rounded-2xl bg-slate-200 flex items-center justify-center">
              Course Preview
            </div>

            <h3 className="mt-6 text-3xl font-bold">
              Free
            </h3>

            <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-700">
              Enroll Now
            </button>

            <Link
              to="/courses"
              className="mt-4 block text-center font-semibold text-blue-600"
            >
              ← Back to Courses
            </Link>

            <hr className="my-8" />

            <h4 className="font-bold">
              This Course Includes
            </h4>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>✔ 24 Video Lessons</li>
              <li>✔ Downloadable PDFs</li>
              <li>✔ Practice Exercises</li>
              <li>✔ Quizzes</li>
              <li>✔ Final Project</li>
              <li>✔ Certificate of Completion</li>
              <li>✔ Lifetime Access</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}