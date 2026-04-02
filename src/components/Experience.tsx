export default function Experience() {
  const points = [
    "Designed modular GUI for Operator Training Simulators (OTS) using Python and CustomTkinter, enhancing operator interface responsiveness.",
    "Built advanced LSTM and XGBoost models for sensor data analysis, achieving an 18% improvement in forecast accuracy.",
    "Automated remote simulations through cloud integration, reducing manual deployment cycles by 40%.",
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-20 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-white">Experience</h2>
            <div className="mt-6 bg-card-bg border border-card-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Yokogawa UAE</h3>
                  <p className="text-white opacity-80 text-xs">Software Engineer Intern</p>
                </div>
              </div>
              <span className="inline-block bg-purple/20 text-purple-light text-xs px-3 py-1 rounded-full">
                MAY 2025 &mdash; JUNE 2025
              </span>
            </div>
          </div>

          {/* Right - Points */}
          <div className="md:w-2/3 flex flex-col gap-6">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-purple-light font-bold text-lg mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-muted text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
