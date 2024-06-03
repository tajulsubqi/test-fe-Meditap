"use client"
import Button from "@/components/auth/Button"
import Input from "@/components/auth/Input"
import useRegister from "@/hooks/auth/useRegister"
import Link from "next/link"

const Register = () => {
  const { handleChange, formData, handleSubmit } = useRegister()

  return (
    <div className="mt-24 w-full md:w-[700px] bg-black/80 rounded-xl py-10 px-6 md:mt-0 md:px-14">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold text-white">Register</h1>

        <div className="space-y-6 mt-5">
          <div>
            <Input
              placeholder="Username"
              type="text"
              value={formData.username}
              name="username"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Input
              placeholder="Email"
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              required
            />
          </div>

          <div>
            <Input
              placeholder="Password"
              type="password"
              label="password"
              required
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
          </div>

          <div>
            <Input
              placeholder="Confirm Password"
              type="password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={formData.confirmPassword}
            />
          </div>

          <Button type="submit" text="Register" />
        </div>
      </form>

      <div className="text-sm text-center text-gray-400 mt-2">
        Already Have an account?
        <Link href="/login" className="ml-2 text-white hover:underline">
          Log in Now!
        </Link>
      </div>
    </div>
  )
}

export default Register
