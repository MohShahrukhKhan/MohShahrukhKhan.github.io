import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { profile } from "../../lib/portfolioData";

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative min-h-[100svh] overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-3 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulseDot"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] tracking-wider text-zinc-300 uppercase">
              {"<"} System Architect {"/>"}
            </span>
          </div>

          <h1
            data-testid="hero-name"
            className="font-display text-[12vw] leading-[0.95] sm:text-7xl lg:text-[7.5rem] font-extrabold tracking-tight"
          >
            <span className="text-gradient">Moh Shahrukh</span>
            <br />
            <span className="text-gradient">Khan.</span>
          </h1>

          <p
            data-testid="hero-role"
            className="mt-6 font-mono text-sm sm:text-base text-blue-400/90"
          >
            Software Engineer · Java Backend Developer
          </p>

          <p
            data-testid="hero-tagline"
            className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              data-testid="hero-cta-projects"
              href="#projects"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full text-sm font-medium transition-colors"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              data-testid="hero-cta-resume"
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 glass hover:border-white/20 text-white px-5 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              data-testid="hero-cta-contact"
              href="#contact"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white px-3 py-3 rounded-full text-sm font-medium"
            >
              Contact me
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs font-mono text-zinc-500">
            <div className="flex items-center gap-2">
              <MapPin size={12} /> {profile.location}
            </div>
            <div className="hidden sm:block">·</div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseDot" />
              Available for select opportunities
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.3em] text-zinc-600 uppercase">
        scroll
      </div>
    </section>
  );
}
