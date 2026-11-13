# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers screening new-graduate software engineering candidates, mainly for backend, cloud and AI/ML roles. They skim in seconds, then decide whether to open the resume or make contact.

## Product Purpose

A personal portfolio for Hirtic Selvavinayagam, a Software Engineer (B.Tech in Computer Science, Vellore Institute of Technology, expected 2026) who is open to work. Success is a recruiter getting in touch or opening the resume after one visit.

## Positioning

The proof comes from his own work: shipped projects with live demos and public repos, and a real industry role with quantified results (Yokogawa UAE). The site's CodeMascot is a character drawn from his actual stack.

## Operating Context

Visitors arrive from a resume, LinkedIn or an application link, often on a phone. Contact routes to offer: email (hirtic2004@gmail.com), LinkedIn (linkedin.com/in/hirtic-s) and the resume (Google Drive PDF). GitHub: github.com/hirtic-s.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind 4, framer-motion. This Next.js version has breaking changes; read `node_modules/next/dist/docs/` before writing code (see AGENTS.md).
- Single-page portfolio with sections: Hero, About, Education, Skills, Experience, Projects, Certifications.
- The live page is `src/app/page.tsx`, which imports only `CodeMascot`. The other files in `src/components/` are unused, including `Contact.tsx`, so the live page currently has no email contact.
- Undecided: whether to keep the "Open to work" badge and the "expected 2026" graduation wording. It is November 2026, so both may be stale. Confirm before changing.

## Brand Commitments

- Name: Hirtic Selvavinayagam.
- The CodeMascot (`src/components/CodeMascot.tsx`) stays as it is.
- Existing typefaces (Excon, MADE Okine Sans) and the current page copy are incumbent. Ask before replacing factual copy.

## Evidence on Hand

- Experience: Yokogawa UAE, with quantified results in the page copy (18% forecast gain, 40% fewer deployment cycles). Logo at `public/yokogawa.png`.
- Projects: AvailAPI (avail-api.vercel.app, sub-60s detection claim in the copy), Vanish Vault (vanishvault.vercel.app) and GooDeals (GitHub only, no live demo). Images in `public/projects/`.
- Certifications: AWS Certified Cloud Practitioner and Microsoft Certified Azure AI Fundamentals, both verifiable via Credly.
- Do not fabricate: testimonials, additional projects, metrics, employers or credentials beyond the above.

## Product Principles

1. One clear next step for a recruiter: contact or resume, reachable at any point.
2. Proof before claims: the projects and quantified experience lead, and generic self-description stays minimal.
3. Every fact is verifiable through a live demo, repo, Credly badge or the resume.
4. The page must work on a phone and in a ten-second skim.

## Accessibility & Inclusion

No formal standard was specified. Target WCAG AA, including keyboard operability, visible focus, accessible names for icon-only links, and respect for `prefers-reduced-motion`. The 2026-11-12 critique (`.impeccable/critique/`) found gaps in all of these.
