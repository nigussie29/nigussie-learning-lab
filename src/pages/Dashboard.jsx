
import MasteryProgress from "../components/luminery/MasteryProgress";
import GuidanceCard from "../components/luminery/GuidanceCard";
import MasteryBadge from "../components/luminery/MasteryBadge";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaCertificate,
  FaClock,
  FaFire,
  
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
          <p className="text-blue-200 font-bold">Student Dashboard</p>
          <h1 className="mt-3 text-4xl font-extrabold">
            Welcome back, Nigussie 👋
          </h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            Continue your learning journey with SkillBridge Academy powered by Luminery.
          </p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            [<FaBookOpen />, "Courses", "4"],
            [<FaClock />, "Hours Learned", "12.5"],
            [<FaCertificate />, "Certificates", "1"],
            [<FaFire />, "Streak", "7 days"],
          ].map(([icon, label, value]) => (
            <div key={label} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-2xl text-blue-600">{icon}</div>
              <p className="mt-4 text-sm font-semibold text-slate-500">{label}</p>
              <p className="mt-1 text-3xl font-extrabold text-slate-950">{value}</p>
            </div>
          ))}
        </section>
               <section className="mt-8">
  <MasteryProgress />
</section>
<section className="mt-8">
  <GuidanceCard />
</section>

        <section className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
       
              Continue Learning
            </h2>

            <div className="mt-6 rounded-2xl border border-slate-200 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">

                Python for Beginners
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
                Lesson 1: Introduction to Python
              </h3>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[20%] rounded-full bg-blue-600"></div>
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-600">
                20% completed
              </p>

              <Link
                to="/lessons/1"
                className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
              >
                Continue Lesson →
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Achievements
            </h2>

           <div className="mt-6 space-y-4">
  <MasteryBadge
    title="First Lesson"
    description="Completed your first lesson."
  />

  <MasteryBadge
    title="Fast Starter"
    description="Started learning this week."
  />

  <MasteryBadge
    title="Project Builder"
    description="Ready to build your first project."
    color="bg-yellow-50"
  />
</div>
          </aside>
        </section>
      </div>
    </main>
  );
}