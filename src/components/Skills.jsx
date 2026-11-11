import { motion } from "framer-motion";
import SystemPanel, { SectionHeading } from "./SystemPanel.jsx";
import { ALSO_WORKED_WITH, SKILL_GROUPS } from "../data.js";

const RANKS = [
  { r: "S", min: 90, color: "#ff5a1f" },
  { r: "A", min: 75, color: "#141414" },
  { r: "B", min: 60, color: "#2f6fed" },
  { r: "C", min: 45, color: "#16a34a" },
  { r: "D", min: 30, color: "#8a8983" },
  { r: "E", min: 0, color: "#b5b4ae" },
];
const rankFor = (v) => RANKS.find((x) => v >= x.min);

function XPBar({ name, value, i }) {
  const rank = rankFor(value);
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-paper font-display text-base"
        style={{ color: rank.color }}
        title={`Rank ${rank.r}`}
      >
        {rank.r}
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex justify-between text-sm">
          <span className="font-medium">{name}</span>
          <span className="font-mono text-xs text-muted">{value * 10} xp</span>
        </div>
        <div className="relative h-1.5 overflow-hidden rounded-full bg-ink/[0.07]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: rank.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: i * 0.08 }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <SectionHeading num="02" kicker="Skill tree" title="Skills" />
      <div className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs">
        <span className="uppercase tracking-widest text-muted">Ranks</span>
        {[...RANKS].reverse().map((x) => (
          <span key={x.r} className="font-semibold" style={{ color: x.color }}>
            {x.r}
            {x.r !== "S" && <span className="ml-2 text-muted">→</span>}
          </span>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, gi) => (
          <SystemPanel key={g.title} title={g.title} right={g.training ? "in training" : null} delay={gi * 0.08}>
            <div className="space-y-4">
              {g.skills.map((s, i) => (
                <XPBar key={s.name} {...s} i={i} />
              ))}
            </div>
          </SystemPanel>
        ))}
      </div>
      <SystemPanel title="Also worked with" className="mt-6" bodyClass="flex flex-wrap gap-2 p-5">
        {ALSO_WORKED_WITH.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </SystemPanel>
    </section>
  );
}
