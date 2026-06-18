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
                viewAllUrl=''
            />

            <div className='grid grid-cols-5 gap-6 mt-6 '>
                {NEW_ARRIVALS.map((item) => (
                    <ProductCard key={item?.id} data={item} />
                ))}
            </div>
        </section>
    )
}

export default NewArrivals