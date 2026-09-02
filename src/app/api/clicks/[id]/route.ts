import clientPromise from "@/lib/mongodb";

interface LinkClickDoc {
  _id: string;
  count: number;
}

export async function POST(
  _request: Request,
  context: RouteContext<"/api/clicks/[id]">,
) {
  const { id } = await context.params;
  const client = await clientPromise;

  const result = await client
    .db()
    .collection<LinkClickDoc>("linkClicks")
    .findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return Response.json({ count: result?.count ?? 1 });
}
