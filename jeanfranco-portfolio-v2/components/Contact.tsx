const EMAIL = "jeanfrancolovera@gmail.com";
const WHATSAPP_NUMBER = "56959246898"; // +56 9 5924 6898
// TODO: reemplaza estos dos links cuando tengas tus URLs reales.
const GITHUB_URL = "https://github.com/JeanfrancoFernandez";
const LINKEDIN_URL = "https://www.linkedin.com/in/jeanfranco-fernandez-63660a1b7/";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label mb-3">// contacto</p>
        <h2 className="mb-4 font-mono text-2xl font-bold text-ink sm:text-3xl">
          ¿Buscas un Full Stack Developer que también piensa en seguridad?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-muted">
          Si tienes un proyecto, una vacante o una idea que requiere
          construir bien y construir seguro, escríbeme. Estoy disponible
          para nuevos desafíos.
        </p>

        <div className="mb-10 flex flex-col items-center gap-2 font-mono text-sm">
          <a href={`mailto:${EMAIL}`} className="text-ink hover:text-cyan">
            📩 {EMAIL}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-cyan"
          >
            📱 +56 9 5924 6898
          </a>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 font-mono text-xs">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border px-4 py-2 text-muted hover:border-cyan/40 hover:text-cyan"
          >
            ◆ GitHub →
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border px-4 py-2 text-muted hover:border-cyan/40 hover:text-cyan"
          >
            ▣ LinkedIn →
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded border border-border px-4 py-2 text-muted hover:border-cyan/40 hover:text-cyan"
          >
            ✉ Email →
          </a>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded border border-coral/50 px-6 py-3 font-mono text-sm text-coral transition-colors hover:bg-coral/10"
        >
          Escríbeme por WhatsApp →
        </a>
      </div>
    </section>
  );
}
