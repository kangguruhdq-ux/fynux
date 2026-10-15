'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Rocket,
  Search,
  Palette,
  Code2,
  Target,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Users,
  MessageSquare,
  Smartphone,
  Cpu,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';

import richardPic from '../team/richard.webp';
import juanPic from '../team/juan.webp';

// -------------------- MOTION --------------------
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// -------------------- UI HELPERS --------------------
function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase shadow-sm ${
        dark
          ? 'border-white/10 bg-white/5 text-slate-300'
          : 'border-slate-200 bg-white/90 text-slate-700'
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
      </span>
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  dark?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <motion.div variants={fadeInUp} className={align === 'center' ? 'flex justify-center' : ''}>
        <Chip dark={dark}>{eyebrow}</Chip>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className={`mt-5 text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-sm md:text-base leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          } ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
      {children}
    </span>
  );
}

function CheckLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-700">
      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
      <span className="leading-snug">{text}</span>
    </li>
  );
}

function Stat({ label, value, dark = false }: { label: string; value: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-4 shadow-sm border ${
        dark
          ? 'border-white/10 bg-[#0d131f] text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <p className="text-xs font-bold tracking-widest uppercase text-slate-400">{label}</p>
      <p className="mt-1 text-base sm:text-lg font-bold">{value}</p>
    </div>
  );
}

export default function CompanyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tech = ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Flutter', 'PostgreSQL', 'Supabase', 'Tailwind CSS'];

  return (
    <main className="flex min-h-screen flex-col bg-white pt-20 overflow-x-hidden">
      <Navbar />

      {/* HERO: Deep Obsidian Elegant Dark Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#070b12] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              dark
              eyebrow="The Minds Behind FYNUX"
              title={
                <>
                  Kolektif Perekayasa Sistem yang Bergerak Cepat,
                  <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                    {' '}Standar Rekayasa Terpercaya.
                  </span>
                </>
              }
              subtitle={
                <>
                  Kami bukan agensi massal dengan birokrasi berbelit. Kami mitra rekayasa teknologi independen yang berfokus pada dua hal utama:
                  <span className="font-semibold text-white"> efisiensi proses operasional</span> dan{' '}
                  <span className="font-semibold text-white">peningkatan konversi nyata</span>.
                </>
              }
            />

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#070b12]"
              >
                <MessageSquare className="h-4 w-4" />
                Konsultasikan Proyek 15 Menit
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="#team"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-slate-200 hover:bg-white/10 hover:border-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#070b12]"
              >
                Kenalan dengan Tim <Users className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat dark label="Fokus Utama" value="Konversi & Efisiensi" />
              <Stat dark label="Model Kolaborasi" value="3 Core Engineers Langsung" />
              <Stat dark label="Lingkup Hasil" value="Desain + Kode + Arsitektur" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="bg-white py-20 md:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Tujuan Kami"
              title="Kenapa FYNUX Hadir?"
              subtitle="Banyak bisnis terhambat berkembang bukan karena kekurangan ide, melainkan karena infrastruktur teknologinya lambat, rapuh, dan tidak terintegrasi."
            />

            <motion.div variants={fadeInUp} className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#090d16] p-8 sm:p-10 text-white shadow-xl">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-400 font-mono">Tantangan Lapangan</p>
                <p className="mt-4 text-xl sm:text-2xl font-semibold leading-snug text-slate-200">
                  Otomasi dan sistem terintegrasi sering kali hanya dinikmati korporat bermodal besar.
                </p>
                <ul className="mt-6 space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 mt-0.5 text-red-400 shrink-0" />
                    <span>Operasional manual berbasis kertas dan spreadsheet yang rentan salah</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 mt-0.5 text-red-400 shrink-0" />
                    <span>Website pasif yang tidak menghasilkan prospek bisnis atau penjualan</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 mt-0.5 text-red-400 shrink-0" />
                    <span>Fragmentasi vendor tanpa dokumentasi yang menyulitkan audit</span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-blue-600 bg-blue-600 p-8 sm:p-10 text-white shadow-xl">
                <p className="text-xs font-bold tracking-widest uppercase text-blue-100 font-mono">Misi FYNUX</p>
                <p className="mt-4 text-xl sm:text-2xl font-bold leading-snug">
                  Membawa keandalan teknologi tingkat industri agar dapat diakses oleh UMKM dan institusi berkembang.
                </p>
                <ul className="mt-6 space-y-3.5 text-sm text-blue-50">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                    <span>Arsitektur kode terstruktur, modular, terdokumentasi, dan aman</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Zap className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                    <span>Iterasi pengembangan cepat dengan target peluncuran terukur</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Target className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                    <span>Fokus pada capaian nyata: reputasi, konversi leads, dan efisiensi waktu kerja</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION (WITH RICHARD, JUAN & MAHABBAH MAHABBAN ROMADHON) */}
      <section id="team" className="bg-slate-50 border-b border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Tim Inti Perekayasa"
              title="Dikerjakan Langsung oleh Spesialis Teknis"
              subtitle="Bukan alih daya tanpa pengawasan. Anda berkomunikasi dan berkolaborasi langsung dengan para perekayasa inti sistem."
            />

            <div className="mt-14 space-y-8">
              {/* 1. Richard Faiz */}
              <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative h-44 w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100">
                    <Image
                      src={richardPic}
                      alt="Richard Faiz"
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill>Founder & System Architect</Pill>
                      <Pill>UI/UX & Workflow</Pill>
                    </div>

                    <h3 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Richard Faiz</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-700">Visionary & Workflow Specialist</p>

                    <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                      Richard mengorkestrasi keselarasan desain antarmuka dengan alur kerja bisnis. Fokusnya terletak pada struktur antarmuka yang intuitif, minim friksi navigasi, dan logika aplikasi yang memecahkan masalah di lapangan secara praktis.
                    </p>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      <CheckLine text="Strategi UI/UX berorientasi konversi" />
                      <CheckLine text="Arsitektur frontend modular dan bersih" />
                      <CheckLine text="Pemetaan alur operasional dan logika bisnis" />
                      <CheckLine text="Analisis struktur informasi dan penempatan aksi" />
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 2. Juan */}
              <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
                  <div className="relative h-44 w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100">
                    <Image
                      src={juanPic}
                      alt="Juan"
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 md:text-right">
                    <div className="flex flex-wrap items-center gap-2 md:justify-end">
                      <Pill>Lead Backend Engineer</Pill>
                      <Pill>Keamanan & Skalabilitas</Pill>
                    </div>

                    <h3 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Juan</h3>
                    <p className="mt-1 text-sm font-semibold text-indigo-700">Core Systems & Security</p>

                    <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                      Juan membangun fondasi teknis: perancangan skema basis data, pengerasan keamanan server, optimasi kueri, dan ketahanan sistem. Tujuannya adalah memastikan sistem berjalan stabil, responsif, dan terlindungi dari eksploitasi.
                    </p>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 md:justify-items-end text-left">
                      <CheckLine text="Perancangan basis data & integritas relasi" />
                      <CheckLine text="Penerapan pengerasan keamanan server" />
                      <CheckLine text="Optimasi kinerja dan pemantauan latensi" />
                      <CheckLine text="Arsitektur skalabel untuk lonjakan beban" />
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 3. Mahabbah Mahabban Romadhon */}
              <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm hover:border-slate-300 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative h-44 w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-800 bg-[#090d16] flex flex-col items-center justify-center text-center p-5 border border-blue-500/30 shadow-md">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-600/40">
                      MR
                    </div>
                    <p className="mt-3 text-xs font-mono font-bold text-blue-400">MAHABBAH</p>
                    <span className="text-[10px] text-slate-400 font-mono mt-0.5">Frontend & Mobile</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill>Lead Frontend & Mobile Systems</Pill>
                      <Pill>Micro-Interactions & Vitals</Pill>
                    </div>

                    <h3 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Mahabbah Mahabban Romadhon</h3>
                    <p className="mt-1 text-sm font-semibold text-sky-700">Frontend Architecture & Mobile Specialist</p>

                    <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                      Mahabbah memimpin rekayasa antarmuka responsif dan performa rendering di FYNUX. Fokus utamanya adalah menjamin interaktivitas sehalus 60fps, waktu muat halaman instan, serta arsitektur state management yang andal di berbagai kondisi perangkat dan jaringan.
                    </p>

                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      <CheckLine text="Arsitektur antarmuka responsif & mobile-first" />
                      <CheckLine text="Optimasi Core Web Vitals & performa 60fps" />
                      <CheckLine text="Manajemen state interaktif & micro-interactions" />
                      <CheckLine text="Sinkronisasi data client-server minim latensi" />
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES + TECH STACK */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Prinsip Rekayasa"
              title="Filosofi Kerja yang Menghasilkan Kualitas Konsisten"
              subtitle="Bukan sekadar selesai tepat waktu, namun rapi, teruji, dan mudah dipelihara jangka panjang."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: Target, title: 'Menyelesaikan Masalah', desc: 'Setiap fitur yang dibangun harus menyelesaikan tantangan operasional yang nyata.' },
                { icon: ShieldCheck, title: 'Tepat & Teruji', desc: 'Struktur kode bersih, validasi menyeluruh, dan mengedepankan keamanan data.' },
                { icon: Zap, title: 'Efisien & Cepat', desc: 'Performa waktu muat teroptimasi dari awal demi kenyamanan pengguna dan konversi.' },
              ].map((x) => (
                <motion.div
                  key={x.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 hover:border-slate-300 transition-colors"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-sm">
                    <x.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{x.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-14 overflow-hidden rounded-3xl border border-slate-800 bg-[#090d16] p-8 md:p-12 text-white relative shadow-xl">
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">Ekosistem Teknologi Terpilih</h3>
                    <p className="mt-2 max-w-2xl text-sm text-slate-300 leading-relaxed">
                      Kami memilih perkakas perangkat lunak modern dengan dokumentasi kuat, ekosistem aktif, dan kestabilan teruji.
                    </p>
                  </div>
                  <Cpu className="w-8 h-8 text-blue-400 opacity-60 hidden sm:block" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                  {tech.map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-mono font-bold text-slate-200 hover:border-blue-500/50 hover:bg-white/10 transition-colors"
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" /> Pendekatan Berorientasi Keamanan
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2">
                    <Zap className="h-4 w-4 text-amber-400" /> Optimasi Performa Sejak Awal
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2">
                    <Target className="h-4 w-4 text-blue-400" /> Berorientasi Pada Capaian Klien
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-slate-50 border-t border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Tahapan Kerja"
              title="Proses Transparan dan Terjadwal"
              subtitle="Anda selalu mengetahui tahapan progres, teknisi penanggung jawab, dan estimasi waktu penyelesaian."
            />

            <div className="mt-12 grid gap-6">
              {[
                { step: '1', title: 'Analisis & Strategi', time: 'Hari 1-2', icon: Search, desc: 'Memahami proses bisnis, pengguna sasaran, serta memetakan struktur navigasi dan aksi utama.', out: 'Dokumen brief dan sketsa alur sistem' },
                { step: '2', title: 'Desain & Persetujuan', time: 'Hari 3-5', icon: Palette, desc: 'Pembuatan antarmuka visual terperinci. Pengembangan kode dimulai setelah persetujuan desain untuk efisiensi waktu.', out: 'Prototipe UI/UX interaktif' },
                { step: '3', title: 'Pengembangan & Uji Staging', time: 'Hari 6-12', icon: Code2, desc: 'Penulisan kode program dan penyiapan tautan staging internal agar Anda dapat menguji fungsi secara langsung.', out: 'Aplikasi berjalan pada server staging' },
                { step: '4', title: 'Peluncuran & Dokumentasi', time: 'Hari 13-14', icon: Rocket, desc: 'Pengujian kualitas akhir, responsivitas layar ponsel, deployment ke server produksi, dan sesi pengenalan sistem.', out: 'Aplikasi online, akses mandiri, dan panduan' },
              ].map((x) => (
                <motion.div key={x.step} variants={fadeInUp} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 shrink-0">
                        <x.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Tahap {x.step}</span>
                          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                            {x.time}
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-bold text-slate-900">{x.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">{x.desc}</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:max-w-xs shrink-0">
                      <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Hasil Nyata</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800">{x.out}</p>
                      <ul className="mt-3 space-y-2 text-xs text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          <span>Laporan progres terjadwal</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          <span>Alur revisi terstruktur</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
              <p className="text-sm font-bold text-slate-900">Belum memiliki spesifikasi teknis lengkap?</p>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Kami siap membantu memetakan kebutuhan sistem Anda mulai dari konsultasi awal secara objektif dan tanpa komitmen mengikat.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#070b12] text-white border-t border-white/10 py-20 md:py-24 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              dark
              eyebrow="Langkah Selanjutnya"
              title="Mitra Teknis Jangka Panjang untuk Pertumbuhan Bisnis Anda"
              subtitle="Kami menelaah kebutuhan mendasar, menguji asumsi teknis, dan merekomendasikan arsitektur yang paling efektif."
            />

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl bg-white text-slate-900 px-8 py-4 font-bold hover:bg-slate-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#070b12]"
              >
                Lihat Bukti Kerja Portofolio <ArrowRight className="h-5 w-5" />
              </Link>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-shimmer inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl bg-blue-600 px-8 py-4 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#070b12]"
              >
                <MessageSquare className="h-5 w-5" />
                Mulai Konsultasi Proyek
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" /> Security-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Zap className="h-4 w-4 text-amber-400" /> Reliable Delivery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Target className="h-4 w-4 text-blue-400" /> Outcome-driven
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="Konsultasi Arsitektur Web"
      />
    </main>
  );
}
