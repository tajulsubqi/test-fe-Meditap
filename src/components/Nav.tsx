import React from "react"
import SearchInput from "./ui/SearchInput"

const Nav = () => {
  return (
    <div className="md:flex md:justify-between mx-5">
      <h1 className="text-xl mb-2 font-serif md:mb-0 md:text-4xl font-bold text-white">
        PokéDex
      </h1>

      <div className="flex gap-2 items-center">
        <SearchInput placeholder="Search Pokemon ..." />
        {/* <SearchInput placeholder="Search Pokemon ..." /> */}
      </div>
    </div>
  )
}

export default Nav
