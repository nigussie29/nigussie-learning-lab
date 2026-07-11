import LessonHero from "./LessonHero";
import LearningObjectives from "./LearningObjectives";
import WhyItMatters from "./WhyItMatters";
import LearnSection from "./LearnSection";
import PracticeSection from "./PracticeSection";
import BuildSection from "./BuildSection";
import MasterSection from "./MasterSection";
import LumineryCoach from "./LumineryCoach";
import PortfolioEvidence from "./PortfolioEvidence";
import CareerConnection from "./CareerConnection";
import ResearchExtension from "./ResearchExtension";
import AppliedMathematicsConnection from "./AppliedMathematicsConnection";
import ApplySection from "./ApplySection";
import NextLesson from "./NextLesson";

export default function LessonTemplate({ lesson }) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <LessonHero lesson={lesson} />

        <LearningObjectives objectives={lesson.objectives} />

        <WhyItMatters text={lesson.whyItMatters} />

        <LearnSection learn={lesson.learn} />

        <PracticeSection practice={lesson.practice} />

        <BuildSection build={lesson.build} />

        <MasterSection master={lesson.master} />

        <LumineryCoach
          message={lesson.luminery.message}
          recommendation={lesson.luminery.recommendation}
          confidence={lesson.luminery.confidence}
        />

        <PortfolioEvidence evidence={lesson.portfolioEvidence} />

        <CareerConnection careers={lesson.careerConnection} />

        <ResearchExtension research={lesson.researchExtension} />

        <AppliedMathematicsConnection
          math={lesson.appliedMathematics}
        />

        <ApplySection apply={lesson.apply} />

        <NextLesson lesson={lesson.nextLesson} />
      </div>
    </main>
  );
}