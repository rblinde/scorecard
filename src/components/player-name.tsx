import { useState } from "react";
import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Label } from "@/components/label";
import { Input } from "@/components/input";

import { changePlayerName, removePlayer } from "@/lib/actions";
import { useStoreDispatch } from "@/lib/store";
import { type Player } from "@/lib/types";

interface PlayerNameProps {
  player: Player;
}

export function PlayerName({ player }: PlayerNameProps) {
  const dispatch = useStoreDispatch();
  const [open, setOpen] = useState(false);

  function save(data: FormData) {
    const name = (data.get("name") as string).trim();

    if (!name) {
      return;
    }

    dispatch(changePlayerName(player.id, name));
    setOpen(false);
  }

  function remove() {
    dispatch(removePlayer(player.id));
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">{player.name}</Button>
      </DialogTrigger>
      <DialogContent className="p-4 gap-2 sm:max-w-[425px]">
        <form action={save}>
          <DialogHeader>
            <DialogTitle>Edit {player.name}</DialogTitle>
            <DialogDescription>Rename or remove this player.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2 py-2">
            <Label htmlFor="name" className="text-sm">
              Name
            </Label>
            <Input id="name" name="name" defaultValue={player.name} className="text-sm" />
          </div>

          <DialogFooter>
            <div className="flex flex-col gap-2">
              <Button type="button" variant="secondary" onClick={remove}>
                Remove
              </Button>
              <Button type="submit">Save changes</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
