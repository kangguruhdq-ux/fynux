'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ExternalLink, Code2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[90vh] flex items-center bg-white pt-28 pb-16 overflow-hidden border-b border-slate-100">
        <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column: Value Proposition */}
          <div className="flex flex-col items-start text-left">
            {/* Engineering Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
                Rekayasa Web & Solusi Digital Berkinerja Tinggi
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6"
            >
              Pengembangan Web Profesional, <br />
              <span className="text-blue-600">Transparan dan Skalabel.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              FYNUX membangun web aplikasi, sistem informasi, dan website korporat yang cepat, teruji keamanannya, dan siap mendukung pertumbuhan operasional bisnis Anda.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
            >
              <button
                type="button"
                onClick={() => setIsConsultModalOpen(true)}
                className="min-h-[48px] px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-md flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Konsultasi Proyek Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/#pricing"
                className="min-h-[48px] px-8 py-3.5 bg-white text-slate-800 border-2 border-slate-200 font-bold rounded-xl hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Lihat Paket Investasi
              </Link>
            </motion.div>

            {/* Operational Commitment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium pt-2 border-t border-slate-100"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tanpa Biaya Tersembunyi</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Arsitektur Kode Bersih & Aman</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Real Client Deliverable Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-[580px] bg-slate-900 rounded-2xl p-3 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800 mb-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-400 font-mono ml-2">moonshotacademy.trade</span>
              </div>
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-950">
                <Image
                  src="/portofolioclient1.png"
                  alt="Tangkapan Layar Web Aplikasi Klien Moonshot Academy"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs font-semibold text-slate-600 flex items-center justify-center gap-1.5">
                Studi Kasus Klien Nyata:
                <a
                  href="https://www.moonshotacademy.trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1"
                >
                  Moonshot Academy
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Aplikasi jurnal perdagangan interaktif berbasis Next.js dengan pemrosesan data real-time.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
      />
    </>
  );
}