"use client";
import { useEffect, useState, type ReactNode } from "react";

export function Card({ title, children, footer }: { title?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      {title && <h3 className="mb-2 font-semibold">{title}</h3>}
      <div className="text-sm text-slate-600">{children}</div>
      {footer && <div className="mt-4 border-t pt-4">{footer}</div>}
    </div>
  );
}

export function Badge({ tone = "slate", children }: { tone?: "slate" | "green" | "red" | "amber"; children: ReactNode }) {
  const tones = { slate: "bg-slate-100 text-slate-700", green: "bg-emerald-100 text-emerald-700", red: "bg-rose-100 text-rose-700", amber: "bg-amber-100 text-amber-700" };
  return <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}
