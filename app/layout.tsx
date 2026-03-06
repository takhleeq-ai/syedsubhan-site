import "./globals.css";
import Link from "next/link";
import { cvProfile } from "@/content/cv";

export const metadata = {
  title: "Syed Ahsan Subhan — Architecting Intelligence in FinTech & Health",
  description:
    "Senior delivery and architecture in FinTech and Health. Building AI systems that survive real-world constraints.",
  icons: {
  icon: "/favicon.ico",
},
};

const NavLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <Link
    href={href}
    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
  >
    {label}
  </Link>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/80">
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
            <Link
  href="/"
  className="font-semibold tracking-tight text-[var(--foreground)]"
>
  SyedSubhan.co.uk
</Link> 
            <nav className="flex flex-wrap items-center gap-6">
              <NavLink href="/#about" label="About" />
              <NavLink href="/#selected-work" label="Highlights" />
              <NavLink href="/#experience" label="Experience" />
              <NavLink href="/#projects" label="Projects" />
              <NavLink href="/architecting-intelligence" label="AI Journey" / >
              <NavLink href="/cv" label="CV" />
              <NavLink href="/#contact" label="Contact" />
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-500">
            <span>© {new Date().getFullYear()} Syed Ahsan Subhan</span>
            {cvProfile.linkedinUrl && (
              <a
                href={cvProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-700"
              >
                LinkedIn
              </a>
            )}
          </div>
        </footer>
      </body>
    </html>
  );
}