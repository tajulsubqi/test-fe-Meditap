"use client"
import Loading from "@/app/loading"
import Container from "@/components/Container"
import { TypePokemon } from "@/interface"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useParams } from "next/navigation"

const Page = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useQuery({
    queryKey: ["type", id],
    queryFn: () => Api.get(`/type/${id}`),
  })

  const typePokemon = data?.data.pokemon
  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">{data?.data.name}</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full text-black">
        {typePokemon?.map((pokemon: TypePokemon) => {
          return (
            <Link
              href={`/pokemon/${pokemon.pokemon.name}`}
              key={pokemon.pokemon.name}
              className="w-full flex items-center hover:bg-gradient-black-red hover:text-white duration-300 px-4 py-3 hover:bg-primary bg-white rounded-xl shadow"
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
