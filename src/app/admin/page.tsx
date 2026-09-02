import { isAdmin } from "@/lib/auth";
import { links } from "@/lib/links";
import clientPromise from "@/lib/mongodb";
import AdminLogin from "@/components/AdminLogin";
import AdminLogoutButton from "@/components/AdminLogoutButton";

interface LinkClickDoc {
  _id: string;
  count: number;
}

export default async function AdminPage() {
  if (!(await isAdmin())) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
        <AdminLogin />
      </div>
    );
  }

  const client = await clientPromise;
  const docs = await client
    .db()
    .collection<LinkClickDoc>("linkClicks")
    .find()
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
            클릭 수 통계
          </h1>
          <AdminLogoutButton />
        </div>
        <div className="flex flex-col gap-3">
          {links.map(({ id, label, emoji }) => (
            <div
              key={id}
              className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-100">
                <span>{emoji}</span>
                {label}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">
                {counts[id] ?? 0}회
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
