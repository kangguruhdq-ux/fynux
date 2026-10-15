import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { CheckCircle2, Zap, Database, Lock } from 'lucide-react';

export default function WebAppPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Service */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Web Application Development</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Lebih Dari Sekadar Website.<br/>
            Ini Adalah <span className="text-blue-600">Alat.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Kami membangun sistem berbasis web (SaaS, CRM, ERP, Presensi) yang mengotomatisasi operasional Anda. 
            Ucapkan selamat tinggal pada spreadsheet manual yang berantakan.
          </p>
        </div>
      </section>

      {/* Content Detail */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Kenapa Web App?</h2>
                <ul className="space-y-4">
                    {[
                        "Akses dari mana saja (Cloud Based)",
                        "Real-time Data & Analytics",
                        "Otomatisasi Laporan & Invoicing",
                        "Skalabilitas Tanpa Batas",
                        "Keamanan Data Terenkripsi"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <CheckCircle2 className="text-blue-600 w-5 h-5"/> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <Zap className="w-8 h-8 text-yellow-500 mb-3"/>
                    <h3 className="font-bold text-slate-900">Lighting Fast</h3>
                    <p className="text-sm text-slate-500">Next.js Powered</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <Database className="w-8 h-8 text-blue-500 mb-3"/>
                    <h3 className="font-bold text-slate-900">Scalable DB</h3>
                    <p className="text-sm text-slate-500">PostgreSQL / Mongo</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 col-span-2">
                    <Lock className="w-8 h-8 text-green-500 mb-3"/>
                    <h3 className="font-bold text-slate-900">Enterprise Security</h3>
                    <p className="text-sm text-slate-500">Data Anda aman dengan standar enkripsi industri.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Mengotomatisasi Bisnis Anda?</h2>
          <a href="/servicefynux"className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all">
              Diskusikan Kebutuhan Sistem Saya
          </a>
      </section>

      <Footer />
    </main>
  );
}