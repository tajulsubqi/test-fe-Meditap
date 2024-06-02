"use client"
import { useRouter } from "next/navigation"
import React, { useRef } from "react"
import { FaSearch } from "react-icons/fa"

interface InputProps {
  placeholder: string
}

const SearchInput = (props: InputProps) => {
  const { placeholder } = props

  const searchHref = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = () => {
    if (searchHref.current) {
      const keyword = searchHref.current.value.trim()
      if (keyword) {
        router.push(`/search/${keyword}`)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="relative bg-gray-100 rounded-full px-4 py-2 w-[400px]">
      <input
        type="text"
        ref={searchHref}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        className="bg-gray-100 outline-none placeholder:text-sm text-sm text-slate-700 w-full pr-10"
      />
      <button onClick={handleSearch} className="absolute right-5 top-3 text-gray-500">
        <FaSearch />
      </button>
    </div>
  )
}

export default SearchInput
