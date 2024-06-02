import { useEffect, useState } from "react"

const useSlideshow = (slides: any[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)

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
  }, [slides])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  return { currentIndex, prevSlide, nextSlide, setCurrentIndex }
}

export default useSlideshow
