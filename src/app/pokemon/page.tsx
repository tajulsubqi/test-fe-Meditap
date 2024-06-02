"use client"
import PokemonList from "@/components/pokemon_list/PokemonList"
import Pagination from "@/components/ui/Pagination"
import { IPokemon } from "@/interface"
import { Api, getCaughtPokemons } from "@/libs/axiosInstance"
import { Skeleton } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import Container from "../../components/Container"

const PokemonPage = () => {
  const { data: pokemons, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => Api.get("/pokemon/?limit=402"),
  })

  // Pagination State
  const [page, setPage] = useState(1)
  const itemsPerPage = 35
  const totalPages = Math.ceil(pokemons?.data.results.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, pokemons?.data.results.length)

  const handleChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  const [caughtPokemons, setCaughtPokemons] = useState([])

  useEffect(() => {
    const storedPokemons = getCaughtPokemons()
    setCaughtPokemons(storedPokemons)
  }, [])

  // Fungsi untuk menghitung jumlah Pokemon yang dimiliki berdasarkan nama
  const countOwnedPokemons = (name: string) => {
    return caughtPokemons.filter((pokemon: any) => pokemon.name === name).length
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Pokemon</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {isLoading
          ? // Tampilkan Skeleton saat data sedang dimuat
            Array.from({ length: itemsPerPage }).map((_, index) => (
              <div
                key={index}
                className="w-full flex items-center px-3 py-3 bg-white rounded-xl shadow"
              >
                <Skeleton variant="rectangular" width={60} height={60} />
                <div className="ml-3">
                  <Skeleton width={100} height={20} />
                  <Skeleton width={80} height={15} />
                </div>
              </div>
            ))
          : // Map through the data based on current page
            pokemons?.data.results
              .slice(startIndex, endIndex)
              .map(async (pokemon: IPokemon) => {
                const response = await Api.get(pokemon.url)
                const image = response.data.sprites.front_default
                const ownedCount = countOwnedPokemons(pokemon.name)

                return (
                  <PokemonList
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    image={image}
                    ownedCount={ownedCount}
                  />
                )
              })}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handleChange}
      />
    </Container>
  )
}

export default PokemonPage
