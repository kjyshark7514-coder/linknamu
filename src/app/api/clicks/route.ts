import clientPromise from "@/lib/mongodb";
import { isAdmin } from "@/lib/auth";

interface LinkClickDoc {
  _id: string;
  count: number;
}

export async function GET() {
  if (!(await isAdmin())) {
    return Response.json({ error: "권한이 없습니다." }, { status: 401 });
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

  return Response.json(counts);
}
