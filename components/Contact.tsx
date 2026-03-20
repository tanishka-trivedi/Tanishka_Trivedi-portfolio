"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { Mail, Linkedin, Phone, Send, Github } from "lucide-react";

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-brand-green text-sm">06.</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          Contact
        </h2>
        <div className="flex-1 h-px bg-[#252535]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div>
          <p className="text-[#aaaacc] text-lg leading-relaxed mb-8 font-body">
            I&apos;m always open to internship opportunities, research collaborations, 
            and interesting conversations about hardware, ML, or building things.
          </p>

          <div className="space-y-4">
            {[
              { icon: <Mail size={16} />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: <Linkedin size={16} />, label: "LinkedIn", value: "tanishka-trivedi", href: personal.linkedin },
              { icon: <Phone size={16} />, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
              { icon: <Github size={16} />, label: "GitHub", value: "tanishkatrivedi", href: personal.github },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== "Email" && contact.label !== "Phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-[#252535] bg-[#111118] hover:border-brand-green/30 hover:bg-brand-green/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg border border-[#252535] flex items-center justify-center text-[#555577] group-hover:text-brand-green group-hover:border-brand-green/30 transition-all">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-[#555577]">{contact.label}</div>
                  <div className="text-sm text-[#aaaacc] group-hover:text-white transition-colors font-body">
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#555577] mb-2">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#252535] text-white placeholder-[#444455] text-sm font-body focus:outline-none focus:border-brand-green/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-[#555577] mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#252535] text-white placeholder-[#444455] text-sm font-body focus:outline-none focus:border-brand-green/40 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-[#555577] mb-2">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#252535] text-white placeholder-[#444455] text-sm font-body focus:outline-none focus:border-brand-green/40 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-green text-dark-900 font-display font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-green/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {sent ? "✓ Opening mail client..." : (
              <>
                <Send size={14} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
