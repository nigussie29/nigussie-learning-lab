import DashboardLayout from "../components/dashboard/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import ContinueLearningCard from "../components/dashboard/ContinueLearningCard";
import MasteryCard from "../components/dashboard/MasteryCard";
import LumineryCard from "../components/dashboard/LumineryCard";
import LearningJourneyCard from "../components/dashboard/LearningJourneyCard";
import PortfolioCard from "../components/dashboard/PortfolioCard";
import ResearchCard from "../components/dashboard/ResearchCard";
import CareerCard from "../components/dashboard/CareerCard";
import AchievementsCard from "../components/dashboard/AchievementsCard";

import { useAuth } from "../context/AuthContext";
import { studentMastery } from "../data/mastery/studentMastery";
import { linearAlgebraCourse } from "../data/courses/linearAlgebraCourse";
import { getCourseProgress } from "../academy/mastery/ProgressTracker";

export default function Dashboard() {
  const { profile } = useAuth();

  const firstName = profile?.full_name?.split(" ")[0] || "Student";

  const todaysMission = {
    subject: "Matrix Multiplication",
    currentStage: "Practice",
    nextStep: "Build a Python Matrix Calculator",
    purpose: "This skill is used in neural networks and machine learning.",
    estimatedTime: "42 minutes",
  };

  const career = {
    targetRole: "Machine Learning Engineer",
    readiness: 68,
    nextSkill: "Linear Algebra for AI",
  };

  const portfolio = {
    projects: 6,
    certificates: 3,
    latestProject: "Credit Default Prediction",
    githubConnected: true,
  };

  const research = {
    topic: "Machine Learning Model Comparison",
    progress: 52,
    nextStep: "Complete the research extension",
  };

  const achievements = [
    {
      id: 1,
      icon: "🏆",
      title: "Lesson Builder",
      description: "Completed your first SkillBridge lesson.",
      date: "Today",
    },
    {
      id: 2,
      icon: "🚀",
      title: "Platform Architect",
      description: "Built the LessonTemplate and CourseTemplate engines.",
      date: "Sprint 3",
    },
  ];

  const liveProgress = getCourseProgress(
    linearAlgebraCourse.id,
    linearAlgebraCourse.lessons?.length ?? 0
  );

  const courseWithLiveProgress = {
    ...linearAlgebraCourse,
    progress: liveProgress,
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* 1. Welcome Command Center */}
        <WelcomeCard name={firstName} mission={todaysMission} />

        {/* 2. Continue Learning and Mastery */}
        <section className="grid items-start gap-6 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <ContinueLearningCard course={courseWithLiveProgress} />
          </div>

          <div className="xl:col-span-4">
            <MasteryCard mastery={studentMastery} />
          </div>
        </section>

        {/* 3. Learning Journey */}
        <section>
          <LearningJourneyCard />
        </section>

        {/* 4. Luminery, Career, and Achievements */}
        <section className="grid items-start gap-6 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <LumineryCard
              learner={firstName}
              greeting="Good Morning"
              message="Excellent work yesterday. Your Build score is improving."
              mission="Complete the Research Extension before moving to Eigenvalues."
              recommendation="Your Build skill is excellent. Spend a little more time on Research to reach the next mastery level."
              confidence={91}
              tasks={[
                {
                  title: "Review Matrix Multiplication",
                  duration: "10 min",
                },
                {
                  title: "Build Python Matrix Calculator",
                  duration: "20 min",
                },
                {
                  title: "Take the Mastery Quiz",
                  duration: "12 min",
                },
              ]}
            />
          </div>

          <aside className="space-y-6 xl:col-span-4">
            <CareerCard career={career} />
            <AchievementsCard achievements={achievements} />
          </aside>
        </section>

        {/* 5. Portfolio and Research */}
        <section>
          <div className="mb-4">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Growth and Evidence
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
              Build, apply, and document your skills
            </h2>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            <PortfolioCard portfolio={portfolio} />
            <ResearchCard research={research} />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}