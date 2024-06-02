import React from "react"

const Button = ({ text, type }: { text: string; type?: "submit" }) => {
  return (
    <button
      type={type}
      className="w-full text-white py-2 rounded-lg bg-Red-45 hover:bg-Red-60 duration-300"
    >
      {text}
    </button>
  )
}

export default Button
