"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { BiSolidShoppingBag } from "react-icons/bi"
import { IoArrowBack } from "react-icons/io5"

const Container = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    <div className="px-7 py-9">
      <div className="flex justify-between">
        <IoArrowBack size={25} onClick={() => router.back()} className="cursor-pointer" />

        <div>
          <BiSolidShoppingBag size={25} />
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}

export default Container
