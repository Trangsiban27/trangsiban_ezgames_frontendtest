'use client'
import YouMayLikes from '@/components/books/you-may-likes/YouMayLikes'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BOOKS } from '@/constants'
import { Heart, Star } from 'lucide-react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

interface Props {
    id: string | any
}

const INFO = [
    {
        title: 'FORMAT',
        text: 'Paperback'
    },
    {
        title: 'PAGE',
        text: 312
    },
    {
        title: 'PUBLISHED',
        text: '2023'
    },
    {
        title: 'PUBLISHER',
        text: 'Harbor & Vale'
    },
    {
        title: 'LANGUAGE',
        text: 'English'
    },
    {
        title: 'IBN',
        text: '978-1-23456-001-2'
    }
]

const BookDetailPageContent = ({ id }: Props) => {

    const bookData = BOOKS.find((item) => item?.id === Number(id))

    console.log(bookData)

    return (
        <div className='my-25 lg:w-7xl w-full flex flex-col'>
            <div className='flex items-center gap-2'>
                <Link href={'/'} className='text-sm text-gray-500/80'>
                    Home
                </Link>
                <span className='text-sm text-gray-500/80'>/</span>
                <Link href={'/books'} className='text-sm text-gray-500/80'>
                    Books
                </Link>
                <span className='text-sm text-gray-500/80'>/</span>
                <Link href={'#'} className='text-sm font-bold'>
                    {bookData?.title}
                </Link>
            </div>

            <main className='flex lg:flex-row flex-col my-12 gap-12'>
                <figure className='lg:w-[30%] w-full h-120'>
                    <div
                        className='w-full h-full shadow'
                        style={{
                            '--from-color': bookData?.color,
                            '--to-color': '#f4ecdd'
                        } as React.CSSProperties}
                    >
                        <div
                            className="w-full h-full relative bg-[linear-gradient(to_bottom_right,var(--from-color),var(--to-color))] rounded-xs p-4"
                        >
                            <div className='absolute bottom-4'>
                                <h2 className='text-xl text-white font-bold'>{bookData?.title}</h2>
                                <span className='text-white text-xs italic font-semibold'>{bookData?.author}</span>
                            </div>
                        </div>
                    </div>
                </figure>

                <section className='flex flex-col gap-4'>
                    {bookData?.tag && <Badge variant={'outline'} className='text-primary bg-white/60'>
                        <span className='text-xs'>{bookData?.tag}</span>
                    </Badge>}

                    <div className=''>
                        <h1 className='text-4xl font-bold'>{bookData?.title}</h1>
                        <span className='text-xs italic text-black/60'>by {bookData?.author}</span>
                    </div>

                    <div className='flex items-center gap-3 '>
                        <div className='flex items-center gap-2'>
                            <Star width={12} className='text-yellow-400 fill-yellow-500' />
                            <span className='text-xs'>{bookData?.rating}</span>
                        </div>

                        <span className='w-1 h-1 bg-gray-400 rounded-full'></span>

                        <span className='text-xs'>312 pages</span>

                        <span className='w-1 h-1 bg-gray-400 rounded-full'></span>

                        <span className='text-xs'>2023</span>
                    </div>

                    <div className='flex items-center gap-4'>
                        <span className='text-primary font-bold text-2xl'>${bookData?.price}</span>
                        {bookData?.oldPrice && <span className='font-normal text-sm line-through'>${bookData?.oldPrice}</span>}
                    </div>

                    <p className='w-1/2 text-xs leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, mollitia sunt. Suscipit, quod. Facilis, cum amet in sed beatae quis, odit laudantium, obcaecati officiis quasi assumenda! Esse architecto odio minus?</p>

                    <div className='flex items-center gap-2'>
                        <Button className='px-4 rounded-2xl cursor-pointer'>Add to bag -- ${bookData?.price}</Button>

                        <Button
                            variant={'outline'}
                            className='px-4 rounded-2xl border-black cursor-pointer'
                        >
                            <Heart width={10} />
                            Whishlist
                        </Button>
                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 border-t border-gray-300 pt-6'>
                        {INFO.map((item, index) => (
                            <div key={index} className='flex flex-col'>
                                <span className='uppercase font-semibold font-sans text-xs text-gray-500/80'>{item?.title}</span>
                                <span className='font-sans font-medium text-sm'>{item?.text}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <YouMayLikes />
        </div>
    )
}

export const BookDetailPage = () => {
    const params = useParams()

    return (
        <div>
            <Suspense fallback={<div className="animate-pulse">Loading book details...</div>}>
                <BookDetailPageContent id={params?.id} />
            </Suspense>
        </div>
    )
}

export default BookDetailPage