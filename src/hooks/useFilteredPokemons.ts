import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Api } from "@/libs/axiosInstance"

const useFilteredPokemons = (keyword: string) => {
  const decodedKeyword = decodeURI(keyword).toLowerCase()

  const { data: pokemons, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => Api.get("/pokemon/?limit=1302"),
  })

  const [filteredPokemons, setFilteredPokemons] = useState([])

  useEffect(() => {
    if (pokemons?.data.results) {
      setFilteredPokemons(
        pokemons.data.results.filter((pokemon: any) =>
          pokemon.name.toLowerCase().startsWith(decodedKeyword.slice(0, 4)),
        ),
      )
    }
  }, [pokemons, decodedKeyword])

  return { filteredPokemons, isLoading }
}

export default useFilteredPokemons
