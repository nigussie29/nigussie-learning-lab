export default function PracticeSection({ practiceSection }) {
  if (
    !practiceSection ||
    typeof practiceSection !== "object" ||
    !Array.isArray(practiceSection.items) ||
    practiceSection.items.length === 0
  ) {
    return null;
  }

  const { passingScore, items } = practiceSection;

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Guided Practice
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Practice What You Learned
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Complete the following activities to strengthen your understanding
            before moving to the mastery assessment.
          </p>
        </div>

        {typeof passingScore === "number" && (
          <div className="rounded-2xl bg-blue-50 px-5 py-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
              Target Score
            </p>

            <p className="mt-1 text-2xl font-extrabold text-blue-900">
              {passingScore}%
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 space-y-6">
        {items.map((item, index) => (
          <PracticeItem
            key={item.itemId || `practice-item-${index}`}
            item={item}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

function PracticeItem({ item, number }) {
  if (!item || typeof item !== "object") {
    return null;
  }

  const typeLabel = formatItemType(item.type);

  return (
    <article className="rounded-2xl border border-slate-200 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-extrabold text-white">
            {number}
          </div>

          <div>
            <p className="text-sm font-bold text-blue-700">
              {typeLabel}
            </p>

            {typeof item.points === "number" && (
              <p className="text-sm text-slate-500">
                {item.points} points
              </p>
            )}
          </div>
        </div>

        {item.validationRules?.maxAttempts && (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-800">
            {item.validationRules.maxAttempts} attempts
          </span>
        )}
      </div>

      {item.prompt && (
        <h3 className="mt-5 text-lg font-bold leading-7 text-slate-900">
          {item.prompt}
        </h3>
      )}

      {item.type === "multiple_choice" && (
        <MultipleChoicePreview item={item} />
      )}

      {item.type === "interactive_puzzle" && (
        <InteractivePuzzlePreview item={item} />
      )}

      {!["multiple_choice", "interactive_puzzle"].includes(item.type) && (
        <UnsupportedPracticeItem item={item} />
      )}
    </article>
  );
}

function MultipleChoicePreview({ item }) {
  const options = item.config?.options;

  if (!Array.isArray(options) || options.length === 0) {
    return (
      <p className="mt-4 text-sm text-slate-500">
        No answer options are available for this question.
      </p>
    );
  }

  return (
    <fieldset className="mt-5 space-y-3">
      <legend className="sr-only">
        Choose an answer
      </legend>

      {options.map((option) => (
        <label
          key={option.id}
          className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-400 hover:bg-blue-50"
        >
          <input
            type="radio"
            name={item.itemId}
            value={option.id}
            className="mt-1 h-4 w-4"
          />

          <span className="leading-7 text-slate-700">
            {option.text}
          </span>
        </label>
      ))}
    </fieldset>
  );
}

function InteractivePuzzlePreview({ item }) {
  const initialState = item.config?.initialState;

  if (!initialState) {
    return (
      <p className="mt-4 text-sm text-slate-500">
        Puzzle configuration is unavailable.
      </p>
    );
  }

  return (
    <div className="mt-5 rounded-2xl bg-slate-50 p-5">
      <h4 className="font-bold text-slate-900">
        Grid Configuration
      </h4>

      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        <GridValue
          label="Robot Position"
          value={formatCoordinate(initialState.robotPosition)}
        />

        <GridValue
          label="Goal Position"
          value={formatCoordinate(initialState.goalPosition)}
        />

        <GridValue
          label="Obstacles"
          value={formatCoordinateList(initialState.obstacles)}
        />
      </dl>

      <p className="mt-5 text-sm leading-6 text-slate-500">
        The interactive grid controller will connect to the SBLOS practice
        engine during the interaction phase.
      </p>
    </div>
  );
}

function GridValue({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <dt className="text-sm font-bold text-slate-500">
        {label}
      </dt>

      <dd className="mt-1 font-semibold text-slate-900">
        {value}
      </dd>
    </div>
  );
}

function UnsupportedPracticeItem({ item }) {
  return (
    <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
      This activity type is not yet supported:
      <span className="ml-1 font-bold">
        {item.type || "unknown"}
      </span>
    </div>
  );
}

function formatItemType(type) {
  if (!type) {
    return "Practice Activity";
  }

  return type
    .split("_")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

function formatCoordinate(coordinate) {
  if (!Array.isArray(coordinate)) {
    return "Not provided";
  }

  return `(${coordinate.join(", ")})`;
}

function formatCoordinateList(coordinates) {
  if (!Array.isArray(coordinates) || coordinates.length === 0) {
    return "None";
  }

  return coordinates
    .map((coordinate) => formatCoordinate(coordinate))
    .join(", ");
}