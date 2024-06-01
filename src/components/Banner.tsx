"use client"
import { useEffect, useState } from "react"
import poke1 from "/public/images/poke1.png"
import poke2 from "/public/images/poke2.png"
import poke3 from "/public/images/poke3.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { FaCircle } from "react-icons/fa"

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Pokémon",
      url: poke1.src,
      synopsis:
        "Explore a vast world and discover a variety of interesting Pokemon, from lush forests to majestic mountains.",
    },
    {
      id: 2,
      title: "Pokémon",
      url: poke2.src,
      synopsis:
        "Get ready for an exciting adventure! Get an unforgettable experience as you explore vast areas and catch a variety of unique Pokemon.",
    },
    {
      id: 3,
      title: "Pokémon",
      url: poke3.src,
      synopsis:
        "Join the epic adventure to become a Pokemon Master! Show your skills in catching, training, and battling Pokemon in every corner of the Pokemon world.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [id, setId] = useState(() => slides[currentIndex].id)

  useEffect(() => {
    setId(slides[currentIndex].id)
  }, [currentIndex])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === slides.length - 1) {
          return 0
        }
        return prevIndex + 1
      })
    }, 7000)

    return () => clearInterval(intervalId)
  }, [id])

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="relative flex mx-4">
      <div className="w-full relative">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
          className=" bg-cover bg-center h-[360px] rounded-t-2xl md:h-[680px] duration-300 transition-all"
        />
      </div>

      <div
        onClick={prevSlide}
        className="absolute z-30 left-1 top-1/3 md:top-1/2 cursor-pointer text-Absolute-White p-1.5 bg-Black-10 border border-Black-12 rounded-lg hover:bg-Absolute-White hover:border-Absolute-White hover:text-Black-8 transition md:p-3 md:left-5"
      >
        {/* <CaretLeft size={20} /> */}
        <IoIosArrowBack size={20} />
      </div>

      <div
        onClick={nextSlide}
        className="absolute z-30 right-1 top-1/3 md:top-1/2 cursor-pointer text-xs text-Absolute-White p-1.5 bg-Black-10 border border-Black-12 rounded-lg hover:bg-Absolute-White hover:border-Absolute-White  hover:text-Black-8 transition md:p-3 md:right-5"
      >
        {/* <CaretRight size={20} /> */}
        <IoIosArrowForward size={20} />
      </div>

      <section className="absolute cursor-default inset-x-0 bottom-0 z-20 text-Absolute-White ">
        <div className="flex flex-col items-start text-start w-full gap-2.5 px-2 pb-5 lg:w-2/3 md:p-20 md:gap-5">
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-lg font-bold md:text-4xl">{slides[currentIndex].title}</p>
            <p className="text-sm leading-4 lg:contents">
              {slides[currentIndex].synopsis}
            </p>
          </div>
        </div>
      </section>

      <div className="absolute flex justify-center inset-x-0 top-3 md:top-auto md:bottom-10  z-20 gap-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="cursor-pointer"
          >
            {index === currentIndex ? (
              <div className="text-Absolute-White">
                <FaCircle size={12} />
              </div>
            ) : (
              <div className="text-Grey-60">
                <FaCircle size={12} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 -bottom-2 z-10 h-full bg-gradient-to-b from-transparent to-Black-8" />
    </div>
  )
}

export default Banner
