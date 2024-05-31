"use client"
import { Api } from "@/libs/axiosInstance"
import { Skeleton } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import Container from "../Container"
import { IPokemon } from "@/interface"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useState } from "react"

const PokemonPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => Api.get("/pokemon/?limit=1302"),
  })

  // Pagination State
  const [page, setPage] = useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const itemsPerPage = 35
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, data?.data.results.length)

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
            data?.data.results
              .slice(startIndex, endIndex)
              .map(async (pokemon: IPokemon) => {
                const response = await Api.get(pokemon.url)
                const image = response.data.sprites.back_default
                return (
                  <Link
                    href={`/pokemon/${pokemon.name}`}
                    key={pokemon.url}
                    className="w-full flex items-center px-3 py-3 bg-white rounded-xl shadow hover:bg-slate-200 duration-300"
                  >
                    <Image src={image} alt="pokemon" width={60} height={60} />
                    <div className="ml-3">
                      <h4 className="text-lg font-bold">{pokemon.name}</h4>
                      <p className="text-sm">Owned: 0</p>
                    </div>
                  </Link>
                )
              })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Stack spacing={2} justifyContent="center" mt={5}>
          <Pagination
            color="primary"
            variant="outlined"
            count={Math.ceil(data?.data.results.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </Container>
  )
}

export default PokemonPage
