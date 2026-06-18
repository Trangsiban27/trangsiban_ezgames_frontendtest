import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import SignInModel from '@/components/sign-in/SignInModel'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-background flex flex-col items-center justify-center'>
            <Header />

            <main className='lg:w-7xl w-full px-6'>
                {children}
            </main>

            <Footer />

            <SignInModel />
        </div>
    )
}

export default layout