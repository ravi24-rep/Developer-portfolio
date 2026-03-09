/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ParallaxHero from "./components/ParallaxHero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-50 font-sans selection:bg-indigo-500/30">
      <CustomCursor />
      <Navbar />
      <main>
        <ParallaxHero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
