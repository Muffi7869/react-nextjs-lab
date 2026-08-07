"use client";
import { useReducer } from "react";

type State = { count: number; step: number; history: number[] };

type Action = { type: "inc" } | { type: "dec" } | { type: "reset" } | { type: "step"; value: number } | { type: "undo" };

export const initialState: State = { count: 0, step: 1, history: [] };

export function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step, history: [...state.history, state.count] };
    case "dec":
      return { ...state, count: state.count - state.step, history: [...state.history, state.count] };
    case "reset":
      return initialState;
    case "step":
      return { ...state, step: action.value };
    case "undo":
      return state.history.length ? { ...state, count: state.history[state.history.length - 1], history: state.history.slice(0, -1) } : state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm space-y-4">
      <p className="text-4xl font-bold tabular-nums">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "dec" })} className="rounded-lg px-3 py-1 ring-1 ring-slate-300">-</button>
        <button onClick={() => dispatch({ type: "inc" })} className="rounded-lg px-3 py-1 ring-1 ring-slate-300">+</button>
        <button onClick={() => dispatch({ type: "undo" })} disabled={!state.history.length} className="rounded-lg px-3 py-1 text-sm disabled:opacity-40">undo</button>
        <button onClick={() => dispatch({ type: "reset" })} className="rounded-lg px-3 py-1 text-sm text-rose-600">reset</button>
      </div>
      <label className="flex items-center gap-2 text-sm">
        step
        <input type="number" min={1} value={state.step} onChange={(e) => dispatch({ type: "step", value: Number(e.target.value) || 1 })} className="w-16 rounded border px-2 py-1" />
      </label>
    </div>
  );
}
