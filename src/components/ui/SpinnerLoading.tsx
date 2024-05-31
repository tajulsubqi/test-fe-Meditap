import React from "react"
import Image from "next/image"
import spinnerGif from "../../../public/assets/spinner.gif"

const Spinner = ({ message = "Loading", size = 200 }) => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Image src={spinnerGif} alt="loading" width={size} height={size} />
        <h2 className="text-3xl font-bold text-sky-500 mt-4">{message}</h2>
      </div>
    </div>
  )
}

export default Spinner
