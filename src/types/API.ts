type PokemonType = {
  name: string;
  url: string;
};

export type PokemonTypesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonType[];
};
