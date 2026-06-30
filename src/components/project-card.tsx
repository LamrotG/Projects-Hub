import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";
import type { ProjectMeta } from "@/lib/types";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <div className="group rounded-lg border border-border bg-card transition-colors hover:border-border/80">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              {project.title}
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-foreground/80">
            {project.title}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-4 flex gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            <ExternalLink className="h-3 w-3" />
            Live Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-3 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Code className="h-3 w-3" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
