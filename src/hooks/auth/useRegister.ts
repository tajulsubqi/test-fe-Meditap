"use client"
import { AuthApi } from "@/libs/axiosInstance"
import { SchemaValidation } from "@/utils/SchemaValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

export interface FormData {
  email: string
  username: string
  password: string
  confirmPassword: string
}

const useRegister = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SchemaValidation),
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data)
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

export default useRegister
