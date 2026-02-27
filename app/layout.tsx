import "./globals.css";

export const metadata = {
  title: "Syed Ahsan Subhan — Architecting Intelligence in FinTech & Health",
  description:
    "Senior delivery and architecture in FinTech and Health. Building AI systems that survive real-world constraints.",
};

const NavLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <a
    href={href}
    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
  >
    {label}
  </a>
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
            <a
              href="/"
              className="font-semibold tracking-tight text-[var(--foreground)]"
            >
              SyedSubhan.co.uk
            </a>
            <nav className="flex flex-wrap items-center gap-6">
              <NavLink href="/#about" label="About" />
              <NavLink href="/#experience" label="Experience" />
              <NavLink href="/#projects" label="Projects" />
              <NavLink href="/architecting-intelligence" label="Writing" />
              <NavLink href="/cv" label="CV" />
              <NavLink href="/#contact" label="Contact" />
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-2xl px-5 py-6 text-sm text-[var(--muted)] sm:px-6">
            © {new Date().getFullYear()} Syed Ahsan Subhan
          </div>
        </footer>
      </body>
    </html>
  );
}