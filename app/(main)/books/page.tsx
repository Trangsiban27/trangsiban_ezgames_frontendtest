'use client'
import CategorySelection from '@/components/books/category-selection/CategorySelection'
import ProductCard from '@/components/common/ProductCard'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BOOKS, CATEGORIES } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'

interface SortState {
    label: string,
    value: string
}

export const SORT = [
    { label: 'Featured', value: 'FEATURED' },
    { label: 'Price', value: 'PRICE' },
]

const page = () => {
    const [currentCategory, setCurrentCategory] = useState('ALL')
    const [sort, setSort] = useState('FEATURED')

    const handleSelectCategory = (cate: any) => {
        setCurrentCategory(cate)
    }

    const handleSelectSort = (sort: string) => {
        setSort(sort)
    }

    return (
        <div className='my-25 lg:w-7xl w-full flex flex-col'>
            <div className='flex items-center gap-2'>
                <Link href={'/'} className='text-sm text-gray-500/80'>
                    Home
                </Link>
                <span className='text-sm text-gray-500/80'>/</span>
                <Link href={'/books'} className='text-sm font-bold'>
                    Books
                </Link>
            </div>

            <div>
                <h1 className='text-4xl font-bold mt-6'>All books</h1>
                <span className='text-xs italic text-gray-500'>14 titles in collection</span>
            </div>

            <div className='flex lg:flex-row flex-col lg:items-center gap-y-4 justify-between mt-6 border-b border-gray-300 pb-4'>
                <CategorySelection
                    categories={CATEGORIES}
                    selected={currentCategory}
                    onSelected={handleSelectCategory}
                />

                <div className='flex items-center gap-2'>
                    <span className='text-xs text-gray-500'>Sort by</span>
                    <Select
                        value={sort}
                        onValueChange={handleSelectSort}
                    >
                        <SelectTrigger className="bg-white/60 w-40">
                            <SelectValue placeholder="select sort" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {SORT.map((item: any, index: number) => (
                                    <SelectItem key={index} value={item?.value}>{item.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 mt-6'>
                {BOOKS.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default page