import { COURSES, searchCourses } from "../../../components/SearchList";

export function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  const dept = url.searchParams.get("dept") ?? "ALL";
  return Response.json({ results: searchCourses(COURSES, q, dept) });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { code?: string };
  if (!body.code) return Response.json({ error: "code is required" }, { status: 400 });
  const found = COURSES.find((c) => c.code.toLowerCase() === body.code!.toLowerCase());
  return found ? Response.json(found) : Response.json({ error: "not found" }, { status: 404 });
}
