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
