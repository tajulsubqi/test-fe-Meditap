export interface IPokemon {
  name: string
  url: string
}

export interface PokemonGenders {
  pokemon_species: IPokemon
}

export interface ILocations {
  name: string
}

export interface UserType {
  email: string | ""
  username?: string
  password: string
  confirmPassword?: string
}
