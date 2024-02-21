import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import CustomLinks from '../CustomLinks'
import Submit from '../form/Submit'

export default function ConfirmPassword() {
    return (
        <div className='fixed inset-0 bg-primary -z-10 flex justify-center items-center'>
            <Container>
                <form className='bg-secondary rounded p-6 w-96 space-y-6'>
                    <Title>Enter New Password</Title>
                    <FormInput label="New Passord"
                        placeholder='********'
                        name='newPassword'
                        type="password"
                    />
                    <FormInput label="Confirm Passord"
                        placeholder='********'
                        name='confirmPassword'
                        type="password"
                    />
                    <Submit value="Confirm Password" />
                </form>
            </Container>
        </div>
    )
}
