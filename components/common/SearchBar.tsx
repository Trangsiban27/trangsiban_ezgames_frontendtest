import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex items-center min-w-60 max-w-60 gap-2 bg-white border rounded-4xl py-1 px-2'>
            <Search width={12} />

            <input
                type="text"
                className='focus:outline-none text-xs'
                placeholder='Search filters, authors... '
            />
        </div>
    )
}

export default SearchBar