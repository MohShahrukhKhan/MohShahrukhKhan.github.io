import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../../lib/portfolioData";

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="Skills"
          title="A toolkit built for production."
          subtitle="Battle-tested across enterprise codebases, real customer load, and tight delivery cycles."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-[var(--accent)] text-black"
                  : "surface text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-accent)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {skills[active].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="surface rounded-xl px-5 py-4 flex items-center justify-between hover:border-[var(--border-accent)] transition-colors"
              >
                <span className="text-sm text-[var(--text-primary)] font-medium">{s}</span>
                <span className="font-mono text-[10px] text-[var(--accent)]/60">{active.toLowerCase().slice(0, 3)}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 marquee-mask overflow-hidden">
          <div className="flex gap-10 animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-10">
                {["Java", "Spring Boot", "PostgreSQL", "Microservices", "REST", "Hibernate", "Docker", "Redis", "SQL", "JPA", "Spring Security", "Maven"].map((t) => (
                  <span key={t + k}>{t} ·</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
