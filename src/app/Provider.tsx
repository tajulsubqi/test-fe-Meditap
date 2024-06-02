"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

const queryClient = new QueryClient()

const Provider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
    }
  }, [router])

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Provider
