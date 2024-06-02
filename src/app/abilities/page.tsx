"use client"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Container from "../../components/Container"
import Loading from "../loading"

const AbilitiesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["abilities"],
    queryFn: () => Api.get("ability?limit=367"),
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Abilities</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 text-black lg:grid-cols-4 xl:grid-cols-5 w-full">
        {data?.data.results.map((ability: any) => (
          <div
            key={ability.name}
            className="w-full flex items-center px-4 py-3 bg-white rounded-xl shadow"
          >
            <h4 className="text-lg font-bold">{ability.name}</h4>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default AbilitiesPage
