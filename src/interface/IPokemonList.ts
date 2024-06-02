export interface IPokemon {
  name: string
  url: string
}

export interface ListSeacrh {
  searchPokemons: IPokemon[]
}

export interface IPokemonList {
  name: string
  url: string
  image: string
  ownedCount: number
}
