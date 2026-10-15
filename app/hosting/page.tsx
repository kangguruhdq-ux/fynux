'use client';

import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ConsultationModal from '@/app/components/ConsultationModal';
import { Server, ShieldCheck, Clock, Activity, Check, ArrowRight, MessageSquare } from 'lucide-react';

export default function HostingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specifications = [
    {
      icon: Server,
      title: 'NVMe SSD Storage',
      desc: 'Kecepatan baca dan tulis disk hingga 10x lebih cepat dibanding penyimpanan konvensional.',
      color: 'text-blue-400',
    },
    {
      icon: ShieldCheck,
      title: 'Proteksi Malware Aktif',
      desc: 'Pemindaian otomatis dan isolasi script berbahaya dengan firewall aplikasi tingkat lanjut.',
      color: 'text-emerald-400',
    },
    {
      icon: Clock,
      title: 'Backup Harian Otomatis',
      desc: 'Snapshot data tersimpan di server terpisah untuk pemulihan bencana seketika.',
      color: 'text-amber-400',
    },
    {
      icon: Activity,
      title: '99.9% Jaminan Uptime',
      desc: 'Infrastruktur cloud berulang untuk menjaga aplikasi tetap dapat diakses sepanjang waktu.',
      color: 'text-cyan-400',
    },
  ];

  const handledItems = [
    'Setup server awal, tuning Nginx/LiteSpeed, dan konfigurasi cache',
    'Update rutin security patch sistem operasi dan library pendukung',
    'Monitoring performa 24/7 dan penanganan insiden otomatis',
    'Bantuan teknis langsung untuk investigasi kendala kode dan database',
    'Instalasi dan pembaruan berkala SSL/TLS certificate terenkripsi',
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm">
            Managed Cloud Infrastructure
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Fokus Pada Pertumbuhan Bisnis.<br />
            Kami Tangani <span className="text-blue-600">Infrastruktur Teknis.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Infrastruktur server NVMe berkinerja tinggi yang dikelola penuh oleh teknisi berpengalaman. Bebas kendala server down dan kebocoran keamanan.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white rounded-3xl mx-4 md:mx-10 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Kenapa Memilih Managed Hosting FYNUX?
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
                Layanan hosting murah sering kali meninggalkan Anda sendirian saat server bermasalah. Di FYNUX, kami bertindak sebagai mitra teknis internal Anda: memitigasi risiko keamanan, menjaga stabilitas performa, dan menyelesaikan kendala sebelum berdampak pada pengguna.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specifications.map((spec, i) => (
                  <div key={i} className="flex gap-3">
                    <spec.icon className={`${spec.color} w-6 h-6 shrink-0 mt-0.5`} />
                    <div>
                      <h3 className="font-bold text-white text-sm">{spec.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/90 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-5 text-white">Lingkup Pemeliharaan Server:</h3>
              <ul className="space-y-3.5 text-slate-300 text-sm">
                {handledItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Pindahkan Website Anda ke Ekosistem yang Terkelola
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Tim kami siap membantu proses migrasi data dan audit konfigurasi secara gratis tanpa downtime.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <MessageSquare className="w-5 h-5" />
            Konsultasikan Migrasi Hosting
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </section>

      <Footer />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService="Managed Cloud Hosting"
      />
    </main>
  );
}