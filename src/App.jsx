import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  function toggleDark() {
    setDark(!dark);
  }
  return (
    <div
      className={`min-h-screen transition ${dark ? "bg-gray-900" : "bg-white"}`}
    >
      <NavBar dark={dark} onDark={toggleDark} />
      <Hero dark={dark} />
      <Features dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

function NavBar({ dark, onDark }) {
  return (
    <nav
      className={`w-full fixed top-0 left-0 z-10 transition ${
        dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800 shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-500">Mybrand</h1>

        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            About us
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Service
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>

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

function Hero({ dark }) {
  return (
    <section
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 pt-24 transition-normal${
        dark
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800"
      }`}
    >
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to the Day & Night site
        </h1>
        <p className="text-lg mb-6">This shows you how to relax mentally</p>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Start Now
        </button>
      </div>

      {dark ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
          alt="Hero Illustration"
          className="w-64 md:w-96 drop-shadow-lg"
        />
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/512/5570/5570589.png"
          alt="Hero Illustration"
          className="w-64 md:w-96 drop-shadow-lg"
        />
      )}
    </section>
  );
}

function FeatureCard({ title, children, dark }) {
  return (
    <div
      className={`rounded-2xl p-6 w-72 text-center shadow-md transition ${
        dark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      }`}
    >
      <h3 className="text-xl font-semibold mb-3 text text-blue-500">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Features({ dark }) {
  return (
    <section
      className={`flex flex-wrap gap-6 justify-center py-16 transition${
        dark ? "bg-gray-900" : " text-gray-50"
      }`}
    >
      <FeatureCard title="Inner peace" dark={dark}>
        Our website cares about your peace of mind !!
      </FeatureCard>
      <FeatureCard title="Safety" dark={dark}>
        Your personal data is secure.
      </FeatureCard>
      <FeatureCard title="Simplicity" dark={dark}>
        A simple, clear, and psychologically tailored design for you !
      </FeatureCard>
    </section>
  );
}

function Footer({ dark }) {
  return (
    <footer
      className={`text-center py-6 transition ${
        dark ? "bg-gray-950 text-gray-400" : "bg-gray-200 text-gray-700"
      }`}
    >
      <p>© 2025 MyBrand. Day & Night. All rights reserved.</p>
    </footer>
  );
}
