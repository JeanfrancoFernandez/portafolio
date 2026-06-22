export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-3">// sobre_mi</p>
        <h2 className="mb-10 font-mono text-2xl font-bold text-ink sm:text-3xl">
          Construyo software{" "}
          <span className="text-cyan">que funciona</span> y que{" "}
          <span className="text-coral">resiste</span>.
        </h2>

        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-muted">
            <p>
              Soy{" "}
              <strong className="text-ink">
                Full Stack Developer e Ingeniero en Ciberseguridad
              </strong>
              . Mi trabajo combina dos disciplinas que casi nunca conviven en
              una sola persona: construir aplicaciones web y pensar como
              quien intentaría romperlas.
            </p>
            <p>
              Desarrollo aplicaciones y APIs REST con{" "}
              <strong className="text-ink">
                Node.js, .NET, Angular, TypeScript y SQL
              </strong>
              , aplicando desde el primer commit buenas prácticas de
              seguridad: control de accesos, validación de entradas,
              hardening de servidores y revisión de vulnerabilidades antes de
              que lleguen a producción.
            </p>
            <p>
              Esa doble formación me da una ventaja poco común: no solo sé
              construir un sistema, también sé cómo lo atacarían — y eso
              cambia por completo las decisiones de arquitectura que tomo
              desde el día uno.
            </p>
            <p>
              Actualmente estoy ampliando mis conocimientos en{" "}
              <strong className="text-ink">Cloud Development</strong> (Azure
              y Google Cloud) para diseñar soluciones cloud-ready, seguras
              desde la infraestructura hacia arriba.
            </p>
          </div>

          <aside className="rounded-lg border border-border bg-surface p-6">
            <p className="mb-4 font-mono text-xs text-cyan">¿qué aporto?</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-coral">›</span>
                Software robusto, pensado para producción y para resistir.
              </li>
              <li className="flex gap-2">
                <span className="text-coral">›</span>
                Mentalidad de atacante aplicada a decisiones de defensa.
              </li>
              <li className="flex gap-2">
                <span className="text-coral">›</span>
                Comunicación clara con equipos técnicos y de negocio.
              </li>
              <li className="flex gap-2">
                <span className="text-coral">›</span>
                Autonomía para resolver problemas reales, de punta a punta.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
