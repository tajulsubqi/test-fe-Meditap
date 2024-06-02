"use client"
import Button from "@/components/auth/Button"
import Input from "@/components/auth/Input"
import useRegister from "@/hooks/auth/useRegister"
import Link from "next/link"

const Register = () => {
  const { register, handleSubmit, errors, onSubmit } = useRegister()

  return (
    <div className="mt-24 w-full md:w-[700px] bg-black/80 rounded-xl py-10 px-6 md:mt-0 md:px-14">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-semibold text-white">Register</h1>

        <div className="space-y-6 mt-5">
          <div>
            <Input
              placeholder="Username"
              type="text"
              register={register}
              label="username"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Email"
              type="email"
              register={register}
              label="email"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Password"
              type="password"
              register={register}
              label="password"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Input
              placeholder="Confirm Password"
              type="password"
              register={register}
              label="confirmPassword"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
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
