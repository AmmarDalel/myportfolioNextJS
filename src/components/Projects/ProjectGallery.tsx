"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  useEffect(() => {
    thumbRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  return (
    <div className="space-y-3">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-700 bg-gray-800">
        <img
          src={images[activeIndex] || "/placeholder.svg"}
          alt={`${title} - screenshot ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {hasMultiple && (
          <>
            <button
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="relative">
          <div
            className="flex gap-2.5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-1.5 px-0.5
              [&::-webkit-scrollbar]:h-1.5
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-gray-700
              [&::-webkit-scrollbar-thumb]:rounded-full
              hover:[&::-webkit-scrollbar-thumb]:bg-orange-500/70
              [scrollbar-width:thin] [scrollbar-color:#374151_transparent]"
          >
            {images.map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={image + index}
                  ref={(el) => {
                    thumbRefs.current[index] = el;
                  }}
                  onClick={() => goTo(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={isActive}
                  className={`relative shrink-0 snap-start w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden cursor-pointer
                    transition-all duration-200 ease-out
                    ${
                      isActive
                        ? "ring-2 ring-orange-500 ring-offset-2 ring-offset-gray-900 scale-105 opacity-100"
                        : "ring-1 ring-gray-700 opacity-60 hover:opacity-100 hover:ring-gray-500"
                    }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>

          {/* Edge fades hinting at scrollable content */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-900 to-transparent" />
        </div>
      )}
    </div>
  );
}
