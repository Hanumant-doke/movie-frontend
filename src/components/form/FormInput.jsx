import React from 'react'

export default function FormInput({ name, placeholder, label, ...rest }) {
    return (
        <div>
            <label className='dark:text-white font-semibold dark:text-dark-subtle text-light-subtle 
            dark:peer-focus:text-white peer-focus:text-primary transition self-start' htmlFor={name}>{label}</label>
            <input type='text' id={name} name={name} className='bg-transparent rounded border-2 dark:border-dark-subtle
            border-light-subtle 
                    dark:focus:border-white focus:border-primary p-1 dark:text-white  w-full text-lg outline-none'
                {...rest}
                placeholder={placeholder}
            />
        </div>
    )
}
