import { motion } from "framer-motion";
import SystemPanel, { SectionHeading } from "./SystemPanel.jsx";
import { PROJECTS, SIDE_QUESTS } from "../data.js";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ProjectCard({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
      whileHover={{ y: -4 }}
      className="card group flex flex-col transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/[0.08]"
    >
      <div className="card-head">
        <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
        <span className="rounded-full bg-green-50 px-2 py-0.5 text-green-700">✓ Cleared</span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
        <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
          {p.name}
          {p.alias && <span className="ml-2 font-mono text-xs font-normal text-muted">({p.alias})</span>}
        </h3>
        {p.badge && (
          <p className="mt-2 inline-flex self-start rounded-full bg-orange-soft px-2.5 py-1 text-xs font-semibold text-orange">
            ★ {p.badge}
          </p>
        )}
        <p className="mt-3 flex-1 leading-relaxed text-ink/75">{p.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold transition hover:text-orange"
        >
          <GitHubIcon /> View source <span className="transition group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <SectionHeading num="03" kicker="Dungeons cleared" title="Major projects" />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
      <SystemPanel title="Side quests" className="mt-6">
        <ul className="grid gap-5 sm:grid-cols-2">
          {SIDE_QUESTS.map((q) => (
            <li key={q.name} className="border-l-[3px] border-orange pl-4">
              <p className="font-semibold">{q.name}</p>
              <p className="mt-1 text-sm text-ink/70">{q.summary}</p>
            </li>
          ))}
        </ul>
      </SystemPanel>
    </section>
  );
}
