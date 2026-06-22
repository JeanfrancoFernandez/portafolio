const dev = [
  "Node.js",
  "TypeScript",
  "JavaScript",
  "React",
  ".NET",
  "Angular",
  "SQL / PostgreSQL",
  "APIs REST",
  "HTML / CSS",
  "Git / GitHub",
  "Azure",
  "Google Cloud",
];

// TODO: ajusta esta lista a tus herramientas y certificaciones reales de ciberseguridad.
const security = [
  "CEH (Certified Ethical Hacker)",
  "CompTIA Security+",
  "Ethical Hacking",
  "Network Security",
  "OWASP Top 10",
  "Linux",
  "Wireshark",
  "Nmap",
  "Burp Suite",
  "Hardening de servidores",
];

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-cyan/40 hover:text-ink">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-3">// stack_tecnico</p>
        <h2 className="mb-10 font-mono text-2xl font-bold text-ink sm:text-3xl">
          Dos pilares, un solo perfil.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs text-cyan">01 — desarrollo</p>
            <div className="flex flex-wrap gap-2">
              {dev.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs text-coral">02 — ciberseguridad</p>
            <div className="flex flex-wrap gap-2">
              {security.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
