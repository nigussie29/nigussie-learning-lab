import { useState } from "react";

export default function LibrarySearch({
  placeholder = "Search the Knowledge Library...",
  onSearch,
}) {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanQuery = query.trim();

    if (!cleanQuery) {
      return;
    }

    onSearch?.(cleanQuery);

    console.log("Library search:", cleanQuery);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <span
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        >
          🔍
        </span>

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        className="rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}