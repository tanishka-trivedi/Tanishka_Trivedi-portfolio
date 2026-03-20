"use client";

import { portfolioData } from "@/lib/data";

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: "⚡",
      label: "Hardware",
      desc: "Embedded systems & sensor interfacing from bare metal",
    },
    {
      icon: "🧠",
      label: "Algorithms",
      desc: "DSA-driven problem solving at the core",
    },
    {
      icon: "🤖",
      label: "ML Journey",
      desc: "Actively learning Pattern Recognition & Deep Learning",
    },
    {
      icon: "🏆",
      label: "IIT Jodhpur",
      desc: "B.Tech EE — 99th percentile JEE Mains qualifier",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-brand-green text-sm">01.</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          About Me
        </h2>
        <div className="flex-1 h-px bg-[#252535]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text */}
        <div className="space-y-6">
          <p className="text-[#aaaacc] text-base md:text-lg leading-relaxed font-body">
            I&apos;m a second-year Electrical Engineering student at{" "}
            <span className="text-white font-medium">IIT Jodhpur</span>, where
            I operate at the intersection of hardware and software. My work
            spans from programming microcontrollers in Embedded C to building
            diff-based version control systems in C++.
          </p>
          <p className="text-[#8888aa] text-base leading-relaxed font-body">
            What drives me is the challenge of making machines smarter —
            whether that&apos;s interpreting Indian Sign Language gestures in
            real time or optimizing data structures for minimal disk footprint.
            I won{" "}
            <span className="text-brand-amber font-medium">1st place</span> at
            Prometeo (IIT Jodhpur&apos;s annual tech fest) for hardware
            innovation.
          </p>
          <p className="text-[#8888aa] text-base leading-relaxed font-body">
            Currently deepening my knowledge in{" "}
            <span className="text-brand-teal font-medium">Machine Learning</span>{" "}
            and Pattern Recognition, with the long-term goal of bridging
            intelligent algorithms with embedded hardware.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { value: "99.03%", label: "JEE Mains" },
              { value: "97.3%", label: "ICSE Score" },
              { value: "1st", label: "Prometeo EE" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl border border-[#252535] bg-[#111118] text-center"
              >
                <div className="font-display font-bold text-2xl text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#555577] font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="p-5 rounded-2xl border border-[#252535] bg-[#111118] card-glow hover:border-brand-green/20 transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{h.icon}</div>
              <div className="font-display font-semibold text-white text-sm mb-1 group-hover:text-brand-green transition-colors">
                {h.label}
              </div>
              <div className="text-xs text-[#666688] font-body leading-relaxed">
                {h.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
