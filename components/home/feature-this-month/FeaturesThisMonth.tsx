import ListHeader from '@/components/common/ListHeader'
import ProductCard from '@/components/common/ProductCard'
import { FEATURES } from '@/constants'
import React from 'react'

const FeaturesThisMonth = () => {
    return (
        <div>
            <ListHeader
                subTitle={`Editor's Picks`}
                title='Featured this month'
                hasViewAll={true}
                viewAllUrl=''
            />

            <div className='grid grid-cols-5 gap-6 mt-6'>
                {FEATURES.map((item) => (
                    <ProductCard key={item?.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default FeaturesThisMonth