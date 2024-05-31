import Image from "next/image"
import Link from "next/link"
import React from "react"

interface PokemonListProps {
  key: string
  image: string
  name: string
}

const PokemonList = ({ key, image, name }: PokemonListProps) => {
  return (
    <Link
      href={`/pokemon/${key}`}
      key={key}
      className="w-full flex items-center px-3 py-3 bg-white rounded-xl shadow hover:bg-slate-200 duration-300"
    >
      <Image src={image} alt="pokemon" width={60} height={60} />
      <div className="ml-3">
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-sm">Owned: 0</p>
      </div>
    </Link>
  )
}

export default PokemonList
