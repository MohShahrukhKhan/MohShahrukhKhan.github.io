import { motion } from "framer-motion";
import { Network, Boxes, Radio, Database, Gauge, Bug } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { systemDesign } from "../../lib/portfolioData";

const ICONS = { Network, Boxes, Radio, Database, Gauge, Bug };

export default function SystemDesign() {
  return (
    <section id="system-design" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="System Design"
          title="Thinking in systems, not snippets."
          subtitle="Architectural patterns I reach for when designing backend platforms that need to last."
        />

        <div className="mt-16 grid sm:grid-cols-2 gap-4">
          {systemDesign.map((s, i) => {
            const Icon = ICONS[s.icon] || Network;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="surface rounded-2xl p-6 hover:-translate-y-1 hover:border-[var(--border-accent)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <div className="font-display text-lg font-semibold text-[var(--text-primary)]">{s.title}</div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
