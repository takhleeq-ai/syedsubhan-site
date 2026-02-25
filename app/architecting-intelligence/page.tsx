import { getAllPosts } from "@/lib/posts";
export default function ArchitectingIntelligenceIndex() {
  const posts = getAllPosts();

  return (
    <main>
      <h1 className="text-3xl font-semibold tracking-tight">
        Architecting Intelligence
      </h1>
      <p className="mt-3 text-neutral-700">
        Building AI systems that survive real-world constraints.
      </p>

      <div className="mt-8 space-y-4">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/architecting-intelligence/${p.slug}`}
            className="block rounded-2xl border border-neutral-200 p-5 hover:bg-neutral-50"
          >
            <p className="text-sm text-neutral-500">{p.date}</p>
            <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-neutral-700">{p.summary}</p>
          </a>
        ))}
      </div>
    </main>
  );
}