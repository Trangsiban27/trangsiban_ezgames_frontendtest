import Link from 'next/link'
import React from 'react'

interface Props {
    title: string,
    list: any
}

const LinkList = ({ title, list }: Props) => {
    return (
        <div className='flex flex-col'>
            <h4 className='text-[#be932e] font-bold text-sm'>{title}</h4>

            <div className='flex flex-col gap-2 mt-4'>
                {list?.map((item: any, index: number) => (
                    <Link key={index} href={item?.url} className='text-white text-xs hover:underline cursor-pointer'>
                        {item.lable}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LinkList