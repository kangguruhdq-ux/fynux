import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Palette, Eye, MousePointerClick, TrendingUp } from 'lucide-react';

export default function WebDesignPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">UI/UX Design Strategy</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Desain yang Tidak Hanya Cantik,<br/>
            Tapi Juga <span className="text-blue-600">Menjual.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Kami menggabungkan estetika futuristik dengan psikologi pengguna. 
            Hasilnya? Pengunjung yang betah, percaya, dan akhirnya membeli.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                    <Eye className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Attention Grabbing</h3>
                <p className="text-slate-600">Dalam 3 detik pertama, pengunjung memutuskan untuk stay atau leave. Desain kami memastikan mereka stay.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    <MousePointerClick className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Intuitive Navigation</h3>
                <p className="text-slate-600">User tidak perlu berpikir. Alur navigasi kami arahkan langsung ke tombol "Beli" atau "Hubungi".</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                    <TrendingUp className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Conversion Focused</h3>
                <p className="text-slate-600">Setiap elemen, warna, dan tipografi dipilih berdasarkan data untuk meningkatkan konversi penjualan.</p>
            </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Upgrade Tampilan Brand Anda Sekarang</h2>
          <a href="https://wa.me/6281234567890" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all">
              Konsultasi Desain Gratis
          </a>
      </section>

      <Footer />
    </main>
  );
}