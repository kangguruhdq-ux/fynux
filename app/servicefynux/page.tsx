'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Rocket,
  Building2,
  ShoppingCart,
  CheckSquare,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Calendar,
  Settings,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  RotateCcw,
  ShieldCheck,
  Zap,
  Target,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConsultationModal from '../components/ConsultationModal';

// -------------------- DATA --------------------
const services = [
  {
    id: 1,
    category: 'Bisnis & UMKM',
    icon: Rocket,
    title: 'Landing Page Peluncuran Produk',
    description:
      'Halaman terfokus untuk memperkenalkan produk atau jasa baru. Dirancang khusus untuk konversi leads dengan struktur penawaran yang meyakinkan.',
    perfectFor: ['Peluncuran produk baru', 'Promosi acara khusus', 'Pengumpulan prospek leads'],
    delivery: '5-7 hari kerja',
    tier: 'STARTER',
    price: 'Rp 1.490.000',
    isCustom: false,
    highlight: 'Peluncuran Cepat',
  },
  {
    id: 2,
    category: 'Bisnis & UMKM',
    icon: Building2,
    title: 'Company Profile Profesional',
    description:
      'Struktur 3 hingga 8 halaman untuk membangun kredibilitas bisnis: katalog layanan, profil tim, studi kasus, dan alur kontak calon klien.',
    perfectFor: ['Startup teknologi', 'UMKM skala menengah', 'Konsultan & agensi profesional'],
    delivery: '10-14 hari kerja',
    tier: 'BUSINESS',
    price: 'Rp 3.900.000',
    isCustom: false,
    highlight: 'Membangun Kredibilitas',
  },
  {
    id: 3,
    category: 'Bisnis & UMKM',
    icon: ShoppingCart,
    title: 'Toko Online & E-Commerce',
    description:
      'Katalog produk interaktif, keranjang belanja, checkout terarah, serta dashboard pengelolaan pesanan mandiri.',
    perfectFor: ['Brand retail busana', 'F&B dan kuliner', 'Distribusi produk fisik'],
    delivery: '10-14 hari kerja',
    tier: 'BUSINESS',
    price: 'Rp 3.900.000',
    isCustom: false,
    highlight: 'Siap Transaksi',
  },
  {
    id: 4,
    category: 'Institusi & Edukasi',
    icon: CheckSquare,
    title: 'Sistem Presensi Digital Terpadu',
    description:
      'Presensi berbasis QR / NIS, dashboard pemantauan real-time, laporan otomatis multi-sheet, dan perlindungan anti kecurangan.',
    perfectFor: ['Sekolah dan yayasan pendidikan', 'Kantor korporat', 'Penyelenggara pelatihan'],
    delivery: '2-4 minggu',
    tier: 'ENTERPRISE',
    price: 'Mulai Rp 6.000.000',
    isCustom: true,
    highlight: 'Anti Manipulasi Data',
  },
  {
    id: 5,
    category: 'Institusi & Edukasi',
    icon: GraduationCap,
    title: 'Sistem Informasi Akademik',
    description:
      'Portal terpadu untuk siswa, pengajar, dan wali murid: rekapitulasi nilai, jadwal kegiatan, dan pengumuman institusi.',
    perfectFor: ['Sekolah SD hingga SMA', 'Akademi & universitas', 'Lembaga kursus profesional'],
    delivery: '6-8 minggu',
    tier: 'ENTERPRISE',
    price: 'Mulai Rp 6.000.000',
    isCustom: true,
    highlight: 'Portal Terintegrasi',
  },
  {
    id: 6,
    category: 'Kreatif & Personal',
    icon: Briefcase,
    title: 'Website Portofolio Profesional',
    description:
      'Showcase proyek dan keahlian dengan tampilan presisi. Cocok bagi praktisi kreatif yang ingin meningkatkan posisi tawar di pasar.',
    perfectFor: ['Desainer visual & fotografer', 'Software engineer & konsultan', 'Pekerja kreatif independen'],
    delivery: '5-10 hari kerja',
    tier: 'STARTER / BUSINESS',
    price: 'Sesuai lingkup proyek',
    isCustom: false,
    highlight: 'Peningkatan Reputasi',
  },
  {
    id: 7,
    category: 'Non-Profit & Event',
    icon: HeartHandshake,
    title: 'Website Organisasi & Yayasan',
    description:
      'Penekanan pada transparansi program, pelaporan kegiatan, dan kemudahan donasi untuk membangun kepercayaan para pemangku kepentingan.',
    perfectFor: ['Yayasan sosial', 'Lembaga swadaya masyarakat', 'Komunitas nirlaba'],
    delivery: '10-14 hari kerja',
    tier: 'BUSINESS',
    price: 'Paket bersubsidi khusus',
    isCustom: false,
    highlight: 'Transparansi & Donasi',
  },
  {
    id: 8,
    category: 'Non-Profit & Event',
    icon: Calendar,
    title: 'Halaman Pendaftaran Acara',
    description:
      'Landing page acara resmi dengan formulir registrasi peserta, countdown jadwal, dan rincian pembicara yang terstruktur.',
    perfectFor: ['Konferensi dan seminar', 'Workshop profesional', 'Acara penggalangan dana'],
    delivery: '5-7 hari kerja',
    tier: 'STARTER',
    price: 'Rp 1.490.000',
    isCustom: false,
    highlight: 'Registrasi Cepat',
  },
  {
    id: 9,
    category: 'Custom System',
    icon: Settings,
    title: 'Aplikasi Web Khusus (Custom)',
    description:
      'Sistem informasi yang disesuaikan dengan alur operasional unik bisnis Anda: modul ERP spesifik, CRM, sistem reservasi, atau dashboard analitik.',
    perfectFor: ['Model bisnis bertahap spesifik', 'Alur kerja multi-cabang', 'Modernisasi sistem manual'],
    delivery: '4-12 minggu',
    tier: 'ENTERPRISE',
    price: 'Mulai Rp 9.000.000',
    isCustom: true,
    highlight: 'Otomasi Alur Kerja',
  },
];

const categories = [
  'Semua',
  'Bisnis & UMKM',
  'Institusi & Edukasi',
  'Kreatif & Personal',
  'Non-Profit & Event',
  'Custom System',
];

// -------------------- MOTION --------------------
const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

const pop: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

function TierBadge({ tier }: { tier: string }) {
  const cls =
    tier.includes('ENTERPRISE')
      ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
      : tier.includes('BUSINESS')
        ? 'bg-blue-50 text-blue-700 border-blue-200'
        : 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${cls}`}>
      {tier}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

function MiniValue({ icon: Icon, title, desc, dark }: { icon: typeof Zap; title: string; desc: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm text-left ${
        dark
          ? 'border-white/10 bg-[#0d131f] text-white'
          : 'border-slate-200 bg-white text-slate-900'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
            dark
              ? 'bg-white/5 border-white/10 text-blue-400'
              : 'bg-slate-50 border-slate-200 text-slate-900'
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</p>
          <p className={`mt-1 text-xs leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCatalog() {
  const [activeTab, setActiveTab] = useState('Semua');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState('Katalog Layanan Web');

  // Quiz
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ pages: string; feature: string; timeline: string }>({
    pages: '',
    feature: '',
    timeline: '',
  });

  const filteredServices = useMemo(() => {
    if (activeTab === 'Semua') return services;
    return services.filter((s) => s.category === activeTab);
  }, [activeTab]);

  const handleQuizAnswer = (question: 'pages' | 'feature' | 'timeline', answer: string) => {
    setQuizAnswers((prev) => ({ ...prev, [question]: answer }));
    setQuizStep((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({ pages: '', feature: '', timeline: '' });
  };

  const getQuizResult = () => {
    const { pages, feature } = quizAnswers;

    if (pages === 'custom' || feature === 'dashboard') {
      return {
        tier: 'ENTERPRISE',
        price: 'Mulai Rp 6.000.000',
        desc: 'Aplikasi Web Khusus & Sistem Manajemen Institusi',
        time: '2-6 Minggu Kerja',
        tone: 'indigo' as const,
      };
    }

    if (pages === '5-10' || feature === 'ecommerce' || feature === 'blog') {
      return {
        tier: 'BUSINESS',
        price: 'Rp 3.900.000',
        desc: 'Company Profile Lengkap / Toko Online Bisnis',
        time: '10-14 Hari Kerja',
        tone: 'blue' as const,
      };
    }

    return {
      tier: 'STARTER',
      price: 'Rp 1.490.000',
      desc: 'Landing Page Terfokus / Website Portofolio',
      time: '5-7 Hari Kerja',
      tone: 'slate' as const,
    };
  };

  const result = getQuizResult();

  const handleOpenConsultation = (serviceTitle: string) => {
    setSelectedServiceForModal(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#070b12] overflow-x-hidden">
      <Navbar />

      {/* HERO: Deep Obsidian Elegant Dark Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#070b12] text-white">
        {/* Unique Service Beam Scan Animation */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-85" style={{ animation: 'serviceBeamScan 4s ease-in-out infinite' }} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-36 md:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-blue-400 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Katalog Solusi Rekayasa FYNUX
            </div>

            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-normal leading-tight">
              Pilih Solusi Berdasarkan Hasil Nyata,<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300"> Bukan Sekadar Halaman Statis.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed tracking-normal font-normal">
              Fokus pada dampak langsung: <span className="font-semibold text-white">kredibilitas bisnis</span>,{' '}
              <span className="font-semibold text-white">konversi pelanggan</span>, atau{' '}
              <span className="font-semibold text-white">otomasi operasional</span>. Hindari pengeluaran pada fitur yang tidak dibutuhkan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handleOpenConsultation('Konsultasi Katalog Layanan')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/30 hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <MessageSquare className="h-4 w-4" /> Konsultasi Kebutuhan Gratis
              </button>

              <a
                href="#quiz"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Rekomendasi Paket Cepat <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
              <MiniValue dark icon={Zap} title="Peluncuran Tepat Waktu" desc="Sistem siap digunakan sesuai jadwal tanpa kendala berkepanjangan." />
              <MiniValue dark icon={ShieldCheck} title="Keamanan Teruji" desc="Standar proteksi data terenkripsi dan bebas celah keamanan umum." />
              <MiniValue dark icon={Target} title="Fokus Hasil Bisnis" desc="Setiap struktur halaman dioptimasi untuk menghasilkan respon calon klien." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="sticky top-[72px] z-20 -mx-6 px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-200">
            <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-thin">
              {categories.map((cat) => {
                const active = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={[
                      'whitespace-nowrap min-h-[40px] rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all border focus:outline-none focus:ring-2 focus:ring-blue-500',
                      active
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100',
                    ].join(' ')}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.article
                  key={service.id}
                  layout
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pop}
                  transition={{ duration: 0.18 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-blue-600">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400">{service.category}</p>
                          <p className="text-xs font-semibold text-slate-700">{service.highlight}</p>
                        </div>
                      </div>

                      <TierBadge tier={service.tier} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 leading-snug">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{service.description}</p>

                    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Kesesuaian Penggunaan</p>
                      <ul className="mt-2.5 space-y-2">
                        {service.perfectFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                        <span className="text-xs font-semibold text-slate-600">Waktu: {service.delivery}</span>
                        <span className="text-sm font-bold text-slate-900">{service.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenConsultation(service.title)}
                      className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Konsultasikan Paket Ini
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* QUIZ */}
      <section id="quiz" className="py-20 md:py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">
              Rekomendasi Paket Berdasarkan Kebutuhan
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Pilih karakteristik proyek Anda dalam tiga pertanyaan ringkas untuk mendapatkan estimasi cakupan dan timeline yang sesuai.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            {/* Left: Quiz Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-md relative overflow-hidden">
              {quizStep > 0 && quizStep < 4 && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(quizStep / 3) * 100}%` }}
                    className="h-full bg-blue-600"
                  />
                </div>
              )}

              <AnimatePresence mode="wait">
                {quizStep === 0 && (
                  <motion.div
                    key="q0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    className="text-center"
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Mulai Panduan</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">Identifikasi Cakupan Proyek Anda</h3>
                    <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Jawab tiga pertanyaan singkat untuk mengetahui tier arsitektur yang paling tepat bagi target bisnis Anda.
                    </p>
                    <button
                      type="button"
                      onClick={() => setQuizStep(1)}
                      className="mt-6 inline-flex items-center gap-2 min-h-[44px] rounded-2xl bg-blue-600 px-7 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Mulai Sekarang <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}

                {quizStep === 1 && (
                  <motion.div
                    key="q1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-700">Pertanyaan 1 dari 3</p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                      Berapa perkiraan jumlah halaman atau modul sistem?
                    </h3>
                    <div className="mt-6 space-y-3">
                      {[
                        { val: '1', label: '1 Halaman Terfokus (Landing Page)' },
                        { val: '3-5', label: '3-5 Halaman (Profil Perusahaan / Portofolio)' },
                        { val: '5-10', label: '5-10 Halaman (Katalog Layanan Lengkap)' },
                        { val: 'custom', label: 'Sistem Kustom Kompleks dengan Dashboard Admin' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => handleQuizAnswer('pages', opt.val)}
                          className="w-full min-h-[44px] rounded-2xl border border-slate-200 bg-white p-4 text-left font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <span className="text-sm">{opt.label}</span>
                          <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quizStep === 2 && (
                  <motion.div
                    key="q2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-700">Pertanyaan 2 dari 3</p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                      Fitur teknis apa yang paling penting untuk operasional Anda?
                    </h3>
                    <div className="mt-6 space-y-3">
                      {[
                        { val: 'info', label: 'Informasi Kredibilitas dan Form Kontak Terarah' },
                        { val: 'blog', label: 'Publikasi Artikel dan Berita Terstruktur (CMS)' },
                        { val: 'ecommerce', label: 'Katalog Produk dan Transaksi E-Commerce' },
                        { val: 'dashboard', label: 'Dashboard Pengguna, Basis Data, dan Hak Akses' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => handleQuizAnswer('feature', opt.val)}
                          className="w-full min-h-[44px] rounded-2xl border border-slate-200 bg-white p-4 text-left font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <span className="text-sm">{opt.label}</span>
                          <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quizStep === 3 && (
                  <motion.div
                    key="q3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-700">Pertanyaan 3 dari 3</p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                      Kapan target waktu sistem siap digunakan secara publik?
                    </h3>
                    <div className="mt-6 space-y-3">
                      {[
                        { val: 'urgent', label: 'Kurang dari 1 minggu (Prioritas Segera)' },
                        { val: 'normal', label: '1 hingga 2 minggu (Standar Terjadwal)' },
                        { val: 'flexible', label: 'Lebih dari 3 minggu (Pengembangan Menyeluruh)' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => handleQuizAnswer('timeline', opt.val)}
                          className="w-full min-h-[44px] rounded-2xl border border-slate-200 bg-white p-4 text-left font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <span className="text-sm">{opt.label}</span>
                          <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {quizStep === 4 && (
                  <motion.div
                    key="qr"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="h-4 w-4" /> Rekomendasi Terbentuk
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      Paket yang Paling Sesuai dengan Kebutuhan Anda:
                    </h3>

                    <div className="mt-5 mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <span className="text-xs font-bold tracking-widest uppercase text-blue-600">
                          Paket {result.tier}
                        </span>
                        <span className="text-base font-bold text-slate-900">{result.price}</span>
                      </div>
                      <p className="mt-3 text-base font-bold text-slate-900">{result.desc}</p>
                      <p className="mt-2 text-xs text-slate-600 inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> Estimasi pengerjaan: {result.time}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleOpenConsultation(`Hasil Rekomendasi: Paket ${result.tier}`)}
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl bg-blue-600 px-6 py-3 text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Konsultasikan Paket Ini
                      </button>

                      <button
                        type="button"
                        onClick={resetQuiz}
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-2xl border border-slate-200 bg-white px-6 py-3 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <RotateCcw className="h-4 w-4" /> Ulangi Kuisioner
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Live Summary */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm h-fit">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Ringkasan Pilihan</p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                  <p className="text-xs font-bold text-slate-500">Jumlah Halaman</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {quizAnswers.pages || 'Belum dipilih'}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                  <p className="text-xs font-bold text-slate-500">Fitur Kunci</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {quizAnswers.feature || 'Belum dipilih'}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5">
                  <p className="text-xs font-bold text-slate-500">Ekspektasi Timeline</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {quizAnswers.timeline || 'Belum dipilih'}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Konsultasi Terarah 15 Menit</p>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  Kami meninjau kebutuhan teknis Anda secara objektif agar Anda tidak membayar untuk komponen yang belum diperlukan.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenConsultation('Konsultasi Kustom')}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 min-h-[44px] rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <MessageCircle className="h-4 w-4" /> Hubungi Engineer FYNUX
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Lingkup Terdefinisi</Pill>
                <Pill>Transparansi Waktu</Pill>
                <Pill>Dukungan Purna Jual</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-18 md:py-20 px-6 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Setiap Model Bisnis Memiliki Kompleksitas Berbeda
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Jika alur operasional atau sistem Anda membutuhkan penanganan arsitektur khusus, kami siap merancang solusi yang mempermudah kerja harian tim Anda.
          </p>
          <button
            type="button"
            onClick={() => handleOpenConsultation('Konsultasi Kustom Komprehensif')}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <MessageSquare className="w-5 h-5" />
            Mulai Diskusi Proyek Sekarang
          </button>
        </div>
      </section>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={selectedServiceForModal}
      />
    </main>
  );
}