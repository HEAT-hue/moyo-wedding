"use client";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { slides } from "@/lib/data";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.url;
          img.onload = () => {
            setLoadedImages((prev) => new Set(prev).add(slide.url));
            resolve(slide.url);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setLoading(false);
      } catch (error) {
        console.error("Error preloading images:", error);
        setLoading(false);
      }
    };

    preloadImages();
  }, []);

  const getNextIndex = (current: number) => {
    return current === slides.length - 1 ? 0 : current + 1;
  };

  const getPrevIndex = (current: number) => {
    return current === 0 ? slides.length - 1 : current - 1;
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("right");
    const prevIndex = getPrevIndex(currentIndex);
    setNextIndex(prevIndex);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("left");
    const nextIdx = getNextIndex(currentIndex);
    setNextIndex(nextIdx);
  };

  // Handle animation end
  const handleAnimationEnd = () => {
    setCurrentIndex(nextIndex);
    setSlideDirection(null);
    setIsAnimating(false);
  };

  // Preload next and previous images
  useEffect(() => {
    const nextIdx = getNextIndex(currentIndex);
    const prevIdx = getPrevIndex(currentIndex);

    [slides[prevIdx].url, slides[nextIdx].url].forEach((url) => {
      if (!loadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => setLoadedImages((prev) => new Set(prev).add(url));
      }
    });
  }, [currentIndex, loadedImages]);

  if (loading) {
    return (
      <div className="max-w-[1400px] h-[700px] w-full m-auto py-8 px-4 bg-gray-200 animate-pulse rounded-2xl">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-400">Loading images...</div>
        </div>
      </div>
    );
  }

  const getSlideStyle = (index: number) => ({
    backgroundImage: `url(${slides[index].url})`,
    backgroundPosition: "50% 10%",
  });

  return (
    <>
      <h2 className=" text-[#0A112F] text-[4rem] text-center font-[tangerine]">
        Pre-wedding Pictures
      </h2>
      <div className="max-w-[1400px] h-[700px] h-[95vh] w-full m-auto py-8 px-4 relative group overflow-hidden">
        <div className="relative w-full h-full rounded-2xl">
          <div
            style={getSlideStyle(currentIndex)}
            className={`
                            absolute w-full h-full rounded-2xl bg-center bg-cover 
                            transition-transform duration-500 ease-in-out bg-top
                            ${
                              slideDirection === "left"
                                ? "animate-slide-out-left"
                                : ""
                            }
                            ${
                              slideDirection === "right"
                                ? "animate-slide-out-right"
                                : ""
                            }
                        `}
          />

          {slideDirection && (
            <div
              style={getSlideStyle(nextIndex)}
              className={`
                                absolute w-full h-full rounded-2xl bg-center bg-cover 
                                transition-transform duration-500 ease-in-out bg-top
                                ${
                                  slideDirection === "left"
                                    ? "animate-slide-in-left"
                                    : ""
                                }
                                ${
                                  slideDirection === "right"
                                    ? "animate-slide-in-right"
                                    : ""
                                }
                            `}
              onAnimationEnd={handleAnimationEnd}
            />
          )}

          <div
            onClick={prevSlide}
            className="absolute inset-y-0 left-0 w-1/2 cursor-pointer z-10"
          ></div>
          <div
            onClick={nextSlide}
            className="absolute inset-y-0 right-0 w-1/2 cursor-pointer z-10"
          ></div>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-all duration-200 hover:bg-black/40 z-20">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-all duration-200 hover:bg-black/40 z-20">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
