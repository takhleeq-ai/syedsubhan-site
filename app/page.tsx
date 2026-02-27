export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-2xl px-5 pt-16 pb-12 sm:px-6">
        <p className="text-sm text-[var(--muted)]">SyedSubhan.co.uk</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Syed Ahsan Subhan
        </h1>
        <p className="mt-2 text-lg text-[var(--muted)]">
          Architecting Intelligence in FinTech &amp; Health
        </p>
        <p className="mt-4 text-[var(--foreground)]">
          Building AI systems that survive real-world constraints.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/architecting-intelligence"
            className="rounded-lg bg-[var(--foreground)] px-4 py-2.5 text-sm text-[var(--background)] transition-opacity hover:opacity-90"
          >
            Read: Architecting Intelligence →
          </a>
          <a
            href="/cv"
            className="rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm transition-colors hover:bg-[var(--border)]/50"
          >
            Interactive CV
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="section mx-auto max-w-2xl border-t border-[var(--border)] px-5 py-12 sm:px-6"
      >
        <h2 className="text-xl font-semibold tracking-tight">About</h2>
        <p className="mt-3 leading-relaxed text-[var(--foreground)]">
          FinTech delivery across payments and Open Banking, now building
          applied AI systems in regulated domains. Focus on evaluation,
          safety, and metrics that matter when the cost of a mistake is
          asymmetric.
        </p>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="section mx-auto max-w-2xl border-t border-[var(--border)] px-5 py-12 sm:px-6"
      >
        <h2 className="text-xl font-semibold tracking-tight">
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

      {/* Technical Expertise */}
      <section
        id="expertise"
        className="section mx-auto max-w-2xl border-t border-[var(--border)] px-5 py-12 sm:px-6"
      >
        <h2 className="text-xl font-semibold tracking-tight">
          Technical Expertise
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-[var(--muted)]">
              Core
            </h3>
            <p className="mt-2 text-sm text-[var(--foreground)]">
              Payment systems, Open Banking APIs, ML evaluation (precision,
              recall, ROC-AUC), regulated-domain design, baseline pipelines.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[var(--muted)]">
              Applied AI
            </h3>
            <p className="mt-2 text-sm text-[var(--foreground)]">
              Classifiers in imbalanced settings, confusion-matrix–driven
              decisions, metric choice for product and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="section mx-auto max-w-2xl border-t border-[var(--border)] px-5 py-12 sm:px-6"
      >
        <h2 className="text-xl font-semibold tracking-tight">
          Projects &amp; Initiatives
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-medium text-[var(--foreground)]">FinLens</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Coming soon.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[var(--foreground)]">
              Questions for My Doctor
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Coming soon.
            </p>
          </div>
        </div>
        <p className="mt-4">
          <a
            href="/projects"
            className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
          >
            View all projects →
          </a>
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="section mx-auto max-w-2xl border-t border-[var(--border)] px-5 py-12 sm:px-6"
      >
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-[var(--foreground)]">
          Add your email and LinkedIn when ready. You can use the{" "}
          <a
            href="/contact"
            className="underline underline-offset-4 hover:opacity-80"
          >
            contact page
          </a>{" "}
          for inquiries.
        </p>
      </section>
    </>
  );
}
