import { useState } from "react";

const initialPortfolio = {
  title: "",
  problemSolved: "",
  description: "",
  skills: "",
  tools: "",
  evidenceType: "Project",
  requiredEvidence: "",
  reflectionQuestions: "",
  careerConnection: "",
  masteryStage: "Build",
};

export default function PortfolioBuilder() {
  const [portfolio, setPortfolio] = useState(initialPortfolio);
  const [saved, setSaved] = useState(false);

  function updateField(field, value) {
    setPortfolio((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);

    console.log("SkillBridge portfolio artifact:", portfolio);
  }

  function handleReset() {
    setPortfolio(initialPortfolio);
    setSaved(false);
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        SkillBridge Portfolio Builder
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Design meaningful portfolio evidence
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Create an artifact that demonstrates what learners understand, build,
        apply, research, and communicate.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field label="Portfolio title" htmlFor="portfolio-title">
          <input
            id="portfolio-title"
            type="text"
            value={portfolio.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="Example: Python Matrix Calculator"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Problem solved" htmlFor="problem-solved">
          <textarea
            id="problem-solved"
            value={portfolio.problemSolved}
            onChange={(event) =>
              updateField("problemSolved", event.target.value)
            }
            rows={4}
            placeholder="What meaningful problem will this artifact solve?"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Artifact description" htmlFor="artifact-description">
          <textarea
            id="artifact-description"
            value={portfolio.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            rows={5}
            placeholder="Describe what learners will create and what the final result should demonstrate."
            className="inputStyle"
            required
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Evidence type" htmlFor="evidence-type">
            <select
              id="evidence-type"
              value={portfolio.evidenceType}
              onChange={(event) =>
                updateField("evidenceType", event.target.value)
              }
              className="inputStyle"
            >
              <option>Project</option>
              <option>Code</option>
              <option>Dashboard</option>
              <option>Research Report</option>
              <option>Presentation</option>
              <option>Mathematical Model</option>
              <option>Prototype</option>
              <option>Video Demonstration</option>
              <option>Technical Documentation</option>
            </select>
          </Field>

          <Field label="Mastery stage" htmlFor="portfolio-mastery-stage">
            <select
              id="portfolio-mastery-stage"
              value={portfolio.masteryStage}
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
        </div>

        <Field label="Skills demonstrated" htmlFor="skills-demonstrated">
          <textarea
            id="skills-demonstrated"
            value={portfolio.skills}
            onChange={(event) => updateField("skills", event.target.value)}
            rows={4}
            placeholder="Enter one skill per line, such as Linear Algebra, Python, Problem Solving, or Technical Communication."
            className="inputStyle"
          />
        </Field>

        <Field label="Tools and technologies" htmlFor="tools-technologies">
          <textarea
            id="tools-technologies"
            value={portfolio.tools}
            onChange={(event) => updateField("tools", event.target.value)}
            rows={4}
            placeholder="Example: Python, NumPy, VS Code, GitHub, Power BI, SQL."
            className="inputStyle"
          />
        </Field>

        <Field label="Required evidence" htmlFor="required-evidence">
          <textarea
            id="required-evidence"
            value={portfolio.requiredEvidence}
            onChange={(event) =>
              updateField("requiredEvidence", event.target.value)
            }
            rows={5}
            placeholder={`Example:
Source code
Screenshots
README documentation
Explanation of the mathematics
Testing results
Final reflection`}
            className="inputStyle"
          />
        </Field>

        <Field label="Reflection questions" htmlFor="reflection-questions">
          <textarea
            id="reflection-questions"
            value={portfolio.reflectionQuestions}
            onChange={(event) =>
              updateField("reflectionQuestions", event.target.value)
            }
            rows={5}
            placeholder={`Example:
What problem did you solve?
What was most challenging?
What would you improve?
What did you discover?
How could this project be extended?`}
            className="inputStyle"
          />
        </Field>

        <Field label="Career connection" htmlFor="portfolio-career-connection">
          <textarea
            id="portfolio-career-connection"
            value={portfolio.careerConnection}
            onChange={(event) =>
              updateField("careerConnection", event.target.value)
            }
            rows={4}
            placeholder="Explain how this artifact supports career readiness, internships, research opportunities, or entrepreneurship."
            className="inputStyle"
          />
        </Field>

        <div className="rounded-2xl bg-violet-50 p-5">
          <p className="font-bold text-violet-700">🤖 Luminery Tip</p>

          <p className="mt-2 leading-7 text-slate-700">
            A strong portfolio artifact should show the learner&apos;s thinking,
            decisions, process, evidence, and reflection—not only the final
            product.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Save Portfolio Artifact
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
            Portfolio artifact saved successfully.
          </p>

          <p className="mt-2 text-slate-700">
            Later, this builder will save the artifact to Supabase and connect
            it to the learner portfolio, course, and TalentBridge AI.
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