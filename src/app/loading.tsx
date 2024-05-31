import Image from "next/image"
import spinner from "../../public/assets/spinner.gif"

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Image src={spinner} alt="loading" width={200} height={200} />
        <h2 className="text-3xl font-bold text-sky-500">Loading</h2>
      </div>
    </div>
  )
}

export default Loading
