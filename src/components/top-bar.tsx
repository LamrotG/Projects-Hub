"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { SearchModal } from "@/components/search-modal";
import type { ProjectMeta } from "@/lib/types";

export function TopBar({ projects }: { projects: ProjectMeta[] }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          >
            ProjectsHub
          </Link>

          <button
            type="button"
            onClick={openSearch}
            className="flex h-8 items-center gap-2 rounded-md px-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Search projects"
          >
            <Search className="h-4 w-4" />
            <kbd className="hidden rounded border border-border bg-secondary/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground sm:inline-block">
              Ctrl K
            </kbd>
          </button>
        </div>
      </header>

      <SearchModal
        projects={projects}
        open={searchOpen}
        onClose={closeSearch}
      />
    </>
  );
}
