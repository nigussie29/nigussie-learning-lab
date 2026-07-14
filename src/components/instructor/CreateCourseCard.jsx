import { Link } from "react-router-dom";

export default function CreateCourseCard() {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
      <p className="font-bold text-blue-200">
        Start with the problem
      </p>

      <h2 className="mt-3 text-3xl font-extrabold">
        Create a New Course
      </h2>

      <p className="mt-4 max-w-2xl leading-8 text-blue-100">
        Build a course that follows the SkillBridge Method, Course Blueprint,
        Mastery Pyramid, research standards, and portfolio framework.
      </p>

      <Link
        to="/instructor/create-course"
        className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-700 hover:bg-blue-50"
      >
        Start Course Design
      </Link>
    </section>
  );
}