import { motion } from "framer-motion";

// A soft white card.
export default function SystemPanel({ title, right, children, className = "", bodyClass = "p-5 sm:p-6", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={`card ${className}`}
    >
      {title && (
        <div className="card-head">
          <span className="font-semibold text-ink">{title}</span>
          {right && <span>{right}</span>}
        </div>
      )}
      <div className={title ? bodyClass.replace(/\bp-5\b/, "px-5 pb-5 pt-4") : bodyClass}>{children}</div>
    </motion.div>
  );
}

export function SectionHeading({ num, kicker, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45 }}
      className="mb-8 sm:mb-12"
    >
      <p className="kicker mb-3">
        <span className="text-ink/30">{num} /</span> {kicker}
      </p>
      <h2 className="section-title">{title}</h2>
    </motion.div>
  );
}
