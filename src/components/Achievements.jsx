import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { SectionHeading } from "./SystemPanel.jsx";
import { Drone, FighterJet, RCPlane } from "./Aircraft.jsx";
import { ACHIEVEMENTS } from "../data.js";

const byId = Object.fromEntries(ACHIEVEMENTS.map((a) => [a.id, a]));

/* ---------- "Quest Cleared" pop-ups ---------- */
function QuestToasts({ trigger }) {
  const [toasts, setToasts] = useState([]);
  const fired = useRef(false);

  useEffect(() => {
    if (!trigger || fired.current) return;
    fired.current = true;
    const timers = [];
    ACHIEVEMENTS.forEach((a, i) => {
      timers.push(setTimeout(() => setToasts((t) => [...t, a]), 400 + i * 650));
      timers.push(setTimeout(() => setToasts((t) => t.filter((x) => x.id !== a.id)), 3600 + i * 650));
    });
    return () => timers.forEach(clearTimeout);
  }, [trigger]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex w-72 flex-col gap-2" aria-live="polite">
      <AnimatePresence>
        {toasts.map((a) => (
          <motion.div
            key={a.id}
            layout
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="card px-4 py-3 shadow-lg"
          >
            <p className="text-xs font-semibold text-green-700">✓ Quest cleared</p>
            <p className="mt-1 truncate text-sm font-semibold">{a.title}</p>
            <p className="text-xs text-orange">Reward: {a.place}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Airspace: jets, RC planes and drones for the VIT win ---------- */
function Airspace() {
  const craft = [
    { type: "jet", top: "14%", dur: 3.2, delay: 0, size: "h-8 w-16 sm:h-10 sm:w-20" },
    { type: "plane", top: "52%", dur: 8, delay: 1.2, size: "h-7 w-[4.5rem] sm:h-8 sm:w-20" },
    { type: "jet", top: "68%", dur: 3.6, delay: 3.5, size: "h-7 w-14 sm:h-8 sm:w-16", reverse: true },
    { type: "plane", top: "30%", dur: 9, delay: 5, size: "h-6 w-14 sm:h-7 sm:w-16", reverse: true },
  ];
  const drones = [
    { left: "10%", top: "60%", d: 3.2 },
    { left: "40%", top: "16%", d: 2.6 },
    { left: "64%", top: "58%", d: 3.8 },
    { left: "84%", top: "62%", d: 2.9 },
  ];

  return (
    <div className="relative mx-5 mt-4 h-52 overflow-hidden rounded-xl bg-sky-soft sm:mx-6 sm:h-60">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(47,111,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(47,111,237,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute right-4 top-4 h-16 w-16 overflow-hidden rounded-full border border-sky/40 bg-white/60">
        <div className="radar-sweep absolute inset-0 rounded-full" />
        <div className="absolute inset-[30%] rounded-full border border-sky/50" />
      </div>
      <p className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-sky">
        ● Airspace live — VIT Vellore
      </p>

      {craft.map((c, i) => (
        <motion.div
          key={i}
          className="absolute left-0 flex items-center"
          style={{ top: c.top, scaleX: c.reverse ? -1 : 1 }}
          animate={{ x: c.reverse ? ["1400%", "-200%"] : ["-200%", "1400%"], y: [0, -10, 6, 0] }}
          transition={{
            x: { duration: c.dur, delay: c.delay, repeat: Infinity, ease: "linear", repeatDelay: 2 },
            y: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {c.type === "jet" ? (
            <>
              <div className="flex w-24 flex-col gap-[6px]">
                <div className="h-[2px] bg-gradient-to-r from-transparent to-white" />
                <div className="h-[2px] bg-gradient-to-r from-transparent to-white" />
              </div>
              <FighterJet className={c.size} />
            </>
          ) : (
            <>
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-orange/50" />
              <RCPlane className={c.size} />
            </>
          )}
        </motion.div>
      ))}

      {drones.map((d, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: d.left, top: d.top }}
          animate={{ y: [0, -12, 0, 6, 0], x: [0, 8, 0, -8, 0], rotate: [0, 6, 0, -6, 0] }}
          transition={{ duration: d.d, repeat: Infinity, ease: "easeInOut" }}
        >
          <Drone className="h-10 w-10 sm:h-12 sm:w-12" />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- One-off jet formation across the screen when VIT appears ---------- */
function Flyover({ go }) {
  if (!go) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-0 flex items-center"
          style={{ top: `${i === 0 ? 30 : i === 1 ? 24 : 36}%` }}
          initial={{ x: i === 0 ? "-20vw" : "-30vw" }}
          animate={{ x: "120vw" }}
          transition={{ duration: 1.9, ease: "easeIn" }}
        >
          <div className="flex w-56 flex-col gap-[7px]">
            <div className="h-[2px] bg-gradient-to-r from-transparent to-ink/25" />
            <div className="h-[2px] bg-gradient-to-r from-transparent to-ink/25" />
          </div>
          <FighterJet className="h-10 w-20" accent={i === 0 ? "#ff5a1f" : "#2f6fed"} />
        </motion.div>
      ))}
    </div>
  );
}

function Head({ a, label = "✓ Quest cleared" }) {
  return (
    <div className="card-head">
      <span className="text-green-700">{label}</span>
      <span className="text-orange">{a.place}</span>
    </div>
  );
}

const pop = {
  initial: { opacity: 0, scale: 0.92, y: 30 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { type: "spring", stiffness: 180, damping: 20 },
};

export default function Achievements() {
  const sectionRef = useRef(null);
  const vitRef = useRef(null);
  const sectionSeen = useInView(sectionRef, { once: true, amount: 0.15 });
  const vitSeen = useInView(vitRef, { once: true, amount: 0.5 });
  const [flyover, setFlyover] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (!vitSeen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setFlyover(true);
    const t = setTimeout(() => setFlyover(false), 2600);
    return () => clearTimeout(t);
  }, [vitSeen]);

  useEffect(() => {
    if (!photo) return;
    const onKey = (e) => e.key === "Escape" && setPhoto(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [photo]);

  const sri = byId.srinathon;
  const vit = byId.vit;
  const rest = ACHIEVEMENTS.filter((a) => a.id !== "srinathon" && a.id !== "vit");

  return (
    <section id="achievements" ref={sectionRef} className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <SectionHeading num="04" kicker="Quest log" title="Achievements" />
      <QuestToasts trigger={sectionSeen} />
      <Flyover go={flyover} />

      <div className="space-y-6">
        {/* Srinathon — with photos */}
        <motion.article {...pop} className="card">
          <Head a={sri} />
          <div className="grid gap-6 px-5 pb-5 pt-3 sm:px-6 sm:pb-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="kicker">National level</p>
              <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight sm:text-3xl">{sri.title}</h3>
              <p className="mt-2 font-mono text-xs text-muted">{sri.org}</p>
              <p className="mt-4 leading-relaxed text-ink/80">{sri.note}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-3">
              {sri.photos.map((ph, i) => (
                <motion.button
                  key={ph.src}
                  onClick={() => setPhoto(ph)}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 * i }}
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl bg-paper"
                  aria-label={`Open photo: ${ph.alt}`}
                >
                  <img src={ph.src} alt={ph.alt} loading="lazy" className="h-full w-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.article>

        {/* VIT Aerodominator — jets, planes & drones */}
        <motion.article ref={vitRef} {...pop} className="card overflow-hidden">
          <Head a={vit} label="✓ Quest cleared — air superiority" />
          <Airspace />
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
            <div>
              <p className="kicker">VIT Vellore</p>
              <h3 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">{vit.title}</h3>
              <p className="mt-2 text-ink/80">{vit.note}</p>
            </div>
            <p className="font-display text-6xl leading-none text-orange sm:text-7xl">
              2<span className="text-2xl">nd</span>
            </p>
          </div>
        </motion.article>

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((a) => (
            <motion.article key={a.id} {...pop} className="card">
              <Head a={a} />
              <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
                <h3 className="font-display text-xl tracking-tight">{a.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{a.org}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {photo && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={photo.alt}
          >
            <motion.figure
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="card max-h-full max-w-4xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={photo.src} alt={photo.alt} className="max-h-[78vh] w-auto" />
              <figcaption className="flex items-center justify-between gap-4 px-2 pt-2 font-mono text-xs text-muted">
                {photo.alt}
                <button onClick={() => setPhoto(null)} className="font-medium text-ink hover:text-orange">
                  Close ✕
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
