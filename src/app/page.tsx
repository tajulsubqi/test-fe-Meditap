"use client"
import Banner from "@/components/Banner"
import Nav from "@/components/Nav"
import NavLink from "@/components/NavLink"
import { BiSolidRightArrow } from "react-icons/bi"

const Home = () => {
  return (
    <>
      <section className="mt-6 pb-4">
        <Nav />
      </section>

      <section className="mt-2">
        <Banner />
      </section>

      <div className="px-7 py-10 text-white rounded-b-3xl">
        <div className="flex gap-x-2 items-center">
          <BiSolidRightArrow color="red" size={20} />
          <h1 className="text-3xl font-bold">What Pokemon are you looking for?</h1>
        </div>

        <section>
          <NavLink />
        </section>
      </div>
    </>
  )
}

export default Home
