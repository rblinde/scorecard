"use client";

import { PlayerName } from "@/components/player-name";
import { ScoreButtons } from "@/components/score-buttons";
import { useStore } from "@/lib/store";
import { sortPlayers } from "@/lib/utils";

export function List() {
  const store = useStore();
  const players = store.players.sort(sortPlayers(store.sort));

  return (
    <div className="flex flex-col gap-2 mt-4">
      {players.map((player, i) => (
        <div
          key={player.id}
          className="p-3 flex items-center justify-between border rounded-md shadow"
        >
          <div className="flex gap-2 items-center flex-1">
            <span className="text-blue-500">#{i + 1}</span>
            <PlayerName player={player} />
          </div>
          <div className="flex gap-4 items-center">
            <span className="font-semibold text-blue-500">{player.score}</span>
            <ScoreButtons id={player.id} />
          </div>
        </div>
      ))}

      {!store.players.length && (
        <p className="pt-4 text-sm text-center text-muted-foreground">
          No players found. Add some!
        </p>
      )}
    </div>
  );
}
