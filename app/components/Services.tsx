'use client';

import { motion, Variants } from 'framer-motion';
import { Code2, Sparkles, Server, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Services() {
  const services = useMemo(() => [
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Web App Development",
      subtitle: "Scalable & High-Performance Systems",
      description:
        "Kami membangun sistem web kompleks seperti Dashboard, Presensi, ERP hingga AI Agent dengan arsitektur yang clean, scalable, dan secure.",
      bullets: [
        "Arsitektur rapi & future-proof",
        "Optimized performance",
        "Security best-practice"
      ],
      winFactor: "Sistem kelas enterprise tanpa harga enterprise.",
      link: "/webapp",
      delay: 0.1
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Web Design & Landing Page",
      subtitle: "Premium Look. Higher Conversion.",
      description:
        "Kami mendesain website yang bukan hanya indah, tapi strategis — membangun trust, positioning premium, dan meningkatkan conversion.",
      bullets: [
        "UI modern & futuristik",
        "Copywriting berbasis psikologi",
        "Optimasi konversi"
      ],
      winFactor: "Brand terlihat 10x lebih mahal & profesional.",
      link: "/webdesign",
      delay: 0.2
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "Managed Hosting",
      subtitle: "Speed, Security & Peace of Mind",
      description:
        "Hosting berkecepatan tinggi dengan optimasi dan maintenance included. Anda fokus growth, kami tangani teknis.",
      bullets: [
        "Server cepat & stabil",
        "Free maintenance",
        "Monitoring & backup rutin"
      ],
      winFactor: "Hemat jutaan rupiah biaya IT & maintenance.",
      link: "/hosting",
      delay: 0.3
    }
  ], []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-blue-600 uppercase"
          >
            How We Create Results
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight"
          >
            Bukan Sekadar Jasa.
            <br />
            <span className="text-slate-600">
              Ini Sistem Digital yang Menghasilkan.
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            Kami tidak menjual “website”. Kami membangun solusi digital — dari landing page sederhana 
hingga sistem kompleks yang sesuai kebutuhan Anda.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block group">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeInUp}
                transition={{ delay: service.delay }}
                viewport={{ once: true }}
                className="relative h-full p-10 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-sm font-semibold text-blue-600 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Value */}
                <div className="space-y-2 mb-8">
                  {service.bullets.map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-green-500" />
                      {point}
                    </div>
                  ))}
                </div>

                {/* Win Factor */}
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    The Real Advantage
                  </span>
                  <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.winFactor}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
