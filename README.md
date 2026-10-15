# FYNUX — Digital Solutions & Web Engineering

FYNUX adalah platform web agensi digital dan rekayasa sistem modern untuk UMKM, institusi pendidikan, dan korporat berkembang. Dibangun menggunakan Next.js App Router, React 19, TypeScript ketat, dan Tailwind CSS v4, dengan pengerasan keamanan tingkat produksi serta standar kualitas anti-slop.

---

## 🚀 Fitur & Keunggulan Arsitektur

- **Next.js 16 (App Router) + React 19 + TypeScript**: Server Components secara default untuk performa rendering optimal dan konsumsi JavaScript minimal di sisi klien.
- **Pengerasan Keamanan Berlapis**:
  - Content Security Policy (CSP) ketat, HTTP Strict Transport Security (HSTS), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, dan `Referrer-Policy`.
  - Rate Limiting berbasis sliding-window di sisi server (`lib/security.ts`).
  - Proteksi anti-bot honeypot pada formulir konsultasi (`/api/inquiry`).
  - Sanitasi input dan pencegahan XSS / Injection.
- **Desain UI/UX Premium (Anti-Slop Compliant)**:
  - Mengikuti standar resmi [anti-slop](https://github.com/miqdadbadjuber/anti-slop).
  - Aksesibilitas WCAG 2.1 AA (rasio kontras warna tinggi, navigasi keyboard penuh dengan focus rings, penanganan tombol Escape, minimum tap target 44px).
  - Dialog interaktif `ConsultationModal` untuk alur konsultasi calon klien yang mulus tanpa tombol mati atau tautan placeholder.
- **Katalog Layanan & Studi Kasus Nyata**:
  - Halaman interaktif pemilihan paket dan kuis estimasi kebutuhan (`/servicefynux`).
  - Studi kasus nyata portofolio klien institusi dan komunitas trading (`/portfolio`).
  - Informasi transparansi profil tim teknis (`/profile`).

---

## 🛠️ Prasyarat & Instalasi

### Prasyarat
- **Node.js**: v20.x atau v22+ LTS (diuji pada v24.14.1)
- **Package Manager**: `npm` v10+

### Instalasi Dependensi
```bash
# Clone repository
git clone <repository-url>
cd next

# Salin konfigurasi environment
cp .env.example .env.local

# Install dependensi
npm install
```

---

## 💻 Skrip Pengembangan & Produksi

| Perintah | Deskripsi |
|---|---|
| `npm run dev` | Menjalankan server development lokal pada `http://localhost:3000` |
| `npm run lint` | Menjalankan ESLint 9 flat configuration untuk verifikasi kode |
| `npx tsc --noEmit` | Memverifikasi kepatuhan tipe TypeScript tanpa menghasilkan artefak |
| `npm run build` | Melakukan kompilasi produksi teroptimasi Next.js dengan Turbopack |
| `npm run start` | Menjalankan server aplikasi produksi lokal |

---

## 🔒 Konfigurasi Environment Variables

Salin `.env.example` ke `.env.local` dan sesuaikan parameter berikut:

```env
# URL resmi aplikasi produksi
NEXT_PUBLIC_SITE_URL=https://fynux.id

# Kontak resmi WhatsApp (Format internasional: 628...)
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890

# Lingkungan runtime
NODE_ENV=production
```

---

## 📂 Struktur Direktori

```
├── app/
│   ├── api/
│   │   └── inquiry/route.ts       # Endpoint aman form konsultasi & rate limiter
│   ├── components/                # Komponen UI modular
│   │   ├── ConsultationModal.tsx  # Dialog formulir konsultasi aksesibel
│   │   ├── Navbar.tsx             # Navigasi utama dengan mobile drawer
│   │   ├── Hero.tsx               # Komponen hero landing page
│   │   ├── Services.tsx           # Ringkasan layanan utama
│   │   ├── Pricing.tsx            # Rincian paket harga & perbandingan
│   │   ├── Comparison.tsx         # Tabel diferensiasi pendekatan FYNUX
│   │   ├── PortfolioTeaser.tsx    # Cuplikan proyek unggulan
│   │   ├── FAQ.tsx                # Komponen tanya jawab dengan ARIA roles
│   │   ├── SocialProof.tsx        # Indikator kepercayaan & metrik
│   │   ├── FinalCTA.tsx           # Call to action penutup
│   │   └── Footer.tsx             # Footer navigasi komprehensif
│   ├── hosting/page.tsx           # Halaman managed cloud hosting
│   ├── portfolio/page.tsx         # Halaman studi kasus portofolio
│   ├── profile/page.tsx           # Halaman profil tim & filosofi rekayasa
│   ├── servicefynux/page.tsx      # Katalog layanan lengkap & kuis interaktif
│   ├── webapp/page.tsx            # Halaman rekayasa aplikasi web kustom
│   ├── webdesign/page.tsx         # Halaman strategi desain antarmuka UI/UX
│   ├── globals.css                # Konfigurasi Tailwind CSS v4
│   └── layout.tsx                 # Root layout & konfigurasi metadata SEO
├── lib/
│   └── security.ts                # Rate limiting, validasi schema, dan sanitasi input
├── public/                        # Aset gambar portofolio & ikon statis
├── skills/                        # Panduan aturan Anti-Slop (UI, Human, Copy, Mobile)
├── AGENTS.md                      # Instruksi standar rekayasa agentic coding
├── DESIGN.md                      # Pedoman desain, token warna, dan ritme UI
├── eslint.config.mjs              # ESLint 9 flat configuration
├── next.config.js                 # Header keamanan HTTP, CSP, dan pengaturan Next.js
├── postcss.config.mjs             # PostCSS plugin bundler Tailwind CSS
└── tsconfig.json                  # Konfigurasi TypeScript ketat
```

---

## 🛡️ Standar Kualitas & Anti-Slop

Proyek ini menerapkan standar mutu tinggi:
1. **Bebas Kode Semu (No Placeholder / Fake Features)**: Seluruh tombol aksi, modal formulir, dan navigasi terhubung dengan logika riil dan penanganan status (loading, error, success).
2. **Kesesuaian Teks**: Tidak menggunakan tanda baca pemisah yang berlebihan (em dashes), tidak menggunakan klaim statistik fiktif, serta menggunakan bahasa Indonesia formal yang jelas.
3. **Penyempurnaan Visual**: Menghindari elemen dekoratif tanpa fungsi seperti radial gradient orb yang berlebihan, memastikan kontras teks sesuai standar WCAG AA, serta mendukung `prefers-reduced-motion`.

---

## 📄 Lisensi
Hak Cipta © 2026 FYNUX. Seluruh hak cipta dilindungi undang-undang.
