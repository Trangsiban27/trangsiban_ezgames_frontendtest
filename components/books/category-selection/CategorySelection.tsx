import React from 'react'

interface Props {
    categories: any,
    selected: any,
    onSelected: (value: any) => void
}

const CategorySelection = ({ categories, selected, onSelected }: Props) => {

    return (
        <div className='flex items-center flex-wrap gap-3'>
            {categories.map((item: any, index: number) => (
                <div
                    key={index}
                    onClick={() => onSelected(item.value)}
                    className={`border ${selected === item.value ? 'border-primary bg-primary text-white' : 'border-gray-300/60'} rounded-2xl px-4 py-1 text-xs cursor-pointer`}
                >
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    )
}

export default CategorySelection