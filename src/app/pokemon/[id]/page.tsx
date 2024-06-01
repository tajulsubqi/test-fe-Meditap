"use client"
import Container from "@/components/Container"
import ModalAddPokemon from "@/components/Modal"
import TabItems from "@/components/TabItems"
import PokemonDetailSkeleton from "@/components/skeleton/pokemonDetailSkeleton"
import Button from "@/components/ui/Button"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

const PokemonDetail = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => Api.get(`/pokemon/${id}`),
  })

  const [isOpen, setIsOpen] = useState(false)

  if (isLoading || !data) {
    return <PokemonDetailSkeleton />
  }

  const handleCatchPokemon = (nickname: string) => {
    const existingData = JSON.parse(localStorage.getItem("Pokemons") || "[]")
    const newData = {
      nickname,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
    }
    existingData.push(newData)
    localStorage.setItem("Pokemons", JSON.stringify(existingData))
    setIsOpen(false)
  }

  const pokemon = data.data

  return (
    <>
      <Container className="bg-gray-800 rounded-b-[50px]">
        <h1 className="my-7 text-3xl font-bold">{pokemon.name}</h1>

        <div className="flex items-center gap-2">
          {pokemon.types.map((item: { type: { name: string } }) => (
            <span
              key={item.type.name}
              className="bg-teal-400 text-white rounded-lg font-semibold px-3 py-1"
              style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)" }}
            >
              {item.type.name}
            </span>
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className="-mr-10"
            />
            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={200}
              height={200}
              className="-ml-10"
            />
          </div>

          <Button text="Catch the Pokemon" onClick={() => setIsOpen(true)} />
        </div>
      </Container>

      <TabItems data={pokemon} />
      <ModalAddPokemon
        handleCatchPokemon={handleCatchPokemon}
        open={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default PokemonDetail
