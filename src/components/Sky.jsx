import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Drone, FighterJet, RCPlane } from "./Aircraft.jsx";

// Fighter jets, RC planes and drones that cross the screen every few seconds.
let nextId = 0;
const rand = (a, b) => a + Math.random() * (b - a);
const KINDS = ["jet", "plane", "drone", "jet", "plane", "formation", "drone"];

function makeFlight(kind) {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const ltr = Math.random() < 0.5;
  const pad = 320;
  const y0 = rand(0.1, 0.9) * H;
  const y1 = Math.min(H * 0.92, Math.max(H * 0.08, y0 + rand(-0.4, 0.4) * H));
  const x0 = ltr ? -pad : W + pad;
  const x1 = ltr ? W + pad : -pad;
  const angle = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI;
  const dist = Math.hypot(x1 - x0, y1 - y0);
  const speed =
    kind === "jet" || kind === "formation" ? rand(700, 950) : kind === "plane" ? rand(230, 330) : rand(120, 170);
  return { id: nextId++, kind, x0, y0, x1, y1, angle, duration: dist / speed, ltr };
}

function Trail({ double, width = "w-40" }) {
  if (double)
    return (
      <div className={`flex ${width} flex-col gap-[7px]`}>
        <div className="h-[2px] bg-gradient-to-r from-transparent to-ink/25" />
        <div className="h-[2px] bg-gradient-to-r from-transparent to-ink/25" />
      </div>
    );
  return <div className={`h-[2px] ${width} bg-gradient-to-r from-transparent to-orange/50`} />;
}

function Body({ kind }) {
  if (kind === "jet")
    return (
      <div className="flex items-center">
        <Trail double width="w-48 sm:w-72" />
        <FighterJet className="h-8 w-16 sm:h-10 sm:w-20" />
      </div>
    );
  if (kind === "formation") {
    const pos = [
      { top: 45, left: 150 },
      { top: 0, left: 80 },
      { top: 90, left: 80 },
    ];
    return (
      <div className="relative h-[130px] w-[260px]">
        {pos.map((p, i) => (
          <div key={i} className="absolute flex items-center" style={{ top: p.top, left: p.left - 120 }}>
            <Trail double width="w-36" />
            <FighterJet className="h-8 w-16 sm:h-9 sm:w-[4.5rem]" accent={i === 0 ? "#ff5a1f" : "#2f6fed"} />
          </div>
        ))}
      </div>
    );
  }
  if (kind === "plane")
    return (
      <motion.div
        className="flex items-center"
        animate={{ y: [0, -10, 4, 0], rotate: [0, -3, 2, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Trail width="w-28" />
        <RCPlane className="h-8 w-20 sm:h-10 sm:w-24" />
      </motion.div>
    );
  return (
    <motion.div
      animate={{ y: [0, -14, 0, 8, 0], rotate: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <Drone className="h-11 w-11 sm:h-14 sm:w-14" />
    </motion.div>
  );
}

export default function Sky() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let first = true;
    let t;
    const spawn = () => {
      const kind = first ? "formation" : KINDS[Math.floor(Math.random() * KINDS.length)];
      first = false;
      if (!document.hidden) {
        const f = makeFlight(kind);
        setFlights((fs) => (fs.length >= 2 ? fs : [...fs, f]));
      }
      t = setTimeout(spawn, rand(6000, 11000));
    };
    t = setTimeout(spawn, 900);
    return () => clearTimeout(t);
  }, []);

  const remove = (id) => setFlights((fs) => fs.filter((f) => f.id !== id));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {flights.map((f) => (
        <motion.div
          key={f.id}
          className="absolute left-0 top-0"
          style={{ rotate: f.kind === "drone" ? 0 : f.angle }}
          initial={{ x: f.x0, y: f.y0 }}
          animate={{ x: f.x1, y: f.y1 }}
          transition={{ duration: f.duration, ease: "linear" }}
          onAnimationComplete={() => remove(f.id)}
        >
          <Body kind={f.kind} />
        </motion.div>
      ))}
    </div>
  );
}
