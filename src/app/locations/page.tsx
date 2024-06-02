"use client"
import { ILocations } from "@/interface"
import { Api } from "@/libs/axiosInstance"
import { useQuery } from "@tanstack/react-query"
import Container from "../../components/Container"
import Loading from "../loading"

const LocationsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["locations"],
    queryFn: () => Api.get("location?limit=1036"),
  })

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Locations</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 w-full text-black">
        {data?.data.results.map((location: ILocations) => (
          <div
            key={location.name}
            className="w-full flex items-center px-4 py-3 bg-white hover:bg-gradient-black-red hover:text-white duration-300 rounded-xl shadow"
          >
            <h4 className="text-lg font-bold">{location.name}</h4>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default LocationsPage
