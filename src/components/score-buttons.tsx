import { Button } from "@/components/button";
import { updateScore } from "@/lib/actions";
import { useStoreDispatch } from "@/lib/store";
import { type Player } from "@/lib/types";

const DELTAS = [-5, -1, 1, 5];

interface ScoreButtonsProps {
  id: Player["id"];
}

export function ScoreButtons({ id }: ScoreButtonsProps) {
  const dispatch = useStoreDispatch();

  function update(delta: number) {
    dispatch(updateScore(id, delta));
  }

  return (
    <div className="flex gap-1 items-center">
      {DELTAS.map((delta) => (
        <Button key={delta} size="icon" variant="outline" onClick={() => update(delta)}>
          {delta > 0 && "+"}
          {delta}
        </Button>
      ))}
    </div>
  );
}
