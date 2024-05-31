"use client"
import { Api } from "@/libs/axiosInstance"
import Container from "../Container"
import { useQuery } from "@tanstack/react-query"
import Spinner from "@/components/ui/SpinnerLoading"
import Link from "next/link"

interface Moves {
  name: string
}

const MovesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["moves"],
    queryFn: () => Api.get("move?limit=937"),
  })

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Moves</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {data?.data.results.map((move: Moves) => (
          <Link
            href={`/moves/${move.name}`}
            key={move.name}
            className="w-full flex items-center px-4 py-3 hover:bg-slate-200 duration-300 bg-white rounded-xl shadow"
          >
            <h4 className="text-lg font-bold">{move.name}</h4>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default MovesPage
