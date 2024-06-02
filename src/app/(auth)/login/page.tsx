"use client"
import Button from "@/components/auth/Button"
import Input from "@/components/auth/Input"
import { AuthApi } from "@/libs/axiosInstance"
import { validateLoginForm } from "@/utils/AuthFormValidation"
import { useMutation } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast"

interface FormData {
  email: string
  password: string
  username: string
}

const Login = () => {
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

  return (
    <div className="mt-24 w-full md:w-[700px] rounded-xl bg-black/80 py-10 px-6 md:mt-0 md:px-14">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold text-white">Login</h1>

        <div className="space-y-6 mt-5">
          <Input
            placeholder="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit" text="Login" />
        </div>
      </form>

      <div className="text-sm text-center text-gray-400 mt-2">
        New to PokeDex?{" "}
        <Link href="/register" className="ml-2 text-white hover:underline">
          Sign Up Now!
        </Link>
      </div>
    </div>
  )
}

export default Login
