export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-white">Education</h2>
            <p className="text-muted mt-3 text-sm">
              Academic milestones and foundational growth.
            </p>
          </div>

          {/* Right - Timeline */}
          <div className="md:w-2/3 relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-card-border" />

            {/* VIT */}
            <div className="relative pl-12 pb-12">
              <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-purple timeline-dot" />
              <div className="bg-card-bg border border-card-border rounded-xl p-6">
                <span className="inline-block bg-purple/20 text-purple-light text-xs px-3 py-1 rounded-full mb-3">
                  2021 &mdash; 2025
                </span>
                <h3 className="text-xl font-semibold text-[#10b981]">
                  Vellore Institute of Technology
                </h3>
                <p className="text-muted text-sm mt-1">
                  B.Tech in Computer Science Engineering
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-card-bg border border-card-border p-4 rounded-xl">
                    <p className="text-xs text-muted uppercase mb-1">CGPA</p>
                    <p className="text-lg font-bold text-white">8.06/10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* School */}
            <div className="relative pl-12">
              <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-purple timeline-dot" />
              <div className="bg-card-bg border border-card-border rounded-xl p-6">
                <span className="inline-block text-muted text-xs uppercase tracking-wider mb-2">
                  Secondary &amp; Senior Secondary
                </span>
                <h3 className="text-xl font-semibold text-[#10b981]">
                  Asian International Private School
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-card-bg border border-card-border p-4 rounded-xl">
                    <p className="text-xs text-muted uppercase mb-1">Grade 12</p>
                    <p className="text-lg font-bold text-white">86.0%</p>
                  </div>
                  <div className="bg-card-bg border border-card-border p-4 rounded-xl">
                    <p className="text-xs text-muted uppercase mb-1">Grade 10</p>
                    <p className="text-lg font-bold text-white">90.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
