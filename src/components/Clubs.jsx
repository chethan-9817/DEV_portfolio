import { motion } from "framer-motion";
import SystemPanel, { SectionHeading } from "./SystemPanel.jsx";
import { RCPlane } from "./Aircraft.jsx";
import { CLUBS, INTERESTS } from "../data.js";

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#141414" strokeWidth="2" aria-hidden="true">
      <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
      <path d="M14 4l-4 16" stroke="#ff5a1f" />
    </svg>
  );
}

export default function Clubs() {
  return (
    <section id="guilds" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <SectionHeading num="05" kicker="Guilds & traits" title="Clubs & interests" />
      <div className="grid gap-6 lg:grid-cols-2">
        <SystemPanel title="Guild membership">
          <ul className="space-y-4">
            {CLUBS.map((c, i) => (
              <motion.li
                key={c.name}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-4 border-[1.5px] border-ink p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-paper">
                  {c.icon === "plane" ? <RCPlane className="h-6 w-11" /> : <CodeIcon />}
                </div>
                <div>
                  <p className="font-display text-lg tracking-tight">{c.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-orange">{c.rank}</p>
                  <p className="mt-1 text-sm text-ink/70">{c.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </SystemPanel>

        <SystemPanel title="Passive traits" delay={0.1}>
          <ul className="divide-y divide-ink/10">
            {INTERESTS.map((it, i) => (
              <motion.li
                key={it.label}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 py-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-[1.5px] border-ink text-lg">
                  {it.icon}
                </span>
                <span className="font-medium">{it.label}</span>
              </motion.li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-xs text-muted">Effect: +10% motivation whenever a story involves levelling up.</p>
        </SystemPanel>
      </div>
    </section>
  );
}
