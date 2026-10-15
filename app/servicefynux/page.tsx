'use client';

import { useMemo, useState } from 'react';
// PERBAIKAN 1: Import Variants agar tipe data dikenali
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
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// -------------------- DATA --------------------
const services = [
  {
    id: 1,
    category: 'Bisnis & UMKM',
    icon: Rocket,
    title: 'Landing Page Product Launch',
    description:
      '1 halaman fokus untuk soft-launching produk/jasa. Dirancang untuk konversi (CTA jelas), form capture, dan integrasi WhatsApp.',
    perfectFor: ['Soft launch produk', 'Event promotion', 'Lead generation'],
    delivery: '5–7 hari',
    tier: 'STARTER',
    price: 'Rp 1.49jt',
    isCustom: false,
    highlight: 'Paling cepat live',
  },
  {
    id: 2,
    category: 'Bisnis & UMKM',
    icon: Building2,
    title: 'Company Profile Premium',
    description:
      '3–8 halaman untuk membangun kredibilitas instan: layanan, tim, portofolio, dan CTA yang “jualan” tanpa terlihat maksa.',
    perfectFor: ['Startup', 'UMKM scale-up', 'Konsultan / Agensi'],
    delivery: '10–14 hari',
    tier: 'BUSINESS',
    price: 'Rp 3.9jt',
    isCustom: false,
    highlight: 'Paling “trust builder”',
  },
  {
    id: 3,
    category: 'Bisnis & UMKM',
    icon: ShoppingCart,
    title: 'E-Commerce / Toko Online',
    description:
      'Katalog, keranjang, checkout, dan manajemen produk dasar. Cocok untuk mulai jualan online dengan sistem yang proper.',
    perfectFor: ['Brand fashion', 'F&B retail', 'Produk fisik'],
    delivery: '10–14 hari',
    tier: 'BUSINESS',
    price: 'Rp 3.9jt',
    isCustom: false,
    highlight: 'Siap transaksi',
  },
  {
    id: 4,
    category: 'Institusi & Edukasi',
    icon: CheckSquare,
    title: 'Sistem Presensi Digital',
    description:
      'QR check-in/out, dashboard admin real-time, laporan otomatis. Paperless, audit-friendly, dan jauh lebih sulit dimanipulasi.',
    perfectFor: ['Sekolah / kampus', 'Kantor', 'Event organizer'],
    delivery: '2–4 minggu',
    tier: 'ENTERPRISE',
    price: 'Mulai 6jt',
    isCustom: true,
    highlight: 'Anti-manipulasi',
  },
  {
    id: 5,
    category: 'Institusi & Edukasi',
    icon: GraduationCap,
    title: 'Sistem Informasi Akademik',
    description:
      'Portal siswa/mahasiswa: nilai, jadwal, pengumuman, absensi. Terintegrasi untuk admin, guru, dan siswa.',
    perfectFor: ['SD–SMA', 'Kampus', 'Lembaga kursus'],
    delivery: '6–8 minggu',
    tier: 'ENTERPRISE',
    price: 'Mulai 6jt',
    isCustom: true,
    highlight: 'All-in-one portal',
  },
  {
    id: 6,
    category: 'Kreatif & Personal',
    icon: Briefcase,
    title: 'Portfolio Website',
    description:
      'Showcase karya & project dengan tampilan modern. Cocok untuk profesional kreatif yang ingin menaikkan rate.',
    perfectFor: ['Designer / photographer', 'Developer / writer', 'Freelancer'],
    delivery: '5–10 hari',
    tier: 'STARTER / BUSINESS',
    price: 'Sesuai paket',
    isCustom: false,
    highlight: 'Naik kelas personal brand',
  },
  {
    id: 7,
    category: 'Non-Profit & Event',
    icon: HeartHandshake,
    title: 'Website Yayasan / NGO',
    description:
      'Fokus misi, program, transparansi. Membantu membangun trust donatur & relawan, tanpa terlihat “minta-minta”.',
    perfectFor: ['Yayasan amal', 'NGO / LSM', 'Komunitas sosial'],
    delivery: '10–14 hari',
    tier: 'BUSINESS',
    price: 'Diskon khusus',
    isCustom: false,
    highlight: 'Trust untuk donasi',
  },
  {
    id: 8,
    category: 'Non-Profit & Event',
    icon: Calendar,
    title: 'Event / Campaign Page',
    description:
      'Landing page event dengan registrasi + countdown. Informasi rapi, CTA jelas, minim pertanyaan berulang.',
    perfectFor: ['Conference organizer', 'Community event', 'Fundraising'],
    delivery: '5–7 hari',
    tier: 'STARTER',
    price: 'Rp 1.49jt',
    isCustom: false,
    highlight: 'Untuk event cepat',
  },
  {
    id: 9,
    category: 'Custom System',
    icon: Settings,
    title: 'Custom Web Application',
    description:
      'Sistem web sesuai workflow unik bisnis Anda: ERP basic, CRM, booking system, dashboard data, dll.',
    perfectFor: ['Model bisnis unik', 'Workflow kompleks', 'Digitalisasi internal'],
    delivery: '4–12 minggu',
    tier: 'ENTERPRISE',
    price: 'Mulai 9jt',
    isCustom: true,
    highlight: 'Workflow = rapi',
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
// PERBAIKAN 2: Tambahkan tipe ': Variants'
const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

// PERBAIKAN 3: Tambahkan tipe ': Variants'
const pop: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

function TierBadge({ tier }: { tier: string }) {
  const cls =
    tier.includes('ENTERPRISE')
      ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
      : tier.includes('BUSINESS')
        ? 'bg-blue-50 text-blue-700 border-blue-100'
        : 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${cls}`}>
      {tier}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
      {children}
    </span>
  );
}

function MiniValue({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
          <Icon className="h-5 w-5 text-slate-900" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{title}</p>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// -------------------- PAGE --------------------
export default function ServiceCatalog() {
  const WHATSAPP_URL = 'https://wa.me/6281234567890';

  const [activeTab, setActiveTab] = useState('Semua');

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
        price: 'Mulai 6 Juta',
        desc: 'Sistem Custom (Web App / Manajemen Institusi)',
        time: '2–6 Minggu',
        tone: 'indigo' as const,
      };
    }

    if (pages === '5-10' || feature === 'ecommerce' || feature === 'blog') {
      return {
        tier: 'BUSINESS',
        price: 'Rp 3.900.000',
        desc: 'Company Profile Premium / E-Commerce Basic',
        time: '10–14 Hari',
        tone: 'blue' as const,
      };
    }

    return {
      tier: 'STARTER',
      price: 'Rp 1.490.000',
      desc: 'Landing Page / Web Portfolio Basic',
      time: '5–7 Hari',
      tone: 'slate' as const,
    };
  };

  const result = getQuizResult();

  const resultCardClass =
    result.tone === 'indigo'
      ? 'bg-indigo-950 border-indigo-500 text-white'
      : result.tone === 'blue'
        ? 'bg-slate-900 border-blue-500 text-white'
        : 'bg-white border-slate-200 text-slate-900';

  return (
    <main className="flex min-h-screen flex-col bg-white pt-20 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-[-240px] left-[-160px] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.12] [mask-image:radial-gradient(ellipse_55%_50%_at_50%_0%,#000_75%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
            <motion.div variants={fade} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-slate-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              Service Catalog FYNUX
            </motion.div>

            <motion.h1 variants={fade} className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              Belum yakin butuh website
              <br className="hidden md:block" />
              <span className="text-blue-600">jenis apa yang paling “ngaruh”?</span>
            </motion.h1>

            <motion.p variants={fade} className="mt-5 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Pilih solusi berdasarkan outcome: <span className="font-semibold text-slate-900">trust</span>,{' '}
              <span className="font-semibold text-slate-900">lead</span>, atau{' '}
              <span className="font-semibold text-slate-900">efisiensi</span>. Kalau salah pilih, biasanya ujungnya:
              website ada — hasilnya nggak terasa.
            </motion.p>

            <motion.div variants={fade} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" /> Konsultasi (Gratis)
              </a>

              <a
                href="#quiz"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                Cek rekomendasi cepat <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div variants={fade} className="mt-10 grid gap-3 sm:grid-cols-3 max-w-4xl mx-auto">
              <MiniValue icon={Zap} title="Cepat live" desc="Solusi siap dipakai tanpa proses yang bertele-tele." />
              <MiniValue icon={ShieldCheck} title="Rapi & aman" desc="Fondasi teknis yang kuat biar nggak pusing nanti." />
              <MiniValue icon={Sparkles} title="Outcome-driven" desc="Fokus ke trust, lead, atau efisiensi—bukan sekadar tampil." />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="py-14 md:py-16 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="sticky top-[72px] z-20 -mx-6 px-6 py-4 bg-slate-50/90 backdrop-blur border-b border-slate-200">
            <div className="flex overflow-x-auto gap-2 hide-scrollbar">
              {categories.map((cat) => {
                const active = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={[
                      'whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition-all border',
                      active
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300',
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
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs font-bold tracking-widest uppercase text-slate-400">{service.category}</p>
                        <p className="text-xs font-semibold text-slate-600">{service.highlight}</p>
                      </div>
                    </div>

                    <TierBadge tier={service.tier} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 leading-snug">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-grow">{service.description}</p>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Perfect for</p>
                    <ul className="mt-3 space-y-2">
                      {service.perfectFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                      <span className="text-xs font-semibold text-slate-600">⏱️ {service.delivery}</span>
                      <span className="text-base font-bold text-slate-900">{service.price}</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    {service.isCustom ? (
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                      >
                        Diskusi scope (gratis) <MessageCircle className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link
                        href="/#pricing"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:border-blue-600 hover:text-blue-600 transition-colors"
                      >
                        Lihat detail paket <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}

                    <p className="mt-3 text-center text-[11px] text-slate-500">
                      Kalau kamu ragu pilih yang mana, pakai quiz di bawah (2 menit).
                    </p>
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
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900">Rekomendasi Cepat (3 Pertanyaan)</h2>
            <p className="mt-4 text-slate-600">
              Ini bukan “quiz gimmick”. Tujuannya biar kamu nggak buang waktu & biaya pilih paket yang salah.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            {/* Left: Quiz Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-10 shadow-sm relative overflow-hidden">
              {/* progress */}
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
                {/* Intro */}
                {quizStep === 0 && (
                  <motion.div
                    key="q0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="text-center"
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Mulai dari sini</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">Kita cocokkan dengan kebutuhan kamu</h3>
                    <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto">
                      Jawab cepat. Nanti aku kasih rekomendasi paket + estimasi waktu.
                    </p>
                    <button
                      onClick={() => setQuizStep(1)}
                      className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20"
                    >
                      Mulai <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}

                {/* Step 1 */}
                {quizStep === 1 && (
                  <motion.div
                    key="q1"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-700">Pertanyaan 1/3</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      Berapa perkiraan jumlah halaman?
                    </h3>
                    <div className="mt-6 space-y-3">
                      {[
                        { val: '1', label: '1 halaman (landing page)' },
                        { val: '3-5', label: '3–5 halaman (profile/portfolio)' },
                        { val: '5-10', label: '5–10 halaman (lebih detail)' },
                        { val: 'custom', label: 'custom system + dashboard' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => handleQuizAnswer('pages', opt.val)}
                          className="w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-left font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group"
                        >
                          {opt.label}
                          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2 */}
                {quizStep === 2 && (
                  <motion.div
                    key="q2"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-700">Pertanyaan 2/3</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      Fitur apa yang paling krusial?
                    </h3>
                    <div className="mt-6 space-y-3">
                      {[
                        { val: 'info', label: 'Informasi + kontak biasa' },
                        { val: 'blog', label: 'Butuh blog / artikel / berita' },
                        { val: 'ecommerce', label: 'Butuh toko online' },
                        { val: 'dashboard', label: 'Butuh dashboard / login / database' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => handleQuizAnswer('feature', opt.val)}
                          className="w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-left font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group"
                        >
                          {opt.label}
                          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {quizStep === 3 && (
                  <motion.div
                    key="q3"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                  >
                    <p className="text-xs font-bold tracking-widest uppercase text-blue-700">Pertanyaan 3/3</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      Kapan target harus online?
                    </h3>
                    <div className="mt-6 space-y-3">
                      {[
                        { val: 'urgent', label: 'Urgent (kurang dari 1 minggu)' },
                        { val: 'normal', label: 'Normal (1–2 minggu)' },
                        { val: 'flexible', label: 'Fleksibel (lebih dari 3 minggu)' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => handleQuizAnswer('timeline', opt.val)}
                          className="w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-left font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center justify-between group"
                        >
                          {opt.label}
                          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Result */}
                {quizStep === 4 && (
                  <motion.div
                    key="qr"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-green-700 border border-green-100">
                      <CheckCircle2 className="h-4 w-4" /> Analisis selesai
                    </span>

                    <h3 className="mt-5 text-xl text-slate-600">
                      Rekomendasi terbaik untuk kebutuhan kamu:
                    </h3>

                    <div className={`mt-6 mx-auto max-w-md rounded-3xl border-2 p-6 text-left ${resultCardClass}`}>
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="text-xs font-bold tracking-widest uppercase opacity-80">
                          Paket {result.tier}
                        </span>
                        <span className="text-xl font-bold">{result.price}</span>
                      </div>
                      <p className="mt-4 text-lg font-bold">{result.desc}</p>
                      <p className="mt-2 text-sm opacity-80 inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> Estimasi: {result.time}
                      </p>

                      <div className="mt-5 space-y-2 text-sm">
                        <div className="flex items-start gap-2 opacity-90">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-300" />
                          <span>Scope lebih tepat = lebih sedikit revisi “nggak perlu”.</span>
                        </div>
                        <div className="flex items-start gap-2 opacity-90">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-300" />
                          <span>Pilih paket yang benar = hasilnya terasa, bukan sekadar tampil.</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
                      <Link
                        href="/#pricing"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white font-bold hover:bg-blue-700"
                      >
                        Lihat detail paket <ArrowRight className="h-4 w-4" />
                      </Link>

                      <button
                        onClick={resetQuiz}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-slate-700 font-bold hover:bg-slate-50"
                      >
                        <RotateCcw className="h-4 w-4" /> Ulangi
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Live Summary (Minimal) */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm h-fit">
              <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Ringkasan jawaban</p>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold text-slate-500">Jumlah halaman</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {quizAnswers.pages ? quizAnswers.pages : '—'}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold text-slate-500">Fitur krusial</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {quizAnswers.feature ? quizAnswers.feature : '—'}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold text-slate-500">Timeline</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {quizAnswers.timeline ? quizAnswers.timeline : '—'}
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-bold text-slate-900">Butuh jawaban lebih presisi?</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Chat 10–15 menit. Kita rapikan scope biar kamu nggak buang biaya untuk fitur yang nggak kepake.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
                >
                  Konsultasi via WhatsApp <MessageCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Scope jelas</Pill>
                <Pill>Minim revisi</Pill>
                <Pill>Hasil terasa</Pill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-18 md:py-20 px-6 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Setiap bisnis itu unik.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Kalau kamu punya requirement khusus atau sistemnya kompleks, justru bagus—itu berarti ada peluang besar untuk
            bikin operasional lebih rapi dan hemat waktu setiap hari.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10"
          >
            <MessageCircle className="w-5 h-5" /> Chat via WhatsApp (Gratis)
          </a>

          <p className="mt-4 text-[11px] text-slate-500">
            Nggak cocok? Kami akan bilang. Tanpa maksa.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}