"use client";

import { useState } from "react";

const links = [
  { label: "~/inicio", href: "#home" },
  { label: "~/sobre-mi", href: "#about" },
  { label: "~/proyectos", href: "#projects" },
  { label: "~/contacto", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-sm font-bold text-ink hover:text-cyan transition-colors"
        >
          <span className="text-muted">$</span> jf<span className="text-coral">_</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted hover:text-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-border px-6 py-5 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-muted hover:text-cyan transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
