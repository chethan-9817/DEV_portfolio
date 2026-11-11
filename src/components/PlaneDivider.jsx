import { motion } from "framer-motion";
import { Drone, FighterJet, RCPlane } from "./Aircraft.jsx";

// A dashed flight path between sections; an aircraft crosses it when it scrolls into view.
export default function PlaneDivider({ reverse = false, label, craft = "plane" }) {
  const Craft =
    craft === "jet" ? (
      <FighterJet className="h-9 w-[4.5rem] sm:h-10 sm:w-20" />
    ) : craft === "drone" ? (
      <Drone className="h-10 w-10" />
    ) : (
      <RCPlane className="h-8 w-20 sm:h-10 sm:w-24" />
    );

  return (
    <div className="relative mx-auto my-10 h-24 max-w-6xl overflow-hidden px-4 sm:h-28 sm:px-6" aria-hidden="true">
      <div className="absolute inset-x-4 top-1/2 border-t border-dashed border-ink/15 sm:inset-x-6" />
      {label && (
        <p className="absolute inset-x-0 top-1/2 mt-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ink/30">
          {label}
        </p>
      )}
      <motion.div
        className="absolute left-0 top-1/2"
        style={{ scaleX: reverse ? -1 : 1 }}
        initial={{ x: reverse ? "105vw" : "-20vw", y: "-50%" }}
        whileInView={{
          x: reverse ? "-20vw" : "105vw",
          y: craft === "drone" ? ["-50%", "-110%", "-20%", "-70%"] : ["-50%", "-80%", "-35%", "-55%"],
        }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: craft === "jet" ? 1.8 : craft === "drone" ? 5 : 3.4, ease: "easeInOut" }}
      >
        <div className="flex items-center">
          {craft !== "drone" && (
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-ink/30 sm:w-40" />
          )}
          {Craft}
        </div>
      </motion.div>
    </div>
  );
}
