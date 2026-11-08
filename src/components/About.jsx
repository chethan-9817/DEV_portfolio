import { motion } from "framer-motion";
import SystemPanel, { SectionHeading } from "./SystemPanel.jsx";
import { PROFILE } from "../data.js";

const STATS = [
  ["Class", "CS-DS Builder"],
  ["Guild", "SJEC, Mangaluru"],
  ["Title", "Consistent Shipper"],
  ["Status", "Moody — but shipping"],
  ["Best stage", "Competitions"],
];

const ATTRS = [
  ["Curiosity", 92],
  ["Consistency", 85],
  ["Competition mode", 94],
  ["Ship rate", 88],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <SectionHeading num="01" kicker="Player status" title="About me" />
      <div className="grid gap-6 lg:grid-cols-5">
        <SystemPanel title="Status window" right="2nd year" className="lg:col-span-2">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Level</p>
              <p className="font-display text-7xl leading-none">02</p>
            </div>
            <p className="pb-1 text-right font-mono text-xs text-muted">
              B.E. year 2 of 4
              <br />→ next: Lv. 03
            </p>
          </div>
          <div className="mb-6 h-3 border-[1.5px] border-ink">
            <motion.div
              className="h-full bg-orange"
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
            />
          </div>
          <dl className="divide-y divide-ink/10 text-sm">
            {STATS.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2.5">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </SystemPanel>

        <SystemPanel title="Player log" className="lg:col-span-3" delay={0.1}>
          <p className="text-xl font-semibold leading-snug sm:text-2xl">{PROFILE.role}</p>
          <p className="mb-6 mt-1 font-mono text-xs text-muted">
            {PROFILE.college} · {PROFILE.location}
          </p>
          {PROFILE.bio.map((para) => (
            <p key={para.slice(0, 20)} className="mb-4 leading-relaxed text-ink/80">
              {para}
            </p>
          ))}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ATTRS.map(([label, val], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="border-[1.5px] border-ink p-3"
              >
                <p className="font-display text-3xl leading-none">{val}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">{label}</p>
              </motion.div>
            ))}
          </div>
        </SystemPanel>
      </div>
    </section>
  );
}
