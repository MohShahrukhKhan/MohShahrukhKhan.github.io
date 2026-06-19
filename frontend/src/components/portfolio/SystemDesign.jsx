import { motion } from "framer-motion";
import { Network, Boxes, Radio, Database, TrendingUp, Gauge } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { systemDesign } from "../../lib/portfolioData";

const ICONS = { Network, Boxes, Radio, Database, TrendingUp, Gauge };

export default function SystemDesign() {
  return (
    <section id="system-design" data-testid="system-design-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="07 · System Design"
          title="Thinking in systems, not snippets."
          subtitle="Architectural patterns I reach for when designing backend platforms that need to last."
          testId="system-design-heading"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {systemDesign.map((s, i) => {
            const Icon = ICONS[s.icon] || Network;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`system-card-${i}`}
                className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon size={18} className="text-blue-300" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">0{i + 1}</span>
                </div>
                <div className="mt-5 font-display text-lg font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
