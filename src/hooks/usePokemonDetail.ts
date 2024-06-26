"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Api } from "@/libs/axiosInstance"

const usePokemonDetail = (detail: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", detail],
    queryFn: () => Api.get(`/pokemon/${detail}`),
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleCatchPokemon = (nickname: string) => {
    if (!data) return
    const pokemon = data.data
    const existingData = JSON.parse(localStorage.getItem("Pokemons") || "[]")
    const newData = {
      nickname,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
    }
    existingData.push(newData)
    localStorage.setItem("Pokemons", JSON.stringify(existingData))
    setIsOpen(false)
  }

  return {
    data,
    isLoading,
    isOpen,
    setIsOpen,
    handleCatchPokemon,
  }
}

export default usePokemonDetail
