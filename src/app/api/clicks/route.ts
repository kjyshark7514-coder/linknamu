import clientPromise from "@/lib/mongodb";

interface LinkClickDoc {
  _id: string;
  count: number;
}

export async function GET() {
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
