"use client"
import { Session } from "@/interface"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-hot-toast"

const useSession = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const menuRef = useRef<HTMLDivElement>(null)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    token ? setSession(jwtDecode(token)) : router.push("/login")
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("Pokemons")
    setIsOpen(false)
    toast.success("Logged out successfully")
    router.push("/login")
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return {
    isOpen,
    setIsOpen,
    menuRef,
    session,
    handleLogout,
  }
}

export default useSession
