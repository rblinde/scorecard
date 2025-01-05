"use client";

import { createContext, Dispatch, useContext } from "react";
import { type StoreAction } from "@/lib/actions";
import { type Store, Sort } from "@/lib/types";

export const initialState = { players: [], sort: Sort.DESC };

export const StoreContext = createContext<Store>(initialState);

export const StoreDispatchContext = createContext<Dispatch<StoreAction>>(() => null);

export function useStore() {
  return useContext(StoreContext);
}

export function useStoreDispatch() {
  return useContext(StoreDispatchContext);
}
