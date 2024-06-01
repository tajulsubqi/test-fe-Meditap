"use client"
import Container from "@/app/Container"
import Spinner from "@/components/ui/SpinnerLoading"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useParams } from "next/navigation"

interface TypePokemon {
  pokemon: { name: string }
}

const Page = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery({
    queryKey: ["type", id],
    queryFn: () => Api.get(`/type/${id}`),
  })

  const typePokemon = data?.data.pokemon

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">{data?.data.name}</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {typePokemon?.map((pokemon: TypePokemon) => {
          return (
            <Link
              href={`/pokemon/${pokemon.pokemon.name}`}
              key={pokemon.pokemon.name}
              className="w-full flex items-center px-4 py-3 hover:bg-primary hover:text-white duration-300 bg-white rounded-xl shadow"
            >
              <h4 className="text-lg font-bold">{pokemon.pokemon.name}</h4>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default Page