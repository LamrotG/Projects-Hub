import { Skeleton } from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="py-6">
        <Skeleton className="h-5 w-16" />
      </div>

      <Skeleton className="mb-10 aspect-2/1 w-full" />

      <div className="mb-10">
        <Skeleton className="h-9 w-2/3" />
        <Skeleton className="mt-3 h-4 w-48" />
        <Skeleton className="mt-3 h-6 w-full max-w-md" />
        <div className="mt-5 flex gap-3">
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-9 w-32" />
        </div>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-20" />
        ))}
      </div>

      <div className="space-y-3 pb-20">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
