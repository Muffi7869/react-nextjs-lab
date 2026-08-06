"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage full or blocked, ignore */
    }
  }, [key, value]);
  return [value, setValue] as const;
}

export function useDebounce<T>(value: T, ms = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return debounced;
}

export type FetchState<T> = { data: T | null; error: string | null; loading: boolean };

export function useFetch<T>(url: string | null) {
  const [state, setState] = useState<FetchState<T>>({ data: null, error: null, loading: !!url });
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!url) return;
    const ctrl = new AbortController();
    setState((s) => ({ ...s, loading: true, error: null }));
    fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data: T) => setState({ data, error: null, loading: false }))
      .catch((e: Error) => {
        if (e.name !== "AbortError") setState({ data: null, error: e.message, loading: false });
      });
    return () => ctrl.abort();
  }, [url, tick]);
  const refetch = useCallback(() => setTick((t) => t + 1), []);
  return { ...state, refetch };
}

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  return [on, toggle, setOn] as const;
}
