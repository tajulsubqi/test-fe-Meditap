import React from "react"

interface InputProps {
  placeholder: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-100 rounded-2xl px-4 py-4 outline-none"
      />
    </>
  )
}

export default SearchInput
