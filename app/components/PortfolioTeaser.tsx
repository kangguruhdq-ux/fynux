// fynux-landing/app/components/PortfolioTeaser.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioTeaser() {
  const portfolios = [
    {
      title: "Trade Journal Web App",
      client: "Moonshot Academy",
      type: "SaaS & Education",
      tier: "BUSINESS",
      results: [
        "Sistem pencatatan trading interaktif",
        "Performa super cepat & responsif",
        "UI/UX Dark Mode Futuristik"
      ],
      image: "/portofolioclient1.png", // Pastikan file gambar ini ada di folder public/
      link: "https://www.moonshotacademy.trade",
      isExternal: true
    },
    {
      title: "Sistem Presensi Digital",
      client: "SMA 2 Ngaglik",
      type: "Institusi Pendidikan",
      tier: "ENTERPRISE",
      results: [
        "100% Paperless & Anti-manipulasi",
        "Real-time Dashboard Admin",
        "Handle ratusan siswa tanpa downtime"
      ],
      image: "/PRESENSI.png", // Nanti bisa diganti screenshot asli web app presensi
      link: "/portfolio",
      isExternal: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Karya Kami, <span className="text-blue-600">Hasil Nyata.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Bukan sekadar <i>screenshot</i> cantik. Ini adalah sistem nyata yang kami bangun untuk memecahkan masalah operasional dan mendatangkan profit bagi klien kami.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              Lihat Semua Portofolio <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolios.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full bg-slate-200 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm border border-slate-100">
                  Paket {item.tier}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <p className="text-blue-600 font-semibold text-sm mb-1">{item.type} • Klien: {item.client}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {item.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                {item.isExternal ? (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    Lihat Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link 
                    href={item.link}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    Baca Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}