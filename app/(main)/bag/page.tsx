'use client'
import ProductCartItem from '@/components/common/ProductCartItem'
import { Button } from '@/components/ui/button'
import { useBagStore } from '@/store/useBagStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    const { bag } = useBagStore()

    const subTotalPrice = bag.reduce((acc, item) => {
        return acc + ((item?.count || 1) * item?.price)
    }, 0)

    const shippingFee = 0

    const totalPrice = subTotalPrice + shippingFee

    return (
        <div className='my-25 lg:w-7xl w-full flex flex-col lg:h-[60vh]'>
            <div className='flex items-center gap-2'>
                <Link href={'/'} className='text-sm text-gray-500/80'>
                    Home
                </Link>
                <span className='text-sm text-gray-500/80'>/</span>
                <Link href={'/books'} className='text-sm font-bold'>
                    Bag
                </Link>
            </div>

            <h1 className='text-4xl font-bold mt-6'>Your bag</h1>

            <main className='flex lg:flex-row flex-col gap-14 mt-6'>
                {bag?.length > 0 ? (
                    <section className='lg:w-[70%] max-h-80 overflow-y-auto scroll-smooth rounded-sm overflow-hidden'>
                        {bag.map((item) => (
                            <ProductCartItem key={item?.id} data={item} />
                        ))}
                    </section>
                ) : (
                    <section className='flex flex-col items-center justify-center lg:w-[70%] h-80'>
                        <span className='font-bold'>Not have any item in your bag</span>
                        <Button
                            onClick={() => router.push('/')}
                            className='cursor-pointer mt-5'
                        >
                            Add More Book
                        </Button>
                    </section>
                )}

                <section className='flex-1 p-4 bg-white rounded-sm overflow-hidden border border-gray-300'>
                    <h4 className='text-md font-bold'>Order summary</h4>

                    <ul className='mt-4 pb-4 flex flex-col gap-3'>
                        <li className='flex items-center justify-between'>
                            <span className='text-sm text-gray-500/80'>Subtotal ({bag?.length} items)</span>
                            <span className='text-sm'>${subTotalPrice}</span>
                        </li>

                        <li className='flex items-center justify-between'>
                            <span className='text-sm text-gray-500/80'>Shipping</span>
                            <span className='text-sm'>Free</span>
                        </li>
                    </ul>

                    <ul className='pt-4 border-t border-gray-300/60'>
                        <li className='flex items-center justify-between'>
                            <span className='text-sm font-bold'>Total</span>
                            <span className='text-sm'>${totalPrice}</span>
                        </li>
                    </ul>

                    <Button
                        className='w-full px-4 rounded-2xl mt-6 cursor-pointer'
                    >
                        Checkout
                    </Button>

                    <p className='text-xs text-gray-500/80 text-center mt-4'>You'll be asked to sign in to complete your order.</p>
                </section>
            </main>
        </div>
    )
}

export default page