'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  const technologies = [
    // Frontend
    "HTML5", "CSS3", "JavaScript", "TypeScript",
    "React", "Next.js", "Tailwind CSS", "Framer Motion",

    // Backend
    "PHP 8.x (Native)", "Node.js", "Express.js",

    // Database
    "MySQL", "MariaDB", "PostgreSQL",

    // API & Architecture
    "RESTful API", "JWT Auth", "Role-Based Access Control",

    // Mobile
    "Flutter", "Cross-Platform Apps",

    // DevOps & Deployment
    "Vercel", "cPanel", "Linux Server", "Nginx",

    // Security
    "CSRF Protection", "Rate Limiting", "bcrypt", "Prepared Statements",

    // Reporting & Tools
    "PhpSpreadsheet", "Excel Multi-Sheet Export",

    // Realtime & Integration
    "Supabase", "Webhooks", "Third-Party API Integration",

    // Performance
    "Server Optimization", "Caching Strategy",

    // AI & Automation
    "AI Integration", "Workflow Automation"
  ];

  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">
          Full-Stack Technology Ecosystem Kami
        </p>

        <div className="flex overflow-hidden relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50/50 to-transparent z-10"></div>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 65, repeat: Infinity }}
            className="flex flex-nowrap gap-14 md:gap-28 items-center whitespace-nowrap"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={index}
                className="text-lg md:text-xl font-semibold text-slate-300 hover:text-blue-600 transition-colors duration-300 cursor-default"
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
