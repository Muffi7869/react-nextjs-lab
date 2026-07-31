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
