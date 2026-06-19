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
    <section id="performance" data-testid="performance-section" className="relative py-24 lg:py-36">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="04 · Performance"
          title="Measured. Optimized. Repeated."
          subtitle="Selected results from production optimization work — query tuning, API performance, and resource efficiency."
          testId="performance-heading"
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {/* Metrics column */}
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
                  data-testid={`perf-metric-${i}`}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {m.label}
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-mono ${isUp ? "text-emerald-300" : "text-emerald-300"}`}>
                      {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {m.delta}
                    </div>
                  </div>
                  <div className="mt-3 font-display text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {m.to}
                    <span className="text-base font-mono text-zinc-500 ml-1">{m.unit}</span>
                  </div>
                  <div className="mt-1 text-[11px] font-mono text-zinc-500">
                    from {m.from}{m.unit} · {m.note}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="perf-chart"
            className="lg:col-span-2 glass rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  API p95 Latency Reduction
                </div>
                <div className="font-display text-2xl text-white mt-1">420ms → 110ms</div>
              </div>
              <div className="font-mono text-xs text-emerald-300">-74%</div>
            </div>

            <div className="h-72 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={apiLatencyChart} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
                  <defs>
                    <linearGradient id="gAfter" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                  <XAxis
                    dataKey="stage"
                    stroke="rgba(255,255,255,0.4)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.4)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(10,10,10,0.92)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                    labelStyle={{ color: "#a1a1aa" }}
                  />
                  <Area type="monotone" dataKey="before" stroke="rgba(255,255,255,0.18)" fill="transparent" strokeDasharray="4 4" />
                  <Area type="monotone" dataKey="after" stroke="#60a5fa" strokeWidth={2} fill="url(#gAfter)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
