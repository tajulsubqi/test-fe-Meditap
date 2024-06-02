"use client"
import { useState } from "react"
import { Path, UseFormRegister } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"

interface FormData {
  email: string
  username: string
  password: string
  confirmPassword: string
}

interface InputProps {
  type: string
  placeholder: string
  register?: UseFormRegister<FormData>
  label?: Path<FormData>
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
  className?: string
}

const Input = ({
  type,
  placeholder,
  register,
  label,
  required,
  onChange,
  value,
  name,
  className,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPassword((prev) => !prev)
  }

  return (
    <div>
      <div className="relative">
        <input
          value={value}
          {...(register && label ? register(label, { required }) : {})}
          onChange={(event) => {
            onChange && onChange(event)
            register && label && register(label, { required }).onChange(event)
          }}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          name={name}
          className={`w-full bg-slate-700 text-white text-sm outline-none px-3 py-2 rounded-md placeholder:text-sm ${className}`}
        />
        {type === "password" && (
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash color="#fff" /> : <FaEye color="#fff" />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
