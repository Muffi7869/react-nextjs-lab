"use client";
import { useReducer } from "react";

type State = { count: number; step: number; history: number[] };

type Action = { type: "inc" } | { type: "dec" } | { type: "reset" } | { type: "step"; value: number } | { type: "undo" };
