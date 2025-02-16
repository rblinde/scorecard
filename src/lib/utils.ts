import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Player, Sort } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortPlayers(direction: Sort) {
  if (direction === Sort.DESC) {
    return (a: Player, b: Player) => b.score - a.score;
  }

  return (a: Player, b: Player) => a.score - b.score;
}

export function tryParse<T>(data: string | null): T | null {
  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}
