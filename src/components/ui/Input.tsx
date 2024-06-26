import { InputProps } from "@/interface/ui_props"
import React from "react"

const Input = ({ onChange, value, name, placeholder, type }: InputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-slate-100 text-slate-700 rounded-md px-4 py-2 outline-none w-full mt-4 placeholder:text-sm border-slate-300 border"
      />
    </>
  )
}

export default Input
