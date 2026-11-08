import { motion } from "framer-motion";

// A white card with an ink border and a hard offset shadow.
export default function SystemPanel({ title, right, children, className = "", bodyClass = "p-5 sm:p-6", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={`card ${className}`}
    >
      {title && (
        <div className="card-head">
          <span>{title}</span>
          {right && <span className="text-muted">{right}</span>}
        </div>
      )}
      <div className={bodyClass}>{children}</div>
    </motion.div>
  );
}

export function SectionHeading({ num, kicker, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="mb-8 flex items-end justify-between gap-4 border-b-[1.5px] border-ink pb-4 sm:mb-10"
    >
      <div>
        <p className="kicker mb-3">{kicker}</p>
        <h2 className="section-title">{title}</h2>
      </div>
      <span className="font-display text-5xl leading-none text-ink/10 sm:text-7xl">{num}</span>
    </motion.div>
  );
}
