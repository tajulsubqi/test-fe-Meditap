interface ButtonProps {
  onClick?: () => void
  text: string
  className?: string
}

const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} border bg-teal-500 hover:bg-teal-700 duration-300 text-white rounded-lg font-semibold px-4 py-3`}
    >
      {text}
    </button>
  )
}

export default Button
