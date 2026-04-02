import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-muted uppercase tracking-widest">
            Open to Work
          </span>
        </div>
        <div />
        <a
          href="https://drive.google.com/file/d/1G1wTw3AlolQoNWvG2wbgmdSQIbRSGrLB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-purple rounded-full px-4 py-1.5 text-xs text-purple-light hover:bg-purple/10 transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex items-center px-6 md:px-12 lg:px-20 py-12">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <p className="text-purple-light text-xs uppercase tracking-[0.3em] mb-4 font-semibold">
              Software Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Hirtic</span>
              <br />
              <span className="gradient-text">Selvavinayagam</span>
            </h1>
            <p className="mt-6 text-muted text-base md:text-lg max-w-lg leading-relaxed">
              Specializing in robust backend architectures and predictive
              modeling to build secure, scalable, and intelligent software
              ecosystems.
            </p>
          </div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-card-border">
            <Image
              src="/profile.jpg"
              alt="Hirtic Selvavinayagam"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
