import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Journey — Syed Ahsan Subhan",
  description:
    "Architecting Intelligence: my learning journey from fundamentals to applied AI systems.",
};

export default function AIJourneyPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <Link
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </Link>

      {/* Hero image (quiet, atmospheric) */}
      <div className="mt-8 overflow-hidden rounded-3xl">
        <Image
          src="/images/ai-journey-hero.png"
          alt="Architecting Intelligence"
          width={1400}
          height={800}
          priority
          className="h-auto w-full object-cover opacity-90"
        />
      </div>

      {/* Title + authority line */}
      <h1 className="mt-10 text-3xl font-semibold tracking-tight">
        Architecting Intelligence
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
        From regulated systems to applied AI — deliberately, from first principles.
      </p>

      {/* Framing */}
      <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
        I’m learning machine learning and generative AI in public. This is not a
        highlight reel — it’s a disciplined log of fundamentals, experiments,
        and applied builds. My background is in payments and regulated delivery;
        I’m bringing that same rigor to evaluation, failure modes, and real
        user outcomes.
      </p>

      {/* Roadmap */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Learning Path</h2>

        <div className="mt-8 divide-y divide-[var(--border)]">
          <div className="py-8">
            <h3 className="text-lg font-medium">Phase 1 — Foundations</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              Python fluency, data handling, and the mental models behind supervised learning.
              Focus: clarity over complexity.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Now: numpy/pandas, data cleaning, train/test splits, baseline thinking
            </p>
          </div>

          <div className="py-8">
            <h3 className="text-lg font-medium">Phase 2 — Classical ML</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              Regression and classification, feature engineering, and models that survive messy data.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Next: linear/logistic regression, trees, cross-validation, leakage traps
            </p>
          </div>

          <div className="py-8">
            <h3 className="text-lg font-medium">Phase 3 — Evaluation & Risk</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              Metrics, calibration, and decision quality — especially under imbalance and regulation.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Next: precision/recall tradeoffs, ROC-AUC, PR-AUC, thresholds, explainability
            </p>
          </div>

          <div className="py-8">
            <h3 className="text-lg font-medium">Phase 4 — Generative AI</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              Prompting, retrieval (RAG), grounding, and evaluation — building safe patterns for real users.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Next: retrieval pipelines, citations, hallucination controls, eval harnesses
            </p>
          </div>

          <div className="py-8">
            <h3 className="text-lg font-medium">Phase 5 — Applied Builds</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              Turning the learning into products: FinLens + Questions for My Doctor — with constraints and evaluation built in.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Focus: real workflows, measurable outcomes, and responsible system boundaries
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-sm text-[var(--muted)]">
          Related:{" "}
          <Link href="/projects" className="underline underline-offset-4 hover:opacity-80">
            Projects
          </Link>{" "}
          ·{" "}
          <Link href="/cv" className="underline underline-offset-4 hover:opacity-80">
            CV
          </Link>
        </p>
      </section>
    </main>
  );
}