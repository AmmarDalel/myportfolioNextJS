"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { events, paragraphGallery, titleOrangeEvents, titleWhiteEvents } from "@/Data/data"
import SectionHeader from "../SectionHeader"
import EventCard from "./EventCard"

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Responsive items per view
  const updateItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) setItemsPerView(1)
      else if (window.innerWidth < 1024) setItemsPerView(2)
      else setItemsPerView(3)
    }
  }

  useEffect(() => {
    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= events.length ? 0 : prevIndex + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, events.length - itemsPerView) : prevIndex - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        if (nextIndex + itemsPerView >= events.length) return 0
        return nextIndex
      })
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay()
    else stopAutoPlay()
    return () => stopAutoPlay()
  }, [isAutoPlaying, itemsPerView])

  const visibleEvents = events.slice(currentIndex, currentIndex + itemsPerView)
  const totalSlides = Math.ceil(events.length / itemsPerView)

  return (
    <section className="py-20 px-6 bg-gray-900 text-white" id="gallery">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          titleWhite={titleWhiteEvents}
          titleOrange={titleOrangeEvents}
          paragraph={paragraphGallery}
        />

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mb-6">
            <Button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              variant="outline"
              size="icon"
              className="border-gray-600 text-white hover:bg-orange-500 hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerView >= events.length}
              variant="outline"
              size="icon"
              className="border-gray-600 text-white hover:bg-orange-500 hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? "bg-orange-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
