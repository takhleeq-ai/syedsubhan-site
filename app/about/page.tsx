export const metadata = {
  title: "About — Syed Ahsan Subhan",
  description:
    "FinTech delivery across payments and Open Banking, now building applied AI systems in regulated domains.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <a
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 leading-relaxed text-[var(--foreground)]">
        FinTech delivery across payments and Open Banking, now building
        applied AI systems in regulated domains. Focus on evaluation, safety,
        and metrics that matter when the cost of a mistake is asymmetric.
      </p>
    </div>
  );
}