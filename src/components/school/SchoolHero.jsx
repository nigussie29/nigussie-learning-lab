import { Link } from "react-router-dom";

export default function SchoolHero({
  icon,
  title,
  subtitle,
  description,
  buttonText = "Explore Programs",
  buttonLink = "#",
}) {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2">
            <span className="text-3xl">{icon}</span>
            <span className="font-semibold tracking-wide">
              SkillBridge Academy
            </span>
          </div>

          <h1 className="text-5xl font-black leading-tight">
            {title}
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-blue-200">
            {subtitle}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            {description}
          </p>

          <Link
            to={buttonLink}
            className="mt-10 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-slate-900 transition hover:scale-105"
          >
            {buttonText}
          </Link>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
          <h3 className="text-xl font-bold">
            School Highlights
          </h3>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-4xl font-black">12</p>
              <p className="text-blue-200">Programs</p>
            </div>

            <div>
              <p className="text-4xl font-black">250+</p>
              <p className="text-blue-200">Lessons</p>
            </div>

            <div>
              <p className="text-4xl font-black">50+</p>
              <p className="text-blue-200">Projects</p>
            </div>

            <div>
              <p className="text-4xl font-black">10+</p>
              <p className="text-blue-200">Research Topics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}