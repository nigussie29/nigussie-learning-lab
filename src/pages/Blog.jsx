import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How to Start Learning Data Analytics in 2026",
    category: "Data Analytics",
    author: "Nigussie Guluma",
    date: "June 2026",
    excerpt:
      "A beginner-friendly roadmap for learning Excel, SQL, Power BI, Python, and portfolio projects.",
  },
  {
    title: "Why Mathematics Matters in the Age of AI",
    category: "Mathematics",
    author: "Nigussie Guluma",
    date: "June 2026",
    excerpt:
      "AI is powerful, but mathematics helps us understand how models learn, predict, and make decisions.",
  },
  {
    title: "What Is Microsoft Fabric?",
    category: "Microsoft Fabric",
    author: "Nigussie Guluma",
    date: "June 2026",
    excerpt:
      "A simple introduction to lakehouses, pipelines, notebooks, analytics engineering, and modern data platforms.",
  },
  {
    title: "Python Projects Every Beginner Should Build",
    category: "Python",
    author: "Nigussie Guluma",
    date: "June 2026",
    excerpt:
      "Build confidence with beginner projects like calculators, quiz apps, data cleaners, and simple dashboards.",
  },
];

export default function Blog() {
  return (
    <section className="section py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Blog
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Articles for learners, builders, and career changers.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Read practical articles about mathematics, programming, data analytics,
          Power BI, Microsoft Fabric, artificial intelligence, and career growth.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.title} className="card p-6">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              {post.category}
            </span>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              {post.title}
            </h2>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </span>

              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {post.date}
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-600">{post.excerpt}</p>

            <Link
              to="/blog"
              className="mt-6 inline-flex items-center font-bold text-blue-600"
            >
              Read Article
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}