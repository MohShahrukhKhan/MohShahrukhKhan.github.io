import { motion } from "framer-motion";

export default function SectionHeading({ kicker, title, subtitle, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {kicker && (
        <div className="text-caption text-[var(--amber)] mb-4">
          {kicker}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
