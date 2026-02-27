import { cvProfile } from "@/content/cv";

export const metadata = {
  title: "Contact — Syed Ahsan Subhan",
  description: "Get in touch for professional inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <a
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 text-[var(--foreground)]">
        Add your email and LinkedIn here when ready.
      </p>

      <div className="mt-6 space-y-2 text-neutral-700">
        <p>
          Email: <span className="text-neutral-500">{cvProfile.email}</span>
        </p>
        <p>
          LinkedIn: <span className="text-neutral-500">{cvProfile.linkedinUrl && (
          <p>
            <a
              href={cvProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              LinkedIn
            </a>
          </p>
        )}</span>
        </p>
      </div>
    </main>
  );
}