"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import Container from "../Container"

interface IPokemon {
  name: string
  image: string
  nickname: string
}

const PokeBagPage = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem("Pokemons") || "[]")
    setPokemons(storedPokemons)
  }, [])

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Poke Bag</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="w-full flex items-center px-3 py-3 bg-white rounded-xl shadow "
          >
            <Image src={pokemon.image} alt={pokemon.name} width={60} height={60} />
            <div className="ml-3">
              <h4 className="text-xl font-bold">{pokemon.name}</h4>
              <p className="text-sm font-semibold">{pokemon.nickname}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default PokeBagPage
