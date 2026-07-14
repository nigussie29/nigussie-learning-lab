export default function WizardNavigation({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  onSubmit,
}) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={onBack}
        disabled={isFirstStep}
        className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Back
      </button>

      <p className="text-sm font-semibold text-slate-500">
        Step {currentStep} of {totalSteps}
      </p>

      {isLastStep ? (
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
        >
          Complete Course Design
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Continue
        </button>
      )}
    </div>
  );
}