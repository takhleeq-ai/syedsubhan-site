import "./globals.css";
import { cvProfile } from "@/content/cv";

export const metadata = {
  title: "Syed Ahsan Subhan",
  description: "Architecting Intelligence in FinTech & Health",
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="text-sm text-neutral-700 hover:text-black"
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
        <header className="border-b border-neutral-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="/" className="font-semibold tracking-tight">
              SyedSubhan.co.uk
            </a>
            <nav className="flex flex-wrap gap-4">
              <NavLink href="/architecting-intelligence" label="Architecting Intelligence" />
              <NavLink href="/projects" label="Projects" />
              <NavLink href="/cv" label="CV" />
              <NavLink href="/about" label="About" />
              <NavLink href="/contact" label="Contact" />
            </nav>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>

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