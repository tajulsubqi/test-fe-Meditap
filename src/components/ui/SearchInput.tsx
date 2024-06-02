import React from "react"
import { FaSearch } from "react-icons/fa"

interface InputProps {
  placeholder: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchInput = ({
  placeholder,
  value,
  onChange,
  onClick,
  onKeyDown,
}: InputProps) => {
  return (
    <div className="relative bg-gray-100 rounded-full px-4 py-2 w-[400px]">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="bg-gray-100 outline-none placeholder:text-sm text-sm text-slate-700 w-full pr-10"
      />
      <button className="absolute right-5 top-4 text-gray-500" onClick={onClick}>
        <FaSearch />
      </button>
    </div>
  )
}

export default SearchInput
