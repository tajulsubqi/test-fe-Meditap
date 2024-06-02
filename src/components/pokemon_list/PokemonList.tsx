import Link from "next/link"
import Image from "next/image"
import { IPokemonList } from "@/interface/IPokemonList"

const PokemonList = ({ name, url, image, ownedCount }: IPokemonList) => {
  return (
    <Link
      href={`/pokemon/${name}`}
      key={url}
      className="w-full flex items-center px-3 py-3 bg-white text-black rounded-xl shadow hover:bg-gradient-black-red hover:text-white duration-300"
    >
      <Image src={image} alt={name} width={80} height={40} />
      <div className="ml-3">
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-sm hover:text-white ">
          Owned: <span className="font-semibold text-lg text-red-400">{ownedCount}</span>
        </p>
      </div>
    </Link>
  )
}

export default PokemonList
