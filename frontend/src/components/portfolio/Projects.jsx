import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../../lib/portfolioData";

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="03 · Featured Work"
          title="Enterprise systems, shipped."
          subtitle="Three backend platforms — each solving real operational problems at scale."
          testId="projects-heading"
        />

        <div className="mt-16 space-y-10">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              data-testid={`project-card-${idx}`}
              className="group relative glass rounded-3xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-40 pointer-events-none`} />
              <div className="relative grid lg:grid-cols-12 gap-0">
                {/* Image */}
                <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
                    <Layers size={11} /> Project {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-7 lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <ArrowUpRight size={20} className="text-zinc-500 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-2 text-blue-300/90 text-sm font-mono">{p.tagline}</p>

                  <p className="mt-5 text-sm text-zinc-300 leading-relaxed">{p.overview}</p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-5">
                    <Detail title="Architecture" content={p.architecture} />
                    <div>
                      <SectionLabel>Technologies</SectionLabel>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-5">
                    <BulletBlock label="Challenges Solved" items={p.challenges} accent="text-amber-300" />
                    <BulletBlock label="Business Impact" items={p.impact} accent="text-emerald-300" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">{children}</div>
  );
}

function Detail({ title, content }) {
  return (
    <div>
      <SectionLabel>{title}</SectionLabel>
      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{content}</p>
    </div>
  );
}

function BulletBlock({ label, items, accent }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <ul className="mt-2 space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-sm text-zinc-300 leading-relaxed">
            <span className={`mt-2 h-1.5 w-1.5 rounded-full ${accent} bg-current flex-shrink-0`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
