"use client";

export function CardSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-8 animate-pulse">
      <div className="h-12 w-12 rounded-xl bg-espx-cyan/5 mb-6" />
      <div className="h-5 w-1/2 rounded bg-espx-cyan/5 mb-3" />
      <div className="h-4 w-full rounded bg-espx-cyan/5 mb-2" />
      <div className="h-4 w-3/4 rounded bg-espx-cyan/5" />
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-6 animate-pulse">
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-20 rounded-full bg-espx-cyan/5" />
      </div>
      <div className="h-5 w-3/4 rounded bg-espx-cyan/5 mb-3" />
      <div className="h-4 w-full rounded bg-espx-cyan/5 mb-2" />
      <div className="h-4 w-5/6 rounded bg-espx-cyan/5 mb-4" />
      <div className="flex justify-between pt-4 border-t border-espx-cyan/5">
        <div className="h-3 w-24 rounded bg-espx-cyan/5" />
        <div className="h-3 w-16 rounded bg-espx-cyan/5" />
      </div>
    </div>
  );
}

export function LeaderSkeleton() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden animate-pulse">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-64 h-64 bg-espx-cyan/5" />
        <div className="flex-1 p-8">
          <div className="h-6 w-40 rounded bg-espx-cyan/5 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="h-4 w-20 rounded bg-espx-cyan/5" />
              <div className="h-3 w-full rounded bg-espx-cyan/5" />
              <div className="h-3 w-5/6 rounded bg-espx-cyan/5" />
              <div className="h-3 w-4/5 rounded bg-espx-cyan/5" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-24 rounded bg-espx-cyan/5" />
              <div className="h-3 w-full rounded bg-espx-cyan/5" />
              <div className="h-3 w-5/6 rounded bg-espx-cyan/5" />
              <div className="h-3 w-4/5 rounded bg-espx-cyan/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
