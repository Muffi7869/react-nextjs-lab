import { COURSES, searchCourses } from "../../../components/SearchList";

export function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  const dept = url.searchParams.get("dept") ?? "ALL";
  return Response.json({ results: searchCourses(COURSES, q, dept) });
}
