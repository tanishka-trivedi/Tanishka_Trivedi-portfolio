"use client";

import { portfolioData } from "@/lib/data";

const colorConfig: Record<string, { badge: string; border: string; bg: string; text: string }> = {
  amber: {
    badge: "badge-amber",
    border: "border-brand-amber/20 hover:border-brand-amber/40",
    bg: "bg-brand-amber/5",
    text: "text-brand-amber",
  },
  green: {
    badge: "",
    border: "border-brand-green/20 hover:border-brand-green/40",
    bg: "bg-brand-green/5",
    text: "text-brand-green",
  },
  teal: {
    badge: "badge-teal",
    border: "border-brand-teal/20 hover:border-brand-teal/40",
    bg: "bg-brand-teal/5",
    text: "text-brand-teal",
  },
  purple: {
    badge: "badge-purple",
    border: "border-purple-400/20 hover:border-purple-400/40",
    bg: "bg-purple-400/5",
    text: "text-purple-400",
  },
};

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-brand-green text-sm">04.</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          Achievements
        </h2>
        <div className="flex-1 h-px bg-[#252535]" />
      </div>

      {/* Featured: top achievement */}
      <div className="mb-6 p-8 rounded-2xl border border-brand-amber/30 bg-gradient-to-br from-brand-amber/10 to-transparent relative overflow-hidden">
        <div className="absolute top-4 right-6 text-6xl opacity-20">{achievements[0].icon}</div>
        <div className="font-mono text-brand-amber text-xs uppercase tracking-wider mb-2">
          🏆 Featured Achievement
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
          {achievements[0].title}
        </h3>
        <p className="text-brand-amber/80 text-sm font-body mb-3">{achievements[0].subtitle}</p>
        <p className="text-[#8888aa] font-body text-sm max-w-lg">{achievements[0].description}</p>
      </div>

      {/* Grid for rest */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.slice(1).map((a) => {
          const c = colorConfig[a.color] || colorConfig.green;
          return (
            <div
              key={a.title}
              className={`p-5 rounded-2xl border ${c.border} ${c.bg} card-glow transition-all duration-300 group`}
            >
              <div className="text-3xl mb-3">{a.icon}</div>
              <h3 className={`font-display font-bold text-sm text-white mb-1 group-hover:${c.text} transition-colors`}>
                {a.title}
              </h3>
              <p className={`text-xs font-mono mb-3 ${c.text}`}>{a.subtitle}</p>
              <p className="text-xs text-[#666688] font-body leading-relaxed">{a.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
