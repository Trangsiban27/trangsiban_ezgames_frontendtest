import ListHeader from '@/components/common/ListHeader'
import ProductCard from '@/components/common/ProductCard'
import { NEW_ARRIVALS } from '@/constants'
import React from 'react'

const NewArrivals = () => {
    return (
        <section>
            <ListHeader
                subTitle='Hot off the press'
                title='New arrivals'
                hasViewAll={true}
                viewAllUrl='/books'
            />

            <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-6 mt-6 '>
                {NEW_ARRIVALS.map((item) => (
                    <ProductCard key={item?.id} data={item} />
                ))}
            </div>
        </section>
    )
}

export default NewArrivals