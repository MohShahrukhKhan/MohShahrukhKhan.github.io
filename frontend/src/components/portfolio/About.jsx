import { motion } from "framer-motion";
import { Database, Server, Workflow, Bug } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  { icon: Server, title: "Spring Boot Engineering", desc: "Production microservices with domain-driven boundaries, clean layers, and predictable API contracts." },
  { icon: Database, title: "PostgreSQL & SQL", desc: "Schema design, indexing strategy, query optimization, materialized views, and connection pool tuning." },
  { icon: Workflow, title: "API Development", desc: "REST APIs with authentication, pagination, validation, OpenAPI docs — consumed by 4+ internal products." },
  { icon: Bug, title: "Production Debugging", desc: "Thread dumps, slow query triage, race condition analysis, heap profiling, and load testing." },
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
