"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { BiSolidShoppingBag } from "react-icons/bi"
import { IoArrowBack } from "react-icons/io5"
import SearchInput from "./ui/SearchInput"

interface Props {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login")
    }
  }, [router])

  return (
    <div className={`${className} px-7 py-9 text-white`}>
      <div className="flex justify-between items-center">
        <span className="flex gap-2 items-center cursor-pointer hover:text-red-400 duration-300">
          <IoArrowBack size={25} onClick={() => router.back()} />
          back
        </span>

        <div className="md:flex hidden">
          <SearchInput placeholder="Search Pokemon ..." />
        </div>

        <Link href="/pokebag">
          <BiSolidShoppingBag
            size={35}
            className="hover:bg-gradient-black-red hover:text-white  rounded-xl duration-300 p-1"
          />
        </Link>
      </div>

      <div className="md:hidden mt-4">
        <SearchInput placeholder="Search Pokemon ..." />
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Container
