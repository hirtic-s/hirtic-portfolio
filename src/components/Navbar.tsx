"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" },
  { label: "Education", href: "#education", icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" },
  { label: "Experience", href: "#experience", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { label: "Projects", href: "#projects", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
  { label: "Skills", href: "#skills", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Certs", href: "#certifications", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },

];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const isScrollingRef = useRef(false);
  const lastClickTimeRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Skip scroll-spy updates during programmatic scroll from nav click
      if (isScrollingRef.current) return;

      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { label: item.label, top: Infinity };
        return { label: item.label, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce((closest, section) => {
        if (section.top <= 200 && section.top > closest.top) return section;
        return closest;
      }, { label: "Home", top: -Infinity });

      setActive(current.label);
    };

    const handleScrollEnd = () => {
      // Ignore scrollend if it fires almost immediately after a click
      if (Date.now() - lastClickTimeRef.current < 100) return;
      isScrollingRef.current = false;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "opacity-100" : "opacity-90"
      }`}
    >
      <div className="flex items-center gap-1 rounded-full bg-[#1a1a2e]/90 backdrop-blur-md border border-card-border px-2 py-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`nav-pill relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-full text-xs transition-colors duration-200 ${
              active === item.label
                ? "text-purple-light active"
                : "text-muted hover:text-foreground"
            }`}
            onClick={() => {
              isScrollingRef.current = true;
              lastClickTimeRef.current = Date.now();
              setActive(item.label);
              // Fallback: unlock after 2.5s in case scrollend doesn't fire
              setTimeout(() => { isScrollingRef.current = false; }, 2500);
            }}
          >
            {active === item.label && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-purple/20 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.icon}
              />
            </svg>
            <span className="text-[10px] font-medium tracking-wide uppercase">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
