"use client"
import Container from "@/components/Container"
import ListPokemonSearch from "@/components/pokemon_list/ListPokemonSearch"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const Page = ({ params }: { params: { keyword: string } }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword).toLowerCase()

  const { data: pokemons } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => Api.get("/pokemon/?limit=1302"),
  })

  const [filteredPokemons, setFilteredPokemons] = useState([])

  useEffect(() => {
    if (pokemons?.data.results) {
      setFilteredPokemons(
        pokemons.data.results.filter((pokemon: any) =>
          pokemon.name.toLowerCase().startsWith(decodedKeyword.slice(0, 2)),
        ),
      )
    }
  }, [pokemons, decodedKeyword])

  return (
    <Container>
      <h1 className="mt-3 text-2xl font-bold">
        Search pokemon :{" "}
        <span className="text-red-500" style={{ textShadow: "0 0 1px #fff" }}>
          {keyword}...
        </span>
      </h1>
      <ListPokemonSearch searchPokemons={filteredPokemons} />
    </Container>
  )
}

export default Page
