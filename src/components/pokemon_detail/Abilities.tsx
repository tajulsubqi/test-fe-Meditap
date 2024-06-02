import React from "react"

interface Ability {
  ability: {
    name: string
  }
}

interface AbilitiesProps {
  abilities: Ability[]
}

const Abilities = ({ abilities }: AbilitiesProps) => {
  return (
    <div className="mt-7">
      <h2 className="text-xl font-bold mb-1">Abilities</h2>
      <div className="w-full flex gap-2 flex-wrap">
        {abilities.map((ability) => (
          <span
            key={ability.ability.name}
            className="bg-primary_brown text-white rounded-full font-semibold px-3 py-1"
          >
            {ability.ability.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Abilities
