import axios from "axios"

export const Api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

export const AuthApi = axios.create({
  baseURL: "https://techtest.youapp.ai/api",
})

// Get Caught Pokemons
export const getCaughtPokemons = () => {
  const data = JSON.parse(localStorage.getItem("Pokemons") || "[]")
  return data
}
