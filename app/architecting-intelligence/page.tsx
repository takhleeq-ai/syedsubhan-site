import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Architecting Intelligence — Syed Ahsan Subhan",
  description:
    "Building AI systems that survive real-world constraints. Notes on evaluation, metrics, and regulated domains.",
};

export default function ArchitectingIntelligenceIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <a
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">
        Architecting Intelligence
      </h1>
      <p className="mt-3 text-[var(--muted)]">
        Building AI systems that survive real-world constraints.
      </p>

      <div className="mt-10 space-y-4">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/architecting-intelligence/${p.slug}`}
            className="block rounded-xl border border-[var(--border)] p-5 transition-colors hover:bg-[var(--border)]/30"
          >
            <p className="text-sm text-[var(--muted)]">{p.date}</p>
            <h2 className="mt-2 text-lg font-semibold text-[var(--foreground)]">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--foreground)]">{p.summary}</p>
          </a>
        ))}
      </div>
    </div>
  );
}