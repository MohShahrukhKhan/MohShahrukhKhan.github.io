import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, heroMetrics } from "../../lib/portfolioData";

function AnimatedMetric({ value, suffix, label, context, index }) {
  const [displayed, setDisplayed] = useState("0");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const target = parseFloat(value);
    const duration = 1800;
    const steps = 40;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (target * eased).toFixed(value.includes(".") ? 1 : 0);
      setDisplayed(current);
      if (progress >= 1) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
        {displayed}<span className="text-[var(--accent)]">{suffix}</span>
      </div>
      <div className="text-sm text-[var(--text-secondary)] mt-1">{label}</div>
      <div className="text-caption text-[var(--text-tertiary)] mt-1">{context}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90svh] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 surface rounded-full px-3 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulseDot" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] tracking-wider text-[var(--text-secondary)] uppercase">
              Production Engineering
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.92] font-extrabold tracking-tight">
            <span className="text-gradient">Java Backend</span>
            <br />
            <span className="text-gradient">Engineer —</span>
            <br />
            <span className="text-gradient-accent">3+ Years Production</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed text-balance">
            {profile.tagline}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-[var(--text-tertiary)] leading-relaxed text-balance">
            Spring Boot · PostgreSQL · Microservices · REST APIs · Query Optimization · Production Debugging
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black px-5 py-3 rounded-full text-sm font-medium transition-colors"
            >
              View Case Studies
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 surface hover:border-[var(--border-accent)] text-[var(--text-primary)] px-5 py-3 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                <Download size={16} />
                Resume
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-3 rounded-full text-sm font-medium"
            >
              Contact
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs font-mono text-[var(--text-tertiary)]">
            <div className="flex items-center gap-2">
              <MapPin size={12} /> {profile.location}
            </div>
            <div className="hidden sm:block">·</div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulseDot" />
              Open to backend engineering roles
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-28 grid grid-cols-3 gap-6 lg:gap-10 max-w-2xl">
          {heroMetrics.map((m, i) => (
            <AnimatedMetric key={m.label} {...m} index={i} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-caption text-[var(--text-tertiary)]">
        scroll
      </div>
    </section>
  );
}
