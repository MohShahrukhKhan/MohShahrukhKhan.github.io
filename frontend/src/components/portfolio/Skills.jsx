import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../../lib/portfolioData";

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" data-testid="skills-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="06 · Technical Skills"
          title="A toolkit built for production."
          subtitle="Battle-tested across enterprise codebases, real customer load, and tight delivery cycles."
          testId="skills-heading"
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              data-testid={`skill-tab-${c.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-white text-black"
                  : "glass text-zinc-300 hover:text-white hover:border-white/20"
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
            data-testid={`skills-grid-${active.toLowerCase().replace(/\s/g, "-")}`}
          >
            {skills[active].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="glass rounded-xl px-5 py-4 flex items-center justify-between hover:border-white/20 transition-colors"
              >
                <span className="text-sm text-white font-medium">{s}</span>
                <span className="font-mono text-[10px] text-blue-400/70">{active.toLowerCase().slice(0, 3)}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Marquee strip */}
        <div className="mt-16 marquee-mask overflow-hidden">
          <div className="flex gap-10 animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-10">
                {["Java", "Spring Boot", "PostgreSQL", "Microservices", "REST", "Hibernate", "Docker", "MySQL", "Maven", "JPA", "Claude Code", "OpenCode", "MCP"].map((t) => (
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
