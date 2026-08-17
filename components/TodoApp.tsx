"use client";
import { useMemo, useState, type FormEvent } from "react";
import { useLocalStorage } from "../hooks/hooks";

export type Todo = { id: number; text: string; done: boolean };

type Filter = "all" | "active" | "done";
