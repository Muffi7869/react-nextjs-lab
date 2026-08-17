"use client";
import { useMemo, useState, type FormEvent } from "react";
import { useLocalStorage } from "../hooks/hooks";

export type Todo = { id: number; text: string; done: boolean };

type Filter = "all" | "active" | "done";

export function filterTodos(todos: Todo[], filter: Filter): Todo[] {
  if (filter === "active") return todos.filter((t) => !t.done);
  if (filter === "done") return todos.filter((t) => t.done);
  return todos;
}

export function TodoItem({ todo, onToggle, onDelete }: { todo: Todo; onToggle: () => void; onDelete: () => void }) {
  return (
    <li className="flex items-center gap-3 py-2">
      <input type="checkbox" checked={todo.done} onChange={onToggle} className="h-4 w-4 accent-indigo-600" />
      <span className={`flex-1 ${todo.done ? "line-through text-slate-400" : ""}`}>{todo.text}</span>
      <button onClick={onDelete} className="text-sm text-slate-400 hover:text-rose-600" aria-label={`delete ${todo.text}`}>&times;</button>
    </li>
  );
}

export function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(() => filterTodos(todos, filter), [todos, filter]);
  const left = todos.filter((t) => !t.done).length;
  function add(e: FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  }
  return (
    <div className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm">
      <form onSubmit={add} className="flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="what needs doing?" className="flex-1 rounded-lg border px-3 py-2" />
        <button className="rounded-lg bg-indigo-600 px-4 text-white">add</button>
      </form>
      <ul className="mt-4 divide-y">
        {visible.map((t) => (
          <TodoItem key={t.id} todo={t} onToggle={() => setTodos(todos.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))} onDelete={() => setTodos(todos.filter((x) => x.id !== t.id))} />
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{left} left</span>
        <div className="flex gap-1">
          {(["all", "active", "done"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded px-2 py-1 ${filter === f ? "bg-slate-900 text-white" : ""}`}>{f}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
