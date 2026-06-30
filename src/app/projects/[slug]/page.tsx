import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import { mdxComponents } from "@/components/mdx-components";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.meta.title} — Projects Hub`,
    description: project.meta.description || project.meta.tagline,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { meta, content } = project;

  return (
    <div className="mx-auto max-w-4xl px-6">
      <nav className="py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      </nav>

      {meta.cover && (
        <div className="relative mb-10 aspect-2/1 overflow-hidden rounded-lg border border-border bg-muted">
          <Image
            src={meta.cover}
            alt={meta.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      )}

      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {meta.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{meta.status}</span>
          <span className="text-border">·</span>
          <span>{meta.year}</span>
          {meta.category && (
            <>
              <span className="text-border">·</span>
              <span>{meta.category}</span>
            </>
          )}
        </div>

        <p className="mt-3 text-lg text-muted-foreground">{meta.tagline}</p>

        <div className="mt-5 flex gap-3">
          <a
            href={meta.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Project
          </a>
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Code className="h-3.5 w-3.5" />
            Source Code
          </a>
        </div>
      </header>

      {meta.stack.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-2">
          {meta.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <article className="pb-10">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: { remarkPlugins: [remarkGfm] },
          }}
        />
      </article>

      <div className="border-t border-border/50 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
