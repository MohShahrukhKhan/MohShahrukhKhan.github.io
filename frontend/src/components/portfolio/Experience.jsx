import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../../lib/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="Experience"
          title="MobiOffice — where the work happens."
          subtitle="One role, deep impact. Every system described below shipped to production and handles real enterprise load."
        />

        <div className="mt-16 relative">
          {experience.map((e, idx) => (
            <motion.article
              key={e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-14 lg:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-0 lg:left-2 top-1 h-9 w-9 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center">
                <Briefcase size={16} className="text-[var(--accent)]" />
              </div>

              <div className="surface rounded-2xl p-6 lg:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="font-display text-xl lg:text-2xl font-semibold text-[var(--text-primary)]">{e.role}</div>
                    <div className="text-[var(--text-secondary)] text-sm mt-1">
                      {e.company} · {e.location}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-[var(--accent)]/80 tracking-wider uppercase">
                    {e.period}
                  </div>
                </div>

                <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {e.summary}
                </p>

                <ul className="mt-6 space-y-4">
                  {e.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle size={14} className="mt-0.5 text-[var(--accent)] flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
