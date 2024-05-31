import Image from "next/image"
import Container from "../Container"
import pokemon from "../../../public/assets/pokemon.png"

const PokemonPage = () => {
  return (
    <Container>
      <h1 className="my-7 text-3xl font-bold">Pokemon</h1>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
        <div className="w-full flex items-center px-3 py-3 bg-white rounded-xl shadow">
          <Image src={pokemon} alt="pokemon" width={60} height={60} />
          <div className="ml-3">
            <h4 className="text-lg font-bold">Charmander</h4>
            <p className="text-sm">Owned: 0</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PokemonPage
