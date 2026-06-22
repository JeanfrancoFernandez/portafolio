const GITHUB_URL = "https://github.com/JeanfrancoFernandez";
const LINKEDIN_URL = "https://www.linkedin.com/in/jeanfranco-fernandez-63660a1b7/";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>
          <span className="text-muted">$</span> jf_{" "}
          <span className="text-muted">© 2026 Jeanfranco Fernandez. Construido con Next.js.</span>
        </p>
        <div className="flex gap-4">
          <a href={GITHUB_URL} className="hover:text-cyan">
            GitHub
          </a>
          <a href={LINKEDIN_URL} className="hover:text-cyan">
            LinkedIn
          </a>
          <a href="mailto:jeanfrancolovera@gmail.com" className="hover:text-cyan">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
