import { Link } from "react-router-dom";
import CourseCard from "../components/course/CourseCard";

export default function Courses() {
  const courses = [
    {
      slug: "python-for-beginners",
      title: "Python for Beginners",
      category: "Programming",
      level: "Beginner",
      lessons: 24,
      duration: "6 weeks",
      description:
        "Learn Python step by step by building useful programs, mini projects, and problem-solving activities.",
    },
    {
      slug: "data-analytics-excel-sql-powerbi",
      title: "Data Analytics with Excel, SQL, and Power BI",
      category: "Data Analytics",
      level: "Beginner to Intermediate",
      lessons: 36,
      duration: "8 weeks",
      description:
        "Build real dashboards, write SQL queries, clean data, and turn business data into insights.",
    },
    {
      slug: "ai-machine-learning-foundations",
      title: "AI and Machine Learning Foundations",
      category: "Artificial Intelligence",
      level: "Beginner",
      lessons: 30,
      duration: "8 weeks",
      description:
        "Understand AI, machine learning, classification, prediction, model evaluation, and real-world AI projects.",
    },
    {
      slug: "microsoft-fabric-data-engineering",
      title: "Microsoft Fabric Data Engineering",
      category: "Data Engineering",
      level: "Intermediate",
      lessons: 28,
      duration: "7 weeks",
      description:
        "Learn lakehouses, pipelines, notebooks, dataflows, Delta tables, and analytics engineering with Microsoft Fabric.",
    },
    {
      slug: "power-bi-dax-mastery",
      title: "Power BI and DAX Mastery",
      category: "Business Intelligence",
      level: "Intermediate",
      lessons: 32,
      duration: "7 weeks",
      description:
        "Master Power BI reports, dashboards, data modeling, Power Query, DAX measures, and storytelling with data.",
    },
    {
      slug: "mathematics-for-ai-data-science",
      title: "Mathematics for AI and Data Science",
      category: "Mathematics",
      level: "Beginner to Advanced",
      lessons: 40,
      duration: "10 weeks",
      description:
        "Learn algebra, functions, probability, statistics, linear algebra, and calculus for AI and data science.",
    },
  ];

  return (
    <section className="section py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Courses
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Explore career-ready courses.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Learn practical skills in programming, data analytics, Power BI,
          Microsoft Fabric, mathematics, artificial intelligence, and robotics.
          Every course is designed to help you build real projects and grow with
          confidence.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {[
          "All",
          "Python",
          "Data Analytics",
          "Power BI",
          "AI",
          "Microsoft Fabric",
          "Mathematics",
          "Robotics",
        ].map((category) => (
          <button
            key={category}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-blue-600 p-8 text-white md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">
              Start your learning journey today.
            </h2>
            <p className="mt-3 max-w-2xl text-blue-100">
              Build real projects, strengthen your skills, and prepare for the
              future of work with SkillBridge Academy.
            </p>
          </div>

          <Link
            to="/courses/python-for-beginners"
            className="rounded-xl bg-white px-6 py-3 text-center font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}