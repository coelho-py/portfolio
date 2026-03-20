interface AboutProps {
  visible: boolean;
}

const stats = [
  { value: "2+", label: "Anos de experiência" },
  { value: "10+", label: "Projetos concluídos" },
  { value: "5+", label: "Tecnologias dominadas" },
];

export default function AboutSection({ visible }: AboutProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Sobre Mim</h2>
      <div className="w-12 h-1 bg-primary rounded-full mb-8" />
      
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Sou um desenvolvedor back-end apaixonado por criar soluções eficientes e escaláveis.
            Minha abordagem é centrada em <span className="text-foreground font-medium">código limpo</span>,
            princípios <span className="text-foreground font-medium">SOLID</span> e
            testes automatizados.
          </p>
          <p>
            Tenho experiência com JavaScript, Python, SQL e desenvolvimento de APIs RESTful.
            Busco constantemente aprimorar minhas habilidades e aprender novas tecnologias
            para entregar software de alta qualidade.
          </p>
          <p>
            Além do código, tenho conhecimento sólido em ambientes Linux e Windows,
            versionamento com Git, e boas práticas de desenvolvimento colaborativo.
          </p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-card rounded-xl p-5 glow-border transition-all duration-500 ${
                visible ? "animate-slide-right" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms`, animationFillMode: "forwards" }}
            >
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
