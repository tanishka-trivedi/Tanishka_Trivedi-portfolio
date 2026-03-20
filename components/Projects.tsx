"use client";

import { portfolioData } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

const colorMap = {
  green: {
    badge: "badge",
    accent: "text-brand-green",
    border: "hover:border-brand-green/30",
    bg: "bg-brand-green/5",
    dot: "bg-brand-green",
  },
  teal: {
    badge: "badge badge-teal",
    accent: "text-brand-teal",
    border: "hover:border-brand-teal/30",
    bg: "bg-brand-teal/5",
    dot: "bg-brand-teal",
  },
};

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-brand-green text-sm">02.</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          Projects
        </h2>
        <div className="flex-1 h-px bg-[#252535]" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const c = colorMap[project.color as keyof typeof colorMap] || colorMap.green;
          return (
            <div
              key={project.title}
              className={`group relative p-6 rounded-2xl border border-[#252535] bg-[#111118] card-glow ${c.border} transition-all duration-300`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <div className="font-mono text-xs text-[#555577] mb-0.5">
                      {project.period}
                    </div>
                    <h3
                      className={`font-display font-bold text-lg text-white group-hover:${c.accent.split("-")[1] === "brand" ? c.accent : c.accent} transition-colors`}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[#252535] text-[#555577] hover:text-white hover:border-[#444455] transition-all"
                    title="GitHub"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#8888aa] text-sm leading-relaxed mb-4 font-body">
                {project.description}
              </p>
              <p className="text-[#666688] text-xs leading-relaxed mb-5 font-body">
                {project.longDescription}
              </p>

              {/* Key highlights */}
              <div className="mb-5">
                <div className="text-xs font-mono text-[#555577] mb-2 uppercase tracking-wider">
                  Key Contributions
                </div>
                <ul className="space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-[#8888aa] font-body">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className={`${c.badge} text-xs`}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${c.bg}`}
                style={{ filter: "blur(20px)", zIndex: -1 }}
              />
            </div>
          );
        })}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-12">
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#252535] text-[#8888aa] hover:text-brand-green hover:border-brand-green/30 transition-all font-body text-sm"
        >
          <Github size={16} />
          View all on GitHub
          <ExternalLink size={12} />
        </a>
      </div>
    </section>
  );
}
