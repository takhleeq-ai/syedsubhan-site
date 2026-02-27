import Link from "next/link";

export const metadata = {
  title: "Projects — Syed Ahsan Subhan",
  description: "FinLens, Questions for My Doctor, and other initiatives.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Projects</h1>

      <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
        I build to explore ideas in the open. Not everything is polished. The
        point is to learn deliberately.
      </p>

      <div className="mt-12 divide-y divide-[var(--border)]">
        <div className="py-8">
          <h2 className="text-lg font-medium">FinLens</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
            An exploration into transaction parsing, categorisation, and
            summarisation of Open Banking data. The focus is clarity and
            structure — making financial signals explainable and usable.
          </p>
          <p className="mt-3 text-xs text-[var(--muted)]">
            Status: In active development
          </p>
        </div>

        <div className="py-8">
          <h2 className="text-lg font-medium">Questions for My Doctor</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
            A structured question generator to help patients prepare for medical
            conversations. Designed with clear constraints: no diagnosis, no
            medical advice — only preparation.
          </p>
          <p className="mt-3 text-xs text-[var(--muted)]">Status: Prototype</p>
        </div>
      </div>
    </div>
  );
}