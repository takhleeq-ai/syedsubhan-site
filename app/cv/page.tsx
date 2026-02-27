export const metadata = {
  title: "CV — Syed Ahsan Subhan",
  description: "Professional experience and expertise.",
};

export default function CVPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <a
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">CV</h1>
      <p className="mt-2 text-[var(--muted)]">
        Interactive resume and professional timeline.
      </p>

      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <h2 className="text-lg font-semibold tracking-tight">
          Professional Experience
        </h2>
        <div className="mt-6 space-y-8">
          <div>
            <p className="text-sm text-[var(--muted)]">Focus areas</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-[var(--foreground)]">
              <li>FinTech delivery: payments, Open Banking, regulated systems</li>
              <li>Applied AI in finance and health: evaluation and metrics</li>
              <li>Enterprise architecture and scaling in constrained environments</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <h2 className="text-lg font-semibold tracking-tight">
          Technical Expertise
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
          <li>Payment systems &amp; Open Banking APIs</li>
          <li>ML evaluation: precision, recall, ROC-AUC, confusion matrix</li>
          <li>Regulated-domain design &amp; compliance-aware metrics</li>
          <li>Baseline pipelines and classifier design for imbalanced settings</li>
        </ul>
      </section>

      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <h2 className="text-lg font-semibold tracking-tight">Education</h2>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Add your education and credentials here.
        </p>
      </section>
    </div>
  );
}
