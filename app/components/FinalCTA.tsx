'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Siap Bangun Sistem Digital <br className="hidden md:block" />
            yang Menguntungkan?
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dengan puluhan bisnis dan institusi yang telah mempercayakan arsitektur digital mereka pada FYNUX. Mari diskusi hari ini.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/YOUR_PHONE_NUMBER" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-xl hover:shadow-white/20 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Mulai Project Saya <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link 
              href="/portfolio"
              className="px-8 py-4 bg-transparent text-white border-2 border-white/20 font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center w-full sm:w-auto"
            >
              Lihat Studi Kasus
            </Link>
          </div>

          <p className="mt-8 text-sm text-blue-300 font-medium">
            *Slot terbatas. Kami membatasi jumlah proyek bulanan <br className="hidden sm:block" /> untuk memastikan kualitas Enterprise-grade tetap terjaga.
          </p>
        </motion.div>
      </div>
    </section>
  );
}