import { useState } from "react";

import StepIndicator from "./StepIndicator";
import StepOneProblem from "./StepOneProblem";
import StepTwoAudience from "./StepTwoAudience";
import StepThreeOutcomes from "./StepThreeOutcomes";
import StepFourMastery from "./StepFourMastery";
import StepFivePortfolio from "./StepFivePortfolio";
import StepSixResearch from "./StepSixResearch";
import StepSevenCareer from "./StepSevenCareer";
import WizardNavigation from "./WizardNavigation";

const totalSteps = 7;

const initialCourseData = {
  problem: "",
  audience: "",
  outcomes: "",
  masteryStages: [],
  portfolioProject: "",
  researchExtension: "",
  careerConnection: "",
};

export default function CourseWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState(initialCourseData);
  const [isComplete, setIsComplete] = useState(false);

  function updateField(field, value) {
    setCourseData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
  }

  function handleNext() {
    setCurrentStep((previousStep) =>
      Math.min(previousStep + 1, totalSteps)
    );
  }

  function handleBack() {
    setCurrentStep((previousStep) =>
      Math.max(previousStep - 1, 1)
    );
  }

  function handleSubmit() {
    setIsComplete(true);

    console.log("SkillBridge course design:", courseData);
  }

  function handleRestart() {
    setCourseData(initialCourseData);
    setCurrentStep(1);
    setIsComplete(false);
  }

  function renderCurrentStep() {
    switch (currentStep) {
      case 1:
        return (
          <StepOneProblem
            value={courseData.problem}
            onChange={(value) => updateField("problem", value)}
          />
        );

      case 2:
        return (
          <StepTwoAudience
            value={courseData.audience}
            onChange={(value) => updateField("audience", value)}
          />
        );

      case 3:
        return (
          <StepThreeOutcomes
            value={courseData.outcomes}
            onChange={(value) => updateField("outcomes", value)}
          />
        );

      case 4:
        return (
          <StepFourMastery
            value={courseData.masteryStages}
            onChange={(value) => updateField("masteryStages", value)}
          />
        );

      case 5:
        return (
          <StepFivePortfolio
            value={courseData.portfolioProject}
            onChange={(value) => updateField("portfolioProject", value)}
          />
        );

      case 6:
        return (
          <StepSixResearch
            value={courseData.researchExtension}
            onChange={(value) => updateField("researchExtension", value)}
          />
        );

      case 7:
        return (
          <StepSevenCareer
            value={courseData.careerConnection}
            onChange={(value) => updateField("careerConnection", value)}
          />
        );

      default:
        return null;
    }
  }

  if (isComplete) {
    return (
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-green-600">
          Course design complete
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Your SkillBridge course foundation is ready
        </h2>

        <p className="mt-4 leading-8 text-slate-600">
          You completed all seven stages of the Course Blueprint. The next
          phase will turn this foundation into modules, lessons, assessments,
          research activities, and portfolio projects.
        </p>

        <div className="mt-8 space-y-5">
          <SummaryItem
            label="Problem"
            value={courseData.problem}
          />

          <SummaryItem
            label="Audience"
            value={courseData.audience}
          />

          <SummaryItem
            label="Learning Outcomes"
            value={courseData.outcomes}
          />

          <SummaryItem
            label="Mastery Stages"
            value={
              courseData.masteryStages.length > 0
                ? courseData.masteryStages.join(", ")
                : "No stages selected"
            }
          />

          <SummaryItem
            label="Portfolio Project"
            value={courseData.portfolioProject}
          />

          <SummaryItem
            label="Research Extension"
            value={courseData.researchExtension}
          />

          <SummaryItem
            label="Career Connection"
            value={courseData.careerConnection}
          />
        </div>

        <button
          type="button"
          onClick={handleRestart}
          className="mt-8 rounded-xl border border-blue-600 px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
        >
          Design Another Course
        </button>
      </section>
    );
  }

  return (
    <div className="space-y-8">
      <StepIndicator currentStep={currentStep} />

      {renderCurrentStep()}

      <WizardNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        {label}
      </p>

      <p className="mt-2 whitespace-pre-line leading-7 text-slate-700">
        {value || "Not provided"}
      </p>
    </div>
  );
}