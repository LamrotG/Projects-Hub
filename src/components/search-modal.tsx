"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import type { ProjectMeta } from "@/lib/types";

interface SearchModalProps {
  projects: ProjectMeta[];
  open: boolean;
  onClose: () => void;
}

function matchesQuery(project: ProjectMeta, query: string): boolean {
  const q = query.toLowerCase();

  const fields = [
    project.title,
    project.tagline,
    project.description,
    project.category,
    ...project.stack,
    ...(project.highlights ?? []),
  ];

  return fields.some((field) => field?.toLowerCase().includes(q));
}

export function SearchModal({ projects, open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.trim()
    ? projects.filter((p) => matchesQuery(p, query.trim()))
    : [];

  const handleClose = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  const navigateTo = useCallback(
    (slug: string) => {
      handleClose();
      router.push(`/projects/${slug}`);
    },
    [handleClose, router]
  );

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative mx-auto mt-[15vh] w-full max-w-lg px-4">
        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          <div className="flex items-center border-b border-border px-4">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="h-12 flex-1 bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              onClick={handleClose}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {query.trim() && (
            <div className="max-h-80 overflow-y-auto p-2">
              {results.length > 0 ? (
                <ul>
                  {results.map((project) => (
                    <li key={project.slug}>
                      <button
                        onClick={() => navigateTo(project.slug)}
                        className="flex w-full flex-col rounded-md px-3 py-2.5 text-left transition-colors hover:bg-muted"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {project.title}
                        </span>
                        <span className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                          {project.tagline}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No projects found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
