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
    <section className="py-10 border-b border-white/10 bg-[#070b12] text-white overflow-hidden" aria-label="Teknologi dan Standar Rekayasa">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="container max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-xs font-mono font-bold text-slate-400 mb-6 uppercase tracking-widest">
          Ekosistem Teknologi & Standar Rekayasa Sistem FYNUX
        </p>

        <div className="flex overflow-hidden relative w-full">
          {/* Edge gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#070b12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#070b12] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex flex-nowrap gap-6 md:gap-10 items-center whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={index}
                className="text-xs md:text-sm font-mono font-semibold text-slate-300 hover:text-white transition-colors duration-200 cursor-default px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
