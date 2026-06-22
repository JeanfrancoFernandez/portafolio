type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

// TODO: reemplaza estos 3 proyectos con tus proyectos reales (título, descripción, tecnologías y link).
// Mientras no los reemplaces, esta sección mostrará contenido de ejemplo.
const projects: Project[] = [
  {
    id: "01",
    title: "Reemplaza con el nombre de tu proyecto",
    description:
      "Describe en 1-2 líneas qué problema resuelve este proyecto y qué hiciste tú específicamente.",
    tags: ["Stack", "Usado", "Aquí"],
    href: "#",
  },
  {
    id: "02",
    title: "Reemplaza con el nombre de tu proyecto",
    description:
      "Describe en 1-2 líneas qué problema resuelve este proyecto y qué hiciste tú específicamente.",
    tags: ["Stack", "Usado", "Aquí"],
    href: "#",
  },
  {
    id: "03",
    title: "Reemplaza con el nombre de tu proyecto",
    description:
      "Describe en 1-2 líneas qué problema resuelve este proyecto y qué hiciste tú específicamente.",
    tags: ["Stack", "Usado", "Aquí"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-3">// proyectos</p>
        <h2 className="mb-3 font-mono text-2xl font-bold text-ink sm:text-3xl">
          Trabajo reciente.
        </h2>
        <p className="mb-10 text-sm text-muted">
          Edita este arreglo en <code className="text-cyan">components/Projects.tsx</code> con tus proyectos reales.
        </p>

        <div className="space-y-4">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.href}
              className="group block rounded-lg border border-border bg-surface p-6 transition-colors hover:border-cyan/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-coral">{p.id}</span>
                  <h3 className="mt-1 font-mono text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-cyan">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
