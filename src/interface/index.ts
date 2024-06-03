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

export interface Gender {
  name: string
  url: string
}

export interface Moves {
  name: string
}

export interface IPokemon {
  name: string
  image: string
  nickname: string
}

export interface TypePokemon {
  pokemon: { name: string }
}

export interface Session {
  name: string
  email: string
  username: string
}
