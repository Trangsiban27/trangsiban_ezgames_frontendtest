import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { NAV_ITEMS } from '@/constants'
import SearchBar from '../common/SearchBar'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <header className='fixed top-0 left-0 right-0 p-4 border-b flex items-center justify-center font-sans bg-background z-10'>
            <div className='w-7xl flex items-center justify-around'>
                <div className='flex items-center justify-center gap-2'>
                    <Avatar>
                        <AvatarFallback className='bg-[#8f392d] text-white font-extrabold   '>P</AvatarFallback>
                    </Avatar>

                    <span className='font-bold text-black'>Pages & Co.</span>
                </div>

                <nav className='flex items-center justify-center gap-6'>
                    {NAV_ITEMS.map((item, index) => (
                        <Link key={index} href={item?.url} className='text-sm'>
                            {item?.label}
                        </Link>
                    ))}
                </nav>

                <SearchBar />

                <div className='flex items-center gap-4'>
                    <Button variant="outline" className='rounded-4xl font-bold px-4'>Sign in</Button>

                    <Button
                        className='bg-black text-white font-bold rounded-4xl px-4'
                    >
                        Bag

                        <div className='flex items-center justify-center bg-[#c2941f] px-1.5 rounded-full'>
                            <span>0</span>
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header