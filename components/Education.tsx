"use client";

import { portfolioData } from "@/lib/data";

export default function Education() {
  const { education, coursework } = portfolioData;

  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-brand-green text-sm">05.</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          Education
        </h2>
        <div className="flex-1 h-px bg-[#252535]" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {education.map((edu, idx) => (
          <div
            key={edu.institution}
            className={`relative p-6 rounded-2xl border bg-[#111118] card-glow transition-all duration-300 group ${
              edu.type === "current"
                ? "border-brand-green/30 hover:border-brand-green/50"
                : "border-[#252535] hover:border-[#353550]"
            }`}
          >
            {/* Current badge */}
            {edu.type === "current" && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <span className="text-xs font-mono text-brand-green">Current</span>
              </div>
            )}

            <div className="text-3xl mb-4">{edu.icon}</div>
            <div className="font-mono text-xs text-[#555577] mb-1">{edu.period}</div>
            <h3 className={`font-display font-bold text-base mb-1 transition-colors ${
              edu.type === "current" ? "text-white group-hover:text-brand-green" : "text-white"
            }`}>
              {edu.institution}
            </h3>
            <p className="text-[#8888aa] text-sm font-body mb-3">{edu.degree}</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#555577]">{edu.location}</span>
              <span
                className={`font-display font-bold text-sm ${
                  edu.type === "current" ? "text-brand-green" : "text-brand-teal"
                }`}
              >
                {edu.grade}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Coursework */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-[#252535] bg-[#111118]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-teal" />
            <h3 className="font-display font-semibold text-sm text-brand-teal uppercase tracking-wider">
              Completed Coursework
            </h3>
          </div>
          <ul className="space-y-2">
            {coursework.completed.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-[#8888aa] font-body">
                <span className="text-brand-teal text-xs">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-brand-amber/20 bg-brand-amber/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
            <h3 className="font-display font-semibold text-sm text-brand-amber uppercase tracking-wider">
              Currently Learning
            </h3>
          </div>
          <ul className="space-y-2">
            {coursework.learning.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-[#8888aa] font-body">
                <span className="text-brand-amber text-xs">→</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
