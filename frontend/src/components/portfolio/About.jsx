import { motion } from "framer-motion";
import { Database, Server, Workflow, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  { icon: Server, title: "Backend Engineering", desc: "Production Spring Boot services, clean domain layers, and disciplined API design." },
  { icon: Database, title: "Database Mastery", desc: "Schema modelling, indexing strategy, and query tuning on PostgreSQL & MySQL." },
  { icon: Workflow, title: "System Scalability", desc: "Stateless services, caching tiers, and async patterns that scale with load." },
  { icon: ShieldCheck, title: "Enterprise Discipline", desc: "Security, audit trails, observability, and contracts that survive years in prod." },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="01 · About"
          title="Backend engineer focused on the systems behind the product."
          subtitle="I build the unglamorous core that enterprise software runs on — fast APIs, sane databases, predictable services. The user never sees this layer; they only feel it when it's done right."
          testId="about-heading"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`about-pillar-${i}`}
              className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                <p.icon size={18} className="text-blue-400" />
              </div>
              <div className="font-display text-lg font-semibold text-white">{p.title}</div>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
