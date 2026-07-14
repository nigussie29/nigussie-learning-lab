import { useState } from "react";

const initialAssessment = {
  title: "",
  type: "Formative",
  objective: "",
  instructions: "",
  evidence: "",
  masteryLevel: "Practice",
  rubric: "",
};

export default function AssessmentBuilder() {
  const [assessment, setAssessment] = useState(initialAssessment);
  const [saved, setSaved] = useState(false);

  function updateField(field, value) {
    setAssessment((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);

    console.log("SkillBridge assessment:", assessment);
  }

  function handleReset() {
    setAssessment(initialAssessment);
    setSaved(false);
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        SkillBridge Assessment Builder
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Design an assessment that measures mastery
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Build assessments that evaluate understanding, application, creation,
        research, and reflection—not memorization alone.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field label="Assessment title" htmlFor="assessment-title">
          <input
            id="assessment-title"
            type="text"
            value={assessment.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="Example: Matrix Multiplication Mastery Challenge"
            className="inputStyle"
            required
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Assessment type" htmlFor="assessment-type">
            <select
              id="assessment-type"
              value={assessment.type}
              onChange={(event) => updateField("type", event.target.value)}
              className="inputStyle"
            >
              <option>Diagnostic</option>
              <option>Formative</option>
              <option>Project</option>
              <option>Research</option>
              <option>Portfolio</option>
              <option>Mastery</option>
            </select>
          </Field>

          <Field label="Mastery stage" htmlFor="mastery-level">
            <select
              id="mastery-level"
              value={assessment.masteryLevel}
              onChange={(event) =>
                updateField("masteryLevel", event.target.value)
              }
              className="inputStyle"
            >
              <option>Learn</option>
              <option>Practice</option>
              <option>Build</option>
              <option>Master</option>
              <option>Apply</option>
              <option>Research</option>
              <option>Create</option>
              <option>Lead</option>
            </select>
          </Field>
        </div>

        <Field label="Learning objective" htmlFor="assessment-objective">
          <textarea
            id="assessment-objective"
            value={assessment.objective}
            onChange={(event) => updateField("objective", event.target.value)}
            rows={4}
            placeholder="What should the learner demonstrate?"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Instructions" htmlFor="assessment-instructions">
          <textarea
            id="assessment-instructions"
            value={assessment.instructions}
            onChange={(event) =>
              updateField("instructions", event.target.value)
            }
            rows={6}
            placeholder="Describe the task clearly."
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Required evidence" htmlFor="assessment-evidence">
          <textarea
            id="assessment-evidence"
            value={assessment.evidence}
            onChange={(event) => updateField("evidence", event.target.value)}
            rows={4}
            placeholder="Example: Python code, explanation, screenshots, reflection, or research notes."
            className="inputStyle"
          />
        </Field>

        <Field label="Rubric or success criteria" htmlFor="assessment-rubric">
          <textarea
            id="assessment-rubric"
            value={assessment.rubric}
            onChange={(event) => updateField("rubric", event.target.value)}
            rows={6}
            placeholder={`Example:
Understanding: 25%
Accuracy: 25%
Application: 20%
Creativity: 15%
Communication and reflection: 15%`}
            className="inputStyle"
          />
        </Field>

        <div className="rounded-2xl bg-violet-50 p-5">
          <p className="font-bold text-violet-700">🤖 Luminery Tip</p>

          <p className="mt-2 leading-7 text-slate-700">
            Ask whether the learner is demonstrating meaningful capability or
            only recalling information. Strong assessments produce visible
            evidence of mastery.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Save Assessment
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-700 hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
      </form>

      {saved && (
        <div className="mt-8 rounded-2xl bg-green-50 p-6">
          <p className="font-bold text-green-700">
            Assessment design saved locally.
          </p>

          <p className="mt-2 text-slate-700">
            Later, we will connect this builder to Supabase and the course
            publishing workflow.
          </p>
        </div>
      )}

      <style>{`
        .inputStyle {
          margin-top: 0.75rem;
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgb(203 213 225);
          padding: 1rem;
          color: rgb(15 23 42);
          outline: none;
          transition: 0.2s;
        }

        .inputStyle:focus {
          border-color: rgb(59 130 246);
          box-shadow: 0 0 0 4px rgb(219 234 254);
        }
      `}</style>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block font-bold text-slate-800">
        {label}
      </label>

      {children}
    </div>
  );
}