import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../lib/portfolioData";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="font-display tracking-tighter leading-[0.85] text-[clamp(4rem,18vw,14rem)] font-extrabold text-gradient select-none">
          Let's Build.
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-display text-[var(--text-primary)] text-lg">{profile.name}</div>
            <div className="text-[var(--text-tertiary)] text-sm mt-1">{profile.role}</div>
          </div>

          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} className="h-10 w-10 rounded-full surface flex items-center justify-center hover:border-[var(--border-accent)] transition-colors">
              <Mail size={16} className="text-[var(--text-secondary)]" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full surface flex items-center justify-center hover:border-[var(--border-accent)] transition-colors">
              <Linkedin size={16} className="text-[var(--text-secondary)]" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full surface flex items-center justify-center hover:border-[var(--border-accent)] transition-colors">
              <Github size={16} className="text-[var(--text-secondary)]" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-tertiary)] font-mono">
          <div>© {new Date().getFullYear()} {profile.name}. Engineered, not templated.</div>
          <div>Spring Boot · PostgreSQL · Production Systems</div>
        </div>
      </div>
    </footer>
  );
}
