import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container'
import Title from '../form/Title'
import Submit from '../form/Submit'

const OTP_LENGTH = 6;

export default function EmailVerification() {
    const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));
    const [activeOtpIndex, setActiveOtpIndex] = useState(0)
    const inputRef = useRef()
    const handleOtpChange = ({ target }, index) => {
        const { value } = target;
        // setOtp([value]);
        setActiveOtpIndex(index + 1)
    }

    useEffect(() => {
        inputRef.current?.focus()
        console.log(inputRef);
    }, [activeOtpIndex])
  
    return (
        <div className='fixed inset-0 bg-primary -z-10 flex justify-center items-center'>
            <Container>
                <form className='bg-secondary rounded p-6 space-y-6'>
                    <div>
                        <Title>Please Enter OTP to verify account</Title>
                        <p className='text-center text-dark-subtle'>OTP has been sent to your email</p>
                    </div>
                    <div className='flex justify-center items-center space-x-4'>
                        {otp.map((__, index) => {
                            return (
                                <input
                                    ref={activeOtpIndex === index ? inputRef : null}
                                    key={index}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    type='number'
                                    value={otp[index] || ''}
                                    className='w-12 h-12 border-2 rounded border-dark-subtle
                             focus:border-white bg-transparent outline-none text-center text-white font-semibold 
                             text-xl spin-button-none' />
                            )
                        })}
                    </div>
                    <Submit value="Send Link" />
                </form>
            </Container>
        </div>
    )
}
