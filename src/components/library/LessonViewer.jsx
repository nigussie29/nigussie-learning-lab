import { useEffect, useState } from "react";
import {
  isLessonCompleted,
  toggleLessonCompletion,
} from "../../services/linearAlgebraProgress.js";

export default function LessonViewer({
  lesson,
  onPrevious,
  onNext,
  onBackToModule,
}) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!lesson?.moduleNumber || !lesson?.slug) {
      setCompleted(false);
      return;
    }

    setCompleted(
      isLessonCompleted(
        lesson.moduleNumber,
        lesson.slug
      )
    );
  }, [lesson]);

  if (!lesson) {
    return <LessonNotFound />;
  }

  function handleToggleComplete() {
    const result = toggleLessonCompletion(
      lesson.moduleNumber,
      lesson.slug
    );

    setCompleted(result.completed);
  }

  const {
    title,
    subtitle,
    moduleNumber,
    lessonNumber,
    duration,
    level,
    status,
    essentialQuestion,
    bigIdea,
    problemFirst,
    learningObjectives = [],
    prerequisiteKnowledge = [],
    vocabulary = [],
    formulas = [],
    workedExamples = [],
    realWorldApplications = [],
    aiConnection,
    pythonLab,
    guidedPractice = [],
    independentPractice = [],
    commonMistakes = [],
    formativeAssessment,
    portfolioArtifact,
    reflection = [],
    summary = [],
    lumineryGuidance,
    previousLesson,
    nextLesson,
  } = lesson;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <LessonHero
        title={title}
        subtitle={subtitle}
        moduleNumber={moduleNumber}
        lessonNumber={lessonNumber}
        duration={duration}
        level={level}
        status={status}
        completed={completed}
        onBackToModule={onBackToModule}
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-8">
          {(essentialQuestion || bigIdea) && (
            <SectionCard
              eyebrow="Lesson foundation"
              title="Essential Question and Big Idea"
            >
              {essentialQuestion && (
                <InfoPanel
                  label="Essential Question"
                  text={essentialQuestion}
                />
              )}

              {bigIdea && (
                <InfoPanel
                  label="Big Idea"
                  text={bigIdea}
                  className="mt-4"
                />
              )}
            </SectionCard>
          )}

          {problemFirst && (
            <SectionCard
              eyebrow="Problem-first learning"
              title={
                problemFirst.title ||
                "Opening Investigation"
              }
            >
              {problemFirst.scenario && (
                <p className="leading-8 text-slate-700">
                  {problemFirst.scenario}
                </p>
              )}

              {Array.isArray(problemFirst.questions) &&
                problemFirst.questions.length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Investigation Questions
                    </Subheading>

                    <NumberedList
                      items={problemFirst.questions}
                    />
                  </div>
                )}

              {problemFirst.expectedInsight && (
                <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">
                    Expected Insight
                  </p>

                  <p className="mt-2 leading-7 text-indigo-950">
                    {problemFirst.expectedInsight}
                  </p>
                </div>
              )}
            </SectionCard>
          )}

          {learningObjectives.length > 0 && (
            <SectionCard
              eyebrow="Learning goals"
              title="Learning Objectives"
            >
              <CheckList items={learningObjectives} />
            </SectionCard>
          )}

          {prerequisiteKnowledge.length > 0 && (
            <SectionCard
              eyebrow="Before you begin"
              title="Prerequisite Knowledge"
            >
              <TagList items={prerequisiteKnowledge} />
            </SectionCard>
          )}

          {vocabulary.length > 0 && (
            <SectionCard
              eyebrow="Academic language"
              title="Vocabulary"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {vocabulary.map((item, index) => (
                  <article
                    key={`${item.term}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="font-extrabold text-slate-900">
                      {item.term}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.definition}
                    </p>
                  </article>
                ))}
              </div>
            </SectionCard>
          )}

          {formulas.length > 0 && (
            <SectionCard
              eyebrow="Mathematical reference"
              title="Key Formulas"
            >
              <div className="space-y-4">
                {formulas.map((formula, index) => (
                  <article
                    key={`${formula.name}-${index}`}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-5"
                  >
                    <h3 className="font-extrabold text-blue-950">
                      {formula.name}
                    </h3>

                    {formula.formula && (
                      <div className="mt-3 overflow-x-auto rounded-xl bg-white p-4 font-mono text-blue-900">
                        {formula.formula}
                      </div>
                    )}

                    {formula.meaning && (
                      <p className="mt-3 leading-7 text-blue-900">
                        {formula.meaning}
                      </p>
                    )}

                    {formula.requirement && (
                      <p className="mt-2 text-sm font-semibold text-blue-700">
                        Requirement:{" "}
                        {formula.requirement}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </SectionCard>
          )}

          {workedExamples.length > 0 && (
            <SectionCard
              eyebrow="Learn by example"
              title="Worked Examples"
            >
              <div className="space-y-6">
                {workedExamples.map(
                  (example, index) => (
                    <WorkedExample
                      key={example.id || index}
                      example={example}
                      number={index + 1}
                    />
                  )
                )}
              </div>
            </SectionCard>
          )}

          {realWorldApplications.length > 0 && (
            <SectionCard
              eyebrow="Creator application"
              title="Real-World Applications"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {realWorldApplications.map(
                  (item, index) => (
                    <article
                      key={`${item.field}-${index}`}
                      className="rounded-2xl border border-slate-200 p-5"
                    >
                      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                        {item.field}
                      </p>

                      <p className="mt-2 leading-7 text-slate-700">
                        {item.application}
                      </p>
                    </article>
                  )
                )}
              </div>
            </SectionCard>
          )}

          {aiConnection && (
            <SectionCard
              eyebrow="AI connection"
              title={
                aiConnection.title ||
                "Connection to AI"
              }
            >
              {aiConnection.explanation && (
                <p className="leading-8 text-slate-700">
                  {aiConnection.explanation}
                </p>
              )}

              {aiConnection.formula && (
                <div className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-white">
                  {aiConnection.formula}
                </div>
              )}

              {Array.isArray(aiConnection.examples) &&
                aiConnection.examples.length > 0 && (
                  <div className="mt-6">
                    <Subheading>Examples</Subheading>
                    <CheckList
                      items={aiConnection.examples}
                    />
                  </div>
                )}

              {Array.isArray(aiConnection.uses) &&
                aiConnection.uses.length > 0 && (
                  <div className="mt-6">
                    <Subheading>Uses</Subheading>
                    <TagList
                      items={aiConnection.uses}
                    />
                  </div>
                )}

              {aiConnection.caution && (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-900">
                    Important Caution
                  </p>

                  <p className="mt-2 leading-7 text-amber-800">
                    {aiConnection.caution}
                  </p>
                </div>
              )}
            </SectionCard>
          )}

          {pythonLab && (
            <PythonLab lab={pythonLab} />
          )}

          {guidedPractice.length > 0 && (
            <PracticeSection
              eyebrow="Practice with support"
              title="Guided Practice"
              items={guidedPractice}
              showAnswers={showAnswers}
            />
          )}

          {independentPractice.length > 0 && (
            <PracticeSection
              eyebrow="Apply independently"
              title="Independent Practice"
              items={independentPractice}
              showAnswers={showAnswers}
            />
          )}

          {(guidedPractice.length > 0 ||
            independentPractice.length > 0 ||
            formativeAssessment) && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  setShowAnswers(
                    (current) => !current
                  )
                }
                className="rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
              >
                {showAnswers
                  ? "Hide Answers"
                  : "Show Answers"}
              </button>
            </div>
          )}

          {commonMistakes.length > 0 && (
            <SectionCard
              eyebrow="Learn from errors"
              title="Common Mistakes"
            >
              <div className="space-y-4">
                {commonMistakes.map(
                  (item, index) => (
                    <article
                      key={index}
                      className="rounded-2xl border border-red-200 bg-red-50 p-5"
                    >
                      <p className="font-extrabold text-red-900">
                        Mistake: {item.mistake}
                      </p>

                      <p className="mt-2 leading-7 text-red-800">
                        Correction:{" "}
                        {item.correction}
                      </p>
                    </article>
                  )
                )}
              </div>
            </SectionCard>
          )}

          {formativeAssessment && (
            <AssessmentSection
              assessment={formativeAssessment}
              showAnswers={showAnswers}
            />
          )}

          {portfolioArtifact && (
            <SectionCard
              eyebrow="Portfolio evidence"
              title={
                portfolioArtifact.title ||
                "Portfolio Artifact"
              }
            >
              {portfolioArtifact.description && (
                <p className="leading-8 text-slate-700">
                  {portfolioArtifact.description}
                </p>
              )}

              {Array.isArray(
                portfolioArtifact.requiredSections
              ) &&
                portfolioArtifact.requiredSections
                  .length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Required Sections
                    </Subheading>

                    <CheckList
                      items={
                        portfolioArtifact.requiredSections
                      }
                    />
                  </div>
                )}

              {Array.isArray(
                portfolioArtifact.requiredEvidence
              ) &&
                portfolioArtifact.requiredEvidence
                  .length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Required Evidence
                    </Subheading>

                    <CheckList
                      items={
                        portfolioArtifact.requiredEvidence
                      }
                    />
                  </div>
                )}
            </SectionCard>
          )}

          {reflection.length > 0 && (
            <SectionCard
              eyebrow="Metacognition"
              title="Reflection"
            >
              <NumberedList items={reflection} />
            </SectionCard>
          )}

          {summary.length > 0 && (
            <SectionCard
              eyebrow="Lesson synthesis"
              title="Summary"
            >
              <CheckList items={summary} />
            </SectionCard>
          )}

          {lumineryGuidance && (
            <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
                Luminery Guidance
              </p>

              {lumineryGuidance.message && (
                <h2 className="mt-3 text-2xl font-extrabold text-violet-950">
                  {lumineryGuidance.message}
                </h2>
              )}

              {lumineryGuidance.prompt && (
                <p className="mt-4 leading-8 text-violet-900">
                  {lumineryGuidance.prompt}
                </p>
              )}
            </section>
          )}

          <LessonNavigation
            previousLesson={previousLesson}
            nextLesson={nextLesson}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>

        <LessonSidebar
          lesson={lesson}
          completed={completed}
          onComplete={handleToggleComplete}
        />
      </div>
    </main>
  );
}

function LessonNotFound() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-red-200 bg-red-50 p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-red-600">
          Lesson error
        </p>

        <h1 className="mt-2 text-3xl font-extrabold text-red-900">
          Lesson not found
        </h1>

        <p className="mt-3 text-red-700">
          The requested lesson could not be loaded.
        </p>
      </div>
    </main>
  );
}

function LessonHero({
  title,
  subtitle,
  moduleNumber,
  lessonNumber,
  duration,
  level,
  status,
  completed,
  onBackToModule,
}) {
  return (
    <header className="bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <button
          type="button"
          onClick={onBackToModule}
          className="text-sm font-bold text-blue-200 transition hover:text-white"
        >
          ← Back to Module
        </button>

        <div className="mt-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Module {moduleNumber} · Lesson{" "}
            {lessonNumber}
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {duration && (
              <HeroBadge>{duration}</HeroBadge>
            )}

            {level && (
              <HeroBadge>{level}</HeroBadge>
            )}

            {status && (
              <HeroBadge>{status}</HeroBadge>
            )}

            {completed && (
              <HeroBadge>Completed ✓</HeroBadge>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function LessonSidebar({
  lesson,
  completed,
  onComplete,
}) {
  const sections = [
    lesson.learningObjectives?.length > 0 &&
      "Objectives",
    lesson.vocabulary?.length > 0 &&
      "Vocabulary",
    lesson.formulas?.length > 0 && "Formulas",
    lesson.workedExamples?.length > 0 &&
      "Worked Examples",
    lesson.pythonLab && "Python Lab",
    lesson.guidedPractice?.length > 0 &&
      "Guided Practice",
    lesson.independentPractice?.length > 0 &&
      "Independent Practice",
    lesson.formativeAssessment &&
      "Assessment",
    lesson.summary?.length > 0 && "Summary",
  ].filter(Boolean);

  return (
    <aside className="h-fit space-y-5 lg:sticky lg:top-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Lesson progress
        </p>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              completed
                ? "w-full bg-emerald-500"
                : "w-1/4 bg-blue-600"
            }`}
          />
        </div>

        <p className="mt-3 font-bold text-slate-900">
          {completed
            ? "Lesson completed"
            : "Lesson in progress"}
        </p>

        <button
          type="button"
          onClick={onComplete}
          className={`mt-5 w-full rounded-xl px-4 py-3 font-bold transition ${
            completed
              ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {completed
            ? "Mark Incomplete"
            : "Mark Complete"}
        </button>

        <p className="mt-3 text-center text-xs leading-5 text-slate-500">
          Your progress is saved automatically on
          this device.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Included sections
        </p>

        <ul className="mt-4 space-y-3">
          {sections.map((section) => (
            <li
              key={section}
              className="flex items-center gap-3 text-sm font-semibold text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {section}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
        {title}
      </h2>

      <div className="mt-6">{children}</div>
    </section>
  );
}

function InfoPanel({
  label,
  text,
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-slate-50 p-5 ${className}`}
    >
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold leading-8 text-slate-900">
        {formatValue(text)}
      </p>
    </div>
  );
}

function WorkedExample({ example, number }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200">
      <header className="bg-slate-950 px-5 py-4 text-white">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-300">
          Example {number}
        </p>

        <h3 className="mt-1 text-xl font-extrabold">
          {example.title || "Worked Example"}
        </h3>
      </header>

      <div className="space-y-5 p-5">
        {example.problem && (
          <div>
            <Subheading>Problem</Subheading>

            <p className="leading-7 text-slate-700">
              {formatValue(example.problem)}
            </p>
          </div>
        )}

        {Array.isArray(example.solutionSteps) &&
          example.solutionSteps.length > 0 && (
            <div>
              <Subheading>
                Solution Steps
              </Subheading>

              <NumberedList
                items={example.solutionSteps}
              />
            </div>
          )}

        {example.answer !== undefined && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Answer
            </p>

            <pre className="mt-2 whitespace-pre-wrap font-sans font-semibold leading-7 text-emerald-950">
              {formatValue(example.answer)}
            </pre>
          </div>
        )}

        {example.interpretation && (
          <div>
            <Subheading>
              Interpretation
            </Subheading>

            <p className="leading-7 text-slate-700">
              {formatValue(
                example.interpretation
              )}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

function PythonLab({ lab }) {
  return (
    <SectionCard
      eyebrow="Computational practice"
      title={lab.title || "Python Lab"}
    >
      {lab.objective && (
        <p className="leading-8 text-slate-700">
          {lab.objective}
        </p>
      )}

      {lab.code && (
        <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-100">
          <code>{lab.code}</code>
        </pre>
      )}

      {Array.isArray(lab.questions) &&
        lab.questions.length > 0 && (
          <div className="mt-6">
            <Subheading>Lab Questions</Subheading>
            <NumberedList
              items={lab.questions}
            />
          </div>
        )}

      {lab.extension && (
        <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-5">
          <p className="font-extrabold text-purple-900">
            Extension Challenge
          </p>

          <p className="mt-2 leading-7 text-purple-800">
            {lab.extension}
          </p>
        </div>
      )}
    </SectionCard>
  );
}

function PracticeSection({
  eyebrow,
  title,
  items,
  showAnswers,
}) {
  return (
    <SectionCard
      eyebrow={eyebrow}
      title={title}
    >
      <div className="space-y-4">
        {items.map((item, index) => (
          <article
            key={item.id || index}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-extrabold text-slate-900">
                Question {index + 1}
              </p>

              {item.difficulty && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                  {item.difficulty}
                </span>
              )}
            </div>

            <p className="mt-3 leading-7 text-slate-700">
              {formatValue(
                item.question || item.prompt
              )}
            </p>

            {showAnswers &&
              (item.answer !== undefined ||
                item.sampleAnswer !==
                  undefined) && (
                <AnswerPanel
                  value={
                    item.answer ??
                    item.sampleAnswer
                  }
                />
              )}
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

function AssessmentSection({
  assessment,
  showAnswers,
}) {
  const questions =
    assessment.questions || [];

  return (
    <SectionCard
      eyebrow="Mastery check"
      title="Formative Assessment"
    >
      <div className="flex flex-wrap gap-3">
        {assessment.totalPoints !==
          undefined && (
          <Tag>
            Points: {assessment.totalPoints}
          </Tag>
        )}

        {assessment.passingScore !==
          undefined && (
          <Tag>
            Passing:{" "}
            {assessment.passingScore}
          </Tag>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {questions.map((question, index) => (
          <article
            key={question.id || index}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-extrabold text-slate-900">
                Assessment Question{" "}
                {index + 1}
              </p>

              {question.points !==
                undefined && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                  {question.points} points
                </span>
              )}
            </div>

            <p className="mt-3 leading-7 text-slate-700">
              {formatValue(question.prompt)}
            </p>

            {Array.isArray(
              question.options
            ) &&
              question.options.length > 0 && (
                <div className="mt-4 space-y-2">
                  {question.options.map(
                    (option, optionIndex) => (
                      <div
                        key={`${formatValue(
                          option
                        )}-${optionIndex}`}
                        className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700"
                      >
                        {formatValue(option)}
                      </div>
                    )
                  )}
                </div>
              )}

            {showAnswers &&
              (question.answer !== undefined ||
                question.sampleAnswer !==
                  undefined) && (
                <AnswerPanel
                  value={
                    question.answer ??
                    question.sampleAnswer
                  }
                />
              )}
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

function AnswerPanel({ value }) {
  return (
    <div className="mt-4 rounded-xl bg-emerald-50 p-4">
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
        Answer
      </p>

      <pre className="mt-2 whitespace-pre-wrap font-sans leading-7 text-emerald-950">
        {formatValue(value)}
      </pre>
    </div>
  );
}

function LessonNavigation({
  previousLesson,
  nextLesson,
  onPrevious,
  onNext,
}) {
  return (
    <nav className="grid gap-4 md:grid-cols-2">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!previousLesson}
        className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
          ← Previous Lesson
        </p>

        <p className="mt-2 font-extrabold text-slate-900">
          {previousLesson?.title ||
            "No previous lesson"}
        </p>
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!nextLesson}
        className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
          Next Lesson →
        </p>

        <p className="mt-2 font-extrabold text-slate-900">
          {nextLesson?.title ||
            "No next lesson"}
        </p>
      </button>
    </nav>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${formatValue(item)}-${index}`}
          className="flex items-start gap-3 leading-7 text-slate-700"
        >
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
            ✓
          </span>

          <span>{formatValue(item)}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${formatValue(item)}-${index}`}
          className="flex items-start gap-3 leading-7 text-slate-700"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            {index + 1}
          </span>

          <span>{formatValue(item)}</span>
        </li>
      ))}
    </ol>
  );
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <Tag
          key={`${formatValue(item)}-${index}`}
        >
          {formatValue(item)}
        </Tag>
      ))}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
      {children}
    </span>
  );
}

function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}

function Subheading({ children }) {
  return (
    <h3 className="mb-3 text-lg font-extrabold text-slate-900">
      {children}
    </h3>
  );
}

function formatValue(value) {
  if (
    value === undefined ||
    value === null
  ) {
    return "";
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  return JSON.stringify(value, null, 2);
}