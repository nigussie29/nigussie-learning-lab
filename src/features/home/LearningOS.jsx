import {
  BookOpen,
  Brain,
  Hammer,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

const levels = [
  {
    number: "01",
    title: "Learn",
    subtitle: "Build understanding",
    description:
      "Explore ideas through clear explanations, guided lessons, and meaningful examples.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Practice",
    subtitle: "Develop confidence",
    description:
      "Strengthen understanding through exercises, reflection, feedback, and repeated application.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Turn knowledge into action",
    description:
      "Create projects that connect academic concepts with practical skills and real situations.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Master",
    subtitle: "Demonstrate excellence",
    description:
      "Show deep understanding, explain your reasoning, and improve your work through feedback.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Apply",
    subtitle: "Solve meaningful problems",
    description:
      "Transfer knowledge to unfamiliar situations, real-world challenges, and interdisciplinary work.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Create",
    subtitle: "Develop original ideas",
    description:
      "Research, experiment, design, and produce work that reflects curiosity and independent thought.",
    icon: Lightbulb,
  },
  {
    number: "07",
    title: "Lead",
    subtitle: "Use knowledge with purpose",
    description:
      "Communicate ideas, support others, and use your learning to create positive impact.",
    icon: Users,
  },
];

export default function LearningOS() {
  return (
    <section
      id="learning-os"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="max-w-4xl text-left">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-400">
            SkillBridge Learning OS
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            From curiosity
            <span className="block text-blue-300">to leadership.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learning is not simply completing a course. It is a journey of
            understanding, practice, creation, and growth. Our seven-level
            framework helps every learner become a confident thinker, creator,
            and leader.
          </p>
        </div>

        {/* Transformation statement */}
       

        {/* Desktop journey */}
        <div className="relative mx-auto mt-20 hidden max-w-6xl lg:block">
          {/* Central line */}
          <div
            aria-hidden="true"
            className="absolute bottom-16 left-1/2 top-16 w-px -translate-x-1/2 bg-gradient-to-b from-blue-400 via-indigo-400 to-amber-300"
          />

          <div className="space-y-8">
            {levels.map((level, index) => {
              const Icon = level.icon;
              const isLeft = index % 2 === 0;
              const isFinalLevel = index === levels.length - 1;

              return (
                <div
                  key={level.number}
                  className="relative grid grid-cols-[1fr_96px_1fr] items-center"
                >
                  {/* Left side */}
                  <div className={isLeft ? "pr-10" : ""}>
                    {isLeft && (
                      <LevelCard
                        level={level}
                        Icon={Icon}
                        isFinalLevel={isFinalLevel}
                        alignment="right"
                      />
                    )}
                  </div>

                  {/* Center marker */}
                  <div className="relative z-10 flex justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border shadow-xl ${
                        isFinalLevel
                          ? "border-amber-300 bg-amber-300 text-slate-950 shadow-amber-400/20"
                          : "border-blue-400/40 bg-slate-900 text-blue-300 shadow-blue-500/10"
                      }`}
                    >
                      <Icon size={27} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Right side */}
                  <div className={!isLeft ? "pl-10" : ""}>
                    {!isLeft && (
                      <LevelCard
                        level={level}
                        Icon={Icon}
                        isFinalLevel={isFinalLevel}
                        alignment="left"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet and mobile journey */}
        <div className="relative mx-auto mt-16 max-w-3xl lg:hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-blue-400 via-indigo-400 to-amber-300"
          />

          <div className="space-y-6">
            {levels.map((level, index) => {
              const Icon = level.icon;
              const isFinalLevel = index === levels.length - 1;

              return (
                <article
                  key={level.number}
                  className="relative flex items-start gap-5"
                >
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${
                      isFinalLevel
                        ? "border-amber-300 bg-amber-300 text-slate-950"
                        : "border-blue-400/40 bg-slate-900 text-blue-300"
                    }`}
                  >
                    <Icon size={24} strokeWidth={2.2} />
                  </div>

                  <div
                    className={`flex-1 rounded-3xl border p-6 ${
                      isFinalLevel
                        ? "border-amber-300/30 bg-amber-300/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-xs font-extrabold uppercase tracking-[0.2em] ${
                          isFinalLevel ? "text-amber-300" : "text-blue-400"
                        }`}
                      >
                        Level {level.number}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-500" />

                      <span className="text-sm font-semibold text-slate-400">
                        {level.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-extrabold text-white">
                      {level.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      {level.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-20 max-w-4xl rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-indigo-500/10 px-6 py-10 text-center sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            The SkillBridge Promise
          </p>

          <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
           Learning that lasts,
            <span className="block text-blue-300">
              Skills that matter.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
           We help learners build knowledge, solve real problems, and create meaningful work that prepares them for the future.
          </p>
        </div>
      </div>
    </section>
  );
}

function LevelCard({ level, isFinalLevel, alignment }) {
  return (
    <article
      className={`rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
        alignment === "right" ? "text-right" : "text-left"
      } ${
        isFinalLevel
          ? "border-amber-300/30 bg-amber-300/10 hover:border-amber-300/50"
          : "border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/[0.08]"
      }`}
    >
      <div
        className={`flex flex-wrap items-center gap-3 ${
          alignment === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <span
          className={`text-xs font-extrabold uppercase tracking-[0.2em] ${
            isFinalLevel ? "text-amber-300" : "text-blue-400"
          }`}
        >
          Level {level.number}
        </span>

        <span className="h-1 w-1 rounded-full bg-slate-500" />

        <span className="text-sm font-semibold text-slate-400">
          {level.subtitle}
        </span>
      </div>

      <h3 className="mt-3 text-3xl font-extrabold text-white">
        {level.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-300">
        {level.description}
      </p>
    </article>
  );
}