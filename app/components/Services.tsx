'use client';

import { motion, Variants } from 'framer-motion';
import { Code2, Palette, Server, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Services() {
  const services = useMemo(() => [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web App Development",
      subtitle: "Scalable & High-Performance Systems",
      description:
        "Kami membangun sistem web kustom seperti Dashboard, Presensi, ERP, hingga integrasi API dengan arsitektur kode bersih, modular, dan aman.",
      bullets: [
        "Arsitektur rapi dan terukur",
        "Optimasi performa rendering",
        "Penerapan standar keamanan industri"
      ],
      winFactor: "Sistem kelas enterprise dengan efisiensi biaya maksimal.",
      link: "/webapp",
      delay: 0.1
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX & Web Design",
      subtitle: "Desain Berkarakter, Fokus Konversi",
      description:
        "Kami merancang visual yang bukan hanya elegan, tapi strategis untuk membangun kredibilitas, positioning pasar, dan konversi pengunjung.",
      bullets: [
        "Desain responsif multi-device",
        "Alur navigasi intuitif",
        "Struktur konten berbasis tujuan bisnis"
      ],
      winFactor: "Meningkatkan citra profesional brand Anda secara instan.",
      link: "/webdesign",
      delay: 0.2
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Managed Cloud Hosting",
      subtitle: "Kecepatan, Keamanan, dan Pemeliharaan",
      description:
        "Infrastruktur server NVMe berkecepatan tinggi dengan pemeliharaan rutin. Anda fokus pada pertumbuhan bisnis, kami menangani stabilitas teknis.",
      bullets: [
        "Server NVMe stabil dan berkinerja tinggi",
        "Pencadangan data berkala",
        "Monitoring keamanan dan pembaruan patch"
      ],
      winFactor: "Menghemat pengeluaran operasional dan pemeliharaan tim IT internal.",
      link: "/hosting",
      delay: 0.3
    }
  ], []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 px-6 bg-slate-50/60 relative overflow-hidden border-b border-slate-200/60">
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-blue-600 uppercase"
          >
            Pilar Solusi FYNUX
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight"
          >
            Rekayasa Digital yang Bekerja Nyata untuk Bisnis Anda.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed"
          >
            Kami tidak sekadar membuat tampilan web, melainkan merancang sistem digital yang terarah, mulai dari landing page terfokus hingga aplikasi manajemen operasional.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="block group rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeInUp}
                transition={{ delay: service.delay }}
                viewport={{ once: true }}
                className="relative h-full p-8 md:p-9 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wider">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Value */}
                  <div className="space-y-2 mb-6">
                    {service.bullets.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Win Factor */}
                <div className="pt-5 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Nilai Keunggulan
                  </span>
                  <p className="mt-1 text-xs font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
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
