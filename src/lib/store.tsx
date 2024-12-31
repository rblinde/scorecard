"use client";

import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { ActionTypes, resetState, type StoreAction } from "@/lib/actions";
import { generatePlayer, generatePlayers } from "@/lib/random";
import { type Player } from "@/lib/types";

const StoreContext = createContext<Player[]>([]);

const StoreDispatchContext = createContext<Dispatch<StoreAction>>(() => null);

function reducer(store: Player[], action: StoreAction) {
  switch (action.type) {
    case ActionTypes.RESET_ALL:
      return [...generatePlayers(2)];
    case ActionTypes.RESET_SCORES:
      return store.map((player) => ({ ...player, score: 0 }));
    case ActionTypes.ADD:
      return [...store, generatePlayer()];
    case ActionTypes.REMOVE:
      return store.filter((item) => item.id !== action.id);
    case ActionTypes.SCORE:
      return store.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + action.delta };
        } else {
          return player;
        }
      });
    case ActionTypes.CHANGE:
      return store.map((player) => {
        if (player.id === action.id) {
          return { ...player, name: action.name };
        } else {
          return player;
        }
      });
    default:
      return store;
  }
}

export function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [store, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>{children}</StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}

export function useStoreDispatch() {
  return useContext(StoreDispatchContext);
}
