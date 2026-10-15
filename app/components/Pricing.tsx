'use client';

import { useMemo, useState } from 'react';
import type { ElementType, ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Check,
  ChevronDown,
  HelpCircle,
  TrendingUp,
  Zap,
  LayoutTemplate,
  Briefcase,
  Building2,
  ShoppingCart,
  Sparkles,
  ShieldCheck,
  Clock3,
  MessageCircle,
  BadgeCheck,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';

// --- TYPES ---
type Plan = {
  key: 'starter' | 'business' | 'enterprise';
  label?: string;
  name: string;
  tagline: string;
  badgeIcon: ElementType;
  highlighted?: boolean;

  priceMain: string;
  oneTime: string;
  renewal: string;

  websiteTypes: string[];
  hosting: string[];
  dev: string[];
  delivery: string;

  ctaText: string;
  ctaHref: string;

  note?: string;
};

type WebsiteType = {
  key: string;
  title: string;
  desc: string;
  fits: string;
  icon: ElementType;
  proOnly?: boolean;
};

type ValueProp = {
  key: string;
  title: string;
  desc: string;
  icon: ElementType;
};

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const buttonTap = { scale: 0.95 };

// --- COMPONENTS ---
function FeatureItem({
  text,
  tone = 'light',
}: {
  text: string;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';

  return (
    <motion.li
      variants={fadeInUp}
      className={`flex items-start gap-2.5 text-[13px] sm:text-sm ${
        isDark ? 'text-slate-300' : 'text-slate-600'
      }`}
    >
      {isDark ? (
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-500/20 p-0.5 ring-1 ring-blue-500/50">
          <Check className="h-3 w-3 text-blue-400" />
        </span>
      ) : (
        <span className="mt-0.5 shrink-0 rounded-full bg-blue-50 p-0.5 ring-1 ring-blue-100">
          <Check className="h-3 w-3 text-blue-600" />
        </span>
      )}
      <span className="leading-snug font-medium">{text}</span>
    </motion.li>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? 'text-center' : ''}>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block rounded-full bg-blue-50 px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 uppercase border border-blue-100 mb-3"
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]"
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

function FeatureGroup({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'light' | 'dark';
}) {
  return (
    <div className="mt-6 first:mt-0">
      <p
        className={`text-[10px] font-bold uppercase tracking-widest mb-3 border-b pb-2 ${
          tone === 'dark'
            ? 'text-slate-500 border-slate-700'
            : 'text-slate-400 border-slate-100'
        }`}
      >
        {title}
      </p>
      <ul className="space-y-2.5">
        {items.map((t) => (
          <FeatureItem key={t} text={t} tone={tone} />
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const WHATSAPP_URL = 'https://wa.me/6281234567890'; // ✅ ganti nomor WA kamu di sini
  const [openCompare, setOpenCompare] = useState(false);
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Paket Starter (Rp 1.49jt)');

  // --- DATA ---
  const plans: Plan[] = useMemo(
    () => [
      {
        key: 'starter',
        label: '💎 RECOMMENDATION',
        name: 'Starter',
        tagline: 'Cocok untuk bisnis baru, personal brand, atau campaign event.',
        badgeIcon: Zap,

        priceMain: 'Rp 1.490.000',
        oneTime: 'One-Time Payment: Rp 1.490.000',
        renewal: 'Hosting Year 2+: Rp 400.000/tahun',

        websiteTypes: ['Landing Page (1 halaman)', 'Web Portfolio / Profile (Max 5 halaman)'],
        hosting: ['20GB SSD NVMe + Gratis Domain', 'Free SSL + Daily Backup', '99.9% Uptime Guarantee'],
        dev: ['Mobile-Responsive', 'Contact Form', 'Basic SEO Setup', '1x Major Revision'],
        delivery: '⚡ Estimasi: 5–7 Hari Kerja',

        ctaText: 'Pilih Paket Starter',
        ctaHref: WHATSAPP_URL,
      },
      {
        key: 'business',
        name: 'Business',
        tagline: 'Sempurna untuk bisnis serius, UMKM scale-up, dan E-commerce.',
        badgeIcon: TrendingUp,
        highlighted: true,

        priceMain: 'Rp 3.900.000',
        oneTime: 'One-Time Payment: Rp 3.900.000',
        renewal: 'Hosting Year 2+: Rp 800.000/tahun (priority support)',

        websiteTypes: [
          'Landing Page Premium (Custom Design)',
          'Company Profile + Blog/News',
          'E-commerce Basic (up to 50 produk)',
        ],
        hosting: ['50GB SSD NVMe + Premium Domain', 'Hourly Backup', 'Advanced SEO + Analytics', '99.95% Uptime'],
        dev: [
          'Custom UI/UX Design',
          'Advanced Interaction',
          'Blog/CMS Integration',
          'Priority WhatsApp Support',
          'Free Maintenance 3 Bulan',
          '2x Major Revisions',
        ],
        delivery: '⚡ Estimasi: 10–14 Hari Kerja',

        ctaText: 'Pilih Paket Business',
        ctaHref: WHATSAPP_URL,
      },
      {
        key: 'enterprise',
        name: 'Enterprise',
        tagline: 'Untuk institusi, korporat, ERP, dan custom web app (SaaS).',
        badgeIcon: Building2,

        priceMain: 'Mulai 6 Juta',
        oneTime: 'Project-Based Quote (sesuai scope)',
        renewal: 'Maintenance & hosting: menyesuaikan kebutuhan',

        websiteTypes: ['Dashboard & Sistem Manajemen (Presensi/ERP)', 'Custom SaaS & Database Complex', 'API & AI Integration'],
        hosting: ['Dedicated/Cloud Setup', 'Monitoring + Backup Strategy', 'Security hardening (basic)'],
        dev: ['Arsitektur sistem + dokumentasi', 'Integrasi API/AI', 'Dedicated support (by agreement)'],
        delivery: '⏳ Estimasi: 2–6 Minggu (tergantung scope)',

        ctaText: 'Book Meeting (Diskusi Scope)',
        ctaHref: WHATSAPP_URL,
        note: 'Paket ini dibuat custom agar sesuai kebutuhan institusi/perusahaan.',
      },
    ],
    [WHATSAPP_URL]
  );

  const websiteTypes: WebsiteType[] = useMemo(
    () => [
      {
        key: 'landing',
        title: 'Landing Page',
        desc: '1 halaman fokus untuk promosi produk/jasa.',
        fits: 'Cocok untuk: Campaign, Lead Generation, Event',
        icon: LayoutTemplate,
      },
      {
        key: 'portfolio',
        title: 'Website Portfolio',
        desc: '3–10 halaman untuk showcase karya & project.',
        fits: 'Cocok untuk: Freelancer, Agency, Photographer, Designer',
        icon: Briefcase,
      },
      {
        key: 'company',
        title: 'Company Profile',
        desc: '3–8 halaman tentang bisnis, layanan, dan tim.',
        fits: 'Cocok untuk: Perusahaan, Startup, UMKM, Konsultan',
        icon: Building2,
      },
      {
        key: 'ecommerce',
        title: 'E-commerce',
        desc: 'Online store dengan katalog produk & fitur dasar.',
        fits: 'Cocok untuk: Toko online, Fashion, F&B, Retail',
        icon: ShoppingCart,
        proOnly: true,
      },
    ],
    []
  );

  const valueProps: ValueProp[] = useMemo(
    () => [
      {
        key: 'allinone',
        title: 'All-in-One Solution',
        desc: 'Hosting + Development dalam 1 paket. Tidak perlu repot urus terpisah.',
        icon: Sparkles,
      },
      {
        key: 'transparent',
        title: 'Harga Transparan',
        desc: 'No hidden fees. Harga yang tertera adalah harga final.',
        icon: BadgeCheck,
      },
      {
        key: 'expert',
        title: 'Dikerjakan Langsung Ahlinya',
        desc: 'Bukan junior, bukan outsource. Tim inti yang handle project Anda.',
        icon: ShieldCheck,
      },
      {
        key: 'fast',
        title: 'Delivery Cepat',
        desc: '5–14 hari kerja website Anda sudah live (sesuai paket).',
        icon: Clock3,
      },
      {
        key: 'support',
        title: 'Support Responsif',
        desc: 'Komunikasi jelas dan cepat, sesuai jalur support paket Anda.',
        icon: MessageCircle,
      },
      {
        key: 'revision',
        title: 'Garansi Revisi',
        desc: 'Revisi major sesuai paket, dengan batas yang wajar & terarah.',
        icon: Check,
      },
    ],
    []
  );

  // Compare Starter vs Business (Enterprise custom, nggak di-compare)
  const compareRows = useMemo(
    () => [
      { label: 'Harga', starter: 'Rp 1.49 Juta', pro: 'Rp 3.9 Juta' },
      { label: 'Pilihan Website', starter: 'Landing / Portfolio', pro: 'Landing Premium / Blog / E-commerce' },
      { label: 'Custom Design', starter: 'Basic', pro: 'Premium' },
      { label: 'Jumlah Halaman (Max)', starter: '5', pro: '10' },
      { label: 'E-commerce', starter: '❌', pro: '✅ (up to 50 products)' },
      { label: 'Blog/CMS', starter: '❌', pro: '✅' },
      { label: 'Advanced SEO', starter: '❌', pro: '✅' },
      { label: 'Storage', starter: '20GB', pro: '50GB' },
      { label: 'Backup', starter: 'Daily', pro: 'Hourly' },
      { label: 'Support', starter: 'Email (< 24 jam)', pro: 'Priority WhatsApp' },
      { label: 'Free Maintenance', starter: '❌', pro: '3 Bulan' },
      { label: 'Major Revisions', starter: '1x', pro: '2x' },
      { label: 'Delivery', starter: '5–7 hari', pro: '10–14 hari' },
      { label: 'Renewal (Year 2+)', starter: '400K/tahun', pro: '800K/tahun' },
    ],
    []
  );

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-3/4 h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.03),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* 1) HERO SECTION */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <SectionHead
            eyebrow="Investasi Cerdas untuk Bisnis Anda"
            title={
              <>
                Solusi Website Profesional <br className="hidden md:block" />
                dengan Harga Startup.
              </>
            }
            subtitle={
              <>
                <span className="font-semibold text-slate-900">Hosting + Development</span> dalam 1 paket.
                <span className="block mt-1 text-xs text-slate-500">
                  Pilih paket berdasarkan outcome: online presence → Starter, lead/sales → Business, sistem internal → Enterprise.
                </span>
              </>
            }
          />

          <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={buttonTap}
              href={WHATSAPP_URL}
              className="group relative inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white transition-all shadow-lg shadow-blue-500/25 hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              <MessageCircle className="mr-2 h-4 w-4 text-white/90" />
              Konsultasi Gratis 15 Menit
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={buttonTap}
              href="#compare"
              className="group inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Lihat Perbandingan
              <ChevronDown className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 2) PRICING CARDS (3 TIER) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {plans.map((plan) => {
            const Icon = plan.badgeIcon;
            const isFeatured = !!plan.highlighted;
            const isEnterprise = plan.key === 'enterprise';

            return (
              <motion.article
                key={plan.key}
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={[
                  'relative flex flex-col overflow-hidden rounded-[2rem] p-7 sm:p-8 transition-colors duration-300',
                  isFeatured
                    ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 ring-1 ring-white/10 lg:-translate-y-3'
                    : 'bg-white text-slate-900 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200',
                ].join(' ')}
              >
                {isFeatured && (
                  <motion.div
                    variants={{ hover: { opacity: 0.18 }, rest: { opacity: 0 } }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 pointer-events-none"
                  />
                )}

                <motion.div variants={cardHover} className="relative z-10 flex flex-col h-full">
                  {/* Label */}
                  {isFeatured ? (
                    <div className="mb-4 inline-flex self-start rounded-full bg-blue-600/90 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white shadow-lg backdrop-blur-sm border border-blue-500/50">
                      ⭐ MOST POPULAR
                    </div>
                  ) : plan.label ? (
                    <p className="mb-2 text-[10px] font-bold tracking-[0.15em] uppercase text-blue-600">
                      {plan.label}
                    </p>
                  ) : (
                    <div className="mb-2" />
                  )}

                  {/* Head */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`inline-flex items-center justify-center rounded-xl p-2 ${
                        isFeatured ? 'bg-slate-800 text-blue-300' : 'bg-blue-50 text-blue-600'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className={`text-xl font-bold ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`mt-2 text-sm font-medium ${isFeatured ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className={`mt-6 pb-6 ${isFeatured ? 'border-b border-slate-800' : 'border-b border-slate-100'}`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-4xl font-bold tracking-tight ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                        {plan.priceMain}
                      </span>
                      <span className={`text-xs font-medium ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                        {isEnterprise ? '(custom)' : '(one-time)'}
                      </span>
                    </div>

                    <div className={`mt-3 space-y-1 text-xs ${isFeatured ? 'text-slate-400' : 'text-slate-600'}`}>
                      <p>{plan.oneTime}</p>
                      <p>{plan.renewal}</p>
                    </div>

                    <div
                      className={`mt-5 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold ${
                        isFeatured
                          ? 'bg-blue-900/40 text-blue-200 ring-1 ring-blue-500/30'
                          : 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                      }`}
                    >
                      <Clock3 className="h-3.5 w-3.5" />
                      {plan.delivery}
                    </div>

                    {plan.note && (
                      <p className={`mt-3 text-[11px] leading-relaxed ${isFeatured ? 'text-slate-500' : 'text-slate-500'}`}>
                        {plan.note}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mt-6 flex-1 space-y-8">
                    <FeatureGroup title="Jenis Website" items={plan.websiteTypes} tone={isFeatured ? 'dark' : 'light'} />
                    <FeatureGroup
                      title={isEnterprise ? 'Infrastructure & Hosting' : 'Hosting & Infrastructure'}
                      items={plan.hosting}
                      tone={isFeatured ? 'dark' : 'light'}
                    />
                    <FeatureGroup
                      title={isEnterprise ? 'Development Scope' : isFeatured ? 'Premium Development & Support' : 'Development & Support'}
                      items={plan.dev}
                      tone={isFeatured ? 'dark' : 'light'}
                    />
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={buttonTap}
                      onClick={() => {
                        setSelectedPlan(`Paket ${plan.name}`);
                        setConsultModalOpen(true);
                      }}
                      className={[
                        'group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-center text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600',
                        isFeatured
                          ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-900/30'
                          : isEnterprise
                          ? 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                          : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200/50',
                      ].join(' ')}
                    >
                      {plan.ctaText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>

                    <p className={`mt-3 text-center text-[11px] ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                      Konsultasi langsung dengan arsitek sistem
                    </p>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* 3) JENIS WEBSITE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-28 max-w-7xl"
        >
          <SectionHead
            eyebrow="Jenis Website"
            title="🤔 Jenis Website Apa yang Bisa Dibuat?"
            subtitle={
              <>
                Semua paket include <span className="font-semibold text-slate-900">HOSTING + DEVELOPMENT</span>. Anda bebas
                pilih jenis website sesuai kebutuhan.
              </>
            }
          />

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {websiteTypes.map((w) => (
              <motion.div
                key={w.key}
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: '#3b82f6' }}
                className="group relative flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <w.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{w.title}</h4>
                      {w.proOnly && (
                        <span className="inline-block mt-0.5 rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase text-blue-600 border border-blue-100">
                          Pro Only
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{w.desc}</p>
                <div className="mt-auto pt-3 border-t border-slate-50">
                  <p className="text-xs font-semibold text-slate-400">{w.fits}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm ring-1 ring-slate-100">
              <HelpCircle className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Belum tahu mau bikin yang mana?</h3>
            <p className="mt-1 text-sm text-slate-600 max-w-lg mx-auto">
              Tim kami bantu analisis kebutuhan bisnis Anda dan rekomendasikan jenis website yang paling cocok.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition-colors hover:text-blue-800 hover:underline underline-offset-4"
            >
              Konsultasi Gratis <TrendingUp className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* 4) VALUE PROPOSITION */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-7xl"
        >
          <SectionHead
            eyebrow="Value"
            title="✨ Kenapa Pilih FYNUX?"
            subtitle="Fokus kami: kualitas, kecepatan delivery, dan komunikasi yang jelas."
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v) => (
              <motion.div
                key={v.key}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
                  <v.icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{v.title}</h4>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5) COMPARISON TABLE */}
        <motion.div
          id="compare"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpenCompare((s) => !s)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition duration-300"
            >
              <div className="text-left">
                <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-1">
                  Komparasi Detail
                </p>
                <p className="text-base font-bold text-slate-900">
                  🤔 Belum yakin? Lihat Perbandingan
                </p>
              </div>
              <motion.div
                animate={{ rotate: openCompare ? 180 : 0 }}
                className="rounded-full bg-white p-2 shadow-sm ring-1 ring-slate-200"
              >
                <ChevronDown className="h-4 w-4 text-slate-600" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openCompare && (
                <motion.div
                  id="compare-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 md:p-8 border-t border-slate-200">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px] border-separate border-spacing-0">
                        <thead>
                          <tr className="bg-slate-50/50">
                            <th className="text-left text-[10px] font-bold uppercase tracking-widest text-slate-500 py-3 px-4 rounded-l-lg">
                              Fitur
                            </th>
                            <th className="text-left text-[10px] font-bold uppercase tracking-widest text-slate-900 py-3 px-4">
                              Starter
                            </th>
                            <th className="text-left text-[10px] font-bold uppercase tracking-widest text-blue-600 py-3 px-4 rounded-r-lg">
                              Business
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                          {compareRows.map((r) => (
                            <tr key={r.label}>
                              <td className="py-3 px-4 text-sm font-semibold text-slate-900">{r.label}</td>
                              <td className="py-3 px-4 text-sm text-slate-600">{r.starter}</td>
                              <td className="py-3 px-4 text-sm text-slate-900 font-bold">{r.pro}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={buttonTap}
                        onClick={() => {
                          setSelectedPlan('Paket Business (Custom Design / E-Commerce)');
                          setConsultModalOpen(true);
                        }}
                        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 shadow-lg shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        Konsultasi Detail Proyek
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={buttonTap}
                        href="#pricing"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        Kembali ke Pilihan Paket
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Info Block */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 p-8 text-center shadow-sm mt-16"
        >
          <h4 className="text-xl font-bold text-slate-900 mb-2">Belum yakin menentukan paket yang tepat?</h4>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Pelajari katalog lengkap jenis website dan sistem yang kami bangun, mulai dari landing page terfokus hingga sistem aplikasi manajemen enterprise.
          </p>
          <Link
            href="/servicefynux"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md py-1 px-2"
          >
            Jelajahi Semua Layanan <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust Footer */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm font-medium text-slate-500 pt-8 border-t border-slate-200 mt-10">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" /> Domain & SSL Gratis
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" /> Server SSD NVMe Super Cepat
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" /> Daily/Hourly Backup
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" /> 99.9% Uptime SLA
          </span>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        preselectedService={selectedPlan}
      />
    </section>
  );
}
