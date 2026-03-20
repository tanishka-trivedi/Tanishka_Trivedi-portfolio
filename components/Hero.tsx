"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/lib/data";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${p.a})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(74, 222, 128, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      frame = requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/20 bg-brand-green/5 text-brand-green text-sm font-mono mb-8"
          style={{ animation: "fadeUp 0.5s ease forwards" }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse-slow" />
          Available for Internships & Research
        </div>

        {/* Name */}
        <h1
          className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-4"
          style={{ animation: "fadeUp 0.6s 0.1s ease forwards", opacity: 0 }}
        >
          <span className="text-white">{personal.name.split(" ")[0]}</span>
          <br />
          <span className="text-gradient">{personal.name.split(" ")[1]}</span>
        </h1>

        {/* Title */}
        <p
          className="font-body text-lg md:text-xl text-[#8888aa] mb-3"
          style={{ animation: "fadeUp 0.6s 0.2s ease forwards", opacity: 0 }}
        >
          {personal.title} at{" "}
          <span className="text-white font-medium">IIT Jodhpur</span>
        </p>

        {/* Subtitle tags */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          style={{ animation: "fadeUp 0.6s 0.3s ease forwards", opacity: 0 }}
        >
          {["Embedded Systems", "DSA", "Machine Learning"].map((tag) => (
            <span key={tag} className="badge text-xs">{tag}</span>
          ))}
        </div>

        {/* Summary */}
        <p
          className="font-body text-base md:text-lg text-[#aaaacc] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.6s 0.4s ease forwards", opacity: 0 }}
        >
          {personal.summary}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          style={{ animation: "fadeUp 0.6s 0.5s ease forwards", opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-brand-green text-dark-900 font-display font-semibold text-sm hover:bg-brand-green/90 transition-all hover:scale-105 active:scale-95"
          >
            View Projects →
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-xl border border-[#252535] text-white/80 font-display font-medium text-sm hover:border-brand-green/40 hover:text-brand-green transition-all"
          >
            Download Resume ↓
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-[#252535] text-white/80 font-display font-medium text-sm hover:border-brand-teal/40 hover:text-brand-teal transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-4"
          style={{ animation: "fadeUp 0.6s 0.6s ease forwards", opacity: 0 }}
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[#252535] text-[#8888aa] hover:text-brand-green hover:border-brand-green/30 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[#252535] text-[#8888aa] hover:text-brand-teal hover:border-brand-teal/30 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-xl border border-[#252535] text-[#8888aa] hover:text-brand-amber hover:border-brand-amber/30 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555577] text-xs font-mono">
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
