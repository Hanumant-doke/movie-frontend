import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLinks({ to, children }) {
    return (
        <div>
            <Link className='text-dark-subtle hover:text-white' to={to}>{children}</Link>
        </div>
    )
}
