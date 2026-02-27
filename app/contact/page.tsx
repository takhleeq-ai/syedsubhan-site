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
    </div>
  );
}