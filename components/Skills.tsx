"use client";

import { portfolioData } from "@/lib/data";

const badgeClassMap: Record<string, string> = {
  green: "badge",
  teal: "badge badge-teal",
  purple: "badge badge-purple",
  amber: "badge badge-amber",
};

const dotClassMap: Record<string, string> = {
  green: "bg-brand-green",
  teal: "bg-brand-teal",
  purple: "bg-purple-400",
  amber: "bg-brand-amber",
};

const accentMap: Record<string, string> = {
  green: "text-brand-green",
  teal: "text-brand-teal",
  purple: "text-purple-400",
  amber: "text-brand-amber",
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-brand-green text-sm">03.</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          Skills
        </h2>
        <div className="flex-1 h-px bg-[#252535]" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, { items, color }]) => (
          <div
            key={category}
            className="p-6 rounded-2xl border border-[#252535] bg-[#111118] card-glow group hover:border-opacity-50 transition-all duration-300"
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-5">
              <span className={`w-2 h-2 rounded-full ${dotClassMap[color]}`} />
              <h3 className={`font-display font-semibold text-sm uppercase tracking-wider ${accentMap[color]}`}>
                {category}
              </h3>
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className={`${badgeClassMap[color]} hover:scale-105 transition-transform cursor-default`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently Learning strip */}
      <div className="mt-8 p-5 rounded-2xl border border-brand-amber/20 bg-brand-amber/5 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
          <span className="font-mono text-brand-amber text-sm font-medium">Currently Learning</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {portfolioData.coursework.learning.map((item) => (
            <span key={item} className="badge badge-amber text-xs">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
