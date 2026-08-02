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

export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist" className="flex gap-1 rounded-lg bg-slate-100 p-1 w-fit">
        {tabs.map((t, i) => (
          <button key={t.label} role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`rounded-md px-3 py-1.5 text-sm ${i === active ? "bg-white shadow-sm font-medium" : "text-slate-600"}`}>{t.label}</button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4">{tabs[active]?.content}</div>
    </div>
  );
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={title} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between"><h2 className="font-semibold">{title}</h2><button onClick={onClose} aria-label="close">&times;</button></div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y rounded-xl ring-1 ring-slate-200">
      {items.map((it, i) => (
        <div key={it.q}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full justify-between px-4 py-3 text-left font-medium" aria-expanded={open === i}>{it.q}<span>{open === i ? "-" : "+"}</span></button>
          {open === i && <p className="px-4 pb-3 text-sm text-slate-600">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
