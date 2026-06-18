import GenreList from '@/components/home/browse-by-genre/GenreList'
import Carousel from '@/components/home/carousel/Carousel'
import React from 'react'

const page = () => {
    return (
        <div className='my-25 w-full'>
            <Carousel />

            <section className='mt-20'>
                <GenreList />
            </section>
        </div>
    )
}

export default page