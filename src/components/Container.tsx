"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { BiSolidShoppingBag } from "react-icons/bi"
import { IoArrowBack } from "react-icons/io5"

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const router = useRouter()
  return (
    <div className={`${className} px-7 py-9 text-white`}>
      <div className="flex justify-between">
        <IoArrowBack size={25} onClick={() => router.back()} className="cursor-pointer" />

        <Link href="/pokebag">
          <BiSolidShoppingBag
            size={35}
            className="hover:bg-gradient-black-red hover:text-white  rounded-xl duration-300 p-1"
          />
        </Link>
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Container
