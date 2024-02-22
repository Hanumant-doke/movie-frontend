import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLinks from '../CustomLinks'
import { commonModalClasses } from '../../utils/theme'
import FormContainer from '../form/FormContainer'

export default function Signup() {
    return (
        <FormContainer>
            <Container>
                <form className={commonModalClasses + ' w-80'}>
                    <Title>Sign up</Title>
                    <FormInput label="Name" placeholder='hanumant' name='name' />
                    <FormInput label="Email" placeholder='hanumant@gmail.com' name='email' />
                    <FormInput label="Password" placeholder='********' name='Password' />
                    <Submit value="Sign up" />
                    <div className="flex justify-between">
                        <CustomLinks to="/auth/forget-password">Forget Password</CustomLinks>
                        <CustomLinks to="/auth/signin">Sign in</CustomLinks>
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}
