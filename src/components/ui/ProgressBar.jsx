export default function ProgressBar({ value = 0 }) {
  return (
    <div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${value}%` }}
        />
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-600">
        {value}% Complete
      </p>
    </div>
  );
}