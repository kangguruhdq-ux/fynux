'use client';

// [FIX 1]: Menghapus 'motion' karena tidak ada animasi yang digunakan di komponen ini
// import { motion } from 'framer-motion'; 

// [FIX 2]: Menghapus 'Mail' karena icon ini tidak dipakai di bawah
import { Instagram, Linkedin, Twitter, ArrowUpRight, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 rounded-t-[3rem] mt-[-2rem] relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: CTA & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-800 pb-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">F</div>
              <span className="text-2xl font-bold tracking-tight">FYNUX.</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Kami membantu bisnis visioner membangun kehadiran digital yang dominan.
              Berhenti kompromi soal kualitas.
            </p>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 mt-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-400">
                Available for new projects
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center">
            <h4 className="text-2xl font-bold mb-4">Siap Memulai?</h4>
            <a
              href="#"
              className="group flex items-center gap-2 text-4xl md:text-5xl font-bold text-white hover:text-blue-500 transition-colors"
            >
              Let's Talk
              <ArrowUpRight className="w-10 h-10 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
            </a>
            <p className="text-gray-500 mt-2">halo@fynux.co</p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Column 1 */}
          <div>
            <h5 className="font-bold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/servicefynux" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Managed Hosting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">System Architecture</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="font-bold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/profile" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="font-bold text-white mb-4">Connect</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Linkedin size={16} /> LinkedIn</a></li>
              <li><a href="https://www.instagram.com/fynuxofficial/" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Instagram size={16} /> Instagram</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Twitter size={16} /> Twitter / X</a></li>
            </ul>
          </div>

          {/* Column 4: Location */}
          <div>
            <h5 className="font-bold text-white mb-4">Location</h5>
            <p className="text-sm text-gray-400 flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0 text-blue-500" />
              Yogyakarta, Indonesia.<br />
              Melayani Klien Seluruh Dunia.
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-xs text-gray-600">
          <p>&copy; {currentYear} FYNUX Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Large Background Text (Subtle Decoration) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
          <h1 className="text-[15rem] font-bold text-center leading-none tracking-tighter text-white whitespace-nowrap">
            FYNUX
          </h1>
        </div>

      </div>
    </footer>
  );
}