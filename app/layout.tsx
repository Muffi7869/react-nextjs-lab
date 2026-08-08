import type { ReactNode } from "react";
import "./globals.css";

export const metadata = { title: "react-nextjs-lab", description: "react + next.js practice" };

const links = [
  { href: "/", label: "home" },
  { href: "/todos", label: "todos" },
  { href: "/courses", label: "courses" },
  { href: "/components", label: "components" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        <nav className="border-b bg-white">
          <div className="mx-auto flex h-14 max-w-4xl items-center gap-6 px-6 text-sm">
            <span className="font-semibold">lab</span>
            {links.map((l) => <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900">{l.label}</a>)}
          </div>
        </nav>
        <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
