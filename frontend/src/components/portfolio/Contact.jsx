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
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, testId: "contact-email" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/moh-shahrukh-khan", href: profile.linkedin, testId: "contact-linkedin" },
  { icon: Github, label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github, testId: "contact-github" },
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
    <section id="contact" data-testid="contact-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          kicker="10 · Contact"
          title="Let's build something solid."
          subtitle="Open to backend engineering roles, contracts, and serious technical conversations."
          testId="contact-heading"
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Channels */}
          <div className="lg:col-span-2 space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-testid={c.testId}
                className="group flex items-center justify-between glass rounded-2xl p-5 hover:-translate-y-0.5 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <c.icon size={18} className="text-blue-300" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{c.label}</div>
                    <div className="text-white text-sm mt-0.5">{c.value}</div>
                  </div>
                </div>
                <span className="text-zinc-500 group-hover:text-white font-mono text-sm">→</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-6 lg:p-10"
            data-testid="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <Input
                  data-testid="contact-input-name"
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Your name"
                  className="bg-white/[0.04] border-white/10 text-white placeholder:text-zinc-600 h-12"
                />
              </Field>
              <Field label="Email">
                <Input
                  data-testid="contact-input-email"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="you@company.com"
                  className="bg-white/[0.04] border-white/10 text-white placeholder:text-zinc-600 h-12"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Subject">
                <Input
                  data-testid="contact-input-subject"
                  value={form.subject}
                  onChange={onChange("subject")}
                  placeholder="What's this about?"
                  className="bg-white/[0.04] border-white/10 text-white placeholder:text-zinc-600 h-12"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message">
                <Textarea
                  data-testid="contact-input-message"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell me about the role, project, or problem you're solving."
                  rows={6}
                  className="bg-white/[0.04] border-white/10 text-white placeholder:text-zinc-600"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-button"
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
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
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
