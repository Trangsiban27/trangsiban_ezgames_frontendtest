import { ProductTypes } from '@/types'
import React from 'react'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'
import { useBagStore } from '@/store/useBagStore'
import { toast } from 'sonner'

interface Props {
    data: ProductTypes
}

const ProductCartItem = ({ data }: Props) => {
    const { bag, setBags } = useBagStore()
    const total = (data?.count || 1) * data?.price

    const handleIncrease = () => {
        const UpdatedBag = bag.map((item) => {

            if (item?.id === data?.id) {
                return {
                    ...item,
                    count: (item?.count || 1) + 1
                }
            }

            return item
        })

        setBags(UpdatedBag)
        toast.success('Increase successfully!')
    }

    const handleDecrease = () => {

        if ((data?.count || 1) <= 1) return

        const updatedBag = bag.map(item => {

            if (item?.id === data?.id) {
                return {
                    ...item,
                    count: (item?.count || 1) - 1
                }
            }

            return item
        })

        setBags(updatedBag)
        toast.success('Decrease successfully!')
    }

    const handleRemoveItem = () => {

        const updatedBag = bag.filter(item => item?.id !== data?.id)

        setBags(updatedBag)

        toast.success('Remove successfully!')
    }

    return (
        <li className='flex lg:flex-row flex-col lg:items-center justify-between gap-3 p-4 bg-white border-b last:border-0'>
            <div className='flex items-center gap-3 w-[70%]'>
                <div
                    className='w-12 h-16'
                    style={{
                        '--from-color': data?.color,
                        '--to-color': '#f4ecdd'
                    } as React.CSSProperties}
                >
                    <div
                        className="w-full h-full relative bg-[linear-gradient(to_bottom_right,var(--from-color),var(--to-color))] rounded-xs p-4"
                    >

                    </div>
                </div>

                <div className='flex flex-col'>
                    <h3 className='font-bold text-sm'>{data?.title}</h3>
                    <span className='text-xs italic'>{data?.author}</span>

                    <span className='text-primary cursor-pointer hover:underline text-xs mt-2' onClick={handleRemoveItem}>Remove</span>
                </div>
            </div>

            <div className='border px-2 gap-4 rounded-2xl flex items-center justify-around mr-12'>
                <Button
                    variant={'ghost'}
                    className='cursor-pointer'
                    onClick={handleDecrease}
                    disabled={data?.count === 1}
                >
                    <Minus width={12} />
                </Button>

                <span className='text-sm'>{data?.count}</span>

                <Button
                    variant={'ghost'}
                    className='cursor-pointer'
                    onClick={handleIncrease}
                >
                    <Plus width={12} />
                </Button>
            </div>

            <div className='flex items-center w-[15%]'>
                <span className='text-primary font-bold'>${total}</span>
            </div>
        </li>
    )
}

export default ProductCartItem