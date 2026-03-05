import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug.split("/") }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (!slug || slug.length === 0) notFound();

  const joinedSlug = slug.join("/");
  const { meta, content } = getPostBySlug(joinedSlug);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <Link
        href="/architecting-intelligence"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to AI Journey
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{meta.title}</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">{meta.date}</p>
      <p className="mt-4 text-[var(--foreground)]">{meta.summary}</p>

      <article
        className="article-prose mt-10"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}