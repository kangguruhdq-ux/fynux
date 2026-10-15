'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Timer,
  Wallet,
} from 'lucide-react';

export default function Comparison() {
  const rows = useMemo(
    () => [
      {
        feature: 'Total Biaya Investasi',
        traditional: 'Markup tinggi serta biaya operasional tersembunyi',
        fynux: 'Biaya transparan: Anda membayar untuk kualitas kode dan hasil nyata',
        impact: 'Anggaran efisien sehingga dapat dialokasikan untuk operasional dan pertumbuhan.',
        highlight: true,
      },
      {
        feature: 'Pemeliharaan & Maintenance',
        traditional: 'Biaya langganan bulanan atau tahunan yang membebani',
        fynux: 'Garansi pemeliharaan tercakup dalam paket dengan scope jelas',
        impact: 'Tidak ada biaya tak terduga yang menggerus profit margin bisnis Anda.',
        highlight: true,
      },
      {
        feature: 'Respon Bantuan Teknis',
        traditional: 'Antrean tiket email lambat yang memakan waktu berhari-hari',
        fynux: 'Komunikasi langsung via WhatsApp dengan tim teknis',
        impact: 'Kendala teknis tertangani cepat sebelum mengganggu pengguna akhir.',
      },
      {
        feature: 'Kualifikasi Pelaksana',
        traditional: 'Kerap didelegasikan ke tenaga junior tanpa supervisi ketat',
        fynux: 'Dikerjakan langsung oleh software engineer dan arsitek senior',
        impact: 'Kualitas kode bersih, aman dari celah, dan mudah dikembangkan.',
      },
      {
        feature: 'Komitmen Jangka Panjang',
        traditional: 'Hubungan kerja putus setelah serah terima proyek',
        fynux: 'Mitra rekayasa teknologi jangka panjang',
        impact: 'Memiliki keandalan tim IT profesional tanpa beban biaya payroll permanen.',
      },
    ],
    []
  );

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 18 },
    },
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  return (
    <section id="comparison" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-blue-700"
          >
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            <span>Perbandingan Rasional</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Investasi pada Hasil Nyata, <br />
            <span className="text-slate-600 font-semibold text-2xl md:text-3xl">
              Bukan untuk Membayar Beban Overhead Agensi.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed"
          >
            Prioritas utama bisnis Anda adalah eksekusi terukur, stabilitas sistem yang tinggi, dan efisiensi biaya. Berikut perbandingan objektif pendekatan FYNUX.
          </motion.p>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: <Wallet className="h-5 w-5" />,
              title: 'Efisiensi Biaya Nyata',
              desc: 'Setiap rupiah investasi dialokasikan ke kualitas arsitektur sistem.',
            },
            {
              icon: <Timer className="h-5 w-5" />,
              title: 'Respon Cepat & Tanggap',
              desc: 'Komunikasi langsung dengan penanggung jawab teknis tanpa birokrasi.',
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: 'Standar Rekayasa Senior',
              desc: 'Struktur kode modern, modular, dan siap diskalakan ke masa depan.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{card.title}</h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
            <div className="hidden md:block md:col-span-4 p-5 text-slate-700">
              Parameter Evaluasi
            </div>
            <div className="md:col-span-4 p-5 text-slate-600 md:border-l border-slate-200">
              Vendor Konvensional
            </div>
            <div className="md:col-span-4 p-5 text-blue-700 md:border-l border-slate-200 bg-blue-50/50">
              Pendekatan FYNUX
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-sm">
            {rows.map((r, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50/80 transition-colors ${
                  r.highlight ? 'bg-blue-50/20' : ''
                }`}
              >
                <div className="md:col-span-4 p-5">
                  <div className="font-bold text-slate-900">{r.feature}</div>
                  <div className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Dampak: {r.impact}
                  </div>
                </div>

                <div className="md:col-span-4 p-5 md:border-l border-slate-100 flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm leading-relaxed">{r.traditional}</span>
                </div>

                <div className="md:col-span-4 p-5 md:border-l border-slate-100 bg-blue-50/20 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-900 font-semibold text-sm leading-relaxed">{r.fynux}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>Pelajari Rincian Paket & Fasilitas</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
