import { motion } from "framer-motion";

export default function SectionHeading({ kicker, title, subtitle, align = "left", testId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      data-testid={testId}
    >
      {kicker && (
        <div className={`font-mono text-[11px] tracking-[0.25em] uppercase text-blue-400/90 mb-4 ${align === "center" ? "" : ""}`}>
          {kicker}
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-zinc-400 leading-relaxed text-base sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
