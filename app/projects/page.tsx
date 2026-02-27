export const metadata = {
  title: "Projects — Syed Ahsan Subhan",
  description: "FinLens, Questions for My Doctor, and other initiatives.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <a
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 text-[var(--foreground)]">
        Coming soon: FinLens, Questions for My Doctor.
      </p>
    </div>
  );
}