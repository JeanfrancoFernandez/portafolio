import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jeanfranco Fernandez | Full Stack Developer & Cybersecurity Engineer",
  description:
    "Portafolio de Jeanfranco Fernandez — Full Stack Developer e Ingeniero en Ciberseguridad. Desarrollo de software seguro, de extremo a extremo.",
  openGraph: {
    title: "Jeanfranco Fernandez | Full Stack Developer & Cybersecurity Engineer",
    description:
      "Portafolio de Jeanfranco Fernandez — Full Stack Developer e Ingeniero en Ciberseguridad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${mono.variable} ${sans.variable} font-sans antialiased bg-bg text-ink`}>
        {children}
      </body>
    </html>
  );
}
