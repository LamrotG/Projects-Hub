import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-16 mb-4 text-3xl font-bold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-12 mb-3 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-2 text-lg font-medium" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mb-4 ml-6 list-disc space-y-1 text-muted-foreground"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-1 text-muted-foreground"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-2 border-border pl-4 text-muted-foreground italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-border/50" />,
  a: (props) => (
    <a
      className="text-foreground underline underline-offset-4 transition-colors hover:text-foreground/80"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead
      className="border-b border-border bg-secondary/40 text-foreground"
      {...props}
    />
  ),
  th: (props) => (
    <th className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider" {...props} />
  ),
  tr: (props) => (
    <tr className="border-b border-border/30 last:border-0" {...props} />
  ),
  td: (props) => (
    <td className="px-4 py-2.5 text-muted-foreground" {...props} />
  ),
  pre: (props) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border border-border bg-secondary/50 p-4 font-mono text-sm"
      {...props}
    />
  ),
  code: (props) => {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return (
        <code
          className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
};
