import { SearchList } from "../../components/SearchList";

export const metadata = { title: "courses" };

export const revalidate = 3600;

export default function CoursesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">course search</h1>
      <SearchList />
    </section>
  );
}
