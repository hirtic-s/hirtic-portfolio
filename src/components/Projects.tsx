import Image from "next/image";

const projects = [
  {
    title: "AvailAPI",
    description:
      <>Engineered <span className="modern-highlighter">sub-60-second</span> incident detection for critical API infrastructure using high-performance monitoring stacks.</>,
    tags: ["Spring Boot", "PostgreSQL", "Docker"],
    image: "/projects/availapi.jpg",
    github: "https://www.github.com/hirtic-s/AvailAPI",
    demo: "https://avail-api.vercel.app"
  },
  {
    title: "Vanish Vault",
    description:
      <>Architected secure, automated data disposal platform <span className="modern-highlighter">leveraging AWS infrastructure</span> for ephemeral storage management.</>,
    tags: ["AWS S3", "DynamoDB", "React"],
    image: "/projects/vanishvault.jpg",
    github: "https://github.com/hirtic-s/vanishvault",
    demo: "https://vanishvault.vercel.app"
  },
  {
    title: "DealHive",
    description:
      <>Full-stack price comparison engine designed to aggregate and <span className="modern-highlighter">normalize complex data</span> across multiple vendors.</>,
    tags: ["Node.js", "Express.js", "Docker"],
    image: "/projects/dealhive.jpg",
    github: "https://www.github.com/hirtic-s/DealHive"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card bg-card-bg border border-card-border rounded-xl overflow-hidden flex flex-col group hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="relative h-44 bg-[#1a1a2e]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-badge-bg border border-badge-border text-[10px] text-muted px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex items-center gap-3">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-[10px] font-bold hover:bg-primary hover:text-on-primary transition-all duration-300">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300" title="GitHub Repository">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
