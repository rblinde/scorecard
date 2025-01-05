"use client";

import { useEffect, useReducer } from "react";
import { load } from "@/lib/actions";
import { reducer } from "@/lib/reducer";
import { initialState, StoreContext, StoreDispatchContext } from "@/lib/store";
import { Store } from "@/lib/types";
import { tryParse } from "@/lib/utils";

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const stored = tryParse<Store>(localStorage.getItem("sscore.store"));

    if (stored) {
      dispatch(load(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sscore.store", JSON.stringify(store));
  }, [store]);

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>{children}</StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}
