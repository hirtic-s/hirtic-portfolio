export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Left */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
            <p className="text-muted mt-3 text-sm">
              Let&apos;s build the next digital masterpiece together.
            </p>
          </div>

          {/* Right */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <p className="text-purple-light text-xs uppercase tracking-wider mb-1 font-semibold">
                  Email Me
                </p>
                <a
                  href="mailto:hirtic2004@gmail.com"
                  className="text-white text-sm hover:text-purple-light transition-colors"
                >
                  hirtic2004@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-purple-light text-xs uppercase tracking-wider mb-1 font-semibold">
                  Call Me
                </p>
                <p className="text-white text-sm">+91 9344158842</p>
                <p className="text-white text-sm">+971 56 1898029</p>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-purple-light text-xs uppercase tracking-wider mb-1 font-semibold">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/hirtic-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm hover:text-purple-light transition-colors"
                >
                  linkedin.com/in/hirtic-s
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center">
              <a
                href="mailto:hirtic2004@gmail.com"
                className="inline-flex items-center gap-2 bg-purple/20 border border-purple/40 text-purple-light px-8 py-3 rounded-full text-sm font-medium hover:bg-purple/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding for navbar */}
      <div className="h-20" />
    </section>
  );
}
