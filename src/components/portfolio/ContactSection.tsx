import { useState, useCallback } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

interface ContactProps {
  visible: boolean;
}

export default function ContactSection({ visible }: ContactProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = useCallback(() => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Nome é obrigatório";
    if (!form.email.trim()) errs.email = "Email é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email inválido";
    if (!form.message.trim()) errs.message = "Mensagem é obrigatória";
    return errs;
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // Try EmailJS first
      const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

      if (serviceId && templateId && publicKey) {
        // Use EmailJS if configured
        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: 'Pedro Coelho',
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback: Use Formspree (simpler setup)
        const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your_form_id';

        if (formspreeEndpoint.includes('your_form_id')) {
          throw new Error('Configure EmailJS ou Formspree. Veja EMAILJS_SETUP.md');
        }

        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Falha no envio');
        }
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Email send failed:', err);
      setError('Erro ao enviar mensagem. Configure EmailJS (veja EMAILJS_SETUP.md) ou use o email diretamente.');
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("pedroncoelhon@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-2">Contato</h2>
      <div className="w-12 h-1 bg-primary rounded-full mb-10" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1.5">Nome</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
              placeholder="Seu nome"
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">Mensagem</label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none"
              placeholder="Sua mensagem..."
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
          {error && (
            <p className="text-destructive text-sm text-center animate-fade-in">
              {error}
            </p>
          )}
          {submitted && (
            <p className="text-terminal-text text-sm text-center animate-fade-in">
              ✓ Mensagem enviada com sucesso!
            </p>
          )}
        </form>

        {/* Links */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Estou sempre aberto a novas oportunidades e colaborações.
            Entre em contato por qualquer um dos canais abaixo.
          </p>

          <div className="space-y-3">
            <a
              href="https://github.com/coelho-py"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card rounded-lg p-4 glow-border hover:border-primary/50 transition-colors group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground group-hover:text-primary transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <div>
                <div className="font-medium text-sm">GitHub</div>
                <div className="text-xs text-muted-foreground">github.com/coelho-py</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/pedrocoelhopy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card rounded-lg p-4 glow-border hover:border-primary/50 transition-colors group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground group-hover:text-primary transition-colors"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <div>
                <div className="font-medium text-sm">LinkedIn</div>
                <div className="text-xs text-muted-foreground">Pedro Coelho</div>
              </div>
            </a>

            <button
              onClick={copyEmail}
              className="w-full flex items-center gap-3 bg-card rounded-lg p-4 glow-border hover:border-primary/50 transition-colors group text-left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground group-hover:text-primary transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <div>
                <div className="font-medium text-sm">Email</div>
                <div className="text-xs text-muted-foreground">
                  {copied ? "✓ Copiado!" : "pedroncoelhon@gmail.com — clique para copiar"}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
