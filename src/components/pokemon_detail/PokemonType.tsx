import React from "react"

interface PokemonTypesProps {
  types: { type: { name: string } }[]
}

const PokemonTypes = ({ types }: PokemonTypesProps) => {
  return (
    <div className="flex my-3 items-center gap-2">
      {types.map((item) => (
        <span
          key={item.type.name}
          className="bg-Red-60 text-white text-sm rounded-full px-3 py-1"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)" }}
        >
          {item.type.name}
        </span>
      ))}
    </div>
  )
}

export default PokemonTypes
