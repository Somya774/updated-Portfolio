import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HorizontalSection from "./components/HorizontalSection";
import Experience from "./components/Experience";
import Skills from "./components/skills";
import CursorGlow from "./components/cursorglow";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <CursorGlow/>
      
      <Navbar />
      <Hero />
      <About />
      <HorizontalSection />
      <Experience />
      <Skills />
      <Contact/>
    </main>
  );
}