'use client'
import { useSignInStore } from '@/store/useSignInStore'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../ui/button'

const schema = yup.object({
    email: yup.string().email('Invalid email!').required('Email is required!'),
    password: yup.string().min(6, 'Password must be at least 6 characters!').required('Password is required!')
})

const SignInModel = () => {
    const { isOpen, setIsOpen } = useSignInStore()

    const { watch, control } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })

    const form = watch()

    const handleSignIn = () => {
        console.log('Sign Form Data: ', form)
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-sm bg-background">
                <DialogHeader>
                    <DialogTitle>
                        <Avatar>
                            <AvatarFallback className='bg-[#8f392d] text-white font-extrabold font-sans'>P</AvatarFallback>
                        </Avatar>
                    </DialogTitle>
                </DialogHeader>

                <div>
                    <h1 className='font-bold text-xl'>Welcome back</h1>
                    <span className='text-xs text-black/60'>Sign in to access your bag, orders and wishlist</span>
                </div>

                <div className='flex flex-col gap-y-4'>
                    <Controller
                        name='email'
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full flex flex-col gap-1.5">
                                <label
                                    htmlFor="email"
                                    className={`font-semibold text-xs uppercase text-[#948c7d] ${error ? 'text-red-500' : 'text-gray-700'}`}
                                >
                                    EMAIL
                                </label>
                                <input
                                    {...field}
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className={`border p-2 bg-white/60 rounded-sm w-full transition-all outline-none ${error
                                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                        : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                        }`}
                                />

                                {error && (
                                    <span className="text-red-500 text-xs font-medium animate-in fade-in slide-in-from-top-1">
                                        {error.message}
                                    </span>
                                )}
                            </div>
                        )}
                    />

                    <Controller
                        name='password'
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <div className="w-full flex flex-col gap-1.5">
                                <label
                                    htmlFor="password"
                                    className={`font-semibold text-xs uppercase text-[#948c7d] ${error ? 'text-red-500' : 'text-gray-700'}`}
                                >
                                    PASSWORD
                                </label>
                                <input
                                    {...field}
                                    id="password"
                                    type="password"
                                    placeholder="your password..."
                                    className={`border p-2 bg-white/60 rounded-sm w-full transition-all outline-none ${error
                                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                                        : 'border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                                        }`}
                                />

                                {error && (
                                    <span className="text-red-500 text-xs font-medium animate-in fade-in slide-in-from-top-1">
                                        {error.message}
                                    </span>
                                )}
                            </div>
                        )}
                    />
                </div>

                <Button
                    className='bg-primary cursor-pointer rounded-2xl'
                    onClick={handleSignIn}
                >
                    Sign in
                </Button>

                <p className='text-center text-xs'>New here? <span className='text-primary hover:underline cursor-pointer'>Create an account</span></p>
            </DialogContent>
        </Dialog>
    )
}

export default SignInModel