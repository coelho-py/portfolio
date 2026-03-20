interface SkillsProps {
  visible: boolean;
}

const skillCategories = [
  {
    title: "Linguagens",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Back-end & Frameworks",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "REST APIs", level: 80 },
      { name: "Django", level: 50 },
    ],
  },
  {
    title: "Bancos de Dados",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 55 },
      { name: "SQLite", level: 65 },
    ],
  },
  {
    title: "Ferramentas & SO",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Linux", level: 80 },
      { name: "Windows", level: 90 },
      { name: "Docker", level: 45 },
    ],
  },
];

export default function SkillsSection({ visible }: SkillsProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Habilidades Técnicas</h2>
      <div className="w-12 h-1 bg-primary rounded-full mb-10" />

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((cat, ci) => (
          <div
            key={cat.title}
            className={`bg-card rounded-xl p-6 glow-border transition-all duration-500 ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${ci * 120}ms`, animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl">{cat.icon}</span>
              <h3 className="font-semibold text-lg">{cat.title}</h3>
            </div>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-primary to-accent rounded-full ${
                        visible ? "animate-progress-fill" : "w-0"
                      }`}
                      style={{ "--progress-width": `${skill.level}%`, animationDelay: `${ci * 120 + 300}ms`, animationFillMode: "forwards" } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
