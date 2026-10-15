'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react'; 

const faqs = [
  {
    question: "Kenapa paket harga FYNUX lebih terjangkau dibanding agensi konvensional?",
    answer: "Kebanyakan agensi besar membebankan sewa kantor fisik dan biaya birokrasi ke invoice Anda. Di FYNUX, kami beroperasi secara terarah dan terotomatisasi. Anda membayar 100% untuk kualitas arsitektur sistem dan hasil yang bekerja, bukan overhead biaya sewa."
  },
  {
    question: "Dengan harga terjangkau, apakah standar kode dan kualitas dikorbankan?",
    answer: "Sama sekali tidak. Kami menerapkan standar kode ketat. Proyek dikerjakan dan disupervisi langsung oleh System Architect dan Lead Engineer berpengalaman, sehingga kontrol kualitas jauh lebih terukur dibanding menyerahkannya ke tenaga junior tanpa pendampingan."
  },
  {
    question: "Apa cakupan 'Garansi Maintenance'? Apakah ada biaya tambahan tersembunyi?",
    answer: "Tidak ada biaya tersembunyi. Kami yakin dengan stabilitas kode yang kami serahkan. Jika terdapat bug atau kendala teknis dalam masa garansi, kami perbaiki tanpa biaya tambahan. Kami ingin menjadi mitra teknologi jangka panjang."
  },
  {
    question: "Berapa lama estimasi waktu pengerjaan proyek?",
    answer: "Landing page standar umumnya selesai dalam 3 sampai 7 hari kerja. Sistem web app manajemen atau dashboard terintegrasi membutuhkan 2 sampai 4 minggu tergantung kompleksitas spesifikasi. Timeline disepakati di awal dan dieksekusi tepat waktu."
  },
  {
    question: "Bagaimana jika tim kami masih awam dalam mengelola sistem?",
    answer: "Kami merancang dashboard administratif yang intuitif dan mudah dipelajari. Kami juga menyertakan dokumentasi teknis atau video panduan singkat serta sesi tanya jawab via WhatsApp jika tim Anda membutuhkan bantuan."
  },
  {
    question: "Apakah FYNUX dapat menangani proyek instansi resmi dan korporasi?",
    answer: "Tentu. Kami memiliki portofolio membangun sistem absensi digital untuk instansi pendidikan (SMA Negeri 2 Ngaglik) dengan pengujian multi-perangkat. Kami siap mengikuti prosedur administrasi dan standar kerja korporat."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-slate-50/50 border-b border-slate-200/60" id="faq">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Tanya Jawab & Transparansi
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4 leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Transparansi adalah fondasi kerja kami. Berikut jawaban detail atas pertanyaan umum Anda.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-white border-blue-200 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className={`text-base md:text-lg font-bold pr-6 ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <span className={`p-2 rounded-xl shrink-0 transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}