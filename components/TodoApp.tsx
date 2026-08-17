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
