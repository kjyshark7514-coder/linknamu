"use client";

export type LinkItem = {
  id: string;
  label: string;
  href: string;
  emoji: string;
};

export default function LinkCards({ links }: { links: LinkItem[] }) {
  const handleClick = (id: string) => {
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
        </a>
      ))}
    </div>
  );
}
