import React from "react"

interface ModalButtonProps {
  text: string
  onClick: () => void
  blue?: string
  red?: string
}

const ModalButton = ({ text, onClick, blue, red }: ModalButtonProps) => {
  return (
    <button
      className={`${
        blue ? "bg-sky-500 hover:bg-sky-400" : red ? "bg-danger hover:bg-red-400" : ""
      } duration-300 text-white text-sm rounded-lg font-semibold px-3 py-2 mt-4`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default ModalButton
