import { useState } from "react";
import SystemPanel, { SectionHeading } from "./SystemPanel.jsx";
import { CONTACT } from "../data.js";

const LINKS = [
  { label: "GitHub", value: "chethan-9817", href: CONTACT.github },
  { label: "LinkedIn", value: "chethan-ks", href: CONTACT.linkedin },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend: opens the visitor's mail app with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 sm:px-6">
      <SectionHeading num="06" kicker="Send a party invite" title="Contact" />
      <div className="grid gap-6 lg:grid-cols-5">
        <SystemPanel title="Channels" className="lg:col-span-2">
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 border-[1.5px] border-ink px-4 py-3 transition hover:bg-ink hover:text-white"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em]">{l.label}</span>
                  <span className="truncate text-sm font-medium">
                    {l.value} <span className="text-orange">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink/70">Open to internships, hackathon teams and interesting ideas.</p>
        </SystemPanel>

        <SystemPanel title="Compose message" className="lg:col-span-3" delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted">Name</span>
                <input required className="field" value={form.name} onChange={set("name")} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted">Email</span>
                <input
                  required
                  type="email"
                  className="field"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-widest text-muted">Message</span>
              <textarea
                required
                rows={5}
                className="field resize-y"
                value={form.message}
                onChange={set("message")}
                placeholder="Say hi, propose a quest…"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="btn">
                Send →
              </button>
              {sent && <span className="font-mono text-xs text-green-700">✓ Opening your mail app…</span>}
            </div>
          </form>
        </SystemPanel>
      </div>
    </section>
  );
}
