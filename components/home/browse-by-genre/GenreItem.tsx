import React from 'react'

const GenreItem = ({ data }: any) => {
    return (
        <div
            className=""
            style={{
                '--from-color': data?.color,
                '--to-color': '#f4ecdd'
            } as React.CSSProperties}
        >
            <div className="bg-[linear-gradient(to_bottom_right,var(--from-color),var(--to-color))] w-full h-24 p-4 rounded-sm flex flex-col justify-between">
                <h4 className='text-white font-bold'>{data?.name}</h4>

                <span className='text-white text-xs'>{data?.count} titles</span>
            </div>
        </div>
    )
}

export default GenreItem