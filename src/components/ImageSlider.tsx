'use client'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import { slides } from '@/lib/data';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const promises = slides.map((slide) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = slide.url;
                    img.onload = () => {
                        setLoadedImages(prev => new Set(prev).add(slide.url));
                        resolve(slide.url);
                    };
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(promises);
                setLoading(false);
            } catch (error) {
                console.error('Error preloading images:', error);
                setLoading(false);
            }
        };

        preloadImages();
    }, []);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Preload next and previous images
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;

        [slides[prevIndex].url, slides[nextIndex].url].forEach(url => {
            if (!loadedImages.has(url)) {
                const img = new Image();
                img.src = url;
                img.onload = () => setLoadedImages(prev => new Set(prev).add(url));
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

    return (
        <>
            <h2 className='text-[#C77272]'>Pre-wedding Pictures</h2>
            <div className="max-w-[1400px] h-[700px] w-full m-auto py-8 px-4 relative group">
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className="relative w-full h-full rounded-2xl bg-center bg-cover transition-all duration-500 ease-in-out"
                >
                    <div onClick={prevSlide} className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"></div>
                    <div onClick={nextSlide} className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"></div>
                </div>

                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-all duration-200 hover:bg-black/40">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-all duration-200 hover:bg-black/40">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
        </>
    );
};

export default ImageSlider;