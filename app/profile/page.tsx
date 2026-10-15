'use client';

import { motion, Variants } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Rocket,
  Search,
  Palette,
  Code2,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import richardPic from '../team/richard.webp';
import juanPic from '../team/juan.webp';

// -------------------- MOTION --------------------
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// -------------------- UI HELPERS --------------------
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-bold tracking-widest text-slate-700 uppercase shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
      </span>
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <motion.div variants={fadeInUp} className={align === 'center' ? 'flex justify-center' : ''}>
        <Chip>{eyebrow}</Chip>
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className={`mt-5 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight`}
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-sm md:text-base text-slate-600 leading-relaxed ${
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
      {children}
    </span>
  );
}

function CheckLine({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-700">
      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
      <span className="leading-snug">{text}</span>
    </li>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-bold tracking-widest uppercase text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-bold text-slate-900">{value}</p>
    </div>
  );
}

// -------------------- PAGE --------------------
export default function CompanyProfile() {
  const WHATSAPP_URL = 'https://wa.me/6281234567890';

  const tech = ['Next.js', 'Node.js', 'Flutter', 'PostgreSQL', 'Supabase', 'Tailwind'];

  return (
    <main className="flex min-h-screen flex-col bg-white pt-20 overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-[-220px] left-[-160px] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.12] [mask-image:radial-gradient(ellipse_55%_50%_at_50%_0%,#000_75%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="The minds behind FYNUX"
              title={
                <>
                  Tim kecil yang bergerak cepat —
                  <br className="hidden md:block" />
                  <span className="text-blue-600">hasilnya terasa “kelas korporat”.</span>
                </>
              }
              subtitle={
                <>
                  Kami bukan agensi massal. Kami partner teknis yang fokus ke 2 hal:
                  <span className="font-semibold text-slate-900"> konversi</span> dan{' '}
                  <span className="font-semibold text-slate-900">efisiensi</span>.
                  Karena website/sistem yang bagus itu harus bikin bisnis kamu lebih cepat untung, bukan tambah ribet.
                </>
              }
            />

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-slate-800"
              >
                Konsultasi 15 Menit <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="#team"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                Kenalan dengan Tim <Users className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat label="Fokus" value="Conversion & Efficiency" />
              <Stat label="Style kerja" value="Small team • fast iteration" />
              <Stat label="Output" value="Design + Dev + Strategy" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Why we exist"
              title="Kenapa FYNUX hadir?"
              subtitle="Karena banyak bisnis serius terhambat bukan karena ide — tapi karena sistemnya lambat, mahal, dan tidak rapi."
            />

            <motion.div variants={fadeInUp} className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-10 text-white">
                <div className="absolute -top-14 -right-14 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
                <p className="text-xs font-bold tracking-widest uppercase text-blue-300">The Problem</p>
                <p className="mt-4 text-2xl md:text-3xl font-semibold leading-snug text-slate-200">
                  “Teknologi dan otomasi yang rapi seringnya cuma bisa dinikmati perusahaan bermodal besar.”
                </p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-slate-300" />
                    Operasional jadi manual & lambat
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-slate-300" />
                    Website ada, tapi nggak menghasilkan
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 mt-0.5 text-slate-300" />
                    Vendor terlalu banyak, koordinasi ribet
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-600 p-10 text-white">
                <div className="absolute -bottom-14 -left-14 h-52 w-52 rounded-full bg-black/15 blur-2xl" />
                <p className="text-xs font-bold tracking-widest uppercase text-blue-100">Our Mission</p>
                <p className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
                  “Kami bikin teknologi yang terasa enterprise — bisa diakses UMKM & institusi yang serius bertumbuh.”
                </p>
                <ul className="mt-6 space-y-2 text-sm text-blue-100">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 mt-0.5" />
                    Arsitektur rapi, aman, scalable
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 mt-0.5" />
                    Delivery cepat, iterasi cepat
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 mt-0.5" />
                    Fokus outcome: trust, lead, efisiensi
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TEAM (Babah removed) */}
      <section id="team" className="bg-slate-50 border-y border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="The team"
              title="Tim spesialis. Ditangani langsung."
              subtitle="Bukan sistem lempar-lempar. Kamu komunikasi dengan orang yang benar-benar ngerjain."
            />

            <div className="mt-14 grid gap-6">
              {/* Richard */}
              <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative h-44 w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100">
                    <Image
                      src={richardPic}
                      alt="Richard Faiz"
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill>Founder & System Architect</Pill>
                      <Pill>UI/UX & Workflow</Pill>
                    </div>

                    <h3 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Richard Faiz</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-700">Visionary & Workflow Specialist</p>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      Richard memastikan desain dan sistem punya satu tujuan: bikin proses bisnis lebih efisien dan
                      bikin website lebih “jualan”. Fokusnya: struktur UI/UX yang jelas, alur pengguna yang minim friksi,
                      dan logic yang bener-bener kepakai di lapangan.
                    </p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      <CheckLine text="UI/UX strategy yang fokus konversi" />
                      <CheckLine text="Frontend architecture yang rapi" />
                      <CheckLine text="Business logic & flow operasional" />
                      <CheckLine text="Analisis kompetitor & positioning" />
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Juan */}
              <motion.div variants={fadeInUp} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm">
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
                  <div className="relative h-44 w-44 md:h-52 md:w-52 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100">
                    <Image
                      src={juanPic}
                      alt="Juan"
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 md:text-right">
                    <div className="flex flex-wrap items-center gap-2 md:justify-end">
                      <Pill>Lead Backend</Pill>
                      <Pill>Security & Scalability</Pill>
                    </div>

                    <h3 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">Juan</h3>
                    <p className="mt-1 text-sm font-semibold text-indigo-700">System Core & Security Expert</p>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      Juan membangun fondasi sistem: database, keamanan, performa server, dan arsitektur yang siap scale.
                      Targetnya simple: sistem kamu harus stabil, cepat, dan sulit dimanipulasi.
                    </p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2 md:justify-items-end">
                      <CheckLine text="Database design & data integrity" />
                      <CheckLine text="Cyber security mindset" />
                      <CheckLine text="Performance & server optimization" />
                      <CheckLine text="Arsitektur scalable untuk growth" />
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES + TECH STACK */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Engineering"
              title="Filosofi kerja yang bikin output konsisten."
              subtitle="Bukan sekadar cepat jadi, tapi rapi, aman, dan gampang dikembangkan."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: Target, title: 'Make it Work', desc: 'Solusi harus menyelesaikan masalah nyata dan bisa dipakai hari ini.' },
                { icon: ShieldCheck, title: 'Make it Right', desc: 'Arsitektur bersih, aman, dan scalable — bukan “asal jadi”.' },
                { icon: Zap, title: 'Make it Fast', desc: 'Loading lambat bunuh konversi. Kita optimize dari awal.' },
              ].map((x) => (
                <motion.div
                  key={x.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 hover:shadow-md transition-shadow"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200">
                    <x.icon className="h-5 w-5 text-slate-900" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{x.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-10 md:p-14 text-white relative">
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold">Tech Stack Ecosystem</h3>
                <p className="mt-3 max-w-2xl text-sm text-slate-300">
                  Kami pilih teknologi yang digunakan produk modern: stabil, cepat, dan banyak dukungan komunitas.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {tech.map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold text-slate-200"
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <ShieldCheck className="h-4 w-4 text-green-300" /> Security-first mindset
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <Zap className="h-4 w-4 text-yellow-300" /> Performance-aware from day one
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                    <Target className="h-4 w-4 text-blue-300" /> Outcome-driven build
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-slate-50 border-t border-slate-200 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Process"
              title="Proses yang transparan, tanpa drama."
              subtitle="Kamu selalu tahu: progressnya apa, siapa ngerjain, dan kapan selesai."
            />

            <div className="mt-12 grid gap-6">
              {[
                { step: '1', title: 'Discovery & Strategy', time: 'Hari 1–2', icon: Search, desc: 'Kita pahami bisnis & target audiens dulu. Baru tentukan struktur, CTA, dan flow yang paling efektif.', out: 'Brief + wireframe' },
                { step: '2', title: 'Design & Approval', time: 'Hari 3–5', icon: Palette, desc: 'Desain UI/UX. Development dimulai setelah kamu approve — biar nggak buang waktu revisi bolak-balik.', out: 'UI/UX Design' },
                { step: '3', title: 'Development & Staging', time: 'Hari 6–12', icon: Code2, desc: 'Implementasi + staging URL untuk kamu cek. Komunikasi jelas: apa yang done, apa yang next.', out: 'Staging site + testing' },
                { step: '4', title: 'Launch & Handover', time: 'Hari 13–14', icon: Rocket, desc: 'Final QA, responsif mobile, dan deployment. Kalau ada dashboard, kita kasih tutorial singkat biar tim kamu bisa jalan.', out: 'Live website + akses + dokumentasi' },
              ].map((x) => (
                <motion.div key={x.step} variants={fadeInUp} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                        <x.icon className="h-5 w-5 text-slate-900" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Step {x.step}</span>
                          <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                            {x.time}
                          </span>
                        </div>
                        <h3 className="mt-2 text-xl font-bold text-slate-900">{x.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-2xl">{x.desc}</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:max-w-sm">
                      <p className="text-xs font-bold tracking-widest uppercase text-slate-500">Output</p>
                      <p className="mt-2 text-sm font-semibold text-slate-800">{x.out}</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                          Update progress jelas
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                          Minim revisi “random”
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
              <p className="text-sm font-bold text-slate-900">Kalau kamu belum yakin, itu normal.</p>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Kita bisa mulai dari konsultasi singkat. Kalau scope belum jelas, kita bantu rapikan.
                Kalau ternyata bukan solusi terbaik buat kamu, kita akan bilang—tanpa maksa.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white border-t border-slate-200 py-20 md:py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <SectionTitle
              eyebrow="Next step"
              title="Partner teknis, bukan vendor sekali jalan."
              subtitle="Kami akan nanya “why”, challenge asumsi, dan kasih saran arsitektur — karena hasilmu adalah portofolio terbaik kami."
            />

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-white font-bold hover:bg-blue-600 transition-colors shadow-lg"
              >
                Lihat Bukti Kerja <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-slate-800 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Konsultasi Proyek Sekarang
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-green-600" /> Security-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <Zap className="h-4 w-4 text-yellow-600" /> Fast delivery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <Target className="h-4 w-4 text-blue-600" /> Outcome-driven
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
