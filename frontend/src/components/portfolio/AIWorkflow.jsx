import { motion } from "framer-motion";
import { Sparkles, Terminal, Server, Cpu, Bug, GitPullRequest } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aiWorkflow } from "../../lib/portfolioData";

const ICONS = { Sparkles, Terminal, Server, Cpu, Bug, GitPullRequest };

export default function AIWorkflow() {
  return (
    <section id="ai" data-testid="ai-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="05 · AI Engineering Workflow"
          title="Shipping with AI in the loop."
          subtitle="Real, daily integration of AI tooling into backend engineering — not a demo, a practice."
          testId="ai-heading"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiWorkflow.map((item, i) => {
            const Icon = ICONS[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                data-testid={`ai-card-${i}`}
                className="group relative glass rounded-2xl p-7 overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      <Icon size={18} className="text-blue-300" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="mt-5 font-display text-xl font-semibold text-white">{item.title}</div>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.desc}</p>

                  <div className="mt-6 font-mono text-[11px] text-zinc-600 group-hover:text-blue-300/80 transition-colors">
                    $ ai.workflow.{item.title.toLowerCase().replace(/\s/g, "_")}()
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
