'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react'; 

const faqs = [
  {
    question: "Kenapa harga FYNUX bisa jauh lebih terjangkau dibanding agency lain?",
    answer: "Pertanyaan bagus. Kebanyakan agency besar membebankan biaya sewa kantor mewah dan gaji staf administrasi ke tagihan Anda. Di FYNUX, kami memangkas overhead cost tersebut. Kami bekerja secara lean dan efisien dengan AI Integration. Anda membayar 100% untuk hasil website, bukan untuk membayar listrik kantor kami."
  },
  {
    question: "Harganya terjangkau, apakah kualitasnya dikorbankan?",
    answer: "Justru sebaliknya. Kami memegang prinsip 'Make it Right'. Karena proyek dikerjakan langsung oleh Founder dan Lead Engineer (bukan dilempar ke anak magang), kontrol kualitas kami jauh lebih ketat dibanding agency besar yang birokratis."
  },
  {
    question: "Apa maksud 'Free Maintenance'? Ada biaya tersembunyi?",
    answer: "Tidak ada biaya tersembunyi. Titik. Kami sangat percaya diri dengan kualitas kode kami. Jika ada bug atau kendala teknis, kami bereskan GRATIS. Kami ingin jadi partner jangka panjang, bukan vendor 'hit and run'."
  },
  {
    question: "Berapa lama waktu pengerjaan?",
    answer: "Landing page standar biasanya selesai dalam 3-7 hari kerja. Sistem kompleks (Web App/Dashboard) butuh 2-4 minggu. Kami menghargai waktu Anda; jika kami janji Jumat selesai, maka Jumat akan selesai."
  },
  {
    question: "Saya gaptek, apakah bakal susah mengelola websitenya?",
    answer: "Sama sekali tidak. Faiz (System Architect kami) merancang dashboard yang intuitif untuk orang awam. Kami juga sediakan video panduan singkat. Plus, Anda bisa chat kami langsung via WhatsApp jika butuh bantuan."
  },
  {
    question: "Apakah bisa menangani proyek instansi resmi/korporat?",
    answer: "Tentu. Kami memiliki pengalaman membangun sistem absensi digital untuk instansi pendidikan (SMA 2 Ngaglik) dan mempresentasikannya di depan pemangku kepentingan. Kami siap dengan legalitas dan standar kerja korporasi (PT/CV)."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 
  // [CHANGE]: Masukkan nomor WA asli di sini
  const WHATSAPP_URL = 'https://wa.me/6281234567890'; 

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white relative" id="faq">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">
            Objection Handling
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Masih Ragu? <br/> Mari Kita Bicara Blak-blakan.
          </h3>
          <p className="text-gray-500 text-lg">
            Transparansi adalah kunci. Berikut jawaban jujur untuk pertanyaan yang mungkin Anda simpan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-gray-50 border-blue-200 shadow-sm' : 'bg-white hover:border-blue-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold pr-8 ${activeIndex === index ? 'text-blue-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}