import { ActionTypes, type StoreAction } from "@/lib/actions";
import { generatePlayer, generatePlayers } from "@/lib/random";
import { Sort, Store } from "@/lib/types";

export function reducer(store: Store, action: StoreAction): Store {
  switch (action.type) {
    case ActionTypes.LOAD:
      return action.value;
    case ActionTypes.RESET_ALL:
      return {
        ...store,
        players: generatePlayers(2),
      };
    case ActionTypes.RESET_SCORES:
      return {
        ...store,
        players: store.players.map((player) => ({ ...player, score: 0 })),
      };
    case ActionTypes.ADD:
      return { ...store, players: [...store.players, generatePlayer()] };
    case ActionTypes.REMOVE:
      return {
        ...store,
        players: store.players.filter((item) => item.id !== action.id),
      };
    case ActionTypes.SCORE:
      return {
        ...store,
        players: store.players.map((player) => {
          if (player.id === action.id) {
            return { ...player, score: player.score + action.delta };
          } else {
            return player;
          }
        }),
      };
    case ActionTypes.CHANGE:
      return {
        ...store,
        players: store.players.map((player) => {
          if (player.id === action.id) {
            return { ...player, name: action.name };
          } else {
            return player;
          }
        }),
      };
    case ActionTypes.SORT:
      return {
        ...store,
        sort: store.sort === Sort.DESC ? Sort.ASC : Sort.DESC,
      };
    default:
      return store;
  }
}
