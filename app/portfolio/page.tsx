'use client';

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
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  highlights?: string[]; // kecil-kecil buat “instant grasp”
  invoiceLine?: string; // optional proof enterprise
};

export default function Portfolio() {
  const WHATSAPP_URL = 'https://wa.me/6281234567890';

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
        'Komunitas trading membutuhkan platform interaktif (SaaS) untuk mencatat dan menganalisis riwayat perdagangan (jurnal) para member. Sistem harus terlihat futuristik (Dark Mode), responsif, dan memproses data instan tanpa lag.',
      solution:
        'Kami merancang Web App berbasis Next.js dengan UI/UX imersif dan arsitektur state management yang efisien, sehingga grafik + data riwayat trading tampil mulus dan cepat.',
      results: [
        'Berhasil memfasilitasi ratusan member komunitas trading.',
        'Loading time di bawah 1.5 detik.',
        'Dark Mode UI/UX meningkatkan retensi pengguna.',
        'Penyajian data analitik mulus tanpa delay.',
      ],
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      highlights: ['SaaS Ready', 'Dark Mode', 'Fast UI', '< 1.5s Load'],
    },

    // ✅ UPDATED: SIPS match dengan spesifikasi yang kamu kasih + visual /PRESENSI.png
    {
  id: 2,
  client: "SMA Negeri 2 Ngaglik",
  project: "Sistem Presensi Siswa - (Website Application)",
  tier: "ENTERPRISE",
  delivery: "1 Bulan",
  image: "/PRESENSI.png",
  link: null,

  // ✅ Singkat + tajam
  challenge:
    "Presensi manual rawan manipulasi dan rekap bulanan makan waktu. Sekolah butuh sistem ringan yang jalan di HP & PC, input cepat, Auto-Alpha, dan laporan Excel rapi untuk banyak kelas.",

  // ✅ Spek inti (bukan essay)
  solution:
    "Web app PHP Native 8 + MySQL/MariaDB dengan UI terpisah Mobile (Guru/Siswa) & Desktop (Admin). Presensi via Kiosk NIS dengan status H/I/S/A/T + upload bukti izin/sakit, Auto-Alpha by deadline, serta export Excel .xlsx profesional multi-sheet otomatis per kelas (PhpSpreadsheet).",

  // ✅ Output/impact yang langsung “nendang”
  results: [
    "Multi-device: otomatis switch tampilan Mobile vs Desktop.",
    "Kiosk input cepat via NIS + status lengkap (H/I/S/A/T).",
    "Auto-Alpha jika tidak presensi sampai batas waktu.",
    "Admin panel: CRUD siswa/kelas/user + import CSV + kalender akademik.",
    "Excel .xlsx profesional: multi-sheet per kelas + rekap otomatis + visual warna status.",
    "Security: rate limit anti brute-force, CSRF token, bcrypt, prepared statements."
  ],

  // ✅ Tech stack sesuai spek
  techStack: ["PHP 8.x (Native)", "MySQL/MariaDB", "HTML/CSS/Vanilla JS", "RESTful API", "PhpSpreadsheet"],

  // optional: kalau mau dipakai di invoice
  invoiceLine:
    "Pengembangan Sistem Informasi Manajemen Presensi (SIM-Presensi) Berbasis Web V.1.0. Mencakup Multi-Device Support, Kiosk Absensi, Manajemen Database Siswa/Guru, Keamanan Data (Anti Brute-force), serta Modul Laporan Eksekutif Excel Multi-Sheet Otomatis."
}

  ];

  return (
    <main className="flex min-h-screen flex-col bg-white pt-20 overflow-x-hidden">
      <Navbar />

      {/* 1) HERO */}
      <section className="relative py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-blue-600/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-indigo-600/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
          >
            Karya Kami, <br />
            <span className="text-blue-400">Solusi Mereka.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Bukan sekadar screenshot cantik. Ini sistem nyata yang memangkas kerja manual, meningkatkan kontrol,
            dan bikin operasional jauh lebih rapi.
          </motion.p>
        </div>
      </section>

      {/* 2) CASE STUDIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 !== 0;

            const TierIcon =
              study.tier === 'ENTERPRISE' ? ShieldCheck : study.tier === 'BUSINESS' ? Zap : Zap;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Visual */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl group">
                    <Image
                      src={study.image}
                      alt={study.project}
                      fill
                      priority={study.id === 2}
                      className="object-contain bg-white transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-lg border border-slate-100 flex items-center gap-2">
                      <TierIcon className="w-3.5 h-3.5 text-blue-600" />
                      Paket {study.tier}
                    </div>

                    {/* Small “device hint” khusus presensi biar match screenshot */}
                    {study.id === 2 && (
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-slate-800 shadow-lg border border-slate-100 flex items-center gap-2">
                        <MonitorSmartphone className="w-3.5 h-3.5 text-slate-700" />
                        Mobile + Desktop UI
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-6">
                    <p className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-2">
                      Klien: {study.client}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                      {study.project}
                    </h2>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md border border-slate-200">
                        Waktu Pengerjaan: {study.delivery}
                      </span>

                      {study.id === 2 && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md border border-emerald-100">
                          <FileSpreadsheet className="w-4 h-4" />
                          Excel .xlsx Multi-Sheet
                        </span>
                      )}
                    </div>

                    {study.highlights?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {study.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-3 py-1.5 bg-white text-slate-700 text-[11px] font-bold uppercase tracking-wider rounded-full border border-slate-200"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-slate-500" /> Tantangan
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <LayoutTemplate className="w-5 h-5 text-blue-500" /> Solusi Fynux
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5 text-green-500" /> Hasil Akhir
                    </h4>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-md border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Optional invoice line */}
                  {study.invoiceLine ? (
                    <p className="text-sm text-slate-500 italic bg-slate-50 inline-block px-4 py-2 rounded-lg border border-slate-100 mb-8">
                      “{study.invoiceLine}”
                    </p>
                  ) : (
                    <div className="mb-8" />
                  )}

                  {/* Action */}
                  {study.link ? (
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/20"
                    >
                      Lihat Live Demo <ExternalLink className="w-5 h-5" />
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-500 italic bg-slate-50 inline-block px-4 py-2 rounded-lg border border-slate-100">
                      🔒 Demo sistem ini bersifat privat (Internal Institusi).
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
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Punya Project di Kepala? <br />
            <span className="text-blue-600">Mari Eksekusi.</span>
          </h2>

          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Kalau Anda serius, kami lebih serius. Dari UMKM sampai institusi — kami fokus ke hasil yang bisa dipakai,
            bukan sekadar tampil “bagus”.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2"
            >
              Mulai Project Anda <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              href="/servicefynux"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              Lihat Paket Harga
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
