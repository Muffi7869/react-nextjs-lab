import { Counter } from "../components/Counter";
import { Card } from "../components/ui";

export const experiments = [
  { title: "useReducer counter", note: "undo history with a reducer" },
  { title: "localStorage todos", note: "custom hook + filters" },
  { title: "debounced search", note: "server data + client filtering" },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">react + next.js lab</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {experiments.map((e) => <Card key={e.title} title={e.title}>{e.note}</Card>)}
      </div>
      <Counter />
    </div>
  );
}
