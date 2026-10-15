'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Copy, Check, FileCode, Database, RefreshCw } from 'lucide-react';

interface CodeSnippet {
  filename: string;
  language: string;
  badge: string;
  code: string[];
}

const snippets: Record<string, CodeSnippet> = {
  architecture: {
    filename: 'ServerComponent.tsx',
    language: 'TypeScript / React 19',
    badge: 'Next.js 16 App Router',
    code: [
      '// 1. Zero-JS Server Component by default',
      'import { cache } from "react";',
      'import { db } from "@/lib/database";',
      'import { verifySession } from "@/lib/auth";',
      '',
      'export default async function ProductionPipeline() {',
      '  const session = await verifySession();',
      '  const telemetry = await db.metrics.findFirst({',
      '    where: { organizationId: session.orgId },',
      '    select: { latency: true, throughput: true, status: true },',
      '  });',
      '',
      '  return (',
      '    <section className="grid grid-cols-3 gap-4">',
      '      <TelemetryCard data={telemetry} status="OPTIMAL" />',
      '    </section>',
      '  );',
      '}',
    ],
  },
  security: {
    filename: 'security-hardening.ts',
    language: 'TypeScript',
    badge: 'Production Hardened',
    code: [
      '// 2. Sliding-Window Rate Limiting & Honeypot Sink',
      'import { NextResponse } from "next/server";',
      'import { rateLimiter, sanitizeInput } from "@/lib/security";',
      '',
      'export async function POST(req: Request) {',
      '  const ip = req.headers.get("x-forwarded-for") || "client";',
      '  const allowed = rateLimiter.check(ip, 5, 60_000);',
      '',
      '  if (!allowed) {',
      '    return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });',
      '  }',
      '',
      '  const { payload, honeypot } = await req.json();',
      '  if (honeypot) return NextResponse.json({ status: 200 }); // Silent Bot Sink',
      '  return NextResponse.json({ success: true, data: sanitizeInput(payload) });',
      '}',
    ],
  },
  database: {
    filename: 'schema-production.sql',
    language: 'PostgreSQL',
    badge: 'ACID Compliant',
    code: [
      '-- 3. Strict Relational Schema with Audit Trails',
      'CREATE TABLE organization_inquiries (',
      '  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),',
      '  client_name VARCHAR(80) NOT NULL CHECK (char_length(client_name) >= 2),',
      '  contact_point VARCHAR(120) NOT NULL,',
      '  service_type VARCHAR(60) NOT NULL,',
      '  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,',
      '  ip_digest BYTEA NOT NULL,',
      '  CONSTRAINT chk_sanitized_name CHECK (client_name !~ \'[<>&"]\')',
      ');',
      '',
      'CREATE INDEX idx_inquiries_lookup ON organization_inquiries(service_type, created_at DESC);',
    ],
  },
};

export default function HeroCodeTerminal() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'security' | 'database'>('architecture');
  const [copied, setCopied] = useState(false);

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[620px] rounded-2xl bg-[#090d16] border border-white/10 shadow-2xl overflow-hidden relative group">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d131f] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]/90" />
          <div className="w-3 h-3 rounded-full bg-[#eab308]/90" />
          <div className="w-3 h-3 rounded-full bg-[#22c55e]/90" />
          <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline-block">
            fynux-core-engine
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-[#06090e] p-1 rounded-lg border border-white/5">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Frontend</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('security')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'security'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Security</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('database')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition-colors flex items-center gap-1.5 ${
              activeTab === 'database'
                ? 'bg-blue-600 text-white font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Database</span>
          </button>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Salin Kode Sumber"
          className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Editor Sub-header info */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#080c14] border-b border-white/5 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-slate-200 font-semibold">{currentSnippet.filename}</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">{currentSnippet.language}</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 font-sans font-bold">
          {currentSnippet.badge}
        </span>
      </div>

      {/* Code Body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto max-h-[360px] scrollbar-thin text-slate-300"
        >
          {currentSnippet.code.map((line, idx) => {
            const isComment = line.trim().startsWith('//') || line.trim().startsWith('--');
            const isKeyword =
              line.includes('import ') ||
              line.includes('export ') ||
              line.includes('const ') ||
              line.includes('return ') ||
              line.includes('async ') ||
              line.includes('await ') ||
              line.includes('CREATE ') ||
              line.includes('PRIMARY KEY');

            return (
              <div key={idx} className="table-row group/line hover:bg-white/[0.03]">
                <span className="table-cell select-none pr-4 text-right text-slate-600 text-[11px] w-8">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre font-mono">
                  {isComment ? (
                    <span className="text-slate-500 italic">{line}</span>
                  ) : isKeyword ? (
                    <span className="text-blue-300">{line}</span>
                  ) : (
                    <span className="text-slate-200">{line}</span>
                  )}
                </span>
              </div>
            );
          })}
          <div className="mt-2 text-slate-500">
            <span className="text-blue-400 font-bold">&gt;</span> <span className="code-cursor" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Live System Metrics Footer */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-[#06090e] px-2 py-2.5 text-center text-[11px] font-mono">
        <div className="flex items-center justify-center gap-1.5 text-slate-300">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>Turbopack: 14ms</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>CSP: Strict L3</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-slate-300">
          <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
          <span>Vitals: 100/100</span>
        </div>
      </div>
    </div>
  );
}
