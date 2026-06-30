import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Projects Hub
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A collection of projects built with a systems-first mindset,
          exploring software engineering, product thinking, and technical
          execution. Every project includes a comprehensive case study covering
          architecture, implementation, challenges, and lessons behind each
          build.
        </p>
      </section>

      <section className="pb-24">
        <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
