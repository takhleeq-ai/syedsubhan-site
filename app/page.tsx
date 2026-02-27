import { cvProfile } from "@/content/cv";

export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap items-start gap-6">
        {cvProfile.profileImage && (
          <a
            href={cvProfile.linkedinUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <img
              src={cvProfile.profileImage}
              alt={cvProfile.name}
              className="h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
            />
          </a>
        )}
        <div>
          <p className="text-sm text-neutral-500">SyedSubhan.co.uk</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Syed Ahsan Subhan
          </h1>
          <p className="mt-3 text-lg text-neutral-700">
            Architecting Intelligence in FinTech &amp; Health
          </p>
        </div>
      </div>

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

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/architecting-intelligence"
          className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Read: Architecting Intelligence →
        </a>
        <a
          href="/cv"
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Interactive CV
        </a>
        {cvProfile.linkedinUrl && (
          <a
            href={cvProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            LinkedIn
          </a>
        )}
      </div>
    </main>
  );
}
