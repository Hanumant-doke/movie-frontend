import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import { Link } from 'react-router-dom'
import CustomLinks from '../CustomLinks'

export default function Signin() {
    return (
        <div className='fixed inset-0 bg-primary -z-10 flex justify-center items-center'>
            <Container>
                <form className='bg-secondary rounded p-6 w-80 space-y-6'>
                    <Title>Sign in</Title>
                    <FormInput label="Email" placeholder='hanumant@gmail.com' name='email' />
                    <FormInput label="Password" placeholder='********' name='Password' />
                    <Submit value="Sign in" />

                    <div className="flex justify-between">
                        <CustomLinks to="/auth/forget-password">Forget Password</CustomLinks>
                        <CustomLinks to="/auth/signup">Sign up</CustomLinks>
                    </div>
                </form>
            </Container>
        </div>
    )
}
