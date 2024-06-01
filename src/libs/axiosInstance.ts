import axios from "axios"

export const Api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

// Get Caught Pokemons
export const getCaughtPokemons = () => {
  const data = JSON.parse(localStorage.getItem("Pokemons") || "[]")
  return data
}
