'use client';

import { motion } from 'framer-motion';
// [FIX 1]: Menghapus 'Star' karena tidak digunakan
import { ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
// [FIX 2]: Komponen Image sekarang benar-benar digunakan
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white pt-24 pb-12 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* --- KOLOM KIRI: Copywriting --- */}
        <div className="flex flex-col items-start text-left">

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
              Kualitas Korporat, Harga Startup
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            Web Dev Professional <br />
            <span className="text-blue-600">Tanpa Harga Selangit.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed"
          >
            Bangun Digital Presence berkelas dunia tanpa harus menguras budget operasional Anda.
            Website professional, cepat, dan high-converting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold rounded-xl hover:border-slate-900 hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Lihat Penawaran
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>No Hidden Fees. Free Maintenance Included.</span>
            </div>
          </motion.div>
        </div>

        {/* --- KOLOM KANAN: Real Client Mockup --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:flex flex-col items-center justify-center text-center"
        >
          <div className="relative w-full max-w-[600px] transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
            <div className="relative aspect-[4/3] w-full">
              {/* [FIX 3]: Menggunakan komponen <Image /> dengan prop 'fill' */}
              {/* Ini memperbaiki error import dan membuat gambar responsif tanpa layout shift */}
              <Image
                src="/portofolioclient1.png"
                alt="Moonshot Academy Web Mockup"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm font-semibold text-slate-500 flex items-center justify-center gap-1">
              For Example, Our Client
              <a
                href="https://www.moonshotacademy.trade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors"
              >
                Moonshot Academy
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="text-xs font-medium text-slate-400 tracking-wide uppercase bg-slate-50 inline-block px-3 py-1 rounded-md border border-slate-100">
              Fully responsive • lightning-fast • built for conversion
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}