"use client"
import { AuthApi } from "@/libs/axiosInstance"
import { validateRegisterForm } from "@/utils/AuthFormValidation"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"

export interface FormData {
  email: string
  username: string
  password: string
  confirmPassword: string
}

const useRegister = () => {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const mutation = useMutation({
    mutationFn: (data: FormData) => AuthApi.post("/register", data),
    onSuccess: (response) => {
      toast.success("Register success")
      console.log(response.data)
      router.push("/login")
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || "Register failed"
      toast.error(errorMessage)
    },
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errorMessage = validateRegisterForm(formData)
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

export default useRegister
