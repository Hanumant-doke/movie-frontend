import React from 'react'

export default function Submit({ value }) {
    return (
        <div>
            <input type='submit' className='w-full rounded dark:bg-white bg-secondary  text-white 
            hover:bg-opacity-70 transition font-semibold
            text-lg dark:text-secondary cursor-pointer p-1' value={value} />
        </div>
    )
}
