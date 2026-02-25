import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;

  if (!slug) notFound();

  const { meta, content } = getPostBySlug(slug);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return (
    <main>
      <a
        href="/architecting-intelligence"
        className="text-sm text-neutral-600 underline underline-offset-4 hover:opacity-80"
      >
        ← Back to Architecting Intelligence
      </a>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{meta.title}</h1>
      <p className="mt-2 text-sm text-neutral-500">{meta.date}</p>
      <p className="mt-4 text-neutral-700">{meta.summary}</p>

      <article
        className="prose prose-neutral mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}