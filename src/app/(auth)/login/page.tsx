"use client"
import Button from "@/components/auth/Button"
import Input from "@/components/auth/Input"
import useLogin from "@/hooks/auth/useLogin"
import Link from "next/link"

const Login = () => {
  const { formData, handleChange, handleSubmit } = useLogin()

  return (
    <div className="mt-24 w-full md:w-[700px] rounded-xl bg-black/80 py-10 px-6 md:mt-0 md:px-14">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold text-white">Login</h1>

        <div className="space-y-6 mt-5">
          <Input
            className="hidden"
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
