'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative py-24 px-6 overflow-hidden bg-[#070b12] text-white border-t border-white/10">
        <div className="absolute inset-0 bg-cyber-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3 inline-block">
              Langkah Berikutnya
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Siap Membangun Solusi Digital <br className="hidden md:block" />
              yang Bekerja untuk Bisnis Anda?
            </h2>

            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Diskusikan kebutuhan arsitektur sistem, aplikasi web, atau profil perusahaan Anda bersama tim teknis FYNUX hari ini.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group min-h-[48px] px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <MessageSquare className="w-5 h-5 text-blue-200" />
                <span>Mulai Konsultasi Kebutuhan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/portfolio"
                className="min-h-[48px] px-8 py-4 bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-xl hover:bg-slate-700 hover:text-white transition-all flex items-center justify-center w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Lihat Studi Kasus Klien
              </Link>
            </div>

            <p className="mt-8 text-xs text-slate-400 font-medium">
              Alokasi proyek bulanan dibatasi secara terukur untuk menjamin ketepatan delivery dan standar kode terbaik.
            </p>
          </motion.div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="Web Application Development"
      />
    </>
  );
}