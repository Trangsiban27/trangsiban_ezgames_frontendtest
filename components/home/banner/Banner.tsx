import { Button } from '@/components/ui/button'
import React from 'react'

const Banner = () => {
    return (
        <section className='rounded-md bg-[#385642] p-12 flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
                <span className='font-heading uppercase text-white/80 text-xs font-bold'>The reading room</span>

                <div className='flex flex-col'>
                    <span className='font-bold text-white text-2xl'>Free shipping on</span>
                    <span className='font-bold text-white text-2xl'>every order over $35</span>
                </div>

                <div className='flex flex-col'>
                    <span className='text-white text-xs'>Plus 15% off your first month and a weekly</span>
                    <span className='text-white text-xs'>recommendation picked just for you</span>
                </div>
            </div>

            <Button className='bg-[#c2922c] p-4 px-6 font-semibold rounded-4xl text-black cursor-pointer'>
                <span className='text-xs'>Join free</span>
            </Button>
        </section>
    )
}

export default Banner