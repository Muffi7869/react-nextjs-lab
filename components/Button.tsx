import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-500",
  secondary: "bg-white ring-1 ring-slate-300 text-slate-800 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
  danger: "bg-rose-600 text-white hover:bg-rose-500",
};

const sizes: Record<Size, string> = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-6 py-3 text-lg" };
