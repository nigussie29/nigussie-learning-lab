import LibrarySidebar from "./LibrarySidebar";
import LibraryBreadcrumb from "./LibraryBreadcrumb";
import LibrarySearch from "./LibrarySearch";

export default function LibraryLayout({
  children,
  breadcrumbs = [],
  searchPlaceholder = "Search the Knowledge Library...",
}) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-white">
          <LibrarySidebar />
        </aside>

        <section className="min-w-0">
          <div className="border-b border-slate-200 bg-white px-6 py-5 lg:px-10">
            <div className="mx-auto max-w-7xl space-y-4">
              <LibraryBreadcrumb items={breadcrumbs} />

              <LibrarySearch placeholder={searchPlaceholder} />
            </div>
          </div>

          <div className="px-6 py-8 lg:px-10">
            <div className="mx-auto max-w-7xl">{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
}