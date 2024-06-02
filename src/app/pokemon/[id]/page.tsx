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
import { BiSolidRightArrow } from "react-icons/bi"

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

  console.log(pokemon)

  return (
    <>
      <Container>
        <div className="flex mt-7 gap-x-2 items-center">
          <BiSolidRightArrow color="red" size={20} />
          <h1 className="text-3xl font-medium">Overview</h1>
        </div>

        <div className="flex flex-col">
          <div className="md:ml-14 md:flex items-center">
            <div className="mt-3 md:mt-3">
              <h1 className="text-4xl font-bold">{pokemon.name}</h1>
              <div className="flex my-3 items-center gap-2">
                {pokemon.types.map((item: { type: { name: string } }) => (
                  <span
                    key={item.type.name}
                    className="bg-Red-60 text-white text-sm rounded-lg px-3 py-1"
                    style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)" }}
                  >
                    {item.type.name}
                  </span>
                ))}
              </div>

              <div className="border border-red-400 mt-7 bg-gray-800 rounded-2xl">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={250}
                  height={50}
                  className=""
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={250}
                  height={50}
                  className="-mt-16"
                />
              </div>
            </div>

            {/* Detail */}
            <div className="md:ml-7">
              <div className="md:mt-36 mt-5">
                <h2 className="text-xl font-bold mb-1">Physical</h2>
                <div className="text-sm text-slate-300">
                  <p className="">
                    Height: <span className="ml-2">{data.data.height} cm</span>
                  </p>
                  <p className="">
                    Weight: <span className="ml-2">{data.data.weight} cm</span>
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-xl font-bold mb-1">Abilities</h2>
                <div className="w-full flex gap-2 flex-wrap">
                  {data.data.abilities.map((ability: { ability: { name: string } }) => (
                    <span
                      key={ability.ability.name}
                      className="bg-primary_brown text-white rounded-full font-semibold px-3 py-1"
                    >
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-xl font-bold mb-1">Stats</h2>
                {data.data.stats.map(
                  (stat: { stat: { name: string }; base_stat: number }) => (
                    <div
                      key={stat.stat.name}
                      className="flex gap-3 text-slate-300 items-center"
                    >
                      <p className="w-[300px] text-sm">{stat.stat.name}</p>
                      <div className="w-full h-2 bg-red-500" />
                      <p className="font-bold">{stat.base_stat}</p>
                    </div>
                  ),
                )}

                <div className="mt-7">
                  <Button text="Catch the Pokemon" onClick={() => setIsOpen(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moves */}
        <div className="mt-7">
          <h2 className="text-xl font-bold mt-4">Moves</h2>
          <div className="w-full mt-3 flex gap-2 flex-wrap">
            {data.data.moves.map((move: { move: { name: string } }) => (
              <span
                key={move.move.name}
                className="bg-slate-200 text-secondary rounded-full font-semibold px-3 py-1"
              >
                {move.move.name}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <ModalAddPokemon
        handleCatchPokemon={handleCatchPokemon}
        open={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default PokemonDetail
