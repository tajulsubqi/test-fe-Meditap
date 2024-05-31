"use client"
import { useQuery } from "@tanstack/react-query"
import { Api } from "@/libs/axiosInstance"
import Spinner from "@/components/ui/SpinnerLoading"
import Container from "../Container"
import Link from "next/link"

interface Gender {
  name: string
  url: string
}

const GendersPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["genders"],
    queryFn: () => Api.get("/gender"),
  })

  console.log(data)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Genders</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        {data?.data.results.map(async (gender: Gender) => {
          return (
            <Link
              href={`/genders/${gender.name}`}
              key={gender.name}
              className="w-full flex items-center hover:bg-primary hover:text-white duration-300 px-4 py-3 bg-white rounded-xl shadow"
            >
              <h4 className="text-lg font-bold">{gender.name}</h4>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}

export default GendersPage
