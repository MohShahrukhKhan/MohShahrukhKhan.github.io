import { motion } from "framer-motion";
import { Github, GitCommit, GitPullRequest, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../../lib/portfolioData";

// Deterministic pseudo-random contribution grid (looks alive, stable across renders)
const COLS = 26;
const ROWS = 7;
const grid = Array.from({ length: COLS * ROWS }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const v = r < 0.45 ? 0 : r < 0.65 ? 1 : r < 0.82 ? 2 : r < 0.94 ? 3 : 4;
  return v;
});

const cellClass = (v) =>
  ({
    0: "bg-white/5",
    1: "bg-blue-500/20",
    2: "bg-blue-500/40",
    3: "bg-blue-500/65",
    4: "bg-blue-400",
  }[v]);

const stats = [
  { icon: GitCommit, label: "Commits / yr", value: "1.4k+" },
  { icon: GitPullRequest, label: "Pull Requests", value: "320+" },
  { icon: Star, label: "Repo Stars", value: "—" },
  { icon: Github, label: "Active Streak", value: "Consistent" },
];

export default function GitHubActivity() {
  return (
    <section id="github" data-testid="github-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="08 · GitHub Activity"
          title="Code, daily."
          subtitle="A real engineering rhythm — commits, reviews, and quiet refactors."
          testId="github-heading"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-3xl p-6 lg:p-10"
          data-testid="github-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Github size={18} className="text-white" />
              </div>
              <div>
                <div className="font-display text-lg text-white">@{profile.githubUsername}</div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="github-profile-link"
                  className="font-mono text-xs text-blue-400/90 hover:text-blue-300"
                >
                  {profile.github.replace("https://", "")}
                </a>
              </div>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-testid="github-view-profile"
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-zinc-200 hover:border-white/20"
            >
              View profile <span className="font-mono">→</span>
            </a>
          </div>

          <div className="mt-8 overflow-x-auto">
            <div
              className="grid gap-[3px]"
              style={{ gridTemplateColumns: `repeat(${COLS}, minmax(10px, 1fr))`, gridAutoRows: 12 }}
              data-testid="github-contribution-grid"
            >
              {grid.map((v, i) => (
                <div
                  key={i}
                  className={`rounded-[2px] ${cellClass(v)}`}
                  style={{ height: 12 }}
                  title={`contribution level ${v}`}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-zinc-500">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((v) => (
                <span key={v} className={`h-3 w-3 rounded-[2px] ${cellClass(v)}`} />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 text-zinc-500">
                  <s.icon size={14} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{s.label}</span>
                </div>
                <div className="mt-2 font-display text-2xl font-semibold text-white">{s.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
