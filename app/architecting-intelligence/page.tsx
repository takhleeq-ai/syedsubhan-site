import { getAllPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Journey — Syed Ahsan Subhan",
  description:
    "Architecting Intelligence: my learning journey from fundamentals to applied AI systems.",
};

export default function AIJourneyPage() {
  const posts = getAllPosts().filter((p) =>
  p.slug.startsWith("ai-journey/")
);
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
  Extending regulated systems thinking into applied AI.
</p>

<div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
  <p>
    I’ve spent years working inside regulated financial ecosystems — payments
    infrastructure, scheme alignment, partner integrations, and delivery under
    strict governance. In those environments, failure modes matter more than
    features.
  </p>

  <p>
    Now I’m applying that same discipline to machine learning and generative
    systems. This isn’t a pivot — it’s an extension.
  </p>

  <p>
    This page is a structured, public log: fundamentals, experiments, and
    applied builds — with an emphasis on evaluation, risk, and real user
    outcomes.
  </p>
</div>
<p className="mt-6 text-sm text-[var(--muted)]">
  Experiments and code for this journey live here:{" "}
  <a
    href="https://github.com/takhleeq-ai/AI-Learning-Lab"
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-4 hover:opacity-80"
  >
    AI Learning Lab →
  </a>
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
      <section className="mt-16">
  <h2 className="text-xl font-semibold tracking-tight">Latest Notes</h2>
  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
    Monday + Thursday updates. Short, cumulative, and linked back to real builds.
  </p>

  <div className="mt-8 divide-y divide-[var(--border)]">
    {posts.length === 0 ? (
      <div className="py-8 text-sm text-[var(--muted)]">
        Notes landing soon.
      </div>
    ) : (
      posts.map((post) => (
        <div key={post.slug} className="py-8">
          <h3 className="text-lg font-medium">
            <Link
              href={`/architecting-intelligence/${post.slug}`}
              className="hover:opacity-80"
            >
              {post.title}
            </Link>
          </h3>

          {post.summary && (
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              {post.summary}
            </p>
          )}

          {post.date && (
            <p className="mt-3 text-xs text-[var(--muted)]">{post.date}</p>
          )}
        </div>
      ))
    )}
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