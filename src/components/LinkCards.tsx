"use client";

import { useEffect, useState } from "react";

export type LinkItem = {
  id: string;
  label: string;
  href: string;
  emoji: string;
};

export default function LinkCards({ links }: { links: LinkItem[] }) {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((counts: Record<string, number>) => setClickCounts(counts))
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    setClickCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {});
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map(({ id, label, href, emoji }) => (
        <a
          key={id}
          href={href}
          onClick={() => handleClick(id)}
          {...(href.startsWith("mailto:")
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/40 px-5 py-4 text-sm font-medium text-emerald-950 shadow-sm backdrop-blur-md transition-colors duration-200 hover:bg-white/55 dark:border-white/10 dark:bg-white/5 dark:text-emerald-50 dark:hover:bg-white/10"
        >
          <span className="shrink-0 text-lg">{emoji}</span>
          <span className="flex-1">{label}</span>
          <span className="shrink-0 text-xs font-normal text-emerald-950/50 dark:text-emerald-100/50">
            {clickCounts[id] ?? 0}회
          </span>
        </a>
      ))}
    </div>
  );
}
