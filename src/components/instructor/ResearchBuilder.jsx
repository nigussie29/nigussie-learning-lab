import { useState } from "react";

const initialResearch = {
  title: "",
  problem: "",
  researchQuestion: "",
  background: "",
  method: "",
  evidence: "",
  expectedOutcome: "",
  ethics: "",
  portfolioArtifact: "",
  masteryStage: "Research",
};

export default function ResearchBuilder() {
  const [research, setResearch] = useState(initialResearch);
  const [saved, setSaved] = useState(false);

  function updateField(field, value) {
    setResearch((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);

    console.log("SkillBridge research activity:", research);
  }

  function handleReset() {
    setResearch(initialResearch);
    setSaved(false);
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
        SkillBridge Research Builder
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Design a Meaningful Research Investigation
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Guide learners from curiosity to evidence, analysis, discovery, and
        communication.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field label="Research title" htmlFor="research-title">
          <input
            id="research-title"
            type="text"
            value={research.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="Example: Matrix Multiplication in Neural Networks"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Problem statement" htmlFor="research-problem">
          <textarea
            id="research-problem"
            value={research.problem}
            onChange={(event) => updateField("problem", event.target.value)}
            rows={5}
            placeholder="What real-world problem or knowledge gap will learners investigate?"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Research question" htmlFor="research-question">
          <textarea
            id="research-question"
            value={research.researchQuestion}
            onChange={(event) =>
              updateField("researchQuestion", event.target.value)
            }
            rows={4}
            placeholder="What specific question will guide the investigation?"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Background" htmlFor="research-background">
          <textarea
            id="research-background"
            value={research.background}
            onChange={(event) =>
              updateField("background", event.target.value)
            }
            rows={4}
            placeholder="What prior knowledge or context should learners review?"
            className="inputStyle"
          />
        </Field>

        <Field label="Research method" htmlFor="research-method">
          <textarea
            id="research-method"
            value={research.method}
            onChange={(event) => updateField("method", event.target.value)}
            rows={4}
            placeholder="Describe how learners will investigate the question."
            className="inputStyle"
          />
        </Field>

        <Field label="Evidence to collect" htmlFor="research-evidence">
          <textarea
            id="research-evidence"
            value={research.evidence}
            onChange={(event) => updateField("evidence", event.target.value)}
            rows={4}
            placeholder="Examples: data, observations, experiments, calculations, sources, or model results."
            className="inputStyle"
          />
        </Field>

        <Field label="Expected outcome" htmlFor="research-outcome">
          <textarea
            id="research-outcome"
            value={research.expectedOutcome}
            onChange={(event) =>
              updateField("expectedOutcome", event.target.value)
            }
            rows={4}
            placeholder="What should learners discover, explain, compare, or create?"
            className="inputStyle"
          />
        </Field>

        <Field label="Research ethics" htmlFor="research-ethics">
          <textarea
            id="research-ethics"
            value={research.ethics}
            onChange={(event) => updateField("ethics", event.target.value)}
            rows={4}
            placeholder="Describe citation, privacy, fairness, safety, or responsible research requirements."
            className="inputStyle"
          />
        </Field>

        <Field label="Portfolio artifact" htmlFor="portfolio-artifact">
          <textarea
            id="portfolio-artifact"
            value={research.portfolioArtifact}
            onChange={(event) =>
              updateField("portfolioArtifact", event.target.value)
            }
            rows={4}
            placeholder="Example: Research report, notebook, presentation, visualization, or prototype."
            className="inputStyle"
          />
        </Field>

        <Field label="Mastery stage" htmlFor="mastery-stage">
          <select
            id="mastery-stage"
            value={research.masteryStage}
            onChange={(event) =>
              updateField("masteryStage", event.target.value)
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

        <div className="rounded-2xl bg-violet-50 p-5">
          <p className="font-bold text-violet-700">🤖 Luminery Tip</p>

          <p className="mt-2 leading-7 text-slate-700">
            Every research activity should begin with curiosity and end with
            evidence. Encourage learners to ask meaningful questions before
            searching for answers.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Save Research Activity
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
        <div className="mt-8 rounded-2xl bg-green-50 p-5">
          <p className="font-bold text-green-700">
            Research activity saved successfully.
          </p>

          <p className="mt-2 text-slate-700">
            Later, this builder will save research activities to Supabase and
            connect them to a course.
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
          border-color: rgb(139 92 246);
          box-shadow: 0 0 0 4px rgb(237 233 254);
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