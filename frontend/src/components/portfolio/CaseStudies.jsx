import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { caseStudies, bugsFixed } from "../../lib/portfolioData";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="Case Studies"
          title="Enterprise systems, shipped."
          subtitle="Three platforms built at MobiOffice — each solving real operational problems with measurable results."
        />

        <div className="mt-16 space-y-8">
          {caseStudies.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="group relative surface rounded-3xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-30 pointer-events-none`} />
              <div className="relative p-7 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 surface rounded-full px-3 py-1 text-caption text-[var(--text-tertiary)]">
                      <Layers size={11} /> Case {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <div className="mt-6 grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-[var(--text-primary)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--accent)]/80 font-mono">{p.tagline}</p>

                    <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">{p.context}</p>
                  </div>

                  <div className="lg:col-span-5">
                    <Label>Approach</Label>
                    <ul className="mt-3 space-y-3">
                      {p.approach.map((a, i) => (
                        <li key={i} className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3">
                    <Label>Results</Label>
                    <ul className="mt-3 space-y-2">
                      {p.results.map((r, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <Label>Stack</Label>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[var(--text-tertiary)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            kicker="Production Debugging"
            title="Bugs don't ask for permission."
            subtitle="Three production incidents diagnosed and fixed — with root cause analysis and the actual solution."
          />

          <div className="mt-12 space-y-5">
            {bugsFixed.map((bug, i) => (
              <motion.div
                key={bug.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="surface rounded-2xl p-6 lg:p-8"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--amber)] mb-3">
                  Incident #{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">{bug.title}</h3>

                <div className="mt-5 grid lg:grid-cols-3 gap-6">
                  <div>
                    <Label>Symptom</Label>
                    <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{bug.symptom}</p>
                  </div>
                  <div>
                    <Label>Diagnosis</Label>
                    <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{bug.diagnosis}</p>
                  </div>
                  <div>
                    <Label>Fix</Label>
                    <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{bug.fix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <div className="text-caption text-[var(--text-tertiary)]">{children}</div>
  );
}
