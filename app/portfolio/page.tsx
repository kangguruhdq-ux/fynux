'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  LayoutTemplate,
  Database,
  Lock,
  Zap,
  MonitorSmartphone,
  FileSpreadsheet,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';

type CaseStudy = {
  id: number;
  client: string;
  project: string;
  tier: 'STARTER' | 'BUSINESS' | 'ENTERPRISE';
  delivery: string;
  image: string;
  link: string | null;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  highlights?: string[];
  invoiceLine?: string;
};

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: 'Moonshot Academy',
      project: 'Trade Journal Web Application',
      tier: 'BUSINESS',
      delivery: '14 Hari Kerja',
      image: '/portofolioclient1.png',
      link: 'https://www.moonshotacademy.trade',
      challenge:
        'Komunitas trading memerlukan platform interaktif untuk mencatat dan menganalisis riwayat perdagangan setiap anggota. Sistem harus responsif, mengusung mode visual gelap yang nyaman di mata, dan memproses komputasi data secara instan.',
      solution:
        'Kami merancang Web App berbasis Next.js dengan arsitektur manajemen state yang efisien, sehingga grafik performa dan ringkasan jurnal trading tampil responsif tanpa latensi.',
      results: [
        'Memfasilitasi pencatatan jurnal perdagangan ratusan trader aktif.',
        'Waktu muat halaman awal di bawah 1.5 detik dengan optimasi server rendering.',
        'Antarmuka gelap profesional yang meningkatkan retensi dan kenyamanan pengguna.',
        'Penyajian data analitik portofolio secara instan.',
      ],
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      highlights: ['SaaS Architecture', 'Dark Mode UI', 'Fast Rendering', 'Sub-1.5s Load'],
    },
    {
      id: 2,
      client: 'SMA Negeri 2 Ngaglik',
      project: 'Sistem Informasi Presensi Siswa (SIM-Presensi)',
      tier: 'ENTERPRISE',
      delivery: '1 Bulan Pengerjaan',
      image: '/PRESENSI.png',
      link: null,
      challenge:
        'Presensi manual menggunakan lembaran kertas memakan waktu rekapitulasi berjam-jam dan rentan manipulasi data kehadiran. Sekolah membutuhkan aplikasi web ringan untuk guru, siswa, dan admin dengan rekapitulasi data otomatis.',
      solution:
        'Aplikasi web PHP 8 Native dengan MySQL berarsitektur bersih. Menyediakan UI terpisah untuk antarmuka Mobile (Guru/Siswa) dan Desktop (Admin), kiosk input NIS cepat, status kehadiran komprehensif, fitur Auto-Alpha saat batas waktu berakhir, serta ekspor spreadsheet multi-sheet per kelas.',
      results: [
        'Dukungan multi-perangkat: antarmuka otomatis menyesuaikan layar smartphone dan desktop.',
        'Kiosk input presensi cepat berbasis NIS dengan validasi status kehadiran.',
        'Sistem otomatisasi penandaan alpha bagi siswa yang tidak hadir setelah batas jam sekolah.',
        'Panel kontrol admin: manajemen data siswa, kalender akademik, dan audit log.',
        'Laporan eksekutif Excel .xlsx otomatis multi-sheet per kelas dengan pewarnaan status.',
        'Pertahanan keamanan: pembatasan percobaan login (anti brute-force), CSRF token, dan sanitasi query SQL.',
      ],
      techStack: ['PHP 8.x', 'MySQL / MariaDB', 'JavaScript', 'RESTful API', 'PhpSpreadsheet'],
      highlights: ['Multi-Device', 'Kiosk Absensi', 'Auto-Alpha', 'Excel Multi-Sheet'],
      invoiceLine:
        'Pengembangan Sistem Informasi Manajemen Presensi Berbasis Web. Mencakup Dukungan Multi-Perangkat, Kiosk Absensi, Manajemen Basis Data, Keamanan Terpadu, serta Modul Laporan Eksekutif Excel.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#070b12] overflow-x-hidden">
      <Navbar />

      {/* 1) HERO */}
      <section className="relative pt-32 pb-20 px-6 bg-[#070b12] text-white border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-blue-400 mb-6">
            Portofolio & Studi Kasus
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-normal leading-tight">
            Karya Rekayasa Nyata, <br />
            <span className="text-blue-400">Dampak Nyata bagi Klien.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed tracking-normal">
            Bukan sekadar mockup visual. Kami membangun sistem fungsional yang memangkas beban kerja manual dan memperkuat akurasi operasional.
          </p>
        </div>
      </section>

      {/* 2) CASE STUDIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 !== 0;

            const TierIcon =
              study.tier === 'ENTERPRISE' ? ShieldCheck : Zap;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
              >
                {/* Visual */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xl group">
                    <Image
                      src={study.image}
                      alt={study.project}
                      fill
                      priority={study.id === 2}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-2 bg-white transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md border border-slate-200 flex items-center gap-1.5">
                      <TierIcon className="w-3.5 h-3.5 text-blue-600" />
                      Paket {study.tier}
                    </div>

                    {study.id === 2 && (
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md border border-slate-200 flex items-center gap-1.5">
                        <MonitorSmartphone className="w-3.5 h-3.5 text-slate-700" />
                        Mobile & Desktop
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                    <p className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">
                      Klien: {study.client}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
                      {study.project}
                    </h2>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200">
                        Waktu Pengerjaan: {study.delivery}
                      </span>

                      {study.id === 2 && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-200">
                          <FileSpreadsheet className="w-3.5 h-3.5" />
                          Excel Multi-Sheet
                        </span>
                      )}
                    </div>

                    {study.highlights?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {study.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-3 py-1 bg-slate-50 text-slate-700 text-[11px] font-bold uppercase tracking-wider rounded-full border border-slate-200"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Challenge */}
                  <div className="mb-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-slate-500" /> Tantangan Klien
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                      <LayoutTemplate className="w-4 h-4 text-blue-600" /> Solusi Rekayasa FYNUX
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4 text-emerald-600" /> Hasil & Dampak
                    </h3>
                    <ul className="space-y-2.5">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  {study.link ? (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Buka Demo Publik <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <p className="text-xs font-semibold text-slate-500 bg-slate-50 inline-block px-3.5 py-2 rounded-lg border border-slate-200">
                      Sistem internal institusi (akses privat sesuai perjanjian kerahasiaan).
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3) CTA */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Memiliki Kebutuhan Sistem Khusus?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dari digitalisasi operasional UMKM hingga integrasi sistem institusi, kami siap merancang arsitektur perangkat lunak yang sesuai dengan target Anda.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <MessageSquare className="w-5 h-5" />
              Mulai Diskusi Proyek
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <Link
              href="/servicefynux"
              className="inline-flex items-center justify-center min-h-[44px] px-8 py-4 bg-white border border-slate-200 text-slate-800 font-bold rounded-2xl hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
