"use client";

import { useEffect, useRef, useState } from "react";

type Line = {
  type: "boot" | "input" | "output";
  text: string;
};

const BOOT_SEQUENCE: Line[] = [
  { type: "boot", text: "$ whoami" },
  { type: "output", text: "jeanfranco_fernandez" },
  { type: "boot", text: "$ cat rol.txt" },
  { type: "output", text: "Full Stack Developer & Ingeniero en Ciberseguridad" },
  { type: "boot", text: "$ ./status --check" },
  { type: "output", text: "[OK] backend ............ asegurado" },
  { type: "output", text: "[OK] frontend ............ desplegado" },
  { type: "output", text: "[OK] disponible_para_trabajar  true" },
];

const HELP_TEXT = [
  "comandos disponibles:",
  "  sobre-mi    -> quién soy",
  "  skills      -> stack técnico",
  "  proyectos   -> trabajo reciente",
  "  contacto    -> cómo escribirme",
  "  clear       -> limpiar pantalla",
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [revealed, setRevealed] = useState(0);
  const [history, setHistory] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (revealed >= BOOT_SEQUENCE.length) return;
    const t = setTimeout(() => setRevealed((r) => r + 1), 380);
    return () => clearTimeout(t);
  }, [revealed]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "nearest" });
  }, [history, revealed]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const out: Line[] = [{ type: "input", text: cmd || " " }];

    switch (cmd) {
      case "help":
        HELP_TEXT.forEach((t) => out.push({ type: "output", text: t }));
        break;
      case "sobre-mi":
      case "about":
        out.push({ type: "output", text: "abriendo ~/sobre-mi ..." });
        scrollToId("about");
        break;
      case "skills":
        out.push({ type: "output", text: "abriendo ~/skills ..." });
        scrollToId("skills");
        break;
      case "proyectos":
      case "projects":
        out.push({ type: "output", text: "abriendo ~/proyectos ..." });
        scrollToId("projects");
        break;
      case "contacto":
      case "contact":
        out.push({ type: "output", text: "abriendo ~/contacto ..." });
        scrollToId("contact");
        break;
      case "sudo hire-me":
      case "sudo":
        out.push({
          type: "output",
          text: "[permission denied] eso se resuelve en una entrevista, no en la terminal 😉",
        });
        break;
      case "clear":
        setHistory([]);
        setValue("");
        return;
      case "":
        return;
      default:
        out.push({ type: "output", text: `bash: ${cmd}: comando no encontrado — escribe 'help'` });
    }

    setHistory((h) => [...h, ...out]);
    setValue("");
  }

  const bootDone = revealed >= BOOT_SEQUENCE.length;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute inset-0 bg-grid bg-[length:32px_32px] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      <div className="relative z-10 w-full max-w-3xl">
        <p className="section-label mb-3">// terminal_de_acceso</p>

        <div className="rounded-lg border border-border bg-surface/90 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-coral/70" />
            <span className="h-3 w-3 rounded-full bg-cyan/50" />
            <span className="h-3 w-3 rounded-full bg-muted/40" />
            <span className="ml-2 font-mono text-xs text-muted">jeanfranco@portfolio:~</span>
          </div>

          <div className="max-h-[420px] overflow-y-auto px-5 py-5 font-mono text-sm leading-relaxed">
            {BOOT_SEQUENCE.slice(0, revealed).map((line, i) => (
              <p
                key={i}
                className={
                  line.type === "boot"
                    ? "text-ink animate-fadeUp"
                    : "text-cyan animate-fadeUp"
                }
              >
                {line.text}
              </p>
            ))}

            {bootDone &&
              history.map((line, i) => (
                <p
                  key={`h-${i}`}
                  className={
                    line.type === "input"
                      ? "text-ink"
                      : line.type === "output"
                      ? "whitespace-pre-wrap text-muted"
                      : "text-ink"
                  }
                >
                  {line.type === "input" ? (
                    <>
                      <span className="text-coral">guest@jf</span>
                      <span className="text-muted">:~$ </span>
                      {line.text}
                    </>
                  ) : (
                    line.text
                  )}
                </p>
              ))}

            {bootDone && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  runCommand(value);
                }}
                className="flex items-center gap-2 pt-1"
              >
                <span className="text-coral">guest@jf</span>
                <span className="text-muted">:~$</span>
                <input
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="escribe 'help'"
                  className="flex-1 bg-transparent text-ink placeholder:text-muted/60 outline-none"
                  aria-label="Terminal de comandos del portafolio"
                />
                <span className="h-4 w-2 animate-blink bg-cyan" />
              </form>
            )}
            <div ref={bottomRef} />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted">
            scroll o escribe un comando para navegar
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="rounded border border-cyan/40 px-4 py-2 font-mono text-xs text-cyan transition-colors hover:bg-cyan/10"
            >
              ver proyectos
            </a>
            <a
              href="#contact"
              className="rounded border border-coral/40 px-4 py-2 font-mono text-xs text-coral transition-colors hover:bg-coral/10"
            >
              contactarme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
