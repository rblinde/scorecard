import { ArrowDown01, ArrowUp10 } from "lucide-react";
import { Button } from "@/components/button";
import { sort } from "@/lib/actions";
import { useStore, useStoreDispatch } from "@/lib/store";
import { Sort } from "@/lib/types";

export function SortButton() {
  const store = useStore();
  const dispatch = useStoreDispatch();

  return (
    <Button size="icon" onClick={() => dispatch(sort())}>
      {store.sort === Sort.DESC ? <ArrowUp10 /> : <ArrowDown01 />}
    </Button>
  );
}
