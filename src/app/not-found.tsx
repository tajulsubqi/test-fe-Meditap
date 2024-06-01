"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { LuFileSearch } from "react-icons/lu"

const NotFound = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-3">
      <LuFileSearch size={55} className="text-red-500" />
      <div className="text-4xl text-white font-bold uppercase">Not Found</div>
      <button
        onClick={() => router.back()}
        className="text-white underline hover:text-red-400 duration-300 transition"
      >
        Back Home
      </button>
    </div>
  )
}

export default NotFound
