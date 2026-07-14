export default function InstructorLayout({
  sidebar,
  header,
  children,
}) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-white">
          {sidebar}
        </aside>

        <div className="min-w-0">
          {header}

          <div className="px-6 py-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
