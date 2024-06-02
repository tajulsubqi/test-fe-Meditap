"use client"
import Banner from "@/components/Banner"
import Nav from "@/components/Nav"
import NavLink from "@/components/NavLink"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { BiSolidRightArrow } from "react-icons/bi"

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
    }
  }, [router])

  return (
    <>
      <div className="mt-6 pb-4">
        <Nav />
      </div>

      <section className="mt-2">
        <Banner />
      </section>

      <div className="px-7 py-10 text-white rounded-b-3xl">
        <div className="flex gap-x-2 items-center">
          <BiSolidRightArrow color="red" size={20} />
          <h1 className="text-3xl font-bold">What Pokemon are you looking for?</h1>
        </div>

        <div>
          <NavLink />
        </div>
      </div>
    </>
  )
}

export default Home
