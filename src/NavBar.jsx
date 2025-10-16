export function NavBar({ dark, onDark, setPage }) {
  return (
    <nav
      className={`w-full fixed top-0 left-0 z-10 transition ${
        dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800 shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-500">Mybrand</h1>

        <div className="flex gap-6 items-center">
          <button
            onClick={() => setPage("home")}
            className="hover:text-blue-500 transition"
          >
            Home
          </button>
          <button
            onClick={() => setPage("features")}
            className="hover:text-blue-500 transition"
          >
            About us
          </button>
          <button
            onClick={() => setPage("services")}
            className="hover:text-blue-500 transition"
          >
            Services
          </button>

          <button
            onClick={onDark}
            className="border px-3 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition "
          >
            {dark ? "☀️Day" : "🌙Night"}
          </button>
        </div>
      </div>
    </nav>
  );
}
