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
