import { Player, Store } from "@/lib/types";

export enum ActionTypes {
  LOAD = "LOAD",
  RESET_ALL = "RESET_ALL",
  RESET_SCORES = "RESET_SCORES",
  ADD = "ADD",
  REMOVE = "REMOVE",
  SCORE = "SCORE",
  CHANGE = "CHANGE",
  SORT = "SORT",
}

export type StoreAction =
  | {
      type: ActionTypes.LOAD;
      value: Store;
    }
  | {
      type: ActionTypes.RESET_ALL;
    }
  | {
      type: ActionTypes.RESET_SCORES;
    }
  | {
      type: ActionTypes.ADD;
    }
  | {
      type: ActionTypes.REMOVE;
      id: Player["id"];
    }
  | {
      type: ActionTypes.SCORE;
      id: Player["id"];
      delta: number;
    }
  | {
      type: ActionTypes.CHANGE;
      id: Player["id"];
      name: Player["name"];
    }
  | {
      type: ActionTypes.SORT;
    };

export function load(value: Store): StoreAction {
  return { type: ActionTypes.LOAD, value };
}

export function addPlayer(): StoreAction {
  return { type: ActionTypes.ADD };
}

export function removePlayer(id: Player["id"]): StoreAction {
  return { type: ActionTypes.REMOVE, id };
}

export function resetState(): StoreAction {
  return { type: ActionTypes.RESET_ALL };
}

export function resetScores(): StoreAction {
  return { type: ActionTypes.RESET_SCORES };
}

export function updateScore(id: Player["id"], delta: number): StoreAction {
  return { type: ActionTypes.SCORE, id, delta };
}

export function changePlayerName(id: Player["id"], name: Player["name"]): StoreAction {
  return { type: ActionTypes.CHANGE, id, name };
}

export function sort(): StoreAction {
  return { type: ActionTypes.SORT };
}
