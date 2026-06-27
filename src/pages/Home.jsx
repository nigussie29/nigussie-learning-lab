import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Database, LineChart, Code2, Users } from 'lucide-react';

const topics = [
  { icon: BookOpen, title: 'Math Foundations', text: 'Build confidence in algebra, statistics, and problem solving.' },
  { icon: Code2, title: 'Python & SQL', text: 'Learn coding through hands-on beginner projects.' },
  { icon: LineChart, title: 'Power BI & Analytics', text: 'Create dashboards and explain insights clearly.' },
  { icon: Database, title: 'Microsoft Fabric', text: 'Understand modern data platforms and analytics workflows.' },
  { icon: Brain, title: 'AI Projects', text: 'Create portfolio projects for career growth.' },
  { icon: Users, title: 'Career Changers', text: 'Simple learning paths for adults entering tech.' }
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-slate-100">
        <div className="section grid items-center gap-10 py-20 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
              Online courses for beginners and career changers
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learn math, coding, data analytics, and AI by building real projects.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A simple learning platform for students and adults who want practical skills in Python, SQL, Power BI, Microsoft Fabric, and AI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/courses" className="btn-primary">
                Explore Courses <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="card p-6">
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm text-brand-100">Featured learning path</p>
              <h2 className="mt-3 text-2xl font-bold">AI + Data Career Starter</h2>
              <ul className="mt-6 space-y-4 text-slate-200">
                <li>✓ Python basics and data analysis</li>
                <li>✓ SQL and dashboard thinking</li>
                <li>✓ Power BI report project</li>
                <li>✓ AI portfolio project</li>
                <li>✓ Resume-ready final work</li>
              </ul>
              <Link to="/courses" className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-slate-950">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">What you can learn</h2>
          <p className="mt-3 text-slate-600">
            Courses are designed to be practical, beginner-friendly, and connected to real career skills.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div className="card p-6" key={topic.title}>
              <topic.icon className="text-brand-600" size={30} />
              <h3 className="mt-4 text-xl font-bold">{topic.title}</h3>
              <p className="mt-2 text-slate-600">{topic.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
