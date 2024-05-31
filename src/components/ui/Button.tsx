interface ButtonProps {
  onClick?: () => void
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-600 -mt-6 hover:bg-sky-500 duration-300 text-white text-sm rounded-lg font-semibold px-3 py-2"
    >
      {text}
    </button>
  )
}

export default Button
