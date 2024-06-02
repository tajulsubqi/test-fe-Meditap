"use client"
import Loading from "@/app/loading"
import Container from "@/components/Container"
import { PokemonGenders } from "@/interface"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useParams } from "next/navigation"

const Page = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useQuery({
    queryKey: ["genders", id],
    queryFn: () => Api.get(`/gender/${id}`),
  })

  const genderPokemon = data?.data.pokemon_species_details

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">{data?.data.name}</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full text-black">
        {genderPokemon.map((pokemon: PokemonGenders) => {
          return (
            <Link
              href={`/pokemon/${pokemon.pokemon_species.name}`}
              key={pokemon.pokemon_species.name}
              className="w-full flex items-center px-4 py-3 hover:bg-gradient-black-red hover:text-white duration-300 bg-white rounded-xl shadow"
            >
              <h4 className="text-lg font-bold">{pokemon.pokemon_species.name}</h4>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default Page
