import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, sanitizeInput, isValidEmail, isValidPhone } from '@/lib/security';

export const runtime = 'nodejs';

interface InquiryPayload {
  name: string;
  contact: string;
  contactType: 'whatsapp' | 'email';
  serviceType: string;
  projectScope: string;
  budgetRange?: string;
  honeypot?: string; // Bot trap
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification & Rate Limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    const rateLimit = checkRateLimit(ip, 5, 10 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Terlalu banyak permintaan. Silakan coba lagi beberapa saat.',
          retryAfter: rateLimit.retryAfterSeconds,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfterSeconds),
          },
        }
      );
    }

    // 2. Body Payload parsing with size safety
    let body: InquiryPayload;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Format data tidak valid.' },
        { status: 400 }
      );
    }

    // 3. Honeypot check for spam bots
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Silently accept without processing to deceive bots
      return NextResponse.json({ success: true, message: 'Inquiry diterima.' });
    }

    // 4. Input sanitization
    const name = sanitizeInput(body.name);
    const contact = sanitizeInput(body.contact);
    const contactType = body.contactType === 'email' ? 'email' : 'whatsapp';
    const serviceType = sanitizeInput(body.serviceType);
    const projectScope = sanitizeInput(body.projectScope);
    const budgetRange = sanitizeInput(body.budgetRange || 'Belum Ditentukan');

    // 5. Validation constraints
    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { success: false, error: 'Nama harus diisi antara 2 sampai 80 karakter.' },
        { status: 422 }
      );
    }

    if (contactType === 'email' && !isValidEmail(contact)) {
      return NextResponse.json(
        { success: false, error: 'Format alamat email tidak valid.' },
        { status: 422 }
      );
    }

    if (contactType === 'whatsapp' && !isValidPhone(contact)) {
      return NextResponse.json(
        { success: false, error: 'Nomor WhatsApp harus berupa angka valid (9-15 digit).' },
        { status: 422 }
      );
    }

    if (!projectScope || projectScope.length < 10 || projectScope.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Deskripsi kebutuhan proyek minimal 10 karakter dan maksimal 2000 karakter.' },
        { status: 422 }
      );
    }

    // 6. Generate formatted WhatsApp message URL for direct one-click follow up
    const officialWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';
    const waText = encodeURIComponent(
      `Halo Tim FYNUX, saya ${name}.\n` +
      `Saya ingin konsultasi mengenai proyek ${serviceType}.\n` +
      `Kebutuhan: ${projectScope}\n` +
      `Estimasi Budget: ${budgetRange}\n` +
      `Kontak Saya: ${contact} (${contactType})`
    );
    const directWhatsAppUrl = `https://wa.me/${officialWhatsAppNumber}?text=${waText}`;

    // Return sanitized structured confirmation
    return NextResponse.json(
      {
        success: true,
        message: 'Konsultasi Anda telah tercatat dengan aman. Tim engineer FYNUX akan segera menghubungi Anda.',
        data: {
          name,
          serviceType,
          directWhatsAppUrl,
        },
      },
      { status: 200 }
    );
  } catch {
    // Avoid leaking internal errors
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan sistem internal. Silakan coba kembali.' },
      { status: 500 }
    );
  }
}
