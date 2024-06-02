import Link from "next/link"

const NavLink = () => {
  return (
    <div className="flex flex-wrap gap-y-5 my-5">
      <div className="w-full flex gap-3 items-center">
        <Link
          href={"/pokemon"}
          className={`w-full py-5 px-5 font-semibold text-white rounded-lg bg-teal-500 hover:bg-teal-600 duration-300 transition`}
        >
          Pokemon
        </Link>
        <Link
          href={"/moves"}
          className={`w-full py-5 px-5 font-semibold text-white rounded-lg bg-amber-600 hover:bg-amber-700 duration-300 transition`}
        >
          Moves
        </Link>
      </div>

      <div className="w-full flex gap-3 items-center">
        <Link
          href={"/abilities"}
          className={`w-full py-5 px-5 font-semibold text-white rounded-lg bg-sky-500 hover:bg-sky-700 duration-300 transition`}
        >
          Abilities
        </Link>
        <Link
          href={"/genders"}
          className={`w-full py-5 px-5 font-semibold text-white rounded-lg bg-accent hover:bg-yellow-600 duration-300 transition`}
        >
          Genders
        </Link>
      </div>

      <div className="w-full flex gap-3 items-center">
        <Link
          href={"/locations"}
          className={`w-full py-5 px-5 font-semibold text-white rounded-lg bg-primary_purple hover:bg-purple-500 duration-300 transition`}
        >
          Locations
        </Link>
        <Link
          href={"/type"}
          className={`w-full py-5 px-5 font-semibold text-white rounded-lg bg-red-400 hover:bg-red-500 duration-300 transition`}
        >
          Types
        </Link>
      </div>
    </div>
  )
}

export default NavLink
