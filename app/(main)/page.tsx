import Banner from '@/components/home/banner/Banner'
import BestSeller from '@/components/home/best-seller/BestSeller'
import GenreList from '@/components/home/browse-by-genre/GenreList'
import Carousel from '@/components/home/carousel/Carousel'
import FeaturesThisMonth from '@/components/home/feature-this-month/FeaturesThisMonth'
import NewArrivals from '@/components/home/new-arrivals/NewArrivals'
import React from 'react'

const page = () => {
    return (
        <div className='my-25 w-7xl flex flex-col gap-14'>
            <Carousel />

            <section className=''>
                <GenreList />
            </section>

            <section className=''>
                <FeaturesThisMonth />
            </section>

            <section className=''>
                <Banner />
            </section>

            <section className=''>
                <BestSeller />
            </section>

            <section className=''>
                <NewArrivals />
            </section>
        </div>
    )
}

export default page