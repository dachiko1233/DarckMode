import { useState } from "react";
import { Footer } from "./Footer";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";

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
