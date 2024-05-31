"use client"
import { useState } from "react"
import { Tabs, Tab, Box, Typography } from "@mui/material"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const TabItems = ({ data }: { data: any }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="md:w-full bg-white rounded-t-3xl h-[420px]">
      <Tabs
        className="w-full flex justify-center mb-5"
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab className="md:w-full font-bold" label="About" {...a11yProps(0)} />
        <Tab className="md:w-full font-bold" label="Base Stats" {...a11yProps(1)} />
        <Tab className="md:w-full font-bold" label="Moves" {...a11yProps(2)} />
        <Tab className="md:w-full font-bold" label="Abilities" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h2 className="text-xl font-bold mb-1">Physical</h2>
        <p className="">Height: {data.height} cm</p>
        <p className="">Weight: {data.weight} kg</p>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h2 className="text-xl font-bold mb-1">Stats</h2>
        {data.stats.map((stat: { stat: { name: string }; base_stat: number }) => (
          <div key={stat.stat.name} className="flex gap-3 items-center justify-between">
            <p className="w-1/2 md:w-1/12">{stat.stat.name}</p>
            <div className="w-full h-2 bg-success rounded" />
            <p className="font-bold">{stat.base_stat}</p>
          </div>
        ))}
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div className="w-full flex gap-2 flex-wrap">
          {data.moves.map((move: { move: { name: string } }) => (
            <span
              key={move.move.name}
              className="bg-primary text-white rounded-lg font-semibold px-3 py-1"
            >
              {move.move.name}
            </span>
          ))}
        </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <div className="w-full flex gap-2 flex-wrap">
          {data.abilities.map((ability: { ability: { name: string } }) => (
            <span
              key={ability.ability.name}
              className="bg-primary_brown text-white rounded-lg font-semibold px-3 py-1"
            >
              {ability.ability.name}
            </span>
          ))}
        </div>
      </TabPanel>
    </div>
  )
}

export default TabItems
