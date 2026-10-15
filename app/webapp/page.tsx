'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ConsultationModal from '@/app/components/ConsultationModal';
import { CheckCircle2, Zap, Database, Lock, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function WebAppPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const capabilities = [
    'Akses cloud tersentralisasi dari peramban web tanpa instalasi rumit',
    'Sinkronisasi data real-time dengan audit log aktivitas pengguna',
    'Otomatisasi alur kerja, invoice, dan pelaporan berkala',
    'Skalabilitas infrastruktur berbasis kontainer dan micro-services',
    'Keamanan berlapis dengan enkripsi data dan kontrol hak akses',
  ];

  return (
    <main className="bg-[#070b12] min-h-screen">
      <Navbar />

      {/* Hero Service */}
      <section className="relative pt-36 pb-20 px-6 bg-[#070b12] text-white border-b border-white/10 overflow-hidden">
        {/* Unique WebApp Cloud Architecture Network Flow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[260px] bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" style={{ animation: 'dataPacketTransit 3.5s linear infinite' }} />
        <div className="pointer-events-none absolute inset-0 bg-cyber-grid-active opacity-35" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs sm:text-sm font-mono">
            Web Application Engineering
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-normal">
            Lebih Dari Sekadar Website.<br />
            Ini Adalah <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Sistem Operasional.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed tracking-normal font-normal">
            Kami membangun sistem berbasis web (SaaS, CRM internal, modul ERP, presensi) yang mengotomatisasi proses bisnis Anda dengan keandalan tinggi.
          </p>
        </div>
      </section>

      {/* Content Detail */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Keunggulan Sistem Web Kustom
            </h2>
            <ul className="space-y-4">
              {capabilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                  <CheckCircle2 className="text-blue-600 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-3 border border-amber-100">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Arsitektur Cepat</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Next.js App Router dengan SSR dan caching teroptimasi.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 border border-blue-100">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Database Terstruktur</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Skema PostgreSQL atau relational database berintegritas tinggi.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 col-span-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-3 border border-emerald-100">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Keamanan Standar Industri</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Proteksi terhadap CSRF, XSS, rate limiting anti brute-force, dan enkripsi data sensitif pada saat istirahat maupun transmisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-normal">
            Siap Mengotomatisasi Alur Kerja Anda?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed tracking-normal">
            Diskusikan spesifikasi kebutuhan aplikasi dan timeline proyek bersama tim engineer kami.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <MessageSquare className="w-5 h-5" />
              Konsultasikan Kebutuhan Sistem
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <Link
              href="/servicefynux"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-2xl font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Lihat Katalog Layanan
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="Web Application Development"
      />
    </main>
  );
}