import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

import { LessonEngine } from "../components/lessonEngine";
import LumineryTutor from "../components/LumineryTutor";
import CourseProgress from "../components/dashboard/CourseProgress";

import {
  getLessonBySlug,
  getLessonsByCourse,
} from "../academy/lessons";

import { getCompletedLessons } from "../academy/mastery/ProgressTracker";
import { courses } from "../data/courses";

export default function LessonPage() {
  const { lessonSlug } = useParams();
  const [progressVersion, setProgressVersion] = useState(0);

  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Lesson not found
        </h1>

        <Link
          to="/courses"
          className="mt-6 inline-block font-bold text-blue-600 hover:text-blue-700"
        >
          ← Back to Courses
        </Link>
      </main>
    );
  }

  const courseId = lesson.metadata.courseId;

  const course = courses.find(
    (item) => item.id === courseId
  );

  const courseLessons = getLessonsByCourse(courseId);
  const completedLessons = getCompletedLessons(courseId);

  function handleProgressUpdate() {
    setProgressVersion((current) => current + 1);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Link
          to={course ? `/courses/${course.id}` : "/courses"}
          className="font-bold text-blue-600 hover:text-blue-700"
        >
          ← Back to Course
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          {/* Lesson Engine */}
          <section className="lg:col-span-2">
            <LessonEngine
              lesson={lesson}
              onProgressUpdate={handleProgressUpdate}
            />
          </section>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Course Progress
            </h2>

            <CourseProgress
              courseLessons={courseLessons}
              refreshKey={progressVersion}
            />

            <div className="mt-8">
              <h3 className="font-extrabold text-slate-900">
                Lesson List
              </h3>

              <div className="mt-4 space-y-3">
                {courseLessons.map((item) => {
                  const isActive = item.slug === lesson.slug;
                  const isCompleted = completedLessons.includes(item.id);

                  return (
                    <Link
                      key={item.id}
                      to={`/lessons/${item.slug}`}
                      className={`flex items-center gap-3 rounded-xl border p-4 font-semibold transition ${
                        isActive
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-200 text-slate-700 hover:border-blue-600"
                      }`}
                    >
                      {isCompleted ? (
                        <FaCheckCircle
                          className="shrink-0 text-emerald-500"
                          aria-label="Completed"
                        />
                      ) : (
                        <FaRegCircle
                          className="shrink-0 text-slate-400"
                          aria-label="Not completed"
                        />
                      )}

                      <span>
                        Lesson {item.metadata.lessonNumber}:{" "}
                        {item.metadata.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              to="/dashboard"
              className="mt-8 block rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>

            <div className="mt-8">
              <LumineryTutor
                courseTitle={course?.title ?? "SkillBridge Academy"}
                lessonTitle={lesson.metadata.title}
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}