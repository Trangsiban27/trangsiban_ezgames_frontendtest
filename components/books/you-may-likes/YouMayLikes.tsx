import ProductCard from '@/components/common/ProductCard'
import { YOU_MAY_LIKES } from '@/constants'
import React from 'react'

const YouMayLikes = () => {
    return (
        <section>
            <h1 className='font-bold text-2xl'>You may also like</h1>

            <ul className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6 mt-6'>
                {YOU_MAY_LIKES.map((item) => (
                    <ProductCard key={item?.id} data={item} />
                ))}
            </ul>
        </section>
    )
}

export default YouMayLikes