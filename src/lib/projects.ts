import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ProjectMeta } from "./types";

const projectsDir = path.join(process.cwd(), "public", "projects");

interface ProjectEntry {
  meta: ProjectMeta;
  content: string;
}

function readProjectEntries(): ProjectEntry[] {
  const entries = fs.readdirSync(projectsDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .flatMap((dir) => {
      const dirPath = path.join(projectsDir, dir.name);
      const files = fs.readdirSync(dirPath);
      const mdxFile = files.find((f) => f.endsWith(".mdx"));

      if (!mdxFile) return [];

      const filePath = path.join(dirPath, mdxFile);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return [{ meta: data as ProjectMeta, content }];
    });
}

export function getAllProjects(): ProjectMeta[] {
  return readProjectEntries()
    .map((e) => e.meta)
    .sort((a, b) => b.year - a.year);
}

export function getProjectBySlug(
  slug: string
): { meta: ProjectMeta; content: string } | undefined {
  return readProjectEntries().find((e) => e.meta.slug === slug);
}

export function getAllSlugs(): string[] {
  return readProjectEntries().map((e) => e.meta.slug);
}
