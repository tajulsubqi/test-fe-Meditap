interface ButtonProps {
  onClick?: () => void
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-500 hover:bg-sky-700 duration-300 text-white rounded-lg font-semibold px-4 py-3"
    >
      {text}
    </button>
  )
}

export default Button
