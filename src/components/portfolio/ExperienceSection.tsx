interface ExperienceProps {
  visible: boolean;
}

const experiences = [
  {
    title: "Estudante de ADS",
    company: "Análise e Desenvolvimento de Sistemas",
    period: "2023 — 2025",
    description: "Formação em ADS com foco em desenvolvimento back-end, bancos de dados relacionais, e engenharia de software. Projetos práticos com JavaScript, Python e SQL.",
    type: "education" as const,
  },
  {
    title: "Desenvolvedor Back-end",
    company: "Projetos Freelance",
    period: "2023 — Presente",
    description: "Desenvolvimento de APIs, automações e sistemas web utilizando JavaScript, Python e bancos de dados SQL. Foco em código limpo e soluções escaláveis.",
    type: "work" as const,
  },
  {
    title: "Estudante de Segurança Cibernética",
    company: "Segurança da Informação",
    period: "2026 — Presente",
    description: "Cursando Segurança Cibernética com foco em análise de vulnerabilidades, testes de penetração, criptografia e proteção de sistemas e redes.",
    type: "education" as const,
  },

];

const certifications = [
  "JavaScript — Fundamentos e ES6+",
  "Python — Desenvolvimento Back-end",
  "SQL — Bancos de Dados Relacionais",
  "Git & GitHub — Versionamento",
  "Linux — Administração Básica",
];

export default function ExperienceSection({ visible }: ExperienceProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Experiência & Formação</h2>
      <div className="w-12 h-1 bg-primary rounded-full mb-10" />

      <div className="grid md:grid-cols-5 gap-12">
        {/* Timeline */}
        <div className="md:col-span-3">
          <div className="relative pl-8 border-l-2 border-primary/20 space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className={`relative ${visible ? "animate-slide-left" : "opacity-0"}`}
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "forwards" }}
              >
                <div className="absolute -left-[calc(1rem+5px)] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="text-xs font-mono text-primary mb-1">{exp.period}</div>
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <div className="text-sm text-muted-foreground mb-2">{exp.company}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg mb-4">Certificações & Cursos</h3>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <div
                key={cert}
                className={`flex items-center gap-3 bg-card rounded-lg p-3 glow-border ${
                  visible ? "animate-slide-right" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80 + 200}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
