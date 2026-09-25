import { getAllPosts } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Architecting Intelligence — Syed Ahsan Subhan",
  description:
    "A build-led learning lab exploring how useful AI-assisted software is designed, evaluated, and improved.",
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

      {/* Hero */}
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

      {/* Introduction */}
      <h1 className="mt-10 text-3xl font-semibold tracking-tight">
        Architecting Intelligence
      </h1>

      <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
        A build-led learning lab exploring how useful AI-assisted software is
        designed, evaluated, and improved.
      </p>

      <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
        <p>
          I&apos;ve spent years working inside regulated financial ecosystems —
          payments infrastructure, scheme alignment, partner integrations, and
          delivery under strict governance. In those environments, how a system
          behaves matters as much as what it can do.
        </p>

        <p>
          I&apos;m applying that same discipline to machine learning and
          generative systems. This isn&apos;t a pivot away from systems
          engineering — it&apos;s an extension of it.
        </p>

        <p>
          Architecting Intelligence started with experiments designed to
          understand model behaviour. It is now evolving into a build-led
          learning lab: small, useful tools built around real workflows, with
          each build creating new questions about architecture, evidence,
          evaluation, and human decision-making.
        </p>

        <p>
          This page documents that process — what I build, the decisions behind
          it, what I test, what fails, and what I learn along the way.
        </p>
      </div>

      <p className="mt-6 text-sm text-[var(--muted)]">
        Experiments, notebooks, and code from the learning journey live here:{" "}
        <a
          href="https://github.com/takhleeq-ai/AI-Learning-Lab"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:opacity-80"
        >
          AI Learning Lab →
        </a>
      </p>

      {/* Why */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">
          Why this page exists
        </h2>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
          <p>
            Building useful AI software involves more than sending a prompt to
            a model. Real systems need structured inputs, clear boundaries,
            reliable outputs, evaluation, and ways to handle uncertainty.
          </p>

          <p>
            They also require decisions about where deterministic software
            should end and model-generated behaviour should begin — and how a
            human remains in control when the output influences a real
            decision.
          </p>

          <p>
            The purpose of this lab is to explore those questions by building
            rather than studying them only in isolation.
          </p>

          <p>
            Each tool starts with a real problem. The implementation becomes
            the experiment, and the results determine what I explore next.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">
          From Learning to Building
        </h2>

        <div className="mt-8 divide-y divide-[var(--border)]">
          {/* Foundation */}
          <div className="py-8">
            <h3 className="text-lg font-medium">
              Foundation — Weeks 1–5
            </h3>

            <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
              Understanding Model Behaviour
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              The first five weeks focused on understanding how
              machine-learning models behave rather than simply how to train
              them. Starting with a basic classifier, I explored imbalanced
              data, precision and recall, ranking, and decision thresholds.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              The key lesson was that models produce scores and probabilities;
              the decisions, trade-offs, and consequences emerge from the
              systems we build around them.
            </p>

            <p className="mt-3 text-xs text-[var(--muted)]">
              Focus: classification · imbalanced data · precision and recall ·
              ranking · thresholds · decision quality
            </p>
          </div>

          {/* Current */}
          <div className="py-8">
            <h3 className="text-lg font-medium">
              Build Lab — Week 6 onwards
            </h3>

            <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
              Building Useful Tools
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              The next stage shifts the learning into small, useful
              AI-assisted software built around real workflows. Instead of
              exploring concepts in isolation, each build becomes the
              environment for learning.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              That means thinking beyond the model itself: how information is
              represented, what should be deterministic, where generated
              behaviour adds value, how claims are grounded in evidence, and
              how the resulting system should be evaluated.
            </p>

            <p className="mt-3 text-xs text-[var(--muted)]">
              Focus: structured data · evidence · deterministic vs generated
              behaviour · evaluation · explainability · human-in-the-loop
              decisions
            </p>
          </div>
        </div>
      </section>

      {/* Current Build */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">
          Current Build — Role Fit Analyzer
        </h2>

        <div className="mt-5">
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            A small AI-assisted tool for comparing a candidate&apos;s experience
            with the requirements of a job description.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            The goal is not to produce an arbitrary compatibility score. The
            tool should identify relevant evidence, distinguish direct matches
            from reasonable inference, expose genuine gaps, and avoid inventing
            experience that is not present in the source material.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Building it provides a practical environment for exploring requirement extraction, structured representations, evidence matching, deterministic and LLM-generated behaviour, hallucination controls, and evaluation.
          </p>

          <Link
            href="/architecting-intelligence/ai-journey/week-6-from-learning-models-to-building-tools"
            className="mt-4 inline-block text-sm underline underline-offset-4 hover:opacity-80"
          >
            Read the Week 6 introduction →
          </Link>
        </div>
      </section>

      {/* Notes */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight">
          Latest Notes
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Short, cumulative notes documenting what I learn, build, test, and
          change along the way.
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
                  <p className="mt-3 text-xs text-[var(--muted)]">
                    {post.date}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      {/* Related */}
      <section className="mt-12">
        <p className="text-sm text-[var(--muted)]">
          Related:{" "}
          <Link
            href="/projects"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Projects
          </Link>{" "}
          ·{" "}
          <Link
            href="/cv"
            className="underline underline-offset-4 hover:opacity-80"
          >
            CV
          </Link>
        </p>
      </section>
    </main>
  );
}