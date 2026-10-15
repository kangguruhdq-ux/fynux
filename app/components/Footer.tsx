'use client';

import { useState } from 'react';
import { Instagram, ArrowUpRight, MapPin, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-950 text-white pt-20 pb-10 relative z-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section: CTA & Brand */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-800/80 pb-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xl text-white">
                  F
                </div>
                <span className="text-2xl font-black tracking-tight text-white">
                  FYNUX<span className="text-blue-500">.</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                Mitra rekayasa web dan pengembangan sistem digital berkinerja tinggi. Membangun perangkat lunak yang mempercepat efisiensi bisnis Anda.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-2.5 mt-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Menerima Alokasi Proyek Baru
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Punya Kebutuhan Sistem Khusus?
              </span>
              <button
                type="button"
                onClick={() => setIsConsultOpen(true)}
                className="group flex items-center gap-2 text-3xl md:text-5xl font-extrabold text-white hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
              >
                <span>Mulai Diskusi</span>
                <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-blue-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
              <div className="flex items-center gap-2 mt-3 text-slate-400 text-xs">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>contact@fynux.com</span>
              </div>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1: Services */}
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                Katalog Layanan
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/webapp" className="hover:text-blue-400 transition-colors">
                    Web App Development
                  </Link>
                </li>
                <li>
                  <Link href="/webdesign" className="hover:text-blue-400 transition-colors">
                    UI/UX Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/hosting" className="hover:text-blue-400 transition-colors">
                    Managed Cloud Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/servicefynux" className="hover:text-blue-400 transition-colors">
                    Katalog Lengkap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Perusahaan */}
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                Perusahaan
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/profile" className="hover:text-blue-400 transition-colors">
                    Tentang Kami & Tim
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                    Studi Kasus Portofolio
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-blue-400 transition-colors">
                    Skema Paket Investasi
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-blue-400 transition-colors">
                    Kontak & Alamat
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Kontak & Komunitas */}
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                Saluran Resmi
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href="https://www.instagram.com/fynuxofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Instagram size={15} className="text-pink-400" />
                    <span>Instagram Resmi</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsConsultOpen(true)}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors text-left"
                  >
                    <MessageSquare size={15} className="text-emerald-400" />
                    <span>Live Konsultasi Teknis</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Base Location */}
            <div>
              <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                Lokasi Operasional
              </h3>
              <p className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                <MapPin size={16} className="mt-1 shrink-0 text-blue-500" />
                <span>
                  Yogyakarta, Indonesia.<br />
                  Melayani Klien Nasional & Internasional.
                </span>
              </p>
            </div>
          </div>

          {/* Bottom Section: Copyright & Compliance */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-slate-900 pt-8 text-xs text-slate-500 gap-4">
            <p>&copy; {currentYear} FYNUX Digital Solutions. Seluruh hak cipta dilindungi.</p>
            <div className="flex items-center gap-6">
              <span>Keamanan Server Terenkripsi</span>
              <span>•</span>
              <span>WCAG 2.1 AA Compliant</span>
            </div>
          </div>
        </div>
      </footer>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </>
  );
}