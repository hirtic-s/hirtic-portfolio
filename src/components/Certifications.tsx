import StackIcon from "tech-stack-icons";

const certs = [
  {
    title: "AWS Certified Cloud Practitioner",
    id: "C5A46586-7B24-4F4E-A134",
    color: "bg-[#1a2332]",
    iconName: "aws",
    verificationUrl: "https://www.credly.com/badges/60dba673-b120-4d91-8fd5-bf8fc8f592a0"
  },
  {
    title: "Microsoft Certified Azure AI Fundamentals",
    id: "DUAA-DWW2",
    color: "bg-[#2a1a1a]",
    iconName: "microsoft",
    verificationUrl: "https://www.credly.com/earner/earned/badge/b4581db1-e0dd-44e0-9960-1d0a96c8c54f"
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
              className={`${cert.color} border border-card-border rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-lg`}
            >
              <div className="w-14 h-14 rounded-lg bg-black/30 flex items-center justify-center flex-shrink-0 p-2">
                <StackIcon 
                  name={cert.iconName as any} 
                  variant="light" 
                  className={`w-full h-full ${cert.iconName === 'aws' ? 'aws-logo-white' : ''}`} 
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-white font-semibold text-base mb-1">
                  {cert.title}
                </h3>
                <p className="text-[#10b981] text-xs font-mono mb-4 uppercase tracking-wider">ID: {cert.id}</p>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/80 text-xs font-medium hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Verify Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
