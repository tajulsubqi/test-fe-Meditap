import { useEffect, useState } from "react"
import { getCaughtPokemons } from "@/libs/axiosInstance"

interface Pokemon {
  name: string
}

const useCaughtPokemons = () => {
  const [caughtPokemons, setCaughtPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const storedPokemons = getCaughtPokemons()
    setCaughtPokemons(storedPokemons)
  }, [])

  const countOwnedPokemons = (name: string) => {
    return caughtPokemons.filter((pokemon) => pokemon.name === name).length
  }

  return { caughtPokemons, countOwnedPokemons }
}

export default useCaughtPokemons
