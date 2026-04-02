const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    id: "C5A46586-7B24-4F4E-A134",
    color: "bg-[#1a2332]",
    iconColor: "text-[#48bb78]",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    id: "DUAA-DWW2",
    color: "bg-[#2a1a1a]",
    iconColor: "text-[#e53e3e]",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className={`${cert.color} border border-card-border rounded-xl p-5 flex items-center gap-4`}
            >
              <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center flex-shrink-0">
                <svg
                  className={`w-5 h-5 ${cert.iconColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={cert.icon}
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  {cert.title}
                </h3>
                <p className="text-[#10b981] text-xs mt-1">ID: {cert.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
