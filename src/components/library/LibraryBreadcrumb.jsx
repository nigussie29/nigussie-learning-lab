import { Link } from "react-router-dom";

export default function LibraryBreadcrumb({ items = [] }) {
  const breadcrumbItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Knowledge Library",
      path: "/library",
    },
    ...items,
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <span className="text-slate-400" aria-hidden="true">
                  /
                </span>
              )}

              {isLast || !item.path ? (
                <span className="font-bold text-slate-900">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="font-semibold text-slate-500 transition hover:text-blue-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}