import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { getCaughtPokemons } from "@/libs/axiosInstance"
import { ListSeacrh } from "@/interface/IPokemonList"

const ListPokemonSearch = ({ searchPokemons }: ListSeacrh) => {
  const [caughtPokemons, setCaughtPokemons] = useState([])

  useEffect(() => {
    const storedPokemons = getCaughtPokemons()
    setCaughtPokemons(storedPokemons)
  }, [])

  const countOwnedPokemons = (name: string) => {
    return caughtPokemons.filter((pokemon: any) => pokemon.name === name).length
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mt-7">
      {searchPokemons.map((pokemon) => {
        return (
          <Link
            href={`/pokemon/${pokemon.name}`}
            key={pokemon.url}
            className="w-full flex items-center px-3 py-3 bg-white text-black rounded-xl shadow hover:bg-gradient-black-red hover:text-white duration-300"
          >
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
                .split("/")
                .slice(-2, -1)}.png`}
              alt={pokemon.name}
              width={80}
              height={40}
            />
            <div className="ml-3">
              <h4 className="text-lg font-bold">{pokemon.name}</h4>

              <p className="text-sm hover:text-white ">
                Owned:{" "}
                <span className="font-semibold text-lg text-red-400">
                  {countOwnedPokemons(pokemon.name)}
                </span>
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ListPokemonSearch
