import { useState, useEffect } from "react";
import pedroAvatar from "@/assets/pedro-avatar.png";

const terminalLines = [
  "$ whoami",
  "pedro-coelho",
  "$ cat skills.txt",
  "JavaScript, Python, SQL, HTML, CSS",
  "$ uname -a",
  "Linux dev-machine 6.1.0 x86_64",
  "$ echo $ROLE",
  "Back-end Developer",
];

export default function HeroSection() {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    const isCommand = line.startsWith("$");
    const speed = isCommand ? 50 : 10;

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setTypedLines((prev) => {
          const copy = [...prev];
          copy[currentLine] = line.slice(0, currentChar + 1);
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setTypedLines((prev) => [...prev, ""]);
      }, isCommand ? 400 : 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left - Text */}
        <div className="order-2 lg:order-1 animate-fade-up">
          <p className="font-mono text-sm text-primary mb-4">Olá, eu sou</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] mb-4">
            Pedro{" "}
            <span className="text-gradient">Coelho</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
            Back-end Developer
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
            Desenvolvedor focado em construir sistemas robustos e escaláveis com
            JavaScript, Python, SQL e boas práticas de engenharia de software.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97] shadow-lg shadow-primary/25"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Entrar em contato
            </a>
            <a
              href="https://github.com/coelho-py"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary/80 transition-colors active:scale-[0.97]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right - Terminal + Avatar */}
        <div className="order-1 lg:order-2 flex flex-col items-center gap-6" style={{ animationDelay: "200ms" }}>
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden glow-purple ring-2 ring-primary/20">
              <img
                src={pedroAvatar}
                alt="Pedro Coelho"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-terminal-text rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          </div>

          {/* Terminal */}
          <div className="w-full max-w-md bg-terminal-bg rounded-xl border border-terminal-border overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-border/50">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm text-terminal-text min-h-[160px]">
              {typedLines.map((line, i) => (
                <div key={i} className={`${line.startsWith("$") ? "text-muted-foreground" : "text-terminal-text"} leading-relaxed`}>
                  {line}
                </div>
              ))}
              <span className={`inline-block w-2 h-4 bg-terminal-text ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
