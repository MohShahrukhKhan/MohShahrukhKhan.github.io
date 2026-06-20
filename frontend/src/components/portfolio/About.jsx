import { motion } from "framer-motion";
import { Server, Database, Workflow, Bug } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  { icon: Server, title: "Backend Development", desc: "Spring Boot microservices with domain-driven boundaries, clean layered architecture, and API contracts consumed by 4+ internal products." },
  { icon: Database, title: "Database Optimization", desc: "PostgreSQL schema design, composite/partial indexing, CTE rewrites, materialized views, connection pool tuning — measured in p95 latency." },
  { icon: Workflow, title: "System Design", desc: "REST APIs, microservices boundaries, event-driven workflows, state machines, and read/write path separation for platforms that need to scale." },
  { icon: Bug, title: "Production Debugging", desc: "Thread dump analysis, N+1 query triage, race condition diagnosis, heap profiling, and load testing under production traffic." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="About"
          title="Java backend engineer. Spring Boot + PostgreSQL. Production systems."
          subtitle="I work at the layer users never see — the APIs, databases, and services that enterprise software runs on. You feel it when it's fast, reliable, and doesn't break at 3 PM on a Tuesday."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface rounded-2xl p-6 hover:-translate-y-1 hover:border-[var(--border-accent)] transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center mb-5">
                <p.icon size={18} className="text-[var(--accent)]" />
              </div>
              <div className="font-display text-lg font-semibold text-[var(--text-primary)]">{p.title}</div>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
