import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { profile } from "../../lib/portfolioData";

const API = `${import.meta.env.VITE_BACKEND_URL || "http://localhost:8001"}/api`;

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin },
  { icon: Github, label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="Contact"
          title="Let's build something solid."
          subtitle="Open to backend engineering roles, contracts, and serious technical conversations."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between surface rounded-2xl p-5 hover:-translate-y-0.5 hover:border-[var(--border-accent)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-[var(--accent-subtle)] border border-[var(--border-accent)] flex items-center justify-center">
                    <c.icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <div className="text-caption text-[var(--text-tertiary)]">{c.label}</div>
                    <div className="text-[var(--text-primary)] text-sm mt-0.5">{c.value}</div>
                  </div>
                </div>
                <span className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] font-mono text-sm">→</span>
              </a>
            ))}
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 surface rounded-3xl p-6 lg:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <Input
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Your name"
                  className="bg-white/[0.03] border-white/[0.08] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] h-12"
                />
              </Field>
              <Field label="Email">
                <Input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="you@company.com"
                  className="bg-white/[0.03] border-white/[0.08] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] h-12"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Subject">
                <Input
                  value={form.subject}
                  onChange={onChange("subject")}
                  placeholder="What's this about?"
                  className="bg-white/[0.03] border-white/[0.08] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] h-12"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <Textarea
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell me about the role, project, or problem you're solving."
                  rows={6}
                  className="bg-white/[0.03] border-white/[0.08] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 text-black px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-caption text-[var(--text-tertiary)]">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
