import DashboardLayout from "../components/dashboard/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import ContinueLearningCard from "../components/dashboard/ContinueLearningCard";
import MasteryCard from "../components/dashboard/MasteryCard";
import LumineryCard from "../components/dashboard/LumineryCard";
import CurrentCourseCard from "../components/dashboard/CurrentCourseCard";
import TodaysGoalCard from "../components/dashboard/TodaysGoalCard";
import PortfolioCard from "../components/dashboard/PortfolioCard";
import ResearchCard from "../components/dashboard/ResearchCard";
import CareerCard from "../components/dashboard/CareerCard";
import AchievementsCard from "../components/dashboard/AchievementsCard";

import { studentMastery } from "../data/mastery/studentMastery";
import { linearAlgebraCourse } from "../data/courses/linearAlgebraCourse";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeCard
        name="Nigussie"
        message="Welcome back. Today your mission is to continue building your AI and Applied Mathematics skills."
      />

      <ContinueLearningCard
        courseTitle={linearAlgebraCourse.title}
        lessonTitle="Matrix Multiplication"
        progress={40}
        path="/lesson-engine"
      />

      <MasteryCard mastery={studentMastery} />

      <LumineryCard
        message="Excellent work yesterday. Your Build score is strong."
        recommendation="Complete the Research Extension before moving to Eigenvalues."
        confidence={87}
      />

      <CurrentCourseCard
        title={linearAlgebraCourse.title}
        category={linearAlgebraCourse.category}
        progress={linearAlgebraCourse.progress}
        nextLesson="Matrix Multiplication"
        path="/courses/linear-algebra-foundations"
      />

      <TodaysGoalCard
        title="Finish Matrix Multiplication"
        description="Complete the lesson, build the Python matrix calculator, and review the research extension."
        estimatedTime="45 minutes"
        progress={35}
      />

      <PortfolioCard
        projects={4}
        skills={12}
        certificates={2}
        path="/portfolio"
      />

      <ResearchCard
        projects={1}
        questions={5}
        publications={0}
        path="/resources"
      />

      <CareerCard
        readiness={68}
        targetRole="Machine Learning Engineer"
        nextSkill="Linear Algebra for AI"
        path="/portfolio"
      />

      <AchievementsCard
        achievements={[
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
        ]}
      />
    </DashboardLayout>
  );
}