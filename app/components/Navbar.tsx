'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
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

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Katalog Layanan', href: '/servicefynux' },
    { name: 'Portofolio', href: '/portfolio' },
    { name: 'Tentang Kami', href: '/profile' },
    { name: 'Aplikasi Web', href: '/webapp' },
    { name: 'Paket Harga', href: '/#pricing' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070b12]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
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
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
              F
            </div>
            <span className="text-xl font-black tracking-tight text-white flex items-center">
              FYNUX
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 ml-1 animate-pulse" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-sm" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold shadow-sm shadow-blue-600/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
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
            className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#070b12] pt-24 px-6 lg:hidden flex flex-col justify-between pb-8 overflow-y-auto border-b border-white/10"
          >
            <div>
              <div className="mb-4 pb-2 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SYSTEM NAVIGATION</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> SECURE
                </span>
              </div>

              <nav className="flex flex-col gap-1.5" aria-label="Navigasi Mobile">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`min-h-[48px] flex items-center justify-between text-base font-bold px-4 py-3 rounded-xl transition-colors ${
                        isActive
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                          : 'text-slate-200 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsConsultationOpen(true);
                }}
                className="w-full min-h-[50px] py-3.5 bg-blue-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Mulai Konsultasi Teknis
              </button>
              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 font-mono">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                Next.js 16 • React 19 • Full-Stack Engineering
              </p>
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