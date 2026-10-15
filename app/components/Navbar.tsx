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
      setIsScrolled(window.scrollY > 15);
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

  // Lock body scroll cleanly when mobile menu is open without layout shifts
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
      {/* ========================================================
          UNIFIED ROOT HEADER (Fixed at z-50, zero layout shift)
          ======================================================== */}
      <header
        className={`fixed top-0 inset-x-0 h-16 z-50 transition-[background-color,border-color,box-shadow] duration-200 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#070b12] shadow-xl border-b border-white/10'
            : 'bg-[#070b12]/90 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl h-full mx-auto px-6 flex items-center justify-between">
          {/* Logo with Status Indicator */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 group"
            aria-label="FYNUX Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              F
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-black tracking-tight text-white flex items-center leading-none">
                FYNUX
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 ml-1 animate-pulse" />
              </span>
              <span className="text-[9px] text-slate-400 font-mono tracking-wider mt-0.5 hidden sm:inline-block">
                SYSTEM ENGINEERING
              </span>
            </div>
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
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
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
              className="btn-shimmer min-h-[40px] px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-500 transition-all shadow-md shadow-blue-600/25 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-200" />
              <span>Konsultasi Proyek</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Single in-place morphing button) */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-blue-400" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* ========================================================
          BUTTERY SMOOTH MOBILE DRAWER (60fps Spring Curve)
          ======================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 inset-x-0 bottom-0 z-40 bg-[#070b12]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between overflow-y-auto border-t border-white/10"
          >
            {/* Status bar sub-header */}
            <div className="px-6 py-3 bg-[#0a0f19] border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">Tim Siap Alokasi Proyek</span>
              </span>
              <span className="text-blue-400 font-bold uppercase tracking-wider text-[10px]">
                Active Platform
              </span>
            </div>

            {/* Menu Items List with Staggered Cascades */}
            <div className="px-6 py-5 space-y-2.5 flex-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2 px-1">
                Navigasi Platform
              </p>

              {navItems.map((item, idx) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.035,
                      duration: 0.22,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group min-h-[58px] p-3 rounded-2xl flex items-center justify-between border transition-all ${
                        isActive
                          ? 'bg-blue-600/15 border-blue-500/40 text-white shadow-sm'
                          : 'bg-[#0c121d] border-white/5 text-slate-300 hover:border-white/15 hover:bg-white/[0.04]'
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
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions Card (Safe Bottom Clearance against Next.js dev badge) */}
            <div className="px-6 pt-4 pb-24 border-t border-white/10 bg-[#070b12] space-y-3">
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
                <span className="font-mono text-[11px]">FYNUX Web Engineering</span>
                <Link
                  href="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 text-[11px]"
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