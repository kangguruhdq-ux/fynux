'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function SocialProof() {
  const shouldReduceMotion = useReducedMotion();

  const technologies = [
    // Core Engineering
    "TypeScript", "React 19", "Next.js 16", "Tailwind CSS", "Framer Motion",
    // Backend & Systems
    "Node.js", "PHP 8.x", "PostgreSQL", "MySQL", "RESTful API",
    // Security & Infrastructure
    "Content Security Policy", "CSRF Mitigation", "Rate Limiting", "Linux NVMe", "Nginx",
    // Realtime & Integrations
    "Webhooks", "Database Transactions", "PhpSpreadsheet", "Cloud Architecture"
  ];

  return (
    <section className="py-10 border-y border-slate-200/80 bg-slate-50/70 overflow-hidden" aria-label="Teknologi dan Standar Rekayasa">
      <div className="container max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest">
          Ekosistem Teknologi & Standar Rekayasa Sistem FYNUX
        </p>

        <div className="flex overflow-hidden relative w-full">
          {/* Edge gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex flex-nowrap gap-8 md:gap-14 items-center whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={index}
                className="text-sm md:text-base font-bold text-slate-600 hover:text-blue-600 transition-colors duration-200 cursor-default px-3 py-1 rounded-lg bg-white/70 border border-slate-200/60 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
