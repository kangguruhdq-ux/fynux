import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Server, ShieldCheck, Clock, Activity } from 'lucide-react';

export default function HostingPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Managed Cloud Hosting</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Anda Fokus Bisnis.<br/>
            Kami Fokus <span className="text-blue-600">Teknis.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Hosting lambat = Kehilangan pelanggan. Kami menyediakan infrastruktur server NVMe enterprise yang dimanage penuh oleh tim engineer kami.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900 text-white rounded-3xl mx-4 md:mx-10">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Kenapa Managed Hosting FYNUX?</h2>
                    <p className="text-slate-300 mb-8 leading-relaxed">
                        Hosting murah biasanya berarti Anda sendirian saat terjadi masalah. Di FYNUX, kami adalah tim IT pribadi Anda. Server down? Kena hack? Website lambat? Kami bereskan sebelum Anda sadar.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex gap-3">
                            <Server className="text-blue-400 shrink-0"/>
                            <div>
                                <h4 className="font-bold">NVMe SSD</h4>
                                <p className="text-xs text-slate-400">10x Faster than HDD</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <ShieldCheck className="text-green-400 shrink-0"/>
                            <div>
                                <h4 className="font-bold">Imunify360</h4>
                                <p className="text-xs text-slate-400">Anti-Malware Protection</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Clock className="text-yellow-400 shrink-0"/>
                            <div>
                                <h4 className="font-bold">Daily Backup</h4>
                                <p className="text-xs text-slate-400">Data aman tersimpan</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Activity className="text-red-400 shrink-0"/>
                            <div>
                                <h4 className="font-bold">99.9% Uptime</h4>
                                <p className="text-xs text-slate-400">Bisnis jalan terus</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                    <h3 className="text-xl font-bold mb-4">Yang Kami Handle Untuk Anda:</h3>
                    <ul className="space-y-3 text-slate-300 text-sm">
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Setup Server Awal & Konfigurasi</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Update Security Patch Rutin</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Monitoring Performa 24/7</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Bantuan Teknis Error Website</li>
                        <li className="flex items-center gap-2"><span className="text-green-400">✓</span> Instalasi SSL Certificate</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pindahkan Website Anda ke Rumah yang Aman</h2>
          <a href="https://wa.me/6281234567890" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
              Migrasi ke FYNUX Hosting
          </a>
      </section>

      <Footer />
    </main>
  );
}