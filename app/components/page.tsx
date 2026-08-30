"use client";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Accordion, Avatar, Badge, Modal, Tabs } from "../../components/ui";

export const faq = [
  { q: "why next.js?", a: "file based routing + server components out of the box" },
  { q: "why tailwind?", a: "no context switching between css files" },
];

export default function ComponentsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-2">
        <Button>primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="danger" size="sm">delete</Button>
        <Button loading>saving</Button>
      </div>
      <div className="flex items-center gap-3"><Avatar name="Muffi Rajkotwala" /><Badge tone="green">active</Badge><Badge tone="amber">pending</Badge></div>
      <Tabs tabs={[{ label: "one", content: "first tab" }, { label: "two", content: "second tab" }]} />
      <Accordion items={faq} />
      <Button onClick={() => setOpen(true)}>open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="hello">esc or click outside to close</Modal>
    </div>
  );
}
