"use client"
import Container from "@/components/Container"
import ModalAddPokemon from "@/components/Modal"
import Abilities from "@/components/pokemon_detail/Abilities"
import MoveList from "@/components/pokemon_detail/MoveList"
import Physical from "@/components/pokemon_detail/Physical"
import PokemonTypes from "@/components/pokemon_detail/PokemonType"
import Stats from "@/components/pokemon_detail/Stats"
import PokemonDetailSkeleton from "@/components/skeleton/pokemonDetailSkeleton"
import Button from "@/components/ui/Button"
import usePokemonDetail from "@/hooks/usePokemonDetail"
import Image from "next/image"
import { useParams } from "next/navigation"
import { BiSolidRightArrow } from "react-icons/bi"

const PokemonDetail = () => {
  const { detail } = useParams<{ detail: string }>()
  const { data, isLoading, isOpen, setIsOpen, handleCatchPokemon } =
    usePokemonDetail(detail)

  if (isLoading || !data) {
    return <PokemonDetailSkeleton />
  }

  const pokemon = data.data

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

              <PokemonTypes types={data.data.types} />

              <div className="border flex md:flex-col items-center justify-center border-red-400 mt-7 bg-gradient-to-tr from-slate-50 to-slate-300 rounded-2xl">
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
                  className="md:-mt-16"
                />
              </div>
            </div>

            {/* Detail */}
            <div className="md:ml-7">
              <Physical height={data.data.height} weight={data.data.weight} />
              <Abilities abilities={data.data.abilities} />
              <Stats stats={data.data.stats} />

              <Button
                className="mt-7"
                text="Catch the Pokemon"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* <StatsRadar stats={data.data.stats}  /> */}
          </div>
        </div>

        {/* Moves */}
        <MoveList moves={data.data.moves} />
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
