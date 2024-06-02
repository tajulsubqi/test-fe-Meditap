import { ModalButtonProps } from "@/interface/ui_props"
import React from "react"

const ModalButton = ({ text, type, onClick, blue, red }: ModalButtonProps) => {
  return (
    <button
      className={`${
        blue ? "bg-sky-500 hover:bg-sky-400" : red ? "bg-danger hover:bg-red-300" : ""
      } duration-300 text-white text-sm rounded-lg font-semibold px-3 py-2 mt-4`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default ModalButton
