import { TodoApp } from "../../components/TodoApp";

export const metadata = { title: "todos" };

export default function TodosPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">todos</h1>
      <TodoApp />
    </section>
  );
}
