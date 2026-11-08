import { MotionConfig } from "framer-motion";
import Sky from "./components/Sky.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Clubs from "./components/Clubs.jsx";
import Contact from "./components/Contact.jsx";
import PlaneDivider from "./components/PlaneDivider.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Sky />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PlaneDivider craft="plane" label="Waypoint 01 → 02" />
        <Skills />
        <PlaneDivider craft="jet" reverse label="Waypoint 02 → 03" />
        <Projects />
        <PlaneDivider craft="drone" label="Waypoint 03 → 04" />
        <Achievements />
        <PlaneDivider craft="jet" label="Waypoint 04 → 05" />
        <Clubs />
        <PlaneDivider craft="plane" reverse label="Waypoint 05 → 06" />
        <Contact />
      </main>
      <footer className="mx-auto mt-24 flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t-[1.5px] border-ink px-4 py-6 font-mono text-xs text-muted sm:px-6">
        <p>© {new Date().getFullYear()} Chethan K S</p>
        <p>Mangaluru, India</p>
      </footer>
    </MotionConfig>
  );
}
