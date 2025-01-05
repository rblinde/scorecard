"use client";

import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";
import { resetState, type StoreAction } from "@/lib/actions";
import { type Store, Sort } from "@/lib/types";
import { reducer } from "@/lib/reducer";

const initialState = { players: [], sort: Sort.DESC };

const StoreContext = createContext<Store>(initialState);

const StoreDispatchContext = createContext<Dispatch<StoreAction>>(() => null);

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

export function useStore() {
  return useContext(StoreContext);
}

export function useStoreDispatch() {
  return useContext(StoreDispatchContext);
}
