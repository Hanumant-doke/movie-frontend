import React from 'react'
import { BsSunFill } from "react-icons/bs"
import Container from '../Container'

export default function Navbar() {
    return (
        <div className="bg-secondary shadow-sm shadow-gray-500 p-1">
            <Container className="p-2">
                <div className="flex justify-between items-center">
                    <img src='./logo2.jpg' alt='logo' className='h-10 w-44' />
                    <ul className='flex items-center space-x-2'>
                        <li>
                            <button className='bg-dark-subtle p-1 rounded'>
                                <BsSunFill className='text-white' size={24} />
                            </button>
                        </li>
                        <li>
                            <input type='text' className='border-2 border-dark-subtle p-1 rounded
                             bg-transparent text-xl outline-none focus:border-white transition text-white'
                                placeholder='search...' />
                        </li>
                        <li className='text-white font-semibold text-lg'>Login</li>
                    </ul>
                </div>

            </Container>
        </div>
    )
}