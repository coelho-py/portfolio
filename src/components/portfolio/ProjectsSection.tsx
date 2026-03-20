import { useState } from "react";

interface ProjectsProps {
  visible: boolean;
}

const projects = [
  {
    name: "Criptografador Personalizado",
    description: "Sistema de criptografia customizável construído com JavaScript vanilla. Permite criar algoritmos de cifra personalizados para codificar e decodificar mensagens.",
    challenges: "Implementação de múltiplos algoritmos de cifra com interface intuitiva e tratamento de edge cases em caracteres especiais.",
    tags: ["JavaScript", "HTML", "CSS", "Criptografia"],
    github: "https://github.com/coelho-py",
    demo: "/projetos/criptografador/index.html",
    category: "JavaScript",
    icon: "🔐",
    gradient: "from-violet-600 to-purple-900",
  },
  {
    name: "Rabbit Decisões",
    description: "Aplicação web interativa que utiliza algoritmo de decisão binária para ajudar em escolhas do dia a dia com respostas aleatórias inteligentes.",
    challenges: "Criação de um algoritmo de decisão justo e uma interface divertida e responsiva.",
    tags: ["JavaScript", "CSS", "Algoritmos"],
    github: "https://github.com/coelho-py",
    demo: "/projetos/rabbit-decisoes/index.html",
    category: "JavaScript",
    icon: "🐰",
    gradient: "from-pink-600 to-rose-900",
  },
  {
    name: "Algoritmo Simples",
    description: "Demonstração de um algoritmo fundamental em JavaScript de umn calculo de porcetagem.",
    challenges: "Visualização clara de processos algorítmicos para fins educativos.",
    tags: ["JavaScript", "Algoritmos", "Matematica"],
    github: "https://github.com/coelho-py",
    demo: "/projetos/algoritmo-simples/index.html",
    category: "JavaScript",
    icon: "⚙️",
    gradient: "from-slate-600 to-zinc-900",
  },
];

const categories = ["Todos", "JavaScript", "Python"];

export default function ProjectsSection({ visible }: ProjectsProps) {
  const [filter, setFilter] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Projetos</h2>
      <div className="w-12 h-1 bg-primary rounded-full mb-8" />

      {/* Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${
              filter === cat
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, i) => (
          <article
            key={project.name}
            className={`bg-card rounded-xl overflow-hidden glow-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group flex flex-col ${
              visible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
            onMouseEnter={() => setHoveredProject(project.name)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Preview Header */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-40 overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 ${hoveredProject === project.name ? "scale-110" : "scale-100"}`} />
              
              {/* Decorative code lines */}
              <div className="absolute inset-0 opacity-[0.12] p-4 font-mono text-[10px] text-white leading-relaxed select-none overflow-hidden">
                <div>{'>'} npm start</div>
                <div>{'>'} loading modules...</div>
                <div>{'>'} server running on :3000</div>
                <div>{'>'} compiling assets...</div>
                <div>{'>'} build complete ✓</div>
              </div>

              {/* Icon */}
              <div className={`absolute inset-0 flex items-center justify-center text-5xl transition-all duration-500 ${hoveredProject === project.name ? "scale-125 opacity-90" : "scale-100 opacity-70"}`}>
                {project.icon}
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.name ? "opacity-100" : "opacity-0"}`}>
                <span className="text-white text-sm font-medium flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Ver Projeto
                </span>
              </div>

              {/* Browser dots */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
              </div>
            </a>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Código
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Executar
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
