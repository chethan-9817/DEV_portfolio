import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["achievements", "Quests"],
  ["guilds", "Clubs"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "border-b-[1.5px] border-ink bg-paper/95 backdrop-blur" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-sm tracking-tight">
          <span className="h-3 w-3 bg-orange" /> CHETHAN K S
        </a>
        <ul className="hidden gap-7 md:flex">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70 underline-offset-4 transition hover:text-ink hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border-[1.5px] border-ink bg-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-[1.5px] w-4 bg-ink transition ${open ? "translate-y-[3.75px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-4 bg-ink transition ${open ? "-translate-y-[3.75px] -rotate-45" : ""}`} />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4 md:hidden"
          >
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block border-t border-ink/15 py-3 font-mono text-xs uppercase tracking-[0.2em]"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
