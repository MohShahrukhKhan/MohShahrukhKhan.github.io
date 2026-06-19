import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../../lib/portfolioData";

export default function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="02 · Experience"
          title="Where the work happens."
          subtitle="Shipping production backend systems used by real businesses every day."
          testId="experience-heading"
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent" />

          {experience.map((e, idx) => (
            <motion.article
              key={e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              data-testid={`experience-item-${idx}`}
              className="relative pl-14 lg:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-0 lg:left-2 top-1 h-9 w-9 rounded-full bg-blue-500/15 border border-blue-500/40 flex items-center justify-center">
                <Briefcase size={16} className="text-blue-300" />
              </div>

              <div className="glass rounded-2xl p-6 lg:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="font-display text-2xl font-semibold text-white">{e.role}</div>
                    <div className="text-zinc-400 text-sm mt-1">
                      {e.company} · {e.location}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-blue-400/90 tracking-wider uppercase">
                    {e.period}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {e.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
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
