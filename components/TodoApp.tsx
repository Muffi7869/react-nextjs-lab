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
