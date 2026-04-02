const skillCategories = [
  {
    title: "Backend & Frameworks",
    skills: ["Spring Boot", "Spring Security", "Quartz Scheduler", "Node.js", "Express.js"],
  },
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Redis", "S3"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "DynamoDB", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-20 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left */}
          <div className="md:w-1/4">
            <h2 className="text-4xl font-bold text-white">Skill Arsenal</h2>
            <p className="text-muted mt-3 text-sm">
              Categorized technical expertise and tools.
            </p>
          </div>

          {/* Right - Grid */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card-bg border border-card-border rounded-xl p-5"
              >
                <h3 className="text-white font-semibold text-sm mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-badge-bg border border-badge-border text-xs text-muted px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
