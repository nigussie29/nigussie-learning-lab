import { useState } from "react";
import { createCourse } from "../../services/courses";
import { supabase } from "../../lib/supabase";


const initialCourse = {
  title: "",
  category: "",
  description: "",
  level: "Beginner",
  duration: "",
  prerequisites: "",
  targetAudience: "",
  problem: "",
  outcomes: "",
  modules: "",
  finalProject: "",
  researchExtension: "",
  careerConnection: "",
  status: "Draft",
};

export default function CourseBuilder() {
  const [course, setCourse] = useState(initialCourse);
  const [saved, setSaved] = useState(false);

  function updateField(field, value) {
    setCourse((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  }
function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
async function handleSubmit(event) {
  event.preventDefault();
  setSaved(false);

  // Check Supabase session FIRST
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("SUPABASE SESSION:", session);

  if (!session) {
    alert("No Supabase session found.");
    return;
  }

 const courseRecord = {
  title: course.title,
  slug: createSlug(course.title),
  short_description: course.description.slice(0, 160),
  category: course.category,
  description: course.description,
  level: course.level,
  duration: course.duration,
  prerequisites: course.prerequisites,
  target_audience: course.targetAudience,
  problem: course.problem,
  outcomes: course.outcomes,
  modules: course.modules,
  final_project: course.finalProject,
  research_extension: course.researchExtension,
  career_connection: course.careerConnection,
  status: course.status,
  price: 0,
};
  try {
    const savedCourse = await createCourse(courseRecord);

    console.log("Saved course:", savedCourse);

    setSaved(true);

    alert("Course saved successfully.");
  } catch (error) {
    console.error(error);

    alert(error.message);
  }
}
  function handleReset() {
    setCourse(initialCourse);
    setSaved(false);
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        SkillBridge Course Builder
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Build a complete SkillBridge course
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Design a course that follows the Course Blueprint, Mastery Pyramid,
        research framework, portfolio standards, and career pathways.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field label="Course title" htmlFor="course-title">
          <input
            id="course-title"
            type="text"
            value={course.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="Example: Linear Algebra Foundations"
            className="inputStyle"
            required
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Category" htmlFor="course-category">
            <input
              id="course-category"
              type="text"
              value={course.category}
              onChange={(event) =>
                updateField("category", event.target.value)
              }
              placeholder="Example: Applied Mathematics"
              className="inputStyle"
              required
            />
          </Field>

          <Field label="Level" htmlFor="course-level">
            <select
              id="course-level"
              value={course.level}
              onChange={(event) => updateField("level", event.target.value)}
              className="inputStyle"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </Field>
        </div>

        <Field label="Course description" htmlFor="course-description">
          <textarea
            id="course-description"
            value={course.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            rows={5}
            placeholder="Describe what learners will study, build, research, and achieve."
            className="inputStyle"
            required
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Duration" htmlFor="course-duration">
            <input
              id="course-duration"
              type="text"
              value={course.duration}
              onChange={(event) =>
                updateField("duration", event.target.value)
              }
              placeholder="Example: 6 weeks"
              className="inputStyle"
            />
          </Field>

          <Field label="Status" htmlFor="course-status">
            <select
              id="course-status"
              value={course.status}
              onChange={(event) => updateField("status", event.target.value)}
              className="inputStyle"
            >
              <option>Draft</option>
              <option>Review</option>
              <option>Ready to Publish</option>
            </select>
          </Field>
        </div>

        <Field label="Prerequisites" htmlFor="course-prerequisites">
          <textarea
            id="course-prerequisites"
            value={course.prerequisites}
            onChange={(event) =>
              updateField("prerequisites", event.target.value)
            }
            rows={4}
            placeholder="What should learners know before starting?"
            className="inputStyle"
          />
        </Field>

        <Field label="Target audience" htmlFor="course-audience">
          <textarea
            id="course-audience"
            value={course.targetAudience}
            onChange={(event) =>
              updateField("targetAudience", event.target.value)
            }
            rows={4}
            placeholder="Who is this course designed for?"
            className="inputStyle"
          />
        </Field>

        <Field label="Problem statement" htmlFor="course-problem">
          <textarea
            id="course-problem"
            value={course.problem}
            onChange={(event) => updateField("problem", event.target.value)}
            rows={5}
            placeholder="What meaningful learner or industry problem does this course solve?"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Learning outcomes" htmlFor="course-outcomes">
          <textarea
            id="course-outcomes"
            value={course.outcomes}
            onChange={(event) => updateField("outcomes", event.target.value)}
            rows={6}
            placeholder="Enter one measurable learning outcome per line."
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Modules" htmlFor="course-modules">
          <textarea
            id="course-modules"
            value={course.modules}
            onChange={(event) => updateField("modules", event.target.value)}
            rows={6}
            placeholder="Enter one module title per line."
            className="inputStyle"
          />
        </Field>

        <Field label="Final portfolio project" htmlFor="final-project">
          <textarea
            id="final-project"
            value={course.finalProject}
            onChange={(event) =>
              updateField("finalProject", event.target.value)
            }
            rows={5}
            placeholder="What meaningful project will learners build?"
            className="inputStyle"
          />
        </Field>

        <Field label="Research extension" htmlFor="course-research">
          <textarea
            id="course-research"
            value={course.researchExtension}
            onChange={(event) =>
              updateField("researchExtension", event.target.value)
            }
            rows={5}
            placeholder="What open question or investigation will learners explore?"
            className="inputStyle"
          />
        </Field>

        <Field label="Career connection" htmlFor="course-career">
          <textarea
            id="course-career"
            value={course.careerConnection}
            onChange={(event) =>
              updateField("careerConnection", event.target.value)
            }
            rows={5}
            placeholder="Which careers, skills, and opportunities does this course support?"
            className="inputStyle"
          />
        </Field>

        <div className="rounded-2xl bg-violet-50 p-5">
          <p className="font-bold text-violet-700">🤖 Luminery Tip</p>

          <p className="mt-2 leading-7 text-slate-700">
            Every course element should contribute to the same learner
            transformation. Remove content that does not support the stated
            problem and outcomes.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Save Course
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
            Course design saved successfully.
          </p>

          <p className="mt-2 text-slate-700">
            Later, this course will be stored in Supabase and connected to its
            modules, lessons, assessments, research, and portfolio projects.
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