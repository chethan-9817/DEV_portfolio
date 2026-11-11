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
      <main className="relative z-10">
        <Hero />
        <About />
        <PlaneDivider craft="plane" />
        <Skills />
        <PlaneDivider craft="jet" reverse />
        <Projects />
        <PlaneDivider craft="drone" />
        <Achievements />
        <PlaneDivider craft="jet" />
        <Clubs />
        <PlaneDivider craft="plane" reverse />
        <Contact />
      </main>
      <footer className="relative z-10 mx-auto mt-24 flex max-w-6xl flex-wrap items-center justify-between gap-2 border-t border-ink/10 px-4 py-8 text-sm text-muted sm:px-6">
        <p>© {new Date().getFullYear()} Chethan K S</p>
        <p>Mangaluru, India</p>
      </footer>
    </MotionConfig>
  );
}
