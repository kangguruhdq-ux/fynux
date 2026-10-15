'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Code2, Terminal, Layers } from 'lucide-react';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';
import HeroCodeTerminal from './HeroCodeTerminal';

export default function Hero() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-[92vh] flex items-center bg-[#070b12] text-white pt-32 pb-20 overflow-hidden border-b border-white/10">
        {/* Subtle Architectural Grid & Ambient Backlight */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Engineering Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-bold text-slate-300 tracking-widest uppercase">
                Rekayasa Perangkat Lunak & Sistem Skalabel
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Arsitektur Web Modern, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Presisi dan Andal.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed"
            >
              FYNUX merancang aplikasi web kustom, sistem automasi internal, dan infrastruktur digital tingkat korporat yang cepat, teruji keamanannya, serta siap mendukung pertumbuhan operasional bisnis Anda.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
            >
              <button
                type="button"
                onClick={() => setIsConsultModalOpen(true)}
                className="btn-shimmer min-h-[48px] px-8 py-3.5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b12]"
              >
                <span>Konsultasi Kebutuhan Sistem</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/#pricing"
                className="min-h-[48px] px-8 py-3.5 bg-white/5 text-slate-200 border border-white/15 font-bold rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b12]"
              >
                Lihat Paket Layanan
              </Link>
            </motion.div>

            {/* Operational Commitment */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium pt-4 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparansi Biaya Penuh</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Arsitektur Kode Bersih & Modular</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Tanpa Mockup Statis Palsu</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Code Terminal Generator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center"
          >
            <HeroCodeTerminal />
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