import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "architecting-intelligence");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(POSTS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      summary: String(data.summary ?? ""),
    };
  });

  // newest first
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      summary: String(data.summary ?? ""),
    } as PostMeta,
    content,
  };
}