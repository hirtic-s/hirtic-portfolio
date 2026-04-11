"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import StackIcon from "tech-stack-icons";
import CodeMascot from "@/components/CodeMascot";

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const hudRef = useRef<HTMLDivElement>(null);
    const ringOuterRef = useRef<SVGCircleElement>(null);
    const ringMiddleRef = useRef<SVGCircleElement>(null);
    const ringInnerRef = useRef<SVGCircleElement>(null);
    const isScrollingRef = useRef(false);

    const [loadingStep, setLoadingStep] = useState(0);
    const loadingMessages = [
        "Initializing portfolio...",
        "Assembling creative components...",
        "Unveiling digital canvas..."
    ];

    useEffect(() => {
        const timer1 = setTimeout(() => setLoadingStep(1), 800);
        const timer2 = setTimeout(() => setLoadingStep(2), 1800);
        const timer3 = setTimeout(() => setIsLoaded(true), 3000);

        // Ensure we wait for at least some initial loading
        const handleLoad = () => {
            // Optional: speed up if everything is already loaded
        };

        window.addEventListener('load', handleLoad);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        // High-Performance Nav Tracking with Precise Center-Needle Observer
        const sections = document.querySelectorAll('#home, #about, #education, #skills, #experience, #projects, #certifications');
        const navLinks = document.querySelectorAll('nav a');

        const updateNav = (activeId: string | null) => {
            navLinks.forEach(link => {
                const href = link.getAttribute('href')?.substring(1) || '';
                // Handle home section (# -> empty string) mapping to id="home"
                const isActive = (activeId === href) || (activeId === 'home' && href === '');

                if (isActive) {
                    link.classList.add('nav-active');
                    link.classList.remove('text-[#e5e1e4]/60');
                } else {
                    link.classList.remove('nav-active');
                    link.classList.add('text-[#e5e1e4]/60');
                }
            });
        };

        const observerOptions = {
            rootMargin: "-20% 0px -40% 0px", // Focus on the upper-middle part of the screen
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (isScrollingRef.current) return;

            // Find the first intersecting entry (typically the top-most one in the trigger zone)
            const activeEntry = entries.find(entry => entry.isIntersecting);
            if (activeEntry) {
                updateNav(activeEntry.target.id);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));

        let lastClickTime = 0;

        const nav = document.querySelector('nav');

        // Instant click feedback with center-aligned scrolling
        const handleNavClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (target) {
                const href = target.getAttribute('href');
                if (href?.startsWith('#')) {
                    e.preventDefault();
                    isScrollingRef.current = true;
                    lastClickTime = Date.now();
                    const sectionId = href.substring(1) || 'home';

                    const element = document.getElementById(sectionId === '' ? 'home' : sectionId);

                    // Revert behavior specifically for Skills and Projects
                    const forceTopAligned = ['skills', 'projects'];

                    if (sectionId === 'home' || sectionId === '') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (forceTopAligned.includes(sectionId)) {
                        let offset = 0;
                        if (sectionId === 'skills') offset = 70;
                        if (sectionId === 'projects') offset = 90; // Aligns "Projects" title just below header

                        const elementPosition = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;
                        window.scrollTo({
                            top: elementPosition - offset,
                            behavior: 'smooth'
                        });
                    } else if (element) {
                        const windowHeight = window.innerHeight;
                        const elementHeight = element.offsetHeight;

                        // If element is smaller than viewport, center it
                        // Otherwise, scroll to top with safe margin for fixed header
                        if (elementHeight < windowHeight * 0.7) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        } else {
                            const offset = 100; // Consistent margin below fixed header
                            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                            window.scrollTo({
                                top: elementPosition - offset,
                                behavior: 'smooth'
                            });
                        }
                    }

                    updateNav(sectionId === '' ? 'home' : sectionId);

                    // Add switching class to suppress "phantom" transitions
                    nav?.classList.add('nav-switching');
                    setTimeout(() => nav?.classList.remove('nav-switching'), 500);

                    // Fallback: Reset the scroll lock once the smooth scroll is likely finished
                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 1000);
                }
            }
        };

        // Scroll-to-bottom detection (for short final sections)
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                if (!isScrollingRef.current) updateNav('certifications');
            }
        };

        // Reset the scroll lock once the programmatic scroll finishes
        const handleScrollEnd = () => {
            // Ignore scrollend if it fires almost immediately after a click (prevents premature unlocking)
            if (Date.now() - lastClickTime < 100) return;
            isScrollingRef.current = false;
        };

        nav?.addEventListener('click', handleNavClick);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scrollend', handleScrollEnd);

        // Intersection Observer for modern highlights - existing logic
        const highlightObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const highlighters = entry.target.querySelectorAll('.modern-highlighter');
                if (entry.isIntersecting) {
                    highlighters.forEach(el => {
                        el.classList.remove('is-visible');
                        void (el as HTMLElement).offsetWidth;
                        el.classList.add('is-visible');
                    });
                } else {
                    highlighters.forEach(el => el.classList.remove('is-visible'));
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('section, .section-bg').forEach(sec => {
            if (sec.querySelector('.modern-highlighter')) highlightObserver.observe(sec);
        });

        return () => {
            observer.disconnect();
            highlightObserver.disconnect();
            nav?.removeEventListener('click', handleNavClick);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scrollend', handleScrollEnd);
        };
    }, []);

    // Bulletproof HUD Animation Loop (Direct Refs)
    const isHoveringRef = useRef(false);

    useEffect(() => {
        let rotationOuter = 0, rotationMiddle = 0, rotationInner = 0;
        let currentSpeedOuter = 0.015, currentSpeedMiddle = -0.02, currentSpeedInner = 0.035;
        let animationFrameId: number;

        const hudElement = hudRef.current;
        if (hudElement) {
            const handleMouseEnter = () => { isHoveringRef.current = true; };
            const handleMouseLeave = () => { isHoveringRef.current = false; };
            hudElement.addEventListener('mouseenter', handleMouseEnter);
            hudElement.addEventListener('mouseleave', handleMouseLeave);
        }

        let lastTime = performance.now();

        const animate = (now: number) => {
            const delta = (now - lastTime) / 16.667; // normalize to ~60fps
            lastTime = now;

            const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
            const t = 0.04 * delta;
            const isHovering = isHoveringRef.current;

            const targetOuter = isHovering ? 0.08 : 0.015;
            const targetMiddle = isHovering ? -0.12 : -0.02;
            const targetInner = isHovering ? 0.18 : 0.035;

            currentSpeedOuter = lerp(currentSpeedOuter, targetOuter, Math.min(t, 1));
            currentSpeedMiddle = lerp(currentSpeedMiddle, targetMiddle, Math.min(t, 1));
            currentSpeedInner = lerp(currentSpeedInner, targetInner, Math.min(t, 1));

            rotationOuter += currentSpeedOuter * delta;
            rotationMiddle += currentSpeedMiddle * delta;
            rotationInner += currentSpeedInner * delta;

            // Direct attribute manipulation (Bulletproof)
            if (ringOuterRef.current) ringOuterRef.current.setAttribute('transform', `rotate(${rotationOuter} 100 100)`);
            if (ringMiddleRef.current) ringMiddleRef.current.setAttribute('transform', `rotate(${rotationMiddle} 100 100)`);
            if (ringInnerRef.current) ringInnerRef.current.setAttribute('transform', `rotate(${rotationInner} 100 100)`);

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            const hudElement = hudRef.current;
            if (hudElement) {
                // We use a separate cleanup for clarity
                hudElement.removeEventListener('mouseenter', () => { });
                hudElement.removeEventListener('mouseleave', () => { });
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);





    return (
        <>
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        className="preloader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    >
                        <div className="flex flex-col gap-6 max-w-sm w-full px-8">
                            {loadingMessages.map((msg, idx) => (
                                <motion.div
                                    key={msg}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{
                                        opacity: loadingStep >= idx ? 1 : 0.3,
                                        x: 0,
                                        transition: { delay: idx * 0.1 }
                                    }}
                                >
                                    <div className={`relative flex items-center justify-center w-6 h-6 rounded-full border transition-all duration-500 ${loadingStep >= idx
                                        ? idx === 2 && loadingStep === 2
                                            ? "border-[#10b981] bg-transparent"
                                            : "bg-[#1d1d1f] border-white/10"
                                        : "border-white/10"
                                        }`}>
                                        {loadingStep >= idx ? (
                                            <motion.span
                                                className={`material-symbols-outlined text-[16px] leading-none ${loadingStep > idx ? "text-[#10b981]" : "text-white/40"
                                                    }`}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                            >
                                                {loadingStep > idx ? "check_circle" : idx === loadingStep ? "radio_button_checked" : "circle"}
                                            </motion.span>
                                        ) : (
                                            <span className="material-symbols-outlined text-white/10 text-[16px]">circle</span>
                                        )}
                                    </div>
                                    <span className={`text-sm font-medium tracking-tight transition-all duration-500 ${loadingStep > idx
                                        ? "text-[#e5e1e4]/40"
                                        : loadingStep === idx
                                            ? "text-[#10b981]"
                                            : "text-[#e5e1e4]/20"
                                        }`}>
                                        {msg}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Navigation Bar - Outside animation to stay fixed */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl px-8 py-4 flex justify-between items-center w-full max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>fiber_manual_record</span>
                    <span className="font-label text-xs uppercase tracking-widest text-[#e5e1e4]">Open to work</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                        <a href="https://github.com/hirtic-s" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#10b981] transition-all duration-300">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/hirtic-s" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#10b981] transition-all duration-300">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1G1wTw3AlolQoNWvG2wbgmdSQIbRSGrLB/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#10b981] text-[#000000] font-label font-bold px-6 py-2 rounded-full text-sm hover:scale-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
                    >
                        Resume
                    </a>
                </div>
            </header>

            {/* Background Decorative Glows - Outside animation for fixed stability */}
            <div className="fixed top-0 left-1/4 w-[800px] h-[800px] radial-glow -z-10 pointer-events-none"></div>
            <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] radial-glow -z-10 pointer-events-none"></div>

            <div className={isLoaded ? 'reveal-content' : 'opacity-0'}>

                <main className="relative pt-20 pb-40">

                    {/* Hero Section */}
                    <div className="section-bg w-full">
                        <section className="max-w-7xl mx-auto px-8 mb-32 min-h-[calc(100vh-8rem)] flex items-start pt-4 scroll-mt-40" id="home">
                            <div className="flex flex-col md:flex-row items-center w-full">
                                <div className="max-w-2xl">
                                    <CodeMascot />
                                    <span className="text-tertiary font-label text-sm uppercase tracking-[0.3em] block mb-4">Software Engineer</span>
                                    <h1 className="text-7xl font-headline font-extrabold text-[#e5e1e4] leading-tight tracking-tight mb-8">Hirtic <br /> <span className="text-gradient">Selvavinayagam</span></h1>
                                    <p className="text-on-surface-variant text-lg leading-relaxed font-body max-w-lg">
                                        Specializing in robust <span className="modern-highlighter">backend architectures</span> and predictive modeling to build secure, scalable, and intelligent <span className="modern-highlighter">software ecosystems</span>.
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-center items-center mt-12 md:mt-0">
                                    <div ref={hudRef} className="hud-frame-container relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                                        <svg className="hud-svg absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                                            <circle ref={ringOuterRef} className="hud-ring hud-ring-outer" cx="100" cy="100" r="95" strokeDasharray="160 140" />
                                            <circle ref={ringMiddleRef} className="hud-ring hud-ring-middle" cx="100" cy="100" r="88" strokeDasharray="80 120" />
                                            <circle ref={ringInnerRef} className="hud-ring hud-ring-inner" cx="100" cy="100" r="82" strokeDasharray="2 10" />
                                        </svg>
                                        <div className="hud-inner-content relative flex items-center justify-center shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                className="w-full h-full object-cover object-top"
                                                src="/hirtic.png"
                                                alt="Hirtic Selvavinayagam"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* About Me Section */}
                    <div className="section-bg-2 w-full mb-32 py-16" id="about">
                        <section className="max-w-7xl mx-auto px-8 scroll-mt-32">
                            <div className="flex flex-col md:flex-row gap-16">
                                <div className="md:w-1/3">
                                    <h2 className="text-4xl font-headline font-bold text-[#e5e1e4]">About Me</h2>
                                    <p className="text-on-surface-variant mt-4 font-body italic border-l-2 border-[#10b981]/30 pl-4">"Building the digital future, one robust architecture at a time."</p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="glass-card p-10 space-y-8">
                                        <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                                            I am a results-driven <span className="modern-highlighter">Software Engineer</span> with a passion for architecting scalable backend systems and developing predictive AI models. My journey started with a curiosity for how complex digital infrastructures interact, which led me to pursue a B.Tech in Computer Science at <span className="modern-highlighter">Vellore Institute of Technology</span>.
                                        </p>
                                        <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                                            I pride myself on my ability to translate complex technical requirements into elegant, high-performance solutions. Whether it's optimizing database queries, containerizing microservices, or training deep learning models, I approach every project with a focus on <span className="modern-highlighter">reliability</span>, <span className="modern-highlighter">security</span>, and <span className="modern-highlighter">user-centric design</span>.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                                <span className="material-symbols-outlined text-[#10b981] mb-2">dns</span>
                                                <h4 className="text-xs font-label uppercase tracking-widest text-white">Architecture</h4>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                                <span className="material-symbols-outlined text-[#10b981] mb-2">model_training</span>
                                                <h4 className="text-xs font-label uppercase tracking-widest text-white">AI / ML</h4>
                                            </div>
                                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                                <span className="material-symbols-outlined text-[#10b981] mb-2">speed</span>
                                                <h4 className="text-xs font-label uppercase tracking-widest text-white">Scalability</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Education Section */}
                    <div className="section-bg-3 w-full mb-32 py-16" id="education">
                        <section className="max-w-7xl mx-auto px-8 scroll-mt-32">
                            <div className="flex flex-col md:flex-row gap-16">
                                <div className="md:w-1/3">
                                    <h2 className="text-4xl font-headline font-bold text-[#e5e1e4]">Education</h2>
                                    <p className="text-on-surface-variant mt-4 font-body">Academic milestones and foundational growth.</p>
                                </div>
                                <div className="md:w-2/3 space-y-8 relative before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[1px] before:bg-outline-variant/20">
                                    <div className="relative pl-8">
                                        <div className="absolute left-[-5px] top-6 w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_10px_#cdbdff]"></div>
                                        <div className="glass-card p-8 hover:bg-white/5 transition-all">
                                            <span className="text-tertiary font-label text-xs uppercase mb-2 block">Sept 2022 — expected 2026</span>
                                            <h3 className="text-2xl font-headline font-bold text-[#10b981] mb-2">Vellore Institute of Technology</h3>
                                            <p className="text-primary text-sm font-label mb-4">B.Tech in Computer Science Engineering</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                                <div className="bg-surface-container-low p-4 rounded-xl">
                                                    <p className="text-xs text-on-surface-variant uppercase mb-1">CGPA</p>
                                                    <p className="text-lg font-bold text-primary">8.06/10</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-[-5px] top-6 w-[10px] h-[10px] rounded-full bg-outline-variant"></div>
                                        <div className="glass-card p-8 hover:bg-white/5 transition-all">
                                            <span className="text-tertiary font-label text-xs uppercase mb-2 block">Sept 2010 — May 2022</span>
                                            <h3 className="text-2xl font-headline font-bold text-[#10b981] mb-2">Asian International Private School</h3>
                                            <p className="text-primary text-sm font-label mb-4">CBSE - Science Stream (PCM)</p>
                                            <div className="grid grid-cols-2 gap-4 mt-4">
                                                <div className="bg-surface-container-low p-4 rounded-xl">
                                                    <p className="text-xs text-on-surface-variant uppercase mb-1">Grade 12</p>
                                                    <p className="text-lg font-bold text-primary">86.0%</p>
                                                </div>
                                                <div className="bg-surface-container-low p-4 rounded-xl">
                                                    <p className="text-xs text-on-surface-variant uppercase mb-1">Grade 10</p>
                                                    <p className="text-lg font-bold text-primary">90.8%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Technology Stack Banner Section */}
                    <section className="relative w-full mb-32 overflow-hidden py-24 scroll-mt-40 section-bg-4" id="skills">
                        <div className="nature-overlay"></div>
                        <div className="max-w-7xl mx-auto px-8 mb-12 relative z-10">
                            <h2 className="text-4xl font-headline font-bold text-[#e5e1e4] mb-4">Skills</h2>
                            <p className="text-on-surface-variant font-body max-w-xl">A comprehensive view of the languages, frameworks, and cloud technologies powering my projects and architectural decisions.</p>
                        </div>

                        <div className="relative overflow-hidden py-10 select-none">
                            <div className="animate-marquee flex w-max shrink-0">
                                {[0, 1, 2].map((setIdx) => (
                                    <div key={`set-${setIdx}`} className="flex gap-6 pr-6 shrink-0">
                                        {[
                                            { name: "docker", label: "Docker" },
                                            { name: "git", label: "Git" },
                                            { name: "github", label: "GitHub" },
                                            { name: "postman", label: "Postman" },
                                            { name: "pytest", label: "Pytest" },
                                            { name: "html5", label: "HTML" },
                                            { name: "css3", label: "CSS" },
                                            { name: "react", label: "React" },
                                            { name: "nextjs", label: "Next.js" },
                                            { name: "tailwindcss", label: "Tailwind CSS" },
                                            { name: "flask", label: "Flask" },
                                            { name: "nodejs", label: "Node.js" },
                                            { name: "mysql", label: "REST APIs" },
                                            { name: "python", label: "Python" }
                                        ].map((tech, idx) => (
                                            <div key={`${tech.name}-${idx}`} className="tooltip-container">
                                                <span className="tooltip-label">{tech.label}</span>
                                                <div className="w-16 h-16 rounded-2xl bg-surface-container-high/40 backdrop-blur-md border border-white/5 flex items-center justify-center p-4 hover:bg-surface-container-highest transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg">
                                                    <StackIcon
                                                        name={tech.name as any}
                                                        variant="light"
                                                        className={`w-full h-full ${['github', 'nextjs', 'flask'].includes(tech.name) ? 'white-icon' : ''}`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <div className="section-bg-5 w-full mb-32 py-16" id="experience">
                        <section className="max-w-7xl mx-auto px-8 scroll-mt-32">
                            <div className="glass-card overflow-hidden">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 p-12 bg-surface-container-lowest/50">
                                        <h2 className="text-4xl font-headline font-bold text-[#e5e1e4] mb-6">Experience</h2>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-outline-variant/30 flex items-center justify-center shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-1 hover:scale-105 transition-transform duration-300">
                                                <div className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden relative border border-white/5">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src="/yokogawa.png" alt="Yokogawa Logo" className="w-full h-full object-cover" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">Yokogawa UAE</h3>
                                                <p className="text-white opacity-70 text-sm">Software Engineer Internship</p>
                                            </div>
                                        </div>
                                        <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-label uppercase mb-8">
                                            May 2025 – June 2025
                                        </span>
                                    </div>
                                    <div className="lg:w-1/2 p-12 space-y-6">
                                        <div className="flex gap-4">
                                            <span className="text-primary font-bold text-lg leading-none">01</span>
                                            <p className="text-on-surface-variant">Designed <span className="modern-highlighter">modular GUI</span> for Operator Training Simulators (OTS) using Python and CustomTkinter, enhancing operator interface responsiveness.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-primary font-bold text-lg leading-none">02</span>
                                            <p className="text-on-surface-variant">Built advanced LSTM and XGBoost models for sensor data analysis, achieving an <span className="modern-highlighter">18% improvement</span> in forecast accuracy.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-primary font-bold text-lg leading-none">03</span>
                                            <p className="text-on-surface-variant">Automated remote simulations through cloud integration, <span className="modern-highlighter">reducing manual deployment cycles by 40%</span>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Projects, Certifications, and Contact Sections */}
                    <div className="section-bg-6 w-full py-16">
                        <section className="max-w-7xl mx-auto px-8 mb-32 scroll-mt-40" id="projects">
                            <h2 className="text-4xl font-headline font-bold text-[#e5e1e4] mb-12">Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Project 1 */}
                                <div className="glass-card flex flex-col group hover:translate-y-[-8px] transition-all duration-300">
                                    <div className="h-48 rounded-t-[1.5rem] overflow-hidden relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" data-alt="abstract visualization of server data flow with purple and blue glowing connections in a dark void" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXKummhWbYNDiv15eLjMhBqTH_U9kU_dAeQaMnFT6P2VChkP2xmNOPTdHlbJAek-7v-JOdES9GwBrUzkxS84-xr4SSvHHQC1hFI4MmWFKtDDK4qJFaeedH7uutouv_8Wt_ijWGK0nLdBxRpKLk-OynuSbiIIj9SDjYxMtiOs7h2Vbw8y_sTaigUmzH1_N25yX-F8pOQWaUFlMGc5PsgWUk8m6dw-GZKPQny-MWUScmfpl8FIxPbUke8ybUCdqvATI-bsOM-fi8LMcB" alt="AvailAPI context visualization" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-headline font-bold mb-3">AvailAPI</h3>
                                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Engineered <span className="modern-highlighter">sub-60-second</span> incident detection for critical API infrastructure using high-performance monitoring stacks.</p>
                                        <div className="mt-auto flex flex-wrap gap-4 items-center justify-center mb-6">
                                            {[
                                                { name: "java", label: "Java" },
                                                { name: "spring", label: "Spring Boot" },
                                                { name: "postgresql", label: "PostgreSQL" },
                                                { name: "angular", label: "Angular" },
                                                { name: "docker", label: "Docker" }
                                            ].map((tech, idx) => (
                                                <div key={`${tech.name}-${idx}`} className="tooltip-container relative flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-xl bg-surface-container-high/40 backdrop-blur-md border border-white/5 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110">
                                                        <StackIcon
                                                            name={tech.name as any}
                                                            variant="light"
                                                            className={`w-full h-full ${['github', 'nextjs', 'flask'].includes(tech.name) ? 'white-icon' : ''} ${tech.name === 'aws' ? 'aws-logo-white' : ''}`}
                                                        />
                                                    </div>
                                                    <span className="tooltip-label">
                                                        {tech.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-auto flex items-center gap-3">
                                            <a href="https://avail-api.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
                                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                                                Live Demo
                                            </a>
                                            <a href="https://www.github.com/hirtic-s/AvailAPI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300" title="GitHub Repository">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Project 2 */}
                                <div className="glass-card flex flex-col group hover:translate-y-[-8px] transition-all duration-300">
                                    <div className="h-48 rounded-t-[1.5rem] overflow-hidden relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" data-alt="conceptual digital security vault with shimmering holographic lock and purple atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjj7a1nIvCSW09uCvU7tRNKH305AQuV0uXPaQBA5oSUCgwlNs1nHz5gAuSq-MZ7gawFrxjH-TglQ-XTvqxNHVRPw_8LyfLQnAXEBWPkE4du_u2VA6ZNbCjpj7R_jjDMWsGZ5oOYb_mS7T50Q0WuFGDZfm5WsYA1jqvE-mVj37A4OhbPQjyAkghbVsUdlItb8L7iSmYuIObXd65hRS4R55wXcm4hibcDIH3LHpI36B8h0Jey-c_f5LlBrjUUR4_4jnJ3A_TBHCEyYge" alt="Vanish Vault Concept" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-headline font-bold mb-3">Vanish Vault</h3>
                                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Architected secure, automated data disposal platform <span className="modern-highlighter">leveraging AWS infrastructure</span> for ephemeral storage management.</p>
                                        <div className="mt-auto flex flex-wrap gap-4 items-center justify-center mb-6">
                                            {[
                                                { name: "java", label: "Java" },
                                                { name: "spring", label: "Spring Boot" },
                                                { name: "aws", label: "AWS S3" },
                                                { name: "react", label: "React" },
                                                { name: "docker", label: "Docker" }
                                            ].map((tech, idx) => (
                                                <div key={`${tech.name}-${idx}`} className="tooltip-container relative flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-xl bg-surface-container-high/40 backdrop-blur-md border border-white/5 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110">
                                                        <StackIcon
                                                            name={tech.name as any}
                                                            variant="light"
                                                            className={`w-full h-full ${['github', 'nextjs', 'flask'].includes(tech.name) ? 'white-icon' : ''} ${tech.name === 'aws' ? 'aws-logo-white' : ''}`}
                                                        />
                                                    </div>
                                                    <span className="tooltip-label">
                                                        {tech.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-auto flex items-center gap-3">
                                            <a href="https://vanishvault.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
                                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                                                Live Demo
                                            </a>
                                            <a href="https://github.com/hirtic-s/vanishvault" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300" title="GitHub Repository">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Project 3 */}
                                <div className="glass-card flex flex-col group hover:translate-y-[-8px] transition-all duration-300">
                                    <div className="h-48 rounded-t-[1.5rem] overflow-hidden relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" data-alt="e-commerce interface elements floating in a deep purple digital space with soft shadow depth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSTm_F-F44s_UozqSBEaAysfj7JnIK6cNCrmIjQa5n9NiJawviSxcIcieuMhD5bOdRVkAkOFsVlVHkc_wjcX1KhtsJj2ViczoPq_gI-_I4kDtBsF4Kr39LNYMuT63zdFxpUjc9V4vzs1cBJNcr6VjYFsSB8PhL512oBHoWrlZ5tVViFK_Ozgbxb1Y7ZS1UhttzFbmpAKS9A9wZjhM0XZQUt7b86G_Cy11XcIOKk3znyAwc06_IklZbIcZ0NPs4qJeoyIhRdstjBZxx" alt="DealHive Visualization" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-headline font-bold mb-3">DealHive</h3>
                                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Full-stack price comparison engine designed to aggregate and <span className="modern-highlighter">normalize complex data</span> across multiple vendors.</p>
                                        <div className="mt-auto flex flex-wrap gap-4 items-center justify-center mb-8">
                                            {[
                                                { name: "react", label: "React" },
                                                { name: "nodejs", label: "Node.js" },
                                                { name: "postgresql", label: "PostgreSQL" },
                                                { name: "docker", label: "Docker" },
                                                { name: "tailwindcss", label: "Tailwind CSS" }
                                            ].map((tech, idx) => (
                                                <div key={`${tech.name}-${idx}`} className="tooltip-container relative flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-xl bg-surface-container-high/40 backdrop-blur-md border border-white/5 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110">
                                                        <StackIcon
                                                            name={tech.name as any}
                                                            variant="light"
                                                            className={`w-full h-full ${['github', 'nextjs', 'flask', 'aws'].includes(tech.name) ? 'white-icon' : ''}`}
                                                        />
                                                    </div>
                                                    <span className="tooltip-label">
                                                        {tech.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-auto">
                                            <a href="https://www.github.com/hirtic-s/DealHive" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300" title="GitHub Repository">
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Certifications Section */}
                        <section className="max-w-7xl mx-auto px-8 mb-32 scroll-mt-40" id="certifications">
                            <h2 className="text-4xl font-headline font-bold text-[#e5e1e4] mb-12">Certifications</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 border border-primary/20 bg-primary-container/5 hover:bg-primary-container/10 transition-all duration-300 hover:translate-y-[-8px]">
                                    <div className="w-16 h-16 rounded-2xl bg-surface-container-high/40 backdrop-blur-md border border-white/5 flex items-center justify-center p-3 transition-all duration-300 shadow-lg group-hover:scale-105">
                                        <StackIcon name="aws" variant="light" className="w-full h-full aws-logo-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-headline font-bold text-white">AWS Certified Cloud Practitioner</h4>
                                        <p className="text-xs text-[#10b981] mt-1 font-mono uppercase tracking-widest mb-4">ID: c5a46586-7b24-4f4e-a134</p>
                                        <a href="https://www.credly.com/badges/60dba673-b120-4d91-8fd5-bf8fc8f592a0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
                                            <span className="material-symbols-outlined text-sm">verified</span>
                                            Verify Certificate
                                        </a>
                                    </div>
                                </div>
                                <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 border border-tertiary/20 bg-tertiary-container/5 hover:bg-tertiary-container/10 transition-all duration-300 hover:translate-y-[-8px]">
                                    <div className="w-16 h-16 rounded-2xl bg-surface-container-high/40 backdrop-blur-md border border-white/5 flex items-center justify-center p-3 transition-all duration-300 shadow-lg group-hover:scale-105">
                                        <StackIcon name="microsoft" variant="light" className="w-full h-full" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-headline font-bold text-white">Microsoft Certified Azure AI Fundamentals</h4>
                                        <p className="text-xs text-[#10b981] mt-1 font-mono uppercase tracking-widest mb-4">ID: dUaa-DwW2</p>
                                        <a href="https://www.credly.com/badges/b4581db1-e0dd-44e0-9960-1d0a96c8c54f" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-tertiary/10 text-tertiary text-xs font-bold hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
                                            <span className="material-symbols-outlined text-sm">verified</span>
                                            Verify Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>

            </div>

            {/* Floating Navigation Menu - Outside animation to stay fixed at viewport bottom */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <nav className="glass-card flex items-center px-4 py-3 gap-2 border border-white/10 shadow-2xl backdrop-blur-3xl">
                    <Link className="flex flex-col items-center justify-center text-[#e5e1e4]/60 w-[84px] h-[60px] hover:text-[#e5e1e4] transition-all duration-200 group border border-transparent rounded-2xl" href="#home" scroll={false}>
                        <span className="material-symbols-outlined text-[24px] mb-[2px]">home</span>
                        <span className="font-label text-[9px] uppercase tracking-widest leading-none">Home</span>
                    </Link>
                    <Link className="flex flex-col items-center justify-center text-[#e5e1e4]/60 w-[84px] h-[60px] hover:text-[#e5e1e4] transition-all duration-200 group border border-transparent rounded-2xl" href="#about" scroll={false}>
                        <span className="material-symbols-outlined text-[24px] mb-[2px]">person</span>
                        <span className="font-label text-[9px] uppercase tracking-widest leading-none">About</span>
                    </Link>
                    <Link className="flex flex-col items-center justify-center text-[#e5e1e4]/60 w-[84px] h-[60px] hover:text-[#e5e1e4] transition-all duration-200 group border border-transparent rounded-2xl" href="#education" scroll={false}>
                        <span className="material-symbols-outlined text-[24px] mb-[2px]">school</span>
                        <span className="font-label text-[9px] uppercase tracking-widest leading-none">Education</span>
                    </Link>
                    <Link className="flex flex-col items-center justify-center text-[#e5e1e4]/60 w-[84px] h-[60px] hover:text-[#e5e1e4] transition-all duration-200 group border border-transparent rounded-2xl" href="#skills" scroll={false}>
                        <span className="material-symbols-outlined text-[24px] mb-[2px]">psychology</span>
                        <span className="font-label text-[9px] uppercase tracking-widest leading-none">Skills</span>
                    </Link>
                    <Link className="flex flex-col items-center justify-center text-[#e5e1e4]/60 w-[84px] h-[60px] hover:text-[#e5e1e4] transition-all duration-200 group border border-transparent rounded-2xl" href="#experience" scroll={false}>
                        <span className="material-symbols-outlined text-[24px] mb-[2px]">work</span>
                        <span className="font-label text-[9px] uppercase tracking-widest leading-none">Experience</span>
                    </Link>
                    <Link className="flex flex-col items-center justify-center text-[#e5e1e4]/60 w-[84px] h-[60px] hover:text-[#e5e1e4] transition-all duration-200 group border border-transparent rounded-2xl" href="#projects" scroll={false}>
                        <span className="material-symbols-outlined text-[24px] mb-[2px]">grid_view</span>
                        <span className="font-label text-[9px] uppercase tracking-widest leading-none">Projects</span>
                    </Link>
                    <Link className="flex flex-col items-center justify-center text-[#e5e1e4]/60 w-[84px] h-[60px] hover:text-[#e5e1e4] transition-all duration-200 group border border-transparent rounded-2xl" href="#certifications" scroll={false}>
                        <span className="material-symbols-outlined text-[24px] mb-[2px]">verified</span>
                        <span className="font-label text-[9px] uppercase tracking-widest leading-none">Certs</span>
                    </Link>

                </nav>
            </div>
        </>
    );
}
