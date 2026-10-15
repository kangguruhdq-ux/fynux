'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Code2, Layers, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[95vh] flex items-center justify-center bg-[#070b12] text-white pt-36 pb-24 overflow-hidden border-b border-white/10">
        {/* ========================================================
            HERO BACKGROUND: Full-Bleed Real Client Showcase Visual
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        >
          <Image
            src="/portofolioclient1.png"
            alt="FYNUX Hero Background Visual Showcase"
            fill
            priority
            quality={95}
            className="object-contain md:object-cover object-center opacity-80 md:opacity-90 scale-100 lg:scale-105 transition-all duration-700 filter brightness-105 contrast-105 animate-hero-breathe"
            sizes="100vw"
          />

          {/* Precision Gradient Masks: Top seamless blend, bottom fade & subtle radial contrast */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#070b12] via-[#070b12]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#070b12] via-[#070b12]/75 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/75 via-transparent to-[#070b12]/75 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,11,18,0.4)_0%,rgba(7,11,18,0.85)_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-cyber-grid-active pointer-events-none opacity-60" />
        </motion.div>

        {/* Foreground Content: High-Impact Centered Hero */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="container max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center"
        >
          {/* Headline */}
          <motion.h1
            variants={heroItem}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-normal text-white leading-[1.15] mb-6 max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
          >
            Arsitektur Web Modern, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Presisi dan Skalabel.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={heroItem}
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed tracking-normal font-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]"
          >
            FYNUX membangun aplikasi web kustom, sistem informasi korporat, dan platform digital yang cepat, aman, dan siap mendukung pertumbuhan operasional bisnis Anda.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={heroItem}
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
            variants={heroItem}
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
            variants={heroItem}
            className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-300 font-medium pt-4 border-t border-white/10 w-full max-w-xl"
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
        </motion.div>
      </section>

      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
      />
    </>
  );
}