"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import Background from "../../../public/images/poke3.png"
import { useRouter } from "next/navigation"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/")
    }
  }, [router])

  return (
    <div className="relative flex h-screen w-full flex-col px-5 md:px-0 md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Background}
        alt="background"
        className="sm:flex object-cover object-right md:object-center -z-10 brightness-50"
        priority
        fill
      />

      <h1
        className="text-2xl mb-2 font-serif md:mb-0 md:text-4xl font-bold text-Red-50 absolute left-4 top-4 object-contain md:left-10 md:top-6"
        style={{ textShadow: "0 0 5px #000" }}
      >
        VingzPoké
      </h1>
      {children}
    </div>
  )
}

export default AuthLayout
