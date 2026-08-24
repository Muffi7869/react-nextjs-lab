"use client";
import { useMemo, useState } from "react";
import { useDebounce } from "../hooks/hooks";

export type Course = { code: string; title: string; units: number; dept: string };

export const COURSES: Course[] = [
  { code: "MATH 18", title: "Linear Algebra", units: 4, dept: "MATH" },
  { code: "MATH 109", title: "Mathematical Reasoning", units: 4, dept: "MATH" },
  { code: "MATH 180A", title: "Probability", units: 4, dept: "MATH" },
  { code: "CSE 12", title: "Data Structures", units: 4, dept: "CSE" },
  { code: "CSE 29", title: "Systems Programming", units: 4, dept: "CSE" },
  { code: "DSC 10", title: "Principles of Data Science", units: 4, dept: "DSC" },
  { code: "COGS 9", title: "Intro to Data Science", units: 4, dept: "COGS" },
];

export function searchCourses(courses: Course[], query: string, dept: string): Course[] {
  const q = query.trim().toLowerCase();
  return courses.filter((c) => (dept === "ALL" || c.dept === dept) && (!q || c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)));
}

export function highlight(text: string, query: string) {
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (!query || i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded bg-yellow-200">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  );
}

export function SearchList() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("ALL");
  const q = useDebounce(query, 200);
  const depts = useMemo(() => ["ALL", ...new Set(COURSES.map((c) => c.dept))], []);
  const results = useMemo(() => searchCourses(COURSES, q, dept), [q, dept]);
  return (
    <div className="mx-auto max-w-lg space-y-4">
      <div className="flex gap-2">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search courses" className="flex-1 rounded-lg border px-3 py-2" />
        <select value={dept} onChange={(e) => setDept(e.target.value)} className="rounded-lg border px-2">
          {depts.map((d) => <option key={d}>{d}</option>)}
        </select>
      </div>
      <p className="text-sm text-slate-500">{results.length} result{results.length === 1 ? "" : "s"}</p>
      <ul className="divide-y rounded-xl bg-white ring-1 ring-slate-200">
        {results.map((c) => (
          <li key={c.code} className="flex justify-between px-4 py-3"><span><b>{highlight(c.code, q)}</b> {highlight(c.title, q)}</span><span className="text-sm text-slate-400">{c.units}u</span></li>
        ))}
      </ul>
    </div>
  );
}
