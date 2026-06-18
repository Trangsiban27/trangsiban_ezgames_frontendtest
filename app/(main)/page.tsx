import BestSeller from '@/components/home/best-seller/BestSeller'
import GenreList from '@/components/home/browse-by-genre/GenreList'
import Carousel from '@/components/home/carousel/Carousel'
import FeaturesThisMonth from '@/components/home/feature-this-month/FeaturesThisMonth'
import React from 'react'

const page = () => {
    return (
        <div className='my-25 w-full'>
            <Carousel />

            <section className='mt-20'>
                <GenreList />
            </section>

            <section className='mt-20'>
                <FeaturesThisMonth />
            </section>

            <section className='mt-20'>
                <BestSeller />
            </section>
        </div>
    )
}

export default page