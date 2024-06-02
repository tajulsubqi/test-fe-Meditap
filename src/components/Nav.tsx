"use client"
import MenuProfile from "./profile_menu"
import SearchInput from "./ui/SearchInput"

const Nav = () => {
  return (
    <div className="md:flex relative items-center md:justify-between mx-5 top-0 z-50">
      <h1 className="text-xl mb-2 font-serif md:mb-0 md:text-4xl font-bold text-white">
        PokéDex
      </h1>

      <div className="flex gap-2 items-center">
        <SearchInput placeholder="Search Pokemon ..." />
        <MenuProfile />
      </div>
    </div>
  )
}

export default Nav
