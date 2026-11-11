import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROFILE } from "../data.js";

const SYS = "[ SYSTEM ] A new player has appeared:";
const [FIRST, ...REST] = PROFILE.name.split(" ");
const LAST = REST.join(" ");
const TOTAL = SYS.length + FIRST.length + LAST.length;

// Renders `text` with the first `n` chars visible and the rest reserved (no layout jump).
function Typed({ text, n }) {
  const k = Math.max(0, Math.min(n, text.length));
  return (
    <>
      {text.slice(0, k)}
      <span className="invisible">{text.slice(k)}</span>
    </>
  );
}

export default function Hero() {
  const [count, setCount] = useState(0);
  const [declined, setDeclined] = useState(false);
  const done = count >= TOTAL;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(TOTAL);
      return;
    }
    let id;
    const start = setTimeout(() => {
      id = setInterval(() => {
        setCount((c) => {
          if (c >= TOTAL) {
            clearInterval(id);
            return c;
          }
          return c + 1;
        });
      }, 38);
    }, 500);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, []);

  const sysN = count;
  const firstN = count - SYS.length;
  const lastN = count - SYS.length - FIRST.length;
  const caretAt = count < SYS.length ? "sys" : count < SYS.length + FIRST.length ? "first" : "last";

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center px-4 pb-16 pt-24 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        {/* system notification */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex max-w-full items-center gap-3 rounded-full border border-ink/10 bg-white px-4 py-2 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inset-0 animate-ping rounded-full bg-orange opacity-60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-orange" />
          </span>
          <p className="font-mono text-xs sm:text-sm">
            <span className="font-semibold text-sky">
              <Typed text="[ SYSTEM ]" n={sysN} />
            </span>
            <Typed text={SYS.slice(10)} n={sysN - 10} />
            {caretAt === "sys" && !done && <span className="caret" />}
          </p>
        </motion.div>

        <h1 className="mt-6 font-display leading-[0.86] tracking-tight" aria-label={PROFILE.name}>
          <span className="block text-[16vw] sm:text-[9.5rem] lg:text-[11rem]">
            <Typed text={FIRST} n={firstN} />
            {caretAt === "first" && <span className="caret" style={{ width: "0.08em" }} />}
          </span>
          <span className="flex items-end gap-4 text-[16vw] sm:text-[9.5rem] lg:text-[11rem]">
            <span>
              <Typed text={LAST} n={lastN} />
              {caretAt === "last" && <span className="caret" style={{ width: "0.08em" }} />}
            </span>
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={done ? { scale: 1, rotate: -8 } : {}}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
              className="mb-[0.12em] inline-flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full border-2 border-orange text-orange sm:h-28 sm:w-28"
            >
              <span className="font-mono text-[10px] font-semibold tracking-widest sm:text-xs">LEVEL</span>
              <span className="font-display text-3xl leading-none sm:text-5xl">02</span>
            </motion.span>
          </span>
        </h1>

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 grid gap-8 border-t border-ink/10 pt-6 md:grid-cols-[1fr_auto] md:items-end"
            >
              <div>
                <p className="max-w-xl text-lg leading-snug text-ink/80 sm:text-2xl">“{PROFILE.tagline}”</p>
                <p className="mt-3 text-sm text-muted">CS-DS student · SJEC, Mangaluru · Aero Club</p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <a href="#about" className="btn">
                  Enter ↓
                </a>
                <button
                  onClick={() => setDeclined(true)}
                  className="text-sm font-medium text-muted underline-offset-4 hover:text-ink hover:underline"
                >
                  Decline
                </button>
              </div>
              <AnimatePresence>
                {declined && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-xs text-orange md:col-span-2"
                  >
                    [ SYSTEM ] Declining is not an option. Press Enter.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
