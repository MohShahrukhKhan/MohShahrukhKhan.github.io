import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../../lib/portfolioData";

export default function Testimonials() {
  return (
    <section id="testimonials" data-testid="testimonials-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="09 · Testimonials"
          title="Voices, soon."
          subtitle="Placeholders for testimonials from leads, hiring managers, and founders."
          testId="testimonials-heading"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`testimonial-card-${i}`}
              className="glass rounded-2xl p-7 relative overflow-hidden"
            >
              <Quote size={26} className="text-blue-400/40" />
              <p className="mt-4 text-zinc-300 text-sm leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="font-display text-white text-sm">{t.name}</div>
                <div className="text-xs text-zinc-500 font-mono">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
