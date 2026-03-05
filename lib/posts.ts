import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "architecting-intelligence");

export type PostMeta = {
  slug: string; // supports nested slugs like "ai-journey/week-1-evaluation-metrics"
  title: string;
  date: string;
  summary: string;
};

function walkMarkdownFiles(dir: string, baseDir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath, baseDir));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      const rel = path.relative(baseDir, fullPath).replace(/\\/g, "/");
      files.push(rel);
    }
  }

  return files;
}

export function getAllPosts(): PostMeta[] {
  const relFiles = walkMarkdownFiles(POSTS_DIR, POSTS_DIR);

  const posts = relFiles.map((relPath) => {
    const slug = relPath.replace(/\.md$/, "");
    const fullPath = path.join(POSTS_DIR, relPath);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      summary: String(data.summary ?? ""),
    };
  });

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