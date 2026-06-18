import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { NAV_ITEMS } from '@/constants';
import Link from 'next/link';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={onClose}
                />
            )}

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-background border-r z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <div className='flex items-center justify-center gap-2'>
                        <Avatar>
                            <AvatarFallback className='bg-[#8f392d] text-white font-extrabold   '>P</AvatarFallback>
                        </Avatar>

                        <span className='font-bold text-black'>Pages & Co.</span>
                    </div>

                    <Button variant={'ghost'} onClick={onClose}>
                        <X />
                    </Button>
                </div>

                <nav className="p-4 flex flex-col gap-4">
                    {NAV_ITEMS.map((item, index) => (
                        <Link key={index} href={item.url} className='text-black/60 font-semibold'>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className='border-t p-4'>
                    <Button className='w-full'>Sign In</Button>
                </div>
            </div>
        </>
    );
};

export default Sidebar