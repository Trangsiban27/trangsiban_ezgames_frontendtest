'use client'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const slides = [
    {
        id: 1,
        subtitle: 'Staff favourites',
        title: 'The shelves we keep coming back to',
        desc: 'Our booksellsers pick the titles they can\'t stop pressing into customers hands',
    },
    {
        id: 2,
        subtitle: 'Staff favourites',
        title: 'The shelves we keep coming back to',
        desc: 'Our booksellsers pick the titles they can\'t stop pressing into customers hands',
    },
    {
        id: 3,
        subtitle: 'Staff favourites',
        title: 'The shelves we keep coming back to',
        desc: 'Our booksellsers pick the titles they can\'t stop pressing into customers hands',
    },
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const backSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="min-w-full bg-linear-to-br from-green-900 via-[#3f5b45] to-green-900 py-12 px-16 rounded-sm flex flex-col gap-4"
                    >
                        <span className='text-white font-heading uppercase text-sm font-bold'>{slide.subtitle}</span>

                        <div className='flex flex-col'>
                            <h2 className='text-white font-bold text-4xl'>The shelves</h2>
                            <h2 className='text-white font-bold text-4xl'>we keep</h2>
                            <h2 className='text-white font-bold text-4xl'>coming back to</h2>
                        </div>

                        <p className='text-white/80 w-[40%] font-semibold text-sm'>{slide.desc}</p>

                        <Button
                            className='bg-[#c2922c] w-fit px-8 py-4 rounded-2xl text-black cursor-pointer'
                        >
                            <span className='text-xs'>
                                Browser Bestsellers
                            </span>
                        </Button>
                    </div>
                ))}
            </div>

            <div className='absolute bottom-3 left-1/2 flex items-center gap-2'>
                {slides.map((_, index) => (
                    <div key={index} className={`${index === currentIndex ? 'w-6 bg-[#c2922c]' : 'w-2 bg-white/60'} h-2  rounded-full transition-all duration-300 ease-in-out`}></div>
                ))}
            </div>

            {/* Nút điều hướng */}
            <button onClick={backSlide} className="absolute top-1/2 left-4 bg-white/60 px-2.5 py-1 rounded-full cursor-pointer">
                <ChevronLeft width={12} />
            </button>

            <button onClick={nextSlide} className="absolute top-1/2 right-4 bg-white/60 px-2.5 py-1 rounded-full cursor-pointer">
                <ChevronRight width={12} />
            </button>
        </div>
    )
}

export default Carousel