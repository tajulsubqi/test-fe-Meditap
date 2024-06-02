import React from "react"

interface Move {
  move: {
    name: string
  }
}

interface MovesListProps {
  moves: Move[]
}
const MoveList = ({ moves }: MovesListProps) => {
  return (
    <div>
      <div className="mt-7">
        <h2 className="text-xl font-bold mt-4">Moves</h2>
        <div className="w-full mt-3 flex gap-2 flex-wrap">
          {moves.map((move: { move: { name: string } }) => (
            <span
              key={move.move.name}
              className="bg-slate-200 text-secondary rounded-full font-semibold px-3 py-1"
            >
              {move.move.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoveList
