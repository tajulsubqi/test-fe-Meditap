"use client"
import Loading from "@/app/loading"
import NotFound from "@/app/not-found"
import Container from "@/components/Container"
import ListPokemonSearch from "@/components/pokemon_list/ListPokemonSearch"
import useFilteredPokemons from "@/hooks/useFilteredPokemons"

const Page = ({ params }: { params: { keyword: string } }) => {
  const { keyword } = params
  const { filteredPokemons, isLoading } = useFilteredPokemons(keyword)
  if (filteredPokemons.length === 0) {
    return <NotFound />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container>
      <h1 className="mt-3 text:xl md:text-2xl font-bold">
        Search pokemon :{" "}
        <span className="text-red-500 ml-2" style={{ textShadow: "0 0 1px #fff" }}>
          {keyword}...
        </span>
      </h1>
      <ListPokemonSearch searchPokemons={filteredPokemons} />
    </Container>
  )
}

export default Page
