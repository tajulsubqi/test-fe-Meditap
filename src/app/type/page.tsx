"use client"
import { IPokemon } from "@/interface"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import Container from "../../components/Container"
import Loading from "../loading"

const TypesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["types"],
    queryFn: () => Api.get("/type"),
  })
  const types = data?.data.results

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Types</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full text-black">
        {types?.map((type: IPokemon) => (
          <Link
            href={`/type/${type.name}`}
            key={type.name}
            className="w-full flex items-center px-4 hover:bg-gradient-black-red hover:text-white duration-300 py-3 bg-white rounded-xl shadow"
          >
            <h4 className="text-lg font-bold">{type.name}</h4>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default TypesPage
