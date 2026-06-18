import React from 'react'
import LinkList from './LinkList'
import { Button } from '../ui/button'
import Link from 'next/link'

const SHOP = [
    { lable: 'New arrivals', url: '' },
    { lable: 'Bestsellers', url: '' },
    { lable: 'Fiction', url: '' },
    { lable: 'Children', url: '' },
    { lable: 'Gift cards', url: '' },
]

const ABOUT = [
    { lable: 'Our story', url: '' },
    { lable: 'Events', url: '' },
    { lable: 'Visit the shop', url: '' },
    { lable: 'Journal', url: '' },
]

const HELP = [
    { lable: 'Shipping', url: '' },
    { lable: 'Return', url: '' },
    { lable: 'FAQ', url: '' },
    { lable: 'Contact', url: '' },
]

const Footer = () => {
    return (
        <footer
            className='bg-[#2a2321] relative bottom-0 left-0 right-0 flex items-center justify-center w-full'
        >
            <div className='w-7xl py-20 grid grid-cols-5 gap-6'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <span className='bg-[#be932e] px-3 py-1.5 rounded-full font-bold'>P</span>
                        <span className='font-bold text-white'>Pages & Co.</span>
                    </div>

                    <p className='text-white/60 text-xs font-semibold'>
                        An independent bookshop for readers who like to take their time. Open since 1998.
                    </p>

                    <div className='flex items-center justify-start gap-4'>
                        <span className='border border-white text-white rounded-full px-2 py-1 text-xs'>In</span>
                        <span className='border border-white text-white rounded-full px-2 py-1 text-xs'>X</span>
                        <span className='border border-white text-white rounded-full px-2.5 py-1 text-xs'>f</span>
                    </div>
                </div>

                <LinkList
                    title='Shop'
                    list={SHOP}
                />

                <LinkList
                    title='About'
                    list={ABOUT}
                />

                <LinkList
                    title='HELP'
                    list={HELP}
                />

                <div className='flex flex-col gap-4'>
                    <h4 className='text-xs text-[#be932e] font-bold uppercase'>The reading room</h4>

                    <p className='text-white/60 text-xs font-semibold'>One handpicked recommendation in your inbox each week.</p>

                    <div className='flex items-center gap-2'>
                        <input
                            type="email"
                            placeholder='Email address'
                            className='border border-white/60 text-white text-sm p-2 rounded-sm bg-white/5 font-semibold'
                        />

                        <Button
                            className='rounded-sm bg-[#be932e] text-black p-4 py-5 cursor-pointer'
                        >
                            Join
                        </Button>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 border-t py-4 flex items-center justify-center'>
                <div className='flex items-center justify-between w-7xl'>
                    <div className='flex items-center gap-2'>
                        <span className='text-white/80 font-bold text-xs'>2026 Pages & Co.</span>

                        <span className='w-0.5 h-0.5 bg-white rounded-full'></span>

                        <Link href={'/'} className='text-white/80 font-bold text-xs hover:underline cursor-pointer'>Privacy</Link>

                        <span className='w-0.5 h-0.5 bg-white rounded-full'></span>

                        <Link href={'/'} className='text-white/80 font-bold text-xs hover:underline cursor-pointer'>Terms</Link>
                    </div>

                    <span className='text-white/60 font-bold text-xs'>
                        Free shipping on orders over $35
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer