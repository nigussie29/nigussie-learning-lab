const steps = [
  "Problem",
  "Audience",
  "Outcomes",
  "Mastery",
  "Portfolio",
  "Research",
  "Career",
];

export default function StepIndicator({ currentStep }) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="grid gap-3 md:grid-cols-7">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isComplete = currentStep > stepNumber;

          return (
            <div key={step} className="text-center">
              <div
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                  isComplete
                    ? "bg-green-600 text-white"
                    : isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-600"
                }`}
              >
                {isComplete ? "✓" : stepNumber}
              </div>

              <p
                className={`mt-2 text-sm font-semibold ${
                  isActive ? "text-blue-700" : "text-slate-600"
                }`}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}