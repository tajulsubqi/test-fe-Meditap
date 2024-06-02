"use client"

import Link from "next/link"
import React from "react"
import { LuFileSearch } from "react-icons/lu"

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-3">
      <LuFileSearch size={55} className="text-red-500" />
      <div className="text-4xl text-white font-bold uppercase">Not Found</div>
      <Link
        href={"/"}
        className="text-white underline hover:text-red-400 duration-300 transition"
      >
        Back Home
      </Link>
    </div>
  )
}

export default NotFound
