import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../lib/portfolioData";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative pt-16 pb-10 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="font-display tracking-tighter leading-[0.85] text-[18vw] lg:text-[14vw] font-extrabold text-gradient select-none">
          Let's Build.
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-display text-white text-lg">{profile.name}</div>
            <div className="text-zinc-500 text-sm mt-1">{profile.role}</div>
          </div>

          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} data-testid="footer-email" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-white/20">
              <Mail size={16} className="text-zinc-300" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-white/20">
              <Linkedin size={16} className="text-zinc-300" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" data-testid="footer-github" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-white/20">
              <Github size={16} className="text-zinc-300" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 font-mono">
          <div>© {new Date().getFullYear()} {profile.name}. Crafted with intent.</div>
          <div>Backend · Systems · AI-assisted Engineering</div>
        </div>
      </div>
    </footer>
  );
}
