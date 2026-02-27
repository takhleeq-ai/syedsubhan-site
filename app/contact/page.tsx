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
        Get in touch for professional inquiries.
      </p>

      <div className="mt-6 space-y-3 text-[var(--foreground)]">
        <div>
          <span className="font-medium">Email:</span>{" "}
          {cvProfile.email ? (
            <a
              href={`mailto:${cvProfile.email}`}
              className="underline underline-offset-4 hover:opacity-80"
            >
              {cvProfile.email}
            </a>
          ) : (
            <span className="text-[var(--muted)]">coming soon</span>
          )}
        </div>

        <div>
          <span className="font-medium">LinkedIn:</span>{" "}
          {cvProfile.linkedinUrl ? (
            <a
              href={cvProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              View profile
            </a>
          ) : (
            <span className="text-[var(--muted)]">coming soon</span>
          )}
        </div>
      </div>
    </div>
  );
}
