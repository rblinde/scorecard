export interface Player {
  id: string;
  name: string;
  score: number;
}

export enum Sort {
  ASC = "ASC",
  DESC = "DESC",
}

export interface Store {
  players: Player[];
  sort: Sort;
}
