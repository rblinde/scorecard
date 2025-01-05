"use client";

import { useEffect, useReducer } from "react";
import { resetState } from "@/lib/actions";
import { reducer } from "@/lib/reducer";
import { initialState, StoreContext, StoreDispatchContext } from "@/lib/store";

interface StoreProviderProps {
  children: React.ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>{children}</StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}
