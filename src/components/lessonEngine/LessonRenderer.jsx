import LessonHero from "./LessonHero";
import LearningObjectives from "./LearningObjectives";
import WhyItMatters from "./WhyItMatters";
import LearnSection from "./LearnSection";
import PracticeSection from "./PracticeSection";
import BuildSection from "./BuildSection";
import MasterSection from "./MasterSection";
import ApplySection from "./ApplySection";
import PortfolioEvidence from "./PortfolioEvidence";
import CareerConnection from "./CareerConnection";
import AppliedMathematicsConnection from "./AppliedMathematicsConnection";
import NextLesson from "./NextLesson";

export default function LessonRenderer({
  lesson,
  onProgressUpdate,
}) {
  return (
    <div className="space-y-8">
      <LessonHero lesson={lesson} />
      <LearningObjectives lesson={lesson} />
      <WhyItMatters lesson={lesson} />
      <LearnSection lesson={lesson} />
      <PracticeSection lesson={lesson} />
      <BuildSection lesson={lesson} />

      <MasterSection
        lesson={lesson}
        onProgressUpdate={onProgressUpdate}
      />

      <ApplySection lesson={lesson} />
      <PortfolioEvidence lesson={lesson} />
      <CareerConnection lesson={lesson} />
      <AppliedMathematicsConnection lesson={lesson} />
      <NextLesson lesson={lesson} />
    </div>
  );
}