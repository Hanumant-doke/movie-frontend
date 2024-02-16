import React from 'react'

export default function FormInput({ name, placeholder, label, ...rest }) {
    return (
        <div>
            <label className='text-white font-semibold' htmlFor={name}>{label}</label>
            <input type='text' id={name} name={name} className='bg-transparent rounded border-2 border-dark-subtle 
                    focus:border-white p-1 text-white  w-full text-lg outline-none'
                {...rest} placeholder={placeholder}
            />
        </div>
    )
}
