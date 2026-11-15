"use client";

import { useEffect, useState } from "react";

const PROJECTS = [
  { name: "GooDeals", href: "https://github.com/hirtic-s/GooDeals", tag: "Gemini AI", title: "One price search across 4 stores, with Gemini turning plain English into filters" },
  { name: "Vanish Vault", href: "https://github.com/hirtic-s/vanishvault", tag: "AES-256", title: "Encrypted files that delete themselves on a timer, a single access or a break-in attempt" },
  { name: "AvailAPI", href: "https://github.com/hirtic-s/AvailAPI", tag: "Quartz", title: "Multi-tenant uptime monitoring that flags an outage in under 60 seconds" },
];

const INTERVAL = 5000;

// The card laid on the portrait: cycles through the three projects, and the dots let a visitor pick one.
export default function ProjectFloat() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Depends on index so a manual pick restarts the countdown.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % PROJECTS.length), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused]);

  const p = PROJECTS[index];

  return (
    <div
      className="ly-float"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div key={index} className="ly-float__slide" aria-live={paused ? "polite" : "off"}>
        <div className="ly-float__row"><a className="ly-float__name" href={p.href} target="_blank" rel="noopener noreferrer">{p.name}<span aria-hidden="true"> ↗</span><span className="sr-only"> code on GitHub</span></a><span>{p.tag}</span></div>
        <div className="ly-float__title">{p.title}</div>
      </div>
      <div className="ly-float__dots" role="group" aria-label="Choose a project">
        {PROJECTS.map((proj, i) => (
          <button
            key={proj.name}
            type="button"
            className="ly-float__dot"
            aria-label={`Show ${proj.name}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
