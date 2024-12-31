import { v4 as uuid } from "uuid";
import { Player } from "@/lib/types";

export function generatePlayer(): Player {
  return {
    id: uuid(),
    name: "Player",
    score: 0,
  };
}

export function generatePlayers(n: number): Player[] {
  return Array.from({ length: n }).map(generatePlayer);
}
