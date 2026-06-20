import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import SectionHeading from "./SectionHeading";
import { performanceMetrics, apiLatencyChart } from "../../lib/portfolioData";

export default function Performance() {
  return (
    <section id="performance" className="relative py-28 lg:py-40">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="Performance"
          title="Measured. Optimized. Repeated."
          subtitle="Production optimization results — query tuning, API latency, and database throughput at MobiOffice."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {performanceMetrics.map((m, i) => {
              const isUp = m.delta.startsWith("+");
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="surface rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-caption text-[var(--text-tertiary)]">
                      {m.label}
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-mono ${"text-emerald-400"}`}>
                      {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {m.delta}
                    </div>
                  </div>
                  <div className="mt-3 font-display text-3xl lg:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                    {m.to}
                    <span className="text-base font-mono text-[var(--text-tertiary)] ml-1">{m.unit}</span>
                  </div>
                  <div className="mt-1 text-[11px] font-mono text-[var(--text-tertiary)]">
                    from {m.from}{m.unit} · {m.note}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 surface rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <div className="text-caption text-[var(--text-tertiary)]">
                  API p95 Latency Reduction
                </div>
                <div className="font-display text-2xl text-[var(--text-primary)] mt-1">420ms → 110ms</div>
              </div>
              <div className="font-mono text-xs text-emerald-400">-74%</div>
            </div>

            <div className="h-72 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={apiLatencyChart} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id="gAfter" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#818cf8" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis
                    dataKey="stage"
                    stroke="rgba(255,255,255,0.3)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.3)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(14,15,20,0.96)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                    labelStyle={{ color: "#94a3b8" }}
                  />
                  <Area type="monotone" dataKey="before" stroke="rgba(255,255,255,0.15)" fill="transparent" strokeDasharray="4 4" />
                  <Area type="monotone" dataKey="after" stroke="#818cf8" strokeWidth={2} fill="url(#gAfter)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
