import Header from '@/components/header/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full bg-background'>
            <Header />

            <main>
                {children}
            </main>
        </div>
    )
}

export default layout