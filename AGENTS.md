# FYNUX — Web Development Agency & Systems Engineering

Repository guide, coding standards, and operational instructions for autonomous coding agents and engineers.

## Project Overview
- **Name**: FYNUX (Digital Solutions & Web Engineering)
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Framer Motion
- **Icons**: Lucide React
- **Architecture**: App Router with clean separation of concerns:
  - `app/` — routes and pages
  - `app/components/` — UI components and domain blocks
  - `public/` — static assets and client portfolio media
  - `lib/` — utility functions, validation schemas, and security handlers

## Code Quality & Engineering Standards
1. Strict TypeScript (no `any`, no unsafe casts).
2. Resilient UI states: every interactive component must provide real actions, loading feedback, error states, and keyboard accessibility.
3. Accessible UI (WCAG 2.1 AA compliant): visible focus states (`ring-2 ring-blue-500 ring-offset-2`), semantic HTML, 44px minimum tap targets.
4. Security Hardened: Strict CSP, HTTP headers, input validation with sanitized inputs, no hardcoded secrets, and secure contact/quote handlers.

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
To update antislop later: download `antislop.md` again, or run `npx antislop-ai --update` if it was installed as skill folders.
<!-- antislop:end -->

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
