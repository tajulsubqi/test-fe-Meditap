import React from "react"

interface PhysicalProps {
  height: number
  weight: number
}

const Physical = ({ height, weight }: PhysicalProps) => {
  return (
    <div className="md:mt-36 mt-5">
      <h2 className="text-xl font-bold mb-1">Physical</h2>
      <div className="text-sm text-slate-300">
        <p>
          Height: <span className="ml-2">{height} cm</span>
        </p>
        <p>
          Weight: <span className="ml-2">{weight} cm</span>
        </p>
      </div>
    </div>
  )
}

export default Physical
