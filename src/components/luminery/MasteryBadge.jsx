import { FaMedal } from "react-icons/fa";

export default function MasteryBadge({
  title,
  description,
  color = "bg-blue-50",
}) {
  return (
    <div className={`rounded-2xl border p-4 ${color}`}>
      <div className="flex items-center gap-3">
        <FaMedal className="text-2xl text-yellow-500" />

        <div>
          <h3 className="font-bold text-slate-900">
            {title}
          </h3>

          <p className="text-sm text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}