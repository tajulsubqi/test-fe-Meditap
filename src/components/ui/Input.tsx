import React from "react"

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
  placeholder?: string
}

const Input = ({ onChange, value, name, placeholder }: InputProps) => {
  return (
    <>
      <input
        type="text"
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