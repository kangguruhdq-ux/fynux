'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Code2, Layers, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[95vh] flex items-center justify-center bg-[#070b12] text-white pt-36 pb-24 overflow-hidden border-b border-white/10">
        {/* ========================================================
            HERO BACKGROUND: Full-Bleed Real Client Showcase Visual
            ======================================================== */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/portofolioclient1.png"
            alt="FYNUX Hero Background Visual Showcase"
            fill
            priority
            quality={95}
            className="object-cover object-center opacity-45 md:opacity-55 scale-100 transition-all duration-700"
            sizes="100vw"
          />

          {/* Precision Gradient Masks: Top vignette, radial spotlight & bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/60 to-[#070b12]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/95 via-[#070b12]/40 to-[#070b12]/95" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070b12]/50 to-[#070b12]/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        </div>

        {/* Foreground Content: High-Impact Centered Hero */}
        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          {/* Engineering Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0b0f19]/80 border border-white/15 shadow-xl backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-bold text-slate-200 tracking-widest uppercase font-mono">
              Rekayasa Perangkat Lunak & Sistem Skalabel
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl drop-shadow-sm"
          >
            Arsitektur Web Modern, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Presisi dan Skalabel.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed drop-shadow-sm font-normal"
          >
            FYNUX membangun aplikasi web kustom, sistem informasi korporat, dan platform digital yang cepat, aman, dan siap mendukung pertumbuhan operasional bisnis Anda.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 justify-center"
          >
            <button
              type="button"
              onClick={() => setIsConsultModalOpen(true)}
              className="btn-shimmer min-h-[50px] px-8 py-3.5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/35 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b12]"
            >
              <span>Konsultasi Kebutuhan Sistem</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/#pricing"
              className="min-h-[50px] px-8 py-3.5 bg-white/10 text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b12]"
            >
              Lihat Paket Layanan
            </Link>
          </motion.div>

          {/* Live Background Proof Pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#090d16]/90 border border-white/15 backdrop-blur-md text-xs text-slate-300 shadow-lg"
          >
            <span className="text-slate-400">Background Showcase:</span>
            <a
              href="https://www.moonshotacademy.trade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-1.5"
            >
              Moonshot Academy Trade Journal
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-emerald-400 font-mono text-[11px] hidden sm:inline">
              Live Production Build
            </span>
          </motion.div>

          {/* Operational Commitments */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 font-medium pt-4 border-t border-white/10 w-full max-w-xl"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Transparansi Biaya Penuh</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Arsitektur Kode Bersih</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Sistem Nyata Siap Produksi</span>
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