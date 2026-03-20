import { portfolioData } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-[#252535] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-green to-brand-teal flex items-center justify-center text-dark-900 font-display font-bold text-xs">
            T
          </div>
          <span className="font-display text-sm text-[#555577]">
            Tanishka Trivedi <span className="text-brand-green">·</span> IIT Jodhpur
          </span>
        </div>

        <p className="text-xs font-mono text-[#444455]">
          Built with Next.js · Tailwind CSS · TypeScript
        </p>

        <div className="flex gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#555577] hover:text-brand-green transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#555577] hover:text-brand-teal transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2 rounded-lg text-[#555577] hover:text-brand-amber transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
