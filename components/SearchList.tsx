"use client";
import { useMemo, useState } from "react";
import { useDebounce } from "../hooks/hooks";

export type Course = { code: string; title: string; units: number; dept: string };
