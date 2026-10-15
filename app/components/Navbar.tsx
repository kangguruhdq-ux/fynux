'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Home,
  Layers,
  Briefcase,
  Users,
  Cpu,
  CreditCard,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ConsultationModal from './ConsultationModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile menu (Anti-slop R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    {
      name: 'Beranda',
      subtitle: 'Arsitektur & solusi digital utama',
      href: '/',
      icon: Home,
    },
    {
      name: 'Katalog Layanan',
      subtitle: '9 Paket kustom & kuisioner cepat',
      href: '/servicefynux',
      icon: Layers,
    },
    {
      name: 'Portofolio',
      subtitle: 'Studi kasus nyata & demo klien',
      href: '/portfolio',
      icon: Briefcase,
    },
    {
      name: 'Tentang Kami',
      subtitle: 'Profil tim & 3 core engineers',
      href: '/profile',
      icon: Users,
    },
    {
      name: 'Aplikasi Web',
      subtitle: 'Sistem SaaS, CRM & otomasi internal',
      href: '/webapp',
      icon: Cpu,
    },
    {
      name: 'Paket Harga',
      subtitle: 'Rincian investasi transparan',
      href: '/#pricing',
      icon: CreditCard,
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070b12]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
            : 'bg-[#070b12]/85 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with High-Tech Status Pill */}
          <Link
            href="/"
            className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 group"
            aria-label="FYNUX Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              F
            </div>
            <span className="text-xl font-black tracking-tight text-white flex items-center">
              FYNUX
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 ml-1 animate-pulse" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-sm" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Trigger */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsConsultationOpen(true)}
              className="btn-shimmer min-h-[42px] px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-500 transition-all shadow-md shadow-blue-600/25 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-200" />
              <span>Konsultasi Proyek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </header>

      {/* ========================================================
          ELEVATED MOBILE NAVIGATION DRAWER
          Refined App-Like Navigation with Rich Icons & Clear Actions
          ======================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#06090e]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="px-6 pt-5 pb-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-600/30">
                  F
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-black tracking-tight text-white leading-tight">
                    FYNUX
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Tim Siap Alokasi Proyek
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
                aria-label="Tutup menu navigasi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items List */}
            <div className="px-6 py-6 space-y-2.5 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 px-1">
                Eksplorasi Platform
              </p>

              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group min-h-[58px] p-3 rounded-2xl flex items-center justify-between border transition-all ${
                      isActive
                        ? 'bg-blue-600/15 border-blue-500/40 text-white shadow-sm'
                        : 'bg-[#0b0f19] border-white/5 text-slate-300 hover:border-white/15 hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                            : 'bg-white/5 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-400 leading-snug mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
                        isActive ? 'text-blue-400' : 'text-slate-600'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions Card (With Safe Bottom Clearance) */}
            <div className="px-6 pt-5 pb-24 border-t border-white/10 bg-[#070b12] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsConsultationOpen(true);
                }}
                className="btn-shimmer w-full min-h-[50px] py-3.5 bg-blue-600 text-white text-sm font-bold rounded-2xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan Kebutuhan Proyek</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1 px-1">
                <span className="font-mono">FYNUX Web Engineering</span>
                <Link
                  href="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
                >
                  Bukti Kerja
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}