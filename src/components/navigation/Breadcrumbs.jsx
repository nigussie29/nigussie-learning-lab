import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="text-slate-400"
                  >
                    /
                  </span>
                )}

                {isLast || !item.to ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast
                        ? "font-bold text-slate-900"
                        : "font-medium text-slate-500"
                    }
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className="font-semibold text-slate-500 transition hover:text-blue-700"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}