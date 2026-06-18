import ListHeader from '@/components/common/ListHeader'
import { GENRE_ITEMS } from '@/constants'
import React from 'react'
import GenreItem from './GenreItem'

const GenreList = () => {
    return (
        <section>
            <ListHeader
                subTitle='Find your shelf'
                title='Browse by genre'
            />

            <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6 mt-6'>
                {GENRE_ITEMS.map((item, index) => (
                    <GenreItem key={index} data={item} />
                ))}
            </div>
        </section>
    )
}

export default GenreList