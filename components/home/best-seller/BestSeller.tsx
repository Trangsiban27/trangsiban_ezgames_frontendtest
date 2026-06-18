import ListHeader from '@/components/common/ListHeader'
import ProductCard from '@/components/common/ProductCard'
import { BESTSELLER } from '@/constants'
import React from 'react'

const BestSeller = () => {
    return (
        <section>
            <ListHeader
                subTitle='Most Loved'
                title='Bestsellers'
                hasViewAll={true}
                viewAllUrl=''
            />

            <div className='grid lg:grid-cols-5 grid-cols-2 gap-6 mt-6'>
                {BESTSELLER.map((item) => (
                    <ProductCard key={item?.id} data={item} />
                ))}
            </div>
        </section>
    )
}

export default BestSeller