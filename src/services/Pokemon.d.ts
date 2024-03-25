export interface PokemonType {
  id: number;
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
}
