'use client'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'
import { NAV_ITEMS } from '@/constants'
import SearchBar from '../common/SearchBar'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import { useSignInStore } from '@/store/useSignInStore'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { setIsOpen: setIsOpenSignIn } = useSignInStore()

    const handleCloseSidebar = () => {
        setIsOpen(false)
    }

    const handleSignIn = () => {
        setIsOpenSignIn(true)
    }

    return (
        <header className='fixed top-0 left-0 right-0 p-4 border-b flex items-center justify-center font-sans bg-background z-10'>
            <div className='lg:w-7xl w-full flex items-center lg:justify-around justify-between'>
                <div className='flex'>
                    <Button
                        variant={'ghost'}
                        onClick={() => setIsOpen(!isOpen)}
                        className='flex lg:hidden'
                    >
                        <Menu width={20} />
                    </Button>

                    <div className='flex items-center justify-center gap-2'>
                        <Avatar>
                            <AvatarFallback className='bg-[#8f392d] text-white font-extrabold'>P</AvatarFallback>
                        </Avatar>

                        <span className='font-bold text-black'>Pages & Co.</span>
                    </div>
                </div>

                <nav className='hidden lg:flex items-center justify-center gap-6'>
                    {NAV_ITEMS.map((item, index) => (
                        <Link key={index} href={item?.url} className='text-sm'>
                            {item?.label}
                        </Link>
                    ))}
                </nav>

                <div className='hidden md:block'>
                    <SearchBar />
                </div>

                <div className='flex items-center gap-4'>
                    <Button
                        variant="outline"
                        className='hidden md:block rounded-4xl font-bold px-4 cursor-pointer'
                        onClick={handleSignIn}
                    >
                        Sign in
                    </Button>

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

            <Sidebar
                isOpen={isOpen}
                onClose={handleCloseSidebar}
            />
        </header>
    )
}

export default Header