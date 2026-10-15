'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  preselectedService = 'Web Application',
}: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState<'whatsapp' | 'email'>('whatsapp');
  const [serviceType, setServiceType] = useState(preselectedService);
  const [projectScope, setProjectScope] = useState('');
  const [budgetRange, setBudgetRange] = useState('Rp 1.5jt - Rp 5jt');
  const [honeypot, setHoneypot] = useState('');

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [directWhatsAppUrl, setDirectWhatsAppUrl] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [prevPreselectedService, setPrevPreselectedService] = useState(preselectedService);
  if (preselectedService !== prevPreselectedService) {
    setPrevPreselectedService(preselectedService);
    setServiceType(preselectedService);
  }

  // Handle ESC key to close modal (WCAG AA / Anti-slop R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          contactType,
          serviceType,
          projectScope,
          budgetRange,
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus('error');
        setErrorMessage(data.error || 'Gagal mengirim pesan. Silakan coba lagi.');
        return;
      }

      setStatus('success');
      if (data.data?.directWhatsAppUrl) {
        setDirectWhatsAppUrl(data.data.directWhatsAppUrl);
      }
    } catch {
      setStatus('error');
      setErrorMessage('Terjadi kendala jaringan. Pastikan koneksi Anda aktif.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setName('');
    setContact('');
    setProjectScope('');
    setErrorMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070b12]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl max-h-[92dvh] sm:max-h-[88vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col"
          >
            {/* Header - Fixed & Always Visible */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-slate-100 bg-slate-50/95 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 shrink-0">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 id="modal-title" className="text-base sm:text-lg font-bold text-slate-900 leading-none">
                    Konsultasi & Estimasi Proyek
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">
                    Bahas spesifikasi teknis dan dapatkan estimasi akurat
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup form konsultasi"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body - Scrollable on mobile & desktop */}
            <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain flex-1">
              {status === 'success' ? (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Konsultasi Diterima</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong className="text-slate-900">{name}</strong>. Data kebutuhan sistem Anda telah tersimpan dengan aman di server kami. Engineer kami akan segera meninjau spesifikasi Anda.
                  </p>

                  {directWhatsAppUrl && (
                    <div className="pt-2">
                      <a
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
                      >
                        Lanjut Chat WhatsApp Tim Teknis
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      Kirim konsultasi proyek lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nama Lengkap / Instansi <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso atau PT Maju Bersama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Contact Type & Value */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Jalur Kontak
                      </label>
                      <select
                        value={contactType}
                        onChange={(e) => setContactType(e.target.value as 'whatsapp' | 'email')}
                        className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="whatsapp">WhatsApp</option>
                        <option value="email">Email</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {contactType === 'whatsapp' ? 'Nomor WhatsApp Aktif' : 'Alamat Email'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type={contactType === 'whatsapp' ? 'tel' : 'email'}
                        required
                        placeholder={contactType === 'whatsapp' ? '08123456789 atau 628...' : 'nama@perusahaan.com'}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  {/* Service Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Kategori Layanan
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Paket Starter (Landing / Profil)">Paket Starter (Rp 1.49jt)</option>
                        <option value="Paket Business (Custom Design / E-Commerce)">Paket Business (Rp 3.9jt)</option>
                        <option value="Paket Enterprise (SaaS / ERP / Presensi)">Paket Enterprise (Mulai 6jt)</option>
                        <option value="Web Application Development">Web Application Development</option>
                        <option value="UI/UX Design Strategy">UI/UX Design Strategy</option>
                        <option value="Managed Cloud Hosting">Managed Cloud Hosting</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Estimasi Budget
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="Rp 1.5jt - Rp 3.5jt">Rp 1.5jt - Rp 3.5jt</option>
                        <option value="Rp 3.5jt - Rp 6jt">Rp 3.5jt - Rp 6jt</option>
                        <option value="Rp 6jt - Rp 15jt">Rp 6jt - Rp 15jt</option>
                        <option value="Diatas Rp 15jt">Diatas Rp 15jt</option>
                        <option value="Fleksibel sesuai scope">Fleksibel sesuai scope</option>
                      </select>
                    </div>
                  </div>

                  {/* Scope details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Jelaskan Kebutuhan / Masalah yang Ingin Diselesaikan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Ceritakan gambaran sistem, fitur yang dibutuhkan, target pengguna, atau batas waktu penyelesaian..."
                      value={projectScope}
                      onChange={(e) => setProjectScope(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  {/* Error Alert */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Memproses Pengajuan...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Kirim Kebutuhan Proyek Saya
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Data Anda terlindungi oleh standar privasi. Bebas biaya konsultasi.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
