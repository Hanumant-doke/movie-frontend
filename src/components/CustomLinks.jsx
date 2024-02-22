import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLinks({ to, children }) {
    return (
        <div>
            <Link className='dark:text-dark-subtle dark:hover:text-white text-light-subtle
            transition hover:text-primary' to={to}>{children}</Link>
        </div>
    )
}
