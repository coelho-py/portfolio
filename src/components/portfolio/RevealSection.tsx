interface RevealProps {
  id: string;
  visible: boolean;
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function RevealSection({ id, visible, children, className = "", direction = "up", delay = 0 }: RevealProps) {
  const animClass = visible
    ? direction === "left"
      ? "animate-slide-left"
      : direction === "right"
      ? "animate-slide-right"
      : "animate-fade-up"
    : "opacity-0";

  return (
    <section
      id={id}
      data-reveal
      className={`${animClass} ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </section>
  );
}
