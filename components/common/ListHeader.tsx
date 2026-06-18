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
        <div className='flex items-end justify-between'>
            <div>
                <h6 className='font-semibold font-heading text-xs text-primary uppercase'>{subTitle}</h6>
                <h1 className='font-bold text-3xl'>{title}</h1>
            </div>

            {hasViewAll && <Link href={viewAllUrl} className='flex'>
                View all <MoveRight />
            </Link>}
        </div>
    )
}

export default ListHeader