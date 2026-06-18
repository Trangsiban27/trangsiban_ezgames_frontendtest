import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
    subTitle: string,
    title: string,
    hasViewAll?: boolean,
    viewAllUrl?: string
}

const ListHeader = ({ subTitle, title, hasViewAll = false, viewAllUrl = '' }: Props) => {
    return (
        <div className='flex md:flex-row flex-col md:items-end justify-between'>
            <div>
                <h6 className='font-semibold font-heading text-xs text-primary uppercase'>{subTitle}</h6>
                <h1 className='font-bold text-3xl'>{title}</h1>
            </div>

            {hasViewAll && <Link href={viewAllUrl} className='flex items-center gap-2 text-xs text-primary hover:underline transition-all duration-300'>
                View all <MoveRight width={12} />
            </Link>}
        </div>
    )
}

export default ListHeader