import { cookies } from "next/headers";

export async function isAdmin() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  return Boolean(session) && session === process.env.ADMIN_PASSWORD;
}
