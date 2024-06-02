import Image from "next/image"
import React from "react"
import Background from "../../../public/images/poke3.png"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Background}
        alt="background"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <h1
        className="text-2xl mb-2 font-serif md:mb-0 md:text-4xl font-bold text-Red-50 absolute left-4 top-4 object-contain md:left-10 md:top-6"
        style={{ textShadow: "0 0 5px #000" }}
      >
        PokeDex
      </h1>
      {children}
    </div>
  )
}

export default AuthLayout
