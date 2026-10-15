'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Timer,
  Wallet,
} from 'lucide-react';

export default function Comparison() {
  const rows = useMemo(
    () => [
      {
        feature: 'Total Biaya',
        traditional: 'Markup tinggi + biaya operasional tersembunyi',
        fynux: 'Biaya transparan — Anda bayar kualitas & hasil',
        impact: 'Budget lebih efisien dan bisa dialihkan ke marketing/growth.',
        highlight: true,
      },
      {
        feature: 'Maintenance',
        traditional: 'Biaya langganan bulanan / tahunan',
        fynux: 'FREE maintenance (jelas scope & tanpa biaya tambahan)',
        impact: 'Tidak ada beban biaya jalan yang menggerus profit.',
        highlight: true,
      },
      {
        feature: 'Respon Support',
        traditional: 'Lewat tiket / email — bisa berhari-hari',
        fynux: 'Direct WhatsApp / Call — cepat & jelas',
        impact: 'Masalah selesai cepat sebelum jadi mahal.',
      },
      {
        feature: 'Level Developer',
        traditional: 'Sering dikerjakan junior / magang',
        fynux: 'Ditangani langsung arsitek sistem (senior)',
        impact: 'Struktur lebih rapi & scalable jangka panjang.',
      },
      {
        feature: 'Komitmen',
        traditional: 'Lepas tangan setelah project selesai',
        fynux: 'Partner teknis jangka panjang',
        impact: 'Seperti punya tim IT tanpa biaya payroll.',
      },
    ],
    []
  );

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="comparison" className="py-24 bg-white relative overflow-hidden">
      {/* Soft ambient background */}
      <div className="absolute -top-40 right-[-120px] h-[500px] w-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-[-160px] h-[500px] w-[500px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold tracking-wider uppercase text-blue-600"
          >
            <Sparkles className="h-4 w-4" />
            Perbandingan yang Masuk Akal
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
          >
            Pertanyaannya Sederhana:
            <span className="block mt-3 text-2xl md:text-3xl font-semibold text-slate-600">
              Anda ingin bayar untuk hasil, atau untuk biaya operasional agency?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            Banyak vendor terlihat “besar & meyakinkan”.
            Tapi yang benar-benar Anda butuhkan adalah
            <span className="font-semibold text-slate-900"> eksekusi rapi</span>,
            <span className="font-semibold text-slate-900"> respon cepat</span>, dan
            <span className="font-semibold text-slate-900"> biaya yang efisien</span>.
          </motion.p>
        </motion.div>

        {/* VALUE SUMMARY */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: <Wallet className="h-5 w-5" />,
              title: 'Efisiensi Biaya',
              desc: 'Setiap rupiah langsung berdampak ke kualitas & performa.',
            },
            {
              icon: <Timer className="h-5 w-5" />,
              title: 'Respon Cepat',
              desc: 'Tidak ada drama tiket support berhari-hari.',
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: 'Eksekusi Senior',
              desc: 'Struktur clean & scalable sejak awal.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  {card.icon}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{card.title}</div>
                  <div className="text-slate-600 text-sm mt-1">{card.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* COMPARISON TABLE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden"
        >
          {/* header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200">
            <div className="hidden md:block md:col-span-4 p-6 font-bold text-slate-700">
              Aspek Penting
            </div>
            <div className="md:col-span-4 p-6 font-bold text-slate-600 md:border-l border-slate-200">
              Agensi Tradisional
            </div>
            <div className="md:col-span-4 p-6 font-bold text-blue-600 md:border-l border-slate-200 bg-blue-50/40">
              FYNUX
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {rows.map((r, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50 transition-colors ${
                  r.highlight ? 'bg-blue-50/30' : ''
                }`}
              >
                <div className="md:col-span-4 p-6">
                  <div className="font-semibold text-slate-900">{r.feature}</div>
                  <div className="mt-2 text-sm text-slate-500 leading-relaxed">
                    Dampak: {r.impact}
                  </div>
                </div>

                <div className="md:col-span-4 p-6 md:border-l border-slate-100 flex gap-3">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-1" />
                  <div className="text-slate-600">{r.traditional}</div>
                </div>

                <div className="md:col-span-4 p-6 md:border-l border-slate-100 bg-blue-50/30 flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                  <div className="text-slate-900 font-medium">{r.fynux}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Jika logikanya jelas,
            <span className="text-blue-600"> pilih yang paling rasional.</span>
          </h3>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Tidak semua orang cocok dengan FYNUX.
            Kami cocok untuk yang ingin efisiensi, kualitas, dan partner teknis jangka panjang.
          </p>

          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
          >
            Lihat Paket & Benefit <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
