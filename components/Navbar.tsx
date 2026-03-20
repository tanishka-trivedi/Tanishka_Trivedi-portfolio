"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#252535]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-green to-brand-teal flex items-center justify-center text-dark-900 font-display font-bold text-sm">
            T
          </div>
          <span className="font-display font-semibold text-white/90 group-hover:text-brand-green transition-colors">
            Tanishka<span className="text-brand-green">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[#8888aa] hover:text-brand-green transition-colors rounded-md hover:bg-brand-green/5 font-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 text-sm font-medium border border-brand-green/30 text-brand-green rounded-lg hover:bg-brand-green/10 transition-all"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#8888aa] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111118]/95 backdrop-blur-xl border-b border-[#252535] px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[#8888aa] hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 py-2 text-sm text-center text-brand-green border border-brand-green/30 rounded-lg"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
