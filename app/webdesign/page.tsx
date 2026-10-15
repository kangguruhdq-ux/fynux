'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ConsultationModal from '@/app/components/ConsultationModal';
import { Eye, MousePointerClick, TrendingUp, ArrowRight, MessageSquare } from 'lucide-react';

export default function WebDesignPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#070b12] min-h-screen">
      <Navbar />

      <section className="relative pt-36 pb-20 px-6 bg-[#070b12] text-white border-b border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-xs sm:text-sm font-mono">
            UI/UX Design Strategy
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Desain yang Tidak Hanya Menarik,<br />
            Tetapi Terbukti <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Menghasilkan.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Kami menggabungkan hierarki visual yang jelas dengan psikologi pengguna. 
            Hasilnya adalah pengalaman digital yang meyakinkan pengunjung untuk mengambil tindakan.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 border border-blue-100">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Kejelasan Visual</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pengunjung menangkap nilai utama bisnis Anda dalam detik pertama melalui hierarki tipografi dan komposisi terarah.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 border border-indigo-100">
              <MousePointerClick className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Alur Navigasi Intuitif</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Struktur halaman memandu calon klien secara runtut menuju langkah berikutnya tanpa friksi atau kebingungan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 border border-emerald-100">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Berorientasi Konversi</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Setiap elemen, kontras warna, dan letak tombol aksi diuji untuk memaksimalkan rasio konversi leads Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-normal">
            Tingkatkan Standar Visual Brand Anda
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed tracking-normal">
            Mulai dari audit antarmuka hingga pembuatan prototipe interaktif beresolusi tinggi.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <MessageSquare className="w-5 h-5" />
            Konsultasi Desain & UI/UX
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </section>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="UI/UX Design Strategy"
      />
    </main>
  );
}