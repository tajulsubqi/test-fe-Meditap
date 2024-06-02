"use client"
import useSlideshow from "@/hooks/useSlideShow"
import { FaCircle } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { slides } from "@/mocks/Slides"

const Banner = () => {
  const { currentIndex, prevSlide, nextSlide, setCurrentIndex } = useSlideshow(slides)

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
        <IoIosArrowBack size={20} />
      </div>

      <div
        onClick={nextSlide}
        className="absolute z-30 right-1 top-1/3 md:top-1/2 cursor-pointer text-xs text-Absolute-White p-1.5 bg-Black-10 border border-Black-12 rounded-lg hover:bg-Absolute-White hover:border-Absolute-White  hover:text-Black-8 transition md:p-3 md:right-5"
      >
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
