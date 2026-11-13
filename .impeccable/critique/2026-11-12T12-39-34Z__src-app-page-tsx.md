---
target: homepage
total_score: 18
max_score: 28
na_heuristics: 7,9,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/hirticc/Desktop/hirtic-portfolio/src/app/page.tsx"
target_fingerprint: "sha256:f4a9fbb592f9d281224cff8308e01e0833a1cd9ecbb42cc8c3bb2c2632f71168"
target_path: /Users/hirticc/Desktop/hirtic-portfolio/src/app/page.tsx
timestamp: 2026-11-12T12-39-34Z
slug: src-app-page-tsx
---
Method: dual-agent. Score 18/28 (heuristics 7, 9, 10 n/a). Acceptable.
Verdict: leaning category-interchangeable; CodeMascot is the one authored asset, buried. Detector: clean on page.tsx, layout.tsx, components.
P0: live page has no contact path (Contact.tsx is dead code; only CodeMascot imported in page.tsx).
P1: hero hierarchy/mascot staging; h1 fixed text-7xl clips on mobile; portrait alt says "Janane Selvavinayagam" (page.tsx:380).
P1: every section same glass-card weight; Projects buried; Education/Certs over-weighted; remote Unsplash overlay.
P2: no prefers-reduced-motion; 7-tab dock overflows mobile; hover-only tooltips; no focus/aria-current; duplicate GitHub link labels.
P2: typography roles inverted (Excon body, 9px labels); no type scale.
P3: 8 dead components, ~50 flattened colour tokens, stale lavender glow.
Personas: Jordan, Sam, Casey.
