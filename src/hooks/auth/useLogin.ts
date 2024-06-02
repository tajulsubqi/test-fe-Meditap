"use client"
import { AuthApi } from "@/libs/axiosInstance"
import { validateLoginForm } from "@/utils/AuthFormValidation"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"

interface FormData {
  email: string
  password: string
  username: string
}

const useLogin = () => {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  })

  const mutation = useMutation({
    mutationFn: (data: FormData) => AuthApi.post("/login", data),
    onSuccess: (response) => {
      const token = response.data.access_token
      if (token) {
        localStorage.setItem("token", token)
        toast.success("Login successful")
        router.push("/")
      } else {
        toast.error("Token not found in the response")
      }
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || "Login failed"
      console.log(error.response?.data?.message)
      toast.error(errorMessage)
    },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errorMessage = validateLoginForm(formData)
    if (errorMessage) {
      toast.error(errorMessage)
      return
    }
    mutation.mutate(formData)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}

export default useLogin
