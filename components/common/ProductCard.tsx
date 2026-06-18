import React from 'react'
import ListHeader from './ListHeader'
import { ProductTypes } from '@/types'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Star } from 'lucide-react'

interface Props {
    data: ProductTypes
}

const ProductCard = ({ data }: Props) => {
    return (
        <Card
            className='p-3 rounded-xs'
        >
            <div
                style={{
                    '--from-color': data?.color,
                    '--to-color': '#f4ecdd'
                } as React.CSSProperties}
            >
                <div
                    className="relative bg-[linear-gradient(to_bottom_right,var(--from-color),var(--to-color))] rounded-xs z-20 h-60 p-2"
                >
                    {data?.tag && <div className={`flex items-center  ${data?.tag === 'NEW' ? 'justify-end' : 'justify-start'}`}>
                        <Badge
                            className={`font-sans text-black ${data?.tag === 'NEW' ? 'bg-[rgb(255,255,255)]' : 'bg-[#c1931e]'} rounded-xs uppercase`}
                        >
                            {data?.tag}
                        </Badge>
                    </div>}

                    <div
                        className='absolute bottom-4'
                    >
                        <h2 className='text-white font-bold text-lg line-clamp-2 w-2/3'>
                            {data?.title}
                        </h2>
                        <span className='text-white font-medium italic'>{data?.author}</span>
                    </div>
                </div>
            </div>

            <CardHeader className='p-0'>
                <CardTitle className='font-bold font-sans w-[90%] line-clamp-1'>{data?.title}</CardTitle>
                <CardDescription className='italic'>{data?.author}</CardDescription>
            </CardHeader>
            <CardContent className='p-0 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span className='text-primary font-bold text-lg'>${data?.price}</span>
                    {data?.oldPrice && <span className='font-normal font-sm line-through'>${data?.oldPrice}</span>}
                </div>

                <div className='flex items-center gap-2'>
                    <Star width={12} className='text-yellow-400 fill-yellow-500' />
                    <span>{data?.rating}</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductCard