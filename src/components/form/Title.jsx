import React from 'react'

export default function Title({ children }) {
    return (
        <div>
            <h1 className='text-xl dark:text-white text-primary font-semibold text-center'>{children}</h1>
        </div>
    )
}
