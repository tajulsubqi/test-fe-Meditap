import React from "react"

interface Stat {
  stat: {
    name: string
  }
  base_stat: number
}

interface StatsProps {
  stats: Stat[]
}

const SkillsBar = ({ stats }: StatsProps) => {
  const maxStatValue = 100

  return (
    <div>
      <div className="mt-7">
        <h2 className="text-xl font-bold mb-1">Stats</h2>
        {stats.map((stat: { stat: { name: string }; base_stat: number }) => (
          <div key={stat.stat.name} className="flex gap-3 text-slate-300 items-center">
            <p className="w-[130px] text-sm">{stat.stat.name}</p>
            <div className="relative w-[150px] md:w-[200px] lg:w-[400px] h-2 bg-white rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-teal-500 border-2 border-teal-700 rounded-full"
                style={{ width: `${(stat.base_stat / maxStatValue) * 100}%` }}
              ></div>
            </div>
            <p className="font-bold">{stat.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsBar
