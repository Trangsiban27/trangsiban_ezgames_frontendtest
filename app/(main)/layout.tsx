import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-background flex flex-col items-center justify-center'>
            <Header />

            {/* <main className=''>
                {children}
            </main>

            <Footer /> */}
        </div>
    )
}

export default layout