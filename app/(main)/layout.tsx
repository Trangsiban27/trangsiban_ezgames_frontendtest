import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-background flex flex-col items-center justify-center'>
            <Header />

            <main className='lg:w-7xl w-full px-6'>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default layout