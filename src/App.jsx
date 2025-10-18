import { useState } from "react";
import { Footer } from "./Footer";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import Services from "./Services";
import HowTo from "./HowTo";

export default function App() {
  const [dark, setDark] = useState(true);
  const [page, setPage] = useState("home");
  function toggleDark() {
    setDark(!dark);
  }
  return (
    <div
      className={`min-h-screen scroll-smooth transition ${
        dark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <NavBar dark={dark} onDark={toggleDark} setPage={setPage} />

      {page === "home" && <Hero dark={dark} />}

      {page === "features" && <Features dark={dark} />}
      {page === "services" && <Services dark={dark} />}

      <HowTo dark={dark} />

      <Footer dark={dark} />
    </div>
  );
}
